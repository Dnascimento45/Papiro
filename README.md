# Papiro

Caderno de estudos para concursos públicos de nível médio dos **Blocos A (federal)** e **C (Paraná e municípios)**, com o conteúdo organizado pelo edital, banco de questões, simulados, plano de estudos e contador de horas.

É um projeto **pessoal**, feito para duas pessoas estudarem até as provas de 2027. Não é curso, não tem fins lucrativos e não substitui o edital oficial: datas, leis e valores que mudam estão marcados como **"Conferir"** dentro do próprio caderno.

> **Aviso:** o material foi escrito como apoio ao estudo. Leis, prazos e números foram conferidos na fonte oficial sempre que possível, mas a referência é sempre o **edital** e o **texto oficial** da lei.

---

## O que tem dentro

| Área | O que faz |
|---|---|
| **Caderno** | 3 seções, 19 conteúdos (mais 2 compartilhados entre os blocos) e **377 assuntos**, cada um com texto, tabelas, ilustrações, exemplos resolvidos e demonstrações em Python. Organização em Seção → Conteúdo → Matéria → Assunto. |
| **Aprofundamento** | Todos os assuntos têm uma segunda camada ("Aprofundando"), com mais teoria, pegadinhas de prova e livros recomendados. |
| **Banco de questões** | **1.630 questões autorais** ligadas aos assuntos e, no artefato, cerca de **19 mil questões de provas** anteriores (Cebraspe e FCC), filtráveis por conteúdo, assunto, origem, banca e situação. |
| **Listas e simulados** | Listas próprias de questões e simulados sorteados, com ou sem tempo, e histórico de resultados. |
| **Plano de estudos** | Escolha das matérias, ordem sugerida pelos **pré-requisitos** entre assuntos e o "próximo assunto" na página inicial. |
| **Horas** | Cronômetro de estudo por matéria, com totais por dia. |
| **Recursos do artefato** | Perfil vinculado à conta, ranking entre as duas pessoas, cópia do progresso na nuvem, assistente de dúvidas e correção de redação com o Claude. Só aparecem quando o Papiro roda como Artefato do claude.ai. |

### Escopo de conteúdo

- **Núcleo Comum:** Língua Portuguesa, Matemática, Raciocínio Lógico, Informática, Direito Constitucional, Direito Administrativo e Ética no Serviço Público.
- **Bloco A (federal):** Lei 8.112/1990, Lei 9.784/1999, Ética no Serviço Público Federal, Noções de Administração, Arquivologia, Seguridade Social e Realidade Brasileira e Gestão Federal.
- **Bloco C (Paraná e municípios):** Legislação de Curitiba, do Paraná e da Região Metropolitana, Finanças e Orçamento Público (com a LRF) e Conhecimentos Gerais do Paraná.

A legislação **local** (leis orgânicas e estatutos municipais e estaduais) ainda não tem os artigos: o caderno ensina o modelo constitucional que essas leis seguem e indica o que conferir em cada uma.

---

## Como usar

### No dia a dia

O Papiro roda publicado como **Artefato do claude.ai** (privado; as duas pessoas têm acesso de colaborador). Lá funcionam todos os recursos, inclusive ranking, assistente e as questões de provas.

### No computador (para desenvolver)

O site é **HTML, CSS e JavaScript puro**, sem build. Ele usa módulos ES, então precisa ser aberto **por um servidor HTTP**. Clicar no `index.html` não funciona: o navegador bloqueia os módulos e a página fica em "Carregando o caderno…".

**Opção 1: Live Server (VS Code).** Abra a pasta, clique com o botão direito em `index.html` e escolha *Open with Live Server*.

**Opção 2: Node.js.**

```bash
npm install
npm run servir        # http://127.0.0.1:5510
```

O progresso (assuntos estudados, respostas, listas, horas) fica no `localStorage` de cada navegador, com chaves `papiro.*`.

---

## Estrutura do repositório

```
index.html        Marcação da página (fragmento; o artefato a embrulha numa página completa)
css/              Estilos, um arquivo por responsabilidade
js/               Código do caderno, em módulos ES organizados em camadas
  main.js           Ponto de entrada
  nucleo/           Dados e regras: árvore de conteúdo, carga sob demanda, banco de questões
  interface/        Peças de tela reutilizadas: mini-marcação, blocos, componentes, diálogo
  paginas/          Telas: caderno, banco, listas, simulados, plano, horas
  plataforma/       Recursos do artefato: conta, ranking, perfil, assistente, redação
  app/              Aplicação: roteamento, menu lateral e eventos
conteudos/        O conteúdo do caderno (estrutura, textos, aprofundamento, pré-requisitos)
ferramentas/      Scripts de geração: índice dos textos, conversão de questões, validação
testes/           Testes automáticos (Playwright) e capturas de referência
docs/             Documentação e registros de decisão
```

Pastas que ficam **fora do git**: `questoes/` e `Banco de dados de questoes/` (questões de provas, com direitos autorais das bancas) e `contexto/` (pesquisas e conversas).

---

## Documentação

| Documento | Para quê |
|---|---|
| [Arquitetura](docs/arquitetura.md) | Camadas do código, regra de dependência, inicialização, carga sob demanda, rotas e estado. |
| [Conteúdo](docs/conteudo.md) | Como o caderno é organizado e como escrever ou aprofundar um assunto. |
| [Questões de provas](docs/questoes-de-provas.md) | Do CSV ao JSON carregado sob demanda, com ids estáveis. |
| [Testes](docs/testes.md) | Como rodar a suíte, o que cada arquivo cobre e como tratar as capturas. |
| [Publicação e fluxo de trabalho](docs/publicacao.md) | Como publicar no artefato e as regras de git do projeto. |
| [Decisões](docs/decisoes/) | Registros curtos das decisões de arquitetura. |
| [CLAUDE.md](CLAUDE.md) | Guia de trabalho para o Claude Code (contexto, convenções, backlog). |

---

## Comandos

| Comando | O que faz |
|---|---|
| `npm run servir` | Sobe o site em http://127.0.0.1:5510 |
| `npm run indice` | Gera `conteudos/indice-textos.js` (rode depois de mudar textos) |
| `npm run questoes` | Converte os CSVs de questões de provas em JSON (`questoes/`) |
| `npm run testar` | Roda todos os testes (computador e celular) |
| `npm run testar:atualizar-prints` | Atualiza as capturas de referência, quando o visual muda de propósito |
| `npm run relatorio` | Abre o relatório dos testes, com capturas e trace das falhas |

Na primeira vez numa máquina: `npm install` e `npx playwright install chromium`.

---

## Tecnologias

- **HTML, CSS e JavaScript** (módulos ES), sem framework e sem build.
- **Playwright Test** para testes de ponta a ponta, em computador (1280 px) e celular (360 px).
- **Artefato do claude.ai** para publicação, identidade, banco compartilhado (ranking e cópia do progresso) e chamadas ao Claude (assistente e redação).

## Origem

O Papiro nasceu como cópia do protótipo *Dojo de Estudos*, um projeto maior de plataforma de estudos, hoje pausado. Os dois repositórios evoluem separados.
