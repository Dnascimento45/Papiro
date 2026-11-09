/* Língua Portuguesa · Interpretação, Ortografia e Acentuação, Morfologia. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "portugues", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const IT = "Compreensão e Interpretação de Textos";
  const OA = "Ortografia e Acentuação";
  const MO = "Morfologia";
  const ACORDO = { titulo: "Vocabulário Ortográfico da Língua Portuguesa (VOLP) · Academia Brasileira de Letras", url: "https://www.academia.org.br/nossa-lingua/busca-no-vocabulario" };

  /* ================= COMPREENSÃO E INTERPRETAÇÃO ================= */

  A(IT, "Compreensão x interpretação", {
    resumo: "Compreender é ler o que está escrito; interpretar é tirar conclusões autorizadas pelo texto.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "- **Compreensão**: entender o que o texto **diz** de forma explícita. Perguntas do tipo \"segundo o texto…\", \"o autor afirma que…\".",
        "- **Interpretação**: concluir o que o texto **permite deduzir**, sem que esteja escrito. Perguntas do tipo \"infere-se que…\", \"depreende-se que…\".",
        "",
        "A regra de ouro: a resposta está **no texto**, não na sua opinião nem no seu conhecimento de mundo."
      ]},
      { tipo: "tabela", titulo: "Erros que as bancas exploram", cabecalho: ["Erro", "O que acontece"], linhas: [
        ["Extrapolação", "a alternativa vai além do que o texto diz (\"sempre\", \"todos\", \"nunca\")."],
        ["Redução", "a alternativa pega só uma parte e a apresenta como ideia principal."],
        ["Contradição", "a alternativa diz o oposto do texto, às vezes com as mesmas palavras."]
      ]},
      { tipo: "passos", titulo: "Roteiro de leitura na prova", itens: [
        "Leia o enunciado da questão antes do texto, para saber o que procurar.",
        "Leia o texto inteiro uma vez, sem marcar nada.",
        "Volte ao trecho citado e leia as frases antes e depois dele.",
        "Elimine as alternativas com palavras absolutas que o texto não sustenta."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Texto: \"A digitalização reduziu filas em muitos órgãos, mas parte da população ainda depende do atendimento presencial.\" Infere-se do texto que:", alternativas: ["a digitalização acabou com as filas.", "todos os cidadãos preferem o atendimento digital.", "manter o atendimento presencial ainda é necessário.", "o atendimento presencial é pior que o digital.", "nenhum órgão digitalizou seus serviços."], correta: "C", comentario: "Se parte da população depende do presencial, ele ainda é necessário. A e B extrapolam (\"acabou\", \"todos\"); D é opinião que o texto não dá; E contradiz o texto." }
    ]
  });

  A(IT, "Ideia central e informações explícitas", {
    resumo: "Achar o tema, a tese e as informações que o texto afirma diretamente.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "- **Tema**: o assunto geral (ex.: \"trabalho remoto\").",
        "- **Ideia central ou tese**: o que o autor defende sobre o tema (ex.: \"o trabalho remoto exige novas formas de gestão\").",
        "- **Ideias secundárias**: argumentos, exemplos e dados que sustentam a tese.",
        "",
        "Na dissertação, a tese costuma aparecer no **primeiro parágrafo** e ser retomada na **conclusão**. O título também dá pistas."
      ]},
      { tipo: "dica", texto: "Teste a alternativa da \"ideia central\": ela precisa valer para o texto **inteiro**. Se só resume um parágrafo, é ideia secundária." },
      { tipo: "exemplo", titulo: "Exemplo", enunciado: "\"Ler todos os dias melhora o vocabulário. Também treina a atenção e ajuda a escrever melhor. Por isso, quem estuda para concurso deve incluir leitura na rotina.\" Qual a ideia central?", resolucao: ["As duas primeiras frases são argumentos. A conclusão (\"por isso…\") traz a tese."], resposta: "Quem estuda para concurso deve ler diariamente." },
      { tipo: "questao", banca: Q, enunciado: "No texto do exemplo acima, a frase \"Ler todos os dias melhora o vocabulário\" é:", alternativas: ["a tese do texto", "um argumento que sustenta a tese", "uma conclusão", "um contra-argumento", "uma informação irrelevante"], correta: "B", comentario: "É um dos motivos apresentados para defender a tese (incluir a leitura na rotina)." }
    ]
  });

  A(IT, "Inferências, pressupostos e subentendidos", {
    resumo: "O que o texto diz nas entrelinhas: pressuposto é marcado na frase; subentendido depende do contexto.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "- **Pressuposto**: informação que a própria frase carrega, marcada por palavras como \"ainda\", \"já\", \"deixou de\", \"voltou a\", \"também\". É **inegável**: continua valendo mesmo se a frase for negada.",
        "- **Subentendido**: insinuação que depende do contexto e de quem ouve. O falante pode negar que quis dizer aquilo.",
        "- **Inferência**: qualquer conclusão lógica autorizada pelo texto."
      ]},
      { tipo: "tabela", titulo: "Marcadores de pressuposto", cabecalho: ["Frase", "Pressuposto"], linhas: [
        ["Pedro **deixou de** fumar.", "Pedro fumava."],
        ["O processo **ainda** não foi julgado.", "Espera-se que seja julgado."],
        ["Ana **também** foi aprovada.", "Outra pessoa foi aprovada."],
        ["**Voltou a** chover.", "Já tinha chovido antes."]
      ]},
      { tipo: "exemplo", titulo: "Subentendido", enunciado: "Visitante, num gabinete abafado: \"Está quente aqui, não?\"", resolucao: ["Subentende-se um pedido para abrir a janela ou ligar o ar. Mas quem falou pode dizer que só comentou o tempo."], resposta: "Pedido implícito, negável" },
      { tipo: "questao", banca: Q, enunciado: "Na frase \"A prefeitura voltou a oferecer o curso gratuito\", pressupõe-se que:", alternativas: ["o curso é ruim.", "o curso já tinha sido oferecido antes.", "a prefeitura nunca ofereceu cursos.", "o curso será pago no futuro.", "ninguém se inscreveu."], correta: "B", comentario: "\"Voltou a\" pressupõe que a ação já aconteceu antes." }
    ]
  });

  A(IT, "Tipologia textual", {
    resumo: "Narração, descrição, dissertação, injunção e exposição: o modo de organizar o texto.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: ["**Tipo textual** é a estrutura linguística predominante. Existem poucos tipos, e um mesmo texto pode misturar vários."] },
      { tipo: "tabela", titulo: "Os tipos e suas marcas", cabecalho: ["Tipo", "Objetivo", "Marcas"], linhas: [
        ["Narrativo", "contar fatos em sequência", "personagens, tempo, verbos no pretérito"],
        ["Descritivo", "caracterizar seres, lugares, objetos", "adjetivos, verbos de estado"],
        ["Dissertativo-argumentativo", "defender um ponto de vista", "tese, argumentos, conectivos de conclusão"],
        ["Expositivo", "informar e explicar, sem tomar partido", "definições, dados, linguagem objetiva"],
        ["Injuntivo (instrucional)", "orientar o leitor a agir", "verbos no imperativo ou infinitivo"]
      ]},
      { tipo: "atencao", texto: "Não confunda **tipo** com **gênero**. Uma receita (gênero) é predominantemente **injuntiva** (tipo). Uma notícia (gênero) mistura narração e exposição." },
      { tipo: "questao", banca: Q, enunciado: "\"Acesse o portal, clique em Serviços e preencha o formulário com seus dados.\" O tipo textual predominante é:", alternativas: ["narrativo", "descritivo", "injuntivo", "argumentativo", "expositivo"], correta: "C", comentario: "Verbos no imperativo (acesse, clique, preencha) orientando uma ação: tipo injuntivo." }
    ]
  });

  A(IT, "Gêneros textuais", {
    resumo: "As formas concretas de texto que circulam na sociedade: notícia, crônica, ofício, edital…",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Gêneros textuais** são os textos como eles existem no dia a dia, com função social, estrutura e linguagem próprias. São inúmeros: notícia, reportagem, editorial, artigo de opinião, crônica, carta, e-mail, ofício, edital, receita, bula, charge, tirinha…"
      ]},
      { tipo: "tabela", titulo: "Gêneros que mais caem", cabecalho: ["Gênero", "Característica"], linhas: [
        ["Notícia", "relata um fato recente com objetividade; responde a o quê, quem, quando, onde, como e por quê."],
        ["Editorial", "opinião do veículo de comunicação, sem assinatura."],
        ["Artigo de opinião", "opinião de um autor que assina o texto."],
        ["Crônica", "texto curto sobre o cotidiano, com tom leve, humor ou reflexão."],
        ["Charge e tirinha", "humor crítico com imagem; exige ler texto e desenho juntos."],
        ["Ofício", "correspondência oficial entre órgãos públicos (ver Redação Oficial)."]
      ]},
      { tipo: "questao", banca: Q, enunciado: "Um texto curto, publicado em jornal, que comenta de forma leve e reflexiva um episódio banal do dia a dia, assinado pelo autor, é típico do gênero:", alternativas: ["editorial", "notícia", "crônica", "relatório", "ofício"], correta: "C", comentario: "Tema cotidiano, tom leve e reflexivo e autoria assinada caracterizam a crônica. O editorial não é assinado e trata de temas de interesse público." }
    ]
  });

  A(IT, "Coesão textual", {
    resumo: "As ligações gramaticais do texto: retomadas por pronomes e sinônimos e conectivos.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "**Coesão** é a costura do texto: as palavras que ligam frases e parágrafos.",
        "",
        "- **Coesão referencial**: retomar algo já dito sem repetir. Por pronomes (\"ele\", \"isso\", \"o qual\"), sinônimos, expressões (\"o servidor\" → \"o funcionário\") ou elipse (omissão).",
        "- **Coesão sequencial**: ligar ideias com **conectivos**, que indicam a relação de sentido."
      ]},
      { tipo: "tabela", titulo: "Conectivos e relações", cabecalho: ["Relação", "Conectivos"], linhas: [
        ["Adição", "e, além disso, também, não só… mas também"],
        ["Oposição", "mas, porém, contudo, todavia, no entanto, entretanto"],
        ["Concessão", "embora, ainda que, mesmo que, apesar de"],
        ["Causa", "porque, pois, já que, visto que, uma vez que"],
        ["Conclusão", "logo, portanto, por isso, assim, então"],
        ["Condição", "se, caso, desde que, contanto que"],
        ["Finalidade", "para que, a fim de que"],
        ["Tempo", "quando, enquanto, assim que, logo que"]
      ]},
      { tipo: "exemplo", titulo: "Troca de conectivo", enunciado: "Reescreva sem mudar o sentido: \"O sistema ficou fora do ar, **mas** o atendimento continuou.\"", resolucao: ["\"Mas\" indica oposição. Pode virar: \"O sistema ficou fora do ar; **contudo**, o atendimento continuou\".", "Ou, com concessão: \"**Embora** o sistema tenha ficado fora do ar, o atendimento continuou.\" (o verbo vai para o subjuntivo)."], resposta: "Usar outro conectivo de oposição ou concessão" },
      { tipo: "questao", banca: Q, enunciado: "Em \"Ele estudou muito; portanto, foi aprovado\", o conectivo \"portanto\" pode ser trocado, sem mudar o sentido, por:", alternativas: ["porém", "logo", "embora", "porque", "caso"], correta: "B", comentario: "\"Portanto\" indica conclusão, como \"logo\"." }
    ]
  });

  A(IT, "Coerência textual", {
    resumo: "A lógica do sentido: o texto não se contradiz e faz sentido no mundo.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Coerência** é o texto fazer sentido: as ideias não se contradizem, seguem uma progressão e combinam com o conhecimento de mundo.",
        "",
        "Um texto pode ser **coeso e incoerente**: \"Choveu muito, **por isso** a represa secou.\" O conectivo está bem usado, mas a relação de causa não faz sentido."
      ]},
      { tipo: "tabela", titulo: "Coesão × coerência", cabecalho: ["", "Coesão", "Coerência"], linhas: [["Plano", "da forma (gramatical)", "do sentido (lógico)"], ["Aparece em", "pronomes, conectivos, sinônimos", "relação entre ideias e com o mundo"], ["Pergunta", "as partes estão ligadas?", "faz sentido?"]] },
      { tipo: "questao", banca: Q, enunciado: "Qual frase apresenta problema de coerência?", alternativas: ["Como estava doente, faltou ao trabalho.", "Estudou pouco; mesmo assim, foi aprovado.", "Ganhou na loteria, por isso ficou mais pobre.", "Embora chovesse, saiu sem guarda-chuva.", "Se terminar cedo, irá à reunião."], correta: "C", comentario: "Ganhar na loteria como causa de empobrecer contraria o conhecimento de mundo, a menos que o texto explicasse. As outras relações são lógicas." }
    ]
  });

  A(IT, "Reescrita de frases e parágrafos", {
    resumo: "Trocar palavras ou a ordem da frase mantendo o sentido e a correção gramatical.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Nas questões de reescrita, a nova versão precisa manter **duas coisas**: o **sentido** original e a **correção gramatical**. Muitas alternativas erram só em uma delas.",
        "",
        "O que conferir em cada alternativa:",
        "- O conectivo novo tem a mesma relação de sentido?",
        "- A troca exige mudar o modo do verbo? (\"embora\" pede subjuntivo)",
        "- A concordância e a regência continuam certas?",
        "- A pontuação foi ajustada (vírgulas de oração deslocada)?"
      ]},
      { tipo: "exemplo", titulo: "Voz ativa e passiva", enunciado: "Reescreva na voz passiva: \"A comissão analisou os recursos.\"", resolucao: ["Passiva analítica: \"Os recursos **foram analisados** pela comissão.\"", "Passiva sintética: \"Analisaram-se os recursos.\" (o verbo concorda com \"recursos\")"], resposta: "Os recursos foram analisados pela comissão." },
      { tipo: "atencao", texto: "Trocar \"mas\" por \"embora\" exige reorganizar a frase e mudar o verbo: \"Estudou, mas não passou\" → \"Embora tenha estudado, não passou\"." },
      { tipo: "questao", banca: Q, enunciado: "Qual reescrita mantém o sentido e a correção de \"Caso o documento esteja incompleto, o pedido será indeferido\"?", alternativas: ["Se o documento estiver incompleto, o pedido será indeferido.", "Embora o documento esteja incompleto, o pedido será indeferido.", "Porque o documento está incompleto, o pedido será indeferido.", "Se o documento está incompleto, o pedido seria indeferido.", "Mesmo que o documento esteja completo, o pedido será indeferido."], correta: "A", comentario: "\"Caso\" e \"se\" expressam condição. Com \"se\", o verbo vai para o futuro do subjuntivo (estiver). B muda para concessão, C para causa, D erra a correlação de tempos, E muda o sentido." }
    ]
  });

  /* ================= ORTOGRAFIA E ACENTUAÇÃO ================= */

  A(OA, "Ortografia oficial", {
    resumo: "Uso de letras que confundem: s/z, x/ch, g/j, ç/ss e o alfabeto de 26 letras.",
    incidencia: "média",
    fontes: [ACORDO],
    blocos: [
      { tipo: "texto", texto: [
        "A ortografia segue o **Acordo Ortográfico de 1990**, obrigatório no Brasil desde 2016. O alfabeto tem **26 letras** (K, W e Y voltaram oficialmente).",
        "",
        "Em caso de dúvida real sobre a grafia de uma palavra, a referência é o **VOLP**, da Academia Brasileira de Letras."
      ]},
      { tipo: "tabela", titulo: "Regras práticas", cabecalho: ["Use", "Quando", "Exemplos"], linhas: [
        ["-ês, -esa", "origem, nacionalidade e títulos", "português, francesa, marquesa"],
        ["-ez, -eza", "substantivos vindos de adjetivos", "rapidez (rápido), beleza (belo)"],
        ["-isar", "o radical já tem s", "análise → analisar; pesquisa → pesquisar"],
        ["-izar", "o radical não tem s", "real → realizar; útil → utilizar"],
        ["x", "depois de ditongo e de \"en-\" inicial", "caixa, peixe, enxada, enxugar"],
        ["ch", "exceções a decorar", "encher (de cheio), encharcar (de charco)"],
        ["j", "verbos terminados em -jar e derivados", "viajar → viajem (verbo); ver também \"viagem\" (substantivo)"],
        ["-ção / -são", "verbo com -ter, -der → -ção/-são varia", "deter → detenção; compreender → compreensão"]
      ]},
      { tipo: "atencao", titulo: "Pares que confundem", texto: [
        "- **viagem** (substantivo: \"a viagem foi longa\") × **viajem** (verbo: \"que eles viajem\").",
        "- **exceção**, **excesso**, **exceto** (com xc).",
        "- **privilégio**, **beneficente**, **mendigo**, **cabeleireiro**, **asterisco**: grafias frequentemente erradas."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Assinale a frase escrita corretamente:", alternativas: ["Espero que eles viagem amanhã.", "A analize do processo terminou.", "Houve excesso de exceções no relatório.", "O cabelereiro atendeu cedo.", "A pesquiza foi publicada."], correta: "C", comentario: "Excesso e exceções estão corretas. Correções: viajem (verbo), análise, cabeleireiro, pesquisa." }
    ]
  });

  A(OA, "Acentuação gráfica", {
    resumo: "Regras de oxítonas, paroxítonas e proparoxítonas e o que mudou com o Acordo.",
    incidencia: "alta",
    fontes: [ACORDO],
    blocos: [
      { tipo: "texto", texto: ["Primeiro descubra a **sílaba tônica** (a mais forte). Depois aplique a regra da posição dela."] },
      { tipo: "tabela", titulo: "As regras", cabecalho: ["Tipo", "Tônica", "Acentua quando termina em…", "Exemplos"], linhas: [
        ["Proparoxítona", "antepenúltima", "**todas** são acentuadas", "público, árvore, lâmpada"],
        ["Paroxítona", "penúltima", "l, n, r, x, ps, ã(s), ão(s), i(s), u(s), um, uns, on(s), ditongo", "fácil, hífen, caráter, tórax, órfã, júri, vírus, álbum, pônei"],
        ["Oxítona", "última", "a(s), e(s), o(s), em, ens", "sofá, você, avó, também, parabéns"],
        ["Monossílabo tônico", "única", "a(s), e(s), o(s)", "pá, pé, nó, pés"]
      ]},
      { tipo: "texto", titulo: "O que mudou com o Acordo de 1990", texto: [
        "- Caiu o acento dos ditongos abertos **ei** e **oi** em paroxítonas: idéia → **ideia**, heróico → **heroico**. (Nas oxítonas continua: papéis, herói.)",
        "- Caiu o acento de **êem** e **ôo**: lêem → **leem**, vôo → **voo**.",
        "- Caiu o **trema**: lingüiça → **linguiça** (fica só em nomes estrangeiros, como Müller).",
        "- Caíram acentos diferenciais como pára (verbo) → **para**. Continuam: **pôde** (passado) × pode; **pôr** (verbo) × por."
      ]},
      { tipo: "dica", texto: "Truque das paroxítonas: elas são acentuadas justamente quando **não** terminam como as oxítonas acentuadas. Por isso \"caderno\" (termina em o) não tem acento, mas \"fácil\" (termina em l) tem." },
      { tipo: "questao", banca: Q, enunciado: "Todas as palavras estão corretamente acentuadas em:", alternativas: ["idéia, vôo, pára", "ideia, voo, para", "heroico, leem, hífens", "jóia, assembléia, platéia", "ítem, hífen, pólen"], correta: "B", comentario: "Após o Acordo: ideia, voo, para (sem acento). Em C, \"hífens\" está errado (hifens não leva acento). D tem acentos abolidos; em E, \"item\" não leva acento." }
    ]
  });

  A(OA, "Uso do hífen", {
    resumo: "Prefixos e compostos: as regras gerais de hífen depois do Acordo.",
    incidencia: "média",
    fontes: [ACORDO],
    blocos: [
      { tipo: "tabela", titulo: "Regras com prefixos", cabecalho: ["Regra", "Exemplos"], linhas: [
        ["Prefixo terminado em **vogal igual** à que inicia a palavra: hífen", "micro-ondas, anti-inflamatório, contra-ataque"],
        ["Prefixo terminado em vogal e palavra iniciada por **vogal diferente**: junta", "autoescola, extraoficial, infraestrutura"],
        ["Palavra iniciada por **r** ou **s** após prefixo terminado em vogal: dobra a letra", "antirrugas, contrassenso, minissaia"],
        ["Palavra iniciada por **h**: hífen", "anti-higiênico, super-homem, pré-história"],
        ["Prefixos **ex-, vice-, pós-, pré-, pró-, recém-, sem-, além-**: hífen", "ex-diretor, vice-prefeito, pós-graduação, recém-nascido"],
        ["Prefixo terminado em **r** e palavra iniciada por **r**: hífen", "hiper-realista, inter-racial, super-resistente"]
      ]},
      { tipo: "atencao", texto: "O prefixo **co-** se junta mesmo antes de o: **coordenar**, **cooperar**. E **não** se usa hífen com \"não\" como prefixo: não fumante, não governamental." },
      { tipo: "flashcards", cartas: [
        { frente: "micro + ondas", verso: "micro-ondas (vogais iguais)" },
        { frente: "auto + escola", verso: "autoescola (vogais diferentes)" },
        { frente: "anti + social", verso: "antissocial (dobra o s)" },
        { frente: "super + homem", verso: "super-homem (h)" }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Está correta a grafia de:", alternativas: ["auto-estima", "anti-inflamatório", "contra-senso", "micro-empresa", "infra-estrutura"], correta: "B", comentario: "Anti + inflamatório: vogais iguais pedem hífen. Corretas as outras: autoestima, contrassenso, microempresa, infraestrutura." }
    ]
  });

  A(OA, "Porque, por que, porquê e por quê", {
    resumo: "Os quatro porquês: pergunta, resposta, substantivo e final de frase.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Os quatro porquês", cabecalho: ["Forma", "Uso", "Exemplo"], linhas: [
        ["**por que**", "perguntas; e quando equivale a \"pelo qual\", \"pela qual\"", "Por que você faltou? / O caminho por que passei."],
        ["**por quê**", "no **final** da frase (antes de pontuação)", "Você faltou por quê?"],
        ["**porque**", "resposta, explicação (= pois)", "Faltei porque estava doente."],
        ["**porquê**", "substantivo (vem com artigo: o porquê)", "Não entendi o porquê da decisão."]
      ]},
      { tipo: "dica", texto: "Teste rápido: se dá para colocar \"o motivo\" no lugar, é **porquê** (substantivo). Se dá para trocar por \"pois\", é **porque**." },
      { tipo: "questao", banca: Q, enunciado: "Complete corretamente: \"Ninguém sabe ___ o sistema caiu, mas todos querem saber o ___.\"", alternativas: ["porque / por que", "por que / porquê", "porquê / porque", "por quê / por que", "porque / porquê"], correta: "B", comentario: "\"Por que o sistema caiu\" é pergunta indireta (= por qual motivo): separado e sem acento. \"O porquê\" é substantivo, com artigo." }
    ]
  });

  A(OA, "Parônimos e homônimos", {
    resumo: "Palavras parecidas (parônimos) e palavras iguais com sentidos diferentes (homônimos).",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "- **Parônimos**: palavras **parecidas** na escrita e na pronúncia, com sentidos diferentes. Ex.: **descrição** (ato de descrever) × **discrição** (qualidade de quem é discreto).",
        "- **Homônimos**: palavras **iguais** na pronúncia e/ou na escrita, com sentidos diferentes. Ex.: **sessão** (reunião) × **seção** (divisão) × **cessão** (ato de ceder)."
      ]},
      { tipo: "tabela", titulo: "Pares que mais caem", cabecalho: ["Palavra", "Sentido", "Palavra", "Sentido"], linhas: [
        ["**eminente**", "importante, ilustre", "**iminente**", "prestes a acontecer"],
        ["**ratificar**", "confirmar", "**retificar**", "corrigir"],
        ["**infligir**", "aplicar (pena)", "**infringir**", "desrespeitar (lei)"],
        ["**deferir**", "atender (pedido)", "**diferir**", "adiar; ser diferente"],
        ["**mandato**", "período de um cargo eletivo", "**mandado**", "ordem judicial"],
        ["**cessão**", "ato de ceder", "**sessão**", "reunião"],
        ["**censo**", "recenseamento", "**senso**", "juízo, entendimento"],
        ["**tráfego**", "trânsito", "**tráfico**", "comércio ilegal"]
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Corrigir um documento: ratificar ou retificar?", verso: "Retificar." },
        { frente: "Atender a um pedido: deferir ou diferir?", verso: "Deferir." },
        { frente: "Ordem de um juiz: mandato ou mandado?", verso: "Mandado." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Assinale o emprego correto:", alternativas: ["O juiz expediu um mandato de prisão.", "O diretor deferiu o pedido de férias.", "O motorista inflingiu a lei.", "A sessão de pessoal fica no 2º andar.", "Foi uma conquista iminente do ilustre professor."], correta: "B", comentario: "Deferir = atender. Correções: mandado de prisão; infringiu; seção de pessoal (divisão); conquista eminente." }
    ]
  });

  /* ================= MORFOLOGIA ================= */

  A(MO, "Estrutura e formação de palavras", {
    resumo: "Radical, afixos e os processos de derivação e composição.",
    incidencia: "baixa",
    blocos: [
      { tipo: "texto", texto: [
        "**Estrutura**: radical (núcleo do sentido: **livr**-o), prefixo (antes: **in**feliz), sufixo (depois: feliz**mente**), desinências (indicam gênero, número, tempo: menin**a**, menino**s**).",
        "",
        "**Processos de formação**:"
      ]},
      { tipo: "tabela", titulo: "Processos", cabecalho: ["Processo", "Como", "Exemplo"], linhas: [
        ["Derivação prefixal", "acrescenta prefixo", "refazer, infeliz"],
        ["Derivação sufixal", "acrescenta sufixo", "felizmente, livraria"],
        ["Parassintética", "prefixo e sufixo **ao mesmo tempo**", "entardecer, envelhecer, emagrecer"],
        ["Regressiva", "reduz a palavra (substantivo a partir de verbo)", "pescar → pesca; ajudar → ajuda"],
        ["Imprópria", "muda a classe sem mudar a forma", "o **jantar** (verbo vira substantivo)"],
        ["Composição por justaposição", "junta sem alterar", "guarda-chuva, girassol"],
        ["Composição por aglutinação", "junta com perda de som", "planalto (plano + alto), aguardente"],
        ["Hibridismo", "elementos de línguas diferentes", "automóvel (grego + latim)"]
      ]},
      { tipo: "atencao", texto: "Na parassintética, retirar o prefixo **ou** o sufixo gera palavra que não existe: \"entardecer\" → \"tardecer\" e \"entarde\" não existem. Em \"infelizmente\", tirar um dos afixos ainda dá palavra (infeliz, felizmente): é prefixal e sufixal, não parassintética." },
      { tipo: "questao", banca: Q, enunciado: "A palavra formada por derivação parassintética é:", alternativas: ["desleal", "felizmente", "amanhecer", "guarda-roupa", "pesca"], correta: "C", comentario: "a + manh(ã) + ecer entram juntos: sem o prefixo (\"manhecer\") ou sem o sufixo (\"amanha\" como verbo) a palavra não existe. Desleal é prefixal; felizmente, sufixal; guarda-roupa, composição; pesca, regressiva." }
    ]
  });

  A(MO, "Classes de palavras: visão geral", {
    resumo: "As dez classes gramaticais, variáveis e invariáveis.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "As dez classes", cabecalho: ["Classe", "Função", "Exemplo", "Varia?"], linhas: [
        ["Substantivo", "nomeia seres", "servidor, alegria", "sim"],
        ["Adjetivo", "caracteriza o substantivo", "eficiente", "sim"],
        ["Artigo", "determina o substantivo", "o, uma", "sim"],
        ["Numeral", "indica quantidade ou ordem", "dois, segundo", "sim"],
        ["Pronome", "substitui ou acompanha o substantivo", "ele, este, meu", "sim"],
        ["Verbo", "indica ação, estado ou fenômeno", "trabalhar, ser, chover", "sim"],
        ["Advérbio", "modifica verbo, adjetivo ou advérbio", "rapidamente, muito", "não"],
        ["Preposição", "liga palavras", "de, para, com", "não"],
        ["Conjunção", "liga orações ou termos", "e, mas, porque", "não"],
        ["Interjeição", "expressa emoção", "ufa!, oba!", "não"]
      ]},
      { tipo: "dica", texto: "A classe depende do **uso** na frase. \"O **jantar** está pronto\" (substantivo) × \"Vou **jantar**\" (verbo). \"Ela fala **alto**\" (advérbio) × \"Prédio **alto**\" (adjetivo)." },
      { tipo: "questao", banca: Q, enunciado: "Em \"O servidor respondeu rapidamente\", a palavra \"rapidamente\" é:", alternativas: ["adjetivo", "advérbio", "substantivo", "preposição", "conjunção"], correta: "B", comentario: "Modifica o verbo \"respondeu\", indicando modo: advérbio." }
    ]
  });

  A(MO, "Substantivo, adjetivo e artigo", {
    resumo: "Classificação, flexão de gênero e número e o papel do artigo.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Substantivo** dá nome: comum (cidade) ou próprio (Curitiba); concreto (mesa, Deus) ou abstrato (saudade, justiça); simples ou composto; coletivo (arquipélago, cardume).",
        "",
        "**Adjetivo** caracteriza o substantivo e concorda com ele: \"servidoras **dedicadas**\". **Locução adjetiva** é a expressão com valor de adjetivo: \"amor **de mãe**\" = amor materno.",
        "",
        "**Artigo** definido (o, a, os, as) particulariza; indefinido (um, uma, uns, umas) generaliza. Qualquer palavra precedida de artigo vira substantivo: \"o **sim**\", \"o **porquê**\"."
      ]},
      { tipo: "tabela", titulo: "Plurais que caem", cabecalho: ["Singular", "Plural"], linhas: [["cidadão", "cidadãos"], ["pão", "pães"], ["mão", "mãos"], ["guarda-chuva", "guarda-chuvas"], ["segunda-feira", "segundas-feiras"], ["abaixo-assinado", "abaixo-assinados"], ["fácil", "fáceis"]] },
      { tipo: "atencao", texto: "Substantivos com gênero que confunde: **o** dó, **o** champanha, **o** guaraná, **a** alface, **a** cal, **a** omoplata. \"Grama\" (peso) é masculino: duzentos gramas." },
      { tipo: "questao", banca: Q, enunciado: "O plural está correto em:", alternativas: ["os cidadões", "as segunda-feiras", "os guarda-chuvas", "os abaixos-assinados", "duzentas gramas de queijo"], correta: "C", comentario: "Em guarda-chuva (verbo + substantivo) só o substantivo varia. Corretos: cidadãos, segundas-feiras, abaixo-assinados, duzentos gramas." }
    ]
  });

  A(MO, "Numeral", {
    resumo: "Cardinais, ordinais, multiplicativos e fracionários, e como ler artigos de lei.",
    incidencia: "baixa",
    blocos: [
      { tipo: "tabela", titulo: "Tipos de numeral", cabecalho: ["Tipo", "Exemplos"], linhas: [["Cardinal", "um, dez, cem"], ["Ordinal", "primeiro, décimo, centésimo"], ["Multiplicativo", "dobro, triplo, quádruplo"], ["Fracionário", "meio, terço, décimo"], ["Coletivo", "dúzia, dezena, centena, par"]] },
      { tipo: "texto", titulo: "Leitura de artigos de lei e de séculos", texto: [
        "- Artigos, parágrafos e capítulos: **ordinal até o nono** e **cardinal do dez em diante**: art. 1º (primeiro), art. 9º (nono), art. 10 (dez), art. 37 (trinta e sete).",
        "- Séculos, reis e papas: ordinal até o décimo, cardinal depois: século X (décimo), século XXI (vinte e um), Pedro II (segundo), João XXIII (vinte e três)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A leitura correta de \"art. 5º\" e \"art. 37\" da Constituição é:", alternativas: ["artigo cinco e artigo trigésimo sétimo", "artigo quinto e artigo trinta e sete", "artigo quinto e artigo trigésimo sétimo", "artigo cinco e artigo trinta e sete", "artigo cinquenta e artigo trinta e sete"], correta: "B", comentario: "Até o nono, ordinal (quinto); do dez em diante, cardinal (trinta e sete)." }
    ]
  });

  A(MO, "Pronomes: classificação e emprego", {
    resumo: "Pessoais, de tratamento, possessivos, demonstrativos, indefinidos e relativos.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Pronomes pessoais", cabecalho: ["Pessoa", "Reto (sujeito)", "Oblíquo átono", "Oblíquo tônico"], linhas: [["1ª sing.", "eu", "me", "mim, comigo"], ["2ª sing.", "tu", "te", "ti, contigo"], ["3ª sing.", "ele, ela", "o, a, lhe, se", "si, consigo, ele"], ["1ª pl.", "nós", "nos", "nós, conosco"], ["3ª pl.", "eles, elas", "os, as, lhes, se", "si, consigo, eles"]] },
      { tipo: "atencao", titulo: "Erros clássicos", texto: [
        "- \"Para **mim** fazer\" está errado: antes de verbo no infinitivo, use pronome reto: \"para **eu** fazer\". (Mas \"Isso é difícil para mim\" está certo.)",
        "- \"Entre **mim** e você\" é o correto (depois de preposição, oblíquo tônico).",
        "- **O/a** substituem objeto direto (\"Vi o chefe\" → \"Vi-**o**\"); **lhe** substitui objeto indireto (\"Entreguei ao chefe\" → \"Entreguei-**lhe**\")."
      ]},
      { tipo: "tabela", titulo: "Demonstrativos", cabecalho: ["Pronome", "Espaço", "Tempo", "No texto"], linhas: [["este, esta, isto", "perto de quem fala", "presente", "o que **vai** ser dito"], ["esse, essa, isso", "perto de quem ouve", "passado próximo", "o que **já** foi dito"], ["aquele, aquela, aquilo", "longe dos dois", "passado distante", "o termo mais distante"]] },
      { tipo: "texto", titulo: "Relativos", texto: [
        "Retomam um termo anterior: **que**, **o qual**, **quem**, **cujo**, **onde**.",
        "- **Cujo** indica posse e concorda com o possuído, sem artigo depois: \"O servidor **cuja** filha passou…\" (nunca \"cujo o\").",
        "- **Onde** só para lugar físico: \"A cidade **onde** moro\". Para situações, use \"em que\": \"A reunião **em que** decidimos…\"."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Está correta a frase:", alternativas: ["Trouxeram o processo para mim analisar.", "O candidato cujo o nome saiu foi chamado.", "Entre eu e você não há problema.", "Este documento que tenho em mãos está assinado.", "A reunião onde discutimos o orçamento foi longa."], correta: "D", comentario: "\"Este\" para algo perto de quem fala, correto. Correções: para eu analisar; cujo nome; entre mim e você; reunião em que." }
    ]
  });

  A(MO, "Verbos: tempos, modos e vozes", {
    resumo: "Indicativo, subjuntivo e imperativo; correlação de tempos; vozes ativa, passiva e reflexiva.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Modos verbais", cabecalho: ["Modo", "Expressa", "Exemplo"], linhas: [["Indicativo", "certeza", "Ele **trabalha** aqui."], ["Subjuntivo", "dúvida, hipótese, desejo", "Talvez ele **trabalhe**. Se ele **trabalhasse**…"], ["Imperativo", "ordem, pedido", "**Trabalhe** com atenção."]] },
      { tipo: "tabela", titulo: "Correlação de tempos (condição)", cabecalho: ["Se…", "então…"], linhas: [["Se eu **estudar** (futuro do subjuntivo)", "**passarei** (futuro do presente)"], ["Se eu **estudasse** (pretérito imperfeito do subjuntivo)", "**passaria** (futuro do pretérito)"], ["Se eu **tivesse estudado**", "**teria passado**"]] },
      { tipo: "texto", titulo: "Vozes verbais", texto: [
        "- **Ativa**: o sujeito pratica a ação. \"O fiscal **multou** a empresa.\"",
        "- **Passiva analítica**: ser + particípio. \"A empresa **foi multada** pelo fiscal.\"",
        "- **Passiva sintética**: verbo + se. \"**Multou-se** a empresa.\" / \"**Vendem-se** casas.\" (verbo concorda com o sujeito paciente)",
        "- **Reflexiva**: o sujeito pratica e sofre. \"Ele **se feriu**.\""
      ]},
      { tipo: "atencao", titulo: "Verbos que derrubam", texto: [
        "- **Haver** e **fazer** indicando tempo: impessoais, ficam no singular: \"**Faz** dois anos\"; \"**Havia** muitos candidatos\".",
        "- Futuro do subjuntivo de **ver** e **vir**: se eu **vir** (de ver), se eu **vier** (de vir). \"Quando você **vir** o chefe…\".",
        "- **Intervir** e **manter** seguem **vir** e **ter**: ele interveio, eles mantiveram, se ele mantiver."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Assinale a frase correta:", alternativas: ["Se ele ver o documento, avisará.", "Fazem três meses que o processo parou.", "O diretor interviu na discussão.", "Quando você vir o relatório, assine.", "Haviam muitos pedidos pendentes."], correta: "D", comentario: "Futuro do subjuntivo de \"ver\" é \"vir\". Correções: se ele vir; faz três meses; interveio; havia muitos pedidos." }
    ]
  });

  A(MO, "Advérbio", {
    resumo: "Circunstâncias de tempo, lugar, modo, intensidade, negação, dúvida e afirmação.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: ["O **advérbio** é invariável e modifica um **verbo** (\"chegou **cedo**\"), um **adjetivo** (\"**muito** bom\") ou outro **advérbio** (\"**bem** perto\"). **Locução adverbial** é a expressão com valor de advérbio: \"às pressas\", \"de repente\", \"sem dúvida\"."] },
      { tipo: "tabela", titulo: "Circunstâncias", cabecalho: ["Tipo", "Exemplos"], linhas: [["Tempo", "hoje, ontem, já, logo, nunca, sempre"], ["Lugar", "aqui, ali, perto, longe, acima"], ["Modo", "bem, mal, assim, rapidamente"], ["Intensidade", "muito, pouco, bastante, tão, quase"], ["Negação", "não, nunca, jamais"], ["Dúvida", "talvez, possivelmente, provavelmente"], ["Afirmação", "sim, certamente, realmente"]] },
      { tipo: "atencao", texto: "**Meio** e **bastante** como advérbio não variam: \"Ela está **meio** cansada\"; \"Eles estudaram **bastante**\". Como adjetivo/numeral, variam: \"meia hora\", \"bastantes provas\"." },
      { tipo: "questao", banca: Q, enunciado: "Em \"A servidora ficou meio preocupada\", a palavra \"meio\" é:", alternativas: ["numeral e deveria ser \"meia\"", "advérbio e está correta", "adjetivo e deveria ser \"meia\"", "substantivo", "preposição"], correta: "B", comentario: "Modifica o adjetivo \"preocupada\" com sentido de \"um pouco\": advérbio, invariável." }
    ]
  });

  A(MO, "Preposição", {
    resumo: "Palavras que ligam termos: a, de, em, por, para, com… e suas combinações.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "**Preposição** é invariável e liga dois termos, estabelecendo relação entre eles: \"casa **de** madeira\", \"voltou **para** casa\".",
        "",
        "**Essenciais**: a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás.",
        "**Acidentais** (outras classes usadas como preposição): conforme, segundo, durante, mediante, exceto.",
        "",
        "Elas se juntam a artigos e pronomes: **combinação** (a + o = **ao**) e **contração** (de + o = **do**; em + a = **na**; a + a = **à**, a crase)."
      ]},
      { tipo: "tabela", titulo: "Relações de sentido", cabecalho: ["Relação", "Exemplo"], linhas: [["Lugar", "Mora **em** Curitiba."], ["Causa", "Faltou **por** doença."], ["Finalidade", "Estudou **para** a prova."], ["Instrumento", "Assinou **com** caneta azul."], ["Assunto", "Falou **sobre** o edital."]] },
      { tipo: "questao", banca: Q, enunciado: "Em \"Ele trabalha com dedicação\", a preposição \"com\" indica:", alternativas: ["lugar", "companhia", "modo", "instrumento", "causa"], correta: "C", comentario: "\"Com dedicação\" = dedicadamente: indica modo." }
    ]
  });

  A(MO, "Conjunção", {
    resumo: "Coordenativas e subordinativas e as relações de sentido que estabelecem.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Coordenativas (ligam orações independentes)", cabecalho: ["Tipo", "Exemplos"], linhas: [["Aditivas", "e, nem, não só… mas também"], ["Adversativas", "mas, porém, contudo, todavia, entretanto, no entanto"], ["Alternativas", "ou… ou, ora… ora, quer… quer"], ["Conclusivas", "logo, portanto, por isso, pois (depois do verbo)"], ["Explicativas", "pois (antes do verbo), porque, que"]] },
      { tipo: "tabela", titulo: "Subordinativas adverbiais", cabecalho: ["Tipo", "Exemplos"], linhas: [["Causais", "porque, já que, visto que, como (no início)"], ["Concessivas", "embora, ainda que, mesmo que, conquanto"], ["Condicionais", "se, caso, desde que, contanto que"], ["Conformativas", "conforme, segundo, consoante, como"], ["Comparativas", "como, tal qual, mais… do que"], ["Consecutivas", "tão… que, tanto… que"], ["Finais", "para que, a fim de que"], ["Temporais", "quando, enquanto, assim que, logo que"], ["Proporcionais", "à medida que, à proporção que"]] },
      { tipo: "atencao", texto: "O **pois** muda de sentido pela posição: **antes** do verbo é explicativo (\"Saia, **pois** vai chover\"); **depois** do verbo, entre vírgulas, é conclusivo (\"Choveu; o jogo foi, **pois**, cancelado\")." },
      { tipo: "questao", banca: Q, enunciado: "Em \"À medida que o prazo se aproximava, a tensão aumentava\", a conjunção indica:", alternativas: ["causa", "proporção", "tempo", "concessão", "finalidade"], correta: "B", comentario: "\"À medida que\" relaciona duas coisas que variam juntas: proporção." }
    ]
  });

  A(MO, "Interjeição", {
    resumo: "Palavras que exprimem emoção ou apelo e equivalem a uma frase inteira.",
    incidencia: "baixa",
    blocos: [
      { tipo: "texto", texto: [
        "**Interjeição** expressa emoção, sensação ou apelo de forma súbita, e geralmente vem com ponto de exclamação. Equivale a uma frase inteira (é uma **frase nominal**).",
        "",
        "**Locução interjetiva**: expressão com o mesmo papel: \"Meu Deus!\", \"Ai de mim!\", \"Raios o partam!\"."
      ]},
      { tipo: "tabela", titulo: "Sentidos", cabecalho: ["Sentido", "Exemplos"], linhas: [["Alegria", "oba!, viva!, eba!"], ["Alívio", "ufa!, ainda bem!"], ["Dor", "ai!, ui!"], ["Espanto", "oh!, nossa!, puxa!"], ["Silêncio", "psiu!, silêncio!"], ["Chamamento", "ô!, psiu!, ei!"], ["Animação", "coragem!, vamos!, força!"]] },
      { tipo: "dica", texto: "O sentido depende da entonação e do contexto: \"Puxa!\" pode ser admiração ou decepção. Em prova, leia a frase inteira." },
      { tipo: "questao", banca: Q, enunciado: "Em \"Ufa! O sistema voltou a funcionar\", a interjeição exprime:", alternativas: ["dor", "alívio", "espanto", "chamamento", "silêncio"], correta: "B", comentario: "Depois de um problema resolvido, \"ufa\" expressa alívio." }
    ]
  });
})();
