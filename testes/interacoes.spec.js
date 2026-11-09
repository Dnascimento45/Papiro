// Roteiro "Testar sem framework" do CLAUDE.md, parte 2: marcar estudado,
// virar flashcard, responder questão, usar a busca e o menu.
const { test, expect, abrir, arvore } = require('./apoio');

const ASSUNTO_MODELO = 'nucleo/matematica/aritmetica/regra-de-tres';
const ehCelular = (page) => page.viewportSize().width <= 920;

/** No celular o sumário fica atrás do botão "Menu". */
async function abrirMenuSePreciso(page) {
  if (!ehCelular(page)) return;
  await page.locator('#btn-menu').click();
  await expect(page.locator('body')).toHaveClass(/menu-aberto/);
}

/** Primeiro assunto que tem um bloco do tipo pedido. */
async function assuntoCom(page, tipo) {
  const { assuntos } = await arvore(page);
  const achado = assuntos.find((a) => a.blocos.includes(tipo));
  expect(achado, `algum assunto deve ter bloco "${tipo}"`).toBeTruthy();
  return achado.caminho;
}

test('marcar como estudado conta no progresso e sobrevive ao recarregar', async ({ page }) => {
  await abrir(page, ASSUNTO_MODELO);
  const { assuntos } = await arvore(page);
  const botao = page.locator('[data-acao="estudado"]');

  await expect(botao).toHaveAttribute('aria-pressed', 'false');
  await botao.click();
  await expect(botao).toHaveAttribute('aria-pressed', 'true');
  await expect(botao).toContainText('Estudado');
  await expect(page.locator('#progresso-geral')).toHaveText(`1 de ${assuntos.length} estudados`);
  await expect(page.locator('#arvore li.ativo .feito-mini')).toHaveCount(1);

  await page.reload();
  await expect(page.locator('[data-acao="estudado"]')).toHaveAttribute('aria-pressed', 'true');

  await page.locator('[data-acao="estudado"]').click();
  await expect(page.locator('[data-acao="estudado"]')).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('#progresso-geral')).toHaveText(`0 de ${assuntos.length} estudados`);
});

test('início oferece "Continuar" no último assunto aberto', async ({ page }) => {
  await abrir(page, ASSUNTO_MODELO);
  await abrir(page);
  await expect(page.locator('.continuar')).toContainText('Regra de três');
});

test('flashcard vira e desvira', async ({ page }) => {
  await abrir(page);
  await abrir(page, await assuntoCom(page, 'flashcards'));
  const carta = page.locator('.carta').first();
  await expect(carta).toHaveAttribute('aria-pressed', 'false');
  await carta.click();
  await expect(carta).toHaveAttribute('aria-pressed', 'true');
  await expect(carta.locator('small')).toHaveText('Resposta');
  await carta.click();
  await expect(carta.locator('small')).toHaveText('Pergunta');
});

test('questão: acerto, erro e refazer', async ({ page }) => {
  await abrir(page);
  await abrir(page, await assuntoCom(page, 'questao'));
  const alts = page.locator('.q-alts').first();
  const questao = alts.locator('xpath=..');
  const certa = Number(await alts.getAttribute('data-correta'));
  const errada = certa === 0 ? 1 : 0;

  await alts.locator(`[data-alt="${errada}"]`).click();
  await expect(questao.locator('.veredito')).toHaveClass(/nao/);
  await expect(alts.locator(`[data-alt="${certa}"]`)).toHaveClass(/certa/);
  await expect(alts.locator(`[data-alt="${errada}"]`)).toHaveClass(/errada/);
  await expect(alts.locator('[data-alt]').first()).toBeDisabled();

  await questao.locator('.q-refazer').click();
  await expect(questao.locator('.q-retorno')).toBeHidden();
  await alts.locator(`[data-alt="${certa}"]`).click();
  await expect(questao.locator('.veredito')).toHaveText('Correta.');
});

test('bloco Python começa recolhido e abre na aba "Ver código em Python"', async ({ page }) => {
  await abrir(page);
  await abrir(page, await assuntoCom(page, 'python'));
  const aba = page.locator('.codigo-aba').first();
  await expect(aba).not.toHaveAttribute('open');
  await expect(aba.locator('pre').first()).toBeHidden();
  await aba.locator('summary').click();
  await expect(aba).toHaveAttribute('open', '');
  await expect(aba.locator('[data-acao="copiar-codigo"]')).toBeVisible();
  await expect(aba.locator('pre').first()).toBeVisible();
});

test('busca acha assunto pelo título e Enter abre o primeiro resultado', async ({ page }) => {
  await abrir(page);
  await abrirMenuSePreciso(page);
  const busca = page.locator('#campo-busca');
  await busca.fill('crase');
  await expect(page.locator('.res-busca a').first()).toContainText('Crase');
  await busca.press('Enter');
  await expect(page.locator('#conteudo h1')).toHaveText('Crase');

  await busca.fill('crase');
  await busca.press('Escape');
  await expect(busca).toHaveValue('');
  await expect(page.locator('#arvore .arv')).toHaveCount(1);
});

test('busca sem resultado não quebra a página', async ({ page }) => {
  await abrir(page);
  await abrirMenuSePreciso(page);
  await page.locator('#campo-busca').fill('xyzzy palavra que não existe');
  await expect(page.locator('.res-busca a')).toHaveCount(0);
});

test('atalho "/" foca a busca', async ({ page }) => {
  test.skip(ehCelular(page), 'atalho de teclado é coisa de computador');
  await abrir(page);
  await page.keyboard.press('/');
  await expect(page.locator('#campo-busca')).toBeFocused();
});

test('sumário expande e recolhe pela seta', async ({ page }) => {
  await abrir(page);
  await abrirMenuSePreciso(page);
  const seta = page.locator('#arvore [data-alternar="nucleo"]');
  const abertoAntes = await seta.getAttribute('aria-expanded');
  await seta.click();
  await expect(page.locator('#arvore [data-alternar="nucleo"]')).toHaveAttribute('aria-expanded', abertoAntes === 'true' ? 'false' : 'true');
});

test('celular: menu abre, fecha no véu e fecha ao escolher um item', async ({ page }) => {
  test.skip(!ehCelular(page), 'o botão Menu só aparece em tela estreita');
  await abrir(page);
  const corpo = page.locator('body');
  const botao = page.locator('#btn-menu');

  await botao.click();
  await expect(corpo).toHaveClass(/menu-aberto/);
  await expect(botao).toHaveAttribute('aria-expanded', 'true');
  await page.locator('#veu').click({ position: { x: 350, y: 400 } });
  await expect(corpo).not.toHaveClass(/menu-aberto/);

  await botao.click();
  await page.locator('#navegacao a', { hasText: 'Questões' }).click();
  await expect(corpo).not.toHaveClass(/menu-aberto/);
  await expect(page).toHaveURL(/#questoes$/);
});
