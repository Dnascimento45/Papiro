# Testes

Os testes são de **ponta a ponta**, com [Playwright Test](https://playwright.dev): abrem o caderno num Chromium de verdade e usam como uma pessoa usaria. Cada teste roda em dois tamanhos de tela:

- **computador**: 1280 × 800;
- **celular**: 360 × 740, com toque.

---

## Rodando

```bash
npm install                      # primeira vez
npx playwright install chromium  # primeira vez
npm run testar                   # todos os testes (sobe o servidor na porta 5510 sozinho)
npm run relatorio                # relatório com capturas e trace das falhas
```

Para rodar só um arquivo: `npx playwright test carga`. Para um projeto: `--project=computador`.

---

## O que cada arquivo cobre

| Arquivo | Cobre |
|---|---|
| `navegacao.spec.js` | Cada tipo de página abre com o título certo; acessibilidade de links e botões; recursos do artefato escondidos fora dele. |
| `interacoes.spec.js` | Marcar estudado, flashcard, questão, busca, sumário, menu do celular, plano de estudos, pré-requisitos e filtros do banco. |
| `conteudo.spec.js` | Varre **todas** as páginas: título, avisos, blocos com erro, assunto sem texto e **rolagem horizontal em 360 px**. |
| `carga.spec.js` | Carga sob demanda: a abertura não baixa textos; um conteúdo por vez; busca no texto; questões de provas, listas e simulados; **índice dos textos em dia**. |
| `arquitetura.spec.js` | **Regra de camadas** de `js/` e ausência de **ciclos** de importação. |
| `visual.spec.js` | Compara capturas das páginas principais com `testes/prints/`. |

## Apoio comum (`testes/apoio.js`)

- Serve o `index.html` **com o embrulho do artefato** (sem a meta viewport, o celular desenharia como se tivesse 980 px).
- **Bloqueia** as fontes do Google, para não depender da internet e manter as capturas estáveis.
- Serve as **questões de teste** de `testes/dados/questoes/` no lugar de `questoes/`.
- **Falha** o teste se houver erro de JavaScript ou `console.error`.

---

## Capturas de tela

Mudou o visual **de propósito**? Atualize e **confira as imagens novas** antes do commit:

```bash
npm run testar:atualizar-prints
```

As capturas de referência foram tiradas no **Windows**. Em outro sistema as fontes mudam, e é preciso gerar outras.

---

## Regra do projeto

**Achou um bug? Ele vira um teste antes da correção.** O teste falha, a correção o faz passar, e o bug não volta.
