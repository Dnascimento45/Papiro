/* Vistas: uma função por tipo de página. Cada uma recebe um nó e devolve HTML. */
import { CHAVES, esc, memoria } from './util.js';
import { inline } from './texto.js';
import { problemas } from './estado.js';
import { reiniciarQuestoes, renderBloco } from './blocos.js';
import {
  assuntosDe, contagem, feito, href, kanjiDe, nos, raiz, real, secaoDe, temConteudo, todosAssuntos,
} from './modelo.js';
import {
  barra, cabecalho, chips, conferirHtml, legendaLista, linhaAssunto, navegar, notaHtml, numeros,
} from './componentes.js';

const ASSUNTO_MODELO = 'nucleo/matematica/aritmetica/regra-de-tres';
const MAPA = [['Seção', 'Núcleo Comum'], ['Conteúdo', 'Matemática'], ['Matéria', 'Aritmética'], ['Assunto', 'Regra de três']];

/** Contagens padrão exibidas no topo de seção, conteúdo e matéria. */
function resumoNumeros(ct, itensIniciais) {
  return numeros([...itensIniciais, [ct.total, 'assuntos'], [ct.comConteudo, 'com conteúdo'], [ct.feitos, 'estudados']]);
}

/* ---------- Início ---------- */

export function vInicio() {
  const todos = todosAssuntos();
  const nConteudos = [...nos.values()].filter((n) => n.tipo === 'conteudo' && !n.ref).length;
  const ultimo = nos.get(memoria.ler(CHAVES.ultimo, ''));

  const topo =
    '<section class="hero"><div><p class="sobre">Concursos de nível médio · Paraná e federal</p>' +
    '<h1>Papiro</h1>' +
    '<p class="lead">O edital-base dos blocos A e C num só lugar. Cada assunto tem o seu endereço: seção, conteúdo, matéria e assunto.</p>' +
    numeros([[raiz.length, 'seções'], [nConteudos, 'conteúdos'], [todos.length, 'assuntos'], [todos.filter(feito).length, 'estudados']]) +
    (ultimo && ultimo.tipo === 'assunto' ? `<a class="continuar" href="${href(ultimo)}"><span>Continuar</span>${esc(ultimo.titulo)}</a>` : '') +
    '</div><div class="hero-kanji" aria-hidden="true">道<small>DŌ · CAMINHO</small></div></section>';

  const cartoes = raiz.map((s) => {
    const ct = contagem(s);
    return `<a class="card-secao" href="${href(s)}"><span class="selo" aria-hidden="true">${esc(s.def.kanji || '道')}</span><div><h2>${esc(s.titulo)}</h2>` +
      (s.def.descricao ? `<p>${inline(s.def.descricao)}</p>` : '') +
      `<div class="rodape"><span>${s.filhos.length} conteúdos · ${ct.total} assuntos</span>${barra(ct)}<span>${ct.feitos}/${ct.total}</span></div></div></a>`;
  }).join('');

  const modelo = nos.get(ASSUNTO_MODELO);
  const mapa = MAPA.map(([nivel, nome]) => `<span class="nivel"><small>${nivel}</small><b>${nome}</b></span>`).join('<span class="sep" aria-hidden="true">→</span>') +
    (modelo ? `<a class="btn" href="${href(modelo)}"><span class="kj">例</span>Ver o assunto-modelo</a>` : '');

  return topo +
    `<h2 class="titulo-sec">Seções</h2><div class="grade-secoes">${cartoes}</div>` +
    `<h2 class="titulo-sec">Como o caderno se organiza</h2><div class="mapa">${mapa}</div>` +
    '<p class="aviso-edital">A estrutura reúne os conteúdos mais cobrados nesses concursos. Itens com a marca <b>Conferir</b> ainda dependem do edital oficial ou do site da banca.</p>';
}

/* ---------- Seção ---------- */

export function vSecao(secao) {
  const ct = contagem(secao);
  const extra = resumoNumeros(ct, [[secao.filhos.length, 'conteúdos']]) +
    notaHtml(secao.def.nota) + conferirHtml(secao.def.conferir);
  let html = cabecalho(secao, 'Seção', extra);
  if (Array.isArray(secao.def.concursos) && secao.def.concursos.length) {
    html += `<h2 class="titulo-sec">Concursos desta seção</h2>${chips(secao.def.concursos)}`;
  }
  const tiles = secao.filhos.map((c) => {
    const r = real(c);
    const cc = contagem(c);
    return `<a class="tile" href="${href(c)}"><span class="kj" aria-hidden="true">${esc(kanjiDe(c))}</span><h3>${esc(c.titulo)}</h3>` +
      (c.ref ? `<span class="ref">↗ compartilhado com ${esc(secaoDe(r).titulo)}</span>` : '') +
      `<span class="meta">${r.filhos.length} matérias · ${cc.total} assuntos</span>${barra(cc)}</a>`;
  }).join('');
  return `${html}<h2 class="titulo-sec">Conteúdos</h2><div class="grade-conteudos">${tiles}</div>`;
}

/* ---------- Conteúdo ---------- */

export function vConteudo(conteudo) {
  const secao = secaoDe(conteudo);
  const extra = resumoNumeros(contagem(conteudo), [[conteudo.filhos.length, 'matérias']]) +
    chips(conteudo.def.concursos, 'shu') + notaHtml(conteudo.def.nota) + conferirHtml(conteudo.def.conferir);

  let n = 0;
  const materias = conteudo.filhos.map((m) => {
    const cm = contagem(m);
    return `<section class="materia"><div class="materia-cab"><h2><a href="${href(m)}">${esc(m.titulo)}</a></h2><span>${cm.feitos}/${cm.total}</span></div>` +
      conferirHtml(m.def.conferir) +
      `<ul class="lista-assuntos">${m.filhos.map((a) => linhaAssunto(a, ++n)).join('')}</ul></section>`;
  }).join('');

  return cabecalho(conteudo, esc(secao.titulo), extra) + materias + legendaLista;
}

/* ---------- Matéria ---------- */

export function vMateria(materia) {
  const conteudo = materia.pai;
  const i = conteudo.filhos.indexOf(materia);
  const extra = resumoNumeros(contagem(materia), []) + notaHtml(materia.def.nota) + conferirHtml(materia.def.conferir);

  return cabecalho(materia, esc(conteudo.titulo), extra) +
    `<ul class="lista-assuntos">${materia.filhos.map((a, k) => linhaAssunto(a, k + 1)).join('')}</ul>` + legendaLista +
    navegar(conteudo.filhos[i - 1], conteudo.filhos[i + 1], 'Matéria anterior', 'Próxima matéria');
}

/* ---------- Assunto ---------- */

function fontesHtml(fontes) {
  if (!Array.isArray(fontes) || !fontes.length) return '';
  const itens = fontes.map((f) => (typeof f === 'string'
    ? `<li>${inline(f)}</li>`
    : `<li><a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.titulo || f.url)}</a></li>`)).join('');
  return `<section class="fontes"><h2>Fontes</h2><ul>${itens}</ul></section>`;
}

function assuntoVazio(caminho) {
  return '<div class="vazio-box"><span class="kj" aria-hidden="true">空</span>' +
    '<p>Este assunto ainda não tem conteúdo. Para preenchê-lo, crie um arquivo em <code>conteudos/textos/</code> usando o caminho abaixo.</p>' +
    `<div class="caminho"><code id="caminho-assunto">ESTUDO.assunto("${esc(caminho)}", { blocos: [ ] });</code><button type="button" data-acao="copiar">Copiar</button></div></div>`;
}

export function vAssunto(assunto) {
  const materia = assunto.pai;
  const conteudo = materia.pai;
  const d = assunto.def;
  const lista = assuntosDe(conteudo);
  const i = lista.indexOf(assunto);
  const estudado = feito(assunto);

  let html = `<header class="cab"><div><p class="sobre">${esc(conteudo.titulo)} · ${esc(materia.titulo)}</p><h1>${esc(assunto.titulo)}</h1>` +
    (d.resumo ? `<p class="lead">${inline(d.resumo)}</p>` : '') +
    `<div class="ferramentas"><button type="button" class="btn${estudado ? ' feito' : ''}" data-acao="estudado" aria-pressed="${estudado}"><span class="kj">済</span>${estudado ? 'Estudado' : 'Marcar como estudado'}</button>` +
    (d.incidencia ? `<span class="incid">Incidência <b>${esc(d.incidencia)}</b></span>` : '') + '</div>' +
    notaHtml(d.nota) + conferirHtml(d.conferir) +
    `</div><div class="cab-kanji" aria-hidden="true">${esc(kanjiDe(assunto))}</div></header>`;

  if (temConteudo(assunto)) {
    reiniciarQuestoes();
    html += `<div class="blocos">${assunto.blocos.map(renderBloco).join('')}</div>`;
  } else {
    html += assuntoVazio(assunto.caminho);
  }
  return html + fontesHtml(d.fontes) + navegar(lista[i - 1], lista[i + 1], 'Assunto anterior', 'Próximo assunto');
}

/* ---------- Outras ---------- */

export function vNaoEncontrado(caminho) {
  return '<header class="cab"><div><p class="sobre">Endereço não encontrado</p><h1>Esta página não existe</h1>' +
    `<p class="lead">O endereço <code>${esc(caminho)}</code> não corresponde a nenhum item. Ele pode ter sido renomeado. Use o sumário ou a busca para encontrá-lo.</p>` +
    '<div class="ferramentas"><a class="btn" href="#"><span class="kj">道</span>Voltar ao início</a></div></div></header>';
}

/** Faixa de avisos sobre arquivos de conteúdo com problema (vazia se não houver). */
export function avisosHtml() {
  if (!problemas.length) return '';
  const itens = problemas.map((p) => `<li><code>${esc(p.arquivo)}</code>: ${esc(p.msg)}</li>`).join('');
  return `<details class="problemas" open><summary>${problemas.length} ${problemas.length > 1 ? 'avisos' : 'aviso'} nos arquivos de conteúdo</summary><ul>${itens}</ul><p>O restante do caderno continua funcionando.</p></details>`;
}
