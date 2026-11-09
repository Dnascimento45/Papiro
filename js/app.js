/* Aplicação: decide qual página mostrar a partir do endereço (#) e a desenha. */
import { CHAVES, esc, memoria } from './util.js';
import { aoProblema, expandidos, pagina, problema, salvarExpandidos, tirarPendentes } from './estado.js';
import { construir, kanjiDe, nos } from './modelo.js';
import { montarBanco } from './banco.js';
import { avisosHtml, vAssunto, vConteudo, vInicio, vMateria, vNaoEncontrado, vSecao } from './vistas.js';
import { ROTAS } from './rotas.js';
import { renderArvore, renderNavegacao, renderPerfilMini } from './sumario.js';
import { ligarEventos } from './eventos.js';
import { aoTique, ligarCronometro } from './horas.js';
import { tiqueSimulado } from './vistas-questoes.js';
import { aoPronta } from './plataforma.js';
import { iniciarRank } from './rank.js';

const VISTAS = { secao: vSecao, conteudo: vConteudo, materia: vMateria, assunto: vAssunto };

let pronto = false;
let geracao = 0;          // cresce a cada desenho; páginas assíncronas usam para saber se ainda estão abertas
let limparPagina = null; // função de limpeza da página especial que está aberta

/** "#a--b--c" -> "a/b/c". */
function caminhoDoHash() {
  let hash = location.hash.replace(/^#/, '');
  try { hash = decodeURIComponent(hash); } catch (e) { /* mantém o texto cru */ }
  return hash.split('--').filter(Boolean).join('/');
}

/** Abre no sumário todos os ancestrais (e o próprio nó, se não for um assunto). */
function expandirAte(no) {
  for (let p = no.pai; p; p = p.pai) expandidos.add(p.caminho);
  if (no.tipo !== 'assunto') expandidos.add(no.caminho);
}

function comAviso(montar) {
  try {
    return montar();
  } catch (e) {
    return `<div class="aviso-bloco"><b>Erro ao montar esta página:</b> ${esc(e.message)}</div>`;
  }
}

export function render() {
  if (limparPagina) limparPagina();
  limparPagina = null;
  const minha = ++geracao;
  const caminho = caminhoDoHash();
  const [primeiro, ...resto] = caminho.split('/');
  const rota = ROTAS[primeiro] || null;

  let no = !rota && caminho ? nos.get(caminho) : null;
  if (no && no.ref) no = no.alvo;
  pagina.atual = no || null;
  pagina.rota = rota ? primeiro : null;
  if (no) expandirAte(no);

  tirarPendentes(); // descarta pedidos de um desenho anterior
  let html;
  if (rota) html = comAviso(() => rota.vista(resto));
  else if (caminho && !no) html = vNaoEncontrado(caminho);
  else html = comAviso(() => (no ? VISTAS[no.tipo](no) : vInicio()));

  document.getElementById('conteudo').innerHTML = avisosHtml() + html;
  document.getElementById('marca-dagua').textContent = rota ? rota.kanji : (no ? kanjiDe(no) : '道');
  document.title = `${rota ? `${rota.titulo} · ` : (no ? `${no.titulo} · ` : '')}Papiro`;
  renderNavegacao();
  renderPerfilMini();
  renderArvore();
  const esperando = tirarPendentes();
  if (esperando.length) {
    // A página pediu dados que ainda estão chegando: redesenha quando chegarem, se ela ainda estiver aberta.
    Promise.allSettled(esperando).then(() => { if (minha === geracao) redesenharNoLugar(); });
  } else if (rota && rota.montar) {
    limparPagina = rota.montar(document.getElementById('conteudo'), resto, () => minha === geracao);
  }

  if (no && no.tipo === 'assunto') memoria.gravar(CHAVES.ultimo, no.caminho);
  salvarExpandidos();
}

/** Redesenha sem mexer na rolagem nem no foco do campo de busca. */
function redesenharNoLugar() {
  const y = window.scrollY;
  render();
  window.scrollTo(0, y);
}

/** Chamado quando todos os arquivos de conteúdo terminaram de carregar. */
export function iniciar() {
  if (pronto) return;
  try {
    construir();
    montarBanco();
  } catch (e) {
    problema('index.html', `erro ao montar a estrutura: ${e.message}`);
  }
  pronto = true;
  aoProblema(render); // avisos que chegarem depois de pronto redesenham a página
  ligarEventos(render);
  ligarCronometro();
  iniciarRank();
  aoPronta(() => { renderNavegacao(); renderPerfilMini(); });
  window.addEventListener('papiro:perfil', renderPerfilMini);
  aoTique(tiqueSimulado);
  render();
}
