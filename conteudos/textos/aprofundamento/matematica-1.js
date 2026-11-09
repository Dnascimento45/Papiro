/* Aprofundamento · Matemática, parte 1: Conjuntos e Números e Aritmética.
   Acrescenta texto, exemplos e questões DEPOIS do que já existe em textos/matematica-*.js
   (assim os ids das questões antigas não mudam). Questões autorais, conferidas à mão. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`nucleo/matematica/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Fundamentos de Matemática Elementar", autor: "Gelson Iezzi e outros", nota: "Coleção completa do básico; o volume 1 cobre conjuntos e funções." },
    { titulo: "A Matemática do Ensino Médio", autor: "Elon Lages Lima e outros (SBM)", nota: "Explica o porquê das regras; bom para quem quer entender, não só decorar." },
    { titulo: "Khan Academy em português", url: "https://pt.khanacademy.org", nota: "Vídeos e exercícios gratuitos de aritmética, frações e porcentagem." },
    { titulo: "Portal da OBMEP (Portal do Saber)", url: "https://portaldaobmep.impa.br", nota: "Videoaulas gratuitas do 6º ano ao ensino médio." },
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar com questões de prova",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Filtre por disciplina Matemática, assunto e banca (FAFIPA, IBFC, Cebraspe…)." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas, com filtro por banca e órgão." },
      { titulo: "PCI Concursos · provas anteriores", url: "https://www.pciconcursos.com.br/provas/", nota: "Provas completas com gabarito, gratuitas, para treinar com cronômetro." },
    ],
  };

  /* ================= CONJUNTOS E NÚMEROS ================= */

  A("conjuntos-e-numeros/conjuntos-numericos", [
    aprofundar([
      "### Dízimas periódicas são racionais",
      "Toda dízima periódica vem de uma fração (a **geratriz**). Atalho de prova:",
      "- **Simples** (o período começa logo após a vírgula): o período sobre tantos 9 quantos forem os algarismos dele. {{0,272727… = [[27 || 99]] = [[3 || 11]]}}",
      "- **Composta** (há um trecho que não se repete): (número formado até o fim do 1º período − parte que não se repete) sobre tantos 9 quanto o período e tantos 0 quanto a parte não periódica. {{0,4555… = [[45 − 4 || 90]] = [[41 || 90]]}}",
      "",
      "### Racional + irracional",
      "- Racional + irracional = **sempre irracional** (ex.: 1 + √2).",
      "- Irracional × irracional **pode** dar racional: √2 × √2 = 2.",
      "- π, √2, √3 e o número *e* são irracionais; 22/7 e 3,14 são só **aproximações** de π.",
      "",
      "### Intervalos",
      "[2, 5] inclui as pontas; ]2, 5[ (ou (2, 5)) exclui; [2, +∞[ vai de 2 em diante. Infinito é sempre aberto.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Geratriz com parte inteira", enunciado: "Escreva 1,2333… como fração irredutível.", resolucao: "Separe a parte inteira ou use a regra direto: {{1,2333… = [[123 − 12 || 90]] = [[111 || 90]] = [[37 || 30]]}}. Confira: 37 ÷ 30 = 1,2333…", resposta: "37/30" },
    PRATICAR,
    q("Qual é a fração geratriz da dízima 2,181818…?", ["24/11", "218/100", "21/11", "109/50", "23/11"], "A",
      "Parte inteira 2 e período 18: {{2 + [[18 || 99]] = 2 + [[2 || 11]] = [[24 || 11]]}}. As alternativas 218/100 e 109/50 valem 2,18 exatos, sem repetição."),
    ce("O produto de dois números irracionais é sempre um número irracional.", "Errado",
      "Contraexemplo: √2 × √2 = 2, que é racional. Já a soma de um racional com um irracional é sempre irracional."),
    q("Assinale a afirmação verdadeira.", ["Todo número inteiro é natural.", "0,1010010001… (com cada vez mais zeros) é racional.", "−3/4 pertence a ℚ, mas não pertence a ℤ.", "√16 é irracional.", "π é igual a 22/7."], "C",
      "−3/4 é razão de inteiros (racional), mas não é inteiro. Inteiros negativos não são naturais; a dízima sem período é irracional; √16 = 4; 22/7 é só uma aproximação de π."),
  ]);

  A("conjuntos-e-numeros/operacoes-com-conjuntos", [
    aprofundar([
      "### Três conjuntos",
      "A fórmula da união de três conjuntos está logo abaixo. Na prova, é mais seguro **preencher o diagrama de Venn de dentro para fora**: primeiro a região dos três, depois as interseções de dois (descontando o centro), depois o que é “só A”, “só B”, “só C”.",
      "",
      "### Outras operações",
      "- **Diferença** A − B: o que está em A e não está em B.",
      "- **Complementar** de A em relação ao universo U: tudo de U que não está em A.",
      "- **Número de subconjuntos** de um conjunto com n elementos: 2ⁿ (inclui o vazio e o próprio conjunto).",
      "- “Nenhum dos dois” = total − n(A ∪ B).",
    ]),
    { tipo: "formula", titulo: "União de três conjuntos", expr: ["n(A ∪ B ∪ C) = n(A) + n(B) + n(C)", "− n(A ∩ B) − n(A ∩ C) − n(B ∩ C)", "+ n(A ∩ B ∩ C)"], legenda: "Soma os três, desconta as interseções de dois e devolve a região dos três." },
    { tipo: "exemplo", titulo: "Exemplo · Três programas", enunciado: "Dos 100 servidores de um setor, 50 usam Word, 40 usam Excel e 30 usam PowerPoint; 20 usam Word e Excel, 15 usam Word e PowerPoint, 10 usam Excel e PowerPoint, e 5 usam os três. Quantos não usam nenhum dos três?",
      resolucao: "Usam pelo menos um: 50 + 40 + 30 − 20 − 15 − 10 + 5 = 80. Nenhum: 100 − 80 = 20.", resposta: "20 servidores" },
    PRATICAR,
    q("Um conjunto A tem 5 elementos. Quantos subconjuntos A possui?", ["10", "25", "31", "32", "64"], "D",
      "2⁵ = 32, contando o vazio e o próprio A. A alternativa 31 esquece um deles."),
    q("Numa turma de 60 alunos, 35 estudam espanhol, 30 estudam inglês e 12 não estudam nenhum dos dois idiomas. Quantos estudam os dois?", ["12", "15", "17", "18", "23"], "C",
      "Estudam pelo menos um: 60 − 12 = 48. Então 35 + 30 − x = 48, e x = 17."),
    ce("Se A = {1, 2, 3, 4} e B = {3, 4, 5}, então A − B = {1, 2}.", "Certo",
      "A − B guarda os elementos de A que não estão em B: 1 e 2."),
  ]);

  A("conjuntos-e-numeros/divisibilidade-e-numeros-primos", [
    aprofundar([
      "### Quantos divisores tem um número?",
      "Decomponha em fatores primos, some 1 a cada expoente e multiplique:",
      "{{360 = 2^{3} · 3^{2} · 5^{1} → (3 + 1)(2 + 1)(1 + 1) = 24}} divisores positivos.",
      "",
      "### Como testar se um número é primo",
      "Basta tentar dividir pelos primos **até a raiz quadrada** dele. Para 97: √97 ≈ 9,8; testa 2, 3, 5 e 7. Nenhum divide, então 97 é primo.",
      "",
      "### Lembretes",
      "- 1 **não** é primo (tem um divisor só). 2 é o **único primo par**.",
      "- Números terminados em 5 (maiores que 5) nunca são primos.",
      "- Para ser divisível por 6, precisa ser divisível por 2 **e** por 3 ao mesmo tempo (vale para qualquer produto de números primos entre si: 12 = 3 × 4, 15 = 3 × 5…).",
    ]),
    PRATICAR,
    q("Quantos divisores positivos tem o número 72?", ["8", "10", "12", "14", "18"], "C",
      "72 = 2³ · 3². Divisores: (3 + 1)(2 + 1) = 12."),
    q("Qual dos números abaixo é primo?", ["87", "91", "97", "111", "119"], "C",
      "87 = 3 · 29; 91 = 7 · 13; 111 = 3 · 37; 119 = 7 · 17. O 97 não é divisível por 2, 3, 5 nem 7 (primos até √97)."),
    ce("O número 4.356 é divisível por 6.", "Certo",
      "É par (divisível por 2) e a soma dos algarismos, 4 + 3 + 5 + 6 = 18, é múltipla de 3. Divisível por 2 e por 3, logo por 6."),
  ]);

  A("conjuntos-e-numeros/mmc-e-mdc", [
    aprofundar([
      "### Como saber se o problema é de MMC ou de MDC",
      "- **MMC**: eventos que se repetem e voltam a **coincidir** (“juntos de novo”, “mesmo dia”, “próximo encontro”). A resposta é **maior** que os números dados.",
      "- **MDC**: **dividir em partes iguais, do maior tamanho possível, sem sobra**. A resposta é **menor** que os números dados.",
      "",
      "### Relação entre eles",
      "Para dois números: {{MMC(a, b) · MDC(a, b) = a · b}}. Se a e b são **primos entre si** (MDC = 1), o MMC é o próprio produto.",
      "",
      "### Cuidado com a pergunta",
      "Em problemas de MDC, a banca pode pedir o **tamanho** de cada parte (o MDC) ou o **número de partes** (soma das divisões pelo MDC).",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Ônibus", enunciado: "Dois ônibus saem juntos às 7h. Um sai a cada 12 minutos e o outro a cada 20. A que horas voltam a sair juntos?",
      resolucao: "Coincidência: MMC(12, 20). 12 = 2² · 3 e 20 = 2² · 5, então MMC = 2² · 3 · 5 = 60 minutos.", resposta: "Às 8h" },
    PRATICAR,
    q("Qual é o MDC de 84 e 126?", ["14", "21", "28", "42", "252"], "D",
      "84 = 2² · 3 · 7 e 126 = 2 · 3² · 7. Fatores comuns com o menor expoente: 2 · 3 · 7 = 42. O 252 é o MMC."),
    q("Três luzes piscam a cada 4, 6 e 10 segundos. Se piscaram juntas agora, depois de quanto tempo piscarão juntas de novo?", ["20 segundos", "30 segundos", "40 segundos", "1 minuto", "2 minutos"], "D",
      "MMC(4, 6, 10) = 60 segundos = 1 minuto."),
    q("O MMC de dois números é 180 e o MDC é 6. Se um deles é 36, o outro é:", ["15", "24", "30", "45", "60"], "C",
      "MMC × MDC = produto dos números: 180 × 6 = 36 × x, então x = 1.080 ÷ 36 = 30."),
    q("Duas peças de tecido, de 120 m e 84 m, serão cortadas em pedaços de mesmo comprimento, o maior possível, sem sobras. Quantos pedaços serão obtidos?", ["12", "14", "17", "19", "24"], "C",
      "Tamanho do pedaço: MDC(120, 84) = 12 m. Pedaços: 120 ÷ 12 + 84 ÷ 12 = 10 + 7 = 17. A alternativa 12 é o tamanho, não a quantidade."),
  ]);

  A("conjuntos-e-numeros/fracoes-e-numeros-decimais", [
    aprofundar([
      "### “Fração de fração” é multiplicação",
      "{{[[2 || 3]] de [[3 || 5]] = [[2 || 3]] · [[3 || 5]] = [[2 || 5]]}}",
      "",
      "### Problemas do “restante”",
      "Quando a banca diz “gastou 1/3 e depois 1/4 **do restante**”, a segunda fração é do que sobrou, não do total: sobra {{[[2 || 3]] · [[3 || 4]] = [[1 || 2]]}} do total.",
      "",
      "### Comparar frações",
      "Multiplique cruzado: {{[[7 || 12]] ? [[5 || 9]] → 7 · 9 = 63 e 5 · 12 = 60}}; como 63 > 60, 7/12 é maior.",
      "",
      "### Dividir por decimal",
      "Multiplique os dois números pela mesma potência de 10 até sumir a vírgula do divisor: 0,25 ÷ 0,05 = 25 ÷ 5 = 5.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Salário", enunciado: "Uma pessoa gastou 2/5 do salário com aluguel e 1/3 do restante com alimentação. Sobraram R$ 1.200. Qual é o salário?",
      resolucao: "Depois do aluguel restam 3/5. A alimentação leva {{[[1 || 3]] · [[3 || 5]] = [[1 || 5]]}} do salário. Sobra {{[[3 || 5]] − [[1 || 5]] = [[2 || 5]]}}. Então {{[[2 || 5]] S = 1.200}} e S = 3.000.", resposta: "R$ 3.000,00" },
    PRATICAR,
    q("Quanto é 3/4 de 2/9 de 360?", ["45", "60", "72", "80", "90"], "B",
      "2/9 de 360 = 80; 3/4 de 80 = 60."),
    q("Uma caixa-d'água estava com 3/8 da capacidade. Depois de receber 450 litros, ficou com 3/4. Qual é a capacidade total?", ["900 L", "1.000 L", "1.200 L", "1.350 L", "1.600 L"], "C",
      "Os 450 L correspondem a {{[[3 || 4]] − [[3 || 8]] = [[3 || 8]]}} da caixa. Então {{C = 450 · [[8 || 3]] = 1.200}} litros."),
    ce("A fração 7/12 é maior que a fração 5/9.", "Certo",
      "Produto cruzado: 7 · 9 = 63 e 5 · 12 = 60. Como 63 > 60, 7/12 > 5/9 (0,583… contra 0,555…)."),
    q("O valor de 0,25 ÷ 0,05 + 1,2 × 0,5 é:", ["0,65", "1,85", "5,06", "5,6", "6,5"], "D",
      "Divisão e multiplicação antes da soma: 0,25 ÷ 0,05 = 5 e 1,2 × 0,5 = 0,6. Total 5,6."),
  ]);

  A("conjuntos-e-numeros/potenciacao-e-radiciacao", [
    aprofundar([
      "### Expoente negativo e fracionário",
      "- {{a^{−n} = [[1 || a^{n}]]}}: 2⁻³ = 1/8.",
      "- {{a^{m/n} = ⁿ√(a^{m})}}: {{8^{2/3} = ∛(8^{2}) = ∛64 = 4}}.",
      "",
      "### Racionalizar",
      "Tirar a raiz do denominador multiplicando em cima e embaixo: {{[[1 || √2]] = [[√2 || 2]]}}.",
      "",
      "### Somar raízes",
      "Só se somam raízes **iguais** depois de simplificar: √12 + √27 = 2√3 + 3√3 = 5√3. Mas √4 + √9 = 2 + 3 = 5, e **não** √13.",
      "",
      "### Notação científica",
      "Número entre 1 e 10 vezes potência de 10: 0,00045 = 4,5 × 10⁻⁴; 320.000 = 3,2 × 10⁵. Para dividir, divide os números e **subtrai** os expoentes.",
    ]),
    PRATICAR,
    q("O valor de 8^(2/3) + 16^(1/2) é:", ["6", "8", "10", "12", "16"], "B",
      "8^(2/3) = (∛8)² = 2² = 4 e 16^(1/2) = √16 = 4. Soma: 8."),
    q("O valor de (−3)² − 3² + (−2)³ é:", ["−26", "−8", "0", "8", "10"], "B",
      "(−3)² = 9, mas 3² = 9 entra com o sinal de menos da expressão; (−2)³ = −8. Então 9 − 9 − 8 = −8."),
    ce("√12 + √27 = 5√3.", "Certo", "√12 = 2√3 e √27 = 3√3; somando, 5√3."),
    q("O resultado de (3,2 × 10⁵) ÷ (8 × 10²) é:", ["4", "40", "400", "4.000", "40.000"], "C",
      "3,2 ÷ 8 = 0,4 e 10⁵ ÷ 10² = 10³. Logo 0,4 × 10³ = 400."),
  ]);

  A("conjuntos-e-numeros/expressoes-numericas", [
    aprofundar([
      "### Onde as bancas pegam",
      "- **Multiplicação e divisão antes de soma e subtração**, da esquerda para a direita: 20 − 4 × 3 = 20 − 12, nunca 16 × 3.",
      "- **Potência antes de tudo** (depois dos parênteses): 2 + 3 × 4² = 2 + 3 × 16 = 50.",
      "- −2² = −4, mas (−2)² = 4: sem parênteses, o expoente vale só para o 2.",
      "- Frações: resolva cada termo e só no fim tire o MMC para somar.",
      "- “de” entre números é multiplicação: 1/2 de 30 = 15.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Parênteses, colchetes e chaves", enunciado: "Calcule {2 + [3 · (8 − 5)² − 4]} ÷ 5.",
      resolucao: "Parênteses: 8 − 5 = 3. Potência: 3² = 9. Colchetes: 3 · 9 − 4 = 23. Chaves: 2 + 23 = 25. Divisão: 25 ÷ 5 = 5.", resposta: "5" },
    PRATICAR,
    q("O valor de 20 − 4 × 3 + 18 ÷ 6 é:", ["7", "11", "15", "21", "51"], "B",
      "Primeiro 4 × 3 = 12 e 18 ÷ 6 = 3. Depois, da esquerda para a direita: 20 − 12 + 3 = 11."),
    q("O valor de [(−2)³ + 4²] ÷ (−2) é:", ["−12", "−8", "−4", "4", "12"], "C",
      "(−2)³ = −8 e 4² = 16. Colchetes: 8. Dividindo por −2: −4."),
    q("O valor de 1/2 + 1/3 × 3/4 é:", ["5/8", "3/4", "5/6", "1", "5/4"], "B",
      "Multiplicação primeiro: 1/3 × 3/4 = 1/4. Depois 1/2 + 1/4 = 3/4. Quem soma antes encontra 5/8."),
    ce("O resultado da expressão 2 + 3 × 4² é 400.", "Errado",
      "Potência, depois multiplicação, depois soma: 4² = 16; 3 × 16 = 48; 2 + 48 = 50. O 400 sai de fazer (2 + 3 × 4)²."),
  ]);

  /* ================= ARITMÉTICA ================= */

  A("aritmetica/razao-e-proporcao", [
    aprofundar([
      "### Propriedade da soma",
      "Se {{[[a || b]] = [[c || d]]}}, então {{[[a + c || b + d]] = [[a || b]]}}. É o que resolve “as idades estão na razão 3 para 5 e somam 48”: cada “parte” vale 48 ÷ 8 = 6.",
      "",
      "### Razões com nome",
      "- **Escala** = medida no desenho ÷ medida real (mesma unidade). 1:250.000 quer dizer que 1 cm no mapa são 250.000 cm = 2,5 km.",
      "- **Velocidade média** = distância ÷ tempo. **Densidade demográfica** = habitantes ÷ área.",
      "",
      "### Quarta proporcional",
      "É o x em {{[[a || b]] = [[c || x]]}}. Para 3, 8 e 12: {{x = [[8 · 12 || 3]] = 32}}.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Idades", enunciado: "As idades de dois irmãos estão na razão 3 para 5 e somam 48 anos. Quais são as idades?",
      resolucao: "São 3 + 5 = 8 partes; cada parte vale 48 ÷ 8 = 6. Idades: 3 · 6 = 18 e 5 · 6 = 30.", resposta: "18 e 30 anos" },
    PRATICAR,
    q("Num mapa de escala 1:250.000, duas cidades estão a 6 cm de distância. A distância real é:", ["1,5 km", "2,5 km", "15 km", "25 km", "150 km"], "C",
      "6 × 250.000 = 1.500.000 cm = 15.000 m = 15 km."),
    q("Num setor com 33 servidores, a razão entre homens e mulheres é 4 para 7. Quantas são as mulheres?", ["12", "18", "21", "24", "27"], "C",
      "São 4 + 7 = 11 partes; 33 ÷ 11 = 3 por parte. Mulheres: 7 × 3 = 21."),
    q("A quarta proporcional dos números 3, 8 e 12, nessa ordem, é:", ["4,5", "24", "28", "32", "36"], "D",
      "3/8 = 12/x, então 3x = 96 e x = 32."),
    ce("Se a/b = 2/3 e a + b = 40, então a = 16.", "Certo", "São 5 partes de 40 ÷ 5 = 8; a = 2 × 8 = 16 e b = 24."),
  ]);

  A("aritmetica/grandezas-diretamente-e-inversamente-proporcionais", [
    aprofundar([
      "### O teste da constante",
      "- **Diretamente proporcionais**: a divisão é constante, {{[[y || x]] = k}}.",
      "- **Inversamente proporcionais**: o produto é constante, {{x · y = k}}.",
      "",
      "### Crescer junto não basta",
      "Uma corrida de táxi com bandeirada de R$ 5 e R$ 2 por km custa R$ 25 por 10 km e R$ 45 por 20 km. A distância dobrou e o preço **não** dobrou: as grandezas crescem juntas, mas não são proporcionais. O mesmo vale para idade e altura, ou lado e área do quadrado (área é proporcional ao **quadrado** do lado).",
      "",
      "### Proporcional a várias grandezas",
      "Se A é diretamente proporcional a B e inversamente a C, então {{A = k · [[B || C]]}}. É a base da regra de três composta.",
    ]),
    PRATICAR,
    q("As grandezas x e y são inversamente proporcionais. Quando x = 6, y = 10. Quanto vale y quando x = 15?", ["4", "5", "6", "9", "25"], "A",
      "O produto é constante: 6 × 10 = 60. Então 15 · y = 60 e y = 4."),
    q("Qual das relações abaixo é de proporcionalidade direta?", ["Idade e altura de uma pessoa.", "Lado de um quadrado e sua área.", "Quantidade de pães iguais e o valor pago por eles.", "Velocidade de um carro e tempo gasto num mesmo percurso.", "Consumo de energia e valor de uma conta com taxa fixa."], "C",
      "Dobrar os pães dobra o valor. Velocidade × tempo é inversa; área cresce com o quadrado do lado; a taxa fixa quebra a proporcionalidade."),
    ce("Se A é diretamente proporcional a B e inversamente proporcional a C, então A = k · B / C, para alguma constante k.", "Certo",
      "B no numerador (direta) e C no denominador (inversa)."),
  ]);

  A("aritmetica/divisao-proporcional", [
    aprofundar([
      "### Inversamente: use os inversos",
      "Dividir inversamente a 2, 3 e 6 é dividir diretamente a 1/2, 1/3 e 1/6. Multiplique tudo pelo MMC (6) para trabalhar com inteiros: pesos **3, 2 e 1**.",
      "",
      "### Divisão composta",
      "Diretamente a uma grandeza e inversamente a outra: o peso de cada um é {{[[direta || inversa]]}}. Diretamente a duas grandezas: o peso é o **produto** (ex.: capital × tempo numa sociedade).",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Prêmio por horas e faltas", enunciado: "Um prêmio de R$ 8.100 será dividido entre duas servidoras diretamente às horas de capacitação (10 e 12) e inversamente às faltas (2 e 3). Quanto recebe cada uma?",
      resolucao: "Pesos: 10 ÷ 2 = 5 e 12 ÷ 3 = 4. Soma 9; cada parte vale 8.100 ÷ 9 = 900. Primeira: 5 × 900 = 4.500; segunda: 4 × 900 = 3.600.", resposta: "R$ 4.500 e R$ 3.600" },
    PRATICAR,
    q("R$ 1.800 foram divididos em partes diretamente proporcionais a 2, 3 e 4. A maior parte é:", ["R$ 600", "R$ 700", "R$ 800", "R$ 900", "R$ 1.000"], "C",
      "2 + 3 + 4 = 9 partes de 1.800 ÷ 9 = 200. Maior: 4 × 200 = 800."),
    q("R$ 2.400 foram divididos em partes inversamente proporcionais a 2, 3 e 6. A menor parte é:", ["R$ 200", "R$ 400", "R$ 600", "R$ 800", "R$ 1.200"], "B",
      "Inversos 1/2, 1/3, 1/6; vezes 6: pesos 3, 2, 1. Soma 6; parte = 400. A menor (peso 1, de quem tem o maior número) é R$ 400."),
    q("Numa sociedade, Ana investiu R$ 20.000 por 6 meses e Bia, R$ 30.000 por 8 meses. O lucro de R$ 36.000 é dividido proporcionalmente ao capital e ao tempo. Quanto recebe Bia?", ["R$ 12.000", "R$ 18.000", "R$ 21.600", "R$ 24.000", "R$ 27.000"], "D",
      "Pesos: 20.000 × 6 = 120.000 e 30.000 × 8 = 240.000, razão 1 : 2. Bia: 2/3 de 36.000 = 24.000. A alternativa 21.600 considera só o capital."),
  ]);

  A("aritmetica/porcentagem", [
    aprofundar([
      "### Ponto percentual × porcentagem",
      "Se a taxa de desemprego passou de 10% para 12%, ela subiu **2 pontos percentuais**, o que é um aumento **de 20%** sobre a taxa anterior (2 ÷ 10).",
      "",
      "### Porcentagem de porcentagem",
      "30% de 40% = 0,3 × 0,4 = 0,12 = 12%.",
      "",
      "### Lucro sobre o custo × sobre a venda",
      "- Lucro de 20% **sobre o custo**: V = 1,2 × C.",
      "- Lucro de 20% **sobre a venda**: V = C + 0,2 × V, ou seja, 0,8 × V = C.",
      "",
      "### Desfazer um aumento",
      "Depois de subir 25% (fator 1,25), para voltar ao original o desconto é {{1 − [[1 || 1,25]] = 0,2 = 20%}}, e não 25%.",
    ]),
    PRATICAR,
    q("Um produto custou R$ 80 e foi vendido com lucro de 20% sobre o preço de venda. O preço de venda foi:", ["R$ 96", "R$ 100", "R$ 104", "R$ 110", "R$ 120"], "B",
      "V = 80 + 0,2V, então 0,8V = 80 e V = 100. Com lucro de 20% sobre o custo, seria R$ 96."),
    q("Depois de um aumento de 25%, qual desconto faz o preço voltar ao valor original?", ["15%", "20%", "22,5%", "25%", "30%"], "B",
      "1,25 × (1 − d) = 1, então 1 − d = 0,8 e d = 20%."),
    ce("Se a inflação anual passou de 4% para 5%, houve aumento de 1% na inflação.", "Errado",
      "Houve aumento de 1 ponto percentual, que corresponde a 25% de aumento (1 ÷ 4)."),
    q("Quanto é 30% de 40% de 500?", ["35", "60", "70", "120", "350"], "B", "0,3 × 0,4 × 500 = 0,12 × 500 = 60."),
  ]);

  A("aritmetica/media-aritmetica-e-media-ponderada", [
    aprofundar([
      "### Média de grupos juntos",
      "Não se tira a média das médias: pondera-se pelo tamanho de cada grupo. Turma A (20 alunos, média 7) e turma B (30 alunos, média 8): {{[[20 · 7 + 30 · 8 || 50]] = [[380 || 50]] = 7,6}}.",
      "",
      "### Entrou ou saiu alguém",
      "Trabalhe com a **soma**: soma = média × quantidade. Saiu um número: ele é a diferença entre a soma antiga e a nova.",
      "",
      "### Propriedades",
      "- Somar (ou subtrair) uma constante a todos os valores soma (ou subtrai) a mesma constante à média.",
      "- Multiplicar todos os valores por k multiplica a média por k.",
    ]),
    PRATICAR,
    q("A média de 5 números é 12. Retirando um deles, a média dos 4 restantes passa a 10. O número retirado é:", ["10", "12", "16", "20", "22"], "D",
      "Soma inicial: 5 × 12 = 60. Soma final: 4 × 10 = 40. Retirado: 60 − 40 = 20."),
    q("Numa prova, português tem peso 3, matemática peso 2 e direito peso 5. Um candidato tirou 8 em português e 5 em matemática. Que nota precisa em direito para ter média 7?", ["6,8", "7", "7,2", "7,5", "8"], "C",
      "(3 · 8 + 2 · 5 + 5x) ÷ 10 = 7, então 34 + 5x = 70, 5x = 36 e x = 7,2."),
    ce("Se somarmos 3 a cada número de um conjunto de dados, a média aritmética também aumenta 3.", "Certo",
      "A soma aumenta 3n; dividida por n, a média aumenta 3."),
  ]);

  A("aritmetica/regra-de-tres", [
    q("Oito máquinas iguais produzem 960 peças em 6 dias. Quantas máquinas são necessárias para produzir 1.200 peças em 5 dias?", ["9", "10", "12", "14", "15"], "C",
      "Mais peças pedem mais máquinas (direta); menos dias pedem mais máquinas (inversa). {{x = 8 · [[1.200 || 960]] · [[6 || 5]] = 8 · 1,25 · 1,2 = 12}}."),
    q("Quinze operários, trabalhando 8 horas por dia, fazem uma obra em 20 dias. Em quantos dias 16 operários, trabalhando 6 horas por dia, fazem a mesma obra?", ["18", "20", "22", "25", "30"], "D",
      "O total de “operário-horas” é constante: 15 · 8 · 20 = 2.400. Então 16 · 6 · x = 2.400, 96x = 2.400 e x = 25."),
  ]);
})();
