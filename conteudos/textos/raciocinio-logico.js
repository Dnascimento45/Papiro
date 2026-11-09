/* Raciocínio Lógico · todos os assuntos. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "raciocinio-logico", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const LP = "Lógica Proposicional";
  const LA = "Lógica de Argumentação";
  const RS = "Raciocínio Sequencial e Problemas";
  const CP = "Contagem e Probabilidade";

  /* ================= LÓGICA PROPOSICIONAL ================= */

  A(LP, "Proposições e conectivos", {
    resumo: "O que é proposição e como e, ou, se…então, se e somente se combinam frases.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "**Proposição** é uma frase declarativa que pode ser julgada como **verdadeira (V)** ou **falsa (F)**, nunca as duas.",
        "",
        "**Não são proposições**: perguntas (\"Que horas são?\"), ordens (\"Feche a porta.\"), exclamações (\"Que dia lindo!\") e frases abertas com variável sem valor (\"x + 2 = 5\").",
        "",
        "Proposições simples se juntam por **conectivos** e formam proposições compostas."
      ]},
      { tipo: "tabela", titulo: "Os cinco conectivos", cabecalho: ["Nome", "Símbolo", "Leitura", "É falsa quando…"], linhas: [
        ["Negação", "¬p (ou ~p)", "não p", "p é verdadeira"],
        ["Conjunção", "p ∧ q", "p **e** q", "pelo menos uma é falsa"],
        ["Disjunção", "p ∨ q", "p **ou** q", "as duas são falsas"],
        ["Condicional", "p → q", "**se** p, **então** q", "p é V e q é F (\"Vera Fischer\")"],
        ["Bicondicional", "p ↔ q", "p **se e somente se** q", "p e q têm valores diferentes"]
      ]},
      { tipo: "dica", texto: "Para a condicional, lembre de **\"Vera Fischer é Falsa\"**: só dá falso quando a primeira é **V**erdadeira e a segunda é **F**alsa. Em todos os outros casos, é verdadeira." },
      { tipo: "texto", titulo: "Outras formas de escrever a condicional", texto: [
        "\"Se chove, a rua molha\" também aparece como: \"Quando chove, a rua molha\", \"Chover é condição **suficiente** para a rua molhar\", \"A rua molhar é condição **necessária** para chover\"."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "\"Feche a porta!\" é proposição?", verso: "Não. Ordens não podem ser julgadas como V ou F." },
        { frente: "Quando p ∨ q é falsa?", verso: "Só quando p e q são falsas." },
        { frente: "Quando p → q é falsa?", verso: "Só quando p é V e q é F." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Sabendo que p é verdadeira e q é falsa, qual proposição é verdadeira?", alternativas: ["p ∧ q", "p → q", "p ↔ q", "¬p ∨ q", "¬q → p"], correta: "E", comentario: "¬q é V e p é V: V → V = V. As demais: p ∧ q = F; p → q = V → F = F; p ↔ q = F; ¬p ∨ q = F ∨ F = F." }
    ]
  });

  A(LP, "Tabela-verdade", {
    resumo: "Montar a tabela com todas as combinações de V e F e calcular o valor da proposição.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "A **tabela-verdade** lista todas as combinações de valores das proposições simples e o resultado da composta.",
        "",
        "Com **n** proposições simples, a tabela tem **2ⁿ linhas**: 2 proposições → 4 linhas; 3 → 8 linhas; 4 → 16 linhas."
      ]},
      { tipo: "tabela", titulo: "Tabela de todos os conectivos", cabecalho: ["p", "q", "p ∧ q", "p ∨ q", "p → q", "p ↔ q", "p ⊻ q (ou exclusivo)"], linhas: [
        ["V", "V", "V", "V", "V", "V", "F"],
        ["V", "F", "F", "V", "F", "F", "V"],
        ["F", "V", "F", "V", "V", "F", "V"],
        ["F", "F", "F", "F", "V", "V", "F"]
      ]},
      { tipo: "passos", titulo: "Como montar", itens: [
        "Conte as proposições simples (n) e faça 2ⁿ linhas.",
        "Na 1ª coluna, alterne V e F em blocos de metade das linhas; na 2ª, em blocos de um quarto, e assim por diante.",
        "Crie uma coluna para cada parte da expressão, de dentro para fora (primeiro parênteses e negações).",
        "A última coluna é o valor da proposição inteira."
      ]},
      { tipo: "python", titulo: "Gerando a tabela-verdade", texto: "O módulo `itertools` cria todas as combinações. Aqui, a tabela de (p → q) ∧ ¬q.", codigo: `
from itertools import product

def se_entao(a, b):
    return (not a) or b

v = lambda x: "V" if x else "F"
print("p q | (p→q) ∧ ¬q")
for p, q in product([True, False], repeat=2):
    print(v(p), v(q), "|", v(se_entao(p, q) and not q))
`, saida: `
p q | (p→q) ∧ ¬q
V V | F
V F | F
F V | F
F F | V
` },
      { tipo: "questao", banca: Q, enunciado: "Quantas linhas tem a tabela-verdade da proposição (p ∧ q) → (r ∨ ¬s)?", alternativas: ["4", "8", "12", "16", "32"], correta: "D", comentario: "São 4 proposições simples (p, q, r, s): 2⁴ = 16 linhas." }
    ]
  });

  A(LP, "Tautologia, contradição e contingência", {
    resumo: "Proposições sempre verdadeiras, sempre falsas ou que dependem dos valores.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Olhe a **última coluna** da tabela-verdade:",
        "- **Tautologia**: só V. Ex.: p ∨ ¬p (\"Chove ou não chove\").",
        "- **Contradição**: só F. Ex.: p ∧ ¬p (\"Chove e não chove\").",
        "- **Contingência**: tem V e F."
      ]},
      { tipo: "tabela", titulo: "Exemplo: p → (p ∨ q)", cabecalho: ["p", "q", "p ∨ q", "p → (p ∨ q)"], linhas: [["V", "V", "V", "V"], ["V", "F", "V", "V"], ["F", "V", "V", "V"], ["F", "F", "F", "V"]], legenda: "Só V na última coluna: é uma tautologia." },
      { tipo: "python", titulo: "Classificando automaticamente", codigo: `
from itertools import product

def classifica(formula, n):
    valores = [formula(*linha) for linha in product([True, False], repeat=n)]
    if all(valores):
        return "tautologia"
    if not any(valores):
        return "contradição"
    return "contingência"

print(classifica(lambda p: p or not p, 1))
print(classifica(lambda p: p and not p, 1))
print(classifica(lambda p, q: (not p) or (p or q), 2))
print(classifica(lambda p, q: p and q, 2))
`, saida: `
tautologia
contradição
tautologia
contingência
` },
      { tipo: "questao", banca: Q, enunciado: "A proposição \"Se Ana é servidora, então Ana é servidora ou estagiária\" é:", alternativas: ["uma contradição", "uma contingência", "uma tautologia", "uma negação", "inválida"], correta: "C", comentario: "É da forma p → (p ∨ q), sempre verdadeira, como mostra a tabela acima." }
    ]
  });

  A(LP, "Equivalências lógicas", {
    resumo: "Frases diferentes com a mesma tabela-verdade, como a contrapositiva.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: ["Duas proposições são **equivalentes** (≡) quando têm a mesma tabela-verdade. As bancas pedem para reescrever uma frase sem mudar o sentido lógico."] },
      { tipo: "tabela", titulo: "Equivalências que mais caem", cabecalho: ["Original", "Equivalente", "Nome"], linhas: [
        ["p → q", "¬q → ¬p", "contrapositiva"],
        ["p → q", "¬p ∨ q", "\"não p ou q\""],
        ["p ↔ q", "(p → q) ∧ (q → p)", "bicondicional"],
        ["¬(¬p)", "p", "dupla negação"],
        ["p ∧ (q ∨ r)", "(p ∧ q) ∨ (p ∧ r)", "distributiva"]
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Reescreva \"Se o servidor faltou, então perdeu o bônus\" de duas formas equivalentes.", resolucao: ["Contrapositiva (inverte e nega): \"Se o servidor não perdeu o bônus, então não faltou\".", "Forma com \"ou\" (nega a primeira, mantém a segunda): \"O servidor não faltou ou perdeu o bônus\"."], resposta: "Contrapositiva e forma com \"ou\"" },
      { tipo: "atencao", texto: "\"Se q então p\" (a **recíproca**) **não** é equivalente a \"se p então q\". \"Se chove, a rua molha\" não garante que \"se a rua molha, choveu\": alguém pode ter lavado a calçada." },
      { tipo: "questao", banca: Q, enunciado: "Uma proposição equivalente a \"Se estudo, então passo\" é:", alternativas: ["Se passo, então estudo.", "Se não estudo, então não passo.", "Se não passo, então não estudo.", "Estudo e não passo.", "Estudo ou passo."], correta: "C", comentario: "É a contrapositiva: inverte a ordem e nega as duas partes. As alternativas A e B são recíproca e inversa, que não equivalem." }
    ]
  });

  A(LP, "Negação de proposições e Leis de De Morgan", {
    resumo: "Como negar e, ou, se…então e frases com todo e algum.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Como negar cada conectivo", cabecalho: ["Proposição", "Negação"], linhas: [
        ["p ∧ q", "¬p ∨ ¬q (troca **e** por **ou** e nega as duas)"],
        ["p ∨ q", "¬p ∧ ¬q (troca **ou** por **e** e nega as duas)"],
        ["p → q", "p ∧ ¬q (mantém a primeira **e** nega a segunda)"],
        ["p ↔ q", "p ⊻ q (ou exclusivo): \"ou p ou q\""],
        ["Todo A é B", "Algum A não é B"],
        ["Algum A é B", "Nenhum A é B"],
        ["Nenhum A é B", "Algum A é B"]
      ]},
      { tipo: "dica", texto: "Para negar a condicional: **\"MA-NE\"**: **MA**ntém a primeira e **NE**ga a segunda, ligando com **e**. A negação de \"Se chove, levo guarda-chuva\" é \"Chove **e** não levo guarda-chuva\"." },
      { tipo: "exemplo", titulo: "Exemplos", enunciado: "Negue: (a) \"João é técnico e Maria é analista\"; (b) \"Todos os servidores bateram o ponto\".", resolucao: ["(a) \"João não é técnico **ou** Maria não é analista\".", "(b) \"Algum servidor não bateu o ponto\" (basta um para negar o \"todos\")."], resposta: "Ver resolução" },
      { tipo: "atencao", texto: "A negação de \"Todos passaram\" **não** é \"Ninguém passou\". Basta que um não tenha passado." },
      { tipo: "questao", banca: Q, enunciado: "A negação de \"Se o relatório está pronto, então a reunião acontece\" é:", alternativas: ["Se o relatório não está pronto, a reunião não acontece.", "O relatório está pronto e a reunião não acontece.", "O relatório não está pronto ou a reunião acontece.", "O relatório não está pronto e a reunião acontece.", "Se a reunião não acontece, o relatório não está pronto."], correta: "B", comentario: "Negação de p → q é p ∧ ¬q: mantém a primeira, nega a segunda, conectivo \"e\"." }
    ]
  });

  /* ================= LÓGICA DE ARGUMENTAÇÃO ================= */

  A(LA, "Argumentos válidos e inválidos", {
    resumo: "Validade depende da forma: se as premissas forem verdadeiras, a conclusão tem de ser.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Um **argumento** tem **premissas** e uma **conclusão**. Ele é **válido** quando é impossível ter todas as premissas verdadeiras e a conclusão falsa.",
        "",
        "Validade é questão de **forma**, não de conteúdo. Um argumento pode ser válido com premissas falsas no mundo real."
      ]},
      { tipo: "tabela", titulo: "Formas válidas e falácias", cabecalho: ["Forma", "Estrutura", "Situação"], linhas: [
        ["Modus ponens", "p → q; p; logo q", "válida"],
        ["Modus tollens", "p → q; ¬q; logo ¬p", "válida"],
        ["Silogismo hipotético", "p → q; q → r; logo p → r", "válida"],
        ["Silogismo disjuntivo", "p ∨ q; ¬p; logo q", "válida"],
        ["Afirmar o consequente", "p → q; q; logo p", "**inválida** (falácia)"],
        ["Negar o antecedente", "p → q; ¬p; logo ¬q", "**inválida** (falácia)"]
      ]},
      { tipo: "passos", titulo: "Método da conclusão falsa", itens: [
        "Suponha a conclusão **falsa**.",
        "Tente fazer todas as premissas **verdadeiras** ao mesmo tempo.",
        "Se conseguir, o argumento é **inválido**. Se der contradição, é **válido**."
      ]},
      { tipo: "python", titulo: "Testando validade por força bruta", codigo: `
from itertools import product

def valido(premissas, conclusao, n):
    for valores in product([True, False], repeat=n):
        if all(p(*valores) for p in premissas) and not conclusao(*valores):
            return False
    return True

seq = lambda a, b: (not a) or b
# Modus tollens: p→q, ¬q ⊢ ¬p
print(valido([lambda p, q: seq(p, q), lambda p, q: not q], lambda p, q: not p, 2))
# Afirmar o consequente: p→q, q ⊢ p
print(valido([lambda p, q: seq(p, q), lambda p, q: q], lambda p, q: p, 2))
`, saida: `
True
False
` },
      { tipo: "questao", banca: Q, enunciado: "\"Se Paulo é fiscal, então trabalha na prefeitura. Paulo trabalha na prefeitura. Logo, Paulo é fiscal.\" Esse argumento é:", alternativas: ["válido, por modus ponens", "válido, por modus tollens", "inválido, porque afirma o consequente", "inválido, porque nega o antecedente", "válido, porque as premissas são verdadeiras"], correta: "C", comentario: "Paulo pode trabalhar na prefeitura sem ser fiscal. Concluir p a partir de q é a falácia de afirmar o consequente." }
    ]
  });

  A(LA, "Silogismos", {
    resumo: "Duas premissas com termos em comum levando a uma conclusão.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "O **silogismo categórico** tem duas premissas e uma conclusão, ligadas por um **termo médio** que aparece nas premissas e some na conclusão.",
        "",
        "Exemplo clássico: \"Todo homem é mortal. Sócrates é homem. Logo, Sócrates é mortal.\" O termo médio é \"homem\"."
      ]},
      { tipo: "texto", titulo: "Regras práticas", texto: [
        "- De duas premissas **negativas**, nada se conclui.",
        "- De duas premissas **particulares** (\"algum\"), nada se conclui.",
        "- Se uma premissa é negativa, a conclusão é negativa; se uma é particular, a conclusão é particular.",
        "- Na dúvida, desenhe os diagramas (veja o assunto Diagramas lógicos)."
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "\"Todo analista é graduado. Nenhum graduado é estagiário.\" O que se conclui?", resolucao: ["O conjunto dos analistas está dentro do dos graduados, que não tem nenhum estagiário.", "Logo: nenhum analista é estagiário."], resposta: "Nenhum analista é estagiário." },
      { tipo: "questao", banca: Q, enunciado: "\"Todo servidor do setor A usa crachá. Algum servidor do setor A é motorista.\" Pode-se concluir que:", alternativas: ["Todo motorista usa crachá.", "Algum motorista usa crachá.", "Nenhum motorista usa crachá.", "Todo servidor que usa crachá é do setor A.", "Algum servidor do setor A não usa crachá."], correta: "B", comentario: "Há pelo menos um servidor do setor A que é motorista; como todo servidor do setor A usa crachá, esse motorista usa crachá." }
    ]
  });

  A(LA, "Quantificadores: todo, algum e nenhum", {
    resumo: "O sentido exato de todo, algum, nenhum e como negar cada um.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "As quatro proposições categóricas", cabecalho: ["Forma", "Significa", "Negação"], linhas: [
        ["Todo A é B", "não há A fora de B", "Algum A não é B"],
        ["Nenhum A é B", "A e B não têm nada em comum", "Algum A é B"],
        ["Algum A é B", "existe pelo menos um A que é B", "Nenhum A é B"],
        ["Algum A não é B", "existe pelo menos um A fora de B", "Todo A é B"]
      ]},
      { tipo: "atencao", texto: "Em lógica, \"algum\" significa **pelo menos um**, e pode ser todos. \"Algum servidor é concursado\" continua verdadeira se todos forem." },
      { tipo: "texto", titulo: "Equivalências úteis", texto: ["- \"Nenhum A é B\" ≡ \"Todo A não é B\" ≡ \"Nenhum B é A\".", "- \"Algum A é B\" ≡ \"Algum B é A\".", "- \"Todo A é B\" **não** equivale a \"Todo B é A\"."] },
      { tipo: "flashcards", cartas: [
        { frente: "Negação de \"Algum fiscal é corrupto\"", verso: "Nenhum fiscal é corrupto." },
        { frente: "Negação de \"Nenhum aluno faltou\"", verso: "Algum aluno faltou." },
        { frente: "\"Todo A é B\" permite concluir \"Todo B é A\"?", verso: "Não." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "A negação de \"Todos os processos foram arquivados\" é:", alternativas: ["Nenhum processo foi arquivado.", "Algum processo foi arquivado.", "Algum processo não foi arquivado.", "Todos os processos não foram arquivados.", "Nenhum processo deixou de ser arquivado."], correta: "C", comentario: "Negação de \"todo A é B\" é \"algum A não é B\"." }
    ]
  });

  A(LA, "Diagramas lógicos", {
    resumo: "Representar todo, algum e nenhum com círculos para tirar conclusões.",
    incidencia: "alta",
    blocos: [
      { tipo: "svg", titulo: "Como desenhar cada quantificador", codigo: `
<svg viewBox="0 0 600 200" role="img" aria-label="Três diagramas: todo A é B (A dentro de B), algum A é B (círculos que se cruzam) e nenhum A é B (círculos separados)">
  <g>
    <circle class="fd" cx="100" cy="90" r="70"></circle>
    <circle class="fd-d" cx="100" cy="100" r="36"></circle>
    <text class="tx tx-t" x="100" y="105" text-anchor="middle">A</text>
    <text class="tx tx-t" x="100" y="40" text-anchor="middle">B</text>
    <text class="tx" x="100" y="190" text-anchor="middle">Todo A é B</text>
  </g>
  <g>
    <circle class="fd" cx="270" cy="95" r="52"></circle>
    <circle class="fd" cx="330" cy="95" r="52"></circle>
    <path class="fd-d" d="M300,52 A52,52 0 0 1 300,138 A52,52 0 0 1 300,52 Z"></path>
    <text class="tx tx-t" x="245" y="100">A</text><text class="tx tx-t" x="345" y="100">B</text>
    <text class="tx" x="300" y="190" text-anchor="middle">Algum A é B</text>
  </g>
  <g>
    <circle class="fd" cx="460" cy="95" r="45"></circle>
    <circle class="fd" cx="560" cy="95" r="35"></circle>
    <text class="tx tx-t" x="460" y="100" text-anchor="middle">A</text><text class="tx tx-t" x="560" y="100" text-anchor="middle">B</text>
    <text class="tx" x="510" y="190" text-anchor="middle">Nenhum A é B</text>
  </g>
</svg>` },
      { tipo: "passos", titulo: "Método", itens: [
        "Desenhe primeiro as premissas com \"todo\" e \"nenhum\" (são as mais restritivas).",
        "Depois as com \"algum\", marcando a região que com certeza tem elemento.",
        "Teste cada alternativa: só está certa se valer em **todos** os desenhos possíveis."
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "\"Todo técnico é concursado. Algum concursado é gestor.\" Pode-se concluir que algum técnico é gestor?", resolucao: ["Desenhe técnicos dentro de concursados. O \"algum concursado é gestor\" pode cair numa parte de concursados **fora** dos técnicos.", "Como existe um desenho em que nenhum técnico é gestor, a conclusão **não** é garantida."], resposta: "Não se pode concluir." },
      { tipo: "questao", banca: Q, enunciado: "\"Nenhum estagiário assina processos. Todo chefe assina processos.\" Conclui-se que:", alternativas: ["Algum chefe é estagiário.", "Nenhum chefe é estagiário.", "Todo estagiário é chefe.", "Algum estagiário assina processos.", "Todo quem assina é chefe."], correta: "B", comentario: "Chefes estão dentro de \"assina processos\"; estagiários estão totalmente fora. Logo, chefes e estagiários não se cruzam." }
    ]
  });

  /* ================= RACIOCÍNIO SEQUENCIAL E PROBLEMAS ================= */

  A(RS, "Sequências numéricas", {
    resumo: "Descobrir a lei de formação: somas, produtos, alternâncias e sequências intercaladas.",
    incidencia: "alta",
    blocos: [
      { tipo: "passos", titulo: "Roteiro para achar a regra", itens: [
        "Calcule as **diferenças** entre termos vizinhos. Se forem iguais, é uma PA.",
        "Se as diferenças variarem, calcule as diferenças **das diferenças**.",
        "Teste **razões** (divisões): se forem iguais, é uma PG.",
        "Procure **duas sequências intercaladas** (posições ímpares e pares).",
        "Procure quadrados (1, 4, 9, 16…), cubos e primos."
      ]},
      { tipo: "tabela", titulo: "Exemplos de lei de formação", cabecalho: ["Sequência", "Regra", "Próximo"], linhas: [
        ["2, 5, 8, 11, …", "+3", "14"],
        ["3, 6, 12, 24, …", "× 2", "48"],
        ["1, 2, 4, 7, 11, …", "+1, +2, +3, +4…", "16"],
        ["1, 4, 9, 16, …", "quadrados", "25"],
        ["2, 10, 4, 20, 6, 30, …", "intercaladas: 2, 4, 6 e 10, 20, 30", "8"],
        ["1, 1, 2, 3, 5, 8, …", "Fibonacci: soma dos dois anteriores", "13"]
      ]},
      { tipo: "python", titulo: "Investigando diferenças", codigo: `
seq = [1, 2, 4, 7, 11, 16]
dif1 = [b - a for a, b in zip(seq, seq[1:])]
dif2 = [b - a for a, b in zip(dif1, dif1[1:])]
print("diferenças:", dif1)
print("diferenças das diferenças:", dif2)
print("próximo:", seq[-1] + dif1[-1] + dif2[-1])
`, saida: `
diferenças: [1, 2, 3, 4, 5]
diferenças das diferenças: [1, 1, 1, 1]
próximo: 22
` },
      { tipo: "questao", banca: Q, enunciado: "Qual é o próximo termo da sequência 3, 5, 9, 17, 33, …?", alternativas: ["49", "57", "63", "65", "66"], correta: "D", comentario: "Diferenças: 2, 4, 8, 16 (dobram). A próxima é 32: 33 + 32 = 65. Também: cada termo é o dobro do anterior menos 1." }
    ]
  });

  A(RS, "Sequências de letras e figuras", {
    resumo: "Letras viram posições no alfabeto; figuras giram, alternam ou crescem.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Com **letras**, troque cada uma pela sua posição no alfabeto (A = 1, B = 2, …, Z = 26) e procure a regra numérica. Atenção: o enunciado diz se K, W e Y contam (o alfabeto oficial tem 26 letras desde o Acordo Ortográfico de 1990).",
        "",
        "Com **figuras**, observe separadamente: rotação (90°, 180°), cor, quantidade de elementos e posição. Muitas vezes duas regras atuam juntas."
      ]},
      { tipo: "exemplo", titulo: "Exemplo com letras", enunciado: "Complete: A, C, F, J, O, …", resolucao: ["Posições: 1, 3, 6, 10, 15 (somam +2, +3, +4, +5).", "Próximo: 15 + 6 = 21 → U."], resposta: "U" },
      { tipo: "svg", titulo: "Exemplo com figuras", legenda: "A seta gira 90° no sentido horário a cada passo: a próxima aponta para a esquerda.", codigo: `
<svg viewBox="0 0 520 120" role="img" aria-label="Quatro setas apontando para cima, direita, baixo e um ponto de interrogação">
  <g transform="translate(60,60)"><path class="ln-d" d="M0,30 L0,-30 M-14,-14 L0,-30 L14,-14"></path></g>
  <g transform="translate(180,60) rotate(90)"><path class="ln-d" d="M0,30 L0,-30 M-14,-14 L0,-30 L14,-14"></path></g>
  <g transform="translate(300,60) rotate(180)"><path class="ln-d" d="M0,30 L0,-30 M-14,-14 L0,-30 L14,-14"></path></g>
  <rect class="fd" x="390" y="20" width="80" height="80" rx="6"></rect>
  <text class="tx tx-t tx-d" x="430" y="72" text-anchor="middle" style="font-size:36px">?</text>
</svg>` },
      { tipo: "python", titulo: "Letras como números", codigo: `
import string

alfabeto = string.ascii_uppercase  # 26 letras
seq = "ACFJO"
posicoes = [alfabeto.index(c) + 1 for c in seq]
print(posicoes)
print("próxima:", alfabeto[posicoes[-1] + 6 - 1])
`, saida: `
[1, 3, 6, 10, 15]
próxima: U
` },
      { tipo: "questao", banca: Q, enunciado: "Na sequência B, E, H, K, N, …, considerando o alfabeto de 26 letras, a próxima letra é:", alternativas: ["O", "P", "Q", "R", "S"], correta: "C", comentario: "Posições 2, 5, 8, 11, 14: somam 3. Próxima: 17 → Q." }
    ]
  });

  A(RS, "Associação lógica (problemas de tabela)", {
    resumo: "Cruzar pessoas, profissões e lugares com uma tabela de eliminação.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Nesses problemas, cada pessoa tem exatamente uma característica de cada tipo. A ferramenta é a **tabela de dupla entrada**: marque X onde é impossível e ✓ onde é certo. Cada ✓ elimina o resto da linha e da coluna."
      ]},
      { tipo: "exemplo", titulo: "Exemplo resolvido", enunciado: "Ana, Bia e Caio trabalham no protocolo, no RH e na TI, um em cada. Ana não trabalha na TI. Caio não trabalha no protocolo nem na TI. Onde cada um trabalha?", tabela: { cabecalho: ["", "Protocolo", "RH", "TI"], linhas: [["Ana", "✓", "X", "X"], ["Bia", "X", "X", "✓"], ["Caio", "X", "✓", "X"]] }, resolucao: [
        "Caio não está no protocolo nem na TI: Caio está no **RH**.",
        "Ana não está na TI e o RH já é do Caio: Ana está no **protocolo**.",
        "Sobra a **TI** para a Bia."
      ], resposta: "Ana: protocolo · Bia: TI · Caio: RH" },
      { tipo: "dica", texto: "Comece pelas pistas mais **diretas** (negações e afirmações sobre uma pessoa só). As pistas comparativas (\"quem está no RH é mais velho que Ana\") ficam para o fim." },
      { tipo: "python", titulo: "Resolvendo por tentativa com permutations", codigo: `
from itertools import permutations

pessoas = ["Ana", "Bia", "Caio"]
for setores in permutations(["Protocolo", "RH", "TI"]):
    s = dict(zip(pessoas, setores))
    if s["Ana"] != "TI" and s["Caio"] not in ("Protocolo", "TI"):
        print(s)
`, saida: `
{'Ana': 'Protocolo', 'Bia': 'TI', 'Caio': 'RH'}
` },
      { tipo: "questao", banca: Q, enunciado: "Três servidores (Davi, Elisa e Fábio) usam carro, ônibus e bicicleta, um meio cada. Elisa não usa carro. Quem usa bicicleta é amigo de Davi e não é Elisa. Quem usa ônibus?", alternativas: ["Davi", "Elisa", "Fábio", "Davi ou Fábio", "Não é possível saber"], correta: "B", comentario: "Quem usa bicicleta não é Elisa nem Davi (é amigo dele): é Fábio. Elisa não usa carro, então usa ônibus. Davi usa carro." }
    ]
  });

  A(RS, "Verdades e mentiras", {
    resumo: "Testar hipóteses: suponha quem fala a verdade e veja se gera contradição.",
    incidencia: "média",
    blocos: [
      { tipo: "passos", titulo: "Método das hipóteses", itens: [
        "Escolha uma pessoa e suponha que ela diz a **verdade**.",
        "Siga as consequências para as outras falas.",
        "Se aparecer contradição (mais mentirosos do que o enunciado permite, por exemplo), a hipótese está errada: teste a próxima.",
        "A hipótese que não gera contradição é a resposta."
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Um documento sumiu. Só um dos três mente. Ana: \"Foi o Beto\". Beto: \"Não fui eu\". Caio: \"Não fui eu\". Quem pegou?", resolucao: [
        "Ana e Beto se contradizem: um deles mente. Como só há um mentiroso, Caio diz a verdade: não foi Caio.",
        "Se Ana mentisse, não seria o Beto, nem o Caio, e o culpado teria de ser a Ana; Beto e Caio diriam a verdade. É consistente.",
        "Se Beto mentisse, seria o Beto, e Ana e Caio diriam a verdade. Também é consistente.",
        "Com só essas falas, há duas possibilidades. Por isso as provas sempre dão mais uma informação; por exemplo, \"o culpado é homem\" → foi o Beto."
      ], resposta: "Com a pista extra, Beto" },
      { tipo: "python", titulo: "Testando todas as hipóteses", codigo: `
suspeitos = ["Ana", "Beto", "Caio"]
for culpado in suspeitos:
    falas = {
        "Ana": culpado == "Beto",
        "Beto": culpado != "Beto",
        "Caio": culpado != "Caio",
    }
    mentirosos = [p for p, verdade in falas.items() if not verdade]
    if len(mentirosos) == 1:
        print("culpado:", culpado, "| mentiroso:", mentirosos[0])
`, saida: `
culpado: Ana | mentiroso: Ana
culpado: Beto | mentiroso: Beto
` },
      { tipo: "questao", banca: Q, enunciado: "Dois irmãos: um sempre mente e o outro sempre diz a verdade. O primeiro diz: \"Pelo menos um de nós mente\". Então:", alternativas: ["o primeiro mente", "o primeiro diz a verdade", "os dois mentem", "os dois dizem a verdade", "não é possível saber"], correta: "B", comentario: "Se o primeiro mentisse, a frase seria falsa, ou seja, nenhum dos dois mentiria. Contradição, pois ele próprio estaria mentindo. Logo, o primeiro diz a verdade (e o segundo é o mentiroso)." }
    ]
  });

  A(RS, "Calendários e relógios", {
    resumo: "Dias da semana com resto da divisão por 7 e ângulos entre ponteiros.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", titulo: "Calendários", texto: [
        "Os dias da semana se repetem a cada **7 dias**. Para saber o dia daqui a N dias, divida N por 7 e use o **resto**.",
        "- Ano comum (365 dias = 52 semanas + 1 dia): a mesma data cai **1 dia da semana depois** no ano seguinte.",
        "- Ano bissexto (366): avança **2 dias**. São bissextos os anos divisíveis por 4, exceto os divisíveis por 100 que não são por 400 (2000 foi; 2100 não será)."
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Hoje é segunda-feira. Que dia da semana será daqui a 100 dias?", resolucao: ["100 = 7 · 14 + 2. Resto 2.", "Segunda + 2 dias = quarta-feira."], resposta: "Quarta-feira" },
      { tipo: "formula", titulo: "Ângulo entre os ponteiros", expr: ["θ = | 30 · h − 5,5 · m |"], legenda: "h = horas (de 0 a 11) e m = minutos. Se der mais de 180°, use 360° − θ para o menor ângulo." },
      { tipo: "python", titulo: "Conferindo com o módulo datetime", codigo: `
from datetime import date, timedelta

hoje = date(2026, 11, 9)   # uma segunda-feira
dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"]
print(hoje.strftime("%d/%m/%Y"), "é", dias[hoje.weekday()])
print("daqui a 100 dias:", dias[(hoje + timedelta(days=100)).weekday()])

def angulo(h, m):
    a = abs(30 * (h % 12) - 5.5 * m)
    return min(a, 360 - a)

print("ângulo às 3h30:", angulo(3, 30))
`, saida: `
09/11/2026 é segunda
daqui a 100 dias: quarta
ângulo às 3h30: 75.0
` },
      { tipo: "questao", banca: Q, enunciado: "Qual o menor ângulo entre os ponteiros de um relógio às 2h20?", alternativas: ["40°", "50°", "60°", "70°", "80°"], correta: "B", comentario: "θ = |30 · 2 − 5,5 · 20| = |60 − 110| = 50°." }
    ]
  });

  /* ================= CONTAGEM E PROBABILIDADE ================= */

  A(CP, "Princípio fundamental da contagem", {
    resumo: "Etapas independentes: multiplique o número de opções de cada uma.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Se uma decisão é feita em etapas, com a opções na 1ª, b na 2ª, c na 3ª…, o total de possibilidades é **a · b · c · …**",
        "",
        "Use **e** → multiplica (etapa após etapa). Use **ou** → soma (casos separados)."
      ]},
      { tipo: "svg", titulo: "Árvore de possibilidades", legenda: "2 camisas e 3 calças: 2 · 3 = 6 combinações.", codigo: `
<svg viewBox="0 0 440 240" role="img" aria-label="Árvore: duas camisas, cada uma ligada a três calças, total de seis ramos">
  <circle class="pt" cx="30" cy="120" r="6"></circle>
  <line class="ln" x1="30" y1="120" x2="150" y2="65"></line><line class="ln" x1="30" y1="120" x2="150" y2="175"></line>
  <text class="tx" x="158" y="70">camisa 1</text><text class="tx" x="158" y="180">camisa 2</text>
  <g class="ln-f">
    <line x1="230" y1="65" x2="330" y2="25"></line><line x1="230" y1="65" x2="330" y2="65"></line><line x1="230" y1="65" x2="330" y2="105"></line>
    <line x1="230" y1="175" x2="330" y2="135"></line><line x1="230" y1="175" x2="330" y2="175"></line><line x1="230" y1="175" x2="330" y2="215"></line>
  </g>
  <g class="tx-m"><text x="338" y="29">calça A</text><text x="338" y="69">calça B</text><text x="338" y="109">calça C</text><text x="338" y="139">calça A</text><text x="338" y="179">calça B</text><text x="338" y="219">calça C</text></g>
</svg>` },
      { tipo: "exemplo", titulo: "Exemplo · Senhas", enunciado: "Uma senha tem 2 letras (26 opções cada) seguidas de 3 algarismos. Quantas senhas existem? E se não puder repetir algarismo?", resolucao: ["Com repetição: 26 · 26 · 10 · 10 · 10 = 676.000.", "Sem repetir algarismos: 26 · 26 · 10 · 9 · 8 = 486.720."], resposta: "676.000 e 486.720" },
      { tipo: "dica", texto: "Comece pela etapa com **restrição** (ex.: \"o primeiro algarismo não pode ser zero\"), depois preencha as outras." },
      { tipo: "questao", banca: Q, enunciado: "Quantos números de 3 algarismos distintos podem ser formados com 1, 2, 3, 4 e 5?", alternativas: ["15", "60", "100", "125", "120"], correta: "B", comentario: "5 opções para a centena, 4 para a dezena e 3 para a unidade: 5 · 4 · 3 = 60." }
    ]
  });

  A(CP, "Permutação", {
    resumo: "Ordenar todos os elementos: n!, com e sem repetição.",
    incidencia: "alta",
    blocos: [
      { tipo: "formula", titulo: "Fórmulas", expr: ["P_{n} = n! = n · (n − 1) · … · 2 · 1", "Com repetição:   P = [[n! || a! · b! · …]]", "Circular:   PC_{n} = (n − 1)!"], legenda: "Na permutação com repetição, a, b… são as quantidades de cada elemento repetido." },
      { tipo: "exemplo", titulo: "Anagramas", enunciado: "Quantos anagramas tem a palavra PROVA? E a palavra ARARA?", resolucao: ["PROVA: 5 letras distintas → 5! = 120.", "ARARA: 5 letras, com A repetido 3 vezes e R 2 vezes → [[5! || 3! · 2!]] = [[120 || 12]] = 10."], resposta: "120 e 10" },
      { tipo: "exemplo", titulo: "Mesa redonda", enunciado: "De quantas formas 6 pessoas podem sentar numa mesa redonda?", resolucao: ["Na mesa redonda, girar todos não muda a disposição: (6 − 1)! = 5! = 120."], resposta: "120" },
      { tipo: "python", titulo: "Conferindo com itertools", codigo: `
from itertools import permutations
from math import factorial

print(factorial(5))
print(len(set(permutations("ARARA"))))
print(factorial(5) // (factorial(3) * factorial(2)))
`, saida: `
120
10
10
` },
      { tipo: "questao", banca: Q, enunciado: "Quantos anagramas da palavra EDITAL começam com vogal?", alternativas: ["120", "240", "360", "480", "720"], correta: "C", comentario: "Vogais: E, I, A (3 opções para a 1ª letra). As outras 5 letras se permutam: 5! = 120. Total: 3 · 120 = 360." }
    ]
  });

  A(CP, "Arranjo e combinação", {
    resumo: "Escolher alguns elementos: a ordem importa (arranjo) ou não (combinação)?",
    incidencia: "alta",
    blocos: [
      { tipo: "formula", titulo: "Fórmulas", expr: ["Arranjo:   A_{n,p} = [[n! || (n − p)!]]", "Combinação:   C_{n,p} = [[n! || p! · (n − p)!]]"] },
      { tipo: "texto", titulo: "Ordem importa?", texto: [
        "Troque dois escolhidos de lugar. Se virou **outra** situação, use **arranjo**. Se é a **mesma**, use **combinação**.",
        "- Presidente e vice: trocar muda o cargo → arranjo.",
        "- Comissão de 3 pessoas: trocar a ordem dá a mesma comissão → combinação."
      ]},
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "Num setor com 8 servidores, (a) de quantas formas se escolhe chefe e substituto? (b) de quantas formas se monta uma comissão de 3?", resolucao: ["(a) Arranjo: A_{8,2} = 8 · 7 = 56.", "(b) Combinação: C_{8,3} = [[8 · 7 · 6 || 3 · 2 · 1]] = 56."], resposta: "56 e 56 (coincidência!)" },
      { tipo: "python", titulo: "math.perm e math.comb", codigo: `
from math import perm, comb

print("A(8,2) =", perm(8, 2))
print("C(8,3) =", comb(8, 3))
print("Mega-Sena C(60,6) =", comb(60, 6))
`, saida: `
A(8,2) = 56
C(8,3) = 56
Mega-Sena C(60,6) = 50063860
` },
      { tipo: "questao", banca: Q, enunciado: "De um grupo de 5 homens e 4 mulheres, quantas comissões de 3 pessoas com exatamente 2 mulheres podem ser formadas?", alternativas: ["20", "24", "30", "36", "84"], correta: "C", comentario: "Mulheres: C_{4,2} = 6. Homem: C_{5,1} = 5. Total: 6 · 5 = 30." }
    ]
  });

  A(CP, "Probabilidade", {
    resumo: "Casos favoráveis sobre casos possíveis, e regras do e e do ou.",
    incidencia: "alta",
    blocos: [
      { tipo: "formula", titulo: "Definição", expr: ["P(A) = [[casos favoráveis || casos possíveis]]"], legenda: "Vale quando todos os resultados têm a mesma chance. A probabilidade fica entre 0 e 1 (ou 0% e 100%)." },
      { tipo: "tabela", titulo: "Regras", cabecalho: ["Situação", "Regra"], linhas: [
        ["Evento contrário (não A)", "P(não A) = 1 − P(A)"],
        ["A **e** B independentes", "P(A e B) = P(A) · P(B)"],
        ["A **ou** B", "P(A ou B) = P(A) + P(B) − P(A e B)"],
        ["Condicional (A dado B)", "P(A | B) = [[P(A e B) || P(B)]]"]
      ]},
      { tipo: "exemplo", titulo: "Exemplo · Dois dados", enunciado: "Lançando dois dados, qual a probabilidade de a soma ser 7?", resolucao: ["Casos possíveis: 6 · 6 = 36.", "Favoráveis: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6.", "P = [[6 || 36]] = [[1 || 6]]."], resposta: "[[1 || 6]] ≈ 16,7%" },
      { tipo: "dica", texto: "\"Pelo menos um\" quase sempre é mais fácil pelo contrário: P(pelo menos um) = 1 − P(nenhum). Ex.: em 3 lançamentos de moeda, P(pelo menos uma cara) = 1 − ([[1 || 2]])³ = [[7 || 8]]." },
      { tipo: "python", titulo: "Contando casos e simulando", codigo: `
from itertools import product
import random

casos = list(product(range(1, 7), repeat=2))
favoraveis = [c for c in casos if sum(c) == 7]
print(f"exato: {len(favoraveis)}/{len(casos)} = {len(favoraveis)/len(casos):.4f}")

random.seed(42)
n = 100_000
acertos = sum(1 for _ in range(n) if random.randint(1, 6) + random.randint(1, 6) == 7)
print(f"simulado: {acertos/n:.4f}")
`, saida: `
exato: 6/36 = 0.1667
simulado: 0.1646
`, legenda: "A simulação chega perto de 1/6 sem ser exata; quanto mais repetições, mais perto. Com a mesma semente (42), o resultado se repete." },
      { tipo: "questao", banca: Q, enunciado: "Uma urna tem 4 bolas brancas e 6 pretas. Tirando duas bolas sem reposição, qual a probabilidade de ambas serem brancas?", alternativas: ["[[4 || 25]]", "[[2 || 15]]", "[[1 || 5]]", "[[2 || 5]]", "[[4 || 10]]"], correta: "B", comentario: "[[4 || 10]] · [[3 || 9]] = [[12 || 90]] = [[2 || 15]]." }
    ]
  });
})();
