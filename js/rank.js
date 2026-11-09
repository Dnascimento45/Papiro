/* Ranking de horas estudadas e questões respondidas entre quem usa o artefato.
   Cada pessoa grava só o próprio documento (rank/<id>) no banco compartilhado e só quem
   aceitou participar aparece. O banco guarda apenas ids e números; os nomes vêm da conta. */
import { CHAVES, esc, fotoSegura, memoria } from './util.js';
import { aoDadosMudarem, perfil, salvarPerfil } from './estado.js';
import { estatisticas } from './banco.js';
import { duracao, totaisHoras } from './horas.js';
import { AVISO_SO_NO_ARTEFATO, aoPronta, plat, podeRank } from './plataforma.js';
import { cabecalhoRota } from './componentes.js';

const INTERVALO_MS = 60 * 1000;   // no máximo uma gravação por minuto
const TEMPO_CARGA_MS = 10 * 1000;

let ultimoEnvio = 0;
let agendado = null;
let enviando = false;
let periodo = 'semana';           // 'semana' | 'total' (só afeta as horas)

const numero = (v) => (Number.isFinite(+v) ? Math.max(0, +v) : 0);

/* ---------- Envio dos meus números ---------- */

function meusNumeros() {
  const h = totaisHoras();
  const q = estatisticas();
  return {
    apelido: perfil.apelido.trim().slice(0, 30),
    foto: fotoSegura(perfil.foto),
    horasTotal: h.total,
    horasSemana: h.semana,
    semana: h.semanaDesde,
    respondidas: q.respondidas,
    tentativas: q.tentativas,
    acertos: q.acertos,
  };
}

/** Grava meus números se mudaram (ou se `forcar`). Nunca lança erro. Devolve '' ou o código do erro. */
export async function sincronizarRank({ forcar = false } = {}) {
  if (!perfil.participa || !podeRank() || enviando) return '';
  const dados = meusNumeros();
  const assinatura = JSON.stringify(dados);
  if (!forcar && assinatura === memoria.ler(CHAVES.rankUltimo, '')) return '';
  enviando = true;
  try {
    await plat.db.doc(`rank/${plat.eu.id}`).set({ ...dados, atualizadoEm: Date.now() });
    memoria.gravar(CHAVES.rankUltimo, assinatura);
    ultimoEnvio = Date.now();
    return '';
  } catch (e) {
    return (e && e.code) || 'erro';
  } finally {
    enviando = false;
  }
}

/** Tira meu documento do ranking (ao deixar de participar). */
async function sairDoRank() {
  perfil.participa = false;
  salvarPerfil();
  memoria.gravar(CHAVES.rankUltimo, '');
  if (!podeRank()) return '';
  try {
    await plat.db.doc(`rank/${plat.eu.id}`).delete();
    return '';
  } catch (e) {
    return (e && e.code) || 'erro';
  }
}

function agendar() {
  if (agendado || !perfil.participa || !podeRank()) return;
  const espera = Math.max(INTERVALO_MS - (Date.now() - ultimoEnvio), 2000);
  agendado = setTimeout(() => {
    agendado = null;
    sincronizarRank();
  }, espera);
}

/** Liga a atualização automática do ranking quando os dados de estudo mudam. */
export function iniciarRank() {
  aoDadosMudarem(agendar);
  aoPronta(() => sincronizarRank());
}

/* ---------- Página ---------- */

const COPIA_ERRO = {
  invalid_argument: 'Não consegui gravar seus números. Peça acesso de colaborador ao dono do artefato.',
  quota_exceeded: 'O banco do artefato está cheio.',
  revoked: 'Seu acesso a este artefato mudou. Abra o link de novo.',
};

export function vRank() {
  return cabecalhoRota({
    sobre: 'Acompanhamento',
    titulo: 'Ranking',
    lead: 'Quem mais estudou e quem mais respondeu questões. Só aparece quem escolheu participar.',
    kanji: '位',
    extra: '<div id="rank-corpo"><p class="nota">Conectando…</p></div>',
  });
}

function quadro(titulo, linhas, nomes, fotos, meuId) {
  if (!linhas.length) return `<section class="quadro"><h3>${titulo}</h3><p class="nota">Ninguém por aqui ainda.</p></section>`;
  const maior = Math.max(...linhas.map((l) => l.valor), 1);
  const itens = linhas.map((l, i) => `<li class="${l.id === meuId ? 'eu' : ''}"><span class="pos">${i + 1}</span>` +
    `<img class="avatar" src="${esc(fotos[l.id])}" alt="" width="26" height="26">` +
    `<span class="nome">${esc(nomes[l.id])}${l.id === meuId ? ' <small>(você)</small>' : ''}</span>` +
    `<span class="valor">${esc(l.texto)}</span><i style="width:${Math.round((l.valor / maior) * 100)}%"></i></li>`).join('');
  return `<section class="quadro"><h3>${titulo}</h3><ol>${itens}</ol></section>`;
}

async function desenhar(corpo, docs, vivo) {
  const meuId = plat.eu.id;
  const segunda = totaisHoras().semanaDesde;
  const pessoas = docs.map((d) => ({ id: d.id, ...d.data() }));
  let perfis = {};
  try { perfis = await plat.user.profiles(pessoas.map((p) => p.id)); } catch (e) { /* nomes ficam genéricos */ }
  if (!vivo()) return;
  const nomes = {};
  const fotos = {};
  pessoas.forEach((p) => { nomes[p.id] = String(p.apelido || (perfis[p.id] && perfis[p.id].name) || 'Alguém').slice(0, 40); });
  pessoas.forEach((p) => { fotos[p.id] = fotoSegura(p.foto) || (perfis[p.id] && perfis[p.id].avatarUrl) || ''; });

  const horas = pessoas.map((p) => {
    const seg = periodo === 'semana' ? (p.semana === segunda ? numero(p.horasSemana) : 0) : numero(p.horasTotal);
    return { id: p.id, valor: seg, texto: duracao(seg) };
  }).sort((a, b) => b.valor - a.valor);
  const questoes = pessoas.map((p) => {
    const t = numero(p.tentativas);
    const pct = t ? Math.round((numero(p.acertos) / t) * 100) : 0;
    return { id: p.id, valor: t, texto: `${t} (${pct}% certas)` };
  }).sort((a, b) => b.valor - a.valor);

  const botao = (id, rotulo) => `<button type="button" class="seg-btn" data-periodo="${id}" aria-pressed="${periodo === id}">${rotulo}</button>`;
  corpo.innerHTML = '<div class="rank-barra"><div class="seg" role="group" aria-label="Período das horas">' + botao('semana', 'Esta semana') + botao('total', 'Total') + '</div>' +
    '<button type="button" class="btn-link" data-rank="sair">Sair do ranking</button></div>' +
    '<div class="quadros">' + quadro('Horas estudadas', horas, nomes, fotos, meuId) + quadro('Questões respondidas', questoes, nomes, fotos, meuId) + '</div>' +
    '<p class="aviso-edital">Os números se atualizam sozinhos enquanto você estuda (no máximo uma vez por minuto).</p>';
}

/** Monta a página do ranking. Devolve a função que desfaz a assinatura ao sair da página. */
export function montarRank(raiz, _partes, vivo) {
  const corpo = raiz.querySelector('#rank-corpo');
  let cancelar = () => {};
  let temporizador = null;

  const mensagem = (html) => { corpo.innerHTML = html; };

  const mostrar = () => {
    cancelar();
    if (!vivo()) return;
    if (!podeRank()) {
      mensagem(`<p class="nota">${esc(AVISO_SO_NO_ARTEFATO)}</p>`);
      return;
    }
    if (!perfil.participa) {
      mensagem('<div class="vazio-box"><span class="kj" aria-hidden="true">位</span><p>Ao participar, seu tempo de estudo e a quantidade de questões respondidas ficam visíveis para quem tem acesso a este artefato. Nada além disso é compartilhado.</p>' +
        '<button type="button" class="btn feito" data-rank="entrar"><span class="kj">済</span>Participar do ranking</button><p class="form-msg" role="alert"></p></div>');
      return;
    }
    mensagem('<p class="nota">Carregando o ranking…</p>');
    temporizador = setTimeout(() => {
      if (vivo()) corpo.insertAdjacentHTML('afterbegin', '<p class="form-msg">Não consegui alcançar o ranking ainda. Os dados podem estar desatualizados.</p>');
    }, TEMPO_CARGA_MS);
    let ultimosDocs = [];
    cancelar = plat.db.collection('rank').onSnapshot((snap) => {
      clearTimeout(temporizador);
      ultimosDocs = snap.docs;
      desenhar(corpo, ultimosDocs, vivo);
    }, () => {
      clearTimeout(temporizador);
      if (vivo()) mensagem('<p class="form-msg">Não foi possível carregar o ranking agora. Tente de novo mais tarde.</p>');
    });
    corpo.redesenharDocs = () => desenhar(corpo, ultimosDocs, vivo);
  };

  corpo.addEventListener('click', async (e) => {
    const periodoBtn = e.target.closest('[data-periodo]');
    if (periodoBtn) {
      periodo = periodoBtn.getAttribute('data-periodo');
      if (corpo.redesenharDocs) corpo.redesenharDocs();
      return;
    }
    const acao = e.target.closest('[data-rank]');
    if (!acao) return;
    if (acao.getAttribute('data-rank') === 'entrar') {
      perfil.participa = true;
      salvarPerfil();
      const erro = await sincronizarRank({ forcar: true });
      if (erro) {
        perfil.participa = false;
        salvarPerfil();
        const msg = corpo.querySelector('.form-msg');
        if (msg) msg.textContent = COPIA_ERRO[erro] || 'Não consegui entrar no ranking agora. Tente de novo.';
        return;
      }
      mostrar();
    } else if (acao.getAttribute('data-rank') === 'sair') {
      await sairDoRank();
      mostrar();
    }
  });

  aoPronta(mostrar);
  return () => {
    cancelar();
    clearTimeout(temporizador);
  };
}
