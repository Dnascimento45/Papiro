// Roteiro "Testar sem framework" do CLAUDE.md, parte 1: cada tipo de página abre.
const { test, expect, abrir, irPara, semAvisos, arvore } = require('./apoio');

const ASSUNTO_MODELO = 'nucleo/matematica/aritmetica/regra-de-tres';

test('início mostra as seções e os totais do caderno', async ({ page }) => {
  await abrir(page);
  await semAvisos(page);
  await expect(page.locator('#conteudo h1')).toHaveText('Papiro');
  await expect(page.locator('.card-secao')).toHaveCount(3);
  const { assuntos } = await arvore(page);
  await expect(page.locator('#progresso-geral')).toHaveText(`0 de ${assuntos.length} estudados`);
  await expect(page).toHaveTitle('Papiro');
});

test('seção, conteúdo, matéria e assunto abrem com o título certo', async ({ page }) => {
  await abrir(page);
  const paginas = [
    ['nucleo', 'Núcleo Comum'],
    ['nucleo/matematica', 'Matemática'],
    ['nucleo/matematica/aritmetica', 'Aritmética'],
    [ASSUNTO_MODELO, 'Regra de três'],
  ];
  for (const [caminho, titulo] of paginas) {
    await irPara(page, caminho);
    await expect(page.locator('#conteudo h1')).toHaveText(titulo);
    await expect(page).toHaveTitle(`${titulo} · Papiro`);
    await semAvisos(page);
  }
});

test('conteúdo compartilhado do Bloco C abre o original do Bloco A', async ({ page }) => {
  await abrir(page, 'bloco-c');
  const tile = page.locator('.tile', { hasText: 'Arquivologia' });
  await expect(tile.locator('.ref')).toContainText('compartilhado');
  await tile.click();
  await expect(page).toHaveURL(/#bloco-a--arquivologia$/);
  await expect(page.locator('#conteudo h1')).toHaveText('Arquivologia');
});

test('assunto com texto mostra blocos e navegação entre assuntos', async ({ page }) => {
  await abrir(page, ASSUNTO_MODELO);
  await expect(page.locator('#conteudo .blocos')).toBeVisible();
  await expect(page.locator('#conteudo .vazio-box')).toHaveCount(0);
  await expect(page.locator('#conteudo .navegar a')).not.toHaveCount(0);
});

test('endereço inexistente mostra a página de não encontrado', async ({ page }) => {
  await abrir(page, 'nucleo/nao-existe');
  await expect(page.locator('#conteudo h1')).toHaveText('Esta página não existe');
  await expect(page.locator('#conteudo code')).toHaveText('nucleo/nao-existe');
  await page.locator('#conteudo a.btn', { hasText: 'Voltar ao início' }).click();
  await expect(page.locator('#conteudo h1')).toHaveText('Papiro');
});

for (const [rota, titulo] of [['questoes', 'Banco de questões'], ['listas', 'Listas de questões'], ['simulados', 'Simulados'], ['horas', 'Horas de estudo']]) {
  test(`página especial #${rota} abre`, async ({ page }) => {
    await abrir(page, rota);
    await semAvisos(page);
    await expect(page).toHaveTitle(`${titulo} · Papiro`);
    await expect(page.locator('#conteudo h1')).toBeVisible();
  });
}

test('fora do artefato, ranking, assistente, redação e perfil ficam escondidos', async ({ page }) => {
  await abrir(page);
  const nav = page.locator('#navegacao');
  await expect(nav.locator('a')).toHaveText(['Início', 'Questões', 'Listas', 'Simulados', 'Horas'].map((t) => new RegExp(`${t}$`)));
  await expect(page.locator('#perfil-mini')).toBeHidden();
});
