// Compara as páginas principais com capturas de referência (testes/prints/<projeto>/).
// Mudou o visual de propósito? Confira o relatório e atualize: npm run testar:atualizar-prints
// As fontes do Google ficam bloqueadas nos testes (veja apoio.js), então as capturas
// usam as fontes reservas do sistema: servem para pegar mudança de layout, não de tipografia.
const { test, expect, abrir } = require('./apoio');

const PAGINAS = [
  ['inicio', ''],
  ['secao', 'nucleo'],
  ['conteudo', 'nucleo/matematica'],
  ['materia', 'nucleo/matematica/aritmetica'],
  ['assunto', 'nucleo/matematica/aritmetica/regra-de-tres'],
  ['nao-encontrado', 'nucleo/nao-existe'],
  ['questoes', 'questoes'],
];

for (const [nome, caminho] of PAGINAS) {
  test(`visual: ${nome}`, async ({ page }) => {
    await abrir(page, caminho);
    await expect(page).toHaveScreenshot(`${nome}.png`);
  });
}

test('visual: menu aberto no celular', async ({ page }) => {
  test.skip(page.viewportSize().width > 920, 'só no celular');
  await abrir(page);
  await page.locator('#btn-menu').click();
  // O painel entra deslizando (transition de .25s): espera chegar ao lugar antes da captura.
  await page.waitForFunction(() => getComputedStyle(document.getElementById('painel')).transform === 'none');
  await expect(page).toHaveScreenshot('menu-aberto.png');
});
