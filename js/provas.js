/* Questões de provas: JSON estático em questoes/, lido com fetch só quando a tela precisa.

   Funciona como uma API REST só de leitura, com um endereço por recurso:
     questoes/indice.json                       o que existe (conteúdos, bancas, totais, baldes)
     questoes/<conteudo>/<banca>-<balde>.json   até ~400 questões cada
   No artefato os arquivos vão junto com a publicação; no Live Server, vêm da pasta do projeto.
   A pasta fica fora do git (direitos autorais das bancas): sem ela, o banco mostra só as
   questões autorais e avisa.

   Id de uma questão de prova: "p:<conteudo>:<banca>:<hash de 12 caracteres>". O primeiro
   caractere do hash é o balde, então o id sozinho diz qual arquivo baixar. */
import { nos } from './modelo.js';
import { adicionarDeProvas } from './banco.js';

const PASTA = 'questoes';

let indice = null;          // null = ainda não pedido/chegando; objeto = pronto
let pedidoIndice = null;
const baldes = new Map();   // "conteudo|chave|balde" -> promessa
const baldesProntos = new Set();
const falhas = [];          // arquivos que não vieram (aparecem num aviso discreto no banco)

export const ehDeProva = (id) => String(id).startsWith('p:');

/** "p:nucleo/x:fcc:a1b2..." -> { conteudo, chave, balde }. */
function partesDoId(id) {
  const [, conteudo, chave, hash] = String(id).split(':');
  return { conteudo, chave, balde: (hash || '').charAt(0) };
}

const pastaDo = (conteudo) => `${PASTA}/${conteudo.replace(/\//g, '--')}`;

async function lerJson(endereco) {
  const r = await fetch(endereco);
  if (!r.ok) throw new Error(`${r.status}`);
  return r.json();
}

/* ---------- Índice ---------- */

/** Pede o índice uma vez só. Sem a pasta questoes/, o índice fica vazio (com `ausente`). */
export function carregarIndiceProvas() {
  if (!pedidoIndice) {
    pedidoIndice = lerJson(`${PASTA}/indice.json`)
      .then((dados) => { indice = dados && dados.conteudos ? dados : { conteudos: {}, ausente: true }; })
      .catch(() => { indice = { conteudos: {}, ausente: true }; });
  }
  return pedidoIndice;
}

/** O índice, ou null se ainda não chegou. */
export function indiceProvas() {
  return indice;
}

/** Bancas e totais de um conteúdo: [{ nome, chave, total, anos, revogadas, baldes }]. */
export function bancasDe(conteudo) {
  const c = indice && indice.conteudos[conteudo];
  return c ? Object.entries(c).map(([nome, info]) => ({ nome, ...info })) : [];
}

/** Total de questões de provas, de um conteúdo ou de todos. */
export function totalDeProvas(conteudo) {
  if (!indice) return 0;
  const lista = conteudo ? [conteudo] : Object.keys(indice.conteudos);
  return lista.reduce((s, c) => s + bancasDe(c).reduce((t, b) => t + b.total, 0), 0);
}

/** Conteúdos com questões de provas, na ordem do índice. */
export function conteudosComProvas() {
  return indice ? Object.keys(indice.conteudos) : [];
}

export function falhasDeProvas() {
  return falhas;
}

/* ---------- Baldes ---------- */

function carregarBalde(conteudo, banca, balde) {
  const chave = `${conteudo}|${banca.chave}|${balde}`;
  if (!baldes.has(chave)) {
    const arquivo = `${pastaDo(conteudo)}/${banca.chave}-${balde}.json`;
    baldes.set(chave, lerJson(arquivo)
      .then((lista) => {
        const no = nos.get(conteudo);
        if (no && Array.isArray(lista)) adicionarDeProvas(lista, { conteudo: no, banca: banca.nome });
      })
      .catch(() => { falhas.push(arquivo); })
      .finally(() => { baldesProntos.add(chave); }));
  }
  return baldes.get(chave);
}

/** Baixa todas as questões de provas de um conteúdo (de uma banca só, se `chaveBanca`). */
export async function carregarProvasDe(conteudo, chaveBanca = '') {
  await carregarIndiceProvas();
  const bancas = bancasDe(conteudo).filter((b) => !chaveBanca || b.chave === chaveBanca);
  await Promise.all(bancas.flatMap((b) => b.baldes.map((balde) => carregarBalde(conteudo, b, balde))));
}

/** Todas as questões de provas do conteúdo já chegaram? (Sem índice ainda: não.) */
export function provasProntas(conteudo) {
  if (!indice) return false;
  return bancasDe(conteudo).every((b) => b.baldes.every((balde) => baldesProntos.has(`${conteudo}|${b.chave}|${balde}`)));
}

/** Baixa só o balde onde está a questão (listas, simulados, assistente). */
export async function carregarBaldeDaQuestao(id) {
  await carregarIndiceProvas();
  const { conteudo, chave, balde } = partesDoId(id);
  const banca = bancasDe(conteudo).find((b) => b.chave === chave);
  if (banca && banca.baldes.includes(balde)) await carregarBalde(conteudo, banca, balde);
}

/** O balde da questão já chegou? Questão que não existe mais no índice conta como pronta (some da lista). */
export function questaoDeProvaPronta(id) {
  if (!indice) return false;
  const { conteudo, chave, balde } = partesDoId(id);
  const banca = bancasDe(conteudo).find((b) => b.chave === chave);
  return !banca || !banca.baldes.includes(balde) || baldesProntos.has(`${conteudo}|${chave}|${balde}`);
}
