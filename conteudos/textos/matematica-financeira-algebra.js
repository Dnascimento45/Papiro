/* Matemática · Matemática Financeira Básica + Álgebra. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "matematica", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const MF = "Matemática Financeira Básica";
  const AL = "Álgebra";

  /* ================= MATEMÁTICA FINANCEIRA ================= */

  A(MF, "Juros simples", {
    resumo: "Juros calculados sempre sobre o capital inicial: crescimento em linha reta.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "No regime de **juros simples**, a taxa incide sempre sobre o **capital inicial (C)**. Os juros de cada período são iguais, e o montante cresce como uma reta.",
        "",
        "- **C**: capital (valor aplicado ou emprestado).",
        "- **i**: taxa de juros por período, em forma decimal (3% = 0,03).",
        "- **t**: tempo, **na mesma unidade da taxa**.",
        "- **J**: juros; **M**: montante (capital + juros)."
      ]},
      { tipo: "formula", titulo: "Fórmulas", expr: ["J = C · i · t", "M = C + J = C · (1 + i · t)"] },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "R$ 5.000 foram aplicados a juros simples de 2% ao mês durante 8 meses. Qual o montante?", resolucao: ["J = 5.000 · 0,02 · 8 = 800.", "M = 5.000 + 800 = 5.800."], resposta: "R$ 5.800,00" },
      { tipo: "atencao", texto: "Taxa e tempo precisam estar na mesma unidade. Taxa de 24% ao ano por 3 meses: use 2% ao mês por 3 meses (ou 24% ao ano por [[3 || 12]] do ano). Em juros simples, taxas proporcionais são equivalentes: 2% a.m. = 24% a.a." },
      { tipo: "python", titulo: "Tabela mês a mês", codigo: `
C, i = 5000, 0.02
for t in range(0, 9, 2):
    J = C * i * t
    print(f"mês {t}: juros = {J:7.2f}  montante = {C + J:8.2f}")
`, saida: `
mês 0: juros =    0.00  montante =  5000.00
mês 2: juros =  200.00  montante =  5200.00
mês 4: juros =  400.00  montante =  5400.00
mês 6: juros =  600.00  montante =  5600.00
mês 8: juros =  800.00  montante =  5800.00
` },
      { tipo: "questao", banca: Q, enunciado: "Qual o capital que, aplicado a juros simples de 1,5% ao mês, rende R$ 360 de juros em 6 meses?", alternativas: ["R$ 2.400", "R$ 3.000", "R$ 3.600", "R$ 4.000", "R$ 5.400"], correta: "D", comentario: "360 = C · 0,015 · 6 = 0,09 · C → C = 4.000." }
    ]
  });

  A(MF, "Juros compostos", {
    resumo: "Juros sobre juros: o montante cresce multiplicando pelo mesmo fator a cada período.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Nos **juros compostos**, os juros de cada período entram no capital e passam a render também. É o regime das aplicações e dos financiamentos reais.",
        "",
        "A cada período o montante é multiplicado por **(1 + i)**."
      ]},
      { tipo: "formula", titulo: "Fórmula", expr: ["M = C · (1 + i)^{t}", "J = M − C"] },
      { tipo: "svg", titulo: "Simples × compostos", legenda: "Com a mesma taxa, os compostos ficam abaixo dos simples antes de 1 período e acima depois dele.", codigo: `
<svg viewBox="0 0 480 240" role="img" aria-label="Gráfico comparando montante a juros simples (reta) e compostos (curva crescente que passa acima da reta)">
  <line class="ln" x1="50" y1="200" x2="450" y2="200"></line>
  <line class="ln" x1="50" y1="200" x2="50" y2="20"></line>
  <text class="tx-m" x="450" y="220" text-anchor="end">tempo</text>
  <text class="tx-m" x="56" y="30">montante</text>
  <line class="ln-f" x1="50" y1="170" x2="440" y2="80"></line>
  <path class="ln-d" d="M50,170 Q300,160 440,30"></path>
  <text class="tx" x="330" y="122">simples</text>
  <text class="tx tx-d" x="350" y="58">compostos</text>
</svg>` },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "R$ 10.000 aplicados a 10% ao ano, juros compostos, por 3 anos. Qual o montante?", resolucao: ["M = 10.000 · 1,1³ = 10.000 · 1,331 = 13.310."], resposta: "R$ 13.310,00" },
      { tipo: "python", titulo: "Comparando os dois regimes", codigo: `
C, i = 10000, 0.10
for t in range(1, 6):
    simples = C * (1 + i * t)
    compostos = C * (1 + i) ** t
    print(f"ano {t}: simples {simples:9.2f} | compostos {compostos:9.2f}")
`, saida: `
ano 1: simples  11000.00 | compostos  11000.00
ano 2: simples  12000.00 | compostos  12100.00
ano 3: simples  13000.00 | compostos  13310.00
ano 4: simples  14000.00 | compostos  14641.00
ano 5: simples  15000.00 | compostos  16105.10
` },
      { tipo: "dica", texto: "Muitas provas dão uma tabela de potências, como 1,02^{12} ≈ 1,268. Use-a; não tente calcular potências altas à mão." },
      { tipo: "questao", banca: Q, enunciado: "Um capital de R$ 2.000 é aplicado a juros compostos de 5% ao mês por 2 meses. Os juros obtidos são:", alternativas: ["R$ 100,00", "R$ 200,00", "R$ 205,00", "R$ 210,00", "R$ 2.205,00"], correta: "C", comentario: "M = 2.000 · 1,05² = 2.000 · 1,1025 = 2.205. J = 2.205 − 2.000 = 205." }
    ]
  });

  A(MF, "Descontos", {
    resumo: "Desconto comercial (por fora) e racional (por dentro) no pagamento antecipado de títulos.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Quando um título (boleto, duplicata) é pago **antes** do vencimento, recebe um **desconto**. O valor no vencimento é o **nominal (N)**; o valor pago é o **atual (A)**.",
        "",
        "- **Desconto comercial (por fora)**: calculado sobre o **valor nominal**. É o usado pelos bancos.",
        "- **Desconto racional (por dentro)**: calculado sobre o **valor atual**. Equivale a juros simples ao contrário."
      ]},
      { tipo: "formula", titulo: "Desconto simples", expr: ["Comercial:   D = N · i · t   e   A = N · (1 − i · t)", "Racional:   A = [[N || 1 + i · t]]   e   D = N − A"] },
      { tipo: "exemplo", titulo: "Exemplo · Comparando", enunciado: "Um título de R$ 1.100 vence em 5 meses. Taxa de desconto simples de 2% ao mês. Calcule o valor pago nos dois tipos de desconto.", resolucao: [
        "Comercial: D = 1.100 · 0,02 · 5 = 110 → A = 990.",
        "Racional: A = [[1.100 || 1 + 0,10]] = 1.000 → D = 100."
      ], resposta: "Comercial: R$ 990. Racional: R$ 1.000." },
      { tipo: "atencao", texto: "Com a mesma taxa e o mesmo prazo, o desconto **comercial é sempre maior** que o racional, porque incide sobre um valor maior (o nominal)." },
      { tipo: "questao", banca: Q, enunciado: "Uma duplicata de R$ 2.000 é descontada 3 meses antes do vencimento, com desconto comercial simples de 1,5% ao mês. O valor recebido é:", alternativas: ["R$ 1.910", "R$ 1.940", "R$ 1.955", "R$ 1.970", "R$ 2.090"], correta: "A", comentario: "D = 2.000 · 0,015 · 3 = 90. Valor recebido: 2.000 − 90 = 1.910." }
    ]
  });

  A(MF, "Aumentos e descontos sucessivos", {
    resumo: "Variações em sequência se multiplicam, não se somam.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Quando um valor sofre várias variações percentuais seguidas, cada uma incide sobre o resultado da anterior. Por isso, multiplique os **fatores**:",
        "",
        "- Aumento de p%: fator (1 + [[p || 100]]).",
        "- Desconto de p%: fator (1 − [[p || 100]]).",
        "",
        "A variação total é (produto dos fatores − 1) · 100%."
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Um salário teve reajuste de 10% e, no ano seguinte, de 20%. Qual o aumento total?", resolucao: ["Fator total: 1,10 · 1,20 = 1,32.", "Aumento total: 32% (e não 30%)."], resposta: "32%" },
      { tipo: "exemplo", titulo: "Exemplo · Desconto em cima de desconto", enunciado: "Uma loja dá 20% de desconto e, no caixa, mais 10% sobre o novo preço. Qual o desconto total?", resolucao: ["Fator: 0,80 · 0,90 = 0,72.", "Desconto total: 1 − 0,72 = 0,28 → 28%."], resposta: "28%" },
      { tipo: "python", titulo: "Acumulando variações", codigo: `
def acumula(*variacoes):
    fator = 1
    for v in variacoes:
        fator *= 1 + v / 100
    return (fator - 1) * 100

print(f"{acumula(10, 20):.1f}%")
print(f"{acumula(-20, -10):.1f}%")
print(f"{acumula(50, -50):.1f}%")
`, saida: `
32.0%
-28.0%
-25.0%
` },
      { tipo: "flashcards", cartas: [
        { frente: "Subir 50% e depois cair 50%: volta ao original?", verso: "Não. 1,5 · 0,5 = 0,75: perde 25%." },
        { frente: "Ordem dos aumentos muda o resultado?", verso: "Não. A multiplicação é comutativa: 10% e depois 20% dá o mesmo que 20% e depois 10%." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "O preço de um produto subiu 25% e depois caiu 20%. Em relação ao preço inicial, o preço final:", alternativas: ["subiu 5%", "caiu 5%", "ficou igual", "subiu 4%", "caiu 4%"], correta: "C", comentario: "1,25 · 0,80 = 1,00. O preço final é igual ao inicial." }
    ]
  });

  /* ================= ÁLGEBRA ================= */

  A(AL, "Equações do 1º grau", {
    resumo: "Isolar a incógnita e transformar problemas em linguagem matemática.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Uma **equação do 1º grau** tem a forma ax + b = 0, com a ≠ 0. A solução é x = [[−b || a]].",
        "",
        "Para resolver, faça a mesma operação dos dois lados até isolar o x. Na prática: o que soma passa subtraindo, o que multiplica passa dividindo."
      ]},
      { tipo: "exemplo", titulo: "Resolvendo", enunciado: "Resolva 3(x − 2) = x + 8.", resolucao: ["3x − 6 = x + 8", "3x − x = 8 + 6", "2x = 14 → x = 7"], resposta: "x = 7", aberto: true },
      { tipo: "tabela", titulo: "Do português para a matemática", cabecalho: ["Frase", "Expressão"], linhas: [["o dobro de um número", "2x"], ["a metade de um número", "[[x || 2]]"], ["um número aumentado de 5", "x + 5"], ["o triplo de um número menos 4", "3x − 4"], ["dois números consecutivos", "x e x + 1"]] },
      { tipo: "exemplo", titulo: "Problema", enunciado: "Uma servidora gastou [[1 || 3]] do salário com aluguel e R$ 1.200 com outras despesas, sobrando R$ 800. Qual o salário?", resolucao: ["Salário = x. Então [[x || 3]] + 1.200 + 800 = x.", "[[x || 3]] + 2.000 = x → 2.000 = [[2x || 3]] → x = 3.000."], resposta: "R$ 3.000" },
      { tipo: "questao", banca: Q, enunciado: "A soma de três números consecutivos é 87. O maior deles é:", alternativas: ["28", "29", "30", "31", "32"], correta: "C", comentario: "x + (x + 1) + (x + 2) = 87 → 3x + 3 = 87 → x = 28. Os números são 28, 29 e 30." }
    ]
  });

  A(AL, "Equações do 2º grau", {
    resumo: "Fórmula de Bhaskara, discriminante e soma e produto das raízes.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Forma geral: ax² + bx + c = 0, com a ≠ 0. As soluções (raízes) saem da **fórmula de Bhaskara**, que depende do **discriminante Δ**:",
        "- Δ > 0: duas raízes reais diferentes.",
        "- Δ = 0: duas raízes reais iguais (uma raiz dupla).",
        "- Δ < 0: nenhuma raiz real."
      ]},
      { tipo: "formula", titulo: "Bhaskara", expr: ["Δ = b² − 4ac", "x = [[−b ± √Δ || 2a]]"] },
      { tipo: "formula", titulo: "Soma e produto", expr: ["x_{1} + x_{2} = [[−b || a]]", "x_{1} · x_{2} = [[c || a]]"], legenda: "Muitas vezes dá para achar as raízes de cabeça: procure dois números com essa soma e esse produto." },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Resolva x² − 5x + 6 = 0.", resolucao: ["Soma = 5 e produto = 6: os números são 2 e 3.", "Conferindo por Bhaskara: Δ = 25 − 24 = 1; x = [[5 ± 1 || 2]] → 3 ou 2."], resposta: "x = 2 ou x = 3" },
      { tipo: "python", titulo: "Bhaskara passo a passo", codigo: `
import math

def bhaskara(a, b, c):
    delta = b * b - 4 * a * c
    if delta < 0:
        return delta, []
    r = math.sqrt(delta)
    return delta, sorted({(-b - r) / (2 * a), (-b + r) / (2 * a)})

for coef in [(1, -5, 6), (1, -4, 4), (1, 2, 5)]:
    print(coef, "->", bhaskara(*coef))
`, saida: `
(1, -5, 6) -> (1, [2.0, 3.0])
(1, -4, 4) -> (0, [2.0])
(1, 2, 5) -> (-16, [])
` },
      { tipo: "questao", banca: Q, enunciado: "As raízes de 2x² − 8x + 6 = 0 têm soma S e produto P. O valor de S + P é:", alternativas: ["4", "5", "6", "7", "8"], correta: "D", comentario: "S = [[−(−8) || 2]] = 4 e P = [[6 || 2]] = 3. S + P = 7. (As raízes são 1 e 3.)" }
    ]
  });

  A(AL, "Sistemas de equações", {
    resumo: "Duas equações, duas incógnitas: métodos da substituição e da adição.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Um sistema de duas equações do 1º grau busca o par (x, y) que satisfaz as duas ao mesmo tempo.",
        "",
        "- **Substituição**: isole uma incógnita numa equação e substitua na outra.",
        "- **Adição**: some (ou subtraia) as equações para eliminar uma incógnita, multiplicando antes se for preciso."
      ]},
      { tipo: "exemplo", titulo: "Exemplo · Adição", enunciado: "Resolva: x + y = 10 e x − y = 4.", resolucao: ["Somando: 2x = 14 → x = 7.", "Substituindo: 7 + y = 10 → y = 3."], resposta: "x = 7 e y = 3", aberto: true },
      { tipo: "exemplo", titulo: "Problema clássico", enunciado: "Num estacionamento há carros e motos, 30 veículos e 100 rodas. Quantos são carros?", resolucao: ["c + m = 30 e 4c + 2m = 100.", "Da primeira: m = 30 − c. Substituindo: 4c + 60 − 2c = 100 → 2c = 40 → c = 20."], resposta: "20 carros (e 10 motos)" },
      { tipo: "svg", titulo: "A solução é o ponto de encontro", legenda: "Cada equação é uma reta; a solução do sistema é o ponto onde elas se cruzam.", codigo: `
<svg viewBox="0 0 440 240" role="img" aria-label="Duas retas que se cruzam no ponto (7, 3)">
  <line class="ln" x1="40" y1="200" x2="420" y2="200"></line>
  <line class="ln" x1="40" y1="200" x2="40" y2="20"></line>
  <line class="ln-f" x1="40" y1="40" x2="360" y2="200"></line>
  <line class="ln-d" x1="104" y1="200" x2="360" y2="72"></line>
  <circle class="pt" cx="264" cy="152" r="6"></circle>
  <text class="tx" x="276" y="146">(7, 3)</text>
  <text class="tx-m" x="300" y="190">x + y = 10</text>
  <text class="tx-m" x="330" y="66">x − y = 4</text>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "Um ingresso inteiro custa o dobro da meia-entrada. Foram vendidos 40 inteiros e 60 meias, arrecadando R$ 2.100. Quanto custa a meia-entrada?", alternativas: ["R$ 10,00", "R$ 12,50", "R$ 15,00", "R$ 17,50", "R$ 30,00"], correta: "C", comentario: "Meia = m, inteira = 2m. 40 · 2m + 60m = 140m = 2.100 → m = 15." }
    ]
  });

  A(AL, "Inequações", {
    resumo: "Desigualdades: resolve-se como equação, com cuidado ao multiplicar por negativo.",
    incidencia: "baixa",
    blocos: [
      { tipo: "texto", texto: [
        "Uma **inequação** usa >, <, ≥ ou ≤ no lugar do =. Resolve-se como uma equação, com uma regra a mais:",
        "",
        "==Ao multiplicar ou dividir os dois lados por um número negativo, inverta o sinal da desigualdade.==",
        "",
        "A resposta é um **intervalo**, não um número só."
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Resolva 5 − 2x > 11.", resolucao: ["−2x > 6", "Dividindo por −2 (inverte o sinal): x < −3."], resposta: "x < −3", aberto: true },
      { tipo: "svg", titulo: "Na reta numérica", legenda: "Bolinha aberta: o −3 não faz parte da solução (desigualdade estrita).", codigo: `
<svg viewBox="0 0 460 90" role="img" aria-label="Reta numérica com a região à esquerda de menos três destacada e bolinha aberta em menos três">
  <line class="ln" x1="20" y1="45" x2="440" y2="45"></line>
  <line class="ln-d" x1="20" y1="45" x2="190" y2="45" style="stroke-width:5"></line>
  <circle cx="190" cy="45" r="7" style="fill:var(--sumi);stroke:var(--shu);stroke-width:2"></circle>
  <text class="tx" x="190" y="78" text-anchor="middle">−3</text>
  <text class="tx-m" x="300" y="78" text-anchor="middle">0</text>
  <line class="ln" x1="300" y1="38" x2="300" y2="52"></line>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "Uma empresa de táxi cobra R$ 6 de bandeirada mais R$ 2,50 por km. Com R$ 41, qual a maior distância inteira (em km) que se pode percorrer?", alternativas: ["12", "13", "14", "15", "16"], correta: "C", comentario: "6 + 2,5x ≤ 41 → 2,5x ≤ 35 → x ≤ 14." }
    ]
  });

  A(AL, "Funções do 1º grau", {
    resumo: "f(x) = ax + b: coeficiente angular, linear e o gráfico em reta.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "A **função afim** tem a forma f(x) = ax + b.",
        "- **a** (coeficiente angular): quanto y muda quando x aumenta 1. a > 0: crescente; a < 0: decrescente.",
        "- **b** (coeficiente linear): onde a reta corta o eixo y (o valor de f(0)).",
        "- **Raiz**: onde a reta corta o eixo x, x = [[−b || a]]."
      ]},
      { tipo: "svg", titulo: "Gráfico de f(x) = 2x − 4", legenda: "Corta o eixo y em −4 (o b) e o eixo x em 2 (a raiz).", codigo: `
<svg viewBox="0 0 400 260" role="img" aria-label="Reta crescente cortando o eixo x em 2 e o eixo y em menos 4">
  <line class="ln" x1="20" y1="130" x2="380" y2="130"></line>
  <line class="ln" x1="160" y1="10" x2="160" y2="250"></line>
  <line class="ln-d" x1="110" y1="250" x2="270" y2="10"></line>
  <circle class="pt" cx="200" cy="130" r="5"></circle>
  <circle class="pt" cx="160" cy="190" r="5"></circle>
  <text class="tx" x="206" y="150">raiz: x = 2</text>
  <text class="tx" x="168" y="210">b = −4</text>
  <text class="tx-m" x="372" y="122" text-anchor="end">x</text>
  <text class="tx-m" x="168" y="24">y</text>
</svg>` },
      { tipo: "exemplo", titulo: "Função a partir de dois pontos", enunciado: "Uma corrida de aplicativo custa R$ 13 para 2 km e R$ 21 para 6 km, com preço fixo mais valor por km. Qual a função?", resolucao: ["a = [[21 − 13 || 6 − 2]] = 2 (R$ por km).", "13 = 2 · 2 + b → b = 9.", "f(x) = 2x + 9."], resposta: "f(x) = 2x + 9" },
      { tipo: "questao", banca: Q, enunciado: "Para f(x) = −3x + 12, é correto afirmar:", alternativas: ["A função é crescente.", "A raiz é x = −4.", "O gráfico corta o eixo y em 12.", "f(2) = 18.", "O coeficiente angular é 12."], correta: "C", comentario: "b = 12 é onde corta o eixo y. É decrescente (a = −3), a raiz é 4 e f(2) = 6." }
    ]
  });

  A(AL, "Funções do 2º grau", {
    resumo: "Parábola, concavidade, vértice e valor máximo ou mínimo.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "A **função quadrática** f(x) = ax² + bx + c tem como gráfico uma **parábola**.",
        "- a > 0: concavidade para cima, com ponto de **mínimo**.",
        "- a < 0: concavidade para baixo, com ponto de **máximo**.",
        "- As raízes (onde corta o eixo x) vêm de Bhaskara; c é onde corta o eixo y."
      ]},
      { tipo: "formula", titulo: "Vértice", expr: ["x_{v} = [[−b || 2a]]", "y_{v} = [[−Δ || 4a]]"], legenda: "O y do vértice é o valor máximo (a < 0) ou mínimo (a > 0) da função." },
      { tipo: "svg", titulo: "As duas concavidades", codigo: `
<svg viewBox="0 0 500 220" role="img" aria-label="Parábola com concavidade para cima e mínimo; parábola com concavidade para baixo e máximo">
  <line class="ln" x1="20" y1="150" x2="230" y2="150"></line>
  <path class="ln-d" d="M40,40 Q125,260 210,40"></path>
  <circle class="pt" cx="125" cy="150" r="5"></circle>
  <text class="tx" x="125" y="200" text-anchor="middle">a &gt; 0 · mínimo</text>
  <line class="ln" x1="270" y1="90" x2="480" y2="90"></line>
  <path class="ln-d" d="M290,190 Q375,-30 460,190"></path>
  <circle class="pt" cx="375" cy="80" r="5"></circle>
  <text class="tx" x="375" y="212" text-anchor="middle">a &lt; 0 · máximo</text>
</svg>` },
      { tipo: "exemplo", titulo: "Máximo de um lucro", enunciado: "O lucro de uma feira, em reais, é L(x) = −x² + 40x − 300, em que x é o preço do produto. Qual preço dá lucro máximo e qual é esse lucro?", resolucao: ["x_{v} = [[−40 || 2 · (−1)]] = 20.", "L(20) = −400 + 800 − 300 = 100."], resposta: "Preço R$ 20 e lucro máximo R$ 100" },
      { tipo: "questao", banca: Q, enunciado: "O valor mínimo de f(x) = x² − 6x + 10 é:", alternativas: ["1", "3", "6", "10", "−1"], correta: "A", comentario: "x_{v} = 3 e f(3) = 9 − 18 + 10 = 1." }
    ]
  });

  A(AL, "Progressão aritmética (PA)", {
    resumo: "Sequências que crescem somando sempre a mesma razão.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: ["Uma **PA** é uma sequência em que cada termo é o anterior **mais** uma constante **r** (a razão). Ex.: 3, 7, 11, 15, … (r = 4)."] },
      { tipo: "formula", titulo: "Fórmulas", expr: ["Termo geral:   a_{n} = a_{1} + (n − 1) · r", "Soma:   S_{n} = [[(a_{1} + a_{n}) · n || 2]]"] },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Qual o 20º termo da PA (5, 9, 13, …) e a soma dos 20 primeiros termos?", resolucao: ["r = 4. a_{20} = 5 + 19 · 4 = 81.", "S_{20} = [[(5 + 81) · 20 || 2]] = 860."], resposta: "a₂₀ = 81 e S₂₀ = 860" },
      { tipo: "python", titulo: "Gerando a PA", codigo: `
a1, r, n = 5, 4, 20
pa = [a1 + k * r for k in range(n)]
print(pa[:6], "...")
print("a20 =", pa[-1])
print("S20 =", sum(pa))
`, saida: `
[5, 9, 13, 17, 21, 25] ...
a20 = 81
S20 = 860
` },
      { tipo: "dica", texto: "Gauss somou 1 + 2 + … + 100 em segundos: são 50 pares que somam 101, total 5.050. É a fórmula da soma da PA." },
      { tipo: "questao", banca: Q, enunciado: "Um servidor arquiva 12 processos no 1º dia e, a cada dia, 3 a mais que no anterior. Quantos processos arquiva no 10º dia?", alternativas: ["36", "39", "42", "45", "48"], correta: "B", comentario: "a_{10} = 12 + 9 · 3 = 39." }
    ]
  });

  A(AL, "Progressão geométrica (PG)", {
    resumo: "Sequências que crescem multiplicando sempre pela mesma razão.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: ["Uma **PG** é uma sequência em que cada termo é o anterior **multiplicado** por uma constante **q** (a razão). Ex.: 2, 6, 18, 54, … (q = 3)."] },
      { tipo: "formula", titulo: "Fórmulas", expr: ["Termo geral:   a_{n} = a_{1} · q^{n − 1}", "Soma finita:   S_{n} = [[a_{1} · (q^{n} − 1) || q − 1]]", "Soma infinita (0 < |q| < 1):   S = [[a_{1} || 1 − q]]"] },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Uma notícia é repassada: 1 pessoa conta para 3, cada uma conta para outras 3, e assim por diante. Quantas pessoas recebem a notícia na 6ª rodada?", resolucao: ["PG com a₁ = 3 e q = 3: a₆ = 3 · 3⁵ = 729."], resposta: "729 pessoas" },
      { tipo: "python", titulo: "PG e soma infinita", codigo: `
a1, q = 3, 3
print([a1 * q ** k for k in range(6)])

# Soma infinita de 1 + 1/2 + 1/4 + ... (q = 1/2)
soma = sum(1 * 0.5 ** k for k in range(50))
print(round(soma, 6), "≈", 1 / (1 - 0.5))
`, saida: `
[3, 9, 27, 81, 243, 729]
2.0 ≈ 2.0
` },
      { tipo: "questao", banca: Q, enunciado: "Em uma PG, a₁ = 5 e q = 2. A soma dos 5 primeiros termos é:", alternativas: ["80", "125", "150", "155", "160"], correta: "D", comentario: "S₅ = [[5 · (2⁵ − 1) || 2 − 1]] = 5 · 31 = 155 (5 + 10 + 20 + 40 + 80)." }
    ]
  });
})();
