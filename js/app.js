/* Aplicação: decide qual página mostrar a partir do endereço (#) e a desenha. */
import { CHAVES, esc, memoria } from './util.js';
import { aoProblema, expandidos, pagina, problema, salvarExpandidos } from './estado.js';
import { construir, kanjiDe, nos } from './modelo.js';
import { avisosHtml, vAssunto, vConteudo, vInicio, vMateria, vNaoEncontrado, vSecao } from './vistas.js';
import { renderArvore, renderMigalhas } from './sumario.js';
import { ligarEventos } from './eventos.js';

const VISTAS = { secao: vSecao, conteudo: vConteudo, materia: vMateria, assunto: vAssunto };

let pronto = false;

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

function htmlDaPagina(caminho, no) {
  try {
    if (caminho && !no) return vNaoEncontrado(caminho);
    if (!no) return vInicio();
    return VISTAS[no.tipo](no);
  } catch (e) {
    return `<div class="aviso-bloco"><b>Erro ao montar esta página:</b> ${esc(e.message)}</div>`;
  }
}

export function render() {
  const caminho = caminhoDoHash();
  let no = caminho ? nos.get(caminho) : null;
  if (no && no.ref) no = no.alvo;
  pagina.atual = no || null;
  if (no) expandirAte(no);

  document.getElementById('conteudo').innerHTML = avisosHtml() + htmlDaPagina(caminho, no);
  document.getElementById('marca-dagua').textContent = no ? kanjiDe(no) : '道';
  document.title = `${no ? `${no.titulo} · ` : ''}Papiro`;
  renderMigalhas(no);
  renderArvore();

  if (no && no.tipo === 'assunto') memoria.gravar(CHAVES.ultimo, no.caminho);
  salvarExpandidos();
}

/** Chamado quando todos os arquivos de conteúdo terminaram de carregar. */
export function iniciar() {
  if (pronto) return;
  try {
    construir();
  } catch (e) {
    problema('index.html', `erro ao montar a estrutura: ${e.message}`);
  }
  pronto = true;
  aoProblema(render); // avisos que chegarem depois de pronto redesenham a página
  ligarEventos(render);
  render();
}
