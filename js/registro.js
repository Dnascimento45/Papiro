/* Registro: recebe o que os arquivos de conteúdo declaram e carrega esses arquivos.
   A API pública (window.ESTUDO) é a única parte usada por conteudos/*.js. */
import { problema } from './estado.js';
import { slug } from './util.js';

/** Tudo o que foi declarado pelos arquivos de conteúdo, ainda sem virar árvore. */
export const reg = { secoes: [], conteudos: [], assuntos: [] };

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

  /** Carrega os arquivos de conteúdo, em ordem, e avisa quando todos terminarem. */
  carregar(lista) {
    if (carregou) return;
    carregou = true;
    if (!Array.isArray(lista)) {
      problema('conteudos/indice.js', 'ESTUDO.carregar() espera uma lista de arquivos entre colchetes [ ].');
      lista = [];
    }
    let faltam = lista.length;
    if (!faltam) return aoCarregar();

    const terminou = () => { if (--faltam === 0) aoCarregar(); };
    lista.forEach((src) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false; // mantém a ordem do índice
      s.onload = terminou;
      s.onerror = () => {
        problema(src, 'arquivo não encontrado. Confira o nome em conteudos/indice.js.');
        terminou();
      };
      document.head.appendChild(s);
    });
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
