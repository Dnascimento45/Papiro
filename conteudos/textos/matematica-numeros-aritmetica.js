/* Matemática · Conjuntos e Números + Aritmética (exceto Regra de três, que tem arquivo próprio). */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "matematica", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const CN = "Conjuntos e Números";
  const AR = "Aritmética";

  /* ================= CONJUNTOS E NÚMEROS ================= */

  A(CN, "Conjuntos numéricos", {
    resumo: "Naturais, inteiros, racionais, irracionais e reais: quem contém quem.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Os números foram sendo organizados em **conjuntos**, cada um maior que o anterior. Saber em qual conjunto um número está é pergunta frequente em prova.",
        "",
        "- **Naturais (ℕ)**: {0, 1, 2, 3, …}. Servem para contar.",
        "- **Inteiros (ℤ)**: {…, −2, −1, 0, 1, 2, …}. Acrescentam os negativos.",
        "- **Racionais (ℚ)**: todo número que pode ser escrito como fração [[a || b]], com a e b inteiros e b ≠ 0. Inclui decimais exatos (0,25) e dízimas periódicas (0,333…).",
        "- **Irracionais (𝕀)**: decimais infinitos **sem** período. Ex.: √2 = 1,4142…, π = 3,1415…",
        "- **Reais (ℝ)**: a união dos racionais com os irracionais."
      ]},
      { tipo: "svg", titulo: "Um conjunto dentro do outro", legenda: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Os irracionais ficam em ℝ, mas fora de ℚ.", codigo: `
<svg viewBox="0 0 520 260" role="img" aria-label="Diagrama dos conjuntos numéricos: naturais dentro dos inteiros, dentro dos racionais, dentro dos reais; irracionais nos reais fora dos racionais">
  <rect class="fd" x="10" y="10" width="500" height="240" rx="14"></rect>
  <text class="tx tx-t" x="28" y="38">ℝ  reais</text>
  <rect class="fd" x="30" y="52" width="320" height="186" rx="12"></rect>
  <text class="tx tx-t" x="46" y="78">ℚ  racionais</text>
  <rect class="fd" x="50" y="92" width="220" height="134" rx="10"></rect>
  <text class="tx tx-t" x="66" y="118">ℤ  inteiros</text>
  <rect class="fd-d" x="70" y="132" width="130" height="80" rx="8"></rect>
  <text class="tx tx-t" x="84" y="158">ℕ  naturais</text>
  <text class="tx-m" x="84" y="184">0, 1, 2, 3…</text>
  <text class="tx-m" x="212" y="190">−3, −1</text>
  <text class="tx-m" x="282" y="150">½</text>
  <text class="tx-m" x="282" y="178">0,333…</text>
  <rect class="fd" x="368" y="52" width="128" height="186" rx="12"></rect>
  <text class="tx tx-t" x="380" y="78">𝕀  irracionais</text>
  <text class="tx-m" x="392" y="128">√2</text>
  <text class="tx-m" x="392" y="158">π</text>
  <text class="tx-m" x="392" y="188">√3</text>
</svg>` },
      { tipo: "tabela", titulo: "Onde cada número está", cabecalho: ["Número", "ℕ", "ℤ", "ℚ", "ℝ"], linhas: [
        ["7", "sim", "sim", "sim", "sim"],
        ["−4", "não", "sim", "sim", "sim"],
        ["0,75", "não", "não", "sim", "sim"],
        ["0,121212…", "não", "não", "sim", "sim"],
        ["√5", "não", "não", "não", "sim"]
      ]},
      { tipo: "atencao", texto: "Raiz quadrada **exata** é racional: √9 = 3 está em ℕ. Só é irracional a raiz que não dá resultado exato, como √2 ou √7." },
      { tipo: "flashcards", cartas: [
        { frente: "0,333… é racional?", verso: "Sim. Toda dízima periódica é racional: 0,333… = [[1 || 3]]." },
        { frente: "π pertence a ℚ?", verso: "Não. π é irracional: decimal infinito sem período." },
        { frente: "Qual é a relação entre os conjuntos?", verso: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, e ℝ = ℚ ∪ 𝕀." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Assinale a alternativa em que todos os números são racionais.", alternativas: ["√2, 0,5 e 3", "−7, 0,25 e 1,333…", "π, 2 e −1", "√9, √3 e 4", "0,1, √5 e 8"], correta: "B", comentario: "−7 é inteiro, 0,25 = [[1 || 4]] e 1,333… é dízima periódica ([[4 || 3]]). Nas demais há um irracional (√2, π, √3 ou √5)." }
    ]
  });

  A(CN, "Operações com conjuntos", {
    resumo: "União, interseção, diferença e o problema clássico de quantos gostam de A e de B.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Dados dois conjuntos A e B:",
        "- **União (A ∪ B)**: elementos que estão em A **ou** em B (ou nos dois).",
        "- **Interseção (A ∩ B)**: elementos que estão em A **e** em B ao mesmo tempo.",
        "- **Diferença (A − B)**: elementos de A que **não** estão em B.",
        "- **Complementar**: o que falta a um conjunto para completar o universo.",
        "",
        "Em prova, o mais cobrado é contar elementos com a fórmula da união e o **diagrama de Venn**."
      ]},
      { tipo: "formula", titulo: "Número de elementos da união", expr: ["n(A ∪ B) = n(A) + n(B) − n(A ∩ B)"], legenda: "Subtrai-se a interseção porque ela foi contada duas vezes, uma em A e outra em B." },
      { tipo: "svg", titulo: "Diagrama de Venn", legenda: "Comece sempre preenchendo a interseção; depois o que é só A e só B.", codigo: `
<svg viewBox="0 0 460 230" role="img" aria-label="Diagrama de Venn com dois círculos: só A, interseção e só B">
  <rect class="ln-f" x="8" y="8" width="444" height="214" rx="10"></rect>
  <text class="tx-m" x="20" y="30">U (universo)</text>
  <circle class="fd" cx="175" cy="120" r="85"></circle>
  <circle class="fd" cx="285" cy="120" r="85"></circle>
  <path class="fd-d" d="M230,47 A85,85 0 0 1 230,193 A85,85 0 0 1 230,47 Z"></path>
  <text class="tx tx-t" x="110" y="58">A</text>
  <text class="tx tx-t" x="340" y="58">B</text>
  <text class="tx" x="135" y="125" text-anchor="middle">só A</text>
  <text class="tx tx-d" x="230" y="125" text-anchor="middle">A ∩ B</text>
  <text class="tx" x="325" y="125" text-anchor="middle">só B</text>
</svg>` },
      { tipo: "exemplo", titulo: "Exemplo · Pesquisa de preferência", enunciado: "Numa repartição com 50 servidores, 30 leem jornal, 25 assistem a telejornal e 10 fazem as duas coisas. Quantos não fazem nenhuma das duas?", resolucao: [
        "Pela fórmula: n(J ∪ T) = 30 + 25 − 10 = 45 servidores fazem pelo menos uma.",
        "Os que não fazem nenhuma: 50 − 45 = 5."
      ], resposta: "5 servidores" },
      { tipo: "python", titulo: "Conjuntos em Python", texto: "Python tem o tipo `set`, com as mesmas operações da teoria dos conjuntos.", codigo: `
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7}

print("União:", A | B)
print("Interseção:", A & B)
print("A − B:", A - B)
print("n(A ∪ B) =", len(A) + len(B) - len(A & B))
`, saida: `
União: {1, 2, 3, 4, 5, 6, 7}
Interseção: {4, 5}
A − B: {1, 2, 3}
n(A ∪ B) = 7
` },
      { tipo: "dica", texto: "Problema com três conjuntos? Use o Venn de três círculos e preencha de dentro para fora: primeiro a interseção dos três, depois as interseções de dois, por último as partes exclusivas." },
      { tipo: "questao", banca: Q, enunciado: "Em um curso, 40 alunos estudam Português, 35 estudam Matemática e 15 estudam as duas matérias. Todos estudam pelo menos uma delas. Quantos alunos há no curso?", alternativas: ["50", "55", "60", "75", "90"], correta: "C", comentario: "n(P ∪ M) = 40 + 35 − 15 = 60." }
    ]
  });

  A(CN, "Divisibilidade e números primos", {
    resumo: "Critérios para saber se um número divide outro sem fazer a conta, e o que é número primo.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Um número é **divisível** por outro quando a divisão é exata (resto zero). Os critérios evitam a conta:"
      ]},
      { tipo: "tabela", titulo: "Critérios de divisibilidade", cabecalho: ["Por", "Regra", "Exemplo"], linhas: [
        ["2", "termina em 0, 2, 4, 6 ou 8 (é par)", "138"],
        ["3", "a soma dos algarismos é divisível por 3", "471 → 4+7+1 = 12"],
        ["4", "os dois últimos algarismos formam número divisível por 4", "1.316 → 16"],
        ["5", "termina em 0 ou 5", "2.035"],
        ["6", "divisível por 2 **e** por 3 ao mesmo tempo", "312"],
        ["9", "a soma dos algarismos é divisível por 9", "5.481 → 18"],
        ["10", "termina em 0", "740"]
      ]},
      { tipo: "texto", titulo: "Números primos", texto: [
        "**Primo** é o número natural maior que 1 que só tem dois divisores: 1 e ele mesmo. Os primeiros são 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…",
        "",
        "- **2** é o único primo par.",
        "- **1** não é primo (tem um divisor só).",
        "- Todo número maior que 1 pode ser escrito como produto de primos (**fatoração**): 60 = 2² · 3 · 5."
      ]},
      { tipo: "python", titulo: "Lista de primos com o Crivo de Eratóstenes", texto: "O crivo risca os múltiplos de cada primo; o que sobra é primo.", codigo: `
def primos_ate(n):
    eh_primo = [True] * (n + 1)
    eh_primo[0] = eh_primo[1] = False
    for i in range(2, int(n ** 0.5) + 1):
        if eh_primo[i]:
            for multiplo in range(i * i, n + 1, i):
                eh_primo[multiplo] = False
    return [i for i in range(n + 1) if eh_primo[i]]

print(primos_ate(50))
print("Quantos primos até 100:", len(primos_ate(100)))
`, saida: `
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
Quantos primos até 100: 25
` },
      { tipo: "dica", texto: "Para testar se um número é primo, basta dividir pelos primos até a **raiz quadrada** dele. Para 97: √97 ≈ 9,8, então teste 2, 3, 5 e 7. Nenhum divide: 97 é primo." },
      { tipo: "questao", banca: Q, enunciado: "No número 3.7_4, falta o algarismo das dezenas. Para que o número seja divisível por 3 e por 4 ao mesmo tempo, esse algarismo deve ser:", alternativas: ["0", "2", "4", "6", "8"], correta: "C", comentario: "Por 4: os dois últimos algarismos (_4) formam 04, 24, 44, 64 ou 84, todos múltiplos de 4, então qualquer alternativa passa. Por 3: a soma 3 + 7 + _ + 4 = 14 + _ precisa ser múltiplo de 3. Só _ = 4 dá 18. O número é 3.744." }
    ]
  });

  A(CN, "MMC e MDC", {
    resumo: "Mínimo múltiplo comum e máximo divisor comum: quando usar cada um.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "- **MMC** (mínimo múltiplo comum): o **menor** número que é múltiplo de todos. Aparece em problemas de **coincidência** (eventos que se repetem e voltam a acontecer juntos).",
        "- **MDC** (máximo divisor comum): o **maior** número que divide todos. Aparece em problemas de **dividir em partes iguais, do maior tamanho possível**.",
        "",
        "Para calcular, fatore em primos:",
        "- MMC: todos os fatores, cada um com o **maior** expoente.",
        "- MDC: só os fatores **comuns**, cada um com o **menor** expoente."
      ]},
      { tipo: "exemplo", titulo: "Calculando MMC(12, 18) e MDC(12, 18)", enunciado: "12 = 2² · 3 e 18 = 2 · 3².", resolucao: [
        "MMC: 2² · 3² = 4 · 9 = 36.",
        "MDC: 2¹ · 3¹ = 6.",
        "",
        "Confira: MMC · MDC = 36 · 6 = 216 = 12 · 18. Para dois números, isso sempre vale."
      ], resposta: "MMC = 36 e MDC = 6", aberto: true },
      { tipo: "exemplo", titulo: "Problema de coincidência (MMC)", enunciado: "Um ônibus passa no ponto a cada 15 minutos e outro a cada 20 minutos. Passaram juntos às 8h. Quando voltam a passar juntos?", resolucao: ["MMC(15, 20) = 60 minutos. Voltam a coincidir às 9h."], resposta: "9h" },
      { tipo: "exemplo", titulo: "Problema de partes iguais (MDC)", enunciado: "Uma servidora tem 48 processos de um tipo e 72 de outro e quer montar pastas com a mesma quantidade, sem misturar tipos, usando o menor número de pastas. Quantos processos por pasta?", resolucao: ["Quer-se o maior tamanho possível de pasta que divida 48 e 72: MDC(48, 72) = 24.", "São 2 pastas do primeiro tipo e 3 do segundo: 5 pastas."], resposta: "24 processos por pasta" },
      { tipo: "python", titulo: "MMC e MDC no Python", codigo: `
from math import gcd

def mmc(a, b):
    return a * b // gcd(a, b)

print("MDC(48, 72) =", gcd(48, 72))
print("MMC(15, 20) =", mmc(15, 20))
print("MMC(4, 6, 10) =", mmc(mmc(4, 6), 10))
`, saida: `
MDC(48, 72) = 24
MMC(15, 20) = 60
MMC(4, 6, 10) = 60
` },
      { tipo: "flashcards", cartas: [
        { frente: "\"Voltam a acontecer juntos\": MMC ou MDC?", verso: "MMC." },
        { frente: "\"Maior tamanho possível, partes iguais\": MMC ou MDC?", verso: "MDC." },
        { frente: "Para dois números, quanto vale MMC · MDC?", verso: "O produto dos dois números." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Três luzes piscam a cada 6, 8 e 10 segundos. Se piscaram juntas agora, em quantos segundos voltarão a piscar juntas?", alternativas: ["24", "48", "60", "120", "480"], correta: "D", comentario: "MMC(6, 8, 10): 6 = 2·3, 8 = 2³, 10 = 2·5 → 2³ · 3 · 5 = 120." }
    ]
  });

  A(CN, "Frações e números decimais", {
    resumo: "Operações com frações, simplificação e a passagem entre fração e decimal.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Uma **fração** [[a || b]] representa a parte **a** de um todo dividido em **b** partes iguais.",
        "",
        "- **Simplificar**: divida numerador e denominador pelo mesmo número. [[18 || 24]] = [[3 || 4]] (dividindo por 6).",
        "- **Somar ou subtrair**: deixe os denominadores iguais (use o MMC) e opere os numeradores.",
        "- **Multiplicar**: numerador com numerador, denominador com denominador.",
        "- **Dividir**: conserve a primeira e multiplique pelo **inverso** da segunda."
      ]},
      { tipo: "formula", titulo: "Operações", expr: [
        "[[1 || 2]] + [[1 || 3]] = [[3 || 6]] + [[2 || 6]] = [[5 || 6]]",
        "[[2 || 3]] · [[3 || 5]] = [[6 || 15]] = [[2 || 5]]",
        "[[3 || 4]] ÷ [[1 || 2]] = [[3 || 4]] · [[2 || 1]] = [[6 || 4]] = [[3 || 2]]"
      ]},
      { tipo: "svg", titulo: "Frações equivalentes", legenda: "[[1 || 2]], [[2 || 4]] e [[4 || 8]] representam a mesma parte do todo.", codigo: `
<svg viewBox="0 0 480 170" role="img" aria-label="Três barras do mesmo tamanho divididas em 2, 4 e 8 partes, com metade pintada em cada uma">
  <g>
    <rect class="fd-d" x="60" y="20" width="180" height="32"></rect><rect class="fd" x="240" y="20" width="180" height="32"></rect>
    <text class="tx" x="20" y="42">1/2</text>
  </g>
  <g>
    <rect class="fd-d" x="60" y="70" width="90" height="32"></rect><rect class="fd-d" x="150" y="70" width="90" height="32"></rect>
    <rect class="fd" x="240" y="70" width="90" height="32"></rect><rect class="fd" x="330" y="70" width="90" height="32"></rect>
    <text class="tx" x="20" y="92">2/4</text>
  </g>
  <g>
    <rect class="fd-d" x="60" y="120" width="45" height="32"></rect><rect class="fd-d" x="105" y="120" width="45" height="32"></rect>
    <rect class="fd-d" x="150" y="120" width="45" height="32"></rect><rect class="fd-d" x="195" y="120" width="45" height="32"></rect>
    <rect class="fd" x="240" y="120" width="45" height="32"></rect><rect class="fd" x="285" y="120" width="45" height="32"></rect>
    <rect class="fd" x="330" y="120" width="45" height="32"></rect><rect class="fd" x="375" y="120" width="45" height="32"></rect>
    <text class="tx" x="20" y="142">4/8</text>
  </g>
</svg>` },
      { tipo: "texto", titulo: "Fração e decimal", texto: [
        "- Fração → decimal: divida o numerador pelo denominador. [[3 || 8]] = 0,375.",
        "- Decimal exato → fração: escreva sobre 10, 100, 1000… e simplifique. 0,45 = [[45 || 100]] = [[9 || 20]].",
        "- Dízima periódica simples → fração: o período sobre tantos 9 quantos algarismos ele tiver. 0,777… = [[7 || 9]]; 0,1212… = [[12 || 99]] = [[4 || 33]]."
      ]},
      { tipo: "python", titulo: "Frações exatas com o módulo fractions", codigo: `
from fractions import Fraction

print(Fraction(1, 2) + Fraction(1, 3))
print(Fraction(3, 4) / Fraction(1, 2))
print(Fraction("0.45"))
print(float(Fraction(3, 8)))
`, saida: `
5/6
3/2
9/20
0.375
` },
      { tipo: "questao", banca: Q, enunciado: "Uma servidora gastou [[1 || 4]] do salário com aluguel e [[2 || 5]] com alimentação. Que fração do salário sobrou?", alternativas: ["[[3 || 9]]", "[[7 || 20]]", "[[13 || 20]]", "[[3 || 20]]", "[[1 || 2]]"], correta: "B", comentario: "Gastou [[1 || 4]] + [[2 || 5]] = [[5 || 20]] + [[8 || 20]] = [[13 || 20]]. Sobrou 1 − [[13 || 20]] = [[7 || 20]]." }
    ]
  });

  A(CN, "Potenciação e radiciação", {
    resumo: "Propriedades das potências e das raízes, com as pegadinhas de sinal.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Potência** é multiplicação repetida: 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. A **raiz** é a operação inversa: √32 não é exata, mas ∛8 = 2 porque 2³ = 8."
      ]},
      { tipo: "tabela", titulo: "Propriedades", cabecalho: ["Propriedade", "Exemplo"], linhas: [
        ["a^{m} · a^{n} = a^{m+n}", "2³ · 2² = 2⁵ = 32"],
        ["a^{m} ÷ a^{n} = a^{m−n}", "5⁴ ÷ 5² = 5² = 25"],
        ["(a^{m})^{n} = a^{m·n}", "(3²)³ = 3⁶ = 729"],
        ["a⁰ = 1 (a ≠ 0)", "17⁰ = 1"],
        ["a^{−n} = [[1 || a^{n}]]", "2^{−3} = [[1 || 8]]"],
        ["a^{[[m || n]]} = ⁿ√(a^{m})", "8^{[[2 || 3]]} = ∛64 = 4"]
      ]},
      { tipo: "atencao", titulo: "Sinal e parênteses", texto: [
        "- (−2)⁴ = 16, mas −2⁴ = −16: sem parênteses, o expoente só vale para o 2.",
        "- Base negativa com expoente **par** dá resultado positivo; com expoente **ímpar**, negativo: (−2)³ = −8.",
        "- Não existe raiz quadrada real de número negativo."
      ]},
      { tipo: "exemplo", titulo: "Simplificando uma expressão", enunciado: "Calcule [[2^{10} · 2^{−4} || 2^{3}]].", resolucao: ["No numerador: 2^{10 + (−4)} = 2⁶.", "Dividindo: 2^{6 − 3} = 2³ = 8."], resposta: "8" },
      { tipo: "flashcards", cartas: [
        { frente: "Quanto vale qualquer número (≠ 0) elevado a zero?", verso: "1." },
        { frente: "(−3)² e −3² são iguais?", verso: "Não: (−3)² = 9 e −3² = −9." },
        { frente: "Como escrever √x como potência?", verso: "x^{[[1 || 2]]}." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "O valor de (−1)^{20} + (−1)^{21} + 2⁰ é:", alternativas: ["−1", "0", "1", "2", "3"], correta: "C", comentario: "(−1)^{20} = 1 (par), (−1)^{21} = −1 (ímpar), 2⁰ = 1. Soma: 1 − 1 + 1 = 1." }
    ]
  });

  A(CN, "Expressões numéricas", {
    resumo: "A ordem certa das operações e dos sinais de agrupamento.",
    incidencia: "média",
    blocos: [
      { tipo: "passos", titulo: "Ordem de resolução", itens: [
        "Resolva primeiro o que está dentro dos **parênteses** ( ), depois **colchetes** [ ], por fim **chaves** { }.",
        "Dentro de cada um: **potências e raízes**.",
        "Depois **multiplicações e divisões**, na ordem em que aparecem (da esquerda para a direita).",
        "Por último **somas e subtrações**, também da esquerda para a direita."
      ]},
      { tipo: "exemplo", titulo: "Exemplo resolvido", enunciado: "Calcule 20 − {3 · [8 − (2 + 1)²] + 4}.", resolucao: [
        "Parênteses: (2 + 1)² = 3² = 9.",
        "Colchetes: [8 − 9] = −1.",
        "Chaves: {3 · (−1) + 4} = {−3 + 4} = 1.",
        "Final: 20 − 1 = 19."
      ], resposta: "19", aberto: true },
      { tipo: "atencao", texto: "Divisão e multiplicação têm a **mesma** prioridade. Em 24 ÷ 4 · 2, faça da esquerda para a direita: 6 · 2 = 12 (e não 24 ÷ 8 = 3)." },
      { tipo: "python", titulo: "O Python segue a mesma ordem", codigo: `
print(20 - (3 * (8 - (2 + 1) ** 2) + 4))
print(24 / 4 * 2)
print(2 + 3 * 4 ** 2)
`, saida: `
19
12.0
50
` },
      { tipo: "questao", banca: Q, enunciado: "O resultado de 5 + 3 · 2³ − 18 ÷ 3 é:", alternativas: ["18", "23", "58", "−1", "27"], correta: "B", comentario: "Potência: 2³ = 8. Multiplicação e divisão: 3 · 8 = 24 e 18 ÷ 3 = 6. Soma e subtração: 5 + 24 − 6 = 23." }
    ]
  });

  /* ================= ARITMÉTICA ================= */

  A(AR, "Razão e proporção", {
    resumo: "Comparar grandezas por divisão e usar a propriedade fundamental das proporções.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "**Razão** entre a e b é o quociente [[a || b]]. Ela compara duas grandezas. Ex.: numa sala com 12 mulheres e 8 homens, a razão de mulheres para homens é [[12 || 8]] = [[3 || 2]].",
        "",
        "**Proporção** é a igualdade entre duas razões: [[a || b]] = [[c || d]]. Os termos a e d são os **extremos**; b e c, os **meios**."
      ]},
      { tipo: "formula", titulo: "Propriedade fundamental", expr: ["[[a || b]] = [[c || d]]   ⟺   a · d = b · c"], legenda: "O produto dos extremos é igual ao produto dos meios: é a famosa multiplicação em cruz." },
      { tipo: "texto", titulo: "Razões que têm nome", texto: [
        "- **Escala** = [[medida no desenho || medida real]]. Ex.: 1 : 100.000 → 1 cm no mapa equivale a 1 km.",
        "- **Velocidade média** = [[distância || tempo]].",
        "- **Densidade demográfica** = [[habitantes || área]]."
      ]},
      { tipo: "exemplo", titulo: "Exemplo · Escala", enunciado: "Num mapa de escala 1 : 50.000, duas cidades estão a 8 cm. Qual a distância real?", resolucao: ["8 cm · 50.000 = 400.000 cm = 4.000 m = 4 km."], resposta: "4 km" },
      { tipo: "exemplo", titulo: "Exemplo · Soma dos termos", enunciado: "A razão entre as idades de dois irmãos é [[2 || 3]] e a soma das idades é 35. Quais são as idades?", resolucao: ["Escreva as idades como 2k e 3k. Então 2k + 3k = 35, logo k = 7.", "Idades: 14 e 21 anos."], resposta: "14 e 21 anos" },
      { tipo: "questao", banca: Q, enunciado: "Em um setor, a razão entre o número de estagiários e o de servidores é [[2 || 5]]. Se há 15 servidores, quantos estagiários há?", alternativas: ["3", "5", "6", "10", "37"], correta: "C", comentario: "[[e || 15]] = [[2 || 5]] → 5e = 30 → e = 6." }
    ]
  });

  A(AR, "Grandezas diretamente e inversamente proporcionais", {
    resumo: "Como reconhecer se duas grandezas variam no mesmo sentido ou em sentidos opostos.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "- **Diretamente proporcionais**: a **razão** entre elas é constante. Se uma dobra, a outra dobra. Ex.: quantidade comprada e preço total.",
        "- **Inversamente proporcionais**: o **produto** entre elas é constante. Se uma dobra, a outra cai pela metade. Ex.: velocidade e tempo de viagem num mesmo percurso."
      ]},
      { tipo: "svg", titulo: "Gráficos das duas relações", legenda: "Direta: reta que passa pela origem. Inversa: curva (hipérbole) que se aproxima dos eixos.", codigo: `
<svg viewBox="0 0 520 230" role="img" aria-label="Dois gráficos: à esquerda uma reta crescente pela origem; à direita uma curva decrescente">
  <g>
    <line class="ln" x1="40" y1="190" x2="230" y2="190"></line><line class="ln" x1="40" y1="190" x2="40" y2="20"></line>
    <line class="ln-d" x1="40" y1="190" x2="220" y2="40"></line>
    <text class="tx tx-t" x="130" y="220" text-anchor="middle">Direta: y = k · x</text>
  </g>
  <g>
    <line class="ln" x1="300" y1="190" x2="490" y2="190"></line><line class="ln" x1="300" y1="190" x2="300" y2="20"></line>
    <path class="ln-d" d="M315,30 Q330,150 480,178"></path>
    <text class="tx tx-t" x="395" y="220" text-anchor="middle">Inversa: x · y = k</text>
  </g>
</svg>` },
      { tipo: "tabela", titulo: "Teste rápido com uma tabela", cabecalho: ["Operários", "Dias", "Operários × Dias"], linhas: [["2", "30", "60"], ["4", "15", "60"], ["6", "10", "60"]], legenda: "O produto é sempre 60: operários e dias são **inversamente** proporcionais." },
      { tipo: "atencao", texto: "Crescer junto não basta. Idade e peso de uma criança aumentam juntos, mas a razão não é constante: não são proporcionais." },
      { tipo: "flashcards", cartas: [
        { frente: "Na direta, o que é constante?", verso: "A razão y/x." },
        { frente: "Na inversa, o que é constante?", verso: "O produto x · y." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Qual par de grandezas é inversamente proporcional?", alternativas: ["Litros de gasolina e valor pago", "Número de torneiras iguais abertas e tempo para encher um tanque", "Lado de um quadrado e seu perímetro", "Horas trabalhadas e salário por hora fixo recebido", "Distância percorrida e tempo, a velocidade constante"], correta: "B", comentario: "Mais torneiras enchem o tanque em menos tempo, na mesma razão: inversa. As demais são diretas." }
    ]
  });

  A(AR, "Divisão proporcional", {
    resumo: "Repartir um valor em partes proporcionais (ou inversamente proporcionais) a números dados.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Dividir N em partes **diretamente proporcionais** a a, b e c é achar x, y e z tais que [[x || a]] = [[y || b]] = [[z || c]] = k.",
        "",
        "Como x + y + z = N, a constante é k = [[N || a + b + c]]. Depois: x = a·k, y = b·k, z = c·k.",
        "",
        "Na divisão **inversamente proporcional**, troque cada número pelo seu inverso ([[1 || a]], [[1 || b]], …) e faça a divisão direta."
      ]},
      { tipo: "exemplo", titulo: "Exemplo · Direta", enunciado: "Três sócios investiram R$ 2.000, R$ 3.000 e R$ 5.000 e vão dividir um lucro de R$ 4.000 proporcionalmente ao investimento. Quanto recebe cada um?", resolucao: ["k = [[4.000 || 2.000 + 3.000 + 5.000]] = 0,4.", "Partes: 2.000 · 0,4 = 800; 3.000 · 0,4 = 1.200; 5.000 · 0,4 = 2.000."], resposta: "R$ 800, R$ 1.200 e R$ 2.000" },
      { tipo: "exemplo", titulo: "Exemplo · Inversa", enunciado: "Um prêmio de R$ 1.100 será dividido entre dois servidores em partes inversamente proporcionais às faltas: 2 e 3 faltas. Quanto recebe cada um?", resolucao: [
        "Inversos: [[1 || 2]] e [[1 || 3]]. Com denominador comum 6: [[3 || 6]] e [[2 || 6]], ou seja, partes proporcionais a 3 e 2.",
        "k = [[1.100 || 3 + 2]] = 220. Partes: 3 · 220 = 660 e 2 · 220 = 440."
      ], resposta: "R$ 660 (2 faltas) e R$ 440 (3 faltas)" },
      { tipo: "python", titulo: "Divisão proporcional genérica", codigo: `
def divide_proporcional(total, pesos):
    k = total / sum(pesos)
    return [round(p * k, 2) for p in pesos]

print(divide_proporcional(4000, [2000, 3000, 5000]))
# Inversa: use os inversos como pesos
print(divide_proporcional(1100, [1/2, 1/3]))
`, saida: `
[800.0, 1200.0, 2000.0]
[660.0, 440.0]
` },
      { tipo: "questao", banca: Q, enunciado: "R$ 900 foram divididos em partes diretamente proporcionais a 1, 3 e 5. A maior parte é:", alternativas: ["R$ 100", "R$ 300", "R$ 450", "R$ 500", "R$ 600"], correta: "D", comentario: "k = [[900 || 1 + 3 + 5]] = 100. A maior parte é 5 · 100 = R$ 500." }
    ]
  });

  A(AR, "Porcentagem", {
    resumo: "Calcular x% de um valor, achar o valor a partir da porcentagem e variações percentuais.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "**Porcentagem** é uma razão com denominador 100: 25% = [[25 || 100]] = 0,25.",
        "",
        "Três perguntas cobrem quase tudo:",
        "1. Quanto é **p% de V**? → V · [[p || 100]].",
        "2. **V** é quantos por cento de **T**? → [[V || T]] · 100.",
        "3. Qual a **variação percentual** de A para B? → [[B − A || A]] · 100."
      ]},
      { tipo: "tabela", titulo: "Fator multiplicativo", cabecalho: ["Situação", "Multiplique por"], linhas: [["Aumento de 15%", "1,15"], ["Desconto de 15%", "0,85"], ["Aumento de 100% (dobrar)", "2"], ["Desconto de 30%", "0,70"]], legenda: "Pensar em fator evita erro e agiliza contas em sequência." },
      { tipo: "exemplo", titulo: "Exemplo · Valor original", enunciado: "Após um aumento de 20%, um produto passou a custar R$ 96. Qual era o preço antes?", resolucao: ["Preço novo = preço antigo · 1,20.", "Preço antigo = 96 ÷ 1,20 = 80."], resposta: "R$ 80,00" },
      { tipo: "atencao", texto: "Aumentar 20% e depois descontar 20% **não** volta ao valor inicial: 100 · 1,2 · 0,8 = 96. Cai 4%." },
      { tipo: "python", titulo: "Variação percentual", codigo: `
def variacao(antes, depois):
    return (depois - antes) / antes * 100

print(f"{variacao(80, 96):.1f}%")
print(f"{variacao(250, 200):.1f}%")
print(f"30% de 450 = {450 * 0.30:.2f}")
`, saida: `
20.0%
-20.0%
30% de 450 = 135.00
` },
      { tipo: "questao", banca: Q, enunciado: "Em um concurso com 2.400 inscritos, 18% foram aprovados. Quantos candidatos foram aprovados?", alternativas: ["180", "240", "384", "432", "480"], correta: "D", comentario: "2.400 · 0,18 = 432." },
      { tipo: "questao", banca: Q, enunciado: "O número de atendimentos caiu de 500 para 420 por dia. A queda foi de:", alternativas: ["8%", "12%", "16%", "19%", "80%"], correta: "C", comentario: "[[420 − 500 || 500]] = [[−80 || 500]] = −0,16 → queda de 16%." }
    ]
  });

  A(AR, "Média aritmética e média ponderada", {
    resumo: "Média simples e média com pesos, como nas notas de concurso.",
    incidencia: "alta",
    blocos: [
      { tipo: "formula", titulo: "Fórmulas", expr: [
        "Simples:   x̄ = [[x_{1} + x_{2} + … + x_{n} || n]]",
        "Ponderada:   x̄ = [[x_{1}·p_{1} + x_{2}·p_{2} + … || p_{1} + p_{2} + …]]"
      ], legenda: "Na ponderada, cada valor **x** tem um peso **p**: valores com peso maior influenciam mais." },
      { tipo: "exemplo", titulo: "Nota final de concurso", enunciado: "Uma candidata tirou 7 em Português (peso 3), 5 em Matemática (peso 2) e 9 em Legislação (peso 5). Qual a média ponderada?", tabela: { cabecalho: ["Matéria", "Nota", "Peso", "Nota × Peso"], linhas: [["Português", "7", "3", "21"], ["Matemática", "5", "2", "10"], ["Legislação", "9", "5", "45"], ["**Total**", "", "**10**", "**76**"]] }, resolucao: ["Média = [[76 || 10]] = 7,6."], resposta: "7,6" },
      { tipo: "dica", texto: "Se a média de n números é M, a **soma** deles é n · M. Isso resolve as questões de \"um número saiu do grupo\": soma nova = soma antiga − o número que saiu." },
      { tipo: "exemplo", titulo: "Exemplo · Quem saiu?", enunciado: "A média de idade de 5 servidores é 40 anos. Um deles se aposentou e a média dos 4 restantes passou a 37. Qual a idade de quem saiu?", resolucao: ["Soma antes: 5 · 40 = 200. Soma depois: 4 · 37 = 148.", "Quem saiu: 200 − 148 = 52 anos."], resposta: "52 anos" },
      { tipo: "python", titulo: "Média ponderada", codigo: `
notas = [7, 5, 9]
pesos = [3, 2, 5]

simples = sum(notas) / len(notas)
ponderada = sum(n * p for n, p in zip(notas, pesos)) / sum(pesos)
print(f"Simples: {simples:.2f}")
print(f"Ponderada: {ponderada:.2f}")
`, saida: `
Simples: 7.00
Ponderada: 7.60
` },
      { tipo: "questao", banca: Q, enunciado: "A média de 4 provas de um aluno é 6,5. Que nota ele precisa tirar na 5ª prova para a média das 5 ser 7,0?", alternativas: ["7,0", "7,5", "8,0", "8,5", "9,0"], correta: "E", comentario: "Soma atual: 4 · 6,5 = 26. Soma necessária: 5 · 7 = 35. Nota: 35 − 26 = 9,0." }
    ]
  });
})();
