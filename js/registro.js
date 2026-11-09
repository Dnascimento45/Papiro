/* Registro: recebe o que os arquivos de conteúdo declaram e carrega esses arquivos.
   A API pública (window.ESTUDO) é a única parte usada por conteudos/*.js. */
import { problema } from './estado.js';
import { slug } from './util.js';

/** Tudo o que foi declarado pelos arquivos de conteúdo, ainda sem virar árvore.
    textos: ordem dos arquivos de texto (ESTUDO.textos); mapaTextos e resumos vêm de conteudos/indice-textos.js. */
export const reg = { secoes: [], conteudos: [], assuntos: [], textos: [], mapaTextos: null, resumos: {} };

let carregou = false;
let aoCarregar = () => {};

/** Define o que acontece quando todos os arquivos terminaram de carregar. */
export function aoTerminarCarga(fn) {
  aoCarregar = fn;
}

function arquivoAtual() {
  const s = document.currentScript;
  return (s && s.getAttribute('src')) || 'index.html';
}

export const api = {
  secao(def) {
    if (!def || !def.titulo) return problema(arquivoAtual(), 'ESTUDO.secao() precisa de um "titulo".');
    reg.secoes.push({ def, arquivo: arquivoAtual(), i: reg.secoes.length });
  },

  conteudo(secaoId, def) {
    const arquivo = arquivoAtual();
    if (typeof secaoId !== 'string') {
      return problema(arquivo, 'ESTUDO.conteudo() precisa do id da seção como primeiro argumento, ex.: ESTUDO.conteudo("nucleo", {...}).');
    }
    if (!def || (!def.titulo && !def.ref)) {
      return problema(arquivo, 'ESTUDO.conteudo() precisa de um "titulo" (ou de "ref" para reaproveitar outro conteúdo).');
    }
    reg.conteudos.push({ secaoId, def, arquivo, i: reg.conteudos.length });
  },

  assunto(caminho, def) {
    const arquivo = arquivoAtual();
    if (typeof caminho !== 'string') {
      return problema(arquivo, 'ESTUDO.assunto() precisa do caminho do assunto, ex.: "nucleo/matematica/aritmetica/regra-de-tres".');
    }
    if (!def) return problema(arquivo, `ESTUDO.assunto("${caminho}") está sem conteúdo.`);
    reg.assuntos.push({ caminho, def, arquivo });
  },

  /** Pré-requisitos dos assuntos de um conteúdo: ESTUDO.prerequisitos("nucleo/matematica", { "aritmetica/porcentagem": ["aritmetica/razao-e-proporcao"] }).
      Até duas partes ("materia/assunto" ou "materia") = dentro do conteúdo-base; três ou mais = caminho completo. */
  prerequisitos(base, mapa) {
    const arquivo = arquivoAtual();
    if (typeof base !== 'string' || !mapa || typeof mapa !== 'object') {
      return problema(arquivo, 'ESTUDO.prerequisitos() precisa do caminho do conteúdo e de um objeto { "materia/assunto": ["..."] }.');
    }
    const completo = (c) => (String(c).split('/').filter(Boolean).length <= 2 ? `${base}/${c}` : String(c));
    Object.entries(mapa).forEach(([assunto, antes]) => {
      const lista = Array.isArray(antes) ? antes : [antes];
      reg.assuntos.push({ caminho: completo(assunto), def: { prerequisitos: lista.map(completo) }, arquivo });
    });
  },

  /** Carrega os arquivos que abrem com o caderno, em ordem, e avisa quando todos terminarem. */
  carregar(lista) {
    if (carregou) return;
    carregou = true;
    if (!Array.isArray(lista)) {
      problema('conteudos/indice.js', 'ESTUDO.carregar() espera uma lista de arquivos entre colchetes [ ].');
      lista = [];
    }
    carregarScripts(lista).then(() => aoCarregar());
  },

  /** Ordem dos arquivos de texto, que só são baixados sob demanda (veja js/carga.js). */
  textos(lista) {
    if (!Array.isArray(lista)) return problema('conteudos/indice.js', 'ESTUDO.textos() espera uma lista de arquivos entre colchetes [ ].');
    reg.textos = lista.slice();
  },

  /** Chamado por conteudos/indice-textos.js (gerado): arquivo -> conteúdos e assunto com texto -> resumo. */
  indiceTextos(mapa, resumos) {
    reg.mapaTextos = mapa && typeof mapa === 'object' ? mapa : {};
    reg.resumos = resumos && typeof resumos === 'object' ? resumos : {};
  },

  /** Monta um caminho a partir dos títulos: ESTUDO.caminho("nucleo", "matematica", "Aritmética", "Porcentagem").
      Cada parte vira id (sem acento, com hífens), inclusive títulos com barra, como "Lei 8.112/1990". */
  caminho(...partes) {
    return partes.map((p) => slug(p)).filter(Boolean).join('/');
  },

  falhou(src) {
    problema(src, 'arquivo não encontrado.');
  },
};

/** Insere os scripts na ordem da lista (async=false mantém a ordem de execução) e resolve quando
    todos terminarem. Arquivo que falha vira aviso, mas não impede os outros. */
export function carregarScripts(lista) {
  if (!lista.length) return Promise.resolve();
  return Promise.all(lista.map((src) => new Promise((pronto) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = pronto;
    s.onerror = () => {
      problema(src, 'arquivo não encontrado. Confira o nome em conteudos/indice.js.');
      pronto();
    };
    document.head.appendChild(s);
  })));
}

/** Carrega o índice de arquivos (script clássico, pois os arquivos de conteúdo não são módulos). */
export function carregarIndice(src) {
  const s = document.createElement('script');
  s.src = src;
  s.onerror = () => api.falhou(src);
  document.head.appendChild(s);
}

/** Transforma erros de sintaxe/execução dos arquivos de conteúdo em avisos na página. */
export function vigiarErros() {
  window.addEventListener('error', (e) => {
    if (!e.message) return;
    let arquivo = e.filename || '';
    const i = arquivo.indexOf('conteudos/');
    arquivo = i >= 0 ? arquivo.slice(i) : (arquivo.split('/').pop() || 'página');
    problema(arquivo, e.message + (e.lineno ? ` (linha ${e.lineno})` : ''));
  });
}

/** Se o índice nunca chamar ESTUDO.carregar(), avisa e abre o caderno mesmo assim. */
export function vigiarIndice() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (carregou) return;
      carregou = true;
      problema('conteudos/indice.js', 'o índice de arquivos não foi carregado.');
      aoCarregar();
    }, 0);
  });
}
