/* =====================================================================
   ÍNDICE DE ARQUIVOS DO CADERNO
   ---------------------------------------------------------------------
   Duas listas:
   1. ESTUDO.carregar([...]) → o que abre junto com o caderno: seções,
      estrutura (conteúdos, matérias, assuntos) e pré-requisitos. É leve.
   2. ESTUDO.textos([...])   → os textos dos assuntos. NÃO são baixados na
      abertura: cada um só chega quando um assunto do conteúdo dele é aberto
      (ou numa busca, no banco de questões e no assistente).

   Criou, renomeou ou mudou o "resumo" de um texto? Atualize a lista 2 e
   rode "npm run indice" para refazer conteudos/indice-textos.js.
   A ordem da lista 2 importa: os blocos de um assunto entram na ordem dos
   arquivos, e o id das questões autorais ("caminho#ordem") depende disso.

   Um arquivo com erro não derruba os outros: o caderno mostra um aviso
   no topo da página dizendo qual arquivo e qual linha conferir.

   Organização das pastas:
     conteudos/secoes.js        → as seções (Núcleo, Bloco A, Bloco C)
     conteudos/estrutura/*.js   → conteúdos, matérias e lista de assuntos
     conteudos/textos/*.js      → o conteúdo de cada assunto (textos,
                                  fórmulas, imagens, questões...)
   Guia completo com todos os tipos de bloco: conteudos/_MODELO.js
   ===================================================================== */
ESTUDO.carregar([
  "conteudos/secoes.js",

  /* Núcleo Comum */
  "conteudos/estrutura/nucleo-portugues.js",
  "conteudos/estrutura/nucleo-matematica.js",
  "conteudos/estrutura/nucleo-raciocinio-logico.js",
  "conteudos/estrutura/nucleo-informatica.js",
  "conteudos/estrutura/nucleo-direito-constitucional.js",
  "conteudos/estrutura/nucleo-direito-administrativo.js",
  "conteudos/estrutura/nucleo-etica.js",

  /* Bloco A · Federal */
  "conteudos/estrutura/a-lei-8112.js",
  "conteudos/estrutura/a-lei-9784.js",
  "conteudos/estrutura/a-etica-federal.js",
  "conteudos/estrutura/a-administracao.js",
  "conteudos/estrutura/a-arquivologia.js",
  "conteudos/estrutura/a-seguridade-social.js",
  "conteudos/estrutura/a-conhecimentos-gerais.js",

  /* Bloco C · Paraná e municípios */
  "conteudos/estrutura/c-curitiba.js",
  "conteudos/estrutura/c-parana.js",
  "conteudos/estrutura/c-regiao-metropolitana.js",
  "conteudos/estrutura/c-gestao-publica.js",
  "conteudos/estrutura/c-conhecimentos-regionais.js",
  "conteudos/estrutura/c-compartilhados.js",

  /* O que estudar antes de cada assunto (depois da estrutura) */
  "conteudos/prerequisitos.js",

  /* Mapa dos textos (gerado por "npm run indice") */
  "conteudos/indice-textos.js"
]);

ESTUDO.textos([
  /* Textos dos assuntos */
  "conteudos/textos/matematica-regra-de-tres.js",
  "conteudos/textos/matematica-numeros-aritmetica.js",
  "conteudos/textos/matematica-financeira-algebra.js",
  "conteudos/textos/matematica-geometria-estatistica.js",
  "conteudos/textos/raciocinio-logico.js",
  "conteudos/textos/portugues-texto-ortografia-morfologia.js",
  "conteudos/textos/portugues-sintaxe-pontuacao-semantica-redacao.js",
  "conteudos/textos/informatica.js",
  "conteudos/textos/direito-constitucional.js",
  "conteudos/textos/direito-administrativo.js",
  "conteudos/textos/etica.js",
  "conteudos/textos/lei-8112.js",
  "conteudos/textos/lei-9784.js",
  "conteudos/textos/etica-federal-gestao.js",
  "conteudos/textos/administracao.js",
  "conteudos/textos/arquivologia.js",
  "conteudos/textos/seguridade-social.js",
  "conteudos/textos/legislacao-local.js",
  "conteudos/textos/financas-orcamento.js",
  "conteudos/textos/conhecimentos-regionais.js",

  /* Aprofundamento: mais texto, exemplos e questões, depois do que já existe */
  "conteudos/textos/aprofundamento/matematica-1.js",
  "conteudos/textos/aprofundamento/matematica-2.js",
  "conteudos/textos/aprofundamento/raciocinio-logico.js",
  "conteudos/textos/aprofundamento/portugues-1.js",
  "conteudos/textos/aprofundamento/portugues-2.js",
  "conteudos/textos/aprofundamento/direito-administrativo.js",
  "conteudos/textos/aprofundamento/informatica.js",
  "conteudos/textos/aprofundamento/direito-constitucional.js",
  "conteudos/textos/aprofundamento/etica.js",

  /* Aprofundamento dos Blocos A e C */
  "conteudos/textos/aprofundamento/lei-8112-1.js",
  "conteudos/textos/aprofundamento/lei-8112-2.js",
  "conteudos/textos/aprofundamento/lei-9784.js",
  "conteudos/textos/aprofundamento/etica-federal-gestao.js",
  "conteudos/textos/aprofundamento/administracao.js",
  "conteudos/textos/aprofundamento/arquivologia.js",
  "conteudos/textos/aprofundamento/seguridade-social-1.js",
  "conteudos/textos/aprofundamento/seguridade-social-2.js",
  "conteudos/textos/aprofundamento/financas-orcamento.js",
  "conteudos/textos/aprofundamento/conhecimentos-regionais.js"
]);
