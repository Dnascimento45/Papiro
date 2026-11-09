/* Estado compartilhado entre os módulos: avisos de carregamento, progresso e sumário. */
import { CHAVES, memoria } from './util.js';

/* ---------- Avisos de problemas nos arquivos de conteúdo ---------- */
export const problemas = [];
let aoRegistrarProblema = null;

/** Registra uma função chamada a cada novo aviso (usada para redesenhar a página). */
export function aoProblema(fn) {
  aoRegistrarProblema = fn;
}

export function problema(arquivo, msg) {
  problemas.push({ arquivo, msg });
  if (aoRegistrarProblema) aoRegistrarProblema();
}

/* ---------- Progresso e navegação (persistidos no navegador) ---------- */
/** caminho do assunto -> instante (ms) em que foi marcado como estudado. */
export const estudados = memoria.ler(CHAVES.estudados, {});

/** Caminhos dos nós abertos no sumário lateral. */
export const expandidos = new Set(memoria.ler(CHAVES.abertos, []));

export function salvarExpandidos() {
  memoria.gravar(CHAVES.abertos, Array.from(expandidos));
}

/** Página aberta agora: `atual` é o nó da árvore; `rota` é o nome de uma página especial (questoes, horas…). */
export const pagina = { atual: null, rota: null };
