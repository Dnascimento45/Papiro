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

Protótipo funcional, sem build e sem backend (HTML + CSS + JS puro). Como usa módulos ES, precisa ser aberto por HTTP (Live Server ou o artefato), não clicando no arquivo: em `file://` o Chrome bloqueia os módulos e a página fica em "Carregando o caderno…".

```
index.html                  Só a marcação da página. Fragmento sem <!doctype>; o artefato o embrulha numa página completa.
css/                        Estilos, um arquivo por responsabilidade:
  base.css                    tokens (cores, fontes), reset e tipografia
  layout.css                  painel lateral (único menu), folha de leitura, marca-d'água
  arvore.css                  sumário lateral e resultados da busca
  componentes.css             peças reutilizadas (cabeçalho, chips, barras, avisos)
  paginas.css                 início, seção, conteúdo, matéria e assunto
  blocos.css                  blocos de conteúdo (texto, fórmula, questão…)
  estudo.css                  plano de estudos, banco de questões, listas, simulados e horas
  plataforma.css              ranking, perfil, assistente, redação e diálogo de confirmação
  responsivo.css              media queries
js/                         Motor do caderno, em módulos ES (sem build):
  main.js                     ponto de entrada; expõe window.ESTUDO e carrega conteudos/indice.js
  registro.js                 API ESTUDO.* usada por conteudos/*.js e carregamento dos arquivos
  modelo.js                   monta a árvore Seção→Conteúdo→Matéria→Assunto; contagens, progresso e pré-requisitos
  estado.js                   estado compartilhado (avisos, estudados, sumário aberto, página atual)
  texto.js                    mini-marcação (**negrito**, listas, fórmulas)
  blocos.js                   um desenhista de HTML por tipo de bloco
  componentes.js              peças de HTML compartilhadas pelas vistas
  vistas.js                   uma função por tipo de página
  sumario.js                  navegação das ferramentas, árvore de conteúdo e busca
  eventos.js                  cliques, teclado, menu, flashcards e questões
  plano.js                    plano de estudos (#plano): matérias escolhidas, ordem, avisos de pré-requisito
  rotas.js                    páginas especiais: #plano, #questoes, #listas, #simulados, #horas, #rank, #assistente, #redacao, #perfil
  banco.js                    banco de questões (montado dos blocos questao), respostas, listas, simulados
  vistas-questoes.js          páginas e ações do banco, das listas e dos simulados
  horas.js                    cronômetro do menu e página de horas (por dia e por matéria)
  plataforma.js               acesso ao artefato (conta, banco compartilhado, Claude); tudo null fora dele
  rank.js                     ranking: envia só os meus números (rank/<id>) e desenha os quadros
  perfil.js                   perfil, apelido e cópia do progresso na nuvem
  claude.js                   erros em português e leitura de anexos para o assistente e a redação
  assistente.js               chat de dúvidas, com ferramenta que busca questões no banco
  redacao.js                  correção de redação por texto ou foto
  dialogo.js                  confirmação dentro da página (confirm() não funciona no artefato)
  app.js                      lê o endereço (#) e desenha a página
  util.js                     funções puras e acesso ao localStorage
.editorconfig               Estilo comum de arquivos (UTF-8, LF, 2 espaços).
package.json                Só para os testes (o site não usa Node): Playwright Test e http-server.
playwright.config.js        Configuração dos testes: computador (1280px) e celular (360px), servidor na porta 5510.
testes/
  apoio.js                    serve o index.html com o embrulho do artefato, bloqueia fontes, falha em erro de console
  navegacao.spec.js           cada tipo de página abre; recursos do artefato escondidos fora dele
  interacoes.spec.js          estudado, flashcard, questão, busca, sumário e menu do celular
  conteudo.spec.js            varre todas as páginas: título, avisos, blocos com erro, texto e largura em 360px
  visual.spec.js              compara capturas das páginas principais com testes/prints/
conteudos/
  indice.js                 Arquivos carregados, na ordem do sumário.
  secoes.js                 Seções: nucleo, bloco-a, bloco-c.
  estrutura/*.js            Conteúdo → matérias → lista de assuntos.
  textos/*.js               Blocos de todos os 377 assuntos, um arquivo por conteúdo (ou por grupo de matérias).
  prerequisitos.js          O que estudar antes de cada assunto (ESTUDO.prerequisitos); alimenta o aviso no assunto e o plano.
  _MODELO.js                Guia de todos os tipos de bloco (referência, não é carregado).
contexto/                   Pesquisas que originaram o material (só neste computador: fora do git, porque o repositório é público).
```

**Rodar localmente:** no VS Code, com a extensão **Live Server**, abrir o `index.html` com "Open with Live Server" (abre no Chrome, em geral em http://127.0.0.1:5500). **Uso no dia a dia:** o link do artefato.
**Chaves `papiro.*` no `localStorage`:** diferentes das do Dojo (`dojo.*`) de propósito, porque o Live Server pode usar o mesmo endereço para os dois projetos. O progresso local (Live Server) e o do artefato ficam separados: são endereços diferentes.

### Modelo de conteúdo
Hierarquia **Seção → Conteúdo → Matéria → Assunto → Blocos**. Ids vêm do título, sem acento, com hífens (`nucleo/matematica/aritmetica/regra-de-tres`). Tipos de bloco, marcação de texto e metadados estão em [conteudos/_MODELO.js](conteudos/_MODELO.js).

### Convenções de código
- **JavaScript:** módulos ES (`import`/`export`), `const`/`let`, funções pequenas com um papel só. Nomes em português, como no resto do projeto. Os arquivos de `conteudos/` **não** são módulos: continuam chamando o global `ESTUDO.*`.
- **CSS:** uma declaração por linha; cada arquivo em `css/` cuida de um assunto. Cores e fontes só pelas variáveis de `css/base.css`. Evitar `style="..."` no HTML gerado, exceto para valores calculados (largura de barra, nível da árvore).
- **Dependência entre módulos:** `util` ← `estado` ← `registro` ← `modelo` ← (`texto`, `blocos`, `componentes`, `plano`, `vistas`, `sumario`) ← `eventos`, `app` ← `main`. O `plano` usa `componentes` e é usado por `vistas`, `rotas` e `eventos`. Não criar ciclos.
- **No artefato, `confirm()`, `alert()` e `prompt()` não funcionam** (devolvem sempre "não"): use `confirmar()` de `js/dialogo.js`. Recursos do artefato sempre passam por `js/plataforma.js` e precisam se esconder quando forem `null`.
- **Conteúdo novo:** escreva em `conteudos/textos/`, registre o arquivo em `conteudos/indice.js` e confira que o caderno não mostra aviso (título errado de assunto gera aviso no topo). A saída dos blocos `python` deve ser a de uma execução real.
- **Testes automáticos (Playwright):** `npm run testar` roda tudo (sobe o servidor sozinho); `npm run relatorio` abre o relatório com prints e trace das falhas. Mudou o visual de propósito? `npm run testar:atualizar-prints` e confira as novas capturas antes de commitar. Achou um bug? Ele vira um teste novo em `testes/` antes da correção. Primeira vez numa máquina: `npm install` e `npx playwright install chromium`. As capturas de referência foram tiradas no Windows: em outro sistema as fontes mudam e é preciso gerar outras.
- **Teste à mão (complementa):** abrir pelo Live Server e navegar. Mexeu no motor? Confira início, seção, conteúdo, matéria, assunto com texto, assunto vazio e endereço inexistente; marque "estudado", vire um flashcard, responda uma questão e use a busca. A suíte cobre esse roteiro, menos o assunto vazio (hoje todos os 377 têm texto).

### Limitações conhecidas
- **Todos os 377 assuntos têm texto** (primeira versão, compacta), com 380 questões **autorais** no banco. Nenhuma questão de banca foi inventada: questões reais de prova só com fonte.
- Muito do conteúdo foi escrito de memória: leis, datas e valores que mudam estão marcados `conferir`. A **legislação de Curitiba, do Paraná e da RMC** não tem os artigos locais: cada assunto traz o que a CF exige, a comparação com a Lei 8.112 e um roteiro do que ler na lei local.
- **Python não roda no caderno**: o bloco `python` mostra o código e a saída (conferida rodando o código antes de publicar) numa aba recolhida e manda copiar para o Colab.
- Progresso, respostas, listas, simulados e horas ficam no `localStorage` de **cada navegador**. Para passar para outro aparelho: "Salvar agora" no perfil (cópia na nuvem) e "Restaurar" no outro.
- Ranking, assistente, redação e perfil **só funcionam com o Papiro publicado como artefato** e a pessoa logada. No servidor local o menu os esconde.
- As duas pessoas precisam de acesso de **colaborador** ao artefato para gravar no ranking e na cópia da nuvem.
- Não existe data de nascimento no perfil: o vínculo é a própria conta do Claude, que a plataforma verifica. Uma data digitada seria só autodeclarada.
- Visual somente escuro, herdado do Dojo.
- O plano de estudos organiza **matérias e ordem**; ainda não tem calendário (dias da semana, metas de horas).
- Os pré-requisitos de `conteudos/prerequisitos.js` são sugestão pedagógica escrita a partir da lista de assuntos; ajuste conforme o estudo mostrar.

---

## 3. Backlog (em ordem de prioridade)

**Feito:**
1. ~~Banco de questões, listas e simulados~~ (`#questoes`, `#listas`, `#simulados`).
2. ~~Contador de horas por dia e por matéria~~ (cronômetro no menu, `#horas`).
3. ~~Publicado como Artefato~~ + perfil vinculado à conta do Claude (`#perfil`), com cópia do progresso na nuvem.
4. ~~Ranking~~ de horas e questões (`#rank`), só para quem escolhe participar.
5. ~~Assistente de dúvidas~~ com anexo de imagens e arquivos de texto, que busca questões no banco (`#assistente`).
6. ~~Correção de redações~~ por texto ou foto da folha (`#redacao`).
7. ~~Primeira versão dos textos de todos os assuntos~~, com SVG, demonstrações em Python e questões autorais; foto de perfil no ranking.

**Próximos, nesta ordem** (definida em 2026-11-09):
8. ~~**Código Python recolhido**~~: o bloco `python` mostra só o texto; código e saída abrem na aba "Ver código em Python".
9. ~~**Limpeza e boas práticas**~~: código repetido juntado, exportações sem uso fechadas, CSS redundante removido; campo `livros` ("Para aprofundar") criado. O formato JSON das provas ficou para depois, por decisão do Daniel.
10. ~~**Pré-requisitos**~~: `conteudos/prerequisitos.js` (304 assuntos, 355 ligações); quadro no assunto e na matéria, lista "Este assunto é base para".
11. ~~**Bloco de estudos (planejador)**~~ (`#plano`): escolhe matérias, define a ordem (setas ou "Ordenar pelos pré-requisitos"), progresso pelos assuntos estudados, avisos de base fora de ordem e "Próximo do plano" no início. Próximo passo possível: calendário semanal (plano-base em `contexto/conversa-material-de-estudo.md`).
12. **Conteúdo aprofundado (trilha contínua):** mais exemplos, livros recomendados por tema, e conferência dos itens `conferir` (leis locais, valores anuais, regras de transição). Começar pelos assuntos mais cobrados do edital mais próximo.
13. **Provas passadas** dos concursos dos Blocos A e C, com banca, ano, cargo e fonte, em **JSON estático carregado sob demanda** (opção A): `provas/indice.json` pequeno e um arquivo por prova em `provas/<banca>/<ano>-<cargo>.json`, lido por `fetch` só quando a prova é aberta. O `banco.js` passa a ler também desses arquivos. **O id de cada questão precisa ser estável**, para não perder o histórico de respostas. Se o volume ficar grande, migrar para o banco (`db`) do artefato. Antes de começar: listar os concursos e bancas do escopo (em `contexto/`) e estimar o número de provas.
14. **Revisão com flashcards** (blocos `flashcards` já existem no motor).
15. **Anexo de PDF** no assistente e ranking de questões por semana.

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
- [x] **Publicar como Artefato do claude.ai?** Decidido: sim (publicado em 2026-11-09). Detalhes abaixo valem como registro. Dá, sem backend próprio: identidade (`user.id()`), banco compartilhado (`db`) para ranking e sincronização, e `sample` para o assistente e a redação (inclui imagens). Custo: o Papiro passa a depender da plataforma de artefatos e das regras dela, e as duas pessoas precisam de acesso à organização/compartilhamento. **Vínculo por data de nascimento:** não dá para verificar; seria só um dado autodeclarado, então a conta Claude (id do usuário) é o vínculo confiável e a data fica fora, salvo necessidade real.
- [x] **Repositório remoto no GitHub:** decidido: público, em https://github.com/Dnascimento45/Papiro (2026-11-09). A pasta `contexto/` (conversas exportadas) foi tirada do histórico antes do primeiro envio e fica no `.gitignore`.
- [ ] **Provas passadas e o repositório público:** o repositório é público e as provas têm direitos autorais das bancas. Opções: colocar `provas/` no `.gitignore` (como `contexto/`; mas então o artefato precisa receber os arquivos pela publicação) ou tornar o repositório privado. O uso é pessoal, sem fins monetários.
- [ ] **Texto do conteúdo:** quem escreve e como conferimos as fontes?
- [ ] **Tema claro** para leitura longa (hoje só existe o escuro)?
- [x] **Planejador:** decidido (2026-11-09): `localStorage` (`papiro.plano`), incluído na cópia da nuvem do perfil, como o resto do progresso.

## 6. Próximos passos
1. Revisar este documento e responder às decisões em aberto.
2. Decidir se o plano ganha calendário semanal (dias e horas por matéria).
3. Conferir os assuntos marcados `conferir`, começando pela legislação do edital mais próximo.
