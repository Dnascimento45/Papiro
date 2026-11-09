# Conteúdo do caderno

Tudo o que o caderno ensina está em [`conteudos/`](../conteudos/), em arquivos JavaScript **clássicos** (não são módulos) que chamam o objeto global `ESTUDO`. Não é preciso mexer em `js/` para escrever conteúdo.

---

## Organização

```
Seção  →  Conteúdo  →  Matéria  →  Assunto  →  Blocos
Núcleo    Matemática   Aritmética   Regra de três   texto, fórmula, exemplo, questão…
```

Cada nível tem um **id** tirado do título, sem acento e com hífens. O caminho completo de um assunto vira o seu endereço:

```
nucleo/matematica/aritmetica/regra-de-tres   →   #nucleo--matematica--aritmetica--regra-de-tres
```

### Pastas

| Pasta ou arquivo | Conteúdo |
|---|---|
| `indice.js` | Lista do que abre com o caderno (`ESTUDO.carregar`) e a ordem dos textos (`ESTUDO.textos`). |
| `secoes.js` | As três seções: Núcleo Comum, Bloco A e Bloco C. |
| `estrutura/*.js` | Conteúdos, matérias e a lista de assuntos de cada um. |
| `textos/*.js` | O texto de cada assunto (primeira versão). |
| `textos/aprofundamento/*.js` | A segunda camada: "Aprofundando", tabelas, pegadinhas, livros e mais questões. |
| `prerequisitos.js` | O que convém estudar antes de cada assunto. |
| `indice-textos.js` | **Gerado** por `npm run indice`. Não edite à mão. |
| `_MODELO.js` | Guia de todos os tipos de bloco (referência, não é carregado). |

---

## Escrevendo um assunto

```js
ESTUDO.assunto("nucleo/matematica/aritmetica/regra-de-tres", {
  resumo: "Grandezas proporcionais e como montar a regra de três.",
  incidencia: "alta",
  conferir: "Nada a conferir.",          // aparece como aviso "Conferir"
  fontes: [{ titulo: "Fonte", url: "https://..." }],
  livros: [{ titulo: "Livro", autor: "Autor", nota: "Por que ler." }],
  blocos: [
    { tipo: "texto", titulo: "Ideia central", texto: ["Parágrafo.", "", "- item de lista"] },
    { tipo: "questao", banca: "Questão autoral de fixação",
      enunciado: "…", alternativas: ["…", "…"], correta: "A", comentario: "Por quê." },
  ],
});
```

### Tipos de bloco

`texto`, `resumo`, `dica`, `atencao`, `formula`, `passos`, `exemplo`, `tabela`, `python`, `lei`, `imagem`, `svg`, `flashcards`, `questao` e `link`. O formato de cada um está em [`conteudos/_MODELO.js`](../conteudos/_MODELO.js).

### Mini-marcação

`**negrito**`, `*itálico*`, `` `código` ``, `==destaque==`, `{{fórmula}}`; linhas com `- ` viram lista, `1. ` lista numerada e `### ` subtítulo. Linha vazia separa parágrafos.

---

## Passo a passo para conteúdo novo

1. Escreva o arquivo em `conteudos/textos/` (ou em `textos/aprofundamento/`).
2. Registre-o em `ESTUDO.textos([...])` de `conteudos/indice.js`. **A ordem importa**: o aprofundamento vem depois do texto original.
3. Rode `npm run indice` para refazer `conteudos/indice-textos.js`. (Mudou um `resumo`? Rode também.)
4. Para o aprofundamento, valide com `node ferramentas/conferir-aprofundamento.js <arquivo>`: caminhos existentes, gabaritos válidos e comentário em toda questão.
5. Abra o assunto no caderno e confira que **não aparece aviso** no topo (título ou caminho errado gera aviso).
6. Rode os testes (`npm run testar`).

---

## Regras de conteúdo

- **Não inventar dados.** Leis, datas, valores e regras de banca só com fonte. O que não foi confirmado leva `conferir`.
- **Questões autorais** levam `banca: "Questão autoral de fixação"`. Questão real de prova só com fonte (banca, ano, cargo).
- **Id das questões autorais:** `caminho-do-assunto#ordem`. Por isso, **questão nova vai sempre depois** das existentes; reordenar muda o id e apaga o histórico de respostas. Para reordenar, fixe um `id` no bloco.
- **Python:** a saída do bloco `python` é a de uma execução **real** do código.
- **Alternativas:** os arquivos de aprofundamento embaralham as alternativas de forma fixa (função `misturar`), para o gabarito não ficar sempre na mesma letra. Listas numéricas ficam em ordem.

---

## Pré-requisitos

Em `conteudos/prerequisitos.js`:

```js
ESTUDO.prerequisitos("nucleo/matematica", {
  "aritmetica/porcentagem": ["aritmetica/razao-e-proporcao"],
});
```

Até duas partes no caminho significam "dentro do conteúdo-base"; três ou mais, o caminho completo. Os pré-requisitos alimentam o aviso no topo do assunto, a lista "Este assunto é base para" e a ordenação do plano de estudos.

---

## Estado do conteúdo

- **377 assuntos**, todos com texto e com aprofundamento.
- **1.630 questões autorais.**
- **Legislação local** (Curitiba, Paraná, Região Metropolitana): o aprofundamento ensina o **modelo constitucional** e indica o que conferir em cada lei; os artigos locais ainda não estão no caderno.
