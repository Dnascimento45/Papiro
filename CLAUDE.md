# CLAUDE.md — Papiro

> Caderno de estudos pessoal do Daniel e de uma amiga, para os concursos dos **Blocos A (federal) e C (Paraná e municípios)**.
> Nasceu como cópia do protótipo "Dojo de Estudos" (repositório irmão `dojo-de-estudos`), que continua sendo o projeto grande, pausado por enquanto.
> O Claude lê este arquivo no início de cada sessão. Mantenha-o atualizado.

---

## 1. Propósito

Um lugar simples para **estudar e planejar os estudos**: conteúdo organizado por edital, acompanhamento do que já foi estudado e um plano de estudos até as provas de 2027.

- **Usuárias:** duas pessoas (Daniel e uma amiga). Não é produto, não tem público, não tem monetização.
- **Escopo de conteúdo:** Núcleo Comum + Bloco A (federal) + Bloco C (Paraná e municípios). Blocos B, D, E e F ficam fora.
- **Aviso:** o Papiro é material de apoio e organização, não é curso. Datas, vagas e matérias vieram de blogs de cursinhos e **precisam ser conferidas no edital oficial** (campo `conferir`).

### Relação com o Dojo de Estudos
| | Dojo de Estudos | Papiro |
|---|---|---|
| Objetivo | Plataforma aberta, gamificada, todas as idades | Uso pessoal, duas pessoas |
| Complexidade | Backend, contas, IA, pagamentos (planejado) | O mínimo que resolva o estudo |
| Estado | Pausado, em fase de planejamento | **Ativo**, é o foco agora |
| Código | Repositório `dojo-de-estudos` | Cópia independente (este repositório) |

Os dois repositórios **não se sincronizam sozinhos**. Melhorias que valerem para os dois são copiadas à mão e registradas no commit. O que for específico do Papiro fica só aqui.

---

## 2. Estado atual

Protótipo funcional, sem build e sem backend (HTML + CSS + JS puro).

```
index.html                  Motor do caderno. Fragmento sem <!doctype>; o servidor o embrulha.
servir.ps1                  Servidor estático local (PowerShell), porta 8766.
.vscode/tasks.json          Tarefa do VS Code "Servir Papiro (porta 8766)".
conteudos/
  indice.js                 Arquivos carregados, na ordem do sumário.
  secoes.js                 Seções: nucleo, bloco-a, bloco-c.
  estrutura/*.js            Conteúdo → matérias → lista de assuntos.
  textos/*.js               Blocos de cada assunto (hoje só matematica-regra-de-tres.js).
  _MODELO.js                Guia de todos os tipos de bloco (referência, não é carregado).
contexto/                   Pesquisas que originaram o material (só referência).
```

**Rodar:** `powershell -ExecutionPolicy Bypass -File servir.ps1` e abrir http://localhost:8766 (ou a tarefa do VS Code).
**Porta 8766 e chaves `papiro.*` no `localStorage`:** diferentes do Dojo (8765, `dojo.*`) de propósito. O navegador isola o armazenamento por endereço, e assim o progresso dos dois projetos não se mistura.

### Modelo de conteúdo
Hierarquia **Seção → Conteúdo → Matéria → Assunto → Blocos**. Ids vêm do título, sem acento, com hífens (`nucleo/matematica/aritmetica/regra-de-tres`). Tipos de bloco, marcação de texto e metadados estão em [conteudos/_MODELO.js](conteudos/_MODELO.js).

### Limitações conhecidas
- A estrutura (sumário) está pronta, mas quase todos os assuntos ainda **não têm texto**. Só "Regra de três" está escrito.
- O progresso ("estudado") fica no `localStorage` de **cada navegador**: não passa de um aparelho para outro nem entre as duas pessoas.
- Visual somente escuro, herdado do Dojo.
- Não há planejador de estudos. É a próxima funcionalidade.

---

## 3. Backlog (em ordem proposta)

1. **Planejador de estudos:** cronograma semanal sobre os conteúdos do caderno (ex.: "esta semana: Português, Crase e pontuação"), com marcação do que foi cumprido. O plano-base já existe em `contexto/conversa-material-de-estudo.md` (núcleo comum → direito e estatuto → específicos do edital → grandes editais).
2. **Escrever os textos** dos assuntos, começando pelo Núcleo Comum, com fonte e conferência.
3. **Contador de horas de estudo** por matéria.
4. **Revisão com flashcards** (blocos `flashcards` já existem no motor).
5. **Questões** com gabarito comentado.
6. **Compartilhar progresso entre as duas pessoas.** Exige backend ou um serviço gerenciado. Só entra se valer o esforço (ver §5).

---

## 4. Forma de trabalho (regras para o Claude)

### Postura
- **Obediência com honestidade:** seguir o que o Daniel pedir, do melhor jeito e com boas práticas. Se houver caminho melhor, **parar e propor antes de executar**.
- **Projeto de aprendizado:** explicar o porquê das decisões, nomear os conceitos e indicar materiais de estudo quando houver lacuna que trave o avanço.
- **Manter simples.** É um projeto para duas pessoas: preferir a solução mais simples que funcione. Não importar a complexidade do Dojo (frameworks, banco, autenticação) sem necessidade real.
- **Não inventar dados.** Datas, vagas, leis e matérias só com fonte. O que não for confirmado fica marcado como `conferir`.
- Perguntar quando a decisão for do Daniel (escopo, gasto, publicação). Decidir sozinho só o que tem padrão consolidado, e avisar.

### Idioma
Conversa, documentação, commits e interface em **português do Brasil**, com acentuação correta. No código, manter o padrão do arquivo editado.

### Git
- Branch `main` sempre funcionando. Trabalho novo em branch própria (`feat/`, `fix/`, `docs/`, `chore/`) quando a mudança for grande; mudanças pequenas e isoladas podem ir direto em `main`.
- **Commits pequenos e coesos, feitos conforme avança**, no padrão Conventional Commits com descrição em português: `feat: adiciona planejador semanal`, `docs: escreve texto de crase`, `fix: corrige marcação de estudado`.
- Nunca versionar segredos (`.env`, chaves). Nunca `push --force` em `main`, nem pular hooks.
- Decisões relevantes (ex.: adotar backend) viram um registro curto em `docs/decisoes/NNNN-titulo.md`.

### Definição de pronto
1. Funciona no navegador, testado à mão (ou com testes, se existirem).
2. Legível no celular (360px de largura), já que será usado para estudar.
3. Acessível: contraste, navegação por teclado, texto legível.
4. Conteúdo com fonte e marcação `conferir` quando não confirmado.
5. CLAUDE.md atualizado se algo mudou.
6. Commit feito com mensagem clara.

---

## 5. Decisões em aberto
- [ ] **Como a amiga acessa?** Opções: (a) hospedar como site estático, por exemplo no GitHub Pages (grátis, sem servidor, mas o progresso continua local em cada navegador); (b) mandar a pasta e ela roda o servidor (exige Windows/PowerShell); (c) backend para sincronizar progresso (mais trabalho).
- [ ] **Repositório remoto no GitHub:** público ou privado? O GitHub Pages grátis exige repositório público, ou plano pago para privado. A pasta `contexto/` tem conversas exportadas, então revisar antes de publicar.
- [ ] **Texto do conteúdo:** quem escreve e como conferimos as fontes?
- [ ] **Tema claro** para leitura longa (hoje só existe o escuro)?
- [ ] **Planejador:** os dados dele ficam no `localStorage` ou em arquivo exportável/importável (para o backup)?

## 6. Próximos passos
1. Revisar este documento e responder às decisões em aberto.
2. Desenhar o planejador de estudos (quais telas, quais dados) antes de codar.
3. Escolher o primeiro conteúdo do Núcleo Comum para escrever.
