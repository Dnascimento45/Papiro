// Apoio comum a todos os testes.
// - Todo teste falha se a página tiver erro de JavaScript ou console.error.
// - As fontes do Google são trocadas por um CSS vazio: os testes não dependem
//   da internet e as capturas de tela ficam estáveis.
// - O index.html do projeto é um fragmento (o artefato o embrulha). O navegador
//   o abre do mesmo jeito que o Live Server, então os testes usam o arquivo como está.
const base = require('@playwright/test');

const test = base.test.extend({
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
 */
async function arvore(page) {
  return page.evaluate(async () => {
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
