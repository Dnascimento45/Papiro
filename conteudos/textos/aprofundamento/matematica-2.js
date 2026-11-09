/* Aprofundamento · Matemática, parte 2: Matemática Financeira, Álgebra, Geometria e Estatística.
   Acrescenta texto, exemplos e questões DEPOIS do que já existe. Questões autorais, conferidas à mão. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos, livros = LIVROS) => ESTUDO.assunto(`nucleo/matematica/${caminho}`, { livros, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Fundamentos de Matemática Elementar", autor: "Gelson Iezzi e outros", nota: "Volumes de álgebra, progressões, geometria plana e espacial." },
    { titulo: "A Matemática do Ensino Médio", autor: "Elon Lages Lima e outros (SBM)", nota: "Funções, progressões e geometria explicadas com cuidado." },
    { titulo: "Khan Academy em português", url: "https://pt.khanacademy.org", nota: "Exercícios gratuitos com correção na hora." },
  ];
  const FINANCEIRA = [
    { titulo: "Matemática Financeira", autor: "José Dutra Vieira Sobrinho", nota: "Clássico de juros, descontos e taxas." },
    { titulo: "Matemática Financeira e suas Aplicações", autor: "Alexandre Assaf Neto", nota: "Mais aplicado, com muitos exercícios resolvidos." },
    ...LIVROS.slice(2),
  ];
  const ESTATISTICA = [
    { titulo: "Estatística Básica", autor: "Wilton de O. Bussab e Pedro A. Morettin", nota: "Referência de média, mediana, dispersão e gráficos." },
    { titulo: "IBGE Educa", url: "https://educa.ibge.gov.br", nota: "Tabelas e gráficos reais do Brasil para treinar leitura." },
    ...LIVROS.slice(2),
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar com questões de prova",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Filtre por Matemática (ou Matemática Financeira / Estatística) e pela banca do seu edital." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas por professores." },
      { titulo: "PCI Concursos · provas anteriores", url: "https://www.pciconcursos.com.br/provas/", nota: "Provas completas e gratuitas." },
    ],
  };

  /* ================= MATEMÁTICA FINANCEIRA ================= */

  A("matematica-financeira-basica/juros-simples", [
    aprofundar([
      "### Taxa e tempo na mesma unidade",
      "Antes de qualquer conta, converta: no regime simples, as taxas são **proporcionais**. 18% ao ano = 1,5% ao mês = 0,05% ao dia (ano comercial de 360 dias).",
      "",
      "### As quatro perguntas possíveis",
      "{{J = C · i · t}} e {{M = C · (1 + i · t)}} têm quatro letras; a banca dá três e pede a quarta:",
      "- capital: {{C = [[J || i · t]]}}",
      "- taxa: {{i = [[J || C · t]]}}",
      "- tempo: {{t = [[J || C · i]]}}",
      "",
      "### Quando o capital dobra",
      "Dobrar = juros iguais ao capital, ou seja, i · t = 100%. A 5% ao mês, dobra em 20 meses; a 4% ao mês, em 25 meses.",
      "",
      "### Juro comercial × exato",
      "Comercial usa ano de 360 dias (mês de 30); exato usa 365. Se a questão não disser nada, use o comercial.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Descobrindo o capital", enunciado: "Um capital aplicado a juros simples de 1,5% ao mês rendeu R$ 540 em 8 meses. Qual foi o capital?",
      resolucao: "{{C = [[540 || 0,015 · 8]] = [[540 || 0,12]] = 4.500}}.", resposta: "R$ 4.500,00" },
    PRATICAR,
    q("Um capital de R$ 5.000 é aplicado a juros simples de 2% ao mês durante um ano e meio. O montante é:", ["R$ 5.900", "R$ 6.200", "R$ 6.800", "R$ 7.000", "R$ 7.100"], "C",
      "Um ano e meio = 18 meses. J = 5.000 · 0,02 · 18 = 1.800. M = 6.800."),
    q("Em quanto tempo um capital dobra, a juros simples de 5% ao mês?", ["10 meses", "15 meses", "20 meses", "24 meses", "25 meses"], "C",
      "Dobrar exige juros de 100% do capital: 100% ÷ 5% = 20 meses."),
    ce("No regime de juros simples, a taxa de 18% ao ano é proporcional à taxa de 1,5% ao mês.", "Certo", "18% ÷ 12 = 1,5%."),
  ], FINANCEIRA);

  A("matematica-financeira-basica/juros-compostos", [
    aprofundar([
      "### Taxas equivalentes",
      "No regime composto, as taxas **não** são proporcionais; são equivalentes: {{(1 + i_{maior}) = (1 + i_{menor})^{n}}}.",
      "10% ao mês por 2 meses rendem 1,1² − 1 = **21%**, e não 20%.",
      "",
      "### Simples × composto",
      "- Em **um** período, os dois rendem igual.",
      "- Em **mais de um** período, o composto rende mais.",
      "- Em **menos de um** período (fração), o simples rende mais.",
      "",
      "### Potências que aparecem muito",
      "1,1² = 1,21 · 1,1³ = 1,331 · 1,05² = 1,1025 · 1,05³ = 1,157625 · 1,2² = 1,44 · 1,02¹² ≈ 1,268. Quando a potência for difícil, a banca costuma dar o valor no enunciado.",
    ]),
    PRATICAR,
    q("R$ 2.000 são aplicados a juros compostos de 10% ao mês por 2 meses. O montante é:", ["R$ 2.200", "R$ 2.400", "R$ 2.420", "R$ 2.462", "R$ 2.662"], "C",
      "M = 2.000 · 1,1² = 2.000 · 1,21 = 2.420. R$ 2.400 seria o regime simples."),
    q("Uma taxa composta de 20% ao bimestre equivale a que taxa ao quadrimestre?", ["40%", "42%", "44%", "48%", "52%"], "C",
      "Um quadrimestre tem dois bimestres: 1,2² = 1,44, ou seja, 44%."),
    ce("Para prazos maiores que um período, à mesma taxa, o montante a juros compostos é maior que o montante a juros simples.", "Certo",
      "No composto os juros de cada período também rendem juros."),
    q("Quanto rendem de juros R$ 10.000 aplicados a juros compostos de 5% ao mês durante 3 meses?", ["R$ 1.500,00", "R$ 1.525,00", "R$ 1.550,00", "R$ 1.576,25", "R$ 1.600,00"], "D",
      "M = 10.000 · 1,05³ = 10.000 · 1,157625 = 11.576,25. Juros: 1.576,25."),
  ], FINANCEIRA);

  A("matematica-financeira-basica/descontos", [
    aprofundar([
      "### Os dois descontos simples",
      "- **Comercial (por fora)**: calculado sobre o valor **nominal** N. {{d = N · i · t}} e {{A = N · (1 − i · t)}}.",
      "- **Racional (por dentro)**: calculado sobre o valor **atual** A. {{A = [[N || 1 + i · t]]}} e d = N − A.",
      "",
      "Com o mesmo N, a mesma taxa e o mesmo prazo, o **comercial é sempre maior** que o racional (é calculado sobre uma base maior).",
      "",
      "### Taxa efetiva",
      "No desconto comercial, quem recebe o dinheiro paga, na verdade, uma taxa maior que a anunciada, porque os juros incidem sobre o valor que ele recebe (A), menor que N.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Os dois descontos lado a lado", enunciado: "Um título de R$ 10.000 é descontado 3 meses antes do vencimento, à taxa simples de 2% ao mês. Compare os dois descontos.",
      resolucao: "Comercial: d = 10.000 · 0,02 · 3 = 600, A = 9.400. Racional: {{A = [[10.000 || 1,06]] ≈ 9.433,96}} e d ≈ 566,04.", resposta: "Comercial R$ 600; racional ≈ R$ 566,04" },
    PRATICAR,
    q("Uma duplicata de R$ 6.000 é descontada comercialmente (por fora) 4 meses antes do vencimento, à taxa simples de 2,5% ao mês. O valor recebido é:", ["R$ 5.400,00", "R$ 5.454,55", "R$ 5.500,00", "R$ 5.600,00", "R$ 5.850,00"], "A",
      "d = 6.000 · 0,025 · 4 = 600, então A = 5.400. O valor 5.454,55 seria o desconto racional (6.000 ÷ 1,1)."),
    q("Um título de R$ 5.500 sofre desconto racional simples (por dentro) 2 meses antes do vencimento, à taxa de 5% ao mês. O desconto é:", ["R$ 450", "R$ 500", "R$ 525", "R$ 550", "R$ 600"], "B",
      "A = 5.500 ÷ 1,1 = 5.000; d = 5.500 − 5.000 = 500. R$ 550 seria o desconto comercial."),
    ce("Mantidos o valor nominal, a taxa e o prazo, o desconto comercial simples é maior que o desconto racional simples.", "Certo",
      "O comercial incide sobre o valor nominal, que é maior que o valor atual."),
  ], FINANCEIRA);

  A("matematica-financeira-basica/aumentos-e-descontos-sucessivos", [
    aprofundar([
      "### Multiplique os fatores, nunca some as taxas",
      "- Aumento de p%: fator (1 + p/100). Desconto de p%: fator (1 − p/100).",
      "- Descontos de 20% e 10%: 0,8 × 0,9 = 0,72, ou seja, desconto único de **28%** (e não 30%).",
      "- Aumento de 10% e depois desconto de 10%: 1,1 × 0,9 = 0,99, ou seja, **perda de 1%**.",
      "",
      "### Descobrir a taxa que falta",
      "Monte a equação com os fatores: 1,2 × (1 − x) = 1,08 dá 1 − x = 0,9, ou seja, x = 10%.",
    ]),
    PRATICAR,
    q("Aumentos sucessivos de 10% e 20% equivalem a um único aumento de:", ["30%", "31%", "32%", "33%", "35%"], "C", "1,1 × 1,2 = 1,32, aumento de 32%."),
    q("Sobre um preço de R$ 500 incidem descontos sucessivos de 20% e de 10%. O preço final é:", ["R$ 350", "R$ 360", "R$ 370", "R$ 375", "R$ 400"], "B", "500 × 0,8 × 0,9 = 360."),
    ce("Um aumento de 50% seguido de um desconto de 50% faz o preço voltar ao valor original.", "Errado",
      "1,5 × 0,5 = 0,75: o preço termina 25% menor."),
    q("Um preço subiu 20% e depois caiu x%, terminando 8% acima do valor original. O valor de x é:", ["8", "10", "12", "12,5", "20"], "B",
      "1,2 × (1 − x) = 1,08, então 1 − x = 0,9 e x = 10%."),
  ], FINANCEIRA);

  /* ================= ÁLGEBRA ================= */

  A("algebra/equacoes-do-1-grau", [
    aprofundar([
      "### Traduzir o enunciado",
      "- “o dobro de um número” = 2x; “a metade” = x/2; “três números consecutivos” = x, x + 1, x + 2.",
      "- “daqui a 10 anos” = some 10 à idade de **todos**; “há 5 anos” = subtraia 5 de todos.",
      "",
      "### Frações na equação",
      "Multiplique **todos** os termos pelo MMC dos denominadores: {{[[x || 2]] + [[x || 3]] = 10 → 3x + 2x = 60 → x = 12}}.",
      "",
      "### Identidade e absurdo",
      "- 2(x + 3) = 2x + 6 é verdade para qualquer x: **infinitas** soluções.",
      "- 2x + 1 = 2x + 5 nunca é verdade: **nenhuma** solução.",
      "",
      "Sempre confira substituindo a resposta no enunciado original.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Idades", enunciado: "Um pai tem o triplo da idade do filho. Daqui a 10 anos terá o dobro. Quantos anos tem cada um hoje?",
      resolucao: "Filho: x; pai: 3x. Daqui a 10 anos: 3x + 10 = 2(x + 10), então 3x + 10 = 2x + 20 e x = 10. Pai: 30. Conferindo: em 10 anos, 40 = 2 × 20.", resposta: "Filho 10 anos; pai 30 anos" },
    PRATICAR,
    q("A solução de 3(x − 2) − 2(x + 1) = 5 é:", ["3", "7", "9", "13", "15"], "D", "3x − 6 − 2x − 2 = 5, então x − 8 = 5 e x = 13."),
    q("A soma de três números inteiros consecutivos é 87. O maior deles é:", ["28", "29", "30", "31", "32"], "C", "x + (x + 1) + (x + 2) = 87, então 3x = 84, x = 28. Maior: 30."),
    q("A solução de x/2 + x/3 = 10 é:", ["6", "10", "12", "15", "20"], "C", "MMC 6: 3x + 2x = 60, então x = 12."),
    ce("A equação 2(x + 3) = 2x + 6 tem uma única solução.", "Errado", "Os dois lados são idênticos: qualquer x serve (infinitas soluções)."),
  ]);

  A("algebra/equacoes-do-2-grau", [
    aprofundar([
      "### O discriminante decide",
      "{{Δ = b^{2} − 4ac}}: Δ > 0, duas raízes reais diferentes; Δ = 0, uma raiz (dupla); Δ < 0, nenhuma raiz real.",
      "",
      "### Incompletas: sem Bhaskara",
      "- b = 0: x² − 9 = 0, então x² = 9 e x = ±3.",
      "- c = 0: x² − 5x = 0, então x(x − 5) = 0 e x = 0 ou x = 5.",
      "",
      "### Soma e produto",
      "{{S = −[[b || a]]}} e {{P = [[c || a]]}}. Em x² − 5x + 6 = 0: soma 5 e produto 6, então as raízes são 2 e 3, de cabeça.",
      "",
      "### Forma fatorada",
      "Com raízes r₁ e r₂: {{a(x − r_{1})(x − r_{2}) = 0}}.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Terreno", enunciado: "Um terreno retangular tem 48 m² de área e o comprimento é 2 m maior que a largura. Qual é o perímetro?",
      resolucao: "Largura x: x(x + 2) = 48, então x² + 2x − 48 = 0. Soma −2 e produto −48: raízes 6 e −8. Largura 6, comprimento 8. Perímetro: 2(6 + 8) = 28.", resposta: "28 m" },
    PRATICAR,
    q("As raízes da equação x² − 5x + 6 = 0 são:", ["1 e 6", "2 e 3", "−2 e −3", "−1 e 6", "3 e −2"], "B", "Soma 5 e produto 6: 2 e 3."),
    q("Para que valor de k a equação x² − 6x + k = 0 tem uma raiz real dupla?", ["3", "6", "9", "12", "36"], "C", "Δ = 36 − 4k = 0, então k = 9."),
    q("O produto das raízes de 2x² − 8x − 10 = 0 é:", ["−10", "−5", "−4", "4", "5"], "B", "P = c/a = −10/2 = −5."),
    ce("A equação x² + 4 = 0 não possui raízes reais.", "Certo", "x² = −4 não tem solução real (Δ = −16)."),
  ]);

  A("algebra/sistemas-de-equacoes", [
    aprofundar([
      "### Três métodos",
      "- **Adição**: some ou subtraia as equações para sumir uma letra (bom quando os coeficientes já são iguais ou opostos).",
      "- **Substituição**: isole uma letra numa equação e leve para a outra.",
      "- **Comparação**: isole a mesma letra nas duas e iguale.",
      "",
      "### Quantas soluções?",
      "- **Possível e determinado**: uma solução (retas que se cruzam).",
      "- **Possível e indeterminado**: infinitas (retas iguais, ex.: x + y = 3 e 2x + 2y = 6).",
      "- **Impossível**: nenhuma (retas paralelas, ex.: x + y = 3 e 2x + 2y = 7).",
      "",
      "### Problemas clássicos",
      "Galinhas e coelhos (cabeças e pés), cédulas de dois valores, ingressos de dois preços: sempre uma equação de **quantidade** e uma de **valor**.",
    ]),
    PRATICAR,
    q("Num sítio há galinhas e coelhos, num total de 30 cabeças e 84 pés. Quantos são os coelhos?", ["10", "12", "14", "16", "18"], "B",
      "g + c = 30 e 2g + 4c = 84. Dobrando a primeira: 2g + 2c = 60. Subtraindo: 2c = 24, c = 12."),
    q("Se x + y = 10 e x − y = 4, então x · y vale:", ["18", "21", "24", "28", "40"], "B", "Somando: 2x = 14, x = 7; então y = 3 e x · y = 21."),
    ce("O sistema formado por x + y = 3 e 2x + 2y = 7 não tem solução.", "Certo", "A segunda equação equivale a x + y = 3,5, que contradiz a primeira: sistema impossível."),
    q("Um caixa tem 25 cédulas, só de R$ 10 e de R$ 20, num total de R$ 380. Quantas são as cédulas de R$ 20?", ["11", "12", "13", "14", "15"], "C",
      "a + b = 25 e 10a + 20b = 380 (ou a + 2b = 38). Subtraindo: b = 13."),
  ]);

  A("algebra/inequacoes", [
    aprofundar([
      "### A regra que derruba",
      "Multiplicar ou dividir os dois lados por um número **negativo** inverte o sinal: −2x > 4 vira x < −2.",
      "",
      "### Inequação do 2º grau",
      "Ache as raízes e lembre do desenho da parábola. Com a > 0 (concavidade para cima), a expressão é **negativa entre as raízes** e positiva fora delas. Com a < 0, ao contrário.",
      "",
      "### Produto e quociente",
      "Estude o sinal de cada fator separadamente e monte o **quadro de sinais**. No quociente, o denominador nunca pode ser zero (bolinha aberta).",
    ]),
    PRATICAR,
    q("A solução de 3 − 2x > 7 é:", ["x > −2", "x < −2", "x > 2", "x < 2", "x > 5"], "B", "−2x > 4; dividindo por −2 o sinal inverte: x < −2."),
    q("Quantos números inteiros satisfazem x² − 5x + 4 < 0?", ["1", "2", "3", "4", "Infinitos"], "B",
      "Raízes 1 e 4; com a > 0, a expressão é negativa entre elas: 1 < x < 4. Inteiros: 2 e 3."),
    ce("Se a < b, então −a > −b.", "Certo", "Multiplicar por −1 inverte a desigualdade."),
  ]);

  A("algebra/funcoes-do-1-grau", [
    aprofundar([
      "### O que cada letra diz",
      "Em f(x) = ax + b: **a** é a taxa de variação ({{a = [[Δy || Δx]]}}); **b** é onde a reta corta o eixo y (f(0) = b).",
      "- a > 0: crescente; a < 0: decrescente.",
      "- Zero (raiz) da função: {{x = −[[b || a]]}}.",
      "",
      "### Função a partir de dois pontos",
      "Com (1, 5) e (3, 11): a = (11 − 5) ÷ (3 − 1) = 3; depois 5 = 3 · 1 + b, b = 2. f(x) = 3x + 2.",
      "",
      "### Aplicações",
      "Custo = parte fixa + parte variável (b é o fixo, a é o custo de cada unidade). Corrida de táxi, conta de água com taxa mínima e plano de celular seguem esse modelo.",
    ]),
    PRATICAR,
    q("Uma função do 1º grau passa pelos pontos (1, 5) e (3, 11). O valor de f(10) é:", ["30", "31", "32", "33", "35"], "C", "a = 6/2 = 3, b = 2. f(10) = 32."),
    q("O custo de produção é C(x) = 1.500 + 12x reais, para x unidades. Com R$ 4.500, quantas unidades se produzem?", ["200", "225", "250", "275", "300"], "C", "1.500 + 12x = 4.500, então 12x = 3.000 e x = 250."),
    ce("A função f(x) = −2x + 8 é decrescente e corta o eixo x no ponto em que x = 4.", "Certo", "a = −2 < 0 (decrescente); −2x + 8 = 0 dá x = 4."),
  ]);

  A("algebra/funcoes-do-2-grau", [
    aprofundar([
      "### Vértice: o ponto de máximo ou mínimo",
      "{{x_{v} = −[[b || 2a]]}} e {{y_{v} = −[[Δ || 4a]]}} (ou calcule f(xᵥ)).",
      "- a > 0: concavidade para cima, o vértice é **mínimo**.",
      "- a < 0: concavidade para baixo, o vértice é **máximo**.",
      "",
      "### Problemas de otimização",
      "“Lucro máximo”, “maior área”, “altura máxima”: monte a função e calcule o vértice. Com perímetro fixo, o retângulo de maior área é o **quadrado**.",
      "",
      "### Leitura do gráfico",
      "c é onde a parábola corta o eixo y; as raízes são onde ela corta o eixo x; o eixo de simetria passa por xᵥ.",
    ]),
    PRATICAR,
    q("O valor mínimo de f(x) = x² − 6x + 5 é:", ["−9", "−4", "0", "3", "5"], "B", "xᵥ = 6/2 = 3; f(3) = 9 − 18 + 5 = −4."),
    q("O lucro de uma loja é L(x) = −x² + 40x − 300, em que x é o número de peças vendidas. O lucro máximo é:", ["20", "100", "300", "400", "500"], "B",
      "xᵥ = −40 ÷ (−2) = 20. L(20) = −400 + 800 − 300 = 100. O 20 é a quantidade, não o lucro."),
    q("Com 40 m de cerca, qual é a maior área retangular que se pode cercar?", ["80 m²", "96 m²", "100 m²", "120 m²", "400 m²"], "C",
      "Lados x e 20 − x: A = x(20 − x), máximo em x = 10. Quadrado 10 × 10 = 100 m²."),
    ce("O gráfico de f(x) = −x² + 4 tem concavidade para baixo e vértice no ponto (0, 4).", "Certo", "a = −1 < 0; b = 0, então xᵥ = 0 e f(0) = 4."),
  ]);

  A("algebra/progressao-aritmetica-pa", [
    aprofundar([
      "### Fórmulas",
      "{{a_{n} = a_{1} + (n − 1) · r}} e {{S_{n} = [[(a_{1} + a_{n}) · n || 2]]}}.",
      "",
      "### Truques",
      "- Três termos em PA: escreva **x − r, x, x + r** (a soma vira 3x).",
      "- Termos equidistantes dos extremos somam o mesmo que os extremos (a₁ + aₙ = a₂ + aₙ₋₁ = …).",
      "- A soma dos n primeiros ímpares é **n²**.",
      "- Quantos múltiplos de k há entre dois números: ache o primeiro e o último múltiplo e use aₙ = a₁ + (n − 1) · k.",
    ]),
    PRATICAR,
    q("O 20º termo da PA (5, 9, 13, …) é:", ["77", "80", "81", "85", "89"], "C", "a₂₀ = 5 + 19 · 4 = 81."),
    q("A soma dos 30 primeiros números ímpares positivos é:", ["450", "600", "870", "900", "930"], "D", "Soma dos n primeiros ímpares = n² = 900. Ou: a₃₀ = 59 e S = (1 + 59) · 30 ÷ 2 = 900."),
    q("Quantos múltiplos de 7 existem entre 50 e 500?", ["62", "63", "64", "65", "70"], "C", "Primeiro: 56 (7 · 8); último: 497 (7 · 71). Quantidade: 71 − 8 + 1 = 64."),
    ce("Numa PA finita, a soma de dois termos equidistantes dos extremos é igual à soma dos extremos.", "Certo", "É a propriedade que justifica a fórmula da soma."),
  ]);

  A("algebra/progressao-geometrica-pg", [
    aprofundar([
      "### Fórmulas",
      "{{a_{n} = a_{1} · q^{n − 1}}} e {{S_{n} = [[a_{1} · (q^{n} − 1) || q − 1]]}}.",
      "Soma infinita, quando −1 < q < 1: {{S_{∞} = [[a_{1} || 1 − q]]}}.",
      "",
      "### Ligação com juros compostos",
      "Um capital a juros compostos forma uma PG de razão (1 + i): C, C(1 + i), C(1 + i)², …",
      "",
      "### Razão negativa",
      "Com q < 0, os sinais alternam: (1, −2, 4, −8, …) é PG de razão −2.",
    ]),
    PRATICAR,
    q("O 8º termo da PG (3, 6, 12, …) é:", ["96", "192", "256", "384", "768"], "D", "a₈ = 3 · 2⁷ = 3 · 128 = 384."),
    q("A soma dos 6 primeiros termos da PG (2, 6, 18, …) é:", ["242", "486", "728", "1.456", "2.186"], "C", "S₆ = 2 · (3⁶ − 1) ÷ (3 − 1) = 3⁶ − 1 = 728."),
    q("A soma infinita 10 + 5 + 2,5 + 1,25 + … vale:", ["15", "17,5", "20", "25", "É infinita"], "C", "q = 1/2: S = 10 ÷ (1 − 0,5) = 20."),
    ce("A sequência (1, −2, 4, −8, …) é uma progressão geométrica de razão −2.", "Certo", "Cada termo é o anterior multiplicado por −2."),
  ]);

  /* ================= GEOMETRIA E MEDIDAS ================= */

  A("geometria-e-medidas/sistema-metrico-decimal-e-conversao-de-unidades", [
    aprofundar([
      "### Quanto andar na escadinha",
      "- Comprimento (m): cada degrau multiplica ou divide por **10**.",
      "- Área (m²): por **100**. Volume (m³): por **1.000**.",
      "",
      "### Equivalências de cabeça",
      "- 1 dm³ = 1 L; 1 m³ = 1.000 L; 1 cm³ = 1 mL.",
      "- 1 hectare (ha) = 10.000 m² (um quadrado de 100 m × 100 m).",
      "- 1 km² = 1.000.000 m² = 100 ha.",
    ]),
    PRATICAR,
    q("Quanto é 2,5 km + 340 m + 1.200 cm, em metros?", ["2.584", "2.852", "2.864", "3.040", "3.700"], "B", "2.500 m + 340 m + 12 m = 2.852 m."),
    q("Um reservatório tem forma de caixa com 2 m × 1,5 m × 0,8 m. Quantos litros comporta?", ["24 L", "240 L", "2.400 L", "24.000 L", "4,3 L"], "C", "Volume: 2 · 1,5 · 0,8 = 2,4 m³ = 2.400 L."),
    ce("Um terreno de 3 hectares tem 30.000 m².", "Certo", "1 ha = 10.000 m²."),
    q("0,75 m² correspondem a:", ["75 cm²", "750 cm²", "7.500 cm²", "75.000 cm²", "750.000 cm²"], "C", "De m² para cm² são dois degraus de 100: 0,75 × 10.000 = 7.500 cm²."),
  ]);

  A("geometria-e-medidas/medidas-de-tempo", [
    aprofundar([
      "### O tempo não é decimal",
      "A base é 60: 1,5 h = 1 h 30 min, e **não** 1 h 50 min. Para converter a parte decimal, multiplique por 60: 0,4 h = 24 min; 0,2 h = 12 min.",
      "",
      "### Subtrair horários",
      "Se os minutos não dão, “empreste” 1 hora = 60 minutos. De 13h47 a 16h25: 16h25 = 15h85; 15h85 − 13h47 = 2h38.",
      "",
      "### Frações de hora",
      "Um quarto de hora = 15 min; meia hora = 30 min; três quartos = 45 min; 0,1 h = 6 min.",
    ]),
    PRATICAR,
    q("2,4 horas equivalem a:", ["2 h 04 min", "2 h 24 min", "2 h 40 min", "2 h 14 min", "2 h 44 min"], "B", "0,4 × 60 = 24 minutos."),
    q("Uma reunião começou às 13h47 e terminou às 16h25. Quanto durou?", ["2 h 22 min", "2 h 38 min", "2 h 42 min", "3 h 12 min", "3 h 38 min"], "B", "De 13h47 a 16h47 seriam 3 h; tirando 22 min, 2 h 38 min."),
    ce("Um quarto de hora mais 0,1 hora somam 21 minutos.", "Certo", "15 min + 6 min = 21 min."),
  ]);

  A("geometria-e-medidas/perimetro-e-area-de-figuras-planas", [
    aprofundar([
      "### Fórmulas que mais caem",
      "- Triângulo: {{[[b · h || 2]]}} · trapézio: {{[[(B + b) · h || 2]]}} · losango: {{[[D · d || 2]]}}.",
      "- Círculo: área {{π r^{2}}}; comprimento da circunferência {{2 π r}}.",
      "",
      "### Ampliação",
      "Multiplicar todos os lados por k multiplica o perímetro por **k** e a área por **k²**. Dobrar o lado de um quadrado quadruplica a área.",
      "",
      "### Figuras compostas",
      "Divida em figuras conhecidas e some, ou calcule a figura “cheia” e subtraia o buraco (ex.: área de uma coroa circular = círculo maior − círculo menor).",
    ]),
    PRATICAR,
    q("Um trapézio tem bases de 10 cm e 6 cm e altura de 4 cm. Sua área é:", ["24 cm²", "30 cm²", "32 cm²", "40 cm²", "64 cm²"], "C", "(10 + 6) · 4 ÷ 2 = 32 cm²."),
    q("Dobrando o lado de um quadrado, sua área fica multiplicada por:", ["2", "3", "4", "6", "8"], "C", "A área depende do quadrado do lado: 2² = 4."),
    q("A área de um círculo de raio 5 cm (use π = 3,14) é:", ["15,7 cm²", "31,4 cm²", "78,5 cm²", "157 cm²", "314 cm²"], "C", "3,14 · 25 = 78,5 cm². 31,4 cm é o comprimento da circunferência."),
    ce("Um losango com diagonais de 8 cm e 6 cm tem área de 24 cm².", "Certo", "8 · 6 ÷ 2 = 24 cm²."),
  ]);

  A("geometria-e-medidas/volume-de-solidos", [
    aprofundar([
      "### Prismas e cilindros: base × altura",
      "{{V = A_{base} · h}}. Cilindro: {{V = π r^{2} h}}.",
      "",
      "### Pontudos: um terço",
      "Pirâmide e cone têm **1/3** do volume do prisma ou cilindro de mesma base e altura.",
      "",
      "### Esfera",
      "{{V = [[4 || 3]] π r^{3}}}.",
      "",
      "### Ampliação",
      "Multiplicar as medidas por k multiplica o volume por **k³**: dobrar a aresta de um cubo multiplica o volume por 8.",
    ]),
    PRATICAR,
    q("Uma caixa-d'água cilíndrica tem raio de 2 m e altura de 5 m. Usando π = 3, sua capacidade é:", ["6.000 L", "20.000 L", "30.000 L", "60.000 L", "120.000 L"], "D", "V = 3 · 2² · 5 = 60 m³ = 60.000 L."),
    q("Dobrando a aresta de um cubo, seu volume fica multiplicado por:", ["2", "4", "6", "8", "9"], "D", "2³ = 8."),
    q("Um cone e um cilindro têm a mesma base e a mesma altura. O volume do cone é que fração do volume do cilindro?", ["1/4", "1/3", "1/2", "2/3", "É igual"], "B", "Cone e pirâmide têm um terço do volume do “sólido reto” correspondente."),
    ce("Uma caixa de 30 cm × 20 cm × 10 cm comporta 6 litros.", "Certo", "6.000 cm³ = 6 dm³ = 6 L."),
  ]);

  A("geometria-e-medidas/teorema-de-pitagoras", [
    aprofundar([
      "### Ternas que aparecem pronto",
      "3-4-5, 5-12-13, 8-15-17, 7-24-25 e seus múltiplos (6-8-10, 9-12-15, 10-24-26…). Reconhecer poupa a conta.",
      "",
      "### Diagonais e alturas",
      "- Diagonal do quadrado de lado ℓ: {{ℓ√2}}.",
      "- Diagonal do retângulo a × b: {{√(a^{2} + b^{2})}}.",
      "- Altura do triângulo equilátero de lado ℓ: {{[[ℓ√3 || 2]]}}.",
      "",
      "### A recíproca",
      "Se a² + b² = c² para os lados de um triângulo, ele é **retângulo**. Serve para testar se três medidas formam um ângulo reto.",
    ]),
    PRATICAR,
    q("Uma escada de 10 m está apoiada numa parede, com o pé a 6 m dela. A que altura a escada toca a parede?", ["6 m", "7 m", "8 m", "9 m", "10 m"], "C", "h² + 6² = 10², então h² = 64 e h = 8 m (terna 6-8-10)."),
    q("A diagonal de um retângulo de 12 cm por 5 cm mede:", ["7 cm", "13 cm", "15 cm", "17 cm", "√119 cm"], "B", "√(144 + 25) = √169 = 13 cm."),
    ce("Um triângulo de lados 7, 24 e 25 é retângulo.", "Certo", "49 + 576 = 625 = 25²."),
    q("A diagonal de um quadrado de lado 4 cm mede:", ["4 cm", "4√2 cm", "8 cm", "2√2 cm", "16 cm"], "B", "ℓ√2 = 4√2 cm ≈ 5,66 cm."),
  ]);

  /* ================= ESTATÍSTICA BÁSICA ================= */

  A("estatistica-basica/leitura-de-tabelas-e-graficos", [
    aprofundar([
      "### Frequências",
      "- **Absoluta**: quantas vezes aparece. **Relativa**: a absoluta dividida pelo total (em %).",
      "- **Acumulada**: soma das frequências até aquela linha (“quantos tiveram até tal nota”).",
      "",
      "### Gráfico de setores (pizza)",
      "Cada 1% vale 3,6°: um setor de 25% tem 90°.",
      "",
      "### Armadilhas",
      "- Eixo que **não começa no zero** exagera diferenças.",
      "- Crescimentos absolutos iguais dão percentuais **diferentes**: de 400 para 500 é +25%; de 500 para 600 é +20%.",
    ]),
    PRATICAR,
    q("Num gráfico de setores, uma categoria corresponde a 25% do total. O ângulo do setor é:", ["25°", "45°", "60°", "90°", "100°"], "D", "25% de 360° = 90°."),
    q("Num grupo de 80 pessoas, 28 preferem o produto X. A frequência relativa dessa preferência é:", ["28%", "30%", "35%", "40%", "52%"], "C", "28 ÷ 80 = 0,35 = 35%."),
    ce("Se as vendas foram de 400 unidades em janeiro, 500 em fevereiro e 600 em março, o crescimento percentual de fevereiro para março foi igual ao de janeiro para fevereiro.", "Errado",
      "Os aumentos absolutos são iguais (100), mas os percentuais não: 25% e depois 20%."),
  ], ESTATISTICA);

  A("estatistica-basica/media-moda-e-mediana", [
    aprofundar([
      "### Mediana: sempre ordene primeiro",
      "Com n ímpar, é o termo do meio; com n par, a média dos dois termos centrais.",
      "",
      "### Moda",
      "O valor mais frequente. Pode haver mais de uma (bimodal) ou nenhuma (amodal).",
      "",
      "### Qual medida usar",
      "A média é puxada por valores extremos. Em salários com poucos valores muito altos, a **mediana** representa melhor o “típico”.",
      "",
      "### Tabela de frequências",
      "Média = soma de (valor × frequência) ÷ soma das frequências.",
    ]),
    PRATICAR,
    q("A mediana do conjunto 3, 7, 7, 2, 9, 5, 8, 6 é:", ["5,875", "6", "6,5", "7", "7,5"], "C", "Ordenando: 2, 3, 5, 6, 7, 7, 8, 9. Dois centrais: 6 e 7; mediana 6,5. (5,875 é a média; 7 é a moda.)"),
    ce("No conjunto de salários 2, 2, 2, 3 e 20 (em mil reais), a média é maior que a mediana.", "Certo", "Média: 29 ÷ 5 = 5,8; mediana: 2. O valor 20 puxa a média para cima."),
    q("Numa turma, 3 alunos tiraram 5, 5 alunos tiraram 6 e 2 alunos tiraram 8. A média da turma é:", ["6", "6,1", "6,3", "6,5", "7"], "B", "(3 · 5 + 5 · 6 + 2 · 8) ÷ 10 = (15 + 30 + 16) ÷ 10 = 6,1."),
  ], ESTATISTICA);

  A("estatistica-basica/nocoes-de-dispersao", [
    aprofundar([
      "### As medidas",
      "- **Amplitude**: maior − menor.",
      "- **Variância** (populacional): média dos quadrados dos desvios em relação à média.",
      "- **Desvio padrão**: raiz quadrada da variância (volta à unidade dos dados).",
      "- **Coeficiente de variação**: {{CV = [[desvio padrão || média]]}}, em %; compara dispersões de conjuntos com médias diferentes.",
      "",
      "### Transformações",
      "- Somar uma constante a todos os valores **não muda** a dispersão (só desloca).",
      "- Multiplicar por k multiplica o desvio padrão por |k| e a variância por k².",
    ]),
    PRATICAR,
    q("A variância populacional do conjunto 2, 4, 6, 8 é:", ["2", "4", "√5", "5", "20"], "D", "Média 5; desvios −3, −1, 1, 3; quadrados 9, 1, 1, 9; soma 20; variância 20 ÷ 4 = 5."),
    q("A amplitude do conjunto 12, 7, 15, 3, 9 é:", ["3", "8", "9", "12", "15"], "D", "15 − 3 = 12."),
    ce("Somando 10 a todos os valores de um conjunto, o desvio padrão aumenta 10.", "Errado", "Todos se deslocam igualmente; a distância à média não muda, então o desvio padrão continua o mesmo."),
    q("Um conjunto tem média 50 e desvio padrão 5. O coeficiente de variação é:", ["5%", "10%", "25%", "50%", "250%"], "B", "5 ÷ 50 = 0,1 = 10%."),
  ], ESTATISTICA);
})();
