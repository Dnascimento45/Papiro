// Configuração dos testes automáticos do Papiro (Playwright Test).
// Rodar: npm run testar  ·  Relatório: npm run relatorio
// O próprio Playwright sobe um servidor local na porta 5510 antes dos testes.
const { defineConfig } = require('@playwright/test');

const PORTA = 5510;

module.exports = defineConfig({
  testDir: 'testes',
  outputDir: 'testes/resultados',
  snapshotPathTemplate: '{testDir}/prints/{projectName}/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [['list'], ['html', { outputFolder: 'testes/relatorio', open: 'never' }]],
  timeout: 60_000,
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: 'disabled', caret: 'hide' },
  },
  use: {
    baseURL: `http://127.0.0.1:${PORTA}`,
    locale: 'pt-BR',
    timezoneId: 'America/Sao_Paulo',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'computador',
      use: { browserName: 'chromium', viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'celular',
      use: { browserName: 'chromium', viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
    },
  ],
  webServer: {
    command: `npx http-server . -p ${PORTA} -c-1 --silent`,
    url: `http://127.0.0.1:${PORTA}/index.html`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
