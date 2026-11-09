/* Carga sob demanda dos textos dos assuntos e das questões.

   Na abertura o caderno tem só a estrutura (e o índice gerado com quais assuntos têm texto).
   Os arquivos de conteudos/textos/ chegam aqui, por conteúdo, quando alguém abre um assunto,
   busca no texto, abre o banco de questões ou o assistente. As questões de provas (JSON em
   questoes/) ficam com js/provas.js; garantirQuestoes() junta as duas fontes.

   Regra de ordem: os blocos de um assunto podem vir de mais de um arquivo (texto e
   aprofundamento), e o id das questões autorais ("caminho#ordem") depende da ordem dos
   blocos. Por isso um conteúdo nunca chega pela metade: baixa-se o grupo inteiro de
   arquivos ligados a ele, sempre na ordem de conteudos/indice.js. */
import { carregarScripts, reg } from './registro.js';
import { aplicarNovosTextos } from './modelo.js';
import { montarBanco } from './banco.js';
import { carregarBaldeDaQuestao, ehDeProva, questaoDeProvaPronta } from './provas.js';

const pedidos = new Map();   // arquivo -> promessa (baixando ou já baixado)
const prontos = new Set();   // arquivos que já terminaram (com ou sem erro)

/** Conteúdo do caminho de um assunto ou de uma questão autoral ("secao/conteudo/..."). */
const conteudoDo = (caminho) => String(caminho).split('#')[0].split('/').slice(0, 2).join('/');

/** Todos os arquivos ligados a um conteúdo: os dele e, se algum arquivo preenche mais de um
    conteúdo, os desses outros também (o grupo fecha). Na ordem do índice. */
function grupoDe(conteudo) {
  const mapa = reg.mapaTextos || {};
  const conteudos = new Set([conteudo]);
  const arquivos = new Set();
  let mudou = true;
  while (mudou) {
    mudou = false;
    Object.entries(mapa).forEach(([arquivo, lista]) => {
      if (arquivos.has(arquivo) || !lista.some((c) => conteudos.has(c))) return;
      arquivos.add(arquivo);
      lista.forEach((c) => conteudos.add(c));
      mudou = true;
    });
  }
  return reg.textos.filter((a) => arquivos.has(a));
}

function baixar(arquivos) {
  const novos = arquivos.filter((a) => !pedidos.has(a));
  if (novos.length) {
    const lote = carregarScripts(novos).then(() => {
      novos.forEach((a) => prontos.add(a));
      aplicarNovosTextos();
      montarBanco();
    });
    novos.forEach((a) => pedidos.set(a, lote));
  }
  return Promise.all(arquivos.map((a) => pedidos.get(a))).then(() => {});
}

/** Os textos do conteúdo já chegaram? (Arquivo que falhou também conta: o aviso já foi dado.) */
export function textosProntos(caminho) {
  return grupoDe(conteudoDo(caminho)).every((a) => prontos.has(a));
}

/** Baixa os textos do conteúdo de um caminho (conteúdo, matéria, assunto ou id de questão autoral). */
export function carregarTextos(caminho) {
  return baixar(grupoDe(conteudoDo(caminho)));
}

export function todosTextosProntos() {
  return reg.textos.every((a) => prontos.has(a));
}

/** Baixa todos os textos (busca no texto, banco de questões, assistente). */
export function carregarTodosTextos() {
  return baixar(reg.textos);
}

/** As questões destes ids já estão no banco? */
export function questoesProntas(ids) {
  return ids.every((id) => (ehDeProva(id) ? questaoDeProvaPronta(id) : textosProntos(id)));
}

/** Baixa o que faltar para estes ids: textos (questões autorais) ou baldes de provas. */
export function garantirQuestoes(ids) {
  const tarefas = new Map();
  ids.forEach((id) => {
    if (ehDeProva(id)) {
      if (!questaoDeProvaPronta(id)) tarefas.set(`p ${id}`, carregarBaldeDaQuestao(id));
    } else {
      const c = conteudoDo(id);
      if (!tarefas.has(c) && !textosProntos(id)) tarefas.set(c, carregarTextos(id));
    }
  });
  return Promise.all(tarefas.values()).then(() => {});
}
