/* Componentes de HTML compartilhados pelas vistas (páginas). */
import { esc, fmt } from './util.js';
import { inline } from './texto.js';
import { feito, href, kanjiDe, real, temConteudo } from './modelo.js';

export function chips(lista, classe = '') {
  if (!Array.isArray(lista) || !lista.length) return '';
  return `<div class="chips">${lista.map((c) => `<span class="chip ${classe}">${esc(c)}</span>`).join('')}</div>`;
}

export function conferirHtml(texto) {
  return texto ? `<div class="conferir"><b>Conferir</b><span>${inline(texto)}</span></div>` : '';
}

export function notaHtml(texto) {
  return texto ? `<p class="nota">${inline(texto)}</p>` : '';
}

/** Linha de números em destaque. `itens` = [[valor, rótulo], ...]. */
export function numeros(itens) {
  return `<div class="numeros">${itens.map(([valor, rotulo]) => `<span><b>${fmt(valor)}</b> ${rotulo}</span>`).join('')}</div>`;
}

/** Barra de progresso a partir de uma contagem ({ total, feitos }). */
export function barra(ct, rotulo = 'estudado') {
  const p = ct.total ? Math.round((ct.feitos / ct.total) * 100) : 0;
  return `<div class="barra" role="img" aria-label="${p}% ${rotulo}"><i style="width:${p}%"></i></div>`;
}

/** Cabeçalho de seção, conteúdo e matéria. `sobre` já deve vir escapado. */
export function cabecalho(no, sobre, extra = '') {
  const d = real(no).def;
  return `<header class="cab"><div><p class="sobre">${sobre}</p><h1>${esc(no.titulo)}</h1>` +
    (d.descricao ? `<p class="lead">${inline(d.descricao)}</p>` : '') + extra +
    `</div><div class="cab-kanji" aria-hidden="true">${esc(kanjiDe(no))}</div></header>`;
}

function estadoHtml(assunto) {
  if (feito(assunto)) return '<span class="estado"><span class="carimbo" title="Estudado">済</span></span>';
  const cheio = temConteudo(assunto);
  return `<span class="estado"><span class="ponto${cheio ? ' cheio' : ''}" title="${cheio ? 'Com conteúdo' : 'Ainda sem conteúdo'}"></span></span>`;
}

export function linhaAssunto(assunto, n) {
  const resumo = assunto.def.resumo ? `<small>${esc(assunto.def.resumo)}</small>` : '';
  return `<li><a href="${href(assunto)}"><span class="n">${String(n).padStart(2, '0')}</span><span class="t">${esc(assunto.titulo)}${resumo}</span>${estadoHtml(assunto)}</a></li>`;
}

export const legendaLista =
  '<div class="legenda-lista">' +
  '<span><i class="ponto"></i> sem conteúdo</span>' +
  '<span><i class="ponto cheio"></i> com conteúdo</span>' +
  '<span><i class="carimbo">済</i> estudado</span>' +
  '</div>';

/** Links "anterior / próximo" no fim da página. */
export function navegar(anterior, proximo, rotuloAnterior, rotuloProximo) {
  if (!anterior && !proximo) return '';
  return '<nav class="navegar" aria-label="Navegação entre itens">' +
    (anterior ? `<a href="${href(anterior)}"><small>← ${rotuloAnterior}</small><span>${esc(anterior.titulo)}</span></a>` : '') +
    (proximo ? `<a class="prox" href="${href(proximo)}"><small>${rotuloProximo} →</small><span>${esc(proximo.titulo)}</span></a>` : '') +
    '</nav>';
}

/** Cabeçalho das páginas especiais (questões, listas, simulados, horas). `sobre` e `lead` aceitam marcação. */
export function cabecalhoRota({ sobre, titulo, lead = '', kanji, extra = '' }) {
  return `<header class="cab"><div><p class="sobre">${esc(sobre)}</p><h1>${esc(titulo)}</h1>` +
    (lead ? `<p class="lead">${inline(lead)}</p>` : '') + extra +
    `</div><div class="cab-kanji" aria-hidden="true">${esc(kanji)}</div></header>`;
}
