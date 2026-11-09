// Carga sob demanda: o caderno abre só com a estrutura; textos e questões de provas
// chegam quando a tela que precisa deles é aberta. As questões de provas vêm do
// conjunto de teste em testes/dados/questoes/ (veja apoio.js).
const fs = require('fs');
const { test, expect, abrir } = require('./apoio');
const { gerar, DESTINO } = require('../ferramentas/gerar-indice-textos');

/** Anota os arquivos de texto e de questões que a página pede. */
function vigiarPedidos(page) {
  const pedidos = [];
  page.on('request', (r) => {
    const m = new URL(r.url()).pathname.match(/\/(conteudos\/textos\/.+\.js|questoes\/.+\.json)$/);
    if (m) pedidos.push(m[1]);
  });
  return pedidos;
}

test('o índice dos textos (conteudos/indice-textos.js) está em dia: rode "npm run indice"', () => {
  expect(fs.readFileSync(DESTINO, 'utf8')).toBe(gerar());
});

test('a abertura não baixa textos nem questões; listas e contagens vêm do índice', async ({ page }) => {
  const pedidos = vigiarPedidos(page);
  await abrir(page, 'nucleo/matematica');
  // A lista de assuntos mostra o resumo e o ponto "com conteúdo" sem baixar o texto.
  await expect(page.locator('.lista-assuntos .ponto.cheio').first()).toBeVisible();
  await expect(page.locator('.lista-assuntos a', { hasText: 'Regra de três' }).locator('small')).not.toHaveText('');
  await expect(page.locator('.numeros')).toContainText('com conteúdo');
  expect(pedidos).toEqual([]);
});

test('abrir um assunto baixa só os textos do conteúdo dele, uma vez', async ({ page }) => {
  const pedidos = vigiarPedidos(page);
  await abrir(page, 'nucleo/matematica/aritmetica/regra-de-tres');
  await expect(page.locator('#conteudo .blocos')).toBeVisible();
  await expect(page.locator('#conteudo .carregando')).toHaveCount(0);
  expect(pedidos.length).toBeGreaterThan(0);
  expect(pedidos.every((p) => /matematica/.test(p)), `só textos de Matemática: ${pedidos.join(', ')}`).toBe(true);

  // Outro assunto do mesmo conteúdo não baixa nada de novo.
  const antes = pedidos.length;
  await page.evaluate(() => { location.hash = '#nucleo--matematica--aritmetica--porcentagem'; });
  await expect(page.locator('#conteudo h1')).toHaveText('Porcentagem');
  await expect(page.locator('#conteudo .blocos')).toBeVisible();
  expect(pedidos.length).toBe(antes);
});

test('a busca acha palavra que só existe dentro de um texto', async ({ page }) => {
  await abrir(page);
  if (page.viewportSize().width <= 920) await page.locator('#btn-menu').click();
  await page.locator('#campo-busca').fill('hexadecimal');
  await expect(page.locator('.res-busca a mark').first()).toContainText('no texto');
  await expect(page.locator('#arvore [role="status"]')).toHaveCount(0);
});

test('banco: questões de provas só chegam ao escolher o conteúdo e mostram banca, ano e aviso', async ({ page }) => {
  const pedidos = vigiarPedidos(page);
  await abrir(page, 'questoes');
  await expect(page.locator('.numeros')).toContainText('3 de provas');
  await expect(page.locator('#lista-questoes')).toContainText('escolha um conteúdo');
  expect(pedidos.filter((p) => p.startsWith('questoes/') && p !== 'questoes/indice.json')).toEqual([]);
  await expect(page.locator('.q-trilha', { hasText: 'Questão de prova' })).toHaveCount(0);

  await page.locator('[data-filtro="conteudo"]').selectOption('nucleo/direito-administrativo');
  await page.locator('[data-filtro="origem"]').selectOption('prova');
  const cards = page.locator('#lista-questoes .q-card');
  await expect(cards).toHaveCount(3);
  await expect(cards.first().locator('.q-trilha')).toContainText('Direito Administrativo · Questão de prova');
  await expect(page.locator('#lista-questoes .q-meta', { hasText: 'Cebraspe · 2017' })).toHaveCount(1);
  await expect(page.locator('#lista-questoes .conferir', { hasText: '8.666' })).toHaveCount(1);

  await page.locator('[data-filtro="banca"]').selectOption('FCC');
  await expect(cards).toHaveCount(1);
  await expect(cards.first()).toContainText('poder de punir');
});

test('questão de prova: resposta, lista e simulado sobrevivem ao recarregar', async ({ page }) => {
  const ID = 'p:nucleo/direito-administrativo:fcc:a00000000003';
  await abrir(page, 'listas');
  await page.locator('[data-form="nova-lista"] input').fill('Provas');
  await page.locator('[data-form="nova-lista"] button').click();

  await page.goto('/index.html#questoes');
  await page.locator('[data-filtro="conteudo"]').selectOption('nucleo/direito-administrativo');
  await page.locator('[data-filtro="banca"]').selectOption('FCC');
  const card = page.locator('.q-card', { has: page.locator(`.q-alts[data-qid="${ID}"]`) });
  await card.locator('[data-alt="1"]').click();
  await expect(card.locator('.veredito')).toHaveText('Correta.');
  await card.locator('[data-mudar="add-lista"]').selectOption({ label: 'Provas' });
  await expect(card.locator('.q-aviso')).toHaveText('Adicionada.');

  // A lista abre do zero (página recarregada) e baixa só o balde da questão.
  await page.goto('/index.html#listas');
  await page.locator('.lista-item a', { hasText: 'Provas' }).click();
  await expect(page.locator('.q-card')).toHaveCount(1);
  await expect(page.locator('.q-card .chip')).toHaveText('Acertou');

  await page.locator('[data-acao="simular-lista"]').click();
  await expect(page.locator('#conteudo h1')).toHaveText('Simulado em andamento');
  await page.reload();
  await expect(page.locator('[data-sim-alt]')).toHaveCount(5);
  await page.locator('[data-sim-alt="1"]').click();
  await page.locator('[data-acao="finalizar-simulado"]').click();
  await expect(page.locator('#conteudo h1')).toHaveText('1 de 1 · 100%');
  await expect(page.locator('.q-retorno a')).toHaveText('Estudar o conteúdo');
});

test('simulado de um conteúdo sorteia também entre as questões de provas', async ({ page }) => {
  await abrir(page, 'simulados');
  await page.locator('[name="escopo"]').selectOption('c:nucleo/direito-administrativo');
  await page.locator('[name="quantidade"]').fill('200');
  await page.locator('[data-form="novo-simulado"] button[type="submit"]').click();
  await expect(page.locator('#conteudo h1')).toHaveText('Simulado em andamento');
  const qids = await page.locator('[data-sim-alt="0"]').evaluateAll((els) => els.map((e) => e.getAttribute('data-qid')));
  expect(qids.filter((id) => id.startsWith('p:'))).toHaveLength(3);
  expect(qids.some((id) => id.includes('#')), 'e as autorais do conteúdo').toBe(true);
});
