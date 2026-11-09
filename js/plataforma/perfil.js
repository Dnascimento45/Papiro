/* Perfil: a conta do Claude vinculada ao Papiro, apelido, participação no ranking e
   cópia do progresso na nuvem (para passar de um aparelho para outro).
   O vínculo é a própria conta que abriu o artefato; nenhum dado pessoal é pedido. */
import { esc, fotoSegura } from '../nucleo/util.js';
import { perfil, salvarPerfil, trava } from '../nucleo/estado.js';
import { AVISO_SO_NO_ARTEFATO, aoPronta, plat, podeRank, temIdentidade } from './plataforma.js';
import { sincronizarRank } from './rank.js';
import { aplicarPacote, estadoSincronia, lerDaNuvem, salvarNaNuvem } from './sincronia.js';
import { confirmar } from '../interface/dialogo.js';
import { cabecalhoRota } from '../interface/componentes.js';

const formatarData = (ms) => (ms ? new Date(ms).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : 'nunca');

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
  const s = estadoSincronia();
  const situacao = s.erro ? s.erro : (s.pendente ? 'Há mudanças a enviar; elas vão para a conta em alguns segundos.' : 'Tudo o que você fez está na sua conta.');
  return '<section class="perfil-bloco"><h2 class="titulo-sec">Progresso na nuvem</h2>' +
    '<p class="nota">O progresso (estudados, respostas, listas, simulados, horas e plano de estudos) é <b>gravado sozinho na sua conta</b> e aparece em qualquer aparelho em que você abrir o Papiro. A cópia é só sua.</p>' +
    `<p class="nota" id="perfil-situacao">${esc(situacao)}</p>` +
    `<p class="nota">Última cópia: <b id="perfil-quando">${esc(quando)}</b></p>` +
    '<p class="nota">Os botões abaixo são para quando você quiser forçar: "Salvar agora" envia já; "Restaurar" troca os dados deste navegador pelos da conta.</p>' +
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
