// Varre o caderno inteiro: cada seção, conteúdo, matéria e assunto abre sem aviso,
// sem erro de JavaScript, com o título certo e com texto. No celular, nenhuma página
// pode ter rolagem horizontal (o texto precisa caber em 360px).
// Os problemas são juntados numa lista só, para o relatório mostrar todos de uma vez.
const { test, expect, abrir, arvore, hashDe } = require('./apoio');

/** Troca o endereço, espera o redesenho e devolve o que a página mostrou. */
async function visitar(page, caminho) {
  return page.evaluate(async (h) => {
    if (location.hash !== h) {
      await new Promise((ok) => {
        window.addEventListener('hashchange', ok, { once: true });
        location.hash = h;
      });
    }
    await new Promise((ok) => requestAnimationFrame(() => ok()));
    const c = document.getElementById('conteudo');
    return {
      h1: (c.querySelector('h1') || {}).textContent || '',
      avisos: c.querySelectorAll('.problemas').length,
      blocosComErro: [...c.querySelectorAll('.aviso-bloco')].map((e) => e.textContent.trim().slice(0, 160)),
      vazio: c.querySelectorAll('.vazio-box').length,
      // Régua: clientWidth (a largura da tela). No celular, quando algo transborda, o Chrome
      // afasta o zoom e o innerWidth cresce junto com o conteúdo, escondendo o problema.
      larguraExtra: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      cortados: foraDaTela(c),
    };

    /* Elementos que passam da borda da tela. Medir só a rolagem não basta: o .bloco usa
       overflow:hidden e cortaria o excesso sem rolagem nenhuma. O que está dentro de uma
       caixa com rolagem própria (tabela, código) pode ser largo, porque a caixa rola. */
    function foraDaTela(raiz) {
      const largura = document.documentElement.clientWidth;
      const rolaSozinho = (el) => {
        for (let p = el.parentElement; p && p !== raiz; p = p.parentElement) {
          const ox = getComputedStyle(p).overflowX;
          if (ox === 'auto' || ox === 'scroll') return true;
        }
        return false;
      };
      const achados = [];
      for (const el of raiz.querySelectorAll('*')) {
        if (el.closest('[aria-hidden="true"], .sr-only')) continue;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        if ((r.right > largura + 1 || r.left < -1) && !rolaSozinho(el)) {
          const nome = el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? `.${el.className.trim().split(/\s+/).join('.')}` : '');
          achados.push(`${nome} (${Math.round(r.left)}→${Math.round(r.right)}px)`);
        }
      }
      return achados.slice(0, 3);
    }
  }, hashDe(caminho));
}

test('nenhum aviso de carregamento e 377 assuntos na árvore', async ({ page }) => {
  await abrir(page);
  await expect(page.locator('#conteudo .problemas')).toHaveCount(0);
  const { assuntos } = await arvore(page);
  expect(assuntos.length).toBe(377);
});

test('todas as páginas do caderno abrem sem problema', async ({ page, erros }) => {
  test.setTimeout(5 * 60_000);
  await abrir(page);
  const { secoes, conteudos, materias, assuntos } = await arvore(page);
  const celular = page.viewportSize().width <= 920;
  const problemas = [];

  for (const no of [...secoes, ...conteudos, ...materias, ...assuntos]) {
    const errosAntes = erros.length;
    const r = await visitar(page, no.caminho);
    const onde = `${no.tipo} ${no.caminho}`;
    if (r.h1 !== no.titulo) problemas.push(`${onde}: título "${r.h1}" (esperado "${no.titulo}")`);
    if (r.avisos) problemas.push(`${onde}: aviso no topo`);
    r.blocosComErro.forEach((t) => problemas.push(`${onde}: bloco com erro: ${t}`));
    if (no.tipo === 'assunto' && r.vazio) problemas.push(`${onde}: assunto sem texto`);
    if (celular && r.larguraExtra > 0) problemas.push(`${onde}: ${r.larguraExtra}px de rolagem horizontal em 360px`);
    if (celular && r.cortados.length) problemas.push(`${onde}: passa da tela em 360px: ${r.cortados.join(', ')}`);
    erros.slice(errosAntes).forEach((e) => problemas.push(`${onde}: ${e}`));
  }

  expect(problemas, `${problemas.length} problemas`).toEqual([]);
});
