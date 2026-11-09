/* Blocos de conteúdo: cada tipo vira um pedaço de HTML.
   Tipos desconhecidos ou blocos com erro mostram um aviso no lugar, sem quebrar a página.
   Referência de cada tipo: conteudos/_MODELO.js. */
import { LETRAS, esc, indiceDaCorreta } from '../nucleo/util.js';
import { formula, inline, md } from './texto.js';

let contadorQuestoes = 0;

/** Reinicia a numeração das questões; chamado a cada página de assunto. */
export function reiniciarQuestoes() {
  contadorQuestoes = 0;
}

/* ---------- Peças reutilizadas ---------- */

export function moldura(kanji, rotulo, classe, corpo) {
  return `<section class="bloco ${classe}"><header class="bloco-cab"><span class="kj" aria-hidden="true">${kanji}</span><span>${esc(rotulo)}</span></header><div class="bloco-corpo">${corpo}</div></section>`;
}

export function prosa(texto) {
  return `<div class="prosa">${md(texto)}</div>`;
}

function legenda(texto) {
  return texto ? `<p class="legenda">${inline(texto)}</p>` : '';
}

function tabelaHtml(cabecalho, linhas) {
  if (!Array.isArray(linhas)) throw new Error('"linhas" precisa ser uma lista de listas.');
  const thead = Array.isArray(cabecalho)
    ? `<thead><tr>${cabecalho.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead>`
    : '';
  const tbody = linhas
    .map((l) => `<tr>${(Array.isArray(l) ? l : [l]).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
    .join('');
  return `<div class="tabela-wrap"><table>${thead}<tbody>${tbody}</tbody></table></div>`;
}

const PALAVRAS_PYTHON = new Set(['def', 'return', 'for', 'in', 'if', 'elif', 'else', 'while', 'import', 'from', 'as',
  'and', 'or', 'not', 'is', 'lambda', 'class', 'with', 'break', 'continue', 'try', 'except', 'True', 'False', 'None']);
const FUNCOES_PYTHON = new Set(['print', 'range', 'len', 'round', 'sum', 'min', 'max', 'abs', 'int', 'float', 'str',
  'list', 'dict', 'set', 'sorted', 'enumerate', 'zip', 'map', 'filter', 'any', 'all', 'pow', 'divmod', 'tuple', 'format']);

/** Realce simples de sintaxe: comentários, textos, palavras-chave, funções embutidas e números. */
function realcarPython(codigo) {
  const padrao = /(#[^\n]*)|("""[\s\S]*?"""|'''[\s\S]*?'''|[fr]?"(?:\\.|[^"\\\n])*"|[fr]?'(?:\\.|[^'\\\n])*')|([A-Za-z_][A-Za-z0-9_]*)|(\d+(?:\.\d+)?)/g;
  let html = '';
  let ultimo = 0;
  codigo.replace(padrao, (trecho, comentario, texto, nome, numero, pos) => {
    html += esc(codigo.slice(ultimo, pos));
    ultimo = pos + trecho.length;
    let classe = '';
    if (comentario) classe = 'py-com';
    else if (texto) classe = 'py-str';
    else if (nome && PALAVRAS_PYTHON.has(nome)) classe = 'py-kw';
    else if (nome && FUNCOES_PYTHON.has(nome)) classe = 'py-fn';
    else if (numero) classe = 'py-num';
    html += classe ? `<span class="${classe}">${esc(trecho)}</span>` : esc(trecho);
    return trecho;
  });
  return html + esc(codigo.slice(ultimo));
}

/** Aviso "Conferir" de uma questão (ex.: cita lei revogada). Mesmo visual do conferirHtml das páginas. */
export function conferirDaQuestao(b) {
  return b.conferir ? `<div class="conferir"><b>Conferir</b><span>${inline(b.conferir)}</span></div>` : '';
}

/* ---------- Tipos de bloco ---------- */

const BLOCOS = {
  texto: (b) => `<div class="prosa">${b.titulo ? `<h2>${inline(b.titulo)}</h2>` : ''}${md(b.texto)}</div>`,

  resumo: (b) => moldura('要', b.titulo || 'Resumo', 'callout', prosa(b.texto)),
  dica: (b) => moldura('技', b.titulo || 'Dica', 'callout', prosa(b.texto)),
  atencao: (b) => moldura('注', b.titulo || 'Atenção', 'callout atencao', prosa(b.texto)),

  formula(b) {
    const linhas = Array.isArray(b.expr) ? b.expr : [b.expr];
    const corpo = `<div class="formula">${linhas.map((l) => `<div>${formula(esc(l))}</div>`).join('')}</div>${legenda(b.legenda)}`;
    return moldura('式', b.titulo || 'Fórmula', '', corpo);
  },

  passos(b) {
    if (!Array.isArray(b.itens)) throw new Error('"itens" precisa ser uma lista.');
    const itens = b.itens.map((i) => `<li><div>${inline(i)}</div></li>`).join('');
    return moldura('順', b.titulo || 'Passo a passo', '', `<ol class="passos prosa">${itens}</ol>`);
  },

  exemplo(b) {
    let corpo = `<div class="prosa enunciado">${md(b.enunciado)}</div>${b.tabela ? tabelaHtml(b.tabela.cabecalho, b.tabela.linhas) : ''}`;
    if (b.resolucao || b.resposta) {
      const resposta = b.resposta ? `<div class="resposta"><small>Resposta</small><span>${inline(b.resposta)}</span></div>` : '';
      corpo += `<details${b.aberto ? ' open' : ''}><summary>Ver resolução</summary><div class="prosa resolucao">${md(b.resolucao)}</div>${resposta}</details>`;
    }
    return moldura('例', b.titulo || 'Exemplo', 'exemplo', corpo);
  },

  tabela: (b) => moldura('表', b.titulo || 'Tabela', '', tabelaHtml(b.cabecalho, b.linhas) + legenda(b.legenda)),

  python(b) {
    if (!b.codigo) throw new Error('falta o "codigo" da demonstração.');
    const codigo = String(b.codigo).replace(/^\n+/, '').replace(/\s+$/, '');
    const saida = b.saida != null
      ? `<div class="codigo saida"><div class="codigo-barra"><span>Saída</span></div><pre>${esc(String(b.saida).replace(/^\n+/, '').replace(/\s+$/, ''))}</pre></div>`
      : '';
    // O código e a saída ficam recolhidos; só o texto e a legenda aparecem de início.
    const aba = `<details class="codigo-aba"><summary>Ver código em Python</summary>` +
      `<div class="codigo"><div class="codigo-barra"><span>Python</span><button type="button" data-acao="copiar-codigo">Copiar código</button></div><pre><code>${realcarPython(codigo)}</code></pre></div>` +
      saida +
      '<p class="codigo-nota">Para rodar: copie e cole no <a href="https://colab.research.google.com" target="_blank" rel="noopener">Google Colab</a> ou no Python do seu computador.</p></details>';
    return moldura('蛇', b.titulo || 'Demonstração em Python', 'python',
      (b.texto ? prosa(b.texto) : '') + legenda(b.legenda) + aba);
  },

  lei(b) {
    let ref = '';
    if (b.referencia) {
      ref = b.url
        ? `<a href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.referencia)}</a>`
        : esc(b.referencia);
      ref = `<p class="ref">${ref}</p>`;
    }
    return moldura('法', b.titulo || 'Texto de lei', 'lei', `<blockquote>${md(b.texto)}</blockquote>${ref}`);
  },

  imagem(b) {
    if (!b.src) throw new Error('falta o "src" da imagem.');
    let legendaHtml = '';
    if (b.legenda || b.credito) {
      legendaHtml = `<figcaption>${inline(b.legenda || '')}${b.credito ? ` <span class="credito">· ${esc(b.credito)}</span>` : ''}</figcaption>`;
    }
    const img = `<img src="${esc(b.src)}" alt="${esc(b.alt || b.legenda || '')}" loading="lazy">`;
    return moldura('図', b.titulo || 'Imagem', '', `<figure>${img}${legendaHtml}</figure>`);
  },

  svg(b) {
    // O código SVG vem dos arquivos de conteúdo (do próprio autor), por isso não é escapado.
    const legendaHtml = b.legenda ? `<figcaption>${inline(b.legenda)}</figcaption>` : '';
    return moldura('図', b.titulo || 'Ilustração', '', `<figure><div class="svg-wrap">${String(b.codigo || '')}</div>${legendaHtml}</figure>`);
  },

  flashcards(b) {
    if (!Array.isArray(b.cartas)) throw new Error('"cartas" precisa ser uma lista de { frente, verso }.');
    const cartas = b.cartas
      .map((c) => `<button class="carta" type="button" aria-pressed="false"><small>Pergunta</small><span class="frente">${inline(c.frente)}</span><span class="verso prosa">${md(c.verso)}</span></button>`)
      .join('');
    return moldura('札', b.titulo || 'Flashcards · clique para virar', '', `<div class="cartas">${cartas}</div>`);
  },

  questao(b) {
    if (!Array.isArray(b.alternativas) || !b.alternativas.length) throw new Error('"alternativas" precisa ser uma lista.');
    const correta = indiceDaCorreta(b);
    const meta = [b.banca, b.ano, b.cargo].filter(Boolean).map(esc).join(' · ');
    const id = `q${++contadorQuestoes}`;
    const alternativas = b.alternativas
      .map((a, i) => `<li><button type="button" data-alt="${i}"><b>${LETRAS[i]}</b><span>${inline(a)}</span></button></li>`)
      .join('');
    const corpo = (meta ? `<div class="q-meta">${meta}</div>` : '') + conferirDaQuestao(b) +
      prosa(b.enunciado) +
      `<ol class="q-alts" data-correta="${correta}" data-q="${id}" data-qid="${esc(b._id || '')}">${alternativas}</ol>` +
      `<div class="q-retorno" hidden><div class="veredito"></div>${prosa(b.comentario || '')}<button type="button" class="q-refazer">Refazer</button></div>`;
    return moldura('問', b.titulo || 'Questão', 'b-questao', corpo);
  },

  link(b) {
    const itens = b.itens || [{ titulo: b.titulo || b.url, url: b.url, nota: b.nota }];
    const lista = itens
      .map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.titulo || l.url)}</a>${l.nota ? `<small>${inline(l.nota)}</small>` : ''}</li>`)
      .join('');
    return moldura('参', b.rotulo || 'Para consultar', '', `<ul class="links">${lista}</ul>`);
  },
};

function aviso(titulo, mensagem) {
  return `<div class="aviso-bloco"><b>${titulo}:</b> ${mensagem}</div>`;
}

/** Desenha um bloco; nunca lança erro (um bloco ruim não derruba a página). */
export function renderBloco(bloco, indice) {
  try {
    if (!bloco || typeof bloco !== 'object') throw new Error('o bloco precisa ser um objeto { tipo: ..., }.');
    const desenhar = BLOCOS[bloco.tipo];
    if (!desenhar) {
      return aviso(`Bloco ${indice + 1}`, `o tipo "${esc(bloco.tipo)}" não existe. Tipos válidos: ${Object.keys(BLOCOS).join(', ')}.`);
    }
    return desenhar(bloco);
  } catch (e) {
    return aviso(`Bloco ${indice + 1} (${esc(bloco && bloco.tipo)})`, esc(e.message));
  }
}
