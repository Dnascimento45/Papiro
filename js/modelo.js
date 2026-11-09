/* Modelo: monta a árvore Seção -> Conteúdo -> Matéria -> Assunto a partir do registro
   e oferece consultas sobre ela (contagens, progresso, endereços). */
import { reg } from './registro.js';
import { estudados, problema } from './estado.js';
import { CHAVES, memoria, normCaminho, porOrdem, slug } from './util.js';

export const raiz = [];          // seções
export const nos = new Map();    // caminho -> nó (todos os níveis)

/* ---------- Construção ---------- */

function novoId(titulo, id, irmaos, arquivo) {
  const base = slug(id || titulo) || 'item';
  let final = base;
  let n = 2;
  while (irmaos.some((x) => x.id === final)) final = `${base}-${n++}`;
  if (final !== base) {
    problema(arquivo, `"${titulo}" repete um id que já existe neste nível; usei "${final}". Dê um "id" diferente para evitar confusão.`);
  }
  return final;
}

function criar(tipo, def, pai, arquivo) {
  // prerequisitos: o que convém estudar antes (só assuntos declaram); dependentes: o caminho inverso.
  const no = { tipo, def: { ...def }, arquivo, pai, filhos: [], titulo: String(def.titulo), prerequisitos: [], dependentes: [] };
  const irmaos = pai ? pai.filhos : raiz;
  no.id = novoId(no.titulo, def.id, irmaos, arquivo);
  no.caminho = pai ? `${pai.caminho}/${no.id}` : no.id;
  irmaos.push(no);
  nos.set(no.caminho, no);
  return no;
}

function criarMaterias(conteudo, def, arquivo) {
  (Array.isArray(def.materias) ? def.materias : []).forEach((m, mi) => {
    if (!m || !m.titulo) return problema(arquivo, `a matéria nº ${mi + 1} de "${conteudo.titulo}" está sem "titulo".`);
    const materia = criar('materia', m, conteudo, arquivo);
    (Array.isArray(m.assuntos) ? m.assuntos : []).forEach((a, ai) => {
      const defAssunto = typeof a === 'string' ? { titulo: a } : a;
      if (!defAssunto || !defAssunto.titulo) {
        return problema(arquivo, `o assunto nº ${ai + 1} de "${materia.titulo}" está sem "titulo".`);
      }
      const assunto = criar('assunto', defAssunto, materia, arquivo);
      assunto.blocos = Array.isArray(defAssunto.blocos) ? defAssunto.blocos.slice() : [];
    });
  });
}

/** Cria o nó de um conteúdo reaproveitado de outra seção (`ref`); o alvo é ligado depois. */
function criarReferencia(r, secao) {
  const { def, arquivo } = r;
  const ref = normCaminho(def.ref);
  const no = { tipo: 'conteudo', ref, def: { ...def }, arquivo, pai: secao, filhos: [], titulo: def.titulo || def.ref };
  no.id = novoId(no.titulo, `ref-${ref.replace(/\//g, '-')}`, secao.filhos, arquivo);
  no.caminho = `${secao.caminho}/${no.id}`;
  secao.filhos.push(no);
  return no;
}

function ligarReferencias(refs) {
  refs.forEach((r) => {
    const alvo = nos.get(r.ref);
    if (!alvo || alvo.tipo !== 'conteudo') {
      problema(r.arquivo, `a referência "${r.def.ref}" não aponta para um conteúdo existente.`);
      r.pai.filhos.splice(r.pai.filhos.indexOf(r), 1);
      return;
    }
    r.alvo = alvo;
    r.titulo = r.def.titulo || alvo.titulo;
    nos.set(r.caminho, r);
  });
}

let aplicados = 0; // quantos registros de reg.assuntos já foram aplicados à árvore

/** Aplica os textos (blocos e metadados) declarados em conteudos/textos/*.js que chegaram
    desde a última chamada. Os textos chegam sob demanda (js/carga.js), por isso é incremental. */
export function aplicarNovosTextos() {
  reg.assuntos.slice(aplicados).forEach((r) => {
    const no = nos.get(normCaminho(r.caminho));
    if (!no || no.tipo !== 'assunto') {
      return problema(r.arquivo, `o assunto "${r.caminho}" não existe na estrutura. Abra o assunto no caderno e copie o caminho mostrado na página.`);
    }
    if (Array.isArray(r.def.blocos)) no.blocos = no.blocos.concat(r.def.blocos);
    else if (r.def.blocos) problema(r.arquivo, `"blocos" de "${r.caminho}" precisa ser uma lista [ ].`);
    ['resumo', 'conferir', 'fontes', 'livros', 'nota', 'incidencia'].forEach((k) => {
      if (r.def[k] != null) no.def[k] = r.def[k];
    });
    if (r.def.prerequisitos != null) ligarPrerequisitos(no, r.def.prerequisitos, r.arquivo);
  });
  aplicados = reg.assuntos.length;
}

/** O índice gerado (conteudos/indice-textos.js) diz quais assuntos têm texto e o resumo de cada um,
    para as listas e contagens funcionarem antes de o texto ser baixado. */
function aplicarIndiceTextos() {
  const ARQ = 'conteudos/indice-textos.js';
  if (!reg.mapaTextos) {
    reg.mapaTextos = {};
    if (reg.textos.length) problema(ARQ, 'o índice dos textos não foi carregado. Rode "npm run indice".');
    return;
  }
  const noMapa = Object.keys(reg.mapaTextos);
  const desatualizado = reg.textos.length !== noMapa.length || reg.textos.some((a) => !noMapa.includes(a));
  if (desatualizado) problema(ARQ, 'está desatualizado em relação a conteudos/indice.js. Rode "npm run indice".');
  Object.entries(reg.resumos).forEach(([caminho, resumo]) => {
    const no = nos.get(caminho);
    if (!no || no.tipo !== 'assunto') return problema(ARQ, `o assunto "${caminho}" não existe mais na estrutura. Rode "npm run indice".`);
    no.temTexto = true;
    if (resumo && !no.def.resumo) no.def.resumo = resumo;
  });
}

/** Liga os pré-requisitos (caminhos de assunto, matéria ou conteúdo) aos nós; caminho errado vira aviso. */
function ligarPrerequisitos(assunto, lista, arquivo) {
  if (!Array.isArray(lista)) {
    problema(arquivo, `"prerequisitos" de "${assunto.caminho}" precisa ser uma lista [ ].`);
    return;
  }
  lista.forEach((caminho) => {
    const alvo = real(nos.get(normCaminho(caminho)));
    if (!alvo || alvo.tipo === 'secao') {
      problema(arquivo, `o pré-requisito "${caminho}" de "${assunto.titulo}" não existe. Use o caminho de um assunto, de uma matéria ou de um conteúdo.`);
    } else if (alvo === assunto) {
      problema(arquivo, `"${assunto.titulo}" aparece como pré-requisito de si mesmo.`);
    } else if (!assunto.prerequisitos.includes(alvo)) {
      assunto.prerequisitos.push(alvo);
      alvo.dependentes.push(assunto);
    }
  });
}

export function construir() {
  reg.secoes.forEach((r) => criar('secao', r.def, null, r.arquivo));
  raiz.sort(porOrdem);

  const refs = [];
  reg.conteudos.forEach((r) => {
    const secao = nos.get(slug(r.secaoId));
    if (!secao || secao.tipo !== 'secao') {
      return problema(r.arquivo, `a seção "${r.secaoId}" não existe. As seções ficam em conteudos/secoes.js.`);
    }
    if (r.def.ref) {
      refs.push(criarReferencia(r, secao));
      return;
    }
    const conteudo = criar('conteudo', r.def, secao, r.arquivo);
    criarMaterias(conteudo, r.def, r.arquivo);
  });
  raiz.forEach((s) => s.filhos.sort(porOrdem));

  ligarReferencias(refs);
  aplicarNovosTextos(); // na abertura, só os pré-requisitos; os textos chegam depois
  aplicarIndiceTextos();
}

/* ---------- Consultas ---------- */

/** Resolve uma referência para o conteúdo real; nós comuns voltam iguais. */
export function real(no) {
  return no && no.ref ? no.alvo : no;
}

function filhosDe(no) {
  const r = real(no);
  return r ? r.filhos : [];
}

/** Todos os assuntos abaixo de um nó (ou o próprio nó, se já for um assunto). */
export function assuntosDe(no) {
  if (!no) return [];
  if (no.tipo === 'assunto') return [no];
  return filhosDe(no).flatMap(assuntosDe);
}

export function todosAssuntos() {
  return [...nos.values()].filter((n) => n.tipo === 'assunto');
}

/** Kanji do nó, herdado do primeiro ancestral que definir um. */
export function kanjiDe(no) {
  for (let p = no; p; p = p.pai) {
    const r = real(p);
    if (r && r.def.kanji) return r.def.kanji;
  }
  return '道';
}

export function secaoDe(no) {
  let p = no;
  while (p && p.pai) p = p.pai;
  return p;
}

/** Endereço (hash) de um nó: "nucleo/matematica" -> "#nucleo--matematica". */
export function href(no) {
  const r = real(no) || no;
  return `#${r.caminho.split('/').join('--')}`;
}

/** Tem texto: já baixado (blocos) ou, antes de baixar, segundo o índice gerado. */
export function temConteudo(assunto) {
  return !!((assunto.blocos && assunto.blocos.length > 0) || assunto.temTexto);
}

/* ---------- Progresso ---------- */

export function feito(assunto) {
  return !!estudados[assunto.caminho];
}

export function alternarEstudado(assunto) {
  if (estudados[assunto.caminho]) delete estudados[assunto.caminho];
  else estudados[assunto.caminho] = Date.now();
  memoria.gravar(CHAVES.estudados, estudados);
}

/** Totais de assuntos de um nó: quantos existem, quantos estudados e quantos com texto. */
export function contagem(no) {
  const lista = assuntosDe(no);
  return {
    total: lista.length,
    feitos: lista.filter(feito).length,
    comConteudo: lista.filter(temConteudo).length,
  };
}

/** Assunto estudado, ou matéria/conteúdo com todos os assuntos estudados. */
export function cumprido(no) {
  if (no.tipo === 'assunto') return feito(no);
  const ct = contagem(no);
  return ct.total > 0 && ct.feitos === ct.total;
}

/* ---------- Pré-requisitos ---------- */

/** Matérias que um nó representa: a do assunto, a própria matéria ou as de um conteúdo. */
export function materiasDe(no) {
  if (no.tipo === 'assunto') return [no.pai];
  if (no.tipo === 'materia') return [no];
  if (no.tipo === 'conteudo') return filhosDe(no);
  return [];
}

/** Outras matérias que convém estudar antes desta, tiradas dos pré-requisitos dos seus assuntos. */
export function prerequisitosDaMateria(materia) {
  const lista = [];
  materia.filhos.forEach((a) => a.prerequisitos.flatMap(materiasDe).forEach((m) => {
    if (m !== materia && !lista.includes(m)) lista.push(m);
  }));
  return lista;
}
