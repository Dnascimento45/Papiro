/* Sumário lateral: navegação das ferramentas, árvore de conteúdo e busca. */
import { esc, fmt, norm } from './util.js';
import { expandidos, pagina } from './estado.js';
import { feito, href, kanjiDe, nos, raiz, real, todosAssuntos } from './modelo.js';
import { ROTAS } from './rotas.js';

const SETA = '<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
const LIMITE_BUSCA = 80;

/* ---------- Árvore ---------- */

function botaoSeta(no, aberto) {
  const acao = aberto ? 'Recolher' : 'Expandir';
  return `<button type="button" class="arv-seta" data-alternar="${esc(no.caminho)}" aria-expanded="${aberto}" aria-label="${acao} ${esc(no.titulo)}">${SETA}</button>`;
}

function itemArvore(no, nivel) {
  const filhos = (no.tipo === 'assunto' || no.ref) ? [] : no.filhos;
  const aberto = expandidos.has(no.caminho);
  const ativo = pagina.atual && (pagina.atual === no || (no.ref && pagina.atual === real(no)));

  const kanji = (no.tipo === 'secao' || no.tipo === 'conteudo')
    ? `<span class="kj" aria-hidden="true">${esc(kanjiDe(no))}</span>`
    : '';
  let extra = '';
  if (no.tipo === 'assunto') extra = feito(no) ? '<span class="feito-mini" title="Estudado">済</span>' : '';
  else if (no.ref) extra = '<span class="x" title="Compartilhado">↗</span>';

  const seta = filhos.length ? botaoSeta(no, aberto) : '<span class="arv-seta vazio"></span>';
  const subitens = filhos.length && aberto
    ? `<ul>${filhos.map((f) => itemArvore(f, nivel + 1)).join('')}</ul>`
    : '';

  return `<li class="n-${no.tipo}${ativo ? ' ativo' : ''}"><div class="arv-linha" style="--nivel:${nivel}">${seta}` +
    `<a href="${href(no)}"${ativo ? ' aria-current="page"' : ''}>${kanji}<span class="t">${esc(no.titulo)}</span>${extra}</a></div>${subitens}</li>`;
}

export function renderArvore() {
  const el = document.getElementById('arvore');
  const rolagem = el.scrollTop;
  const q = norm(document.getElementById('campo-busca').value).trim();

  el.innerHTML = q ? resultadosBusca(q) : `<ul class="arv">${raiz.map((s) => itemArvore(s, 0)).join('')}</ul>`;
  el.scrollTop = rolagem;

  // Mantém o item ativo visível dentro do sumário.
  const ativo = el.querySelector('[aria-current="page"]');
  if (ativo && !q) {
    const r = ativo.getBoundingClientRect();
    const caixa = el.getBoundingClientRect();
    if (r.top < caixa.top || r.bottom > caixa.bottom) ativo.scrollIntoView({ block: 'center' });
  }

  const todos = todosAssuntos();
  document.getElementById('progresso-geral').textContent = `${todos.filter(feito).length} de ${fmt(todos.length)} estudados`;
}

/* ---------- Busca ---------- */

/** Texto dos blocos de um assunto, normalizado e guardado em cache para buscas repetidas. */
function textoDosBlocos(assunto) {
  if (assunto._txt == null) {
    try {
      assunto._txt = norm(JSON.stringify(assunto.blocos || []));
    } catch (e) {
      assunto._txt = '';
    }
  }
  return assunto._txt;
}

function resultadosBusca(q) {
  const termos = q.split(/\s+/).filter(Boolean);
  const contem = (texto) => termos.every((t) => texto.includes(t));
  const noTitulo = [];
  const noTexto = [];

  nos.forEach((n) => {
    if (n.tipo === 'secao' || n.ref) return;
    if (contem(norm(n.titulo))) noTitulo.push(n);
    else if (n.tipo === 'assunto' && contem(textoDosBlocos(n))) noTexto.push(n);
  });

  const lista = noTitulo.concat(noTexto).slice(0, LIMITE_BUSCA);
  if (!lista.length) return `<p class="res-vazio">Nada encontrado para “${esc(q)}”.</p>`;

  const itens = lista.map((n) => {
    const trilha = [];
    for (let p = n.pai; p; p = p.pai) trilha.unshift(p.titulo);
    const marca = noTexto.includes(n) ? ' <mark>· no texto</mark>' : '';
    return `<li><a href="${href(n)}">${esc(n.titulo)}${marca}<small>${esc(trilha.join(' · '))}</small></a></li>`;
  });
  return `<ul class="res-busca">${itens.join('')}</ul>`;
}

/* ---------- Navegação das ferramentas ---------- */

/** Links fixos acima da árvore: Início e as páginas especiais. */
export function renderNavegacao() {
  const itens = [['', 'Início', '道'], ...Object.entries(ROTAS).map(([nome, r]) => [nome, r.rotulo, r.kanji])];
  const ativa = pagina.rota || (pagina.atual ? null : '');
  document.getElementById('navegacao').innerHTML = itens.map(([nome, rotulo, kanji]) =>
    `<a href="#${nome}"${ativa === nome ? ' aria-current="page"' : ''}><span class="kj" aria-hidden="true">${kanji}</span>${rotulo}</a>`).join('');
}
