// Sincronização automática do progresso com a conta do Claude.
// O artefato é simulado: window.claude entrega uma conta falsa e um banco que mora no Node
// (um Map), assim o teste enxerga o que a página gravou e pode "mudar a conta" por fora,
// como se outro aparelho tivesse gravado.
const { test, expect, abrir } = require('./apoio');

const ASSUNTO = 'nucleo/matematica/aritmetica/regra-de-tres';
const DOC = 'data/users/u1/progresso';

/** Liga a conta falsa. `nuvem` é o Map do banco; `local` (opcional) é o que o navegador já tinha. */
async function ligarConta(page, nuvem, local) {
  await page.exposeFunction('__nuvem', (op, caminho, valor) => {
    if (op === 'get') return nuvem.has(caminho) ? nuvem.get(caminho) : null;
    if (op === 'set') nuvem.set(caminho, valor);
    if (op === 'delete') nuvem.delete(caminho);
    return null;
  });
  await page.addInitScript((estadoLocal) => {
    // Só prepara o navegador na primeira vez (depois de sincronizar, backupEm existe).
    if (estadoLocal && !localStorage.getItem('papiro.backupEm')) {
      Object.entries(estadoLocal).forEach(([k, v]) => localStorage.setItem(k, v));
    }
    window.claude = {
      use: async (nome) => {
        if (nome === 'user') return { me: async () => ({ id: 'u1', name: 'Teste' }) };
        if (nome === 'db') {
          return {
            doc: (caminho) => ({
              get: async () => {
                const dados = await window.__nuvem('get', caminho);
                return { exists: dados !== null, data: () => dados };
              },
              set: async (valor) => { await window.__nuvem('set', caminho, valor); },
              delete: async () => { await window.__nuvem('delete', caminho); },
            }),
          };
        }
        return null;
      },
    };
  }, local || null);
}

const pacote = (itens, salvoEm) => ({ versao: 1, salvoEm, estudados: '', respostas: '', listas: '', simulados: '', horas: '', plano: '', perfil: '', ...itens });

test('mudança feita aqui vai sozinha para a conta', async ({ page }) => {
  const nuvem = new Map();
  await ligarConta(page, nuvem);
  await abrir(page, ASSUNTO);

  await page.locator('[data-acao="estudado"]').click();
  await expect.poll(() => (nuvem.get(DOC) || {}).estudados || '', { timeout: 20000 }).toContain(ASSUNTO);
  await expect(page.locator('[data-acao="estudado"]')).toHaveAttribute('aria-pressed', 'true');
  expect(await page.evaluate(() => localStorage.getItem('papiro.pendente'))).toBe('false');
});

test('dados mais novos na conta chegam sozinhos, sem perguntar', async ({ page }) => {
  const nuvem = new Map([[DOC, pacote({ estudados: JSON.stringify({ [ASSUNTO]: 1700000000000 }) }, 5000)]]);
  await ligarConta(page, nuvem);
  await page.goto(`/index.html#${ASSUNTO.split('/').join('--')}`);

  await expect(page.locator('[data-acao="estudado"]')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.dialogo-fundo')).toHaveCount(0);
  expect(await page.evaluate(() => localStorage.getItem('papiro.backupEm'))).toBe('5000');
});

test('os dois lados mudaram: pergunta, e "Usar os da conta" troca os dados daqui', async ({ page }) => {
  const nuvem = new Map([[DOC, pacote({ estudados: JSON.stringify({ [ASSUNTO]: 1 }) }, 5000)]]);
  await ligarConta(page, nuvem, { 'papiro.estudados': '{"outro/assunto":2}', 'papiro.pendente': 'true' });
  await page.goto(`/index.html#${ASSUNTO.split('/').join('--')}`);

  await expect(page.locator('.dialogo-fundo')).toBeVisible();
  await page.locator('.dialogo [data-r="sim"]').click();
  await expect(page.locator('[data-acao="estudado"]')).toHaveAttribute('aria-pressed', 'true');
  expect(await page.evaluate(() => localStorage.getItem('papiro.estudados'))).not.toContain('outro/assunto');
});

test('os dois lados mudaram: "Cancelar" mantém os dados daqui e atualiza a conta', async ({ page }) => {
  const nuvem = new Map([[DOC, pacote({ estudados: JSON.stringify({ [ASSUNTO]: 1 }) }, 5000)]]);
  await ligarConta(page, nuvem, { 'papiro.estudados': '{"outro/assunto":2}', 'papiro.pendente': 'true' });
  await page.goto(`/index.html#${ASSUNTO.split('/').join('--')}`);

  await expect(page.locator('.dialogo-fundo')).toBeVisible();
  await page.locator('.dialogo [data-r="nao"]').click();
  await expect.poll(() => (nuvem.get(DOC) || {}).estudados || '').toContain('outro/assunto');
  expect(nuvem.get(DOC).salvoEm).toBeGreaterThan(5000);
});

test('sem mudança em nenhum dos lados, nada é gravado na conta', async ({ page }) => {
  const nuvem = new Map();
  await ligarConta(page, nuvem);
  await abrir(page);
  await page.waitForTimeout(500);
  expect(nuvem.size, 'navegador vazio e conta vazia: nada a enviar').toBe(0);
});
