/* Plano de estudos: a pessoa escolhe as matérias e a ordem em que vai estudá-las.
   O que já foi cumprido sai dos assuntos marcados como estudados (não há marcação dupla).
   O plano avisa quando uma matéria vem antes de outra que ela usa como base (pré-requisitos).
   Fica no navegador (localStorage) e entra na cópia da nuvem do perfil. */
import { CHAVES, esc, memoria } from '../nucleo/util.js';
import {
  contagem, cumprido, feito, href, nos, prerequisitosDaMateria, raiz, real,
} from '../nucleo/modelo.js';
import { barra, cabecalhoRota, numeros } from '../interface/componentes.js';
import { confirmar } from '../interface/dialogo.js';

/** Lê o plano salvo; qualquer formato inesperado (null, texto, lista solta) vira plano vazio,
    para nunca travar o caderno nem impedir de salvar de novo. */
function lerPlano() {
  const salvo = memoria.ler(CHAVES.plano, null);
  const lista = salvo && typeof salvo === 'object' && Array.isArray(salvo.materias) ? salvo.materias : [];
  return { materias: lista.filter((c) => typeof c === 'string') };
}

/** { materias: [caminho da matéria, ...] } na ordem escolhida. */
const plano = lerPlano();
const salvar = () => memoria.gravar(CHAVES.plano, plano);

/** Matérias do plano que existem no caderno (uma matéria renomeada some sem quebrar nada). */
export function materiasDoPlano() {
  return plano.materias.map((c) => nos.get(c)).filter((m) => m && m.tipo === 'materia');
}

export function estaNoPlano(materia) {
  return plano.materias.includes(materia.caminho);
}

function gravarOrdem(materias) {
  plano.materias = materias.map((m) => m.caminho);
  salvar();
}

/* ---------- Consultas ---------- */

/** Primeiro assunto ainda não estudado, na ordem do plano. */
export function proximoDoPlano() {
  for (const materia of materiasDoPlano()) {
    const assunto = materia.filhos.find((a) => !feito(a));
    if (assunto) return assunto;
  }
  return null;
}

/** Ordem que respeita os pré-requisitos, mexendo o mínimo na ordem atual.
    Em caso de ciclo (A pede B e B pede A), segue a ordem atual. */
function ordenarPorPrerequisitos(lista) {
  const restantes = lista.slice();
  const saida = [];
  while (restantes.length) {
    const livre = restantes.findIndex((m) => prerequisitosDaMateria(m).every((p) => !restantes.includes(p)));
    saida.push(restantes.splice(Math.max(livre, 0), 1)[0]);
  }
  return saida;
}

/** Para a matéria na posição `i`: pré-requisitos que estão depois dela e os que faltam no plano. */
function conflitos(materia, i, lista) {
  const depois = [];
  const fora = [];
  prerequisitosDaMateria(materia).forEach((p) => {
    const j = lista.indexOf(p);
    if (j > i) depois.push({ materia: p, posicao: j + 1 });
    else if (j < 0 && !cumprido(p)) fora.push(p);
  });
  return { depois, fora };
}

/* ---------- Página ---------- */

const doisDigitos = (n) => String(n).padStart(2, '0');
const trilhaDe = (materia) => `${real(materia.pai).titulo} · ${materia.pai.pai.titulo}`;
const ehConclusa = (ct) => ct.total > 0 && ct.feitos === ct.total;

/** Conteúdos abertos na lista "Adicionar matérias"; sobrevivem ao redesenho depois de um clique. */
let abertos = new Set();

function avisosHtml(materia, i, lista) {
  const { depois, fora } = conflitos(materia, i, lista);
  const itens = [
    ...depois.map((d) => `<li class="atraso"><a href="${href(d.materia)}">${esc(d.materia.titulo)}</a> é base desta matéria, mas está depois (posição ${d.posicao}).</li>`),
    ...fora.map((p) => `<li>Usa <a href="${href(p)}">${esc(p.titulo)}</a> <small>(${esc(real(p.pai).titulo)})</small>, que não está no plano. ` +
      `<button type="button" class="btn-link" data-acao="plano-add" data-materia="${esc(p.caminho)}" aria-label="Adicionar ${esc(p.titulo)} ao plano">Adicionar ao plano</button></li>`),
  ];
  return itens.length ? `<ul class="plano-avisos">${itens.join('')}</ul>` : '';
}

function itemHtml(materia, i, lista) {
  const ct = contagem(materia);
  const nome = esc(materia.titulo);
  const c = esc(materia.caminho);
  const botao = (acao, simbolo, rotulo, desligado) =>
    `<button type="button" class="plano-btn" data-acao="${acao}" data-materia="${c}" aria-label="${rotulo} ${nome}"${desligado ? ' disabled' : ''}>${simbolo}</button>`;
  return `<li class="plano-item${ehConclusa(ct) ? ' concluida' : ''}">` +
    `<span class="n" aria-hidden="true">${doisDigitos(i + 1)}</span>` +
    `<div class="plano-info"><a href="${href(materia)}">${nome}</a><small>${esc(trilhaDe(materia))}</small>` +
    `<div class="plano-progresso">${barra(ct)}<span>${ehConclusa(ct) ? 'Concluída' : `${ct.feitos}/${ct.total} assuntos`}</span></div>` +
    avisosHtml(materia, i, lista) + '</div>' +
    '<div class="plano-acoes">' +
    botao('plano-subir', '↑', 'Subir', i === 0) +
    botao('plano-descer', '↓', 'Descer', i === lista.length - 1) +
    botao('plano-remover', '✕', 'Tirar do plano:', false) +
    '</div></li>';
}

function listaHtml(lista) {
  if (!lista.length) {
    return '<p class="nota">O plano está vazio. Escolha abaixo as matérias que vai estudar; depois ajuste a ordem com as setas.</p>';
  }
  const fora = ordenarPorPrerequisitos(lista).some((m, i) => m !== lista[i]);
  return '<div class="ferramentas">' +
    (fora ? '<button type="button" class="btn" data-acao="plano-ordenar"><span class="kj">順</span>Ordenar pelos pré-requisitos</button>' : '') +
    '<button type="button" class="btn-link" data-acao="plano-limpar">Esvaziar o plano</button></div>' +
    `<ol class="plano-lista">${lista.map((m, i) => itemHtml(m, i, lista)).join('')}</ol>`;
}

function opcoesHtml() {
  return raiz.map((secao) => {
    const conteudos = secao.filhos.filter((c) => !c.ref).map((conteudo) => {
      const noPlano = conteudo.filhos.filter(estaNoPlano).length;
      const materias = conteudo.filhos.map((m) => {
        const ct = contagem(m);
        const acao = estaNoPlano(m)
          ? '<span class="chip">No plano</span>'
          : `<button type="button" class="btn" data-acao="plano-add" data-materia="${esc(m.caminho)}" aria-label="Adicionar ${esc(m.titulo)} ao plano">Adicionar</button>`;
        return `<li><span>${esc(m.titulo)}<small>${ct.feitos}/${ct.total} assuntos estudados</small></span>${acao}</li>`;
      }).join('');
      const resumo = `${conteudo.filhos.length} matérias${noPlano ? ` · ${noPlano} no plano` : ''}`;
      return `<details class="plano-conteudo" data-conteudo="${esc(conteudo.caminho)}"${abertos.has(conteudo.caminho) ? ' open' : ''}>` +
        `<summary>${esc(conteudo.titulo)}<small>${resumo}</small></summary><ul class="plano-opcoes">${materias}</ul></details>`;
    }).join('');
    return `<h3 class="plano-secao">${esc(secao.titulo)}</h3>${conteudos}`;
  }).join('');
}

export function vPlano() {
  const lista = materiasDoPlano();
  const assuntos = lista.flatMap((m) => m.filhos);
  const proximo = proximoDoPlano();
  const extra = numeros([[lista.length, lista.length === 1 ? 'matéria' : 'matérias'], [assuntos.length, 'assuntos'], [assuntos.filter(feito).length, 'estudados']]) +
    (proximo ? `<a class="continuar" href="${href(proximo)}"><span>Próximo do plano</span>${esc(proximo.titulo)}</a>` : '');
  return cabecalhoRota({
    sobre: 'Planejamento',
    titulo: 'Plano de estudos',
    lead: 'Escolha as matérias que vai estudar e a ordem. O progresso vem dos assuntos marcados como estudados, e o plano avisa quando uma matéria vem antes de outra que ela usa como base.',
    kanji: '計',
    extra,
  }) +
    '<h2 class="titulo-sec">Minha ordem</h2>' + listaHtml(lista) +
    '<h2 class="titulo-sec">Adicionar matérias</h2>' + opcoesHtml();
}

/* ---------- Ações (ligadas em eventos.js) ---------- */

/** Guarda quais conteúdos estão abertos, redesenha e devolve o foco a um elemento equivalente. */
function redesenharMantendo({ redesenhar }, seletorFoco) {
  abertos = new Set([...document.querySelectorAll('.plano-conteudo[open]')].map((d) => d.getAttribute('data-conteudo')));
  redesenhar();
  const alvo = seletorFoco && document.querySelector(seletorFoco);
  if (alvo && !alvo.disabled) alvo.focus();
}

const seletor = (acao, caminho) => `[data-acao="${acao}"][data-materia="${CSS.escape(caminho)}"]`;

function mover(el, contexto, delta) {
  const caminho = el.getAttribute('data-materia');
  const lista = materiasDoPlano();
  const i = lista.findIndex((m) => m.caminho === caminho);
  const j = i + delta;
  if (i < 0 || j < 0 || j >= lista.length) return;
  [lista[i], lista[j]] = [lista[j], lista[i]];
  gravarOrdem(lista);
  // Se o botão ficou desligado (chegou ao topo ou ao fim), o foco vai para o botão oposto.
  const oposto = delta < 0 ? 'plano-descer' : 'plano-subir';
  redesenharMantendo(contexto, j === 0 || j === lista.length - 1
    ? seletor(oposto, caminho)
    : seletor(el.getAttribute('data-acao'), caminho));
}

export const acoes = {
  'plano-add': (el, contexto) => {
    const caminho = el.getAttribute('data-materia');
    const materia = nos.get(caminho);
    if (!materia || materia.tipo !== 'materia' || plano.materias.includes(caminho)) return;
    plano.materias.push(caminho);
    salvar();
    // Foco: na lista de opções, o resumo do conteúdo; nos avisos do plano, a nova linha; na página da matéria, o botão "No meu plano".
    let foco = '#conteudo a.btn[href="#plano"]';
    if (el.closest('.plano-conteudo')) foco = `.plano-conteudo[data-conteudo="${CSS.escape(materia.pai.caminho)}"] summary`;
    else if (el.closest('.plano-lista')) foco = seletor('plano-remover', caminho);
    redesenharMantendo(contexto, foco);
  },
  'plano-remover': (el, contexto) => {
    plano.materias = plano.materias.filter((c) => c !== el.getAttribute('data-materia'));
    salvar();
    redesenharMantendo(contexto, '.plano-lista .plano-btn:not([disabled])');
  },
  'plano-subir': (el, contexto) => mover(el, contexto, -1),
  'plano-descer': (el, contexto) => mover(el, contexto, +1),
  'plano-ordenar': (_el, contexto) => {
    gravarOrdem(ordenarPorPrerequisitos(materiasDoPlano()));
    redesenharMantendo(contexto, '.plano-lista .plano-btn:not([disabled])');
  },
  'plano-limpar': async (_el, contexto) => {
    if (!(await confirmar('Tirar todas as matérias do plano? O que você já estudou continua marcado.', { ok: 'Esvaziar', perigo: true }))) return;
    plano.materias = [];
    salvar();
    redesenharMantendo(contexto);
  },
};

/** Botão para a página da matéria: adiciona ao plano ou mostra que já está nele. */
export function botaoPlano(materia) {
  return estaNoPlano(materia)
    ? '<a class="btn feito" href="#plano"><span class="kj">計</span>No meu plano</a>'
    : `<button type="button" class="btn" data-acao="plano-add" data-materia="${esc(materia.caminho)}"><span class="kj">計</span>Adicionar ao plano</button>`;
}
