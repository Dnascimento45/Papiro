/* Sincronização automática do progresso com a conta do Claude.
   O progresso continua no localStorage (rápido e funciona sem rede); este módulo copia para o
   banco da conta alguns segundos depois de cada mudança e confere a conta ao abrir e ao voltar
   para o app. Fora do artefato (sem conta) não faz nada.

   Como evita sobrescrever dados:
   - papiro.backupEm: versão da conta que este navegador recebeu ou enviou por último.
   - papiro.pendente: este navegador mudou algo que a conta ainda não tem.
   - Conta mais nova e nada pendente aqui -> aplica a da conta e recarrega.
   - Conta mais nova e há mudança pendente aqui (dois aparelhos usados sem sincronizar) -> pergunta. */
import { CHAVES, memoria } from '../nucleo/util.js';
import { trava } from '../nucleo/estado.js';
import { aoPronta, plat, temIdentidade } from './plataforma.js';
import { confirmar } from '../interface/dialogo.js';

/* O que entra na cópia. Cada item é guardado como texto JSON, para não depender
   dos nomes das chaves (que têm "/" e "#"). */
const ITENS_BACKUP = ['estudados', 'respostas', 'listas', 'simulados', 'horas', 'plano', 'perfil'];
const ITENS_DE_ESTUDO = ['estudados', 'respostas', 'listas', 'simulados', 'horas', 'plano'];
const CHAVES_BACKUP = new Set(ITENS_BACKUP.map((item) => CHAVES[item]));
const LIMITE_BYTES = 230 * 1024;
const HISTORICO_MAXIMO = 30;
const ESPERA_ENVIO_MS = 10 * 1000;      // junta várias mudanças num envio só
const ESPERA_ERRO_MS = 60 * 1000;
const INTERVALO_CONFERIR_MS = 30 * 1000;

const caminhoBackup = () => `data/users/${plat.eu.id}/progresso`;
const podeSincronizar = () => !!(plat.db && temIdentidade());

let ativa = false;          // a conferência inicial terminou e as mudanças já são enviadas
let ocupada = false;
let temporizador = null;
let alteracoes = 0;         // conta mudanças, para saber se algo mudou durante um envio
let pendente = memoria.ler(CHAVES.pendente, false) === true;
let ultimoErro = '';
let ultimaConferencia = 0;

/* ---------- Cópia (também usada pelos botões do perfil) ---------- */

function montarPacote() {
  const pacote = {};
  ITENS_BACKUP.forEach((item) => {
    let texto = '';
    try { texto = localStorage.getItem(CHAVES[item]) || ''; } catch (e) { /* sem acesso */ }
    if (item === 'simulados' && texto) {
      try {
        const s = JSON.parse(texto);
        s.historico = (s.historico || []).slice(0, HISTORICO_MAXIMO);
        texto = JSON.stringify(s);
      } catch (e) { /* mantém o texto original */ }
    }
    pacote[item] = texto;
  });
  return pacote;
}

export async function salvarNaNuvem() {
  const pacote = montarPacote();
  const tamanho = new Blob([JSON.stringify(pacote)]).size;
  if (tamanho > LIMITE_BYTES) return { erro: 'Seus dados passaram do limite de uma cópia. Apague simulados antigos ou listas que não usa mais.' };
  const agora = Date.now();
  try {
    await plat.db.doc(caminhoBackup()).set({ versao: 1, salvoEm: agora, ...pacote });
    memoria.gravar(CHAVES.backupEm, agora);
    return { salvoEm: agora };
  } catch (e) {
    return { erro: e && e.code === 'invalid_argument' ? 'Sua conta não pode gravar neste artefato. Peça acesso de colaborador ao dono.' : 'Não consegui salvar agora. Tente de novo.' };
  }
}

/** Devolve a cópia da conta, null se não existe ou undefined se não deu para consultar. */
export async function lerDaNuvem() {
  try {
    const snap = await plat.db.doc(caminhoBackup()).get();
    return snap.exists ? snap.data() : null;
  } catch (e) {
    return undefined;
  }
}

/** Valida o texto de cada item e só então grava no navegador. Devolve true se gravou. */
export function aplicarPacote(dados) {
  const novos = {};
  for (const item of ITENS_BACKUP) {
    const texto = dados[item];
    if (texto === undefined) continue; // cópias antigas não tinham todos os itens
    if (typeof texto !== 'string') return false;
    if (texto) {
      try { JSON.parse(texto); } catch (e) { return false; }
    }
    novos[item] = texto;
  }
  try {
    ITENS_BACKUP.forEach((item) => {
      if (!(item in novos)) return;
      if (novos[item]) localStorage.setItem(CHAVES[item], novos[item]);
      else localStorage.removeItem(CHAVES[item]);
    });
    return true;
  } catch (e) {
    return false;
  }
}

/* ---------- Sincronização ---------- */

const textoVazio = (t) => !t || t === '{}' || t === '[]' || t === 'null';

function localTemDados() {
  const pacote = montarPacote();
  return ITENS_DE_ESTUDO.some((item) => !textoVazio(pacote[item]));
}

function marcarPendente(valor) {
  pendente = valor;
  memoria.gravar(CHAVES.pendente, valor);
}

function agendarEnvio(espera = ESPERA_ENVIO_MS) {
  if (!ativa || temporizador || trava.gravacao) return;
  temporizador = setTimeout(() => {
    temporizador = null;
    sincronizar();
  }, espera);
}

function aoGravar(chave) {
  if (!CHAVES_BACKUP.has(chave) || trava.gravacao) return;
  alteracoes += 1;
  if (!pendente) marcarPendente(true);
  agendarEnvio();
}

async function enviar() {
  const marca = alteracoes;
  const r = await salvarNaNuvem();
  if (r.erro) {
    ultimoErro = r.erro;
    agendarEnvio(ESPERA_ERRO_MS);
    return;
  }
  ultimoErro = '';
  if (marca === alteracoes) marcarPendente(false);
  else agendarEnvio();          // mudou durante o envio
}

/** Aplica a cópia da conta neste navegador e recarrega para o caderno ler os dados novos. */
function puxar(nuvem) {
  trava.gravacao = true;        // nada pode regravar dados antigos por cima
  if (!aplicarPacote(nuvem)) {
    trava.gravacao = false;
    return;
  }
  memoria.gravar(CHAVES.backupEm, nuvem.salvoEm);
  memoria.gravar(CHAVES.pendente, false);
  location.reload();
}

const PERGUNTA_CONFLITO = 'Este aparelho e outro foram usados sem sincronizar, e os dados são diferentes. ' +
  'Usar os da sua conta (o que está aqui será substituído)? Se cancelar, os deste aparelho passam a valer na conta.';

/** Compara este navegador com a conta e resolve: envia, recebe ou pergunta. Nunca lança erro. */
async function sincronizar() {
  if (ocupada || !podeSincronizar() || trava.gravacao) return;
  ocupada = true;
  ultimaConferencia = Date.now();
  try {
    const nuvem = await lerDaNuvem();
    if (nuvem === undefined) {            // sem rede ou sem acesso: tenta de novo mais tarde
      ultimoErro = 'Não consegui consultar a conta agora.';
      return;
    }
    const ultima = memoria.ler(CHAVES.backupEm, 0);
    const temMudanca = pendente || (ultima === 0 && localTemDados());

    if (!nuvem) {
      ativa = true;
      if (temMudanca) await enviar();
      return;
    }
    if (nuvem.salvoEm <= ultima) {        // este navegador já tem a versão da conta
      ativa = true;
      if (temMudanca) await enviar();
      return;
    }
    // A conta tem uma versão mais nova que a deste navegador.
    if (!temMudanca) {
      puxar(nuvem);
      return;
    }
    if (await confirmar(PERGUNTA_CONFLITO, { ok: 'Usar os da conta', perigo: true })) {
      puxar(nuvem);
    } else {
      ativa = true;
      await enviar();
    }
  } finally {
    ocupada = false;
  }
}

/** Estado para o perfil mostrar: { ativa, pendente, ultimaEm, erro }. */
export function estadoSincronia() {
  return { ativa, pendente, ultimaEm: memoria.ler(CHAVES.backupEm, 0), erro: ultimoErro };
}

/** Liga a sincronização assim que a plataforma responder. Sem conta, não faz nada. */
export function iniciarSincronia() {
  memoria.aoGravar(aoGravar);
  aoPronta(() => {
    if (!podeSincronizar()) return;
    sincronizar();
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        if (ativa && pendente) sincronizar();   // tenta enviar antes de o app ir para o fundo
      } else if (Date.now() - ultimaConferencia > INTERVALO_CONFERIR_MS) {
        sincronizar();                           // voltou para o app: vê se o outro aparelho mudou algo
      }
    });
  });
}
