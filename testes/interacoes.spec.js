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

test('banco de questões: a situação segue a última resposta (acertou e depois errou = "Errou")', async ({ page }) => {
  await abrir(page);
  await page.goto('/index.html#questoes');
  const card = page.locator('.q-card').first();
  const alts = card.locator('.q-alts');
  const qid = await alts.getAttribute('data-qid');
  const certa = Number(await alts.getAttribute('data-correta'));
  const errada = certa === 0 ? 1 : 0;
  await expect(card.locator('.chip')).toHaveText('Nova');

  await alts.locator(`[data-alt="${certa}"]`).click();
  await card.locator('.q-refazer').click();
  await alts.locator(`[data-alt="${errada}"]`).click();

  await page.reload();
  const mesma = page.locator('.q-card', { has: page.locator(`.q-alts[data-qid="${qid}"]`) });
  await expect(mesma.locator('.chip'), 'a última resposta foi errada').toHaveText('Errou');

  await page.locator('[data-filtro="status"]').selectOption('errada');
  await expect(mesma, 'o filtro "Que errei" deve trazer a questão').toHaveCount(1);
  await page.locator('[data-filtro="status"]').selectOption('certa');
  await expect(mesma, 'o filtro "Que acertei" não deve trazer a questão').toHaveCount(0);
});

test('pré-requisitos: aparecem no assunto, contam o que foi estudado e o assunto-base lista quem depende dele', async ({ page }) => {
  await abrir(page, 'nucleo/portugues/sintaxe/crase');
  const quadro = page.locator('.prereq');
  await expect(quadro).toContainText('Falta');
  await expect(quadro.locator('li')).toHaveCount(3);

  await quadro.locator('a', { hasText: 'Regência verbal' }).click();
  await expect(page.locator('#conteudo h1')).toHaveText('Regência verbal');
  await expect(page.locator('.fontes', { hasText: 'Este assunto é base para' })).toContainText('Crase');
  await page.locator('[data-acao="estudado"]').click();

  await page.goBack();
  await expect(page.locator('.prereq li.ok')).toHaveCount(1);
  await expect(page.locator('.prereq li.ok')).toContainText('Regência verbal');
});

test('plano: adiciona matérias, avisa pré-requisito fora de ordem, reordena e lembra ao recarregar', async ({ page }) => {
  await abrir(page, 'nucleo/portugues/sintaxe');
  await page.locator('[data-acao="plano-add"]').click();
  await expect(page.locator('#conteudo a.btn[href="#plano"]')).toBeFocused();

  await page.locator('#navegacao a', { hasText: 'Plano' }).evaluate((a) => a.click());
  await expect(page.locator('#conteudo h1')).toHaveText('Plano de estudos');
  await expect(page.locator('.plano-item')).toHaveCount(1);
  // Sintaxe pede Morfologia, que não está no plano: o aviso oferece adicionar.
  await page.locator('.plano-avisos [data-materia="nucleo/portugues/morfologia"]').click();
  await expect(page.locator('.plano-item')).toHaveCount(2);
  await expect(page.locator('.plano-avisos .atraso')).toContainText('Morfologia');

  await page.locator('[data-acao="plano-ordenar"]').click();
  await expect(page.locator('.plano-info > a')).toHaveText(['Morfologia', 'Sintaxe']);
  await expect(page.locator('.plano-avisos .atraso')).toHaveCount(0);
  await expect(page.locator('[data-acao="plano-ordenar"]')).toHaveCount(0);

  await page.locator('[data-acao="plano-subir"][data-materia="nucleo/portugues/sintaxe"]').click();
  await expect(page.locator('.plano-info > a')).toHaveText(['Sintaxe', 'Morfologia']);
  await expect(page.locator('[data-acao="plano-descer"][data-materia="nucleo/portugues/sintaxe"]'), 'o foco segue a matéria movida').toBeFocused();

  await page.reload();
  await expect(page.locator('.plano-info > a')).toHaveText(['Sintaxe', 'Morfologia']);
  await expect(page.locator('.continuar')).toContainText('Frase, oração e período');

  await page.locator('[data-acao="plano-remover"][data-materia="nucleo/portugues/morfologia"]').click();
  await expect(page.locator('.plano-item')).toHaveCount(1);
});

test('início mostra o próximo assunto do plano', async ({ page }) => {
  await abrir(page, 'nucleo/matematica/aritmetica');
  await page.locator('[data-acao="plano-add"]').click();
  await abrir(page);
  await expect(page.locator('.atalhos .continuar', { hasText: 'Próximo do plano' })).toContainText('Razão e proporção');
});
