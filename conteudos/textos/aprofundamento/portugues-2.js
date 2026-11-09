/* Aprofundamento · Língua Portuguesa, parte 2: Sintaxe, Pontuação, Semântica e Estilística,
   Redação Oficial. Acrescenta texto, exemplos e questões DEPOIS do que já existe. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos, livros = LIVROS) => ESTUDO.assunto(`nucleo/portugues/${caminho}`, { livros, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Moderna Gramática Portuguesa", autor: "Evanildo Bechara", nota: "Sintaxe completa, com os casos de concordância e regência." },
    { titulo: "Nova Gramática do Português Contemporâneo", autor: "Celso Cunha e Lindley Cintra" },
    { titulo: "Gramática para Concursos Públicos", autor: "Fernando Pestana", nota: "Foco no que as bancas cobram." },
    { titulo: "Dicionário Prático de Regência Verbal e Dicionário Prático de Regência Nominal", autor: "Celso Pedro Luft", nota: "Para tirar a dúvida de qualquer verbo ou nome." },
  ];
  const MANUAL = [
    { titulo: "Manual de Redação da Presidência da República (3ª edição, 2018)", url: "https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica", nota: "Gratuito. É a fonte cobrada nas provas: leia a parte de comunicações oficiais inteira." },
    LIVROS[2],
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar com questões de prova",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Disciplina Língua Portuguesa (ou Redação Oficial), filtrando pela banca." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas por professores." },
      { titulo: "PCI Concursos · provas anteriores", url: "https://www.pciconcursos.com.br/provas/", nota: "Provas completas e gratuitas." },
    ],
  };

  /* ================= SINTAXE ================= */

  A("sintaxe/frase-oracao-e-periodo", [
    aprofundar([
      "### Conte os verbos",
      "- **Frase**: enunciado com sentido completo, com ou sem verbo (“Silêncio!”, “Fogo!”).",
      "- **Oração**: tem verbo ou **locução verbal** (vou chegar, tinha feito, deve ser analisado contam como **um** só).",
      "- **Período**: simples (uma oração) ou composto (duas ou mais).",
      "",
      "Para contar orações, conte os verbos e locuções. Cuidado com verbos auxiliares (ir, ter, haver, ser, estar, dever, poder), que se juntam ao principal.",
    ]),
    PRATICAR,
    q("Quantas orações há em “Quero que você saiba que vou chegar tarde”?", ["1", "2", "3", "4", "5"], "C", "Quero / que você saiba / que vou chegar tarde. “Vou chegar” é uma locução verbal: uma oração."),
    ce("“Fogo!” é uma frase, mas não é uma oração.", "Certo", "Tem sentido completo, mas não tem verbo."),
  ]);

  A("sintaxe/termos-essenciais-da-oracao", [
    aprofundar([
      "### Tipos de sujeito",
      "- **Simples**, **composto** e **oculto** (desinencial: “Estudamos muito”, sujeito nós).",
      "- **Indeterminado**: verbo na 3ª pessoa do plural sem referente (“Roubaram meu carro”) ou verbo **sem objeto direto** + se (“Precisa-se de ajuda”, “Vive-se bem aqui”).",
      "- **Oração sem sujeito**: haver = existir ou tempo decorrido (“Há vagas”, “Há anos”); fazer, estar, ser indicando tempo (“Faz dois anos”, “Era meio-dia”); fenômenos da natureza (“Choveu”). O verbo fica no **singular** (exceto “ser”, que concorda com a hora: “São três horas”).",
      "",
      "### Tipos de predicado",
      "- **Verbal**: núcleo é um verbo de ação (“O servidor **entregou** o relatório”).",
      "- **Nominal**: verbo de ligação + **predicativo do sujeito** (“O servidor **está cansado**”).",
      "- **Verbo-nominal**: verbo de ação + predicativo (“Os alunos **saíram satisfeitos**”): dois núcleos.",
    ]),
    PRATICAR,
    q("Em “Há muitos candidatos na sala”, o sujeito é:", ["simples", "composto", "oculto", "indeterminado", "inexistente (oração sem sujeito)"], "E", "Haver no sentido de existir é impessoal: a oração não tem sujeito; “muitos candidatos” é objeto direto."),
    q("Em “Precisa-se de vendedores”, o sujeito é:", ["simples", "oculto", "indeterminado", "composto", "inexistente"], "C", "Verbo transitivo indireto + se: índice de indeterminação do sujeito."),
    q("Qual frase tem predicado verbo-nominal?", ["O servidor está cansado.", "Os alunos saíram satisfeitos.", "A reunião foi longa.", "O diretor assinou o ofício.", "Choveu muito ontem."], "B", "“Saíram” é ação e “satisfeitos” é predicativo do sujeito: dois núcleos."),
    ce("Em “Fazia dois anos que não o via”, o verbo “fazer” é impessoal e deve ficar no singular.", "Certo", "Fazer indicando tempo decorrido não tem sujeito."),
  ]);

  A("sintaxe/termos-integrantes-da-oracao", [
    aprofundar([
      "### Os quatro",
      "- **Objeto direto**: completa verbo sem preposição obrigatória (“Li **o edital**”). Pode vir preposicionado por ênfase ou clareza (“Amar **a Deus**”).",
      "- **Objeto indireto**: completa verbo com preposição exigida (“Obedeço **aos regulamentos**”).",
      "- **Complemento nominal**: completa nome (substantivo, adjetivo, advérbio) com preposição (“Tenho medo **do escuro**”, “útil **à população**”).",
      "- **Agente da passiva**: quem pratica a ação na voz passiva (“foi aprovado **pelo conselho**”).",
      "",
      "### Complemento nominal × adjunto adnominal",
      "Com substantivo abstrato derivado de verbo, pergunte: o termo **sofre** a ação (complemento nominal) ou **pratica / possui** (adjunto adnominal)?",
      "- “A leitura **do livro**”: o livro é lido → complemento nominal.",
      "- “A leitura **do aluno**”: o aluno lê → adjunto adnominal.",
      "- Se o nome for **adjetivo** ou **advérbio**, o termo com preposição é sempre complemento nominal.",
    ]),
    PRATICAR,
    q("Em “A leitura do livro foi proveitosa”, o termo “do livro” é:", ["objeto indireto", "complemento nominal", "adjunto adnominal", "agente da passiva", "adjunto adverbial"], "B", "O livro sofre a ação de ler: complemento nominal."),
    q("Em “A decisão foi tomada pelo conselho”, o termo “pelo conselho” é:", ["objeto indireto", "complemento nominal", "agente da passiva", "adjunto adnominal", "sujeito"], "C", "Voz passiva analítica: o conselho pratica a ação."),
    ce("Em “Obedeça aos regulamentos”, o termo “aos regulamentos” é objeto indireto.", "Certo", "Obedecer exige a preposição “a”."),
  ]);

  A("sintaxe/termos-acessorios-e-vocativo", [
    aprofundar([
      "### Aposto",
      "- **Explicativo**, entre vírgulas: “Curitiba, **capital do Paraná**, …”.",
      "- **Enumerativo**: “Trouxe tudo: **lápis, caneta e régua**”.",
      "- **Resumitivo**: “Lápis, caneta, régua, **tudo** estava na mesa”.",
      "- **Especificativo**, sem vírgula: “o rio **Iguaçu**”, “a cidade **de Curitiba**”.",
      "",
      "### Vocativo",
      "Chama o interlocutor e fica **fora** da estrutura da oração (não é sujeito nem complemento). Sempre isolado por vírgula: “**Senhores**, a sessão está aberta.”",
      "",
      "### Adjuntos",
      "Adnominal acompanha o nome (artigos, adjetivos, locuções); adverbial indica circunstância (tempo, lugar, modo, causa…).",
    ]),
    PRATICAR,
    q("Em “Curitiba, capital do Paraná, recebeu o evento”, o termo destacado entre vírgulas é:", ["vocativo", "aposto explicativo", "sujeito", "adjunto adverbial", "predicativo"], "B", "Explica quem é Curitiba."),
    q("Em “Senhores, a sessão está aberta”, o termo “Senhores” é:", ["sujeito", "aposto", "vocativo", "objeto direto", "adjunto adnominal"], "C", "Chama os ouvintes."),
    ce("O vocativo faz parte da estrutura da oração e pode exercer a função de sujeito.", "Errado", "O vocativo é termo à parte; não é sujeito nem complemento."),
  ]);

  A("sintaxe/periodo-composto-por-coordenacao", [
    aprofundar([
      "### As cinco coordenadas sindéticas",
      "- **Aditivas**: e, nem, não só… mas também.",
      "- **Adversativas**: mas, porém, contudo, todavia, entretanto, no entanto.",
      "- **Alternativas**: ou… ou, ora… ora, quer… quer.",
      "- **Conclusivas**: logo, portanto, por isso, pois (depois do verbo).",
      "- **Explicativas**: pois (antes do verbo), porque, que (“Estude, **que** a prova está perto”).",
      "",
      "Sem conectivo, separadas só por vírgula, são **assindéticas** (“Cheguei, vi, venci”).",
    ]),
    PRATICAR,
    q("Em “Estude, que a prova está próxima”, a segunda oração é coordenada:", ["aditiva", "adversativa", "alternativa", "conclusiva", "explicativa"], "E", "O “que” justifica a ordem dada (= pois)."),
    q("Em “Ou você estuda, ou trabalha”, as orações são coordenadas:", ["aditivas", "alternativas", "adversativas", "conclusivas", "explicativas"], "B", "Ou… ou: alternância."),
    ce("Em “Não estudou, mas foi aprovado”, a oração introduzida por “mas” é coordenada sindética adversativa.", "Certo", "“Mas” marca oposição."),
  ]);

  A("sintaxe/periodo-composto-por-subordinacao", [
    aprofundar([
      "### Substantivas (trocam por “isso”)",
      "- **Subjetiva**: “É importante **que todos compareçam**” (isso é importante).",
      "- **Objetiva direta**: “Espero **que venha**”. **Objetiva indireta**: “Lembro-me **de que falou**”.",
      "- **Completiva nominal**: “Tenho certeza **de que passará**”. **Predicativa**: “O certo é **que vamos**”. **Apositiva**: “Só quero isto: **que estude**”.",
      "",
      "### Adjetivas (começam por relativo)",
      "- **Restritiva**, sem vírgula: limita o grupo. “Os servidores **que faltaram** foram advertidos” (só os que faltaram).",
      "- **Explicativa**, com vírgulas: vale para o grupo todo. “Os servidores, **que faltaram**, foram advertidos” (todos faltaram).",
      "",
      "### Adverbiais",
      "Causal, consecutiva, concessiva, condicional, conformativa, comparativa, final, proporcional e temporal: o sentido vem da conjunção.",
    ]),
    PRATICAR,
    q("Em “É importante que todos compareçam”, a oração destacada é subordinada substantiva:", ["objetiva direta", "subjetiva", "predicativa", "completiva nominal", "apositiva"], "B", "Ela é o sujeito de “é importante” (isso é importante)."),
    ce("Na frase “Os servidores, que faltaram, foram advertidos”, entende-se que todos os servidores faltaram.", "Certo", "Com vírgulas, a adjetiva é explicativa e se aplica ao grupo inteiro."),
    q("Em “Saí cedo para que não me atrasasse”, a oração destacada expressa:", ["causa", "consequência", "finalidade", "condição", "tempo"], "C", "Para que = a fim de que."),
  ]);

  A("sintaxe/concordancia-verbal", [
    aprofundar([
      "### Casos que mais caem",
      "- **Haver** = existir: singular (“Houve reclamações”); e passa a impessoalidade à locução (“**Deve haver** soluções”).",
      "- **Fazer** tempo: singular (“Faz dez anos”).",
      "- **Sujeito posposto**: concorda normalmente (“**Faltam** dois dias”, “**Chegaram** os documentos”).",
      "- **Mais de um**: singular (“Mais de um candidato **faltou**”).",
      "- **A maioria de / grande parte de** + plural: singular ou plural (“A maioria dos servidores **votou/votaram**”).",
      "- **Um dos que**: plural é o mais usado (“É um dos que mais **estudam**”).",
      "- **Sujeito composto posposto**: plural ou concordância com o mais próximo (“Chegaram/Chegou o diretor e os assessores”).",
    ]),
    PRATICAR,
    q("Qual frase segue a norma-padrão?", ["Haviam muitas pessoas na fila.", "Houve muitas reclamações.", "Faziam dez anos que não o via.", "Devem haver soluções.", "Existe muitas vagas."], "B", "Haver = existir é impessoal (singular). Existir é pessoal: “Existem muitas vagas”."),
    q("Qual frase está correta?", ["Vende-se apartamentos.", "Vendem-se apartamentos.", "Precisam-se de técnicos.", "Aluga-se casas.", "Conserta-se bicicletas."], "B", "Passiva sintética: o verbo concorda com o sujeito paciente (apartamentos)."),
    ce("Em “Faltam dois dias para a prova”, o verbo está corretamente no plural.", "Certo", "O sujeito é “dois dias”, posposto ao verbo."),
  ]);

  A("sintaxe/concordancia-nominal", [
    aprofundar([
      "### Palavras que concordam",
      "**anexo, incluso, obrigado, mesmo, próprio, quite** concordam com o nome: “Seguem **anexas** as planilhas”; “Ela disse: muito **obrigada**”; “Elas **mesmas** resolveram”.",
      "",
      "### Palavras invariáveis",
      "**menos**, **alerta** (como advérbio), **pseudo**, “em anexo”.",
      "",
      "### “É proibido”, “é necessário”, “é bom”",
      "- Sem artigo, invariável: “**É proibido** entrada”; “Água **é bom**”.",
      "- Com artigo ou determinante, concorda: “**É proibida a** entrada”; “**É necessária a** sua presença”.",
      "",
      "### Meio-dia e meia",
      "“Meia” concorda com “hora” subentendida: meio-dia e **meia**.",
    ]),
    PRATICAR,
    q("Complete: “Seguem ___ as planilhas solicitadas.”", ["anexo", "anexos", "anexas", "anexa", "em anexas"], "C", "Anexo concorda com o substantivo: planilhas anexas."),
    ce("A frase “É proibido entrada de pessoas estranhas” está de acordo com a norma-padrão.", "Certo", "Sem artigo antes de “entrada”, a expressão fica invariável."),
    q("Uma servidora agradece. Qual forma é a adequada?", ["Muito obrigado.", "Muito obrigada.", "Muita obrigada.", "Muitos obrigados.", "Obrigado mesmo, todas."], "B", "“Obrigado” concorda com quem fala."),
  ]);

  A("sintaxe/regencia-verbal", [
    aprofundar([
      "### Verbos com sentido que muda a regência",
      "- **Assistir**: ver = **a** (“assisti **ao** filme”); ajudar = direto (“o médico assistiu **o** paciente”).",
      "- **Aspirar**: desejar = **a** (“aspira **ao** cargo”); respirar = direto.",
      "- **Visar**: objetivar = **a** (“visa **ao** lucro”); mirar ou dar visto = direto.",
      "- **Proceder**: realizar = **a** (“procedeu **à** leitura”).",
      "",
      "### Verbos que o povo usa de outro jeito",
      "- **Preferir** algo **a** algo (nunca “mais… do que”).",
      "- **Chegar** e **ir** **a** um lugar (“chegou **à** repartição”).",
      "- **Implicar** (= acarretar): direto (“implica mudanças”).",
      "- **Obedecer** e **desobedecer**: **a**.",
      "- **Lembrar** e **esquecer**: direto, ou pronominal com **de** (“esqueci o prazo” / “esqueci-**me do** prazo”).",
      "- **Pagar** e **perdoar**: direto para a coisa, **a** para a pessoa (“paguei a conta **ao** fornecedor”).",
    ]),
    PRATICAR,
    q("Qual frase segue a norma-padrão?", ["Prefiro mais estudar do que sair.", "Prefiro estudar a sair.", "Prefiro estudar do que sair.", "Prefiro mais estudar a sair.", "Prefiro estudar que sair."], "B", "Preferir algo a algo, sem “mais” e sem “do que”."),
    q("Qual frase está correta?", ["Assistimos o filme ontem.", "Assistimos ao filme ontem.", "Chegamos no prédio cedo.", "Ele visa o cargo de diretor.", "Esqueci do prazo."], "B", "Assistir (ver) pede “a”. Chegamos ao prédio; visa ao cargo; esqueci o prazo ou esqueci-me do prazo."),
    ce("Em “A medida implica mudanças no setor”, a regência do verbo está de acordo com a norma-padrão.", "Certo", "Implicar no sentido de acarretar é transitivo direto."),
    q("Complete: “Depois de horas, chegamos ___ conclusão de que o prazo era curto.”", ["a", "à", "há", "na", "da"], "B", "Chegar a + a conclusão = à."),
  ]);

  A("sintaxe/regencia-nominal", [
    aprofundar([
      "### Nomes e preposições que caem",
      "acessível **a** · apto **a/para** · compatível **com** · preferível **a** · residente **em** · situado **em** · alheio **a** · ansioso **por/para** · contrário **a** · favorável **a** · imune **a/de** · obediente **a** · propenso **a** · relacionado **com/a** · acostumado **a/com** · capaz **de/para**.",
      "",
      "### Preferível",
      "Como em “preferir”, nada de “mais” nem “do que”: “Estudar é **preferível a** decorar.”",
    ]),
    PRATICAR,
    q("Complete: “Esta opção é preferível ___ outra.”", ["do que a", "à", "que a", "em vez da", "mais que a"], "B", "Preferível a + a outra = à outra."),
    ce("A expressão “residente à Rua XV de Novembro” está de acordo com a norma-padrão.", "Errado", "Residente e situado pedem “em”: residente na Rua XV de Novembro."),
  ]);

  A("sintaxe/crase", [
    aprofundar([
      "### Nunca há crase",
      "Antes de palavra **masculina** (“a pé”), **verbo** (“começou a chover”), pronome **pessoal** e de **tratamento** (“a ela”, “a Vossa Senhoria”; exceções: senhora, senhorita, dona), artigo **indefinido** (“a uma servidora”), palavras **repetidas** (“cara a cara”) e “a” singular antes de **plural** (“a pessoas”).",
      "",
      "### Sempre há crase",
      "Locuções **adverbiais, prepositivas e conjuntivas femininas** (às vezes, à noite, à medida que, à custa de), **horas** (às 14h, da 1h às 2h) e “**à moda de**”, mesmo subentendida (“bife à milanesa”).",
      "",
      "### Facultativa",
      "Antes de **possessivo feminino** (“à/a minha casa”), **nome próprio feminino** (“à/a Ana”) e depois de **até** (“até à/a porta”).",
      "",
      "### Casa e terra",
      "Sem especificação, sem crase: “Voltei **a** casa”, “Os marinheiros desceram **a** terra”. Com especificação, com crase: “Voltei **à** casa dos meus pais”.",
    ]),
    PRATICAR,
    q("Em qual frase o acento indicativo de crase está correto?", ["Fui à pé até o trabalho.", "Começou à chover forte.", "Chegamos à noite.", "Refiro-me à Vossa Senhoria.", "Ficaram cara à cara."], "C", "À noite é locução adverbial feminina. Nas outras: masculino, verbo, pronome de tratamento e palavra repetida."),
    ce("Em “Entregou o documento a uma servidora”, não há crase porque antes de artigo indefinido não se usa o acento grave.", "Certo", "Não há artigo definido “a” para se fundir com a preposição."),
    q("Complete: “Voltei ___ casa cedo e depois fui ___ casa dos meus pais.”", ["à / à", "a / à", "à / a", "a / a", "há / à"], "B", "Casa (o próprio lar) sem especificação: sem crase. Com especificação (dos meus pais): crase."),
    q("Complete: “A reunião vai das 14h ___ 16h.”", ["a", "à", "às", "as", "há"], "C", "Das… às: horas determinadas, com crase."),
  ]);

  A("sintaxe/colocacao-pronominal", [
    aprofundar([
      "### Próclise (antes do verbo) é obrigatória com palavras atrativas",
      "- Palavras **negativas** (não, nunca, ninguém, nada): “Não **me** disseram”.",
      "- **Advérbios** sem vírgula depois: “Aqui **se** trabalha”. Com vírgula, a atração some: “Aqui, trabalha-se”.",
      "- **Pronomes relativos e indefinidos**: “O livro que **me** deu”; “Alguém **me** ligou”.",
      "- **Conjunções subordinativas**: “Quando **me** chamaram…”.",
      "",
      "### Ênclise (depois do verbo)",
      "Início de frase (não se começa frase com pronome oblíquo na norma-padrão), imperativo afirmativo, infinitivo e gerúndio: “Entregue-**o**”, “Ao vê-**la**”.",
      "",
      "### Mesóclise (no meio)",
      "Futuro do presente e do pretérito, sem palavra atrativa: “Far-**se**-á a reunião”, “Dir-**te**-ia”.",
      "",
      "### Particípio nunca leva ênclise",
      "“Tinha-**se** esforçado” ou “tinha esforçado-se”? Só a primeira: o pronome se liga ao auxiliar.",
    ]),
    PRATICAR,
    q("Qual frase segue a norma-padrão?", ["Não disseram-me nada.", "Não me disseram nada.", "Me disseram nada.", "Disseram-me não nada.", "Não disseram nada-me."], "B", "A negação atrai o pronome (próclise)."),
    q("Qual frase usa corretamente a mesóclise?", ["Se fará a reunião amanhã.", "Far-se-á a reunião amanhã.", "Fará-se a reunião amanhã.", "Não far-se-á a reunião.", "Fa-se-rá a reunião amanhã."], "B", "Futuro do presente sem palavra atrativa, em início de frase: mesóclise. Com “não”, seria “Não se fará”."),
    ce("Em “Me empresta a caneta?”, a colocação do pronome segue a norma-padrão.", "Errado", "A norma-padrão não admite oblíquo átono no início da frase: “Empresta-me a caneta?”."),
    q("Qual frase está correta?", ["Tinha esforçado-se muito.", "Tinha-se esforçado muito.", "Se tinha esforçado muito.", "Tinha se-esforçado muito.", "Esforçado-se tinha muito."], "B", "O particípio não aceita ênclise; o pronome vai junto do auxiliar."),
  ]);

  /* ================= PONTUAÇÃO ================= */

  A("pontuacao/uso-da-virgula", [
    aprofundar([
      "### Proibido",
      "Separar **sujeito e verbo**, **verbo e complemento**, **nome e complemento nominal**, mesmo quando o sujeito é longo: “Os servidores do setor de compras **,** precisam…” está errado.",
      "",
      "### Obrigatório",
      "- Vocativo e aposto explicativo.",
      "- Adjunto adverbial **deslocado** e longo (curto é opcional): “Na reunião de ontem, o diretor…”.",
      "- Orações **adjetivas explicativas**.",
      "- Conjunções intercaladas (porém, contudo, entretanto, no meio da oração).",
      "- **Elipse do verbo** (zeugma): “Eu prefiro chá; ela, café.”",
      "- Antes de **mas**, **porém**, **contudo** que iniciam oração.",
      "",
      "### Vírgula muda sentido",
      "“Os candidatos que estudaram foram aprovados” (só esses) × “Os candidatos, que estudaram, foram aprovados” (todos estudaram).",
    ]),
    PRATICAR,
    q("Qual frase está pontuada corretamente?", ["Os servidores do setor de compras, precisam renovar o cadastro.", "O diretor, aprovou o projeto.", "Na reunião de ontem, o diretor aprovou o projeto.", "O diretor aprovou, o projeto.", "Entreguei, ao chefe o relatório."], "C", "Adjunto adverbial deslocado no início, separado por vírgula. As outras separam sujeito de verbo ou verbo de complemento."),
    ce("Em “Eu prefiro chá; ela, café”, a vírgula marca a omissão do verbo.", "Certo", "É a vírgula de elipse (zeugma)."),
    ce("A vírgula pode separar o sujeito do verbo quando o sujeito for muito longo.", "Errado", "Na norma-padrão, não se separa sujeito de verbo por vírgula, por mais longo que seja."),
  ]);

  A("pontuacao/ponto-ponto-e-virgula-e-dois-pontos", [
    aprofundar([
      "### Ponto e vírgula",
      "- Separa **itens de enumeração**, como os incisos de uma lei.",
      "- Separa orações coordenadas **longas** ou que já têm vírgulas por dentro.",
      "- Antes de adversativas e conclusivas **deslocadas**: “Estudou muito; não foi, porém, aprovado.”",
      "",
      "### Dois-pontos",
      "Anunciam **citação** (com aspas), **enumeração** ou **explicação/síntese**: “Só havia uma saída: estudar.”",
    ]),
    PRATICAR,
    ce("Nos incisos de leis, é comum o uso de ponto e vírgula para separar os itens.", "Certo", "Os incisos terminam em ponto e vírgula e o último, em ponto."),
    q("Em “Só havia uma saída: estudar todos os dias”, os dois-pontos introduzem:", ["uma citação", "uma explicação do que foi dito antes", "uma fala de personagem", "uma pergunta", "uma ironia"], "B", "Esclarecem qual era a saída."),
  ]);

  A("pontuacao/aspas-parenteses-e-travessao", [
    aprofundar([
      "### Aspas",
      "Citação literal, **ironia** ou sentido especial, estrangeirismos e gírias, títulos de obras (na falta de itálico).",
      "",
      "### Parênteses",
      "Informação acessória, explicações, siglas por extenso (“Instituto Nacional do Seguro Social (INSS)”).",
      "",
      "### Travessão",
      "Fala em diálogo; isola trecho para dar **destaque**, podendo substituir vírgulas ou parênteses (travessão duplo).",
    ]),
    PRATICAR,
    ce("Os travessões duplos podem substituir as vírgulas que isolam um aposto explicativo.", "Certo", "Com o travessão, o trecho ganha destaque."),
    q("Em “Que ‘ótima’ ideia chegar atrasado no dia da prova!”, as aspas indicam:", ["citação", "estrangeirismo", "ironia", "título de obra", "neologismo"], "C", "A palavra é usada com sentido oposto ao literal."),
  ]);

  /* ================= SEMÂNTICA E ESTILÍSTICA ================= */

  A("semantica-e-estilistica/sinonimia-antonimia-e-polissemia", [
    aprofundar([
      "### Polissemia × homonímia",
      "- **Polissemia**: uma palavra, vários sentidos **ligados** (“o **pé** da mesa”, “o **pé** da serra”).",
      "- **Homonímia**: palavras **diferentes** com a mesma forma (são = sadio, são = santo, são = verbo ser).",
      "",
      "### Hiperônimo e hipônimo",
      "Hiperônimo é o termo geral (flor, veículo); hipônimo é o específico (rosa, ônibus). Ótimo recurso de coesão: retoma-se “o ônibus” com “o veículo”.",
      "",
      "### Sinônimo depende do contexto",
      "Na prova, a troca de palavras precisa manter o sentido **naquela frase**: “ratificou a decisão” = confirmou; “retificou o edital” = corrigiu.",
    ]),
    PRATICAR,
    q("Em “O servidor ratificou a decisão da chefia”, “ratificou” pode ser substituído, sem alterar o sentido, por:", ["corrigiu", "confirmou", "anulou", "adiou", "contestou"], "B", "Ratificar = confirmar. Retificar = corrigir."),
    ce("“Flor” é hiperônimo de “rosa”.", "Certo", "Flor é o termo mais geral."),
    q("Qual frase apresenta polissemia da palavra destacada em relação a “a boca do rio”?", ["Ele fechou a **boca**.", "Ela tem a **boca** pintada.", "Lavou a **boca** com água.", "Encontrei-o na **boca** do túnel.", "A criança abriu a **boca**."], "D", "“Boca do rio” e “boca do túnel” usam o mesmo sentido figurado ligado ao original: abertura, entrada."),
  ]);

  A("semantica-e-estilistica/denotacao-e-conotacao", [
    aprofundar([
      "### Denotação",
      "Sentido literal, de dicionário. É a linguagem preferida em textos técnicos, científicos e **oficiais**.",
      "",
      "### Conotação",
      "Sentido figurado, que depende do contexto: “Ele tem um **coração de pedra**”. Aparece em literatura, publicidade, crônica e na fala do dia a dia.",
    ]),
    PRATICAR,
    q("Em “Ele tem um coração de pedra”, a linguagem é:", ["denotativa", "conotativa", "técnica", "científica", "referencial"], "B", "Sentido figurado: insensível."),
    ce("Textos técnicos e oficiais devem preferir a linguagem denotativa.", "Certo", "Clareza e objetividade pedem o sentido literal."),
  ]);

  A("semantica-e-estilistica/figuras-de-linguagem", [
    aprofundar([
      "### As que mais caem, em uma linha",
      "- **Metáfora**: comparação sem “como” (“Ela é uma flor”). **Comparação**: com “como” (“forte como um touro”).",
      "- **Metonímia**: troca por proximidade, como autor pela obra (“Li **Machado**”), continente pelo conteúdo (“bebeu dois **copos**”), marca pelo produto.",
      "- **Hipérbole**: exagero (“chorei rios”). **Eufemismo**: suaviza (“partiu desta para melhor”).",
      "- **Ironia**: diz o contrário do que pensa. **Antítese**: ideias opostas (“riso e choro”). **Paradoxo** (oxímoro): opostos ao mesmo tempo (“contentamento descontente”).",
      "- **Prosopopeia** (personificação): ação humana para coisa (“o vento cantava”).",
      "- **Sinestesia**: mistura de sentidos (“olhar **gelado**”, “voz **doce**”).",
      "- **Pleonasmo**: repetição de ideia; vicioso quando não acrescenta nada (“subir para cima”).",
      "- **Catacrese**: metáfora já cristalizada por falta de palavra própria (“pé da mesa”, “braço da cadeira”).",
    ]),
    PRATICAR,
    q("Em “Li Machado de Assis nas férias”, há:", ["metáfora", "metonímia", "hipérbole", "eufemismo", "antítese"], "B", "Autor pela obra."),
    q("Em “Já te disse isso um milhão de vezes”, há:", ["eufemismo", "ironia", "hipérbole", "catacrese", "metonímia"], "C", "Exagero intencional."),
    q("Em “Ele partiu desta para melhor”, há:", ["hipérbole", "eufemismo", "paradoxo", "prosopopeia", "pleonasmo"], "B", "Suaviza a ideia de morrer."),
    ce("Em “É um contentamento descontente” (Camões), há paradoxo.", "Certo", "Duas ideias opostas atribuídas ao mesmo ser, ao mesmo tempo."),
    q("Em “Ela me lançou um olhar gelado”, a figura é:", ["sinestesia", "antítese", "metonímia", "comparação", "catacrese"], "A", "Mistura visão (olhar) com tato (gelado)."),
  ]);

  A("semantica-e-estilistica/funcoes-da-linguagem", [
    aprofundar([
      "### Cada função olha para um elemento da comunicação",
      "- **Referencial** (contexto): informar. Notícias, textos técnicos.",
      "- **Emotiva** (emissor): sentimentos de quem fala, 1ª pessoa.",
      "- **Conativa ou apelativa** (receptor): convencer ou mandar; imperativo, vocativo. Publicidade.",
      "- **Fática** (canal): testar ou manter o contato (“Alô?”, “Entendeu?”).",
      "- **Metalinguística** (código): a língua falando da língua (dicionário, gramática, poema sobre o poema).",
      "- **Poética** (mensagem): trabalho com a forma (rima, ritmo, sonoridade).",
    ]),
    PRATICAR,
    q("Num cartaz: “Vacine-se já! Proteja quem você ama.” A função predominante é:", ["referencial", "emotiva", "conativa", "fática", "metalinguística"], "C", "Imperativo dirigido ao leitor."),
    q("Um verbete de dicionário apresenta predominantemente a função:", ["poética", "metalinguística", "fática", "emotiva", "conativa"], "B", "Usa a língua para explicar a própria língua."),
    ce("“Alô, está me ouvindo?” é exemplo de função fática.", "Certo", "Testa o canal de comunicação."),
  ]);

  A("semantica-e-estilistica/variacao-linguistica", [
    aprofundar([
      "### Os quatro tipos",
      "- **Diatópica** (geográfica): mandioca, aipim, macaxeira.",
      "- **Diastrática** (social): grupo, idade, profissão (gírias, jargões).",
      "- **Diafásica** (situacional): o registro muda conforme a situação (conversa com amigos × entrevista de emprego).",
      "- **Diacrônica** (histórica): “vossa mercê” → “vosmecê” → “você”.",
      "",
      "### Adequação, não “certo e errado”",
      "Para a linguística, as variantes são legítimas; o que existe é **adequação** à situação. A norma-padrão é a variante exigida em textos oficiais e na prova. Desprezar a fala de alguém pela forma é **preconceito linguístico**.",
    ]),
    PRATICAR,
    q("O uso de “mandioca”, “aipim” e “macaxeira” para o mesmo alimento é exemplo de variação:", ["histórica", "geográfica", "social", "situacional", "estilística"], "B", "Muda conforme a região do país."),
    ce("Para a linguística, as variantes populares são erros que devem ser eliminados da língua.", "Errado", "A linguística fala em adequação ao contexto, não em erro; tratar variantes como erro é preconceito linguístico."),
  ]);

  /* ================= REDAÇÃO OFICIAL ================= */

  A("redacao-oficial/manual-de-redacao-da-presidencia-da-republica", [
    aprofundar([
      "### Por que ler o Manual inteiro",
      "Ele é curto, gratuito e as bancas copiam frases dele. As partes cobradas são: aspectos gerais da redação oficial (atributos), pronomes de tratamento, padrão ofício, exposição de motivos, mensagem e correio eletrônico.",
      "",
      "### Novidades da 3ª edição (2018) que mais caem",
      "- **Ofício** passou a ser o nome único dos antigos aviso, memorando e ofício.",
      "- Fonte Calibri ou Carlito; texto em corpo 12.",
      "- Mantidos: “Digníssimo” abolido; “Excelentíssimo Senhor” só no vocativo dos chefes de Poder.",
      "",
      "Confira sempre se o seu edital cobra o Manual federal ou um manual estadual ou municipal.",
    ]),
    PRATICAR,
    ce("Na 3ª edição do Manual de Redação da Presidência da República, os antigos aviso, memorando e ofício passaram a ser chamados apenas de ofício.", "Certo", "É uma das mudanças mais cobradas da edição de 2018."),
    q("Segundo o Manual, o vocativo “Excelentíssimo Senhor” é reservado:", ["a todas as autoridades", "aos chefes de Poder", "aos ministros de Estado", "aos prefeitos", "aos reitores"], "B", "Para as demais autoridades, usa-se “Senhor” + cargo (“Senhor Ministro,”)."),
  ], MANUAL);

  A("redacao-oficial/principios-clareza-concisao-impessoalidade-e-formalidade", [
    aprofundar([
      "### Os atributos, sem exagero",
      "- **Clareza e precisão**: uma leitura basta para entender. Evite ambiguidade e jargão.",
      "- **Objetividade e concisão**: diga o necessário com o mínimo de palavras, **sem cortar informação essencial**.",
      "- **Impessoalidade**: quem comunica é o **órgão**, não a pessoa; nada de opiniões pessoais, elogios, ironia ou intimidade.",
      "- **Formalidade e padronização**: norma-padrão, tratamento adequado e o mesmo formato em todos os documentos.",
      "- **Coesão e coerência**: o texto se sustenta sozinho.",
    ]),
    PRATICAR,
    q("Qual trecho fere o princípio da impessoalidade num ofício?", ["“Encaminhamos o relatório solicitado.”", "“Informamos que o prazo foi prorrogado.”", "“Pessoalmente, acho essa medida um absurdo, querido colega.”", "“Solicitamos a indicação de um representante.”", "“Comunicamos a realização da audiência.”"], "C", "Opinião pessoal e intimidade não cabem na comunicação oficial."),
    ce("Clareza e concisão significam escrever um texto curto a qualquer custo, ainda que se omitam informações essenciais.", "Errado", "Concisão é economia de palavras, não de conteúdo necessário."),
  ], MANUAL);

  A("redacao-oficial/pronomes-de-tratamento", [
    aprofundar([
      "### Vossa × Sua",
      "**Vossa** Excelência quando se fala **com** a autoridade; **Sua** Excelência quando se fala **sobre** ela.",
      "",
      "### Concordância",
      "- O verbo vai para a **3ª pessoa**: “Vossa Excelência **está**…” (nunca “estais”).",
      "- Pronomes possessivos também na 3ª: “Vossa Senhoria e **seu** assessor” (não “vosso”).",
      "- Adjetivos concordam com o **sexo da pessoa**: “Vossa Excelência está **atarefado**” (para um homem).",
      "",
      "### Quem recebe o quê (resumo)",
      "**Vossa Excelência**: altas autoridades dos três Poderes (Presidente, ministros, parlamentares, governadores, prefeitos, juízes…). **Vossa Senhoria**: demais autoridades e particulares. **Vossa Magnificência**: reitores.",
    ]),
    PRATICAR,
    q("Num ofício a um ministro, qual frase está correta?", ["Vossa Excelência estais convidado para a reunião.", "Vossa Excelência está convidado para a reunião.", "Sua Excelência estás convidado para a reunião.", "Vossa Excelência e vosso assessor estão convidados.", "Vossas Excelência está convidado."], "B", "Verbo na 3ª pessoa e adjetivo concordando com o sexo do destinatário. O possessivo seria “seu”."),
    ce("Ao se referir a um ministro (falar sobre ele, e não com ele), usa-se “Sua Excelência”.", "Certo", "Vossa: com quem se fala. Sua: de quem se fala."),
    q("O vocativo adequado para o Presidente da República é:", ["Ilustríssimo Senhor Presidente,", "Digníssimo Senhor Presidente,", "Excelentíssimo Senhor Presidente da República,", "Prezado Presidente,", "Senhor Doutor Presidente,"], "C", "“Excelentíssimo Senhor” é reservado aos chefes de Poder; “Ilustríssimo” e “Digníssimo” não se usam mais."),
  ], MANUAL);

  A("redacao-oficial/padrao-oficio-e-e-mail-oficial", [
    aprofundar([
      "### Estrutura do texto",
      "- **Introdução**: apresenta o assunto, sem rodeios (evite “Tenho a honra de…”).",
      "- **Desenvolvimento**: detalha; um assunto por parágrafo.",
      "- **Conclusão**: reafirma a posição ou o pedido.",
      "",
      "### Fecho",
      "Só dois: **Respeitosamente,** (autoridade de hierarquia superior) e **Atenciosamente,** (mesma hierarquia ou inferior).",
      "",
      "### E-mail",
      "Pode ser comunicação oficial. Campo **assunto** preenchido de forma que facilite a organização, linguagem formal e, quando o valor documental importa, a confirmação de recebimento ou a assinatura/certificação digital.",
    ]),
    PRATICAR,
    q("Ao escrever para uma autoridade de hierarquia superior, o fecho do ofício deve ser:", ["Atenciosamente,", "Respeitosamente,", "Cordialmente,", "Saudações,", "Sem mais para o momento,"], "B", "Respeitosamente para superior; atenciosamente para mesma hierarquia ou inferior."),
    ce("O fecho “Atenciosamente” é usado para autoridades de mesma hierarquia ou de hierarquia inferior.", "Certo", "É a regra do Manual."),
    q("Segundo o Manual, a introdução de um ofício deve:", ["começar com “Tenho a honra de informar…”", "apresentar o assunto diretamente", "elogiar o destinatário", "repetir o cabeçalho", "citar a legislação inteira"], "B", "Fórmulas como “Tenho a honra de…” são desaconselhadas: vá direto ao assunto."),
  ], MANUAL);

  A("redacao-oficial/expedientes-oficiais", [
    aprofundar([
      "### Quem manda o quê para quem",
      "- **Exposição de motivos**: de **Ministro** de Estado para o **Presidente** da República (propor medida, submeter projeto, informar).",
      "- **Mensagem**: do **Presidente** para o **Congresso Nacional** (encaminhar projeto de lei, vetos, abertura do ano legislativo).",
      "- **Ofício**: comunicações entre órgãos e com particulares (nome único desde a 3ª edição).",
      "- **Correio eletrônico**: comunicação rápida, com as cautelas de formalidade e registro.",
    ]),
    PRATICAR,
    q("O expediente que o Presidente da República usa para encaminhar um projeto de lei ao Congresso Nacional é:", ["ofício", "exposição de motivos", "mensagem", "memorando", "requerimento"], "C", "Mensagem: do Presidente ao Congresso."),
    ce("A exposição de motivos é dirigida ao Presidente da República por Ministro de Estado.", "Certo", "Pode ser assinada por mais de um ministro quando o assunto envolve mais de uma pasta."),
  ], MANUAL);
})();
