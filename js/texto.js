/* Mini-marcação de texto usada nos arquivos de conteúdo.
     **negrito**  *itálico*  `código`  ==destaque==  {{fórmula}}
   Linhas com "- " viram lista, "1. " lista numerada, "### " subtítulo;
   linha vazia separa parágrafos. Guia completo em conteudos/_MODELO.js. */
import { esc } from './util.js';

/** Frações [[a||b]], expoentes ^{x} e índices _{x}. */
export function formula(s) {
  return s
    .replace(/\[\[(.+?)\|\|(.+?)\]\]/g, (_, a, b) => `<span class="frac"><span>${a.trim()}</span><span>${b.trim()}</span></span>`)
    .replace(/\^\{(.+?)\}/g, '<sup>$1</sup>')
    .replace(/_\{(.+?)\}/g, '<sub>$1</sub>');
}

/** Marcação dentro de uma linha. O texto é escapado antes, então é seguro como HTML. */
export function inline(s) {
  return formula(esc(s).replace(/\{\{(.+?)\}\}/g, (_, f) => `<span class="mat">${f}</span>`))
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/==(.+?)==/g, '<mark>$1</mark>');
}

/** Marcação em bloco: parágrafos, listas e subtítulos. Aceita texto ou lista de linhas. */
export function md(texto) {
  if (texto == null) return '';
  const linhas = String(Array.isArray(texto) ? texto.join('\n') : texto).split('\n');

  let html = '';
  let lista = null;       // { tag: 'ul' | 'ol', itens: [] }
  let paragrafo = [];

  const fecharParagrafo = () => {
    if (paragrafo.length) html += `<p>${inline(paragrafo.join(' '))}</p>`;
    paragrafo = [];
  };
  const fecharLista = () => {
    if (lista) html += `<${lista.tag}>${lista.itens.map((i) => `<li>${inline(i)}</li>`).join('')}</${lista.tag}>`;
    lista = null;
  };
  const itemDeLista = (tag, texto) => {
    fecharParagrafo();
    if (!lista || lista.tag !== tag) {
      fecharLista();
      lista = { tag, itens: [] };
    }
    lista.itens.push(texto);
  };

  linhas.forEach((linha) => {
    const t = linha.trim();
    let m;
    if (!t) { fecharParagrafo(); fecharLista(); return; }
    if ((m = t.match(/^[-•]\s+(.*)$/))) return itemDeLista('ul', m[1]);
    if ((m = t.match(/^\d+[.)]\s+(.*)$/))) return itemDeLista('ol', m[1]);
    if ((m = t.match(/^#{2,4}\s+(.*)$/))) {
      fecharParagrafo();
      fecharLista();
      html += `<h4>${inline(m[1])}</h4>`;
      return;
    }
    fecharLista();
    paragrafo.push(t);
  });
  fecharParagrafo();
  fecharLista();
  return html;
}
