/* Matemática · Geometria e Medidas + Estatística Básica. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "matematica", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const GM = "Geometria e Medidas";
  const ES = "Estatística Básica";

  /* ================= GEOMETRIA E MEDIDAS ================= */

  A(GM, "Sistema métrico decimal e conversão de unidades", {
    resumo: "Converter metros, litros e gramas andando casas na escadinha.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "No sistema métrico, cada unidade vale **10 vezes** a seguinte. A ordem é sempre: **quilo · hecto · deca · unidade · deci · centi · mili**.",
        "",
        "- Para uma unidade **menor**: multiplique por 10 a cada degrau.",
        "- Para uma unidade **maior**: divida por 10 a cada degrau."
      ]},
      { tipo: "svg", titulo: "A escadinha", legenda: "Descer um degrau multiplica por 10; subir divide por 10.", codigo: `
<svg viewBox="0 0 560 200" role="img" aria-label="Escada com as unidades km, hm, dam, m, dm, cm, mm, cada degrau valendo dez vezes o seguinte">
  <g>
    <rect class="fd" x="10"  y="20"  width="76" height="30"></rect><text class="tx" x="48"  y="40" text-anchor="middle">km</text>
    <rect class="fd" x="86"  y="40"  width="76" height="30"></rect><text class="tx" x="124" y="60" text-anchor="middle">hm</text>
    <rect class="fd" x="162" y="60"  width="76" height="30"></rect><text class="tx" x="200" y="80" text-anchor="middle">dam</text>
    <rect class="fd-d" x="238" y="80" width="76" height="30"></rect><text class="tx tx-t" x="276" y="100" text-anchor="middle">m</text>
    <rect class="fd" x="314" y="100" width="76" height="30"></rect><text class="tx" x="352" y="120" text-anchor="middle">dm</text>
    <rect class="fd" x="390" y="120" width="76" height="30"></rect><text class="tx" x="428" y="140" text-anchor="middle">cm</text>
    <rect class="fd" x="466" y="140" width="76" height="30"></rect><text class="tx" x="504" y="160" text-anchor="middle">mm</text>
  </g>
  <text class="tx-m" x="40" y="150">× 10 a cada degrau para baixo</text>
  <text class="tx-m" x="300" y="30">÷ 10 a cada degrau para cima</text>
</svg>` },
      { tipo: "tabela", titulo: "Área e volume andam diferente", cabecalho: ["Medida", "Cada degrau vale", "Exemplo"], linhas: [["Comprimento (m)", "× 10", "1 m = 100 cm"], ["Área (m²)", "× 100", "1 m² = 10.000 cm²"], ["Volume (m³)", "× 1.000", "1 m³ = 1.000.000 cm³"]] },
      { tipo: "dica", titulo: "Ligação volume × capacidade", texto: "1 dm³ = 1 litro, 1 cm³ = 1 mL e 1 m³ = 1.000 litros. Caixa-d'água de 2 m³ guarda 2.000 litros." },
      { tipo: "questao", banca: Q, enunciado: "Uma sala retangular mede 4,5 m por 300 cm. Sua área é:", alternativas: ["13,5 m²", "135 m²", "1,35 m²", "1.350 m²", "15 m²"], correta: "A", comentario: "300 cm = 3 m. Área = 4,5 · 3 = 13,5 m²." }
    ]
  });

  A(GM, "Medidas de tempo", {
    resumo: "Horas, minutos e segundos não são decimais: conversões na base 60.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Tempo usa base **60**: 1 h = 60 min e 1 min = 60 s, logo 1 h = 3.600 s. Outras: 1 dia = 24 h; 1 semana = 7 dias; ano comum = 365 dias; bissexto = 366.",
        "",
        "Cuidado com decimais: **1,5 h = 1 h 30 min**, e não 1 h 50 min. A parte decimal se multiplica por 60."
      ]},
      { tipo: "exemplo", titulo: "Somando tempos", enunciado: "Uma audiência começou às 13h47min e durou 2h38min. A que horas terminou?", resolucao: ["Minutos: 47 + 38 = 85 min = 1 h 25 min.", "Horas: 13 + 2 + 1 = 16."], resposta: "16h25min" },
      { tipo: "python", titulo: "Convertendo segundos", codigo: `
def hms(segundos):
    h, resto = divmod(segundos, 3600)
    m, s = divmod(resto, 60)
    return f"{h}h {m:02d}min {s:02d}s"

print(hms(5400))
print(hms(9999))
print("2,75 h =", hms(int(2.75 * 3600)))
`, saida: `
1h 30min 00s
2h 46min 39s
2,75 h = 2h 45min 00s
` },
      { tipo: "questao", banca: Q, enunciado: "Um atendimento leva, em média, 0,4 hora. Quanto tempo é isso?", alternativas: ["4 minutos", "24 minutos", "40 minutos", "14 minutos", "36 minutos"], correta: "B", comentario: "0,4 · 60 = 24 minutos." }
    ]
  });

  A(GM, "Perímetro e área de figuras planas", {
    resumo: "Fórmulas de quadrado, retângulo, triângulo, trapézio, losango e círculo.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: ["**Perímetro** é a soma dos lados (o contorno). **Área** é a medida da superfície, em unidades ao quadrado."] },
      { tipo: "svg", titulo: "Figuras e áreas", codigo: `
<svg viewBox="0 0 600 250" role="img" aria-label="Retângulo de área b vezes h, triângulo de área b vezes h sobre 2, trapézio de área base maior mais base menor vezes h sobre 2, e círculo de área pi r ao quadrado">
  <rect class="fd-d" x="20" y="40" width="110" height="70"></rect>
  <text class="tx" x="75" y="130" text-anchor="middle">b</text><text class="tx" x="10" y="80">h</text>
  <text class="tx tx-t" x="75" y="160" text-anchor="middle">A = b · h</text>

  <polygon class="fd-d" points="160,110 270,110 230,40"></polygon>
  <line class="ln" x1="230" y1="40" x2="230" y2="110" style="stroke-dasharray:4 3"></line>
  <text class="tx" x="215" y="130" text-anchor="middle">b</text><text class="tx" x="236" y="82">h</text>
  <text class="tx tx-t" x="215" y="160" text-anchor="middle">A = b·h / 2</text>

  <polygon class="fd-d" points="300,110 430,110 400,40 330,40"></polygon>
  <text class="tx" x="365" y="32" text-anchor="middle">b</text><text class="tx" x="365" y="130" text-anchor="middle">B</text>
  <text class="tx tx-t" x="365" y="160" text-anchor="middle">A = (B + b)·h / 2</text>

  <circle class="fd-d" cx="520" cy="75" r="42"></circle>
  <line class="ln" x1="520" y1="75" x2="562" y2="75"></line><text class="tx" x="534" y="70">r</text>
  <text class="tx tx-t" x="520" y="160" text-anchor="middle">A = π · r²</text>
  <text class="tx-m" x="520" y="182" text-anchor="middle">C = 2 · π · r</text>
</svg>` },
      { tipo: "tabela", titulo: "Resumo das fórmulas", cabecalho: ["Figura", "Área", "Perímetro"], linhas: [["Quadrado de lado ℓ", "ℓ²", "4ℓ"], ["Retângulo b × h", "b · h", "2(b + h)"], ["Triângulo", "[[b · h || 2]]", "soma dos lados"], ["Trapézio", "[[(B + b) · h || 2]]", "soma dos lados"], ["Losango", "[[D · d || 2]] (diagonais)", "4ℓ"], ["Círculo de raio r", "π r²", "2π r"]] },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Um terreno retangular de 12 m por 20 m terá um canteiro circular de 2 m de raio. Usando π = 3,14, qual a área que sobra?", resolucao: ["Terreno: 12 · 20 = 240 m².", "Canteiro: 3,14 · 2² = 12,56 m².", "Sobra: 240 − 12,56 = 227,44 m²."], resposta: "227,44 m²" },
      { tipo: "atencao", texto: "Se todas as medidas de uma figura dobram, o perímetro dobra, mas a **área quadruplica** (2²). Se triplicam, a área fica 9 vezes maior." },
      { tipo: "questao", banca: Q, enunciado: "Um quadrado tem perímetro de 36 cm. Sua área é:", alternativas: ["36 cm²", "72 cm²", "81 cm²", "144 cm²", "324 cm²"], correta: "C", comentario: "Lado = 36 ÷ 4 = 9 cm. Área = 9² = 81 cm²." }
    ]
  });

  A(GM, "Volume de sólidos", {
    resumo: "Volume de cubo, paralelepípedo, cilindro, cone e esfera.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Fórmulas de volume", cabecalho: ["Sólido", "Volume"], linhas: [["Cubo de aresta a", "a³"], ["Paralelepípedo (caixa)", "comprimento · largura · altura"], ["Prisma e cilindro", "área da base · altura (cilindro: π r² h)"], ["Pirâmide e cone", "[[área da base · altura || 3]]"], ["Esfera", "[[4 || 3]] π r³"]] },
      { tipo: "svg", titulo: "Caixa e cilindro", codigo: `
<svg viewBox="0 0 460 210" role="img" aria-label="Paralelepípedo com comprimento, largura e altura e cilindro com raio e altura">
  <polygon class="fd" points="40,70 170,70 210,40 80,40"></polygon>
  <rect class="fd-d" x="40" y="70" width="130" height="90"></rect>
  <polygon class="fd" points="170,70 210,40 210,130 170,160"></polygon>
  <text class="tx" x="105" y="182" text-anchor="middle">c</text><text class="tx" x="198" y="160">ℓ</text><text class="tx" x="22" y="120">h</text>
  <text class="tx tx-t" x="125" y="205" text-anchor="middle">V = c · ℓ · h</text>
  <ellipse class="fd" cx="340" cy="45" rx="60" ry="16"></ellipse>
  <path class="fd-d" d="M280,45 L280,150 A60,16 0 0 0 400,150 L400,45 A60,16 0 0 1 280,45 Z"></path>
  <ellipse class="ln" cx="340" cy="45" rx="60" ry="16"></ellipse>
  <line class="ln" x1="340" y1="45" x2="400" y2="45"></line><text class="tx" x="362" y="40">r</text>
  <text class="tx" x="410" y="105">h</text>
  <text class="tx tx-t" x="340" y="205" text-anchor="middle">V = π · r² · h</text>
</svg>` },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Uma caixa-d'água em forma de cilindro tem raio de 1 m e altura de 1,5 m. Quantos litros cabem? (π = 3,14)", resolucao: ["V = 3,14 · 1² · 1,5 = 4,71 m³.", "Como 1 m³ = 1.000 L: 4.710 litros."], resposta: "4.710 litros" },
      { tipo: "questao", banca: Q, enunciado: "Um arquivo deslizante tem forma de caixa com 2 m de comprimento, 0,5 m de largura e 1,8 m de altura. Seu volume é:", alternativas: ["1,8 m³", "2,3 m³", "3,6 m³", "4,3 m³", "18 m³"], correta: "A", comentario: "V = 2 · 0,5 · 1,8 = 1,8 m³." }
    ]
  });

  A(GM, "Teorema de Pitágoras", {
    resumo: "No triângulo retângulo, hipotenusa² = cateto² + cateto².",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Num **triângulo retângulo** (que tem um ângulo de 90°), o lado oposto ao ângulo reto é a **hipotenusa** (o maior lado). Os outros dois são os **catetos**."
      ]},
      { tipo: "formula", titulo: "Teorema", expr: ["a² = b² + c²"], legenda: "**a** é a hipotenusa; **b** e **c** são os catetos." },
      { tipo: "svg", titulo: "O triângulo 3, 4, 5", legenda: "Os quadrados construídos sobre os catetos (9 + 16) somam a área do quadrado sobre a hipotenusa (25).", codigo: `
<svg viewBox="0 0 360 240" role="img" aria-label="Triângulo retângulo com catetos 3 e 4 e hipotenusa 5">
  <polygon class="fd-d" points="60,200 300,200 60,20"></polygon>
  <rect class="ln" x="60" y="184" width="16" height="16"></rect>
  <text class="tx" x="180" y="226" text-anchor="middle">c = 4</text>
  <text class="tx" x="20" y="115">b = 3</text>
  <text class="tx tx-d tx-t" x="196" y="100">a = 5</text>
  <text class="tx-m" x="210" y="130">5² = 3² + 4²</text>
</svg>` },
      { tipo: "dica", texto: "Decore os ternos pitagóricos: **3, 4, 5**; **5, 12, 13**; **8, 15, 17** e os múltiplos deles (6, 8, 10; 9, 12, 15…). Poupam conta na prova." },
      { tipo: "exemplo", titulo: "Exemplo · Escada", enunciado: "Uma escada de 5 m está apoiada num muro, com o pé a 3 m da parede. A que altura ela toca o muro?", resolucao: ["5² = 3² + h² → 25 = 9 + h² → h² = 16 → h = 4."], resposta: "4 m" },
      { tipo: "python", titulo: "Hipotenusa com math.hypot", codigo: `
import math

print(math.hypot(3, 4))
print(math.hypot(5, 12))
print(round(math.sqrt(5**2 - 3**2), 2))
`, saida: `
5.0
13.0
4.0
` },
      { tipo: "questao", banca: Q, enunciado: "A diagonal de uma tela retangular de 24 cm por 18 cm mede:", alternativas: ["28 cm", "30 cm", "32 cm", "36 cm", "42 cm"], correta: "B", comentario: "d² = 24² + 18² = 576 + 324 = 900 → d = 30 cm (é o terno 3, 4, 5 multiplicado por 6)." }
    ]
  });

  /* ================= ESTATÍSTICA BÁSICA ================= */

  A(ES, "Leitura de tabelas e gráficos", {
    resumo: "Interpretar barras, setores, linhas e tabelas de frequência sem cair em armadilhas.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "As questões de gráfico cobram leitura atenta, não conta difícil. Escolha o tipo pela pergunta:",
        "- **Barras/colunas**: comparar quantidades entre categorias.",
        "- **Setores (pizza)**: partes de um todo, em porcentagem. A soma dá 100% (ou 360°).",
        "- **Linhas**: evolução ao longo do tempo."
      ]},
      { tipo: "svg", titulo: "Atendimentos por mês", legenda: "Exemplo fictício. Comece lendo o título, os eixos e a unidade.", codigo: `
<svg viewBox="0 0 480 240" role="img" aria-label="Gráfico de colunas fictício: janeiro 120, fevereiro 90, março 150, abril 180 atendimentos">
  <line class="ln" x1="50" y1="200" x2="460" y2="200"></line>
  <line class="ln" x1="50" y1="200" x2="50" y2="20"></line>
  <g class="tx-m" text-anchor="end">
    <text x="44" y="204">0</text><text x="44" y="154">50</text><text x="44" y="104">100</text><text x="44" y="54">150</text>
  </g>
  <line class="ln-f" x1="50" y1="150" x2="460" y2="150"></line><line class="ln-f" x1="50" y1="100" x2="460" y2="100"></line><line class="ln-f" x1="50" y1="50" x2="460" y2="50"></line>
  <rect class="fd-d" x="80"  y="80"  width="60" height="120"></rect>
  <rect class="fd-d" x="180" y="110" width="60" height="90"></rect>
  <rect class="fd-d" x="280" y="50"  width="60" height="150"></rect>
  <rect class="fd-d" x="380" y="20"  width="60" height="180"></rect>
  <g class="tx" text-anchor="middle">
    <text x="110" y="222">jan</text><text x="210" y="222">fev</text><text x="310" y="222">mar</text><text x="410" y="222">abr</text>
    <text x="110" y="74">120</text><text x="210" y="104">90</text><text x="310" y="44">150</text><text x="410" y="16">180</text>
  </g>
</svg>` },
      { tipo: "exemplo", titulo: "Lendo o gráfico acima", enunciado: "Qual foi o aumento percentual de atendimentos de fevereiro para abril?", resolucao: ["De 90 para 180: dobrou.", "[[180 − 90 || 90]] = 1 → aumento de 100%."], resposta: "100%" },
      { tipo: "atencao", titulo: "Armadilhas comuns", texto: [
        "- Eixo que **não começa em zero** exagera diferenças.",
        "- Porcentagem de um grupo **não** é porcentagem do total. 50% das mulheres não é 50% das pessoas.",
        "- Gráfico de setores só compara partes **do mesmo todo**."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Num gráfico de setores, a fatia \"Transporte\" corresponde a 72°. Que porcentagem do total ela representa?", alternativas: ["7,2%", "18%", "20%", "25%", "72%"], correta: "C", comentario: "[[72 || 360]] = 0,2 = 20%." }
    ]
  });

  A(ES, "Média, moda e mediana", {
    resumo: "As três medidas de tendência central e quando cada uma é melhor.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "- **Média**: soma dos valores dividida pela quantidade.",
        "- **Moda**: o valor que mais aparece (pode haver mais de uma, ou nenhuma).",
        "- **Mediana**: o valor do meio, com os dados **em ordem**. Se a quantidade for par, é a média dos dois do meio.",
        "",
        "A mediana resiste a valores extremos; a média, não. Por isso salários costumam ser descritos pela mediana."
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Idades de uma equipe: 25, 31, 28, 25, 41, 30.", resolucao: [
        "Em ordem: 25, 25, 28, 30, 31, 41.",
        "Média: [[180 || 6]] = 30.",
        "Moda: 25 (aparece duas vezes).",
        "Mediana: seis valores, então a média do 3º e do 4º: [[28 + 30 || 2]] = 29."
      ], resposta: "Média 30, moda 25, mediana 29" },
      { tipo: "python", titulo: "Com o módulo statistics", codigo: `
import statistics as st

idades = [25, 31, 28, 25, 41, 30]
print("Média:", st.mean(idades))
print("Moda:", st.mode(idades))
print("Mediana:", st.median(idades))

salarios = [2000, 2200, 2500, 2600, 30000]
print("Média dos salários:", st.mean(salarios))
print("Mediana dos salários:", st.median(salarios))
`, saida: `
Média: 30
Moda: 25
Mediana: 29.0
Média dos salários: 7860
Mediana dos salários: 2500
` },
      { tipo: "dica", texto: "Veja no exemplo dos salários: um único valor alto (30.000) puxa a média para 7.860, enquanto a mediana (2.500) continua mostrando o salário típico." },
      { tipo: "questao", banca: Q, enunciado: "A mediana dos valores 8, 3, 10, 5, 7, 12, 4 é:", alternativas: ["5", "7", "7,5", "7,0 e 8,0", "10"], correta: "B", comentario: "Em ordem: 3, 4, 5, **7**, 8, 10, 12. São 7 valores; o do meio é o 4º: 7." }
    ]
  });

  A(ES, "Noções de dispersão", {
    resumo: "Amplitude, variância e desvio padrão: o quanto os dados se espalham.",
    incidencia: "baixa",
    blocos: [
      { tipo: "texto", texto: [
        "Dois grupos podem ter a mesma média e serem muito diferentes. As medidas de **dispersão** mostram o quanto os dados se afastam da média.",
        "",
        "- **Amplitude**: maior valor − menor valor.",
        "- **Variância**: média dos quadrados dos desvios em relação à média.",
        "- **Desvio padrão**: raiz quadrada da variância, na mesma unidade dos dados.",
        "- **Coeficiente de variação**: [[desvio padrão || média]], em %. Compara dispersões de grupos com médias diferentes."
      ]},
      { tipo: "formula", titulo: "Variância e desvio padrão (população)", expr: ["σ² = [[Σ (x_{i} − x̄)² || n]]", "σ = √σ²"] },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Notas: 4, 6, 8. Calcule a variância e o desvio padrão.", resolucao: ["Média = 6. Desvios: −2, 0, 2. Quadrados: 4, 0, 4.", "Variância = [[8 || 3]] ≈ 2,67. Desvio padrão = √2,67 ≈ 1,63."], resposta: "σ² ≈ 2,67 e σ ≈ 1,63" },
      { tipo: "python", titulo: "Mesma média, dispersões diferentes", codigo: `
import statistics as st

turma_a = [6, 6, 6, 6, 6]
turma_b = [2, 4, 6, 8, 10]
for nome, notas in [("A", turma_a), ("B", turma_b)]:
    print(nome, "média", st.mean(notas), "| desvio padrão", round(st.pstdev(notas), 2))
`, saida: `
A média 6 | desvio padrão 0.0
B média 6 | desvio padrão 2.83
` },
      { tipo: "atencao", texto: "Algumas provas usam a variância **amostral**, que divide por n − 1 em vez de n. Leia o enunciado: se falar em amostra, use n − 1." },
      { tipo: "questao", banca: Q, enunciado: "Se somarmos 5 a todos os valores de um conjunto de dados, o desvio padrão:", alternativas: ["aumenta 5", "aumenta 25", "fica igual", "dobra", "cai pela metade"], correta: "C", comentario: "Somar uma constante desloca todos os dados juntos: a média sobe 5, mas a distância de cada valor até a média não muda. O desvio padrão fica igual." }
    ]
  });
})();
