/* Gera conteudos/indice-textos.js: o mapa que deixa o caderno carregar os textos sob demanda.

   Rodar:  npm run indice   (sempre que criar, renomear ou mudar o "resumo" de um texto)

   O caderno abre só com a estrutura (seções, conteúdos, matérias e assuntos). Os textos
   ficam em conteudos/textos/ e só são baixados quando um assunto do conteúdo é aberto.
   Para isso, ele precisa saber de antemão:
     - quais arquivos de texto atendem cada conteúdo (para baixar só esses);
     - quais assuntos já têm texto e o resumo de cada um (aparecem nas listas sem baixar o texto).
   Este script lê os arquivos, anota isso e grava o índice. Um teste confere se ele está em dia. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RAIZ = path.join(__dirname, '..');
const DESTINO = path.join(RAIZ, 'conteudos', 'indice-textos.js');

const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const slug = (s) => norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const normCaminho = (c) => String(c).split('/').map(slug).filter(Boolean).join('/');

/** Roda um arquivo de conteúdo com um ESTUDO de mentira, que só anota as chamadas. */
function rodar(arquivo, estudo) {
  const codigo = fs.readFileSync(path.join(RAIZ, arquivo), 'utf8');
  vm.runInNewContext(codigo, { ESTUDO: estudo, console }, { filename: arquivo });
}

/** Ordem dos arquivos de texto, declarada em conteudos/indice.js com ESTUDO.textos([...]). */
function ordemDosTextos() {
  let ordem = null;
  rodar('conteudos/indice.js', { carregar() {}, textos(lista) { ordem = lista; } });
  if (!Array.isArray(ordem)) throw new Error('conteudos/indice.js não chama ESTUDO.textos([...]).');
  return ordem;
}

function gerar() {
  const arquivos = {};   // arquivo -> [conteúdos que ele preenche]
  const assuntos = {};   // caminho -> resumo ('' se não tiver); só assuntos com blocos

  ordemDosTextos().forEach((arquivo) => {
    const conteudos = new Set();
    rodar(arquivo, {
      caminho: (...partes) => partes.map(slug).filter(Boolean).join('/'),
      assunto(caminho, def) {
        const c = normCaminho(caminho);
        conteudos.add(c.split('/').slice(0, 2).join('/'));
        if (!def) return;
        const temBlocos = Array.isArray(def.blocos) && def.blocos.length > 0;
        if (temBlocos && !(c in assuntos)) assuntos[c] = '';
        if (def.resumo != null && (c in assuntos || temBlocos)) assuntos[c] = String(def.resumo);
      },
      prerequisitos() {},
    });
    arquivos[arquivo] = [...conteudos].sort();
  });

  const ordenado = Object.fromEntries(Object.keys(assuntos).sort().map((c) => [c, assuntos[c]]));
  return '/* GERADO por ferramentas/gerar-indice-textos.js. Não edite à mão: rode "npm run indice".\n' +
    '   Arquivos de texto -> conteúdos que eles preenchem; assuntos com texto -> resumo. */\n' +
    `ESTUDO.indiceTextos(${JSON.stringify(arquivos, null, 2)}, ${JSON.stringify(ordenado, null, 2)});\n`;
}

if (require.main === module) {
  fs.writeFileSync(DESTINO, gerar());
  console.log(`Gerado: ${path.relative(RAIZ, DESTINO)}`);
}

module.exports = { gerar, DESTINO };
