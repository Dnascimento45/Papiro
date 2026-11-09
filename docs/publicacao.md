# Publicação e fluxo de trabalho

## Onde o Papiro roda

| Ambiente | Para quê | Recursos |
|---|---|---|
| **Artefato do claude.ai** (privado) | Uso no dia a dia pelas duas pessoas | Todos: perfil, ranking, cópia na nuvem, assistente, redação e questões de provas |
| **Live Server ou `npm run servir`** | Desenvolvimento | Caderno, banco, listas, simulados, plano e horas; os recursos do artefato somem do menu |

O progresso local e o do artefato são **separados** (endereços diferentes, `localStorage` diferentes).

---

## Publicando no artefato

A publicação é feita pelo Claude Code, com a ferramenta de artefatos, a partir do `index.html` (a página) e dos **arquivos de apoio**, todos com o caminho relativo igual ao do repositório:

- `css/*.css`;
- `js/**/*.js` (todas as camadas);
- `conteudos/**/*.js`, **exceto** `_MODELO.js`;
- `questoes/indice.json` e `questoes/<conteudo>/*.json`, **sem** `questoes/pendentes/`.

Cuidados:

- **Republicar** mantém os arquivos que não foram enviados. Se um arquivo **mudou de lugar**, o caminho antigo precisa ser **removido** na publicação, ou fica lá sem uso.
- As **capacidades** declaradas (`user`, `db` com as regras do ranking, `sample` com imagens) são mantidas entre publicações; só passe outras se a intenção for mudá-las.
- O artefato é **privado**. As duas pessoas precisam de acesso de **colaborador** para gravar no ranking e na cópia na nuvem; o compartilhamento é feito pelo menu da própria página.
- Antes de publicar: `npm run indice` (se os textos mudaram) e `npm run testar`.

---

## Git

- **`main` sempre funcionando.** Trabalho grande em branch própria (`feat/`, `fix/`, `docs/`, `chore/`, `refactor/`); mudança pequena e isolada pode ir direto na `main`.
- **Commits pequenos e coesos**, em [Conventional Commits](https://www.conventionalcommits.org/pt-br/) com descrição em português: `feat: adiciona planejador semanal`, `docs: escreve texto de crase`, `fix: corrige marcação de estudado`.
- **Nunca** versionar segredos (`.env`, chaves), nem `questoes/`, `Banco de dados de questoes/` e `contexto/` (o repositório é **público**).
- **Nunca** `push --force` na `main`, nem pular hooks.
- Decisões relevantes viram um registro curto em [`docs/decisoes/`](decisoes/).

## Definição de pronto

1. Funciona no navegador, com testes passando.
2. Legível no celular (360 px).
3. Acessível: contraste, navegação por teclado, texto legível.
4. Conteúdo com fonte, e `conferir` no que não foi confirmado.
5. Documentação atualizada (README, `docs/`, CLAUDE.md) se algo mudou.
6. Commit com mensagem clara.
