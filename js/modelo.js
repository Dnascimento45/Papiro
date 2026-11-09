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
  const no = { tipo, def: { ...def }, arquivo, pai, filhos: [], titulo: String(def.titulo) };
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

/** Aplica os textos (blocos e metadados) declarados em conteudos/textos/*.js. */
function aplicarTextos() {
  reg.assuntos.forEach((r) => {
    const no = nos.get(normCaminho(r.caminho));
    if (!no || no.tipo !== 'assunto') {
      return problema(r.arquivo, `o assunto "${r.caminho}" não existe na estrutura. Abra o assunto no caderno e copie o caminho mostrado na página.`);
    }
    if (Array.isArray(r.def.blocos)) no.blocos = no.blocos.concat(r.def.blocos);
    else if (r.def.blocos) problema(r.arquivo, `"blocos" de "${r.caminho}" precisa ser uma lista [ ].`);
    ['resumo', 'conferir', 'fontes', 'nota', 'incidencia'].forEach((k) => {
      if (r.def[k] != null) no.def[k] = r.def[k];
    });
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
  aplicarTextos();
}

/* ---------- Consultas ---------- */

/** Resolve uma referência para o conteúdo real; nós comuns voltam iguais. */
export function real(no) {
  return no && no.ref ? no.alvo : no;
}

export function filhosDe(no) {
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

export function temConteudo(assunto) {
  return !!(assunto.blocos && assunto.blocos.length > 0);
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
