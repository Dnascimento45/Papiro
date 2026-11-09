/* Confere os arquivos de aprofundamento antes dos testes: caminhos existentes, gabaritos válidos e contagem.
   Rodar: node ferramentas/conferir-aprofundamento.js conteudos/textos/aprofundamento/lei-8112-1.js [...]  */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const RAIZ = path.join(__dirname, '..');
const slug = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const norm = (c) => String(c).split('/').map(slug).filter(Boolean).join('/');

const t = fs.readFileSync(path.join(RAIZ, 'conteudos/indice-textos.js'), 'utf8');
const m = t.match(/ESTUDO\.indiceTextos\(([\s\S]*)\);\s*$/)[1];
const existentes = new Set(Object.keys(JSON.parse(m.slice(m.lastIndexOf('}, {') + 3))));

let erros = 0, nq = 0, na = 0, bytes = 0;
const vistos = new Set();
process.argv.slice(2).forEach((arq) => {
  const codigo = fs.readFileSync(path.join(RAIZ, arq), 'utf8');
  bytes += codigo.length;
  vm.runInNewContext(codigo, { ESTUDO: {
    caminho: (...p) => p.map(slug).join('/'),
    assunto(caminho, def) {
      const c = norm(caminho);
      na++;
      if (!existentes.has(c)) { console.log(`✗ ${arq}: assunto inexistente: ${c}`); erros++; }
      if (vistos.has(c)) { console.log(`✗ ${arq}: assunto repetido: ${c}`); erros++; }
      vistos.add(c);
      (def.blocos || []).forEach((b, i) => {
        if (b.tipo !== 'questao') return;
        nq++;
        const alts = b.alternativas || [];
        const L = 'ABCDEFGH';
        let ix = -1;
        if (typeof b.correta === 'string') {
          ix = alts.map((a) => String(a).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()).indexOf(b.correta.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim());
          if (ix < 0) ix = L.indexOf(b.correta.trim().toUpperCase());
        } else ix = b.correta;
        if (!(ix >= 0 && ix < alts.length)) { console.log(`✗ ${c} bloco ${i}: gabarito inválido (${b.correta})`); erros++; }
        if (new Set(alts).size !== alts.length) { console.log(`✗ ${c} bloco ${i}: alternativas repetidas`); erros++; }
        if (alts.length !== 2 && alts.length !== 5) console.log(`! ${c} bloco ${i}: ${alts.length} alternativas`);
        if (!b.comentario) { console.log(`✗ ${c} bloco ${i}: sem comentário`); erros++; }
      });
    },
  } }, { filename: arq });
});
console.log(`${na} assuntos, ${nq} questões, ${(bytes / 1024).toFixed(0)} KB, ${erros} erro(s)`);
process.exit(erros ? 1 : 0);
