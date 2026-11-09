// Apoio comum a todos os testes.
// - Todo teste falha se a página tiver erro de JavaScript ou console.error.
// - As fontes do Google são trocadas por um CSS vazio: os testes não dependem
//   da internet e as capturas de tela ficam estáveis.
// - O index.html do projeto é um fragmento: o artefato o embrulha numa página completa,
//   com <meta name="viewport">. Sem essa meta o celular desenha a página como se tivesse
//   980px e o layout de celular nunca aparece. Por isso os testes servem o index.html
//   com o mesmo embrulho do artefato (copiado da versão publicada em 2026-11-09).
const fs = require('fs');
const path = require('path');
const base = require('@playwright/test');

const EMBRULHO_INICIO = '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>\n';
const EMBRULHO_FIM = '\n</body></html>';
const INDEX = path.join(__dirname, '..', 'index.html');
const DADOS = path.join(__dirname, 'dados', 'questoes');

const test = base.test.extend({
  // Serve o index.html embrulhado como no artefato (lido a cada teste: mudou o arquivo, vale na hora).
  embrulho: [async ({ page }, use) => {
    await page.route(/\/index\.html$/, (rota) => rota.fulfill({
      status: 200,
      contentType: 'text/html; charset=utf-8',
      body: EMBRULHO_INICIO + fs.readFileSync(INDEX, 'utf8') + EMBRULHO_FIM,
    }));
    await use();
  }, { auto: true }],

  // A pasta questoes/ (questões de provas) fica fora do git. Os testes usam um conjunto pequeno
  // e fixo, em testes/dados/questoes/, servido no mesmo endereço que o caderno pede.
  provas: [async ({ page }, use) => {
    await page.route(/\/questoes\/[^?#]+\.json(\?|$)/, (rota) => {
      const relativo = new URL(rota.request().url()).pathname.replace(/^\/questoes\//, '');
      const arquivo = path.join(DADOS, relativo);
      if (!arquivo.startsWith(DADOS) || !fs.existsSync(arquivo)) return rota.fulfill({ status: 404, body: '' });
      return rota.fulfill({ status: 200, contentType: 'application/json', body: fs.readFileSync(arquivo, 'utf8') });
    });
    await use();
  }, { auto: true }],

  erros: [async ({ page }, use) => {
    const erros = [];
    page.on('pageerror', (e) => erros.push(`erro de JavaScript: ${e.message}`));
    page.on('console', (msg) => {
      if (msg.type() === 'error') erros.push(`console.error: ${msg.text()}`);
    });
    await page.route(/fonts\.(googleapis|gstatic)\.com/, (rota) =>
      rota.fulfill({ status: 200, contentType: 'text/css', body: '' }));
    await use(erros);
    base.expect(erros, 'a página não deve ter erros de JavaScript nem console.error').toEqual([]);
  }, { auto: true }],
});

const { expect } = base;

/** "nucleo/matematica" -> "#nucleo--matematica" (mesma regra de href() em js/modelo.js). */
function hashDe(caminho) {
  return caminho ? `#${caminho.split('/').join('--')}` : '';
}

/** Abre um endereço do caderno e espera o carregamento terminar. */
async function abrir(page, caminho = '') {
  await page.goto(`/index.html${hashDe(caminho)}`);
  await expect(page.locator('#conteudo .carregando')).toHaveCount(0);
  await expect(page.locator('#arvore .arv')).toHaveCount(1);
}

/** Troca de página sem recarregar (como um clique num link). */
async function irPara(page, caminho) {
  await page.evaluate((h) => { location.hash = h; }, hashDe(caminho) || '#');
}

/** O caderno mostra avisos de arquivo com problema em <details class="problemas">. */
async function semAvisos(page) {
  await expect(page.locator('#conteudo .problemas'), 'não deve haver aviso no topo').toHaveCount(0);
  await expect(page.locator('#conteudo .aviso-bloco'), 'nenhum bloco deve falhar ao desenhar').toHaveCount(0);
}

/**
 * Lê a árvore do caderno pelo próprio módulo js/modelo.js. O navegador devolve a mesma
 * instância que a página já usa, então não é preciso expor nada a mais no motor.
 * Os textos chegam sob demanda: antes de ler, baixa todos (para ver os blocos de cada assunto).
 */
async function arvore(page) {
  return page.evaluate(async () => {
    await (await import('/js/carga.js')).carregarTodosTextos();
    const m = await import('/js/modelo.js');
    const resumo = (n) => ({ caminho: n.caminho, titulo: n.titulo, tipo: n.tipo });
    const todos = [...m.nos.values()].filter((n) => !n.ref);
    const assuntos = m.todosAssuntos();
    const tipos = (b) => (b || []).map((x) => x.tipo);
    return {
      secoes: m.raiz.map(resumo),
      conteudos: todos.filter((n) => n.tipo === 'conteudo').map(resumo),
      materias: todos.filter((n) => n.tipo === 'materia').map(resumo),
      assuntos: assuntos.map((a) => ({ ...resumo(a), blocos: tipos(a.blocos) })),
    };
  });
}

module.exports = { test, expect, abrir, irPara, semAvisos, arvore, hashDe };
