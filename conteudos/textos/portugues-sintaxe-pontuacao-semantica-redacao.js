/* Língua Portuguesa · Sintaxe, Pontuação, Semântica e Estilística, Redação Oficial. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("nucleo", "portugues", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const SI = "Sintaxe";
  const PO = "Pontuação";
  const SE = "Semântica e Estilística";
  const RO = "Redação Oficial";
  const MANUAL = { titulo: "Manual de Redação da Presidência da República (3ª edição, 2018)", url: "https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica" };

  /* ================= SINTAXE ================= */

  A(SI, "Frase, oração e período", {
    resumo: "Frase tem sentido; oração tem verbo; período é a frase com uma ou mais orações.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "- **Frase**: enunciado com sentido completo, com ou sem verbo. \"Silêncio!\" é frase.",
        "- **Oração**: enunciado organizado em torno de um **verbo** (ou locução verbal).",
        "- **Período**: frase formada por oração(ões). **Simples**: uma oração. **Composto**: duas ou mais.",
        "",
        "Para contar orações, conte os **verbos** (cada locução verbal conta como um)."
      ]},
      { tipo: "exemplo", titulo: "Contando orações", enunciado: "\"Quando o edital saiu, os candidatos que estavam estudando comemoraram.\"", resolucao: ["Verbos: saiu, estavam estudando (locução), comemoraram.", "São 3 orações: período composto."], resposta: "3 orações" },
      { tipo: "questao", banca: Q, enunciado: "Quantas orações tem o período \"O servidor deve entregar o relatório que o chefe pediu\"?", alternativas: ["1", "2", "3", "4", "nenhuma"], correta: "B", comentario: "\"Deve entregar\" é locução verbal (uma oração) e \"pediu\" forma a segunda." }
    ]
  });

  A(SI, "Termos essenciais da oração", {
    resumo: "Sujeito e predicado: tipos de sujeito e de predicado.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: ["Os termos essenciais são o **sujeito** (de quem se fala) e o **predicado** (o que se diz do sujeito). Para achar o sujeito, pergunte ao verbo \"quem?\" ou \"o quê?\"."] },
      { tipo: "tabela", titulo: "Tipos de sujeito", cabecalho: ["Tipo", "Exemplo"], linhas: [
        ["Simples (um núcleo)", "**O servidor** chegou."],
        ["Composto (dois ou mais núcleos)", "**Ana e Beto** chegaram."],
        ["Oculto (desinencial)", "Chegamos cedo. (nós)"],
        ["Indeterminado", "**Falaram** de você. / **Precisa-se** de técnicos."],
        ["Oração sem sujeito", "**Choveu**. **Há** vagas. **Faz** dez anos."]
      ]},
      { tipo: "tabela", titulo: "Tipos de predicado", cabecalho: ["Tipo", "Núcleo", "Exemplo"], linhas: [
        ["Verbal", "verbo de ação", "O fiscal **multou** a loja."],
        ["Nominal", "predicativo (com verbo de ligação)", "O fiscal é **rigoroso**."],
        ["Verbo-nominal", "verbo de ação + predicativo", "O fiscal saiu **irritado**."]
      ]},
      { tipo: "dica", texto: "Verbos de ligação: **ser, estar, permanecer, ficar, parecer, continuar, andar** (no sentido de estado). Eles ligam o sujeito a uma característica." },
      { tipo: "atencao", texto: "\"Vendem-se casas\" tem sujeito (casas): é voz passiva sintética, por isso o verbo vai ao plural. Já em \"Precisa-se de técnicos\", o se indetermina o sujeito e o verbo fica no singular." },
      { tipo: "questao", banca: Q, enunciado: "Há oração sem sujeito em:", alternativas: ["Falaram mal do projeto.", "Houve muitas reclamações.", "Os técnicos chegaram cedo.", "Chegamos atrasados.", "Precisa-se de estagiários."], correta: "B", comentario: "\"Haver\" no sentido de existir é impessoal: oração sem sujeito. A e E têm sujeito indeterminado; C, simples; D, oculto." }
    ]
  });

  A(SI, "Termos integrantes da oração", {
    resumo: "Objeto direto, objeto indireto, complemento nominal e agente da passiva.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Os termos integrantes", cabecalho: ["Termo", "Completa", "Exemplo"], linhas: [
        ["Objeto direto", "verbo transitivo direto, **sem** preposição", "Ela assinou **o contrato**."],
        ["Objeto indireto", "verbo transitivo indireto, **com** preposição", "Ele obedece **às normas**."],
        ["Complemento nominal", "substantivo, adjetivo ou advérbio, com preposição", "A obediência **às normas** é obrigatória."],
        ["Agente da passiva", "verbo na voz passiva analítica", "O contrato foi assinado **pela diretora**."]
      ]},
      { tipo: "atencao", titulo: "Complemento nominal × adjunto adnominal", texto: [
        "Os dois vêm com preposição depois de um nome. A diferença:",
        "- **Complemento nominal**: tem sentido **passivo** (recebe a ação). \"A **crítica ao governo**\": o governo é criticado.",
        "- **Adjunto adnominal**: tem sentido **ativo** ou de posse. \"A **crítica do jornalista**\": o jornalista critica.",
        "Se o nome antes for **adjetivo** ou **advérbio**, é sempre complemento nominal: \"útil **à população**\"."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Em \"O respeito aos prazos é essencial\", o termo \"aos prazos\" é:", alternativas: ["objeto direto", "objeto indireto", "complemento nominal", "adjunto adnominal", "agente da passiva"], correta: "C", comentario: "Completa o substantivo \"respeito\" com sentido passivo (os prazos são respeitados): complemento nominal." }
    ]
  });

  A(SI, "Termos acessórios e vocativo", {
    resumo: "Adjunto adnominal, adjunto adverbial, aposto e vocativo.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Termos acessórios e o vocativo", cabecalho: ["Termo", "Função", "Exemplo"], linhas: [
        ["Adjunto adnominal", "acompanha o substantivo (artigos, adjetivos, pronomes, locuções)", "**Os novos** servidores **da prefeitura** chegaram."],
        ["Adjunto adverbial", "circunstância do verbo (tempo, lugar, modo…)", "Chegaram **ontem**, **com pressa**."],
        ["Aposto", "explica ou resume outro termo", "Curitiba, **capital do Paraná**, é planejada."],
        ["Vocativo", "chama o interlocutor (fora da oração)", "**Senhor diretor**, o relatório está pronto."]
      ]},
      { tipo: "atencao", texto: "Aposto e vocativo vêm **entre vírgulas** (ou com vírgula). A diferença: o aposto se refere a um termo da oração; o vocativo chama alguém." },
      { tipo: "questao", banca: Q, enunciado: "Em \"Professora, a prova foi adiada\", o termo \"Professora\" é:", alternativas: ["sujeito", "aposto", "vocativo", "adjunto adnominal", "objeto direto"], correta: "C", comentario: "Chama a pessoa com quem se fala: vocativo. O sujeito é \"a prova\"." }
    ]
  });

  A(SI, "Período composto por coordenação", {
    resumo: "Orações independentes ligadas com ou sem conjunção.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "Na **coordenação**, as orações são **independentes** sintaticamente: uma não exerce função na outra.",
        "",
        "- **Assindéticas**: sem conjunção. \"Cheguei, vi, venci.\"",
        "- **Sindéticas**: com conjunção, classificadas pelo sentido: **aditivas** (e, nem), **adversativas** (mas, porém), **alternativas** (ou… ou), **conclusivas** (logo, portanto) e **explicativas** (pois, porque)."
      ]},
      { tipo: "exemplo", titulo: "Classificando", enunciado: "\"Estudou o ano todo, **portanto** está confiante.\"", resolucao: ["\"Portanto\" introduz uma conclusão: oração coordenada sindética conclusiva."], resposta: "Coordenada sindética conclusiva" },
      { tipo: "questao", banca: Q, enunciado: "\"Saia mais cedo, pois o trânsito está ruim.\" A segunda oração é coordenada:", alternativas: ["aditiva", "adversativa", "alternativa", "conclusiva", "explicativa"], correta: "E", comentario: "\"Pois\" antes do verbo, justificando uma ordem: explicativa." }
    ]
  });

  A(SI, "Período composto por subordinação", {
    resumo: "Orações substantivas, adjetivas e adverbiais: uma oração exerce função na outra.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "Na **subordinação**, uma oração (subordinada) exerce uma **função sintática** dentro de outra (principal).",
        "",
        "- **Substantivas**: valem por um substantivo (sujeito, objeto…). Introduzidas por **que** ou **se**. Teste: troque por \"isso\". \"Espero **que você venha**\" → \"Espero **isso**\".",
        "- **Adjetivas**: valem por um adjetivo, introduzidas por **pronome relativo**.",
        "- **Adverbiais**: valem por um advérbio (causa, condição, tempo, concessão…)."
      ]},
      { tipo: "tabela", titulo: "Adjetivas: restritiva × explicativa", cabecalho: ["Tipo", "Vírgula", "Sentido", "Exemplo"], linhas: [
        ["Restritiva", "sem", "limita o grupo", "Os servidores **que faltaram** perderam o bônus. (só alguns)"],
        ["Explicativa", "com", "comenta o grupo inteiro", "Os servidores, **que faltaram**, perderam o bônus. (todos faltaram)"]
      ]},
      { tipo: "atencao", texto: "A vírgula muda o sentido! As bancas adoram perguntar se a retirada das vírgulas de uma oração adjetiva altera o significado: altera, porque transforma explicativa em restritiva." },
      { tipo: "questao", banca: Q, enunciado: "Em \"É necessário que todos assinem a lista\", a oração destacada \"que todos assinem a lista\" é subordinada substantiva:", alternativas: ["objetiva direta", "subjetiva", "predicativa", "completiva nominal", "apositiva"], correta: "B", comentario: "\"Isso é necessário\": a oração funciona como sujeito de \"é necessário\". Substantiva subjetiva." }
    ]
  });

  A(SI, "Concordância verbal", {
    resumo: "O verbo concorda com o sujeito, com os casos especiais que mais caem.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: ["Regra geral: o verbo concorda em **número e pessoa** com o núcleo do sujeito. Os casos especiais são o que a prova cobra."] },
      { tipo: "tabela", titulo: "Casos especiais", cabecalho: ["Caso", "Regra", "Exemplo"], linhas: [
        ["Sujeito posposto", "concorda normalmente", "**Chegaram** os documentos."],
        ["Haver = existir", "singular", "**Houve** problemas."],
        ["Fazer/haver (tempo)", "singular", "**Faz** dois anos."],
        ["Passiva sintética (verbo + se)", "concorda com o sujeito", "**Alugam-se** salas."],
        ["Índice de indeterminação (VTI + se)", "singular", "**Precisa-se** de técnicos."],
        ["\"A maioria de…\", \"parte de…\"", "singular ou plural", "A maioria dos alunos **passou/passaram**."],
        ["\"Um dos que\"", "preferência pelo plural", "Ele é um dos que mais **trabalham**."],
        ["Porcentagem", "concorda com o número ou com o termo seguinte", "30% dos eleitores **votaram**; 1% da turma **faltou**."],
        ["Sujeito composto antes do verbo", "plural", "O diretor e a secretária **saíram**."]
      ]},
      { tipo: "dica", texto: "Para conferir a concordância, coloque o sujeito **antes** do verbo: \"Chegou os documentos\" → \"Os documentos chegou\"? Soa errado: o certo é \"chegaram\"." },
      { tipo: "questao", banca: Q, enunciado: "A concordância está correta em:", alternativas: ["Haviam muitos candidatos na sala.", "Fazem cinco anos que não há concurso.", "Faltou ainda dois documentos.", "Vendem-se terrenos neste bairro.", "Precisam-se de motoristas."], correta: "D", comentario: "Passiva sintética: \"terrenos são vendidos\", verbo no plural. Correções: havia, faz, faltaram, precisa-se." }
    ]
  });

  A(SI, "Concordância nominal", {
    resumo: "Adjetivos, artigos e pronomes concordam com o substantivo; casos de anexo, meio, bastante.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Casos que mais caem", cabecalho: ["Palavra", "Regra", "Exemplo"], linhas: [
        ["anexo, incluso, obrigado, mesmo, próprio", "variam (adjetivos)", "Seguem **anexas** as planilhas. Ela disse: **obrigada**."],
        ["\"em anexo\"", "invariável", "Seguem **em anexo** as planilhas."],
        ["meio", "advérbio (\"um pouco\") não varia; numeral varia", "Ela está **meio** cansada. Comeu **meia** pizza."],
        ["bastante", "advérbio não varia; adjetivo varia", "Estudaram **bastante**. Há **bastantes** vagas."],
        ["é proibido / é necessário", "sem artigo: invariável; com artigo: concorda", "É **proibido** entrada. É **proibida a** entrada."],
        ["menos, alerta", "sempre invariáveis", "**Menos** pessoas. Estão **alerta**."]
      ]},
      { tipo: "texto", titulo: "Adjetivo com vários substantivos", texto: ["Depois dos substantivos: concorda com o mais próximo ou vai ao plural (\"Ruas e avenidas **asfaltadas**\"). Antes deles: concorda com o mais próximo (\"**Asfaltadas** ruas e avenidas\")."] },
      { tipo: "questao", banca: Q, enunciado: "Está correta a frase:", alternativas: ["Seguem anexo os comprovantes.", "Ela ficou meia preocupada.", "É proibida entrada de pessoas estranhas.", "A servidora agradeceu: \"Muito obrigada!\".", "Havia menas pessoas na fila."], correta: "D", comentario: "\"Obrigada\" concorda com quem fala (mulher). Correções: anexos; meio; é proibido entrada (sem artigo); menos." }
    ]
  });

  A(SI, "Regência verbal", {
    resumo: "Qual preposição cada verbo exige: assistir a, obedecer a, preferir… a.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: ["**Regência verbal** é a relação entre o verbo e seus complementos: se pede preposição, e qual. Alguns verbos mudam de sentido conforme a regência."] },
      { tipo: "tabela", titulo: "Verbos que mais caem", cabecalho: ["Verbo", "Regência", "Exemplo"], linhas: [
        ["assistir (ver)", "**a** (indireto)", "Assisti **ao** filme."],
        ["assistir (ajudar)", "direto", "O médico assistiu **o** paciente."],
        ["aspirar (desejar)", "**a**", "Aspira **ao** cargo."],
        ["visar (pretender)", "**a**", "Visa **ao** bem comum."],
        ["obedecer / desobedecer", "**a**", "Obedeça **às** regras."],
        ["preferir", "**a** (nunca \"do que\" nem \"mais\")", "Prefiro café **a** chá."],
        ["implicar (acarretar)", "direto (sem \"em\")", "A falta implica **advertência**."],
        ["chegar, ir", "**a** (não \"em\")", "Cheguei **ao** trabalho; Vou **à** prefeitura."],
        ["esquecer / lembrar", "direto; ou com \"se\" + de", "Esqueci **o** prazo. Esqueci-**me do** prazo."],
        ["pagar, perdoar", "direto (coisa) e indireto (pessoa)", "Paguei **a conta ao** fornecedor."],
        ["proceder (realizar)", "**a**", "Procedeu-se **à** leitura da ata."]
      ]},
      { tipo: "atencao", texto: "\"Prefiro mais isso do que aquilo\" está **errado** duas vezes. O certo é \"Prefiro isso **a** aquilo\" (ou \"àquilo\", com crase)." },
      { tipo: "questao", banca: Q, enunciado: "A regência está correta em:", alternativas: ["Assisti o jogo ontem.", "Prefiro trabalhar do que estudar.", "O candidato aspira ao cargo de técnico.", "Chegamos no órgão às 8h.", "O atraso implicou em multa."], correta: "C", comentario: "Aspirar (desejar) pede \"a\". Correções: assisti ao jogo; prefiro trabalhar a estudar; chegamos ao órgão; implicou multa." }
    ]
  });

  A(SI, "Regência nominal", {
    resumo: "Substantivos e adjetivos que exigem preposição: apto a, favorável a, acessível a.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Nomes e suas preposições", cabecalho: ["Nome", "Preposição", "Exemplo"], linhas: [
        ["acessível, favorável, contrário, obediente, útil, imune", "a", "Serviço acessível **a** todos."],
        ["apto", "a, para", "Apto **ao** cargo; apto **para** o trabalho."],
        ["ansioso, ávido, capaz, digno", "de / por", "Ansioso **por** notícias; capaz **de** tudo."],
        ["residente, situado, sito", "em", "Residente **na** Rua XV."],
        ["compatível", "com", "Compatível **com** o cargo."],
        ["preferência", "por", "Preferência **por** candidatos experientes."]
      ]},
      { tipo: "dica", texto: "Nomes derivados de verbos costumam manter a regência do verbo: obedecer **a** → obediência **a**; preferir … **a** → preferível **a**." },
      { tipo: "questao", banca: Q, enunciado: "A regência nominal está correta em:", alternativas: ["Ele é residente à Rua das Flores.", "O horário é compatível ao meu.", "O projeto é favorável à população.", "Ela tem preferência a doces.", "Sou contrário com a proposta."], correta: "C", comentario: "Favorável pede \"a\". Correções: residente na; compatível com; preferência por; contrário à." }
    ]
  });

  A(SI, "Crase", {
    resumo: "A + A: quando o acento grave é obrigatório, proibido ou facultativo.",
    incidencia: "alta",
    blocos: [
      { tipo: "texto", texto: [
        "**Crase** é a fusão da preposição **a** com o artigo **a** (ou com o \"a\" de aquele, aquela, aquilo). É marcada pelo acento grave: **à**.",
        "",
        "Para haver crase, são precisas duas condições: o termo anterior **exige** a preposição \"a\" e o termo seguinte **aceita** o artigo \"a\" (é palavra feminina)."
      ]},
      { tipo: "svg", titulo: "A conta da crase", legenda: "Preposição exigida pelo verbo + artigo da palavra feminina = à.", codigo: `
<svg viewBox="0 0 520 140" role="img" aria-label="Fórmula visual: vou a (preposição) mais a prefeitura (artigo) igual a vou à prefeitura">
  <rect class="fd" x="10" y="30" width="140" height="60" rx="8"></rect>
  <text class="tx" x="80" y="58" text-anchor="middle">Vou + a</text>
  <text class="tx-m" x="80" y="78" text-anchor="middle">preposição</text>
  <text class="tx tx-t" x="170" y="68" text-anchor="middle" style="font-size:22px">+</text>
  <rect class="fd" x="190" y="30" width="160" height="60" rx="8"></rect>
  <text class="tx" x="270" y="58" text-anchor="middle">a prefeitura</text>
  <text class="tx-m" x="270" y="78" text-anchor="middle">artigo feminino</text>
  <text class="tx tx-t" x="372" y="68" text-anchor="middle" style="font-size:22px">=</text>
  <rect class="fd-d" x="392" y="30" width="120" height="60" rx="8"></rect>
  <text class="tx tx-t tx-d" x="452" y="66" text-anchor="middle" style="font-size:18px">à prefeitura</text>
</svg>` },
      { tipo: "dica", titulo: "Truque da troca", texto: "Troque a palavra feminina por uma masculina. Se aparecer **\"ao\"**, há crase. \"Vou à escola\" → \"Vou **ao** colégio\": crase. \"Conheço a escola\" → \"Conheço **o** colégio\": sem crase." },
      { tipo: "tabela", titulo: "Casos", cabecalho: ["Situação", "Crase?", "Exemplo"], linhas: [
        ["Horas determinadas", "sim", "Chegou **às** 8h."],
        ["Locuções femininas (à medida que, às vezes, à noite)", "sim", "Saiu **às** pressas."],
        ["\"À moda de\" (mesmo implícito)", "sim", "Bife **à** milanesa."],
        ["Antes de palavra masculina", "não", "Andou **a** pé."],
        ["Antes de verbo", "não", "Começou **a** estudar."],
        ["Entre palavras repetidas", "não", "Cara **a** cara; gota **a** gota."],
        ["Antes de pronome pessoal e de tratamento (exceto senhora, senhorita)", "não", "Entreguei **a** ela; **a** Vossa Senhoria."],
        ["Antes de nome próprio feminino e de pronome possessivo", "facultativa", "Refiro-me **a/à** Maria; **a/à** minha chefe."],
        ["Depois de \"até\"", "facultativa", "Foi **até a/à** porta."]
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "\"Fui a Curitiba\" ou \"Fui à Curitiba\"?", verso: "\"Fui a Curitiba\": volto **de** Curitiba (sem artigo). Mas \"Fui **à** Curitiba dos parques\" (com especificador, há artigo)." },
        { frente: "Crase antes de verbo?", verso: "Nunca." },
        { frente: "\"Das 8h às 12h\" ou \"de 8h às 12h\"?", verso: "\"Das 8h às 12h\" (paralelismo: de + as / a + as). Ou \"de 8h a 12h\", sem artigos." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "O acento indicativo de crase está correto em:", alternativas: ["Começou à chover.", "Entregou o ofício à ela.", "O atendimento vai das 9h às 17h.", "Andamos à pé até o protocolo.", "Refiro-me à Vossa Excelência."], correta: "C", comentario: "\"Das 9h às 17h\": horas determinadas e paralelismo com \"das\". Nos outros casos não há crase: antes de verbo, de pronome pessoal, de palavra masculina e de pronome de tratamento." }
    ]
  });

  A(SI, "Colocação pronominal", {
    resumo: "Próclise, mesóclise e ênclise: onde colocar o pronome oblíquo átono.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "As três posições", cabecalho: ["Posição", "Onde", "Exemplo"], linhas: [["Próclise", "antes do verbo", "Não **me** ligue."], ["Mesóclise", "no meio do verbo (futuro do presente e do pretérito)", "Entregar-**lhe**-ei o documento."], ["Ênclise", "depois do verbo", "Entregue-**me** o documento."]] },
      { tipo: "texto", titulo: "Quando a próclise é obrigatória (palavras atrativas)", texto: [
        "- Palavras **negativas**: não, nunca, ninguém, nada. \"**Nunca** se esqueça.\"",
        "- **Advérbios** (sem vírgula depois): \"**Aqui** se trabalha.\"",
        "- **Pronomes** relativos, indefinidos e demonstrativos: \"O processo **que** me enviaram…\"; \"**Tudo** se resolve.\"",
        "- **Conjunções subordinativas**: \"**Quando** me chamaram…\""
      ]},
      { tipo: "atencao", titulo: "Regras de ouro da norma-padrão", texto: [
        "- **Não** se inicia frase com pronome oblíquo átono: \"Me empresta a caneta\" é coloquial; na norma, \"Empresta-me a caneta\".",
        "- Com verbo no **futuro** sem palavra atrativa: mesóclise. \"Far-se-á a reunião.\" Com atrativa: próclise. \"Não se fará a reunião.\""
      ]},
      { tipo: "questao", banca: Q, enunciado: "A colocação pronominal segue a norma-padrão em:", alternativas: ["Me disseram que o edital saiu.", "Não falaram-me sobre a mudança.", "Entregarei-lhe o processo amanhã.", "Ninguém se apresentou para a vaga.", "Quando chamaram-no, ele saiu."], correta: "D", comentario: "\"Ninguém\" é palavra negativa: atrai o pronome (próclise). Correções: Disseram-me; Não me falaram; Entregar-lhe-ei; Quando o chamaram." }
    ]
  });

  /* ================= PONTUAÇÃO ================= */

  A(PO, "Uso da vírgula", {
    resumo: "Onde a vírgula é obrigatória, proibida e facultativa.",
    incidencia: "alta",
    blocos: [
      { tipo: "atencao", titulo: "Proibido: separar os termos essenciais", texto: "Não se separa **sujeito de verbo** nem **verbo de seus complementos** com uma vírgula só. Errado: \"Os candidatos aprovados**,** serão convocados.\"" },
      { tipo: "tabela", titulo: "Usos obrigatórios", cabecalho: ["Uso", "Exemplo"], linhas: [
        ["Separar itens de uma enumeração", "Trouxe RG, CPF, comprovante e foto."],
        ["Isolar vocativo", "Senhor diretor, o relatório está pronto."],
        ["Isolar aposto explicativo", "Curitiba, capital do Paraná, tem muitos parques."],
        ["Isolar adjunto adverbial **deslocado** e longo", "Na reunião de ontem, o prefeito anunciou o concurso."],
        ["Isolar expressões explicativas (isto é, por exemplo, ou seja)", "O prazo é curto, ou seja, comece já."],
        ["Antes de conjunções adversativas (mas, porém) e conclusivas", "Estudou, mas não passou."],
        ["Oração adjetiva explicativa", "Os servidores, que são concursados, têm estabilidade."],
        ["Oração adverbial antes da principal", "Quando o edital sair, começaremos."],
        ["Separar local e data", "Curitiba, 10 de novembro de 2026."]
      ]},
      { tipo: "dica", texto: "Adjunto adverbial **curto** deslocado tem vírgula facultativa: \"Ontem(,) o prazo acabou\". Longo, recomenda-se a vírgula." },
      { tipo: "questao", banca: Q, enunciado: "A vírgula está empregada corretamente em:", alternativas: ["Os documentos enviados pelo setor, chegaram ontem.", "O diretor, assinou o contrato.", "Na próxima segunda-feira, haverá reunião geral.", "Precisamos, de mais tempo.", "Ela entregou, o relatório ao chefe."], correta: "C", comentario: "Adjunto adverbial deslocado para o início, isolado por vírgula. Nas demais, a vírgula separa sujeito do verbo ou verbo do complemento." }
    ]
  });

  A(PO, "Ponto, ponto e vírgula e dois-pontos", {
    resumo: "Pausas maiores: fim de frase, itens de enumeração e anúncio de explicação.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Usos", cabecalho: ["Sinal", "Uso", "Exemplo"], linhas: [
        ["Ponto (.)", "fim de frase declarativa; abreviaturas", "O prazo acabou. Sr., art."],
        ["Ponto e vírgula (;)", "separar orações coordenadas longas ou que já têm vírgula", "Uns estudaram pela manhã; outros, à noite."],
        ["Ponto e vírgula (;)", "separar itens de enumeração (incisos de lei)", "I – cidadania; II – dignidade;"],
        ["Ponto e vírgula (;)", "antes de conjunção adversativa ou conclusiva deslocada", "Estudou muito; não passou, porém."],
        ["Dois-pontos (:)", "anunciar enumeração, explicação, citação ou fala", "Trouxe três itens: RG, CPF e foto."]
      ]},
      { tipo: "dica", texto: "Na frase \"Uns estudaram pela manhã; outros, à noite\", a vírgula depois de \"outros\" marca a **elipse** do verbo (estudaram)." },
      { tipo: "questao", banca: Q, enunciado: "Em \"A decisão foi clara: o prazo não será prorrogado\", os dois-pontos introduzem:", alternativas: ["uma enumeração", "uma citação", "uma explicação", "um vocativo", "uma pergunta"], correta: "C", comentario: "O trecho depois dos dois-pontos explica qual foi a decisão." }
    ]
  });

  A(PO, "Aspas, parênteses e travessão", {
    resumo: "Citações, destaques, explicações intercaladas e falas.",
    incidencia: "baixa",
    blocos: [
      { tipo: "tabela", titulo: "Usos", cabecalho: ["Sinal", "Uso", "Exemplo"], linhas: [
        ["Aspas", "citação literal", "O artigo diz: \"todos são iguais perante a lei\"."],
        ["Aspas", "estrangeirismo, gíria, ironia ou sentido especial", "Que \"belo\" trabalho você fez."],
        ["Parênteses", "explicação ou informação acessória", "A LAI (Lei 12.527/2011) garante o acesso."],
        ["Travessão", "fala de personagem no diálogo", "— Bom dia — disse o servidor."],
        ["Travessão duplo", "isolar trecho explicativo, com destaque", "O edital — publicado ontem — prevê 50 vagas."]
      ]},
      { tipo: "dica", texto: "Vírgulas, parênteses e travessões duplos podem isolar o mesmo trecho explicativo. O que muda é o grau de destaque: parênteses diminuem, travessões realçam." },
      { tipo: "questao", banca: Q, enunciado: "Em \"O servidor — que estava de férias — voltou antes\", os travessões poderiam ser substituídos, sem prejuízo gramatical, por:", alternativas: ["dois-pontos", "vírgulas", "ponto e vírgula", "aspas", "ponto final"], correta: "B", comentario: "O trecho é uma oração adjetiva explicativa; pode ser isolado por vírgulas." }
    ]
  });

  /* ================= SEMÂNTICA E ESTILÍSTICA ================= */

  A(SE, "Sinonímia, antonímia e polissemia", {
    resumo: "Palavras de sentido parecido, oposto e de vários sentidos.",
    incidencia: "média",
    blocos: [
      { tipo: "texto", texto: [
        "- **Sinonímia**: sentidos próximos. \"Começar\" e \"iniciar\". Raramente são idênticos em todos os contextos.",
        "- **Antonímia**: sentidos opostos. \"Deferir\" × \"indeferir\".",
        "- **Polissemia**: uma palavra com **vários sentidos relacionados**. \"Banco\" (assento, instituição financeira); \"ponto\" (de ônibus, de vista, final).",
        "- **Hiperonímia/hiponímia**: termo geral e termo específico. \"Veículo\" (hiperônimo) e \"carro\" (hipônimo). Muito usado na coesão."
      ]},
      { tipo: "dica", texto: "Nas questões de sinônimo, substitua a palavra no texto e leia a frase inteira. Só serve o sinônimo que mantém o sentido **naquele contexto**." },
      { tipo: "questao", banca: Q, enunciado: "Em \"O servidor foi exonerado a pedido\", a palavra \"exonerado\" pode ser substituída, sem alterar o sentido, por:", alternativas: ["promovido", "dispensado do cargo", "punido", "transferido", "aposentado"], correta: "B", comentario: "Exonerar é desligar do cargo, sem caráter de punição (a punição seria demissão)." }
    ]
  });

  A(SE, "Denotação e conotação", {
    resumo: "Sentido literal e sentido figurado.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Comparação", cabecalho: ["", "Denotação", "Conotação"], linhas: [["Sentido", "literal, de dicionário", "figurado, depende do contexto"], ["Onde aparece", "textos técnicos, científicos, oficiais", "literatura, publicidade, fala cotidiana"], ["Exemplo", "\"A **pedra** quebrou a vidraça.\"", "\"Ele tem um coração de **pedra**.\""]] },
      { tipo: "atencao", texto: "A redação oficial usa linguagem **denotativa**: clara, objetiva, sem duplo sentido." },
      { tipo: "questao", banca: Q, enunciado: "Há sentido conotativo em:", alternativas: ["O fogo destruiu o depósito.", "O processo está na mesa do chefe.", "Aquele discurso foi um balde de água fria.", "A água ferve a 100 °C ao nível do mar.", "A reunião começou às 14h."], correta: "C", comentario: "\"Balde de água fria\" é figurado: desânimo, frustração." }
    ]
  });

  A(SE, "Figuras de linguagem", {
    resumo: "Metáfora, metonímia, hipérbole, ironia, eufemismo e outras.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "As mais cobradas", cabecalho: ["Figura", "O que é", "Exemplo"], linhas: [
        ["Metáfora", "comparação implícita (sem \"como\")", "Aquele servidor é uma máquina."],
        ["Comparação", "comparação explícita (com \"como\", \"tal qual\")", "Trabalha como uma máquina."],
        ["Metonímia", "troca de um termo por outro relacionado (autor pela obra, parte pelo todo, marca pelo produto)", "Li Machado de Assis. Comprei um Bombril."],
        ["Hipérbole", "exagero", "Já te disse isso um milhão de vezes."],
        ["Eufemismo", "suavizar algo desagradável", "Ele nos deixou (morreu)."],
        ["Ironia", "dizer o contrário do que se pensa", "Que pontual! Chegou só duas horas atrasado."],
        ["Antítese", "palavras de sentidos opostos", "Riso e choro no mesmo dia."],
        ["Paradoxo", "ideias opostas que se contradizem na mesma afirmação", "É dor que desatina sem doer."],
        ["Prosopopeia (personificação)", "dar características humanas a seres inanimados", "O vento sussurrava."],
        ["Pleonasmo", "repetição de ideia (vicioso se não tem efeito: \"subir para cima\")", "Vi com meus próprios olhos."]
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "\"Bebi um copo de água\" (o conteúdo, não o copo)", verso: "Metonímia (continente pelo conteúdo)." },
        { frente: "\"Morrer de rir\"", verso: "Hipérbole." },
        { frente: "\"Ele faltou com a verdade\" (mentiu)", verso: "Eufemismo." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Em \"A prefeitura anunciou novas regras\", referindo-se ao prefeito e sua equipe, há:", alternativas: ["metáfora", "metonímia", "hipérbole", "ironia", "antítese"], correta: "B", comentario: "Usa-se a instituição no lugar das pessoas que a dirigem: metonímia." }
    ]
  });

  A(SE, "Funções da linguagem", {
    resumo: "As seis funções de Jakobson: referencial, emotiva, conativa, fática, metalinguística e poética.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Cada função e o elemento em foco", cabecalho: ["Função", "Foco", "Onde aparece"], linhas: [
        ["Referencial", "o assunto (referente)", "notícias, textos científicos, documentos oficiais"],
        ["Emotiva (expressiva)", "o emissor", "diários, cartas pessoais, depoimentos (1ª pessoa)"],
        ["Conativa (apelativa)", "o receptor", "propaganda, discursos (imperativo, vocativo, 2ª pessoa)"],
        ["Fática", "o canal (testar o contato)", "\"Alô?\", \"Está me ouvindo?\", cumprimentos"],
        ["Metalinguística", "o código (a língua falando dela mesma)", "dicionários, gramáticas, um poema sobre fazer poemas"],
        ["Poética", "a mensagem (forma)", "poesia, slogans com rima e trocadilho"]
      ]},
      { tipo: "dica", texto: "Os textos combinam funções. A pergunta é sempre a **predominante**." },
      { tipo: "questao", banca: Q, enunciado: "\"Vacine-se! Proteja sua família.\" Nesse cartaz predomina a função:", alternativas: ["referencial", "emotiva", "conativa", "fática", "metalinguística"], correta: "C", comentario: "Imperativos dirigidos ao leitor para convencê-lo: função conativa (apelativa)." }
    ]
  });

  A(SE, "Variação linguística", {
    resumo: "A língua varia por região, grupo social, situação e época, sem \"certo\" absoluto.",
    incidencia: "média",
    blocos: [
      { tipo: "tabela", titulo: "Tipos de variação", cabecalho: ["Tipo", "Causa", "Exemplo"], linhas: [
        ["Diatópica (regional)", "lugar", "\"mandioca\", \"aipim\", \"macaxeira\""],
        ["Diastrática (social)", "grupo social, profissão, idade", "gírias, jargão jurídico"],
        ["Diafásica (situacional)", "grau de formalidade", "\"Prezado senhor\" × \"E aí, beleza?\""],
        ["Diacrônica (histórica)", "tempo", "\"vossa mercê\" → \"vosmecê\" → \"você\""]
      ]},
      { tipo: "texto", texto: [
        "A visão das provas atuais: não há variedade \"errada\", e sim **adequada ou inadequada** à situação. A norma-padrão é a exigida em documentos oficiais e provas. Tratar como inferior quem fala diferente é **preconceito linguístico**."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A troca de \"Excelentíssimo Senhor\" por \"E aí, chefe\" num ofício configura inadequação de que tipo de variação?", alternativas: ["regional", "histórica", "situacional (de registro)", "fonética", "ortográfica"], correta: "C", comentario: "O problema é o grau de formalidade inadequado à situação: variação diafásica (situacional)." }
    ]
  });

  /* ================= REDAÇÃO OFICIAL ================= */

  A(RO, "Manual de Redação da Presidência da República", {
    resumo: "A referência oficial da comunicação escrita do Poder Executivo federal.",
    incidencia: "alta",
    fontes: [MANUAL],
    conferir: "As bancas cobram a 3ª edição (2018). Confira no edital se outro manual (estadual ou municipal) é cobrado.",
    blocos: [
      { tipo: "texto", texto: [
        "O **Manual de Redação da Presidência da República** padroniza as comunicações oficiais do Executivo federal e serve de referência para estados e municípios. Pontos da **3ª edição (2018)** que as bancas cobram:",
        "",
        "- Acabou a distinção entre **aviso, memorando e ofício**: todos passaram a se chamar **ofício**, no **padrão ofício**.",
        "- Tratou do **e-mail** como forma de comunicação oficial.",
        "- Manteve regras que já vinham da 2ª edição: \"Digníssimo\" (DD.) abolido, \"Ilustríssimo\" dispensado e \"Excelentíssimo Senhor\" no vocativo só para chefes de Poder."
      ]},
      { tipo: "tabela", titulo: "Partes do manual", cabecalho: ["Parte", "Conteúdo"], linhas: [["Comunicações oficiais", "princípios, pronomes de tratamento, padrão ofício, e-mail"], ["Atos normativos", "leis, decretos, medidas provisórias e técnica legislativa"], ["Questões gramaticais", "dúvidas frequentes de língua"]] },
      { tipo: "questao", banca: Q, enunciado: "Segundo a 3ª edição do Manual de Redação da Presidência da República, o tratamento \"Digníssimo\":", alternativas: ["é obrigatório para juízes", "deve ser usado para ministros", "foi abolido", "é usado só no envelope", "substitui \"Vossa Excelência\""], correta: "C", comentario: "A 3ª edição aboliu \"Digníssimo\" e \"Ilustríssimo\"." }
    ]
  });

  A(RO, "Princípios: clareza, concisão, impessoalidade e formalidade", {
    resumo: "Os atributos que todo texto oficial deve ter.",
    incidencia: "alta",
    fontes: [MANUAL],
    blocos: [
      { tipo: "tabela", titulo: "Atributos da redação oficial", cabecalho: ["Atributo", "O que significa"], linhas: [
        ["Clareza e precisão", "entendimento imediato, sem ambiguidade; vocabulário comum"],
        ["Objetividade", "ir direto ao ponto, sem rodeios"],
        ["Concisão", "dizer o máximo com o mínimo de palavras, sem perder informação"],
        ["Coesão e coerência", "ideias bem ligadas e lógicas"],
        ["Impessoalidade", "sem impressões pessoais; quem fala é o órgão, não a pessoa"],
        ["Formalidade e padronização", "norma-padrão, tratamento adequado, formato padrão"],
        ["Uso da norma-padrão", "gramática culta, sem gírias, regionalismos ou jargões"]
      ]},
      { tipo: "atencao", texto: "Concisão **não** é cortar informação importante. É eliminar palavras inúteis e repetições: \"Venho por meio deste solicitar\" → \"Solicito\"." },
      { tipo: "questao", banca: Q, enunciado: "Uma frase que atende à concisão é:", alternativas: ["Venho, por meio deste, respeitosamente, solicitar a Vossa Senhoria a gentileza de autorizar…", "Solicito autorização para…", "Gostaria muito, se possível, de pedir autorização para…", "Eu, servidor, na qualidade de requerente, solicito, pelo presente, autorização…", "Por meio do presente expediente, venho requerer a devida autorização…"], correta: "B", comentario: "\"Solicito autorização\" diz tudo com o mínimo de palavras. As outras têm expressões inúteis." }
    ]
  });

  A(RO, "Pronomes de tratamento", {
    resumo: "Vossa Excelência, Vossa Senhoria e a concordância em 3ª pessoa.",
    incidencia: "alta",
    fontes: [MANUAL],
    blocos: [
      { tipo: "tabela", titulo: "Usos principais", cabecalho: ["Pronome", "Abreviatura", "Para quem"], linhas: [
        ["Vossa Excelência", "V. Exa.", "Presidente, ministros, governadores, prefeitos, parlamentares, juízes, membros de tribunais, embaixadores, oficiais-generais"],
        ["Vossa Senhoria", "V. Sa.", "demais autoridades e particulares"],
        ["Vossa Magnificência", "V. Mag.ª", "reitores de universidade"],
        ["Vossa Santidade", "V. S.", "o Papa"]
      ], legenda: "Vocativo: \"Excelentíssimo Senhor\" só para chefes de Poder (Presidente da República, do Congresso, do STF). Demais: \"Senhor + cargo\" (\"Senhor Ministro\", \"Senhor Prefeito\")." },
      { tipo: "atencao", titulo: "Concordância com pronomes de tratamento", texto: [
        "Embora usem \"Vossa\", os pronomes de tratamento levam verbos e possessivos na **3ª pessoa**: \"Vossa Excelência **conhece** o **seu** projeto\" (e não \"conheceis\", \"vosso\").",
        "- **Vossa** Excelência: falando **com** a pessoa.",
        "- **Sua** Excelência: falando **sobre** a pessoa.",
        "- O adjetivo concorda com o sexo da pessoa: \"Vossa Senhoria está **ocupado**\" (para um homem)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Ao se dirigir diretamente a um prefeito, a forma correta é:", alternativas: ["Vossa Excelência sabeis que vosso projeto foi aprovado.", "Sua Excelência sabe que seu projeto foi aprovado.", "Vossa Excelência sabe que seu projeto foi aprovado.", "Vossa Senhoria sabe que seu projeto foi aprovado.", "Vossa Excelência sabe que vosso projeto foi aprovado."], correta: "C", comentario: "Prefeito recebe Vossa Excelência; falando com ele, \"Vossa\"; verbo e possessivo na 3ª pessoa (sabe, seu)." }
    ]
  });

  A(RO, "Padrão ofício e e-mail oficial", {
    resumo: "As partes do documento no padrão ofício e as regras do e-mail.",
    incidencia: "alta",
    fontes: [MANUAL],
    conferir: "Os números de formatação (fonte, corpo e margens) e a regra de numeração de parágrafos foram escritos de memória: confira no capítulo do padrão ofício do Manual.",
    blocos: [
      { tipo: "passos", titulo: "Partes do padrão ofício", itens: [
        "**Cabeçalho**: brasão e nome do órgão (no topo, centralizado).",
        "**Identificação do expediente**: tipo, número e sigla do setor. Ex.: OFÍCIO Nº 12/2026/SMAD.",
        "**Local e data**, alinhados à direita: Curitiba, 10 de novembro de 2026.",
        "**Endereçamento**: vocativo de tratamento, nome, cargo e endereço do destinatário.",
        "**Assunto**: resumo do tema, em negrito.",
        "**Texto**: introdução, desenvolvimento e conclusão, com parágrafos numerados (o fecho não é numerado, nem o texto organizado em itens ou títulos).",
        "**Fecho**: \"Respeitosamente,\" (para autoridade superior) ou \"Atenciosamente,\" (mesma hierarquia ou inferior).",
        "**Assinatura**: nome e cargo do signatário."
      ]},
      { tipo: "texto", titulo: "Formatação", texto: [
        "- Fonte **Calibri** ou **Carlito**, corpo 12 no texto e 11 nas citações, 10 nas notas de rodapé.",
        "- Margens: esquerda 3 cm; direita 1,5 cm; superior e inferior 2 cm.",
        "- Páginas numeradas a partir da segunda."
      ]},
      { tipo: "texto", titulo: "E-mail como documento oficial", texto: [
        "O e-mail é forma válida de comunicação oficial, com os mesmos atributos (clareza, formalidade). O campo **assunto** deve ser preciso. Vale como documento quando há meio de comprovar recebimento ou assinatura digital, conforme o caso."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Fecho para autoridade de hierarquia superior", verso: "Respeitosamente," },
        { frente: "Fecho para mesma hierarquia ou inferior", verso: "Atenciosamente," },
        { frente: "Fonte indicada pela 3ª edição do Manual", verso: "Calibri ou Carlito, corpo 12." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "No padrão ofício, ao escrever para um destinatário de hierarquia inferior, o fecho adequado é:", alternativas: ["Respeitosamente,", "Atenciosamente,", "Cordialmente,", "Saudações,", "Sem mais,"], correta: "B", comentario: "\"Atenciosamente\" para mesma hierarquia ou inferior; \"Respeitosamente\" para superior." }
    ]
  });

  A(RO, "Expedientes oficiais", {
    resumo: "Ofício, memorando, exposição de motivos, mensagem, requerimento e outros.",
    incidencia: "média",
    fontes: [MANUAL],
    conferir: "Requerimento, ata, despacho e parecer não são detalhados no Manual da Presidência; confira o manual cobrado no edital.",
    blocos: [
      { tipo: "tabela", titulo: "Principais expedientes", cabecalho: ["Expediente", "Uso"], linhas: [
        ["Ofício", "comunicação oficial entre órgãos ou com particulares (padrão ofício)"],
        ["Memorando e aviso", "nomes antigos: desde a 3ª edição do Manual, são todos chamados de ofício"],
        ["Exposição de motivos", "de Ministro para o Presidente da República (propor projeto, informar)"],
        ["Mensagem", "do Presidente da República ao Congresso Nacional"],
        ["Requerimento", "pedido formal de um particular ou servidor a uma autoridade"],
        ["Ata", "registro resumido do que se passou numa reunião"],
        ["Parecer", "opinião técnica ou jurídica fundamentada sobre um caso"],
        ["Despacho", "decisão ou encaminhamento da autoridade em um processo"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "O expediente pelo qual um Ministro de Estado se dirige ao Presidente da República para propor um projeto de lei é:", alternativas: ["mensagem", "exposição de motivos", "memorando", "requerimento", "ata"], correta: "B", comentario: "A exposição de motivos vai do Ministro ao Presidente. A mensagem vai do Presidente ao Congresso." }
    ]
  });
})();
