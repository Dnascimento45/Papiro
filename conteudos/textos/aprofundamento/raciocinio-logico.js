/* Aprofundamento · Raciocínio Lógico.
   Acrescenta texto, exemplos e questões DEPOIS do que já existe em textos/raciocinio-logico.js. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`nucleo/raciocinio-logico/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Raciocínio Lógico Simplificado (vols. 1 e 2)", autor: "Sérgio Carvalho e Weber Campos", nota: "Feito para concurso, com muitas questões de banca resolvidas." },
    { titulo: "Iniciação à Lógica Matemática", autor: "Edgard de Alencar Filho", nota: "Clássico de lógica proposicional: tabelas-verdade, equivalências e argumentos." },
    { titulo: "Análise Combinatória e Probabilidade", autor: "Augusto C. Morgado e outros (SBM)", nota: "O melhor para contagem e probabilidade com raciocínio, sem decorar fórmula." },
    { titulo: "Portal da OBMEP (Portal do Saber)", url: "https://portaldaobmep.impa.br", nota: "Videoaulas gratuitas de lógica, contagem e probabilidade." },
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar com questões de prova",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Disciplina Raciocínio Lógico; o Cebraspe cobra muito no formato certo/errado." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas por assunto." },
      { titulo: "PCI Concursos · provas anteriores", url: "https://www.pciconcursos.com.br/provas/", nota: "Provas completas e gratuitas." },
    ],
  };

  /* ================= LÓGICA PROPOSICIONAL ================= */

  A("logica-proposicional/proposicoes-e-conectivos", [
    aprofundar([
      "### O que NÃO é proposição",
      "Proposição é uma frase **declarativa** que pode ser julgada como verdadeira **ou** falsa. Não são proposições:",
      "- perguntas (“Que horas são?”), ordens (“Estude!”) e exclamações (“Que dia lindo!”);",
      "- **sentenças abertas**, com variável sem valor (“x + 3 = 10”, “Ele é servidor”);",
      "- **paradoxos** (“Esta frase é falsa”), que não podem ser nem V nem F.",
      "",
      "### Traduções que as bancas adoram",
      "- “**mas**”, “embora”, “porém” = conjunção (∧).",
      "- “**nem** p **nem** q” = ~p ∧ ~q.",
      "- “**ou** p **ou** q” (com os dois “ou”) = disjunção **exclusiva** (⊻): só um pode ser verdadeiro.",
      "- “p **somente se** q”, “q, **se** p”, “**quando** p, q”, “p **implica** q” = p → q.",
      "- “p é condição **suficiente** para q” = p → q; “q é condição **necessária** para p” = p → q.",
      "- “p **se e somente se** q” = p ↔ q (condição necessária **e** suficiente).",
    ]),
    PRATICAR,
    q("Qual das frases abaixo é uma proposição?", ["Que horas são?", "Estude para a prova!", "x + 3 = 10", "Curitiba é a capital do Paraná.", "Esta frase é falsa."], "D",
      "Só a D é declarativa e pode ser julgada (é verdadeira). A sentença com x é aberta, e a última é um paradoxo."),
    ce("A frase “João não é servidor nem estagiário” pode ser representada por ~p ∧ ~q, em que p é “João é servidor” e q é “João é estagiário”.", "Certo",
      "“Nem… nem” nega as duas partes e as liga com “e”."),
    q("“Ser aprovado é condição necessária para ser nomeado.” Essa frase equivale a:", ["Se for aprovado, então será nomeado.", "Se for nomeado, então foi aprovado.", "Ser nomeado é necessário para ser aprovado.", "Foi aprovado e foi nomeado.", "Se não for nomeado, então não foi aprovado."], "B",
      "A condição necessária fica depois da seta: nomeado → aprovado. Quem foi nomeado, necessariamente foi aprovado."),
  ]);

  A("logica-proposicional/tabela-verdade", [
    aprofundar([
      "### Quantas linhas",
      "Com n proposições simples diferentes, a tabela tem **2ⁿ linhas**: 2 para uma, 4 para duas, 8 para três, 16 para quatro.",
      "",
      "### Os casos que decidem",
      "- **∧** só é V quando as duas são V.",
      "- **∨** só é F quando as duas são F.",
      "- **→** só é F em **V → F** (a “Vera Fischer”: V e F).",
      "- **↔** é V quando os dois lados têm o **mesmo** valor.",
      "- **⊻** é V quando os dois lados têm valores **diferentes**.",
      "",
      "### Calcular com valores dados",
      "Quando a banca já informa o valor de p, q, r, não monte a tabela: substitua e resolva de dentro para fora.",
    ]),
    PRATICAR,
    q("Quantas linhas tem a tabela-verdade da proposição (p ∧ q) → (r ∨ s)?", ["4", "8", "12", "16", "32"], "D", "Quatro proposições simples: 2⁴ = 16."),
    ce("Se p é verdadeira, q é falsa e r é verdadeira, então a proposição (p → q) ∨ (q ↔ r) é verdadeira.", "Errado",
      "p → q = V → F = F. q ↔ r = F ↔ V = F. F ∨ F = F."),
    q("A proposição p → q é falsa somente quando:", ["p é verdadeira e q é falsa.", "p é falsa e q é verdadeira.", "p e q são falsas.", "p e q são verdadeiras.", "p é falsa, qualquer que seja q."], "A",
      "O condicional só falha quando a condição acontece e o resultado não."),
  ]);

  A("logica-proposicional/tautologia-contradicao-e-contingencia", [
    aprofundar([
      "### Atalho: tente derrubar",
      "Para saber se algo é **tautologia** (sempre V), procure um jeito de torná-la falsa. Se for impossível, é tautologia.",
      "Em (p ∧ q) → p: para ser F, precisaria p ∧ q = V (então p = V) e p = F ao mesmo tempo. Impossível: tautologia.",
      "",
      "### Modelos para reconhecer",
      "- Tautologia: p ∨ ~p; p → p; (p ∧ q) → p; p → (p ∨ q).",
      "- Contradição (sempre F): p ∧ ~p; p ↔ ~p.",
      "- Contingência: tudo o que às vezes é V e às vezes é F (p ∧ q, p → q…).",
    ]),
    PRATICAR,
    q("Qual das proposições é uma tautologia?", ["p ∧ q", "p → q", "p ∨ ~p", "p ↔ ~p", "p ∧ ~q"], "C",
      "p ∨ ~p é sempre verdadeira (princípio do terceiro excluído). p ↔ ~p é uma contradição."),
    ce("A proposição (p ∧ q) → p é uma tautologia.", "Certo", "Para ser falsa, p ∧ q teria de ser V com p F, o que é impossível."),
    ce("A proposição p ↔ ~p é uma contingência.", "Errado", "Os dois lados sempre têm valores opostos, então o bicondicional é sempre F: contradição."),
  ]);

  A("logica-proposicional/equivalencias-logicas", [
    aprofundar([
      "### As três formas do condicional",
      "{{p → q ≡ ~q → ~p ≡ ~p ∨ q}}",
      "- **Contrapositiva** (~q → ~p): troca de lugar **e** nega os dois. É equivalente.",
      "- **Recíproca** (q → p) e **inversa** (~p → ~q) **não** são equivalentes. São as pegadinhas mais comuns.",
      "",
      "### Outras",
      "- p ↔ q ≡ (p → q) ∧ (q → p).",
      "- Distributiva: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r).",
      "- Dupla negação: ~(~p) ≡ p.",
    ]),
    PRATICAR,
    q("“Se chove, então a rua fica molhada” é equivalente a:", ["Se a rua fica molhada, então chove.", "Se não chove, então a rua não fica molhada.", "Se a rua não fica molhada, então não chove.", "Chove e a rua não fica molhada.", "Não chove e a rua fica molhada."], "C",
      "Contrapositiva: troca e nega. A é a recíproca e B, a inversa (não equivalentes); D é a negação."),
    q("“Se estudo, passo” é equivalente a:", ["Estudo e não passo.", "Não estudo ou passo.", "Estudo ou passo.", "Não estudo e passo.", "Se passo, estudo."], "B",
      "p → q ≡ ~p ∨ q: nega o primeiro, troca a seta por “ou” e mantém o segundo."),
    ce("A proposição “Se Ana é servidora, então Ana é concursada” é equivalente a “Se Ana é concursada, então Ana é servidora”.", "Errado",
      "Essa é a recíproca, que não é equivalente: Ana pode ser concursada e ainda não ter tomado posse."),
  ]);

  A("logica-proposicional/negacao-de-proposicoes-e-leis-de-de-morgan", [
    aprofundar([
      "### Tabela de negações",
      "- ~(p ∧ q) ≡ ~p ∨ ~q (troca “e” por “ou” e nega as duas).",
      "- ~(p ∨ q) ≡ ~p ∧ ~q.",
      "- ~(p → q) ≡ **p ∧ ~q** (mantém o primeiro, “e”, nega o segundo). A negação de um condicional **não** é outro condicional.",
      "- ~(p ↔ q) ≡ p ⊻ q (ou exatamente um dos dois).",
      "",
      "### Quantificadores",
      "- “Todo A é B” → “**Algum** A **não** é B”.",
      "- “Algum A é B” → “**Nenhum** A é B”.",
      "- “Nenhum A é B” → “Algum A é B”.",
      "“Todo A não é B” **não** nega “Todo A é B”: é a pegadinha clássica.",
    ]),
    PRATICAR,
    q("A negação de “Se o servidor faltou, então perdeu o bônus” é:", ["Se o servidor não faltou, então não perdeu o bônus.", "O servidor faltou e não perdeu o bônus.", "O servidor não faltou e perdeu o bônus.", "Se o servidor perdeu o bônus, então faltou.", "O servidor não faltou ou não perdeu o bônus."], "B",
      "~(p → q) ≡ p ∧ ~q."),
    q("A negação de “Maria é analista e João é técnico” é:", ["Maria não é analista e João não é técnico.", "Maria não é analista ou João não é técnico.", "Maria é analista ou João é técnico.", "Se Maria não é analista, João é técnico.", "Maria não é analista e João é técnico."], "B",
      "De Morgan: ~(p ∧ q) ≡ ~p ∨ ~q. Atenção: “Se Maria é analista, João não é técnico” (p → ~q) também seria uma forma correta, porque p → ~q ≡ ~p ∨ ~q. A alternativa D (~p → q) equivale a p ∨ q, que não é a negação."),
    ce("A negação de “Todos os servidores são pontuais” é “Nenhum servidor é pontual”.", "Errado",
      "Basta um contraexemplo: “Algum servidor não é pontual”."),
    q("A negação de “Pedro estuda ou trabalha” é:", ["Pedro não estuda ou não trabalha.", "Pedro não estuda e não trabalha.", "Pedro estuda e trabalha.", "Se Pedro não estuda, trabalha.", "Pedro estuda e não trabalha."], "B",
      "~(p ∨ q) ≡ ~p ∧ ~q."),
  ]);

  /* ================= LÓGICA DE ARGUMENTAÇÃO ================= */

  A("logica-de-argumentacao/argumentos-validos-e-invalidos", [
    aprofundar([
      "### Validade não é verdade",
      "Um argumento é **válido** quando, **se** as premissas forem verdadeiras, a conclusão **tem** de ser verdadeira. A validade é da **forma**, não do conteúdo: um argumento válido pode ter conclusão falsa se alguma premissa for falsa.",
      "",
      "### Formas válidas",
      "- **Modus ponens**: p → q; p; logo q.",
      "- **Modus tollens**: p → q; ~q; logo ~p.",
      "- **Silogismo hipotético**: p → q; q → r; logo p → r.",
      "- **Silogismo disjuntivo**: p ∨ q; ~p; logo q.",
      "",
      "### Falácias (inválidas)",
      "- **Afirmar o consequente**: p → q; q; logo p.",
      "- **Negar o antecedente**: p → q; ~p; logo ~q.",
    ]),
    PRATICAR,
    q("“Se chove, o jogo é cancelado. O jogo não foi cancelado.” Dessas premissas conclui-se, de forma válida, que:", ["Choveu.", "Não choveu.", "O jogo foi adiado.", "Choveu e o jogo foi cancelado.", "Nada se pode concluir."], "B",
      "Modus tollens: p → q e ~q, logo ~p."),
    ce("O argumento “Se Ana estuda, Ana passa. Ana passou. Logo, Ana estudou.” é válido.", "Errado",
      "É a falácia de afirmar o consequente: Ana pode ter passado por outro motivo."),
    q("“Ou Lia viaja, ou Lia trabalha. Lia não viajou.” Conclui-se que:", ["Lia não trabalhou.", "Lia viajou e trabalhou.", "Lia trabalhou.", "Lia nem viajou nem trabalhou.", "Nada se pode concluir."], "C", "Silogismo disjuntivo: se uma das alternativas é falsa, a outra é verdadeira."),
    ce("Um argumento válido pode ter conclusão falsa, desde que pelo menos uma das premissas seja falsa.", "Certo",
      "A validade garante só que premissas verdadeiras levam a conclusão verdadeira."),
  ]);

  A("logica-de-argumentacao/silogismos", [
    aprofundar([
      "### Estrutura",
      "Duas premissas e uma conclusão, ligadas por um **termo médio** que aparece nas duas premissas e some na conclusão: “Todo A é **B**; todo **B** é C; logo, todo A é C”.",
      "",
      "### Conclusões que NÃO se tiram",
      "- De duas premissas com “algum” não se conclui nada (“algum A é B; algum B é C” não garante que algum A seja C).",
      "- De duas premissas negativas não se conclui nada.",
      "",
      "### Quando houver dúvida",
      "Desenhe os diagramas e procure um desenho que satisfaça as premissas e **contrarie** a conclusão. Se achar, o argumento é inválido.",
    ]),
    PRATICAR,
    q("“Todo auditor é servidor. Todo servidor é concursado.” Logo:", ["Todo auditor é concursado.", "Todo concursado é auditor.", "Algum servidor não é auditor.", "Todo servidor é auditor.", "Nenhum concursado é auditor."], "A", "Encadeamento direto: auditor ⊂ servidor ⊂ concursado."),
    q("“Nenhum A é B. Algum C é A.” Conclui-se necessariamente que:", ["Nenhum C é B.", "Algum C não é B.", "Algum B é C.", "Todo C é A.", "Nenhum A é C."], "B", "Os C que são A estão fora de B; logo, algum C não é B. Não dá para afirmar nada sobre os outros C."),
    ce("De “Algum servidor é músico” e “Algum músico é pintor” conclui-se que algum servidor é pintor.", "Errado", "Os músicos que são servidores podem ser outros, diferentes dos músicos pintores."),
  ]);

  A("logica-de-argumentacao/quantificadores-todo-algum-e-nenhum", [
    aprofundar([
      "### Equivalências",
      "- “Todo A é B” ≡ “Nenhum A é não B” ≡ “Se é A, então é B”.",
      "- “Nenhum A é B” ≡ “Todo A é não B” ≡ “Nenhum B é A”.",
      "- “Algum A é B” ≡ “Algum B é A” ≡ “Existe A que é B”.",
      "",
      "### Negações (tabela)",
      "Todo ↔ Algum… não · Algum ↔ Nenhum. Repare que a negação **sempre** troca o quantificador.",
    ]),
    PRATICAR,
    q("A negação de “Algum candidato foi aprovado” é:", ["Algum candidato não foi aprovado.", "Nenhum candidato foi aprovado.", "Todo candidato foi aprovado.", "Todo candidato não foi reprovado.", "Pelo menos um candidato foi reprovado."], "B", "Algum ↔ nenhum."),
    q("A negação de “Nenhum servidor é estagiário” é:", ["Todo servidor é estagiário.", "Algum servidor é estagiário.", "Algum servidor não é estagiário.", "Nenhum estagiário é servidor.", "Todo estagiário é servidor."], "B", "Para negar “nenhum”, basta mostrar um: “algum servidor é estagiário”."),
    ce("“Todo A é B” e “Nenhum A é não B” são proposições equivalentes.", "Certo", "Se todo A está em B, não sobra A fora de B."),
  ]);

  A("logica-de-argumentacao/diagramas-logicos", [
    aprofundar([
      "### “Necessariamente” × “possivelmente”",
      "A banca pergunta o que é **necessariamente** verdadeiro: só vale o que acontece em **todos** os desenhos possíveis. Se em algum desenho a afirmação falha, ela não é necessária.",
      "",
      "### Com números",
      "Quando aparecem quantidades, desenhe e preencha as regiões. “Nenhum A é B” significa que a interseção tem **zero** elementos; “todo A é B” significa que não há nada em A fora de B.",
    ]),
    PRATICAR,
    q("“Todos os advogados são leitores. Alguns leitores são músicos.” É necessariamente verdadeiro que:", ["Algum advogado é músico.", "Nenhum advogado é músico.", "Todo músico é advogado.", "Algum músico é leitor.", "Todo leitor é advogado."], "D",
      "“Alguns leitores são músicos” equivale a “alguns músicos são leitores”. Sobre advogados músicos, nada se pode garantir."),
    q("Num órgão há 30 servidores. Todos os 12 fiscais são servidores, 8 servidores são técnicos e nenhum técnico é fiscal. Quantos servidores não são fiscais nem técnicos?", ["6", "8", "10", "12", "18"], "C", "Fiscais e técnicos não se sobrepõem: 30 − 12 − 8 = 10."),
    ce("Se nenhum A é B e todo C é A, então nenhum C é B.", "Certo", "C está dentro de A, e A não toca B; logo C também não toca B."),
  ]);

  /* ================= RACIOCÍNIO SEQUENCIAL E PROBLEMAS ================= */

  A("raciocinio-sequencial-e-problemas/sequencias-numericas", [
    aprofundar([
      "### Ordem de tentativas",
      "1. Diferenças entre termos (e diferenças das diferenças).",
      "2. Razões (multiplica ou divide sempre pelo mesmo?).",
      "3. **Duas sequências intercaladas**: olhe só as posições ímpares e depois só as pares.",
      "4. Operações alternadas (×2, −2, ×2, −2…).",
      "5. Sequências famosas: quadrados (1, 4, 9…), cubos, primos, **Fibonacci** (cada termo é a soma dos dois anteriores).",
    ]),
    PRATICAR,
    q("Qual é o próximo termo de 2, 5, 10, 17, 26, …?", ["33", "35", "37", "39", "41"], "C", "Diferenças 3, 5, 7, 9, 11 (ou n² + 1): 26 + 11 = 37."),
    q("Qual é o próximo termo de 3, 6, 4, 8, 6, 12, 10, …?", ["12", "14", "18", "20", "24"], "D", "Alterna ×2 e −2: 10 × 2 = 20."),
    q("Qual é o próximo termo de 1, 1, 2, 3, 5, 8, 13, …?", ["18", "20", "21", "26", "34"], "C", "Fibonacci: 8 + 13 = 21."),
    ce("Na sequência 1, 4, 9, 16, 25, …, o 10º termo é 100.", "Certo", "O n-ésimo termo é n²."),
  ]);

  A("raciocinio-sequencial-e-problemas/sequencias-de-letras-e-figuras", [
    aprofundar([
      "### Letras viram números",
      "Troque cada letra pela posição no alfabeto. Desde o Acordo Ortográfico de 1990 (em vigor no Brasil desde 2009), o alfabeto tem **26 letras**, com K, W e Y. Leia o enunciado: algumas questões antigas usam 23.",
      "",
      "### Padrões que se repetem",
      "Se uma figura se repete a cada k posições, a figura da posição n é a mesma da posição igual ao **resto** de n ÷ k (resto 0 = última do ciclo).",
    ]),
    PRATICAR,
    q("Considerando o alfabeto de 26 letras, qual é a próxima letra de A, C, F, J, O, …?", ["S", "T", "U", "V", "X"], "C", "Posições 1, 3, 6, 10, 15 (somam 2, 3, 4, 5); a próxima soma 6: 21 = U."),
    q("Uma sequência repete sempre triângulo, quadrado, círculo, triângulo, quadrado, círculo… Qual figura ocupa a 100ª posição?", ["Triângulo", "Quadrado", "Círculo"], "A", "Ciclo de 3: 100 ÷ 3 dá resto 1, a mesma figura da 1ª posição."),
    ce("Na sequência B, E, H, K, N, …, considerando o alfabeto de 26 letras, a próxima letra é Q.", "Certo", "Posições 2, 5, 8, 11, 14, somando 3: a próxima é 17 = Q."),
  ]);

  A("raciocinio-sequencial-e-problemas/associacao-logica-problemas-de-tabela", [
    aprofundar([
      "### Método",
      "1. Monte a tabela com pessoas nas linhas e atributos nas colunas.",
      "2. Marque **X** no que é proibido e **✓** no que é certo.",
      "3. Cada linha e cada coluna tem um único ✓: quando sobrar uma só opção, ela é a resposta, e o resto da coluna leva X.",
      "4. Comece pelas pistas **positivas** (“Edu mora em Maringá”), que eliminam mais.",
    ]),
    PRATICAR,
    q("Ana, Bia e Carla trabalham em RH, TI e Compras, uma em cada setor. Ana não trabalha em TI nem em Compras. Bia não trabalha em Compras. Onde trabalha Carla?", ["RH", "TI", "Compras", "Não é possível saber"], "C", "Ana só pode ser do RH; Bia, sem Compras e sem RH, fica em TI; sobra Compras para Carla."),
    q("Davi, Edu, Fábio e Gil moram em Curitiba, Londrina, Maringá e Cascavel, um em cada cidade. Davi não mora em Curitiba nem em Londrina. Edu mora em Maringá. Fábio não mora em Curitiba. Onde mora Gil?", ["Curitiba", "Londrina", "Maringá", "Cascavel"], "A",
      "Edu: Maringá. Davi: sem Curitiba, Londrina e Maringá, fica em Cascavel. Fábio: sem Curitiba, fica em Londrina. Gil: Curitiba."),
    ce("Na situação da questão anterior, Fábio mora em Londrina.", "Certo", "Sobram Curitiba e Londrina para Fábio e Gil; Fábio não mora em Curitiba."),
  ]);

  A("raciocinio-sequencial-e-problemas/verdades-e-mentiras", [
    aprofundar([
      "### Método das hipóteses",
      "Suponha que uma pessoa diz a verdade (ou que fulano é o culpado) e veja se o enunciado se mantém. Se aparecer contradição, a hipótese cai.",
      "",
      "### Atalhos",
      "- Duas afirmações **contraditórias** (uma é a negação da outra): exatamente uma é verdadeira. Isso já consome a “cota” de verdades ou mentiras.",
      "- Quem acusa alguém de mentir: os dois têm valores **opostos** (se A diz “B mente”, A e B não podem ser ambos verdadeiros nem ambos mentirosos).",
    ]),
    PRATICAR,
    q("Três suspeitos, e só um diz a verdade. A: “B é o culpado.” B: “Eu não sou o culpado.” C: “Eu não sou o culpado.” Há um único culpado. Quem é?", ["A", "B", "C", "Não é possível saber"], "C",
      "Se A fosse culpado, B e C diriam a verdade (duas). Se B, A e C diriam a verdade (duas). Se C, só B diz a verdade: é a única hipótese que funciona."),
    q("Ana diz: “Bia mente.” Bia diz: “Carla mente.” Carla diz: “Ana e Bia mentem.” Quem diz a verdade?", ["Só Ana", "Só Bia", "Só Carla", "Ana e Carla", "As três"], "B",
      "Se Carla falasse a verdade, Ana mentiria, e então Bia diria a verdade: contradição. Logo Carla mente, Bia diz a verdade e Ana mente."),
    ce("A frase “Eu estou mentindo” é uma proposição.", "Errado", "É um paradoxo: se for verdadeira, é falsa, e vice-versa. Não pode receber valor lógico."),
  ]);

  A("raciocinio-sequencial-e-problemas/calendarios-e-relogios", [
    aprofundar([
      "### Calendário: tudo é resto da divisão por 7",
      "- Um ano comum (365 dias = 52 semanas + 1 dia) “anda” 1 dia da semana; um bissexto, 2.",
      "- Para avançar n dias, avance só o **resto** de n ÷ 7 dias da semana.",
      "- Meses com 31 dias andam 3 dias da semana; com 30, andam 2.",
      "",
      "### Relógio",
      "Ângulo entre os ponteiros às H horas e M minutos: {{|30H − 5,5M|}}. Se passar de 180°, use 360° menos o valor.",
    ]),
    PRATICAR,
    q("Se 1º de março caiu numa segunda-feira, 1º de abril do mesmo ano cai numa:", ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"], "D", "Março tem 31 dias: 31 = 4 semanas + 3 dias. Segunda + 3 = quinta."),
    q("Qual é o menor ângulo entre os ponteiros de um relógio às 3h30?", ["60°", "75°", "90°", "105°", "120°"], "B", "|30 · 3 − 5,5 · 30| = |90 − 165| = 75°."),
    ce("Se 10 de janeiro de um ano não bissexto caiu num domingo, 10 de janeiro do ano seguinte cairá numa segunda-feira.", "Certo", "Passam 365 dias = 52 semanas + 1 dia."),
    q("Que dia da semana será 100 dias depois de uma quarta-feira?", ["quinta-feira", "sexta-feira", "sábado", "domingo", "segunda-feira"], "B", "100 ÷ 7 dá resto 2: quarta + 2 = sexta."),
  ]);

  /* ================= CONTAGEM E PROBABILIDADE ================= */

  A("contagem-e-probabilidade/principio-fundamental-da-contagem", [
    aprofundar([
      "### “E” multiplica, “ou” soma",
      "Etapas que acontecem uma depois da outra se **multiplicam**; casos que se excluem (ou um ou outro) se **somam**.",
      "",
      "### Comece pela restrição",
      "Se o número tem de ser par, ou não pode começar com zero, preencha **primeiro** a posição com restrição e depois as outras.",
      "",
      "### Com ou sem repetição",
      "Senha com repetição: cada posição tem todas as opções. Algarismos **distintos**: cada posição tem uma opção a menos.",
    ]),
    PRATICAR,
    q("Quantos números de 3 algarismos distintos podem ser formados com os algarismos 1, 2, 3, 4 e 5?", ["15", "60", "75", "120", "125"], "B", "5 · 4 · 3 = 60. Com repetição seriam 125."),
    q("Quantas senhas existem com 2 letras (de 26) seguidas de 2 algarismos, podendo repetir?", ["6.760", "52.000", "58.500", "67.600", "676.000"], "D", "26 · 26 · 10 · 10 = 67.600."),
    q("Quantos números pares de 3 algarismos distintos podem ser formados com 1, 2, 3, 4 e 5?", ["12", "24", "30", "36", "48"], "B", "Último algarismo: 2 ou 4 (2 opções). Depois 4 e 3 opções: 2 · 4 · 3 = 24."),
    ce("Com 3 camisas e 4 calças, uma pessoa pode se vestir de 7 maneiras diferentes.", "Errado", "Escolhe camisa E calça: 3 · 4 = 12 maneiras."),
  ]);

  A("contagem-e-probabilidade/permutacao", [
    aprofundar([
      "### Os três tipos",
      "- **Simples**: {{P_{n} = n!}} (todos os elementos, em fila).",
      "- **Com repetição**: divida pelos fatoriais das repetições. ARARA: {{[[5! || 3! · 2!]] = 10}}.",
      "- **Circular**: {{(n − 1)!}} (numa roda, girar todos não muda a disposição).",
      "",
      "### Elementos sempre juntos",
      "Trate os que ficam juntos como **um bloco**, permute os blocos e multiplique pelas permutações dentro do bloco.",
    ]),
    PRATICAR,
    q("Quantos anagramas tem a palavra BRASIL?", ["120", "360", "600", "720", "5.040"], "D", "Seis letras distintas: 6! = 720."),
    q("Quantos anagramas tem a palavra ARARA?", ["5", "10", "20", "60", "120"], "B", "5! ÷ (3! · 2!) = 120 ÷ 12 = 10."),
    q("De quantas maneiras 5 pessoas podem ficar em fila, se Ana e Bia devem ficar sempre juntas?", ["24", "48", "60", "96", "120"], "B", "Bloco Ana-Bia + 3 pessoas = 4 elementos: 4! = 24; dentro do bloco, 2 ordens: 48."),
    ce("Seis pessoas podem sentar-se em torno de uma mesa redonda de 120 maneiras distintas.", "Certo", "Permutação circular: (6 − 1)! = 120."),
  ]);

  A("contagem-e-probabilidade/arranjo-e-combinacao", [
    aprofundar([
      "### A pergunta que decide",
      "Troque a ordem de dois escolhidos: **muda** o resultado? Então é **arranjo** (cargos diferentes, pódio, senha). **Não muda**? É **combinação** (comissão, grupo, aperto de mão).",
      "",
      "### Fórmulas",
      "{{A_{n,p} = [[n! || (n − p)!]]}} e {{C_{n,p} = [[n! || p! · (n − p)!]]}}.",
      "",
      "### Propriedades úteis",
      "- C(n, p) = C(n, n − p): escolher 3 de 10 é o mesmo que deixar 7 de fora.",
      "- Grupos com partes separadas (2 homens **e** 2 mulheres): multiplique as combinações de cada parte.",
    ]),
    PRATICAR,
    q("De quantas maneiras se forma uma comissão de 3 pessoas escolhidas entre 8 servidores?", ["24", "56", "112", "336", "512"], "B", "Ordem não importa: C(8, 3) = 8 · 7 · 6 ÷ 6 = 56."),
    q("De quantas maneiras se escolhem presidente, vice e secretário entre 8 servidores?", ["24", "56", "112", "336", "512"], "D", "Cargos diferentes, ordem importa: A(8, 3) = 8 · 7 · 6 = 336."),
    q("Num grupo de 6 homens e 4 mulheres, quantas comissões de 2 homens e 2 mulheres podem ser formadas?", ["21", "45", "90", "120", "210"], "C", "C(6, 2) · C(4, 2) = 15 · 6 = 90."),
    ce("C(10, 3) = C(10, 7).", "Certo", "Escolher 3 equivale a deixar 7 de fora: as duas valem 120."),
    q("Numa reunião com 10 pessoas, cada uma cumprimenta todas as outras uma única vez. Quantos apertos de mão acontecem?", ["20", "45", "50", "90", "100"], "B", "Cada aperto é um par sem ordem: C(10, 2) = 45."),
  ]);

  A("contagem-e-probabilidade/probabilidade", [
    aprofundar([
      "### Regras",
      "- **Complementar**: P(não A) = 1 − P(A). Use para “pelo menos um”.",
      "- **“E” com eventos independentes**: multiplique. **Sem reposição**, a segunda fração muda (sobra uma bola a menos).",
      "- **“Ou”**: {{P(A ∪ B) = P(A) + P(B) − P(A ∩ B)}}.",
      "",
      "### Probabilidade condicional",
      "“Sabendo que…” reduz o universo: {{P(A | B) = [[P(A ∩ B) || P(B)]]}}. Na prática, conte só dentro do grupo informado.",
    ]),
    PRATICAR,
    q("Lançando dois dados comuns, qual é a probabilidade de a soma ser 7?", ["1/12", "1/9", "1/6", "7/36", "1/4"], "C", "Pares (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 de 36 = 1/6."),
    q("Uma urna tem 5 bolas brancas e 3 pretas. Retirando 2 bolas sem reposição, a probabilidade de as duas serem brancas é:", ["25/64", "5/14", "5/16", "3/8", "15/28"], "B", "5/8 · 4/7 = 20/56 = 5/14. 25/64 seria com reposição."),
    q("Lançando uma moeda 3 vezes, qual é a probabilidade de sair pelo menos uma cara?", ["1/8", "3/8", "1/2", "3/4", "7/8"], "E", "Complementar: P(nenhuma cara) = (1/2)³ = 1/8. Então 1 − 1/8 = 7/8."),
    ce("Se a probabilidade de chover amanhã é 0,3, a probabilidade de não chover é 0,7.", "Certo", "Eventos complementares somam 1."),
    q("Num órgão com 100 servidores, 40 são mulheres e 10 dessas mulheres trabalham na TI. Sorteando uma mulher, qual é a probabilidade de ela ser da TI?", ["1/10", "1/4", "2/5", "1/2", "3/4"], "B", "O universo passa a ser as 40 mulheres: 10/40 = 1/4."),
  ]);
})();
