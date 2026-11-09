/* Aprofundamento · Língua Portuguesa, parte 1: Compreensão e Interpretação de Textos,
   Ortografia e Acentuação, Morfologia. Acrescenta texto, exemplos e questões DEPOIS do que já existe. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`nucleo/portugues/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Moderna Gramática Portuguesa", autor: "Evanildo Bechara", nota: "Gramática de referência; boa para tirar dúvidas pontuais." },
    { titulo: "Nova Gramática do Português Contemporâneo", autor: "Celso Cunha e Lindley Cintra", nota: "A outra grande referência, com muitos exemplos literários." },
    { titulo: "Gramática para Concursos Públicos", autor: "Fernando Pestana", nota: "Organizada pelo que as bancas cobram, com questões comentadas." },
    { titulo: "Para Entender o Texto: Leitura e Redação", autor: "Francisco Platão Savioli e José Luiz Fiorin", nota: "Clássico de interpretação, coesão e coerência." },
    { titulo: "VOLP · Vocabulário Ortográfico (ABL)", url: "https://www.academia.org.br/nossa-lingua/busca-no-vocabulario", nota: "Consulta oficial de grafia, hífen e plural." },
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar com questões de prova",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Disciplina Língua Portuguesa, filtrando pelo assunto e pela banca." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas por professores." },
      { titulo: "PCI Concursos · provas anteriores", url: "https://www.pciconcursos.com.br/provas/", nota: "Provas completas e gratuitas." },
    ],
  };
  const TEXTO_DIGITAL = "“A digitalização dos serviços públicos reduziu filas em muitas cidades. Ainda assim, parte da população, sobretudo idosos e moradores de áreas rurais, enfrenta dificuldades para acessar aplicativos e sites oficiais. Por isso, especialistas defendem que o atendimento presencial seja mantido como alternativa.” (texto autoral)";
  const TEXTO_LEITURA = "“Ler diariamente, mesmo por poucos minutos, amplia o vocabulário e melhora a escrita. Estudos com estudantes indicam que o hábito, mais do que o tempo de cada sessão, explica os ganhos. Assim, quem se prepara para concursos faria melhor em trocar as maratonas de leitura do fim de semana por pequenas doses todos os dias.” (texto autoral)";

  /* ================= COMPREENSÃO E INTERPRETAÇÃO DE TEXTOS ================= */

  A("compreensao-e-interpretacao-de-textos/compreensao-x-interpretacao", [
    aprofundar([
      "### O verbo do enunciado diz o que fazer",
      "- “**Segundo o texto**”, “**de acordo com o autor**”, “o texto **afirma**”: **compreensão**. A resposta está escrita no texto, com outras palavras.",
      "- “**Infere-se**”, “**depreende-se**”, “**conclui-se**”, “o texto **permite concluir**”: **interpretação**. A resposta não está escrita, mas decorre do que está.",
      "",
      "### Os três erros que as alternativas trazem",
      "- **Extrapolação**: vai além do texto (“todas as cidades”, “sempre”, “nunca”).",
      "- **Redução**: pega uma parte e apresenta como se fosse o todo.",
      "- **Contradição**: diz o oposto do texto, às vezes trocando um único conectivo.",
      "",
      "Desconfie de palavras absolutas (todos, nenhum, sempre, apenas, exclusivamente) e prefira alternativas com “pode”, “em parte”, “alguns”, quando o texto é cauteloso.",
    ]),
    { tipo: "exemplo", titulo: "Exemplo · Lendo com lupa", enunciado: `Leia: ${TEXTO_DIGITAL} A frase “a digitalização acabou com as filas” está de acordo com o texto?`,
      resolucao: "Não. O texto diz que a digitalização **reduziu** filas em **muitas** cidades. “Acabou” e a ideia de “todas” são extrapolação.", resposta: "Não: é extrapolação." },
    PRATICAR,
    q(`Leia: ${TEXTO_DIGITAL} De acordo com o texto:`, ["a digitalização acabou com as filas em todas as cidades.", "os idosos não usam a internet.", "especialistas defendem manter o atendimento presencial como alternativa.", "o atendimento presencial deve substituir o digital.", "moradores de áreas rurais preferem as filas."], "C",
      "A está extrapolada; B generaliza; D inverte a proposta (o presencial é alternativa, não substituto); E não está no texto."),
    ce(`Leia: ${TEXTO_DIGITAL} Infere-se do texto que a digitalização, sozinha, não garante o acesso de todos aos serviços públicos.`, "Certo",
      "Não está escrito com essas palavras, mas decorre da menção a quem tem dificuldade de acesso."),
    ce(`No texto “${TEXTO_DIGITAL.slice(1, 70)}…”, a expressão “Ainda assim” introduz uma conclusão.`, "Errado",
      "“Ainda assim” tem valor concessivo/adversativo (= mesmo assim): apesar da redução das filas, há quem não consiga acessar."),
  ]);

  A("compreensao-e-interpretacao-de-textos/ideia-central-e-informacoes-explicitas", [
    aprofundar([
      "### Tema, tese e título",
      "- **Tema**: o assunto (“leitura”).",
      "- **Tese** (ideia central): o que o texto **defende** sobre o tema (“ler um pouco todo dia rende mais que maratonas”).",
      "- **Título**: pode ser só chamativo; nem sempre resume a tese.",
      "",
      "### Onde procurar",
      "A ideia central costuma estar no primeiro parágrafo (tópico frasal) e ser retomada na conclusão, muitas vezes depois de “assim”, “portanto”, “por isso”. Exemplos, números e citações **sustentam** a ideia; não são a ideia.",
      "",
      "### Teste da alternativa",
      "A ideia central tem de cobrir o texto **todo**. Se a alternativa só descreve um exemplo ou um parágrafo, é redução.",
    ]),
    PRATICAR,
    q(`Leia: ${TEXTO_LEITURA} A ideia central do texto é:`, ["Ler amplia o vocabulário.", "A regularidade da leitura importa mais que a duração de cada sessão.", "Estudantes leem pouco.", "Maratonas de leitura prejudicam a escrita.", "Concursos exigem vocabulário amplo."], "B",
      "A tese aparece no meio (“o hábito, mais do que o tempo de cada sessão”) e é retomada na conclusão com “Assim”. A é só um benefício citado; D extrapola."),
    ce(`Leia: ${TEXTO_LEITURA} O texto afirma que maratonas de leitura não trazem nenhum benefício.`, "Errado",
      "O texto diz que pequenas doses diárias são melhores; não diz que maratonas não trazem benefício algum."),
    ce(`Leia: ${TEXTO_LEITURA} A palavra “Assim”, no último período, introduz uma conclusão a partir do que foi dito antes.`, "Certo", "“Assim” equivale a “portanto” nesse contexto."),
  ]);

  A("compreensao-e-interpretacao-de-textos/inferencias-pressupostos-e-subentendidos", [
    aprofundar([
      "### Pressuposto: está na língua",
      "É uma informação que as **palavras** carregam: “deixou de”, “voltou a”, “continua”, “ainda”, “já”, “até”, “também”, “outra vez”, certos adjetivos (“o **novo** diretor” pressupõe que houve outro).",
      "**Teste da negação**: o pressuposto continua valendo quando se nega a frase. “Pedro parou de fumar” e “Pedro não parou de fumar” pressupõem, as duas, que Pedro fumava.",
      "",
      "### Subentendido: está no contexto",
      "É uma insinuação que depende da situação. “Está frio aqui, não?” pode ser um pedido para fechar a janela. Quem fala pode negar o subentendido (“não quis dizer isso”); o pressuposto, não.",
    ]),
    PRATICAR,
    q("“O servidor voltou a atrasar os relatórios.” Essa frase pressupõe que:", ["o servidor nunca atrasou antes.", "o servidor já tinha atrasado relatórios antes.", "o servidor será punido.", "os relatórios são inúteis.", "o servidor trabalha pouco."], "B", "“Voltou a” marca que o fato já aconteceu antes. C e E seriam, no máximo, subentendidos."),
    q("“Até o diretor elogiou o projeto.” A palavra “até” sugere que:", ["só o diretor elogiou.", "o diretor costuma elogiar tudo.", "o elogio do diretor era o menos esperado, e outros também elogiaram.", "o projeto foi reprovado.", "o diretor não leu o projeto."], "C", "“Até” inclui o diretor numa lista e o coloca como o caso mais improvável."),
    ce("Na frase “Pedro parou de fumar”, a informação de que Pedro fumava antes se mantém na negação “Pedro não parou de fumar”.", "Certo", "É o comportamento típico do pressuposto."),
  ]);

  A("compreensao-e-interpretacao-de-textos/tipologia-textual", [
    aprofundar([
      "### Marcas de cada tipo",
      "- **Narrativo**: fatos em sequência, personagens, tempo; verbos de ação, muitas vezes no pretérito.",
      "- **Descritivo**: características de algo ou alguém; adjetivos, verbos de estado (ser, estar, parecer).",
      "- **Expositivo**: informa e explica, sem defender posição.",
      "- **Argumentativo**: defende uma tese com argumentos; conectivos de causa, oposição e conclusão.",
      "- **Injuntivo**: instrui ou ordena; verbos no imperativo ou no infinitivo (“desligue”, “aguardar”).",
      "",
      "### Tipo × gênero",
      "Um mesmo texto mistura tipos (uma notícia narra e descreve), mas há sempre um **predominante**. Tipo é a estrutura; gênero é a forma social (veja o assunto seguinte).",
    ]),
    PRATICAR,
    q("“Desligue o computador, retire o cabo da tomada e aguarde dez segundos antes de religar.” O tipo textual predominante é:", ["narrativo", "descritivo", "expositivo", "argumentativo", "injuntivo"], "E", "Instruções em sequência, com verbos no imperativo."),
    q("Qual trecho é predominantemente argumentativo?", ["“A sala tinha paredes claras e janelas largas.”", "“Ontem, o ônibus atrasou e cheguei às nove.”", "“O transporte público precisa de subsídio, porque tarifas altas afastam justamente quem mais depende dele.”", "“Misture os ingredientes e leve ao forno.”", "“A Lei 8.112 tem 253 artigos.”"], "C", "Há uma tese (precisa de subsídio) e um argumento introduzido por “porque”."),
    ce("Um texto pode apresentar sequências de tipos diferentes, mas costuma ter um tipo predominante.", "Certo", "É o caso de quase todos os textos reais."),
  ]);

  A("compreensao-e-interpretacao-de-textos/generos-textuais", [
    aprofundar([
      "### Gêneros jornalísticos que mais caem",
      "- **Notícia**: relata um fato recente, em 3ª pessoa, buscando objetividade.",
      "- **Reportagem**: aprofunda um tema, com dados, entrevistas e contexto.",
      "- **Editorial**: opinião **do veículo**; normalmente **sem assinatura**.",
      "- **Artigo de opinião**: opinião **de quem assina**.",
      "- **Crônica**: fato do cotidiano, linguagem leve, olhar pessoal, muitas vezes com humor ou lirismo.",
      "- **Charge/tirinha**: humor e crítica com imagem; exige conhecer o contexto.",
      "",
      "### Gêneros oficiais",
      "Ofício, exposição de motivos, mensagem, requerimento, ata: veja Redação Oficial.",
    ]),
    PRATICAR,
    q("Texto opinativo, sem assinatura, que expressa a posição do próprio jornal sobre um tema:", ["notícia", "editorial", "crônica", "reportagem", "artigo de opinião"], "B", "O artigo de opinião é assinado; o editorial fala pelo veículo."),
    ce("A notícia é um gênero predominantemente argumentativo.", "Errado", "A notícia relata fatos, com predomínio de sequências narrativas e expositivas."),
    q("Texto curto, publicado em jornal, que parte de um fato do cotidiano e o comenta com linguagem leve e pessoal:", ["editorial", "verbete", "crônica", "resenha", "ofício"], "C", "É a definição de crônica."),
  ]);

  A("compreensao-e-interpretacao-de-textos/coesao-textual", [
    aprofundar([
      "### Coesão referencial",
      "Retoma ou antecipa termos: pronomes (“ele”, “o”, “isso”), sinônimos, expressões resumitivas (“a medida”, “o problema”) e **elipse** (omissão: “Os candidatos chegaram cedo. [Eles] Aguardaram duas horas.”).",
      "- **Anáfora**: retoma o que veio antes. **Catáfora**: antecipa o que vem depois (“Disse **isto**: estude todos os dias”).",
      "",
      "### Coesão sequencial",
      "Feita pelos **conectivos**, que marcam a relação lógica: adição, oposição, causa, consequência, conclusão, condição, finalidade, tempo.",
      "",
      "### Pergunta clássica de banca",
      "“A que termo se refere o pronome?” Leia a frase substituindo o pronome por cada candidato: só um faz sentido.",
    ]),
    PRATICAR,
    q("“A prefeitura anunciou o programa, mas ele ainda depende de aprovação da Câmara, que deve votá-lo na próxima semana.” O pronome “lo” retoma:", ["a prefeitura", "o programa", "a Câmara", "a aprovação", "a semana"], "B", "A Câmara vai votar o programa."),
    q("Em “Estudou muito; contudo, não foi aprovado”, o conectivo “contudo” pode ser substituído, sem alterar o sentido, por:", ["portanto", "porque", "no entanto", "assim", "conforme"], "C", "Os dois são adversativos."),
    ce("Na frase “Choveu muito; por isso, a estrada foi interditada”, o conectivo “por isso” introduz uma consequência do que foi dito antes.", "Certo", "A interdição é consequência da chuva."),
  ]);

  A("compreensao-e-interpretacao-de-textos/coerencia-textual", [
    aprofundar([
      "### O que dá coerência",
      "- **Não contradição**: o texto não pode afirmar e negar a mesma coisa.",
      "- **Continuidade e progressão**: retoma o tema e acrescenta informação nova.",
      "- **Relação lógica correta**: o conectivo tem de combinar com a relação real entre as ideias.",
      "- **Conhecimento de mundo**: o leitor completa o que não foi dito.",
      "",
      "### Coesão sem coerência",
      "“Estudei a noite toda; portanto, a Lua é feita de queijo.” Há conectivo (coesão), mas não há relação de sentido (incoerência). O contrário também existe: listas e poemas podem ser coerentes quase sem conectivos.",
    ]),
    PRATICAR,
    q("Qual frase é incoerente?", ["Estava doente, por isso faltou ao trabalho.", "Estava doente; mesmo assim, foi trabalhar.", "Como estava doente, foi trabalhar normalmente, porque se sentia muito mal.", "Embora estivesse doente, terminou o relatório.", "Estava doente e, por isso, pediu atestado."], "C", "Sentir-se muito mal não explica ir trabalhar normalmente: a causa contradiz o fato."),
    ce("Um texto pode ser coeso e, ainda assim, incoerente.", "Certo", "Conectivos bem usados não garantem que as ideias façam sentido juntas."),
  ]);

  A("compreensao-e-interpretacao-de-textos/reescrita-de-frases-e-paragrafos", [
    aprofundar([
      "### Duas perguntas para cada reescrita",
      "1. **Manteve o sentido?** Atenção a conectivos trocados (causa por consequência), tempos verbais e palavras que restringem (“só”, “apenas”).",
      "2. **Manteve a correção?** Concordância, regência, crase e pontuação da nova frase.",
      "",
      "### Transformações que caem",
      "- **Voz ativa ↔ passiva**: o objeto vira sujeito e o tempo do verbo se mantém (“sancionou” → “foi sancionada”).",
      "- **Oração ↔ expressão**: “Embora estivesse cansado” = “Apesar de estar cansado” = “Apesar do cansaço”.",
      "- **Deslocamento**: adjunto adverbial no início pede vírgula (se for longo).",
    ]),
    PRATICAR,
    q("Qual é a voz passiva analítica de “O prefeito sancionou a lei ontem”?", ["A lei foi sancionada pelo prefeito ontem.", "A lei é sancionada pelo prefeito ontem.", "Sancionou-se a lei ontem.", "O prefeito foi sancionado pela lei ontem.", "A lei tinha sido sancionada ontem."], "A", "O verbo “ser” vai para o mesmo tempo (pretérito perfeito: foi) e o sujeito ativo vira agente da passiva. C é passiva sintética, sem o agente."),
    q("Qual reescrita mantém o sentido de “Embora estivesse cansado, terminou o relatório”?", ["Porque estava cansado, terminou o relatório.", "Apesar de estar cansado, terminou o relatório.", "Estava cansado, portanto terminou o relatório.", "Se estivesse cansado, terminaria o relatório.", "Como estava cansado, não terminou o relatório."], "B", "“Embora” e “apesar de” são concessivos."),
    ce("Substituir “porque” por “portanto” em “Saiu cedo porque tinha prova” preserva o sentido da frase.", "Errado", "“Porque” introduz a causa; “portanto”, a conclusão. A relação se inverte."),
  ]);

  /* ================= ORTOGRAFIA E ACENTUAÇÃO ================= */

  A("ortografia-e-acentuacao/ortografia-oficial", [
    aprofundar([
      "### Regras que resolvem muitas palavras",
      "- **-ês / -esa** em origem e títulos (português, francesa, princesa); **-ez / -eza** em substantivos abstratos vindos de adjetivos (rapidez, beleza).",
      "- **-isar** quando a palavra primitiva tem **s** (pesquisa → pesquisar; análise → analisar; paralisia → paralisar); senão, **-izar** (real → realizar).",
      "- **-agem** em substantivos (viagem, garagem); **-ajem** no verbo (que eles viajem).",
      "",
      "### Pares que confundem",
      "- **mal** (oposto de bem) × **mau** (oposto de bom).",
      "- **a fim de** (finalidade) × **afim** (afinidade).",
      "- **acerca de** (sobre) × **há cerca de** (faz aproximadamente) × **a cerca** (a grade).",
      "- **senão** (do contrário, a não ser) × **se não** (caso não).",
    ]),
    PRATICAR,
    q("Qual palavra está grafada corretamente?", ["paralisar", "analizar", "pesquizar", "excessão", "previlégio"], "A", "Paralisar (de paralisia), analisar (de análise), pesquisar, exceção, privilégio."),
    q("Complete: “Viajei ___ de conhecer a cidade; o ___ humor do guia não atrapalhou.”", ["afim / mal", "a fim / mau", "a fim / mal", "afim / mau", "a fins / mau"], "B", "Finalidade: a fim de. Humor ruim (oposto de bom): mau."),
    ce("Em “Espero que eles viajem amanhã”, a forma “viajem” está correta, pois é verbo; “viagem” é o substantivo.", "Certo", "Verbo com j; substantivo com g."),
  ]);

  A("ortografia-e-acentuacao/acentuacao-grafica", [
    aprofundar([
      "### Hiatos com i e u",
      "Leva acento o **i** ou **u** tônico que forma sílaba sozinho (ou com s) depois de vogal: saída, saúde, baú, país. **Não** leva:",
      "- quando a sílaba seguinte começa com **nh** (rainha, moinho);",
      "- em paroxítonas, quando vem depois de **ditongo** (feiura, baiuca).",
      "",
      "### O que o Acordo mudou",
      "- Ditongos abertos **éi** e **ói** em **paroxítonas** perderam o acento: ideia, assembleia, heroico, jiboia. Em oxítonas continuam: herói, papéis, anéis.",
      "- **êe** e **ôo** perderam: creem, leem, veem, voo, enjoo.",
      "- Caíram os diferenciais **para** (verbo), **pelo**, **polo**, **pera**. Ficaram **pôr** (verbo) e **pôde** (passado).",
      "",
      "### Ter e vir",
      "Ele **tem** / eles **têm**; ele **vem** / eles **vêm**. Derivados: ele **detém** / eles **detêm**.",
    ]),
    PRATICAR,
    q("Qual palavra perdeu o acento com o Acordo Ortográfico?", ["herói", "ideia", "pôde", "papéis", "café"], "B", "Paroxítona com ditongo aberto “ei”: “idéia” virou “ideia”. Herói e papéis são oxítonas e mantêm."),
    q("Qual frase está correta quanto à acentuação?", ["Eles tem razão e vem amanhã.", "Eles têm razão e vêm amanhã.", "Eles têm razão e vem amanhã.", "Eles tém razão e vém amanhã.", "Eles teem razão e veem amanhã."], "B", "Plural de ter e vir leva circunflexo: têm, vêm. (“Veem” é do verbo ver.)"),
    ce("A palavra “saúde” é acentuada porque tem hiato com “u” tônico.", "Certo", "sa-ú-de: o u tônico forma sílaba sozinho depois de vogal."),
    ce("A palavra “rainha” deve ser acentuada, pois tem hiato com “i” tônico.", "Errado", "Antes de nh, o i tônico do hiato não recebe acento."),
  ]);

  A("ortografia-e-acentuacao/uso-do-hifen", [
    aprofundar([
      "### Prefixos: o que vem depois decide",
      "- **Vogal igual** à final do prefixo: hífen (micro-ondas, anti-inflamatório, contra-ataque).",
      "- **Vogal diferente**: junta (autoestima, infraestrutura, extraoficial).",
      "- **r** ou **s** depois de prefixo terminado em vogal: junta e **dobra** (antirrugas, contrassenso, minissaia).",
      "- **h**: hífen (anti-higiênico, super-homem).",
      "- **sub-** antes de **b**, **r** e **h**: hífen (sub-base, sub-região, sub-humano).",
      "- Sempre com hífen: **ex-** (ex-diretor), **vice-** (vice-prefeito), e **pós-, pré-, pró-** tônicos (pós-graduação).",
      "- **co-** em geral junta: coautor, coerdeiro, cooperar.",
      "",
      "### Compostos com elemento de ligação",
      "Perderam o hífen: dia a dia, fim de semana, mão de obra, pé de moleque. Exceções consagradas: água-de-colônia, cor-de-rosa, arco-da-velha.",
    ]),
    PRATICAR,
    q("Qual grafia está INCORRETA segundo o Acordo Ortográfico?", ["micro-ondas", "anti-inflamatório", "auto-estima", "infraestrutura", "contrarregra"], "C", "Prefixo terminado em vogal + vogal diferente: junta. Escreve-se autoestima."),
    ce("Pelo Acordo Ortográfico, escreve-se “fim de semana” sem hífen.", "Certo", "Compostos com elemento de ligação perderam o hífen, salvo exceções consagradas."),
    q("Qual palavra está corretamente grafada?", ["subregião", "sub-região", "sub região", "subrregião", "su-bregião"], "B", "Sub- seguido de r: hífen (sub-região)."),
  ]);

  A("ortografia-e-acentuacao/porque-por-que-porque-e-por-que", [
    aprofundar([
      "### Atalho por substituição",
      "- **por que** = “por qual motivo” ou “pelo qual / pela qual” (“o caminho por que passei”).",
      "- **por quê** = o mesmo, mas **no fim** da frase ou antes de pausa forte.",
      "- **porque** = “pois”, “uma vez que” (explicação ou causa).",
      "- **porquê** = substantivo, com artigo ou determinante (“o porquê”, “um porquê”, “os porquês”).",
    ]),
    PRATICAR,
    q("Complete: “___ você faltou? Não sei ___. Faltei ___ estava doente. Quero entender o ___ da falta.”", ["Porque / por que / por quê / porquê", "Por que / por quê / porque / porquê", "Por quê / porque / por que / porquê", "Por que / porque / por quê / porquê", "Porquê / por quê / porque / por que"], "B",
      "Pergunta no início: por que; fim de frase: por quê; causa: porque; substantivo: porquê."),
    ce("Em “Esse é o caminho por que passei”, “por que” equivale a “pelo qual”.", "Certo", "É preposição “por” + pronome relativo “que”."),
  ]);

  A("ortografia-e-acentuacao/paronimos-e-homonimos", [
    aprofundar([
      "### Os pares do serviço público",
      "- **sessão** (reunião, tempo de duração) × **seção/secção** (divisão, setor) × **cessão** (ato de ceder).",
      "- **mandado** (ordem judicial) × **mandato** (período de um cargo eletivo, procuração).",
      "- **deferir** (aprovar, atender) × **diferir** (adiar; ser diferente).",
      "- **ratificar** (confirmar) × **retificar** (corrigir).",
      "- **eminente** (ilustre) × **iminente** (prestes a acontecer).",
      "- **infringir** (violar regra) × **infligir** (aplicar pena).",
      "- **tráfego** (trânsito) × **tráfico** (comércio ilegal).",
      "- **descrição** (ato de descrever) × **discrição** (reserva).",
    ]),
    PRATICAR,
    q("Complete: “Durante a ___ plenária, discutiu-se a ___ do imóvel ao município, organizada pela ___ de patrimônio.”", ["seção / sessão / cessão", "sessão / cessão / seção", "cessão / seção / sessão", "sessão / seção / cessão", "seção / cessão / sessão"], "B", "Reunião: sessão. Ato de ceder: cessão. Setor: seção."),
    q("Complete: “O juiz ___ o pedido e o ___ de segurança foi expedido antes do fim do ___ do vereador.”", ["deferiu / mandado / mandato", "diferiu / mandato / mandado", "deferiu / mandato / mandado", "diferiu / mandado / mandato", "deferiu / mandado / mandado"], "A", "Aprovar: deferir. Ordem judicial: mandado. Período do cargo: mandato."),
    ce("“Ratificar” significa corrigir, e “retificar” significa confirmar.", "Errado", "É o contrário: ratificar = confirmar; retificar = corrigir (reto)."),
  ]);

  /* ================= MORFOLOGIA ================= */

  A("morfologia/estrutura-e-formacao-de-palavras", [
    aprofundar([
      "### Derivação",
      "- **Prefixal** (infeliz) e **sufixal** (felizmente).",
      "- **Prefixal e sufixal**: tem prefixo e sufixo, mas a palavra existe sem um deles (in-feliz-mente: existe “felizmente”).",
      "- **Parassintética**: prefixo e sufixo entram **juntos**; sem um deles a palavra não existe (en-tard-ecer: não há “entarde” nem “tardecer”).",
      "- **Regressiva**: a palavra encurta, em geral substantivo vindo de verbo (debater → debate; atacar → ataque).",
      "- **Imprópria**: muda a classe sem mudar a forma (“o jantar”, “um não”).",
      "",
      "### Composição",
      "- **Justaposição**: as palavras se juntam sem perder som (girassol, passatempo, guarda-chuva).",
      "- **Aglutinação**: alguma perde som (plano + alto = planalto; água + ardente = aguardente).",
      "",
      "### Outros",
      "Hibridismo (automóvel: grego + latim), abreviação (foto, moto), sigla (INSS), onomatopeia (tique-taque).",
    ]),
    PRATICAR,
    q("A palavra “entardecer” é formada por:", ["derivação prefixal", "derivação sufixal", "parassíntese", "composição por justaposição", "derivação regressiva"], "C", "Prefixo en- e sufixo -ecer entram ao mesmo tempo; nem “entarde” nem “tardecer” existem."),
    q("A palavra “planalto” é formada por:", ["justaposição", "aglutinação", "derivação imprópria", "hibridismo", "parassíntese"], "B", "Plano + alto, com perda do “o” de plano."),
    ce("Em “O jantar estava ótimo”, a palavra “jantar” sofreu derivação imprópria.", "Certo", "Um verbo passou a substantivo (veio acompanhado de artigo) sem mudar de forma."),
  ]);

  A("morfologia/classes-de-palavras-visao-geral", [
    aprofundar([
      "### Variáveis e invariáveis",
      "- **Variáveis** (6): substantivo, adjetivo, artigo, numeral, pronome e verbo.",
      "- **Invariáveis** (4): advérbio, preposição, conjunção e interjeição.",
      "",
      "### A classe depende da frase",
      "- **a**: artigo (a prova), preposição (vou a Curitiba), pronome (eu a vi).",
      "- **que**: pronome relativo (o livro que li), conjunção integrante (espero que venha), conjunção explicativa (estude, que a prova vem aí), advérbio de intensidade (que bonito!).",
      "- **se**: conjunção condicional (se chover), integrante (não sei se vou), pronome (vendem-se casas).",
    ]),
    PRATICAR,
    q("Em “Espero que você venha”, a palavra “que” é:", ["pronome relativo", "conjunção integrante", "advérbio de intensidade", "preposição", "pronome interrogativo"], "B", "Introduz uma oração que completa o verbo esperar (oração substantiva objetiva direta)."),
    q("Em “Entreguei a ela o documento”, a palavra “a” é:", ["artigo", "preposição", "pronome oblíquo", "pronome demonstrativo", "conjunção"], "B", "Liga o verbo entregar ao complemento “ela” (quem entrega, entrega algo a alguém)."),
    ce("As classes invariáveis são advérbio, preposição, conjunção e interjeição.", "Certo", "As outras seis flexionam."),
  ]);

  A("morfologia/substantivo-adjetivo-e-artigo", [
    aprofundar([
      "### Plural dos compostos",
      "- **Substantivo + substantivo** ou **substantivo + adjetivo**: os dois vão ao plural (cachorros-quentes, segundas-feiras, guardas-noturnos).",
      "- **Verbo + substantivo**: só o substantivo (guarda-chuvas, beija-flores).",
      "- **Palavra invariável + variável**: só a variável (abaixo-assinados, vice-diretores).",
      "",
      "### Gênero que derruba",
      "- **o grama** (unidade de peso) × a grama (planta). **o** champanha, **o** dó, **a** cal, **a** omoplata (há gramáticas que aceitam o omoplata).",
      "- **Sobrecomum**: uma forma e um artigo para os dois sexos (a criança, a vítima, o indivíduo).",
      "- **Comum de dois gêneros**: o artigo muda (o/a estudante, o/a colega).",
      "",
      "### Adjetivos de cor",
      "Cor indicada por **substantivo** fica invariável: camisas **cinza**, blusas **laranja**, gravatas **azul-marinho**.",
    ]),
    PRATICAR,
    q("Qual plural está INCORRETO?", ["guardas-noturnos", "guarda-chuvas", "segundas-feiras", "cachorro-quentes", "abaixo-assinados"], "D", "Substantivo + adjetivo: os dois flexionam. O certo é cachorros-quentes."),
    q("Complete: “Comprei ___ de queijo.”", ["duzentas gramas", "duzentos gramas", "duzentas grama", "duzentos grama", "duzentes gramas"], "B", "Como unidade de massa, grama é masculino: o grama, duzentos gramas."),
    ce("“Criança” é um substantivo sobrecomum.", "Certo", "“A criança” serve para menino e menina."),
  ]);

  A("morfologia/numeral", [
    aprofundar([
      "### Leis, decretos e regulamentos",
      "Artigos, parágrafos e itens: **ordinal até o nono** (art. 1º, primeiro; § 9º, nono) e **cardinal a partir do dez** (art. 10, dez; art. 21, vinte e um).",
      "",
      "### Séculos, reis e papas",
      "Romanos: ordinal até **décimo** e cardinal depois (Pio X, “décimo”; século XXI, “vinte e um”). Capítulos e páginas: cardinal (capítulo 3, “três”).",
      "",
      "### Tipos",
      "Cardinais (dois), ordinais (segundo), multiplicativos (dobro, triplo) e fracionários (meio, terço).",
      "",
      "### “Ambos os”",
      "Na norma-padrão: “ambos **os** candidatos” (com artigo).",
    ]),
    PRATICAR,
    q("Como se leem “Art. 9º” e “Art. 10” da Lei 8.112?", ["nono e décimo", "nove e dez", "nono e dez", "nove e décimo", "nono e décimo primeiro"], "C", "Ordinal até o nono; cardinal a partir do dez."),
    ce("Em “século XXI”, lê-se “século vinte e um”, com numeral cardinal.", "Certo", "Depois de décimo, usa-se o cardinal."),
    q("Em “Ganhou o triplo do valor”, o numeral é:", ["cardinal", "ordinal", "multiplicativo", "fracionário", "coletivo"], "C", "Dobro, triplo, quádruplo são multiplicativos."),
  ]);

  A("morfologia/pronomes-classificacao-e-emprego", [
    aprofundar([
      "### “Para mim” × “para eu”",
      "Quando o pronome é **sujeito de um infinitivo**, usa-se o reto: “Trouxe o livro para **eu** ler”. Sem verbo depois, oblíquo: “Trouxe o livro para **mim**”. Depois de preposição, sempre oblíquo: “entre **mim** e você”.",
      "",
      "### O, a, lhe",
      "**o/a** para objeto direto (“Encontrei-**o**”); **lhe** para objeto indireto de pessoa (“Obedeço-**lhe**”).",
      "",
      "### Demonstrativos",
      "- **Espaço**: este (perto de quem fala), esse (perto de quem ouve), aquele (longe dos dois).",
      "- **No texto**: **este** anuncia o que vem; **esse** retoma o que já foi dito.",
      "",
      "### Relativos",
      "- **cujo** indica posse e **não** aceita artigo depois: “o servidor **cujo** filho…” (nunca “cujo o”).",
      "- **onde** só para lugar físico: “a cidade onde nasci”. Para situação, use “em que”.",
    ]),
    PRATICAR,
    q("Qual frase segue a norma-padrão?", ["Trouxe o livro para mim ler.", "Trouxe o livro para eu ler.", "Isso fica entre eu e você.", "Encontrei ele na rua.", "Obedeço-o sempre."], "B", "Sujeito de infinitivo: pronome reto (eu). Entre mim e você; encontrei-o; obedeço-lhe."),
    q("Qual frase usa corretamente o pronome relativo?", ["O servidor cujo o filho passou está feliz.", "O servidor cujo filho passou está feliz.", "O servidor que o filho dele passou está feliz.", "O servidor onde o filho passou está feliz.", "O servidor cuja filho passou está feliz."], "B", "“Cujo” concorda com o possuído (filho) e dispensa artigo."),
    ce("Em “Esta é a cidade onde nasci”, o uso de “onde” está correto.", "Certo", "“Onde” retoma um lugar físico."),
  ]);

  A("morfologia/verbos-tempos-modos-e-vozes", [
    aprofundar([
      "### Futuro do subjuntivo que derruba",
      "Com **ver**, **vir**, **ter**, **pôr**, **fazer**, **intervir** e derivados, o futuro do subjuntivo não é igual ao infinitivo:",
      "- quando eu **vir** (ver), se ele **vier** (vir), se nós **tivermos**, quando você **puser**, se eles **fizerem**, se ele **intervier**, se ele **mantiver**.",
      "",
      "### Correlação de tempos",
      "- Se + pretérito imperfeito do subjuntivo → futuro do pretérito: “Se eu **tivesse**, **compraria**.”",
      "- Se + futuro do subjuntivo → futuro do presente: “Se eu **tiver**, **comprarei**.”",
      "",
      "### Vozes",
      "- **Passiva analítica**: ser + particípio (“Casas são vendidas”).",
      "- **Passiva sintética**: verbo transitivo direto + **se** (“Vendem-**se** casas”): o verbo concorda com o sujeito (casas).",
      "- **Índice de indeterminação**: verbo **sem** objeto direto + se (“Precisa-se de técnicos”): fica no **singular**.",
    ]),
    PRATICAR,
    q("Qual frase está correta?", ["Quando você ver o diretor, avise-me.", "Quando você vir o diretor, avise-me.", "Se ele vir amanhã, conversamos.", "Se ele intervir, a decisão muda.", "Quando eu pôr o arquivo na pasta, aviso."], "B", "Futuro do subjuntivo de ver: vir. De vir: vier; de intervir: intervier; de pôr: puser."),
    q("Complete: “Se ele ___ na reunião, a decisão ___.”", ["intervir / muda", "intervier / mudará", "interviesse / mudará", "intervir / mudaria", "intervém / mudasse"], "B", "Futuro do subjuntivo (intervier) combina com futuro do presente (mudará)."),
    q("Qual frase está correta quanto à concordância com o “se”?", ["Aluga-se salas comerciais.", "Alugam-se salas comerciais.", "Precisam-se de técnicos.", "Consertam-se de relógios.", "Vende-se apartamentos."], "B", "Alugar é transitivo direto: “salas” é o sujeito e o verbo vai ao plural."),
    ce("Em “Precisa-se de técnicos”, o verbo deve ir para o plural, concordando com “técnicos”.", "Errado", "“Precisar de” é transitivo indireto: o “se” indetermina o sujeito e o verbo fica no singular."),
  ]);

  A("morfologia/adverbio", [
    aprofundar([
      "### Advérbios que viram pegadinha",
      "- **meio** como advérbio (= um pouco) não varia: “Ela estava **meio** cansada”. Como numeral, varia: “meia hora”.",
      "- **bastante** varia quando acompanha substantivo (“**bastantes** candidatos”) e não varia quando modifica adjetivo ou verbo (“estavam **bastante** cansados”).",
      "- **menos** nunca varia: não existe “menas”.",
      "",
      "### Vários advérbios em -mente",
      "Na sequência, o sufixo pode ficar só no último: “Falou **clara e objetivamente**”.",
    ]),
    PRATICAR,
    q("Qual frase está correta?", ["Ela estava meia cansada.", "Ela estava meio cansada.", "Havia menas pessoas.", "Eles estavam bastantes cansados.", "Ela comeu meio pizza."], "B", "Meio, advérbio, é invariável. Menos não varia; bastante, junto de adjetivo, também não."),
    ce("Em “Havia bastantes candidatos”, a forma “bastantes” está correta, pois concorda com o substantivo.", "Certo", "Junto de substantivo, “bastante” equivale a “muitos” e varia."),
  ]);

  A("morfologia/preposicao", [
    aprofundar([
      "### Essenciais e acidentais",
      "- **Essenciais** (só funcionam como preposição): a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás.",
      "- **Acidentais** (outras classes que às vezes funcionam como preposição): conforme, segundo, durante, como, mediante, exceto, salvo.",
      "",
      "### Relações de sentido",
      "A mesma preposição muda de sentido: “morreu **de** fome” (causa), “copo **de** vidro” (matéria), “saiu **de** casa” (origem), “livro **de** Ana” (posse).",
    ]),
    PRATICAR,
    q("Em “Morreu de fome”, a preposição “de” estabelece relação de:", ["posse", "matéria", "causa", "lugar", "finalidade"], "C", "A fome é a causa."),
    ce("“Durante” é uma preposição acidental.", "Certo", "Vem do particípio do verbo durar e funciona como preposição."),
  ]);

  A("morfologia/conjuncao", [
    aprofundar([
      "### O “pois” de duas caras",
      "- **Antes** do verbo, no início da oração: **explicativo** (“Está cansado, **pois** trabalhou muito”).",
      "- **Depois** do verbo, entre vírgulas: **conclusivo** (“Trabalhou muito; está, **pois**, cansado”).",
      "",
      "### Subordinativas adverbiais que mais caem",
      "- **Concessivas**: embora, ainda que, mesmo que, conquanto, se bem que (verbo no subjuntivo).",
      "- **Proporcionais**: à medida que, à proporção que, quanto mais… mais.",
      "- **Conformativas**: conforme, segundo, consoante, como (= conforme).",
      "- **Consecutivas**: tão… que, tanto… que, de modo que.",
      "- **Finais**: para que, a fim de que.",
      "",
      "Não confunda **à medida que** (proporção) com **na medida em que** (causa).",
    ]),
    PRATICAR,
    q("Em “Estudou, logo passou”, a conjunção “logo” é:", ["aditiva", "adversativa", "conclusiva", "explicativa", "alternativa"], "C", "Introduz a conclusão do que foi dito."),
    q("Em “Embora chovesse, saímos”, a conjunção pode ser substituída, sem mudar o sentido, por:", ["Porque", "Ainda que", "Logo que", "Caso", "Assim que"], "B", "As duas são concessivas."),
    ce("Em “Ele está cansado, pois trabalhou muito”, a conjunção “pois” é conclusiva.", "Errado", "Antes do verbo, no início da oração, “pois” é explicativa."),
    q("Em “À medida que estudava, aprendia mais”, a oração destacada expressa:", ["causa", "concessão", "proporção", "condição", "finalidade"], "C", "À medida que = à proporção que."),
  ]);

  A("morfologia/interjeicao", [
    aprofundar([
      "### O sentido vem do contexto",
      "“Ah!” pode ser alegria, alívio, decepção ou entendimento. Na prova, leia a frase inteira e a situação.",
      "",
      "### Locução interjetiva",
      "Duas ou mais palavras com valor de interjeição: “Ai de mim!”, “Meu Deus!”, “Quem me dera!”, “Cruz-credo!”.",
    ]),
    PRATICAR,
    q("Em “Ufa! Terminei o relatório a tempo”, a interjeição expressa:", ["dor", "alívio", "espanto", "chamamento", "advertência"], "B", "O contexto (terminar a tempo) mostra alívio."),
    ce("“Quem me dera!” é uma locução interjetiva que expressa desejo.", "Certo", "Várias palavras com valor de uma interjeição."),
  ]);
})();
