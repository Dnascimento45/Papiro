/* Perfil: a conta do Claude vinculada ao Papiro, apelido, participação no ranking e
   cópia do progresso na nuvem (para passar de um aparelho para outro).
   O vínculo é a própria conta que abriu o artefato; nenhum dado pessoal é pedido. */
import { CHAVES, esc, fotoSegura, memoria } from './util.js';
import { perfil, salvarPerfil, trava } from './estado.js';
import { AVISO_SO_NO_ARTEFATO, aoPronta, plat, podeRank, temIdentidade } from './plataforma.js';
import { sincronizarRank } from './rank.js';
import { confirmar } from './dialogo.js';
import { cabecalhoRota } from './componentes.js';

/* O que entra na cópia. Cada item é guardado como texto JSON, para não depender
   dos nomes das chaves (que têm "/" e "#"). */
const ITENS_BACKUP = ['estudados', 'respostas', 'listas', 'simulados', 'horas', 'perfil'];
const LIMITE_BYTES = 230 * 1024;
const HISTORICO_MAXIMO = 30;

const caminhoBackup = () => `data/users/${plat.eu.id}/progresso`;
const formatarData = (ms) => (ms ? new Date(ms).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : 'nunca');

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

async function salvarNaNuvem() {
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

async function lerDaNuvem() {
  try {
    const snap = await plat.db.doc(caminhoBackup()).get();
    return snap.exists ? snap.data() : null;
  } catch (e) {
    return undefined;
  }
}

/** Valida o texto de cada item e só então grava no navegador. Devolve true se gravou. */
function aplicarPacote(dados) {
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

/* ---------- Página ---------- */

export function vPerfil() {
  return cabecalhoRota({
    sobre: 'Conta',
    titulo: 'Perfil',
    lead: 'A conta do Claude com que você abriu este artefato fica vinculada ao seu progresso. Nenhum dado pessoal, como data de nascimento, é pedido.',
    kanji: '人',
    extra: '<div id="perfil-corpo"><p class="nota">Conectando…</p></div>',
  });
}

/** Foto exibida: a escolhida no Papiro ou, se não houver, a da conta. */
function fotoDoPerfil() {
  return fotoSegura(perfil.foto) || (plat.eu ? plat.eu.avatarUrl : '');
}

/** Lê a imagem escolhida, recorta o centro em quadrado e reduz para 128×128 px (JPEG). */
async function reduzirFoto(arquivo) {
  if (!arquivo.type.startsWith('image/')) throw new Error('Escolha um arquivo de imagem (JPEG, PNG, WebP ou GIF).');
  if (arquivo.size > 15 * 1024 * 1024) throw new Error('A imagem passa de 15 MB. Escolha uma menor.');
  const url = URL.createObjectURL(arquivo);
  try {
    const img = await new Promise((ok, falha) => {
      const i = new Image();
      i.onload = () => ok(i);
      i.onerror = () => falha(new Error('Não consegui abrir essa imagem. Tente outra.'));
      i.src = url;
    });
    const lado = Math.min(img.naturalWidth, img.naturalHeight);
    const tela = document.createElement('canvas');
    tela.width = 128;
    tela.height = 128;
    tela.getContext('2d').drawImage(img, (img.naturalWidth - lado) / 2, (img.naturalHeight - lado) / 2, lado, lado, 0, 0, 128, 128);
    return tela.toDataURL('image/jpeg', 0.85);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function avisarPerfilMudou() {
  window.dispatchEvent(new Event('papiro:perfil'));
}

function cartaoConta() {
  const eu = plat.eu;
  return '<section class="perfil-bloco"><h2 class="titulo-sec">Conta</h2><div class="perfil-conta">' +
    `<img class="avatar" src="${esc(fotoDoPerfil())}" alt="Sua foto de perfil" width="64" height="64">` +
    `<div><b>${esc(eu.name || 'Conta do Claude')}</b><small>Vinculada a esta conta do Claude</small>` +
    '<div class="perfil-foto-acoes"><label class="btn" for="perfil-foto">Trocar foto</label>' +
    '<input id="perfil-foto" class="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/gif">' +
    (fotoSegura(perfil.foto) ? '<button type="button" class="btn-link" data-perfil="remover-foto">Usar a foto da conta</button>' : '') +
    '</div></div></div><p class="form-msg" id="perfil-msg-foto" role="status"></p>' +
    '<p class="nota">A foto aparece no menu e, se você participa, no ranking.</p></section>';
}
function blocoRanking() {
  return '<section class="perfil-bloco"><h2 class="titulo-sec">Ranking</h2>' +
    '<form class="form-linha" data-perfil="apelido"><label><span>Apelido no ranking (opcional)</span>' +
    `<input id="perfil-apelido" name="apelido" type="text" maxlength="30" value="${esc(perfil.apelido)}" placeholder="Deixe em branco para usar o nome da conta" autocomplete="off"></label>` +
    '<button class="btn" type="submit">Salvar</button></form>' +
    `<p class="nota">${perfil.participa ? 'Você está participando do ranking.' : 'Você ainda não participa do ranking.'} <a href="#rank">Abrir o ranking</a></p>` +
    '<p class="form-msg" id="perfil-msg-apelido" role="status"></p></section>';
}

function blocoNuvem(backup) {
  const quando = backup === undefined ? 'não consegui consultar agora' : (backup ? formatarData(backup.salvoEm) : 'nenhuma cópia ainda');
  return '<section class="perfil-bloco"><h2 class="titulo-sec">Progresso na nuvem</h2>' +
    '<p class="nota">Salve uma cópia do que está neste navegador (estudados, respostas, listas, simulados e horas) e restaure em outro aparelho. A cópia é só sua.</p>' +
    `<p class="nota">Última cópia: <b id="perfil-quando">${esc(quando)}</b></p>` +
    '<div class="ferramentas"><button type="button" class="btn" data-perfil="salvar"><span class="kj">時</span>Salvar agora</button>' +
    `<button type="button" class="btn" data-perfil="restaurar"${backup ? '' : ' disabled'}>Restaurar neste navegador</button></div>` +
    '<p class="form-msg" id="perfil-msg-nuvem" role="status"></p></section>';
}

export function montarPerfil(raiz, _partes, vivo) {
  const corpo = raiz.querySelector('#perfil-corpo');
  let backup = null;

  const desenhar = () => {
    corpo.innerHTML = cartaoConta() + blocoRanking() + blocoNuvem(backup);
  };
  const msg = (id, texto) => { const el = corpo.querySelector(id); if (el) el.textContent = texto; };

  aoPronta(async () => {
    if (!vivo()) return;
    if (!temIdentidade() || !plat.db) {
      corpo.innerHTML = `<p class="nota">${esc(AVISO_SO_NO_ARTEFATO)}</p>`;
      return;
    }
    backup = await lerDaNuvem();
    if (vivo()) desenhar();
  });

  corpo.addEventListener('submit', async (e) => {
    if (e.target.getAttribute('data-perfil') !== 'apelido') return;
    e.preventDefault();
    perfil.apelido = String(new FormData(e.target).get('apelido') || '').trim().slice(0, 30);
    salvarPerfil();
    msg('#perfil-msg-apelido', 'Apelido salvo.');
    if (perfil.participa && podeRank()) await sincronizarRank({ forcar: true });
  });

  const fotoMudou = async (texto) => {
    salvarPerfil();
    avisarPerfilMudou();
    desenhar();
    msg('#perfil-msg-foto', texto);
    if (perfil.participa && podeRank()) await sincronizarRank({ forcar: true });
  };

  corpo.addEventListener('change', async (e) => {
    if (e.target.id !== 'perfil-foto' || !e.target.files.length) return;
    const arquivo = e.target.files[0];
    e.target.value = '';
    try {
      perfil.foto = await reduzirFoto(arquivo);
      if (vivo()) await fotoMudou('Foto atualizada.');
    } catch (erro) {
      msg('#perfil-msg-foto', erro.message);
    }
  });

  corpo.addEventListener('click', async (e) => {
    const acao = e.target.closest('[data-perfil]');
    if (!acao) return;
    const nome = acao.getAttribute('data-perfil');
    if (nome === 'remover-foto') {
      perfil.foto = '';
      await fotoMudou('Voltou para a foto da conta.');
      return;
    }
    if (nome === 'salvar') {
      msg('#perfil-msg-nuvem', 'Salvando…');
      const r = await salvarNaNuvem();
      if (!vivo()) return;
      if (r.erro) { msg('#perfil-msg-nuvem', r.erro); return; }
      backup = { salvoEm: r.salvoEm };
      desenhar();
      msg('#perfil-msg-nuvem', 'Cópia salva.');
    } else if (nome === 'restaurar') {
      const dados = await lerDaNuvem();
      if (!dados) { msg('#perfil-msg-nuvem', 'Não encontrei uma cópia para restaurar.'); return; }
      const quando = formatarData(dados.salvoEm);
      if (!(await confirmar(`Trocar os dados deste navegador pela cópia de ${quando}? O que está aqui agora será substituído.`, { ok: 'Restaurar', perigo: true }))) return;
      trava.gravacao = true; // impede o cronômetro de regravar horas antigas por cima
      if (aplicarPacote(dados)) {
        msg('#perfil-msg-nuvem', 'Restaurado. Recarregando…');
        setTimeout(() => location.reload(), 400);
      } else {
        trava.gravacao = false;
        msg('#perfil-msg-nuvem', 'A cópia está incompleta ou corrompida; nada foi alterado.');
      }
    }
  });

  return () => {};
}
