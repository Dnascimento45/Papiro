/* Aprofundamento · Lei 8.112/1990 (parte 2): regime disciplinar, processo administrativo disciplinar e seguridade social do servidor.
   Acrescenta texto, tabelas e questões DEPOIS do que já existe em textos/lei-8112.js. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`bloco-a/lei-8112/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const atencao = (texto, titulo = "Pegadinha de prova") => ({ tipo: "atencao", titulo, texto });
  /* Embaralha as alternativas de forma fixa (a partir do enunciado), para o gabarito não ficar sempre na mesma letra.
     Listas numéricas ficam na ordem original. */
  const misturar = (alts, ix, semente) => {
    if (alts.length < 3 || alts.every((a) => /^\d/.test(a))) return [alts, ix];
    let h = 0;
    for (const c of semente) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const ordem = alts.map((_, i) => i);
    for (let i = ordem.length - 1; i > 0; i--) {
      h = (h * 1103515245 + 12345) >>> 0;
      const j = h % (i + 1);
      [ordem[i], ordem[j]] = [ordem[j], ordem[i]];
    }
    return [ordem.map((i) => alts[i]), ordem.indexOf(ix)];
  };
  const q = (enunciado, alternativas, correta, comentario) => {
    if (alternativas.length < 3) return { tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario }; // Certo/Errado
    const [alts, ix] = misturar(alternativas, "ABCDE".indexOf(correta), enunciado);
    return { tipo: "questao", banca: Q, enunciado, alternativas: alts, correta: "ABCDE"[ix], comentario };
  };
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Lei 8.112/1990 (texto compilado) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm", nota: "Os títulos IV (regime disciplinar) e V (processo disciplinar) são os mais cobrados." },
    { titulo: "Manual de Processo Administrativo Disciplinar", autor: "Controladoria-Geral da União (CGU)", nota: "Guia prático do PAD, com os prazos e as fases explicados; gratuito no site da CGU." },
    { titulo: "Direito Administrativo Descomplicado", autor: "Marcelo Alexandrino e Vicente Paulo", nota: "Quadros-resumo de penalidades e de prazos de prescrição." },
    { titulo: "Súmulas do STJ e Súmula Vinculante 5 do STF", nota: "Prescrição disciplinar (STJ, Súmula 635), demissão por improbidade (STJ, Súmula 651) e defesa técnica no PAD (SV 5)." },
  ];

  /* ================= REGIME DISCIPLINAR ================= */

  A("regime-disciplinar/deveres-do-servidor", [
    aprofundar([
      "### Os 12 deveres do art. 116",
      "1. **Zelo e dedicação** nas atribuições do cargo.",
      "2. **Lealdade** às instituições a que servir.",
      "3. **Observar** as normas legais e regulamentares.",
      "4. **Cumprir as ordens superiores**, exceto quando **manifestamente ilegais**.",
      "5. **Atender com presteza**: ao público (informações, ressalvado o sigilo), às **certidões** para defesa de direito e às requisições para a defesa da Fazenda Pública.",
      "6. **Levar à autoridade superior** as irregularidades de que tiver ciência em razão do cargo.",
      "7. **Zelar pela economia** do material e conservação do patrimônio público.",
      "8. **Guardar sigilo** sobre assunto da repartição.",
      "9. Manter **conduta compatível com a moralidade administrativa**.",
      "10. Ser **assíduo e pontual**.",
      "11. Tratar **com urbanidade** as pessoas.",
      "12. **Representar** contra ilegalidade, omissão ou abuso de poder.",
      "",
      "### A representação (inciso XII)",
      "É encaminhada **pela via hierárquica** e apreciada pela autoridade **superior àquela contra a qual é formulada**, assegurando-se ao representado **ampla defesa**.",
      "",
      "### Ordem ilegal",
      "O dever é cumprir ordem superior **exceto se manifestamente ilegal**. O servidor que cumpre ordem manifestamente ilegal responde pelo ato.",
      "",
      "### Proteção a quem denuncia (art. 126-A)",
      "Nenhum servidor pode ser responsabilizado civil, penal ou administrativamente por **dar ciência à autoridade superior** (ou a outra competente) de informação sobre crimes ou improbidade de que tenha conhecimento.",
    ]),
    atencao("Descumprir um **dever** (art. 116) leva, em regra, a **advertência** ou outra sanção por gravidade. Violar uma **proibição** (art. 117) depende do inciso: advertência, suspensão ou demissão."),
    q("Segundo a Lei 8.112, é dever do servidor cumprir as ordens superiores, exceto quando:", ["contrárias à sua opinião", "manifestamente ilegais", "dadas por escrito", "dadas por chefe de outro órgão", "inoportunas"], "B", "Art. 116, IV."),
    ce("A representação contra ilegalidade, omissão ou abuso de poder é encaminhada pela via hierárquica e apreciada pela autoridade superior àquela contra a qual é formulada.", "Certo", "Art. 116, parágrafo único."),
    q("É dever do servidor, nos termos da Lei 8.112:", ["aceitar presentes de pequeno valor", "guardar sigilo sobre assunto da repartição", "exercer comércio, desde que fora do horário de trabalho", "retirar documento da repartição para estudo em casa", "recusar-se a prestar informações ao público"], "B", "Art. 116, VIII."),
  ]);

  A("regime-disciplinar/proibicoes", [
    aprofundar([
      "### As 19 proibições do art. 117",
      "O servidor **não pode**:",
      "1. ausentar-se do serviço durante o expediente **sem autorização** do chefe imediato;",
      "2. retirar, modificar ou substituir, sem autorização, **documento ou objeto** da repartição;",
      "3. **recusar fé** a documentos públicos;",
      "4. opor **resistência injustificada** ao andamento de documento, processo ou serviço;",
      "5. promover **manifestação de apreço ou desapreço** no recinto da repartição;",
      "6. cometer a **pessoa estranha** à repartição o desempenho de atribuição sua ou de subordinado;",
      "7. **coagir ou aliciar subordinados** à filiação a associação profissional, sindical ou partido;",
      "8. manter sob sua chefia imediata, em cargo de confiança, **cônjuge, companheiro ou parente até o 2º grau civil**;",
      "9. valer-se do cargo para lograr **proveito pessoal** ou de outrem;",
      "10. participar de **gerência ou administração de sociedade privada** ou exercer **comércio**, exceto como **acionista, cotista ou comanditário**;",
      "11. atuar como **procurador ou intermediário** junto a repartições públicas, salvo benefícios previdenciários ou assistenciais de **parentes até o 2º grau**, cônjuge ou companheiro;",
      "12. receber **propina, comissão, presente ou vantagem** em razão das atribuições;",
      "13. aceitar **comissão, emprego ou pensão de estado estrangeiro**;",
      "14. praticar **usura**;",
      "15. proceder de forma **desidiosa**;",
      "16. utilizar **pessoal ou recursos materiais** da repartição em serviços particulares;",
      "17. cometer a outro servidor **atribuições estranhas ao cargo**, salvo emergência e transitoriedade;",
      "18. exercer atividades **incompatíveis** com o cargo e com o horário de trabalho;",
      "19. **recusar-se a atualizar dados cadastrais** quando solicitado.",
      "",
      "### Exceções ao inciso X",
      "Não se aplica à participação em **conselhos de administração e fiscal** de empresas em que a União tenha participação, nem a quem está em **licença para interesses particulares**, observada a legislação sobre conflito de interesses.",
      "",
      "### Que pena para cada grupo",
      "- **Incisos I a VIII e XIX**: **advertência** (se não houver reincidência).",
      "- **Incisos IX a XVI**: **demissão** (art. 132, XIII).",
      "- **Incisos XVII e XVIII**: **suspensão** (as demais proibições), com reincidência em advertência.",
    ]),
    atencao("Para a **pena**, memorize em blocos: **I a VIII e XIX = advertência**; **IX a XVI = demissão**; **XVII e XVIII = suspensão**. A banca descreve a conduta e pergunta a sanção."),
    q("A conduta de valer-se do cargo para lograr proveito pessoal em detrimento da dignidade da função pública (art. 117, IX) sujeita o servidor, em regra, à penalidade de:", ["advertência", "suspensão de até 15 dias", "suspensão de até 90 dias", "demissão", "multa"], "D", "Art. 132, XIII: a transgressão dos incisos IX a XVI do art. 117 leva à demissão."),
    ce("A participação do servidor como acionista, cotista ou comanditário em sociedade privada é vedada pela Lei 8.112.", "Errado", "O inciso X veda a gerência ou administração e o comércio, exceto como acionista, cotista ou comanditário."),
    q("A recusa do servidor em atualizar seus dados cadastrais quando solicitado:", ["é permitida", "é infração que, em regra, leva à advertência", "leva à demissão", "leva à suspensão de 90 dias", "constitui apenas falta ética, sem sanção"], "B", "Art. 117, XIX, e art. 129: advertência."),
    q("É vedado ao servidor manter sob sua chefia imediata, em cargo ou função de confiança:", ["colega de faculdade", "cônjuge, companheiro ou parente até o segundo grau civil", "amigo pessoal", "servidor aprovado em concurso", "ex-subordinado"], "B", "Art. 117, VIII."),
  ]);

  A("regime-disciplinar/acumulacao-de-cargos", [
    aprofundar([
      "### Regra e exceções (CF, art. 37, XVI)",
      "A acumulação remunerada é **vedada**, salvo havendo **compatibilidade de horários** e observado o **teto**, em três casos:",
      "- **dois cargos de professor**;",
      "- **um cargo de professor com outro, técnico ou científico**;",
      "- **dois cargos ou empregos privativos de profissionais de saúde**, com profissões regulamentadas.",
      "",
      "### Alcance (art. 118 da Lei 8.112)",
      "A proibição estende-se a cargos, empregos e funções em **autarquias, fundações, empresas públicas e sociedades de economia mista** da União, dos Estados, do DF, dos Territórios e dos Municípios. Mesmo a acumulação lícita **exige compatibilidade de horários**. Considera-se acumulação proibida **receber vencimento de cargo efetivo com proventos de inatividade**, salvo quando os cargos forem acumuláveis na atividade.",
      "",
      "### Cargos em comissão (arts. 119 e 120)",
      "- Não se pode exercer **mais de um cargo em comissão**, nem ser remunerado por participação em **órgão de deliberação coletiva** (salvo conselhos de administração e fiscal de empresas estatais, na forma da legislação).",
      "- Quem acumula licitamente dois cargos efetivos e é investido em comissão fica **afastado de ambos**, salvo compatibilidade de horário e local declarada pelas autoridades máximas.",
      "",
      "### Acumulação ilegal",
      "Detectada, a autoridade notifica o servidor para **optar em 10 dias improrrogáveis**. Omitindo-se, abre-se **rito sumário**. A opção até o último dia do prazo de defesa configura **boa-fé** e vira pedido de exoneração do outro cargo. Provada a **má-fé**, aplica-se **demissão** (art. 132, XII), com devolução do que foi indevidamente recebido.",
    ]),
    atencao("A lista da CF é **taxativa** e exige **compatibilidade de horários**. Se a prova diz \"dois cargos de médico, sem se preocupar com horário\", está errada."),
    q("A acumulação remunerada de dois cargos públicos é, em regra, vedada, admitindo-se a de:", ["dois cargos de professor, havendo compatibilidade de horários", "um cargo de professor com outro de gerência administrativa", "quaisquer dois cargos técnicos", "dois cargos em comissão", "um cargo efetivo e um cargo de direção, sempre"], "A", "CF, art. 37, XVI, a, com compatibilidade de horários."),
    ce("Detectada acumulação ilegal, o servidor será notificado para optar no prazo improrrogável de dez dias, e sua omissão leva à adoção do procedimento sumário.", "Certo", "Art. 133."),
    q("A opção do servidor por um dos cargos até o último dia do prazo de defesa, na acumulação ilegal:", ["configura má-fé", "configura boa-fé e converte-se automaticamente em pedido de exoneração do outro cargo", "gera demissão dos dois cargos", "é irrelevante para o processo", "obriga a cassação da aposentadoria"], "B", "Art. 133, § 5º."),
    q("A Lei 8.112 considera acumulação proibida a percepção de vencimento de cargo efetivo com proventos de inatividade, salvo quando:", ["o servidor tiver mais de 60 anos", "os cargos de que decorram forem acumuláveis na atividade", "o provento for inferior a dois salários mínimos", "houver autorização do chefe", "o servidor for professor, apenas"], "B", "Art. 118, § 3º."),
  ]);

  A("regime-disciplinar/responsabilidades-civil-penal-e-administrativa", [
    aprofundar([
      "### Três esferas (art. 121)",
      "O servidor responde **civil, penal e administrativamente** pelo exercício irregular de suas atribuições. As sanções podem **cumular-se** e são **independentes entre si** (art. 125).",
      "",
      "### Responsabilidade civil (art. 122)",
      "Decorre de ato **omissivo ou comissivo, doloso ou culposo**, que resulte em prejuízo ao **erário** ou a **terceiros**.",
      "- Prejuízo causado **dolosamente** ao erário: só se liquida pelo desconto em folha (art. 46) **na falta de outros bens** que assegurem a execução pela via judicial.",
      "- Dano causado a **terceiros**: o servidor responde perante a Fazenda Pública, em **ação regressiva** (a vítima aciona o Estado, que depois cobra do servidor).",
      "- A obrigação de reparar o dano **estende-se aos sucessores**, até o limite da herança recebida.",
      "",
      "### Responsabilidade penal (art. 123)",
      "Abrange os **crimes e contravenções** imputados ao servidor nessa qualidade.",
      "",
      "### Responsabilidade administrativa (art. 124)",
      "Resulta de ato omissivo ou comissivo praticado no desempenho do cargo ou função.",
      "",
      "### Comunicação entre esferas (art. 126)",
      "A responsabilidade administrativa é **afastada** na absolvição **criminal** que **negue a existência do fato ou sua autoria**. Absolvição por **falta de provas** ou por **atipicidade** não afasta a esfera administrativa.",
    ]),
    atencao("\"As instâncias são independentes\" é a regra; a **exceção** é a absolvição criminal que nega **o fato ou a autoria**. Absolvição por insuficiência de provas **não** vincula a Administração."),
    q("A absolvição criminal afasta a responsabilidade administrativa do servidor quando:", ["houver insuficiência de provas", "negar a existência do fato ou sua autoria", "reconhecer prescrição da pretensão punitiva", "o servidor for primário", "o crime for contravenção"], "B", "Art. 126."),
    ce("As sanções civis, penais e administrativas aplicadas ao servidor são independentes entre si e podem cumular-se.", "Certo", "Art. 125."),
    q("No caso de dano causado a terceiros por servidor, a responsabilização do servidor perante a Fazenda Pública ocorre por meio de:", ["multa administrativa", "ação regressiva", "representação ao Ministério Público", "desconto automático em folha, sem defesa", "ação popular"], "B", "Art. 122, § 2º."),
  ]);

  A("regime-disciplinar/penalidades", [
    aprofundar([
      "### As seis penalidades (art. 127)",
      "**Advertência**; **suspensão**; **demissão**; **cassação de aposentadoria ou disponibilidade**; **destituição de cargo em comissão**; **destituição de função comissionada**.",
      "",
      "### Critérios de dosimetria (art. 128)",
      "A natureza e a gravidade da infração; os danos ao serviço público; as circunstâncias agravantes ou atenuantes; os antecedentes funcionais. O ato de punição cita sempre o **fundamento legal** e a **causa** da sanção.",
      "",
      "### Advertência (art. 129)",
      "**Por escrito**, nas violações do art. 117, incisos I a VIII e XIX, e na inobservância de dever funcional que não justifique pena mais grave.",
      "",
      "### Suspensão (art. 130)",
      "Para **reincidência** em falta punida com advertência e para as demais proibições que não levem à demissão. **Máximo de 90 dias**. Quem se recusa injustificadamente a se submeter à inspeção médica determinada: suspensão de **até 15 dias**, que cessa com o cumprimento da determinação. Pode ser convertida em **multa de 50% por dia** de vencimento, se houver conveniência para o serviço, ficando o servidor obrigado a permanecer em serviço.",
      "",
      "### Demissão (art. 132): 13 hipóteses",
      "Crime contra a administração pública; **abandono de cargo**; **inassiduidade habitual**; **improbidade**; incontinência pública e conduta escandalosa; insubordinação grave em serviço; ofensa física em serviço (salvo legítima defesa); **aplicação irregular de dinheiros públicos**; revelação de segredo; lesão aos cofres públicos e dilapidação do patrimônio; **corrupção**; **acumulação ilegal**; transgressão dos incisos **IX a XVI** do art. 117.",
      "- **Abandono**: ausência **intencional** por **mais de 30 dias consecutivos** (art. 138).",
      "- **Inassiduidade habitual**: faltas sem causa justificada por **60 dias, interpoladamente, em 12 meses** (art. 139).",
      "",
      "### Outras penas",
      "- **Cassação de aposentadoria ou disponibilidade**: do inativo que cometeu, na atividade, falta punível com demissão.",
      "- **Destituição de cargo em comissão** (de quem não é efetivo): para infrações sujeitas a suspensão ou demissão.",
      "",
      "### Efeitos da demissão",
      "- Nos casos de **improbidade, aplicação irregular de dinheiros públicos, lesão aos cofres públicos e corrupção** (art. 132, IV, VIII, X e XI): **indisponibilidade dos bens** e **ressarcimento ao erário**.",
      "- Nos casos dos incisos **I, III, IV, VIII, X e XI**: incompatibiliza para nova investidura em cargo público federal por **5 anos**. Nos incisos **I, IV, VIII, X e XI**, o servidor **não pode retornar** ao serviço público federal.",
    ]),
    {
      tipo: "tabela",
      titulo: "Prescrição da ação disciplinar (art. 142) e competência (art. 141)",
      cabecalho: ["Pena", "Prescrição", "Quem aplica"],
      linhas: [
        ["Advertência", "180 dias", "Chefe da repartição e outras autoridades, conforme regimento"],
        ["Suspensão até 30 dias", "2 anos", "Chefe da repartição e outras autoridades, conforme regimento"],
        ["Suspensão superior a 30 dias", "2 anos", "Autoridade de hierarquia imediatamente inferior à da demissão"],
        ["Demissão, cassação, destituição", "5 anos", "Presidente da República, Presidentes das Casas, Tribunais e PGR (demissão e cassação); autoridade que nomeou (destituição)"],
      ],
    },
    aprofundar([
      "### Prescrição: como funciona",
      "- O prazo começa a correr da data em que o fato **se tornou conhecido**.",
      "- Se o fato também é **crime**, aplica-se o prazo **da lei penal**.",
      "- A abertura de **sindicância** ou a instauração do **processo disciplinar** interrompe a prescrição **até a decisão final**.",
      "- Pela **Súmula 635 do STJ**: o prazo começa quando a autoridade competente **para instaurar** o procedimento toma conhecimento do fato; interrompe-se com a instauração do PAD; e volta a fluir **por inteiro** após **140 dias** da interrupção.",
      "",
      "### Defesa técnica e demissão por improbidade",
      "- **Súmula Vinculante 5 (STF)**: a falta de defesa técnica por advogado no processo administrativo disciplinar **não** ofende a Constituição.",
      "- **Súmula 651 (STJ)**: a autoridade administrativa pode aplicar a **pena de demissão** por improbidade administrativa **sem prévia condenação judicial**.",
    ]),
    atencao("Prazos de prescrição da ação disciplinar: **5 anos, 2 anos, 180 dias**. Pena de **demissão** depende da autoridade máxima (Presidente da República, em regra). Suspensão **até 30 dias** é do chefe da repartição.", "Memorize"),
    q("Configura abandono de cargo a ausência intencional do servidor ao serviço por mais de:", ["15 dias consecutivos", "30 dias consecutivos", "60 dias interpolados", "90 dias consecutivos", "120 dias"], "B", "Art. 138: mais de trinta dias consecutivos."),
    q("Entende-se por inassiduidade habitual a falta ao serviço, sem causa justificada, por:", ["30 dias, consecutivos", "60 dias, interpoladamente, durante o período de 12 meses", "90 dias, em 12 meses", "30 dias, interpoladamente, em 6 meses", "120 dias, consecutivos"], "B", "Art. 139."),
    ce("A ação disciplinar prescreve em 180 dias quanto à advertência, em 2 anos quanto à suspensão e em 5 anos quanto às infrações puníveis com demissão.", "Certo", "Art. 142."),
    q("A suspensão não pode exceder:", ["15 dias", "30 dias", "60 dias", "90 dias", "180 dias"], "D", "Art. 130."),
    q("A demissão por corrupção implica, além da perda do cargo:", ["nada além da perda do cargo", "indisponibilidade dos bens e ressarcimento ao erário, e impossibilidade de retorno ao serviço público federal", "apenas suspensão dos direitos políticos", "perda do direito à aposentadoria", "multa de 50% do vencimento"], "B", "Arts. 136 e 137, parágrafo único."),
  ]);

  /* ================= PROCESSO ADMINISTRATIVO DISCIPLINAR ================= */

  A("processo-administrativo-disciplinar/disposicoes-gerais", [
    aprofundar([
      "### Dever de apurar (art. 143)",
      "A autoridade que tiver ciência de irregularidade no serviço público é **obrigada a promover a apuração imediata**, por **sindicância** ou **processo administrativo disciplinar** (PAD), assegurada ampla defesa ao acusado.",
      "",
      "### Denúncia (art. 144)",
      "Só é objeto de apuração a denúncia **por escrito**, com **identificação e endereço** do denunciante e autenticidade confirmada. Se o fato narrado não configurar evidente infração disciplinar ou ilícito penal, a denúncia é **arquivada por falta de objeto**. Na prática, a Administração pode apurar de ofício, por exemplo em **investigação preliminar**, a partir de denúncia anônima que traga elementos mínimos.",
      "",
      "### Quando a apuração é obrigatória em PAD (art. 146)",
      "Se o ilícito puder levar a **suspensão por mais de 30 dias**, **demissão**, **cassação** de aposentadoria ou disponibilidade ou **destituição** de cargo em comissão, o **PAD é obrigatório**.",
      "",
      "### Princípios",
      "Ampla defesa e contraditório (CF, art. 5º, LV); a **Súmula Vinculante 5** dispensa advogado no PAD. A comissão atua com **independência e imparcialidade**, assegurado o **sigilo** necessário à apuração ou exigido pelo interesse da Administração.",
    ]),
    q("A instauração de processo administrativo disciplinar é obrigatória quando o ilícito puder ensejar:", ["advertência", "suspensão de até 30 dias", "suspensão por mais de 30 dias", "apenas advertência por escrito", "multa"], "C", "Art. 146."),
    ce("A autoridade que tiver ciência de irregularidade no serviço público é obrigada a promover a sua apuração imediata.", "Certo", "Art. 143."),
    q("Segundo a Súmula Vinculante 5 do STF, a falta de defesa técnica por advogado no processo administrativo disciplinar:", ["gera nulidade absoluta", "ofende a Constituição", "não ofende a Constituição", "só vale para suspensão", "só vale para sindicância"], "C", "Súmula Vinculante 5."),
  ]);

  A("processo-administrativo-disciplinar/sindicancia", [
    aprofundar([
      "### Natureza",
      "Procedimento **investigativo e preparatório**, mais simples que o PAD. Pode ser **acusatória** (leva a punição leve) ou **investigativa** (apura autoria e materialidade para eventual PAD). Os autos **integram o processo disciplinar** como peça informativa da instrução.",
      "",
      "### Resultados possíveis (art. 145)",
      "- **Arquivamento**;",
      "- **advertência** ou **suspensão de até 30 dias**;",
      "- **instauração de processo disciplinar**.",
      "",
      "### Prazo",
      "**30 dias**, prorrogável por **igual período**, a critério da autoridade superior.",
      "",
      "### Ilícito penal",
      "Se o relatório concluir que a infração está capitulada como **ilícito penal**, a autoridade encaminha **cópia dos autos ao Ministério Público**, independentemente da instauração do PAD (art. 154, parágrafo único).",
      "",
      "### Impedimentos",
      "Não participa da comissão de sindicância ou de inquérito **cônjuge, companheiro ou parente do acusado**, consanguíneo ou afim, em linha reta ou colateral, **até o terceiro grau** (art. 149, § 2º).",
    ]),
    atencao("Sindicância **não** leva a demissão. Se a infração pode gerar suspensão por **mais de 30 dias**, demissão, cassação ou destituição, o caminho é o **PAD**."),
    q("Da sindicância poderá resultar:", ["demissão", "suspensão de até 90 dias", "advertência ou suspensão de até 30 dias", "cassação de aposentadoria", "destituição de cargo em comissão"], "C", "Art. 145, II."),
    ce("O prazo para conclusão da sindicância não excederá 30 dias, podendo ser prorrogado por igual período.", "Certo", "Art. 145, parágrafo único."),
    q("Não pode participar de comissão de sindicância ou de inquérito parente do acusado, consanguíneo ou afim, até o:", ["primeiro grau", "segundo grau", "terceiro grau", "quarto grau", "quinto grau"], "C", "Art. 149, § 2º."),
  ]);

  A("processo-administrativo-disciplinar/afastamento-preventivo", [
    aprofundar([
      "### Medida cautelar (art. 147)",
      "A autoridade instauradora do PAD pode determinar o **afastamento do exercício do cargo**, para que o servidor **não influa na apuração**, por **até 60 dias**, **sem prejuízo da remuneração**.",
      "",
      "### Prorrogação",
      "Pode ser prorrogado por **igual prazo (mais 60 dias)**. Terminado, **cessam os efeitos**, ainda que o processo não esteja concluído.",
      "",
      "### Natureza",
      "Não é pena: é medida **cautelar**, sem juízo sobre a culpa. Por isso a remuneração é mantida. O art. 147 fala em **processo disciplinar** e é determinado pela **autoridade instauradora**; o artigo não menciona a sindicância.",
    ]),
    atencao("Afastamento preventivo: **60 dias + 60 dias**, **com remuneração**. Não confunda com a suspensão, que é **pena** e **sem** remuneração."),
    q("O afastamento preventivo do servidor, no curso do processo disciplinar, pode ser determinado pelo prazo de até:", ["15 dias", "30 dias", "60 dias, prorrogável por igual prazo", "90 dias, prorrogável por 30", "120 dias, improrrogável"], "C", "Art. 147."),
    ce("O afastamento preventivo é medida cautelar e se dá sem prejuízo da remuneração do servidor.", "Certo", "Art. 147, caput."),
    q("Findo o prazo do afastamento preventivo, sem conclusão do processo:", ["o servidor permanece afastado até o fim", "cessam os efeitos do afastamento", "o servidor é demitido", "o processo é arquivado", "o prazo é prorrogado indefinidamente"], "B", "Art. 147, parágrafo único."),
  ]);

  A("processo-administrativo-disciplinar/pad-instauracao-inquerito-e-julgamento", [
    aprofundar([
      "### Comissão (art. 149)",
      "**3 servidores estáveis**, designados pela autoridade competente, que indica o **presidente**: ocupante de cargo efetivo **superior ou de mesmo nível**, ou com nível de escolaridade **igual ou superior** ao do indiciado.",
      "",
      "### Três fases (art. 151)",
      "1. **Instauração**: publicação do ato que constitui a comissão.",
      "2. **Inquérito administrativo**: **instrução, defesa e relatório**.",
      "3. **Julgamento**.",
      "",
      "### Prazo (art. 152)",
      "Conclusão em **60 dias** da publicação do ato que constituir a comissão, **prorrogável por igual prazo**. O julgamento fora do prazo **não gera nulidade** (art. 169, § 1º). Os membros dedicam tempo integral e ficam dispensados do ponto até a entrega do relatório.",
      "",
      "### Instrução (arts. 155 a 160)",
      "Depoimentos, acareações, investigações, diligências e perícias. O servidor pode **acompanhar o processo pessoalmente ou por procurador**, arrolar e reinquirir testemunhas, produzir provas e formular quesitos. O presidente pode **denegar pedidos impertinentes ou protelatórios** e **indeferir perícia** quando o fato independer de conhecimento especial.",
      "",
      "### Indiciação e defesa (art. 161)",
      "Tipificada a infração, o servidor é **indiciado** e **citado** para apresentar **defesa escrita em 10 dias**, com vista do processo na repartição. Havendo **dois ou mais indiciados**, o prazo é comum e de **20 dias**. O prazo pode ser prorrogado **pelo dobro**, para diligências indispensáveis. Indiciado em **lugar incerto e não sabido**: **citação por edital**, com defesa em **15 dias** da última publicação (art. 163).",
      "",
      "### Revelia (art. 164)",
      "Se regularmente citado e não defender, é **revel**. A revelia é declarada por termo, **reabrindo o prazo** para defesa, e a autoridade designa **defensor dativo**, servidor de cargo efetivo superior, do mesmo nível ou de escolaridade igual ou superior à do indiciado.",
      "",
      "### Relatório e julgamento (arts. 165 a 168)",
      "- O relatório é **sempre conclusivo**: inocência ou responsabilidade; reconhecida esta, indica o dispositivo violado e as agravantes e atenuantes.",
      "- A autoridade julgadora decide em **20 dias** do recebimento do processo.",
      "- Havendo vários indiciados com sanções diferentes, julga a autoridade competente para a **pena mais grave**.",
      "- O julgamento **acata o relatório**, salvo quando **contrário às provas dos autos**; nesse caso, a autoridade pode, **motivadamente, agravar, abrandar ou isentar**.",
      "",
      "### Vício e conexões",
      "- Vício **insanável**: nulidade total ou parcial e nova comissão (art. 169).",
      "- Fato capitulado como **crime**: remessa ao **Ministério Público** (art. 171).",
      "- Quem responde a PAD **só pode ser exonerado a pedido ou aposentado voluntariamente** após a conclusão do processo e o cumprimento da pena (art. 172).",
    ]),
    {
      tipo: "tabela",
      titulo: "Os prazos do PAD",
      cabecalho: ["Etapa", "Prazo"],
      linhas: [
        ["Conclusão do PAD", "60 dias, prorrogável por 60 (art. 152)"],
        ["Defesa do indiciado", "10 dias"],
        ["Defesa de dois ou mais indiciados", "20 dias, comum"],
        ["Defesa do citado por edital", "15 dias, da última publicação"],
        ["Julgamento", "20 dias do recebimento"],
        ["Afastamento preventivo", "60 dias + 60 dias"],
      ],
    },
    atencao("**Comissão do PAD**: 3 servidores **estáveis**. **Comissão do rito sumário**: 2 servidores **estáveis**. A banca troca os números."),
    q("A comissão do processo administrativo disciplinar é composta por:", ["2 servidores estáveis", "3 servidores estáveis", "3 servidores, estáveis ou não", "5 servidores efetivos", "1 servidor e 1 advogado"], "B", "Art. 149."),
    q("O indiciado em processo disciplinar é citado para apresentar defesa escrita no prazo de:", ["5 dias", "10 dias", "15 dias", "20 dias", "30 dias"], "B", "Art. 161, § 1º."),
    ce("O julgamento do PAD fora do prazo legal implica nulidade do processo.", "Errado", "Art. 169, § 1º: o julgamento fora do prazo não implica nulidade."),
    ce("A autoridade julgadora pode, motivadamente, agravar a penalidade proposta pela comissão quando o relatório contrariar as provas dos autos.", "Certo", "Art. 168, parágrafo único."),
    q("O indiciado revel terá defesa feita por:", ["advogado nomeado pelo juiz", "defensor dativo, servidor designado pela autoridade instauradora", "o presidente da comissão", "o chefe imediato", "a Advocacia-Geral da União"], "B", "Art. 164, § 2º."),
  ]);

  A("processo-administrativo-disciplinar/rito-sumario", [
    aprofundar([
      "### Quando se usa",
      "Para apurar **acumulação ilegal de cargos** (art. 133), **abandono de cargo** e **inassiduidade habitual** (art. 140).",
      "",
      "### Acumulação ilegal (art. 133)",
      "Detectada a acumulação, a autoridade notifica o servidor para **optar em 10 dias improrrogáveis**. Não optando, instaura-se o rito sumário. A opção **até o último dia do prazo de defesa** presume **boa-fé** e equivale a pedido de exoneração do outro cargo. Provada a **má-fé**, aplica-se a **demissão**.",
      "",
      "### Fases",
      "1. **Instauração**, com a publicação do ato que constitui a comissão, de **dois servidores estáveis**, já indicando autoria e materialidade;",
      "2. **Instrução sumária**: indiciação (termo lavrado em até **3 dias** da publicação do ato), **defesa em 5 dias** e relatório;",
      "3. **Julgamento**: a autoridade decide em **5 dias** do recebimento do processo.",
      "",
      "### Prazo total",
      "**30 dias**, contados da publicação do ato que constitui a comissão, prorrogável por até **15 dias** (art. 133, § 7º). Aplicam-se **subsidiariamente** os Títulos IV (regime disciplinar) e V (processo disciplinar) da lei.",
      "",
      "### Abandono de cargo e inassiduidade (art. 140)",
      "- **Abandono**: a materialidade se prova pela indicação precisa do **período de ausência intencional superior a 30 dias**. Após a defesa, a comissão opina sobre a **intencionalidade** da ausência.",
      "- **Inassiduidade**: indicação dos dias de falta, **60 dias ou mais, interpoladamente, em 12 meses**.",
    ]),
    {
      tipo: "tabela",
      titulo: "Rito sumário × PAD ordinário",
      cabecalho: ["Ponto", "Rito sumário", "PAD ordinário"],
      linhas: [
        ["Comissão", "2 servidores estáveis", "3 servidores estáveis"],
        ["Defesa", "5 dias", "10 dias (20 se houver 2 ou mais indiciados)"],
        ["Julgamento", "5 dias", "20 dias"],
        ["Prazo total", "30 dias + até 15", "60 dias + 60"],
      ],
    },
    q("O processo administrativo disciplinar sob o rito sumário é conduzido por comissão composta por:", ["dois servidores estáveis", "três servidores estáveis", "três servidores efetivos, estáveis ou não", "cinco servidores", "um servidor, assistido por advogado"], "A", "Art. 133, I."),
    ce("O rito sumário aplica-se à apuração de acumulação ilegal de cargos, de abandono de cargo e de inassiduidade habitual.", "Certo", "Arts. 133 e 140."),
    q("O prazo para conclusão do processo sob rito sumário não excederá 30 dias, admitida prorrogação por até:", ["5 dias", "10 dias", "15 dias", "30 dias", "60 dias"], "C", "Art. 133, § 7º."),
    q("No rito sumário, o prazo para o indiciado apresentar defesa escrita é de:", ["3 dias", "5 dias", "10 dias", "15 dias", "20 dias"], "B", "Art. 133, § 2º. No PAD ordinário, o prazo é de 10 dias."),
  ]);

  A("processo-administrativo-disciplinar/revisao-do-processo", [
    aprofundar([
      "### Cabimento (art. 174)",
      "O PAD pode ser revisto **a qualquer tempo**, **a pedido ou de ofício**, quando surgirem **fatos novos ou circunstâncias** suscetíveis de justificar a **inocência** do punido ou a **inadequação da penalidade**. A **simples alegação de injustiça** não basta: exige elementos **novos**, não apreciados no processo original (art. 176).",
      "",
      "### Quem pede",
      "O servidor; em caso de falecimento, ausência ou desaparecimento, **qualquer pessoa da família**; em caso de incapacidade mental, o **curador**.",
      "",
      "### Procedimento",
      "- Requerimento dirigido ao **Ministro de Estado ou autoridade equivalente**, que, se admitir, designa **comissão revisora de 3 servidores estáveis**.",
      "- A revisão corre **em apenso** ao processo original.",
      "- **Ônus da prova**: do requerente (art. 175).",
      "- A comissão tem **60 dias** para concluir; o julgamento cabe à autoridade que aplicou a penalidade, em **20 dias**.",
      "",
      "### Resultado (art. 182)",
      "Procedente a revisão, **declara-se sem efeito** a penalidade e restabelecem-se os direitos, exceto quanto à **destituição de cargo em comissão**, que é **convertida em exoneração**. **Nunca pode haver agravamento** da penalidade na revisão (*reformatio in pejus* proibida).",
    ]),
    atencao("Na revisão **não há prazo para pedir** (\"a qualquer tempo\") e **não há agravamento** de pena. O **ônus da prova** é do **requerente**."),
    q("Da revisão do processo disciplinar:", ["pode resultar agravamento da penalidade", "não pode resultar agravamento da penalidade", "só se admite no prazo de 5 anos", "só pode ser pedida pela Administração", "só se admite uma vez por servidor, vedada a repetição"], "B", "Art. 182, parágrafo único."),
    ce("No processo revisional, o ônus da prova cabe ao requerente.", "Certo", "Art. 175."),
    q("A revisão do processo disciplinar exige, para ser admitida:", ["a simples alegação de injustiça da penalidade", "fatos novos ou circunstâncias suscetíveis de justificar a inocência ou a inadequação da pena", "parecer favorável da comissão original", "decurso de dois anos da pena", "pagamento de taxa"], "B", "Arts. 174 e 176."),
  ]);

  /* ================= SEGURIDADE SOCIAL DO SERVIDOR ================= */

  A("seguridade-social-do-servidor/beneficios-do-servidor-visao-geral", [
    aprofundar([
      "### Plano de Seguridade Social (arts. 183 a 185)",
      "A União mantém Plano de Seguridade Social para o servidor e sua família, com **benefícios e ações** que visam a:",
      "- garantir **meios de subsistência** nos eventos de doença, invalidez, velhice, acidente em serviço, inatividade, falecimento e reclusão;",
      "- proteger a **maternidade, a adoção e a paternidade**;",
      "- garantir **assistência à saúde**.",
      "",
      "### Benefícios ao servidor",
      "Aposentadoria; **auxílio-natalidade**; **salário-família**; licença para tratamento de saúde; licença à gestante, à adotante e licença-paternidade; licença por acidente em serviço; assistência à saúde; garantia de condições individuais e ambientais de trabalho satisfatórias.",
      "",
      "### Benefícios ao dependente",
      "**Pensão** (vitalícia e temporária); **auxílio-funeral**; **auxílio-reclusão**; assistência à saúde.",
      "",
      "### Números",
      "- **Auxílio-natalidade**: valor equivalente ao **menor vencimento do serviço público**, inclusive em caso de natimorto; no parto múltiplo, acréscimo de **50% por nascituro**.",
      "- **Auxílio-funeral**: valor equivalente a **um mês** da remuneração ou provento.",
      "- **Auxílio-reclusão**: **2/3 da remuneração** durante a prisão em flagrante ou preventiva; **metade** durante o afastamento por condenação definitiva a pena que não determine perda do cargo.",
      "- **Licença à gestante**: **120 dias**; **adotante**: 90 dias (criança até 1 ano) ou 30 dias (mais de 1 ano); **paternidade**: 5 dias, com prorrogação possível em programa específico (**conferir** o regime atual).",
      "- **Lactante**: 1 hora de descanso por jornada, parcelável em dois períodos de meia hora, até o filho completar 6 meses.",
      "",
      "### Aposentadoria hoje",
      "A Lei 8.112 não é mais a fonte principal. Valem a **CF, art. 40**, e a **EC 103/2019**. Na regra permanente: **62 anos (mulher) e 65 (homem)**, **25 anos de contribuição**, **10 anos de serviço público** e **5 anos no cargo**. A compulsória é aos **75 anos**.",
    ]),
    atencao("Os percentuais e os prazos de aposentadoria e pensão do servidor federal mudaram com a **EC 103/2019**, e a lei ordinária também sofre alterações. Para a prova, **confira o texto constitucional e a legislação atual** do edital.", "Conferir"),
    q("O auxílio-natalidade corresponde, na Lei 8.112, a:", ["dois salários mínimos", "valor equivalente ao menor vencimento do serviço público", "um mês de remuneração do servidor", "metade da remuneração", "um terço da remuneração"], "B", "Art. 196. No parto múltiplo, o valor é acrescido de 50% por nascituro."),
    ce("O auxílio-funeral corresponde a um mês da remuneração ou do provento do servidor falecido.", "Certo", "Art. 226."),
    q("O auxílio-reclusão, quando o servidor é afastado por prisão em flagrante ou preventiva, é de:", ["metade da remuneração", "dois terços da remuneração", "uma remuneração inteira", "um terço da remuneração", "um salário mínimo"], "B", "Art. 229, I. Na condenação definitiva sem perda do cargo, é metade."),
    q("A licença à servidora gestante tem duração de:", ["90 dias", "120 dias consecutivos, sem prejuízo da remuneração", "150 dias", "180 dias, por lei, para todas", "60 dias"], "B", "Art. 207."),
  ]);

  A("seguridade-social-do-servidor/assistencia-a-saude", [
    aprofundar([
      "### O que abrange (art. 230)",
      "A assistência à saúde do servidor, **ativo ou inativo**, e de sua família compreende assistência **médica, hospitalar, odontológica, psicológica e farmacêutica**. A diretriz básica é a **prevenção e a promoção da saúde**.",
      "",
      "### Como é prestada",
      "- pelo **SUS**, diretamente ou por convênio ou contrato; ou",
      "- na forma de **auxílio**, mediante **ressarcimento parcial** do valor gasto pelo servidor (ativo ou inativo) e seus dependentes ou pensionistas com **planos ou seguros privados** de saúde, nos termos do regulamento.",
      "",
      "### Condições de trabalho",
      "A Lei 8.112 inclui, entre os benefícios, a **garantia de condições individuais e ambientais de trabalho satisfatórias**. O servidor que opera com **raios X ou substâncias radioativas** é mantido sob **controle permanente**, com **rodízio e exames médicos a cada 6 meses** (art. 72).",
      "",
      "### Licença para tratamento de saúde (art. 202)",
      "Concedida **a pedido ou de ofício**, com base em **perícia oficial**, **sem prejuízo da remuneração** (arts. 202 e 203).",
      "- A inspeção pode ser feita na **residência** do servidor ou no **hospital**.",
      "- Se **não houver médico do órgão no local**, aceita-se **atestado de médico particular**, que só produz efeitos depois de recebido pela unidade de recursos humanos.",
      "- Licença **superior a 120 dias em 12 meses** exige avaliação por **junta médica oficial**.",
      "- Licença **inferior a 15 dias, dentro de um ano**, pode ser **dispensada de perícia oficial**, conforme o regulamento (art. 204).",
      "- Conta como **efetivo exercício até 24 meses**, cumulativos ao longo do tempo de serviço público federal.",
    ]),
    q("A assistência à saúde do servidor, segundo a Lei 8.112, pode ser prestada:", ["somente pelo SUS", "pelo SUS, diretamente ou mediante convênio ou contrato, ou por auxílio, com ressarcimento parcial de plano privado", "apenas por planos privados", "só aos servidores ativos", "só ao servidor, sem estender à família"], "B", "Art. 230."),
    ce("A assistência à saúde de que trata a Lei 8.112 alcança também os servidores inativos e a família do servidor.", "Certo", "Art. 230: servidor ativo ou inativo e sua família."),
    ce("A licença para tratamento de saúde superior a 120 dias no período de 12 meses exige avaliação por junta médica oficial.", "Certo", "Art. 203, § 4º."),
    q("Os servidores que operam com raios X ou substâncias radioativas são submetidos a rodízio e exames médicos a cada:", ["mês", "três meses", "seis meses", "um ano", "dois anos"], "C", "Art. 72, parágrafo único."),
  ]);
})();
