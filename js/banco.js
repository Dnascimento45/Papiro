/* Banco de questões: reúne os blocos `questao` de todos os assuntos e guarda,
   no navegador, as respostas, as listas e os simulados.
   Nada aqui mexe na tela; as páginas ficam em vistas-questoes.js. */
import { CHAVES, memoria, norm } from './util.js';
import { nos } from './modelo.js';
import { dadosMudaram } from './estado.js';
import { indiceDaCorreta } from './blocos.js';

/* ---------- Banco (montado a partir do conteúdo) ---------- */

/** Cada item: { id, bloco, assunto, materia, conteudo, secao, banca, ano, cargo, correta, texto, prova }.
    Questões autorais vêm dos blocos `questao` dos textos (só dos textos já baixados: js/carga.js).
    Questões de provas vêm dos JSON de questoes/ (js/provas.js) e não têm assunto nem matéria
    (assunto e materia = null): o arquivo de origem só diz a matéria do edital. */
export const banco = [];
const porId = new Map();
const porAssunto = new Map(); // caminho do assunto -> [questões]
const deProvas = [];          // guardadas à parte: montarBanco() refaz só as autorais

/** Varre os assuntos e cadastra cada bloco `questao` válido. Chamado de novo a cada lote de textos baixado. */
export function montarBanco() {
  banco.length = 0;
  porId.clear();
  porAssunto.clear();
  montarAutorais();
  deProvas.forEach((q) => { banco.push(q); porId.set(q.id, q); });
}

/** Cadastra questões de provas que chegaram de um arquivo JSON. */
export function adicionarDeProvas(lista, { conteudo, banca }) {
  lista.forEach((item) => {
    if (!item || porId.has(item.id) || !Array.isArray(item.alternativas)) return;
    const bloco = {
      tipo: 'questao', _id: item.id, banca, ano: item.ano || '',
      enunciado: item.enunciado, alternativas: item.alternativas, correta: item.correta, conferir: item.conferir,
    };
    const q = {
      id: item.id, bloco, assunto: null, materia: null, conteudo, secao: conteudo.pai, prova: true,
      banca, ano: item.ano || '', cargo: '', correta: item.correta,
      texto: norm([item.enunciado, ...item.alternativas, conteudo.titulo].join(' ')),
    };
    deProvas.push(q);
    banco.push(q);
    porId.set(q.id, q);
  });
}

function montarAutorais() {
  nos.forEach((assunto) => {
    if (assunto.tipo !== 'assunto') return;
    let n = 0;
    assunto.blocos.forEach((bloco) => {
      if (!bloco || bloco.tipo !== 'questao') return;
      n++;
      try {
        const correta = indiceDaCorreta(bloco);
        // Id estável: o definido no bloco (`id`) ou "caminho-do-assunto#ordem".
        // Se reordenar as questões de um assunto, fixe um `id` para não perder o histórico.
        bloco._id = bloco.id ? String(bloco.id) : `${assunto.caminho}#${n}`;
        const materia = assunto.pai;
        const conteudo = materia.pai;
        const q = {
          id: bloco._id,
          bloco,
          assunto,
          materia,
          conteudo,
          secao: conteudo.pai,
          banca: bloco.banca ? String(bloco.banca) : '',
          ano: bloco.ano || '',
          cargo: bloco.cargo || '',
          correta,
          texto: norm([bloco.enunciado, ...bloco.alternativas, assunto.titulo, materia.titulo].join(' ')),
        };
        banco.push(q);
        porId.set(q.id, q);
        if (!porAssunto.has(assunto.caminho)) porAssunto.set(assunto.caminho, []);
        porAssunto.get(assunto.caminho).push(q);
      } catch (e) { /* bloco inválido: o aviso aparece na página do próprio assunto */ }
    });
  });
}

export function questaoPorId(id) {
  return porId.get(id);
}

/** Questões de um assunto (lista vazia se não houver). */
export function questoesDoAssunto(caminho) {
  return porAssunto.get(caminho) || [];
}

/* ---------- Respostas ---------- */
/** id da questão -> { c: acertos, e: erros, ok: última resposta foi certa?, t: quando }. */
const respostas = memoria.ler(CHAVES.respostas, {});

export function registrarResposta(id, acertou) {
  const r = respostas[id] || (respostas[id] = { c: 0, e: 0 });
  if (acertou) r.c++; else r.e++;
  r.ok = acertou;
  r.t = Date.now();
  memoria.gravar(CHAVES.respostas, respostas);
  dadosMudaram();
}

/** 'nova' (nunca respondida), 'certa' ou 'errada' (conforme a última resposta). */
export function statusDe(id) {
  const r = respostas[id];
  if (!r) return 'nova';
  return r.ok ? 'certa' : 'errada';
}

/** Conta todas as respostas gravadas, inclusive de questões cujo texto ainda não foi baixado
    (o ranking lê isto logo na abertura, antes de qualquer texto chegar). */
export function estatisticas() {
  const ids = Object.keys(respostas);
  const acertos = ids.reduce((s, id) => s + respostas[id].c, 0);
  const erros = ids.reduce((s, id) => s + respostas[id].e, 0);
  return { respondidas: ids.length, tentativas: acertos + erros, acertos };
}

/* ---------- Listas ---------- */
/** [{ id, nome, qids: [] }] */
const listas = memoria.ler(CHAVES.listas, []);
const salvarListas = () => memoria.gravar(CHAVES.listas, listas);
const novoId = (prefixo) => prefixo + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

export function todasListas() {
  return listas;
}

export function listaPorId(id) {
  return listas.find((l) => l.id === id);
}

export function criarLista(nome) {
  const lista = { id: novoId('l'), nome: nome.trim().slice(0, 60), qids: [] };
  listas.push(lista);
  salvarListas();
  return lista;
}

export function removerLista(id) {
  const i = listas.findIndex((l) => l.id === id);
  if (i >= 0) listas.splice(i, 1);
  salvarListas();
}

/** Devolve false se a questão já estava na lista. */
export function adicionarNaLista(id, qid) {
  const lista = listaPorId(id);
  if (!lista || lista.qids.includes(qid)) return false;
  lista.qids.push(qid);
  salvarListas();
  return true;
}

export function removerDaLista(id, qid) {
  const lista = listaPorId(id);
  if (!lista) return;
  lista.qids = lista.qids.filter((q) => q !== qid);
  salvarListas();
}

/* ---------- Simulados ---------- */
/* atual: simulado em andamento (ou null).
   historico: simulados concluídos, do mais novo para o mais antigo. */
const simulados = memoria.ler(CHAVES.simulados, { atual: null, historico: [] });
const salvarSimulados = () => memoria.gravar(CHAVES.simulados, simulados);

function embaralhar(lista) {
  const a = lista.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function simuladoAtual() {
  return simulados.atual;
}

export function historicoSimulados() {
  return simulados.historico;
}

export function resultadoPorId(id) {
  return simulados.historico.find((s) => s.id === id);
}

/** Sorteia `quantidade` questões de `pool` e começa um simulado. `limiteSeg` 0 = sem limite. */
export function iniciarSimulado({ pool, quantidade, limiteSeg, escopo }) {
  const qids = embaralhar(pool).slice(0, quantidade).map((q) => q.id);
  simulados.atual = { id: novoId('s'), escopo, qids, respostas: {}, limiteSeg: limiteSeg || 0, inicio: Date.now() };
  salvarSimulados();
  return simulados.atual;
}

/** Marca a alternativa; clicar de novo na mesma desmarca. */
export function responderSimulado(qid, indice) {
  const s = simulados.atual;
  if (!s || !s.qids.includes(qid)) return;
  if (s.respostas[qid] === indice) delete s.respostas[qid];
  else s.respostas[qid] = indice;
  salvarSimulados();
}

export function abandonarSimulado() {
  simulados.atual = null;
  salvarSimulados();
}

/** Segundos restantes (com limite) ou decorridos (sem limite). */
export function tempoDoSimulado(s) {
  const decorrido = Math.floor((Date.now() - s.inicio) / 1000);
  return s.limiteSeg ? s.limiteSeg - decorrido : decorrido;
}

/** Corrige, grava as respostas nas estatísticas e move o simulado para o histórico. */
export function finalizarSimulado() {
  const s = simulados.atual;
  if (!s) return null;
  let acertos = 0;
  s.qids.forEach((qid) => {
    const q = porId.get(qid);
    const marcada = s.respostas[qid];
    if (!q || marcada == null) return;
    const certa = marcada === q.correta;
    if (certa) acertos++;
    registrarResposta(qid, certa);
  });
  const fim = Date.now();
  const duracaoSeg = Math.min(Math.round((fim - s.inicio) / 1000), s.limiteSeg || Infinity);
  const resultado = { ...s, fim, duracaoSeg, acertos, total: s.qids.length };
  simulados.historico.unshift(resultado);
  simulados.atual = null;
  salvarSimulados();
  return resultado;
}
