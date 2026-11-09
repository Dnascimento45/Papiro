# 0001 · Carga sob demanda dos textos e das questões de provas

**Data:** 2026-11-09 · **Situação:** adotada

## Contexto
O caderno baixava todos os arquivos de `conteudos/` na abertura (cerca de 1,3 MB). A chegada de
um banco de questões de provas em CSV (Cebraspe e FCC, cerca de 17 MB) tornou isso inviável.
O Daniel pediu que o artefato funcionasse "como uma API": cada tela busca só o que mostra.

## Decisão
1. **Questões de provas em JSON estático**, em `questoes/`, lidas com `fetch` só quando a tela
   precisa: `questoes/indice.json` e `questoes/<conteudo>/<banca>-<balde>.json`. É um REST só de
   leitura: um endereço por recurso. Funciona igual no artefato (arquivos publicados junto com a
   página) e no Live Server (arquivos da pasta do projeto).
2. **Id estável pelo texto:** `p:<conteudo>:<banca>:<hash de 12 caracteres>`. O hash ignora
   espaços e quebras de linha, então refazer a limpeza não muda ids. O primeiro caractere do
   hash escolhe o balde (16 por banca), e assim uma lista ou um simulado acha o arquivo só pelo id.
3. **Textos continuam em JS** (`ESTUDO.assunto`), mas só são baixados quando um assunto do
   conteúdo é aberto. Um índice gerado (`conteudos/indice-textos.js`, `npm run indice`) diz quais
   assuntos têm texto e o resumo de cada um, para listas e contagens funcionarem sem baixar nada.
   Um conteúdo chega sempre inteiro, com todos os arquivos ligados a ele, na ordem do índice,
   porque o id das questões autorais (`caminho#ordem`) depende da ordem dos blocos.
4. `questoes/` e a pasta dos CSVs ficam **fora do git** (o repositório é público e as questões
   têm direitos autorais das bancas). A suíte de testes usa um conjunto fictício em `testes/dados/`.

## Alternativas descartadas
- **Banco (`db`) do artefato:** serve para dados que as pessoas gravam (ranking). Para ~20 mil
  questões só de leitura seria lento, com cota, e não funcionaria no Live Server.
- **Converter os textos para JSON:** perderia comentários e o jeito atual de escrever conteúdo,
  sem ganho de carga (o que importa é baixar sob demanda, não o formato).

## Consequências
- A abertura caiu de ~1,6 MB para ~360 KB. O banco de questões baixa os textos (1 MB) e, ao
  escolher um conteúdo, as provas dele (até ~8 MB em Direito Administrativo).
- A busca procura nos títulos na hora e, na primeira busca, baixa os textos para procurar dentro deles.
- Criou dois passos manuais: `npm run indice` ao mudar textos (um teste avisa se esquecer) e
  `npm run questoes` ao trocar os CSVs.
- Português: 8.576 questões dependem de um texto-base que não veio no CSV. Ficam em
  `questoes/pendentes/` e não aparecem no caderno até o texto ser encontrado.
