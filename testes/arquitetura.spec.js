// Arquitetura: confere a regra de dependência entre as camadas de js/ e a ausência de ciclos.
// Camadas, de baixo para cima (cada uma só importa das de baixo ou da própria):
//   nucleo → interface → paginas → plataforma → app → main.js
// Detalhes em docs/arquitetura.md.
const fs = require('fs');
const path = require('path');
const { test, expect } = require('@playwright/test');

const JS = path.join(__dirname, '..', 'js');
const CAMADAS = ['nucleo', 'interface', 'paginas', 'plataforma', 'app'];

/** Todos os módulos de js/, com os imports relativos já resolvidos. */
function modulos() {
  const lista = [];
  (function andar(pasta) {
    for (const nome of fs.readdirSync(pasta)) {
      const caminho = path.join(pasta, nome);
      if (fs.statSync(caminho).isDirectory()) andar(caminho);
      else if (nome.endsWith('.js')) lista.push(caminho);
    }
  })(JS);
  return lista.map((arquivo) => {
    const codigo = fs.readFileSync(arquivo, 'utf8');
    const imports = [...codigo.matchAll(/from '(\.[^']+)'/g)].map((m) => path.resolve(path.dirname(arquivo), m[1]));
    return { arquivo, imports };
  });
}

const relativo = (p) => path.relative(JS, p).split(path.sep).join('/');
/** Índice da camada (main.js fica acima de todas). */
const camadaDe = (arquivo) => {
  const pasta = relativo(arquivo).split('/')[0];
  return pasta.endsWith('.js') ? CAMADAS.length : CAMADAS.indexOf(pasta);
};

test('todo módulo de js/ está numa camada conhecida', () => {
  const soltos = modulos().map((m) => m.arquivo).filter((a) => camadaDe(a) < 0).map(relativo);
  expect(soltos, `pastas permitidas: ${CAMADAS.join(', ')} (e main.js na raiz)`).toEqual([]);
});

test('nenhum módulo importa de uma camada acima da sua', () => {
  const violacoes = [];
  for (const { arquivo, imports } of modulos()) {
    for (const alvo of imports) {
      if (!fs.existsSync(alvo)) violacoes.push(`${relativo(arquivo)} importa ${relativo(alvo)}, que não existe`);
      else if (camadaDe(alvo) > camadaDe(arquivo)) violacoes.push(`${relativo(arquivo)} → ${relativo(alvo)}`);
    }
  }
  expect(violacoes).toEqual([]);
});

test('não há ciclos de importação', () => {
  const grafo = new Map(modulos().map((m) => [m.arquivo, m.imports]));
  const estado = new Map(); // 1 = visitando, 2 = concluído
  const ciclos = [];
  const visitar = (no, trilha) => {
    if (estado.get(no) === 2) return;
    if (estado.get(no) === 1) {
      ciclos.push([...trilha.slice(trilha.indexOf(no)), no].map(relativo).join(' → '));
      return;
    }
    estado.set(no, 1);
    for (const vizinho of grafo.get(no) || []) visitar(vizinho, [...trilha, no]);
    estado.set(no, 2);
  };
  for (const no of grafo.keys()) visitar(no, []);
  expect(ciclos).toEqual([]);
});
