/* Componentes de HTML compartilhados pelas vistas (páginas). */
import { esc, fmt } from './util.js';
import { inline } from './texto.js';
import { contagem, cumprido, feito, href, kanjiDe, real, temConteudo } from './modelo.js';

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

/** Item de uma lista de pré-requisitos: link, de onde ele é e se já foi cumprido. */
function itemPrerequisito(no) {
  const ok = cumprido(no);
  let onde = real(no.pai).titulo;
  if (no.tipo !== 'assunto') {
    const ct = contagem(no);
    onde += ` · ${ct.feitos}/${ct.total} assuntos`;
  }
  return `<li${ok ? ' class="ok"' : ''}><a href="${href(no)}">${esc(no.titulo)}</a><small>${esc(onde)}</small>` +
    (ok ? '<span class="carimbo" aria-hidden="true">済</span><span class="sr-only">(estudado)</span>' : '') + '</li>';
}

/** Quadro "Pré-requisitos" de um assunto ou de uma matéria (vazio se não houver). */
export function prerequisitosHtml(lista, { de = 'deste assunto' } = {}) {
  if (!lista.length) return '';
  const faltam = lista.filter((n) => !cumprido(n)).length;
  const situacao = faltam
    ? `Convém estudar antes ${de}. Falta${faltam > 1 ? 'm' : ''} ${faltam} de ${lista.length}.`
    : `Você já estudou a base ${de}.`;
  return `<aside class="prereq${faltam ? '' : ' ok'}" aria-label="Pré-requisitos">` +
    `<p class="prereq-cab"><span class="kj" aria-hidden="true">前</span><b>Pré-requisitos</b><span>${situacao}</span></p>` +
    `<ul>${lista.map(itemPrerequisito).join('')}</ul></aside>`;
}

/** Links "anterior / próximo" no fim da página. */
export function navegar(anterior, proximo, rotuloAnterior, rotuloProximo) {
  if (!anterior && !proximo) return '';
  return '<nav class="navegar" aria-label="Navegação entre itens">' +
    (anterior ? `<a href="${href(anterior)}"><small>← ${rotuloAnterior}</small><span>${esc(anterior.titulo)}</span></a>` : '') +
    (proximo ? `<a class="prox" href="${href(proximo)}"><small>${rotuloProximo} →</small><span>${esc(proximo.titulo)}</span></a>` : '') +
    '</nav>';
}

/** Aviso de que um pedaço da página está chegando (texto ou questões baixados sob demanda).
    Usa a mesma classe do "Carregando o caderno…": os testes esperam ela sumir. */
export function carregandoHtml(texto) {
  return `<div class="carregando" role="status"><span class="kj" aria-hidden="true">道</span>${esc(texto)}</div>`;
}

/** Cabeçalho das páginas especiais (questões, listas, simulados, horas). `sobre` e `lead` aceitam marcação. */
export function cabecalhoRota({ sobre, titulo, lead = '', kanji, extra = '' }) {
  return `<header class="cab"><div><p class="sobre">${esc(sobre)}</p><h1>${esc(titulo)}</h1>` +
    (lead ? `<p class="lead">${inline(lead)}</p>` : '') + extra +
    `</div><div class="cab-kanji" aria-hidden="true">${esc(kanji)}</div></header>`;
}
