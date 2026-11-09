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

/* ---------- Carga sob demanda ---------- */
/* Uma vista que precisa de dados ainda não baixados chama aguardar(promessa) e desenha
   um "Carregando…". Quando a promessa termina, app.js redesenha a página (se ela ainda
   estiver aberta). Quem carrega guarda o resultado, então o segundo desenho já encontra tudo. */
const pendentes = [];

export function aguardar(promessa) {
  pendentes.push(promessa);
}

export function tirarPendentes() {
  return pendentes.splice(0);
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

/* ---------- Perfil (só neste navegador; o ranking usa o que está aqui) ---------- */
/** participa: entra no ranking; apelido: nome opcional exibido no lugar do nome da conta. */
export const perfil = memoria.ler(CHAVES.perfil, { participa: false, apelido: '' });

export function salvarPerfil() {
  memoria.gravar(CHAVES.perfil, perfil);
}

/* ---------- Aviso de que os dados de estudo mudaram (horas, respostas) ---------- */
const ouvintesDados = new Set();

export function aoDadosMudarem(fn) {
  ouvintesDados.add(fn);
}

export function dadosMudaram() {
  ouvintesDados.forEach((fn) => fn());
}

/** Quando true, nada deve regravar o localStorage (usado ao restaurar uma cópia e recarregar). */
export const trava = { gravacao: false };
