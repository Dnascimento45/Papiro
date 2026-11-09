/* Aprofundamento · Lei 8.112/1990 (parte 1): provimento, vacância e movimentação, direitos e vantagens.
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
    { titulo: "Lei 8.112/1990 (texto compilado) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm", nota: "Leia o texto inteiro ao menos uma vez: as bancas cobram a letra da lei, inclusive prazos." },
    { titulo: "Direito Administrativo Descomplicado", autor: "Marcelo Alexandrino e Vicente Paulo", nota: "Capítulo sobre agentes públicos, com a Lei 8.112 explicada artigo por artigo." },
    { titulo: "Manual de Direito Administrativo", autor: "José dos Santos Carvalho Filho", nota: "Boa base teórica sobre provimento, vacância e regime estatutário." },
    { titulo: "Direito Administrativo", autor: "Maria Sylvia Zanella Di Pietro", nota: "Referência clássica; use para os conceitos de cargo, emprego e função." },
  ];

  /* ================= DISPOSIÇÕES PRELIMINARES E PROVIMENTO ================= */

  A("disposicoes-preliminares-e-provimento/conceitos-servidor-cargo-publico-e-quadro", [
    aprofundar([
      "### Servidor, cargo e função",
      "- **Servidor** (art. 2º): pessoa legalmente investida em cargo público.",
      "- **Cargo público** (art. 3º): conjunto de atribuições e responsabilidades previstas na estrutura organizacional, cometidas a um servidor. É **criado por lei**, com denominação própria e vencimento pago pelos cofres públicos.",
      "- O cargo pode ser de provimento **efetivo** (exige concurso) ou **em comissão** (livre nomeação e exoneração, para direção, chefia e assessoramento).",
      "",
      "### Serviço gratuito e requisitos de investidura",
      "É **proibida a prestação de serviços gratuitos**, salvo nos casos previstos em lei (art. 4º). São requisitos básicos para a investidura (art. 5º):",
      "1. nacionalidade brasileira;",
      "2. gozo dos direitos políticos;",
      "3. quitação com as obrigações militares e eleitorais;",
      "4. nível de escolaridade exigido para o cargo;",
      "5. idade mínima de 18 anos;",
      "6. aptidão física e mental.",
      "",
      "As atribuições do cargo podem justificar **exigências especiais**, na forma da lei. Universidades e instituições de pesquisa científica e tecnológica federais podem prover cargos com professores, técnicos e cientistas **estrangeiros**.",
    ]),
    atencao("Servidor **estatutário** ocupa cargo e se rege pela Lei 8.112; **empregado público** ocupa emprego e se rege pela CLT. A Lei 8.112 vale para a Administração direta, as autarquias e as fundações públicas **federais**, não para empresas públicas e sociedades de economia mista."),
    q("Segundo a Lei 8.112/1990, a idade mínima para a investidura em cargo público federal é de:", ["16 anos", "18 anos", "21 anos", "25 anos", "não há idade mínima"], "B", "Art. 5º, V: idade mínima de dezoito anos, entre os requisitos básicos."),
    ce("A Lei 8.112/1990 admite a prestação de serviços gratuitos à Administração em qualquer situação, desde que haja concordância do agente.", "Errado", "Art. 4º: é proibida a prestação de serviços gratuitos, salvo nos casos previstos em lei."),
    q("Os cargos públicos, segundo a Lei 8.112/1990, são criados:", ["por decreto", "por portaria do dirigente do órgão", "por lei", "por resolução interna", "por ato do chefe imediato"], "C", "Art. 3º, parágrafo único: criados por lei, com denominação própria e vencimento pago pelos cofres públicos."),
  ]);

  A("disposicoes-preliminares-e-provimento/concurso-publico", [
    aprofundar([
      "### Regras do concurso (Lei 8.112 e CF, art. 37)",
      "- O concurso é de **provas** ou de **provas e títulos**, podendo ter duas etapas, conforme a lei e o plano da carreira.",
      "- Validade de **até 2 anos**, prorrogável **uma única vez, por igual período**. O prazo e as condições constam do edital, publicado no Diário Oficial da União e em jornal diário de grande circulação.",
      "- **Não se abre novo concurso** enquanto houver candidato aprovado em concurso anterior com prazo de validade não expirado.",
      "- Durante o prazo improrrogável previsto no edital, o aprovado será convocado com **prioridade** sobre novos concursados.",
      "",
      "### Pessoas com deficiência",
      "É assegurado o direito de inscrição em cargo cujas atribuições sejam compatíveis com a deficiência. Reserva-se **até 20%** das vagas do concurso (art. 5º, § 2º). O percentual mínimo, de 5%, vem do decreto que regulamenta a lei.",
      "",
      "### Inscrição",
      "A inscrição pode estar condicionada ao pagamento de taxa fixada no edital, **quando indispensável ao custeio** do certame, ressalvadas as hipóteses de isenção previstas no próprio edital.",
    ]),
    atencao("A Lei 8.112 diz \"**até** 20%\" para pessoas com deficiência. Questão que troque por \"**no mínimo** 20%\" ou \"**exatamente** 20%\" está errada.", "Pegadinha de prova"),
    q("Quanto à validade do concurso público para cargo federal, é correto afirmar que:", ["vale por 1 ano, prorrogável por mais 1", "vale por até 2 anos, prorrogável uma única vez por igual período", "vale por até 4 anos, sem prorrogação", "vale por 2 anos, prorrogável indefinidamente", "o prazo é livre e fixado pelo edital, sem limite"], "B", "Art. 12 da Lei 8.112 e art. 37, III, da CF: até dois anos, prorrogável uma única vez, por igual período."),
    ce("Enquanto houver candidato aprovado em concurso anterior, com prazo de validade não expirado, não se abrirá novo concurso para o mesmo cargo.", "Certo", "Regra do art. 12, § 2º, repetida pela Constituição (art. 37, IV): o aprovado tem prioridade."),
    q("A Lei 8.112 reserva às pessoas com deficiência, nos concursos, o percentual de:", ["exatamente 10% das vagas", "no mínimo 20% das vagas", "até 20% das vagas", "5% das vagas, sem possibilidade de ampliação", "30% das vagas"], "C", "Art. 5º, § 2º: até 20% das vagas oferecidas no concurso."),
  ]);

  A("disposicoes-preliminares-e-provimento/estagio-probatorio-e-estabilidade", [
    aprofundar([
      "### Estágio probatório",
      "Período em que o servidor nomeado para cargo efetivo é avaliado quanto à aptidão e à capacidade para o cargo. Os cinco fatores do art. 20 são: **assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade** (decore pela inicial: ADCIPR).",
      "- A lei fala em **24 meses**, mas a CF (art. 41, após a EC 19/1998) exige **3 anos** de efetivo exercício para a estabilidade. As bancas costumam adotar **36 meses**, pois a regra constitucional prevalece.",
      "- A avaliação é **especial de desempenho**; sem ela, não se pode exonerar por insuficiência.",
      "",
      "### Estabilidade",
      "Direito do servidor **efetivo**, nomeado por concurso, após 3 anos e **avaliação especial de desempenho** por comissão instituída para essa finalidade (CF, art. 41, § 4º). **Cargo em comissão não gera estabilidade.**",
      "",
      "### Perda do cargo do estável (CF, art. 41, § 1º)",
      "Só por: sentença judicial transitada em julgado; **processo administrativo** com ampla defesa; ou **avaliação periódica de desempenho**, na forma de lei complementar, com ampla defesa.",
      "",
      "### Reprovado no estágio",
      "Será **exonerado**; se já era estável em cargo anterior, será **reconduzido** a ele (art. 20, § 2º).",
    ]),
    atencao("Estágio probatório e estabilidade são **institutos diferentes**. O primeiro é um período de avaliação; a segunda é a garantia de permanência. Mesmo em estágio, o servidor só pode ser exonerado por insuficiência com processo em que tenha direito de defesa.", "Não confunda"),
    q("Entre os fatores de avaliação do estágio probatório previstos no art. 20 da Lei 8.112, **não** consta:", ["assiduidade", "disciplina", "produtividade", "tempo de serviço", "capacidade de iniciativa"], "D", "Os fatores são assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade."),
    ce("O servidor ocupante exclusivamente de cargo em comissão adquire estabilidade após três anos de exercício.", "Errado", "A estabilidade é do servidor nomeado para cargo de provimento efetivo, em virtude de concurso."),
    q("O servidor estável que é reprovado no estágio probatório de um novo cargo:", ["é demitido dos dois cargos", "é reconduzido ao cargo anteriormente ocupado", "é aposentado compulsoriamente", "fica em disponibilidade", "é readaptado"], "B", "É a recondução (art. 29, I): retorno ao cargo anterior por inabilitação em estágio probatório relativo a outro cargo."),
    q("Para a estabilidade, a Constituição Federal exige, após a EC 19/1998, ___ de efetivo exercício, além da avaliação especial de desempenho.", ["2 anos", "3 anos", "5 anos", "10 anos", "15 anos"], "B", "Art. 41 da CF: três anos de efetivo exercício."),
  ]);

  A("disposicoes-preliminares-e-provimento/formas-de-provimento", [
    aprofundar([
      "### As sete formas hoje vigentes (art. 8º)",
      "Nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução. **Ascensão** e **transferência** foram revogadas e são inconstitucionais (exigem concurso).",
      "",
      "### Originário × derivado",
      "- **Originário**: sem vínculo anterior com o cargo; a **nomeação**.",
      "- **Derivado**: depende de vínculo anterior; as outras seis, que dependem de situação anterior do servidor.",
      "",
      "### Nomeação (art. 9º)",
      "- **Efetivo**: depende de aprovação prévia em concurso público.",
      "- **Em comissão**: livre nomeação, inclusive em caráter **interino** para cargos de confiança vagos.",
      "- É a **única** forma que exige **posse**.",
      "",
      "### Promoção",
      "Passagem para classe ou padrão **superior** dentro da carreira. Não interrompe o tempo de exercício, contado no novo posicionamento **a partir da data da publicação** do ato. É também forma de **vacância**.",
    ]),
    {
      tipo: "tabela",
      titulo: "O que cada forma exige",
      cabecalho: ["Forma", "Natureza", "Ideia central"],
      linhas: [
        ["Nomeação", "Originária", "Entrada no cargo, por concurso ou livre nomeação"],
        ["Promoção", "Derivada vertical", "Sobe de classe dentro da carreira"],
        ["Readaptação", "Derivada", "Limitação física ou mental: cargo compatível"],
        ["Reversão", "Derivada", "Aposentado que volta à atividade"],
        ["Aproveitamento", "Derivada", "Servidor em disponibilidade que volta"],
        ["Reintegração", "Derivada", "Demissão invalidada: volta com ressarcimento"],
        ["Recondução", "Derivada", "Estável volta ao cargo anterior"],
      ],
    },
    q("Entre as formas de provimento de cargo público previstas na Lei 8.112/1990 **não** se inclui a:", ["promoção", "reversão", "transferência", "recondução", "readaptação"], "C", "A transferência, assim como a ascensão, foi revogada: permitia mudar de carreira sem concurso."),
    ce("A nomeação é a única forma de provimento originário e a única que exige posse.", "Certo", "As demais pressupõem vínculo anterior e, por isso, não exigem nova posse."),
    q("A promoção, como forma de provimento, caracteriza-se por:", ["ingresso no serviço público", "passagem do servidor para classe superior da carreira", "retorno de aposentado", "volta de servidor demitido", "mudança de sede"], "B", "Promoção é a ascensão funcional dentro da mesma carreira."),
  ]);

  A("disposicoes-preliminares-e-provimento/nomeacao-posse-e-exercicio", [
    aprofundar([
      "### Prazos que mais caem",
      "- **Posse**: até **30 dias** da publicação do ato de provimento (art. 13, § 1º). Se não ocorrer, o ato de provimento é **tornado sem efeito**.",
      "- **Exercício**: até **15 dias** da data da **posse** (art. 15, § 1º). Se não entrar em exercício, o servidor é **exonerado**.",
      "- O prazo de posse só começa a correr, para quem está em **licença ou afastamento legal**, depois do fim do impedimento.",
      "- **Deslocamento para nova sede**: de 10 a 30 dias, contados da publicação do ato (art. 18).",
      "",
      "### Posse (art. 13)",
      "É a assinatura do **termo**, com as atribuições, deveres, responsabilidades e direitos do cargo. Pode ocorrer por **procuração específica**. No ato, o servidor entrega **declaração de bens** e declara se exerce ou não outro cargo, emprego ou função pública.",
      "- Depende de **inspeção médica oficial** (art. 14): só toma posse quem é julgado apto física e mentalmente.",
      "",
      "### Exercício e jornada",
      "Exercício é o efetivo desempenho das atribuições do cargo. A jornada é de **40 horas semanais**, observados os limites de **6 a 8 horas diárias** (art. 19), salvo regimes especiais previstos em lei.",
    ]),
    atencao("Dois prazos, duas consequências: **perdeu a posse → ato sem efeito**; **tomou posse e perdeu o exercício → exoneração**. A banca troca as duas consequências para ver se você decorou."),
    q("Empossado o servidor, o prazo para entrar em exercício é de:", ["10 dias", "15 dias", "30 dias", "45 dias", "60 dias"], "B", "Art. 15, § 1º: quinze dias, contados da data da posse."),
    ce("O servidor que toma posse, mas não entra em exercício no prazo legal, tem o ato de provimento tornado sem efeito.", "Errado", "Nesse caso ele é exonerado. O ato é tornado sem efeito quando a posse não ocorre no prazo."),
    q("A posse em cargo público depende, entre outras exigências, de:", ["aprovação do cônjuge", "inspeção médica oficial que o julgue apto", "carta de recomendação", "estágio probatório prévio", "autorização do Poder Legislativo"], "B", "Art. 14: a posse depende de prévia inspeção médica oficial."),
    q("O prazo para tomar posse, contado da publicação do ato de provimento, é de:", ["15 dias", "30 dias", "60 dias", "90 dias", "180 dias"], "B", "Art. 13, § 1º: trinta dias da publicação do ato de provimento."),
  ]);

  A("disposicoes-preliminares-e-provimento/readaptacao-reversao-reintegracao-reconducao-e-aproveitamento", [
    aprofundar([
      "### Readaptação (art. 24)",
      "Investidura em cargo de atribuições e responsabilidades **compatíveis com a limitação** sofrida na capacidade física ou mental, verificada em **inspeção médica**. Exige habilitação e escolaridade equivalentes e **vencimentos equivalentes**. Se não houver vaga, o servidor ocupa o cargo como **excedente**, até a ocorrência de vaga.",
      "",
      "### Reversão (art. 25)",
      "Retorno do **aposentado** à atividade.",
      "- **Por invalidez**: quando a junta médica oficial declara insubsistentes os motivos da aposentadoria.",
      "- **No interesse da Administração**, desde que: o servidor tenha solicitado; a aposentadoria tenha sido **voluntária**; ele fosse **estável** na atividade; a aposentadoria tenha ocorrido nos **cinco anos anteriores** ao pedido; e haja **cargo vago**.",
      "- **Não pode reverter** o aposentado que já completou **70 anos**.",
      "",
      "### Reintegração (art. 28)",
      "Volta ao cargo anterior (ou ao que resultou de sua transformação) quando **invalidada a demissão**, por decisão administrativa ou judicial, com **ressarcimento de todas as vantagens**. Se o cargo estiver ocupado, o ocupante é reconduzido ao cargo de origem, aproveitado em outro ou posto em disponibilidade.",
      "",
      "### Recondução (art. 29)",
      "Retorno do **estável** ao cargo anterior, por **inabilitação em estágio probatório** em outro cargo ou por **reintegração do anterior ocupante**.",
      "",
      "### Aproveitamento (art. 30)",
      "Retorno à atividade do servidor em **disponibilidade**, em cargo de atribuições e vencimentos compatíveis com o anterior. Será tornado sem efeito se o servidor não tomar posse no prazo legal, salvo doença comprovada por junta médica oficial.",
    ]),
    atencao("Quem pede para voltar é **reversão**; quem é obrigado a voltar porque a demissão caiu é **reintegração**; quem desce de um cargo novo para o antigo é **recondução**. Disponibilidade só gera **aproveitamento**."),
    q("O retorno do servidor estável ao cargo anteriormente ocupado, em razão de inabilitação em estágio probatório relativo a outro cargo, denomina-se:", ["reversão", "recondução", "reintegração", "aproveitamento", "readaptação"], "B", "Art. 29, I."),
    ce("A reintegração assegura ao servidor o ressarcimento de todas as vantagens que deixou de receber em razão da demissão invalidada.", "Certo", "Art. 28: reinvestidura no cargo, com ressarcimento de todas as vantagens."),
    q("Não poderá reverter à atividade o servidor aposentado que:", ["tenha 65 anos", "já tenha completado 70 anos", "tenha se aposentado por invalidez", "tenha sido estável", "tenha pedido a reversão"], "B", "Art. 27: não pode reverter quem já completou 70 anos."),
    q("O retorno à atividade de servidor que se encontrava em disponibilidade chama-se:", ["reversão", "reintegração", "aproveitamento", "recondução", "promoção"], "C", "Art. 30: aproveitamento é o retorno do servidor posto em disponibilidade."),
  ]);

  /* ================= VACÂNCIA E MOVIMENTAÇÃO ================= */

  A("vacancia-e-movimentacao/vacancia", [
    aprofundar([
      "### Sete formas de vacância (art. 33)",
      "Exoneração, demissão, **promoção**, **readaptação**, aposentadoria, **posse em outro cargo inacumulável** e falecimento.",
      "",
      "### Exoneração (art. 34)",
      "- **A pedido** do servidor.",
      "- **De ofício**: quando não satisfeitas as condições do estágio probatório; quando, tendo tomado posse, o servidor não entra em exercício no prazo legal.",
      "- **Cargo em comissão** ou função de confiança: exoneração **a juízo da autoridade competente** (ad nutum) ou a pedido.",
      "",
      "### Exoneração × demissão",
      "- **Exoneração** não é pena. Ocorre por conveniência da Administração, do servidor ou por condição legal.",
      "- **Demissão** é **penalidade**, aplicada em processo disciplinar.",
      "",
      "### Efeito da vacância",
      "O cargo fica vago e pode ser provido por outro. **Promoção** e **readaptação** são formas de provimento do cargo novo e, ao mesmo tempo, vacância do cargo anterior.",
    ]),
    atencao("O servidor que responde a processo disciplinar **só pode ser exonerado a pedido** ou aposentado voluntariamente **depois de concluído o processo** e cumprida a penalidade (art. 172)."),
    q("Constitui forma de vacância do cargo público, segundo a Lei 8.112/1990:", ["reintegração", "recondução", "promoção", "aproveitamento", "reversão"], "C", "A vacância ocorre por exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável e falecimento."),
    ce("A demissão não tem caráter punitivo, sendo apenas uma forma de desligamento por conveniência da Administração.", "Errado", "A demissão é penalidade disciplinar; a exoneração é que não é pena."),
    q("A exoneração de ofício do servidor efetivo ocorre quando:", ["ele atinge 70 anos", "não são satisfeitas as condições do estágio probatório", "ele é removido a pedido", "ele é redistribuído", "ele toma posse em outro cargo acumulável"], "B", "Art. 34, parágrafo único, I."),
  ]);

  A("vacancia-e-movimentacao/remocao", [
    aprofundar([
      "### Conceito (art. 36)",
      "Deslocamento do servidor, a pedido ou de ofício, **no âmbito do mesmo quadro**, com ou sem mudança de sede. O **servidor** muda de lugar; o cargo, não.",
      "",
      "### Três modalidades",
      "1. **De ofício**, no interesse da Administração.",
      "2. **A pedido, a critério da Administração.**",
      "3. **A pedido, para outra localidade, independentemente do interesse da Administração**, nos casos de:",
      "   - **acompanhar cônjuge ou companheiro**, também servidor público (civil ou militar, de qualquer Poder ou esfera), deslocado no interesse da Administração;",
      "   - **motivo de saúde** do servidor, cônjuge, companheiro ou dependente que viva às suas expensas e conste do assentamento funcional, comprovado por **junta médica oficial**;",
      "   - **processo seletivo** promovido quando o número de interessados superar o de vagas, segundo normas preestabelecidas pelo órgão.",
    ]),
    atencao("Remoção é do **servidor** dentro do **mesmo quadro**. Redistribuição é do **cargo**, para **outro órgão** do mesmo Poder. A banca explora essa diferença de objeto."),
    q("A remoção a pedido, independentemente do interesse da Administração, **não** é cabível para:", ["acompanhar cônjuge servidor deslocado no interesse da Administração", "tratamento de saúde do servidor, comprovado por junta médica oficial", "participação em processo seletivo com mais interessados que vagas", "atender a uma conveniência pessoal do servidor, sem outro motivo", "tratamento de saúde de dependente que conste do assentamento funcional"], "D", "Conveniência pessoal sem base legal fica na modalidade a pedido a critério da Administração."),
    ce("Na remoção, o servidor é deslocado no âmbito do mesmo quadro, com ou sem mudança de sede.", "Certo", "Art. 36: é o conceito legal."),
    q("A remoção de servidor para acompanhar cônjuge, também servidor público, exige que este tenha sido deslocado:", ["a pedido", "no interesse da Administração", "por motivo de saúde", "por promoção", "por redistribuição"], "B", "Art. 36, III, a: deslocado no interesse da Administração."),
  ]);

  A("vacancia-e-movimentacao/redistribuicao", [
    aprofundar([
      "### Conceito (art. 37)",
      "Deslocamento de **cargo de provimento efetivo**, ocupado ou vago, no âmbito do quadro geral de pessoal, para **outro órgão ou entidade do mesmo Poder**, com **prévia apreciação do órgão central do SIPEC** (Sistema de Pessoal Civil).",
      "",
      "### Requisitos",
      "- interesse da Administração;",
      "- equivalência de vencimentos;",
      "- manutenção da essência das atribuições do cargo;",
      "- vinculação entre os graus de responsabilidade e complexidade das atividades;",
      "- mesmo nível de escolaridade, especialidade ou habilitação profissional;",
      "- compatibilidade entre as atribuições do cargo e as finalidades institucionais do órgão.",
      "",
      "### Reorganização ou extinção de órgão",
      "O servidor **estável** que não for redistribuído será colocado em **disponibilidade**, com remuneração proporcional ao tempo de serviço, até seu adequado **aproveitamento** em outro órgão. O não estável perde o vínculo.",
    ]),
    q("A redistribuição é o deslocamento de:", ["servidor, de ofício, com mudança de sede", "cargo de provimento efetivo, ocupado ou vago, para outro órgão do mesmo Poder", "servidor, a pedido, dentro do mesmo órgão", "cargo em comissão para outro Poder", "servidor cedido a outro ente federativo"], "B", "Art. 37: o cargo é que se desloca, para órgão ou entidade do mesmo Poder."),
    ce("A redistribuição de cargo exige prévia apreciação do órgão central do SIPEC.", "Certo", "Art. 37, caput."),
    q("Extinto o órgão, o servidor estável que não for redistribuído:", ["será demitido", "será posto em disponibilidade", "será aposentado compulsoriamente", "perderá a estabilidade", "será removido de ofício"], "B", "Art. 37, § 3º: fica em disponibilidade até o aproveitamento."),
  ]);

  A("vacancia-e-movimentacao/substituicao", [
    aprofundar([
      "### Quem substitui (art. 38)",
      "Os ocupantes de cargo ou função de **direção ou chefia** e de cargo de **Natureza Especial** têm substitutos indicados no regimento interno ou, se este for omisso, **designados previamente** pelo dirigente máximo do órgão.",
      "",
      "### Como o substituto atua",
      "Assume **automática e cumulativamente**, sem prejuízo do cargo que ocupa, nos afastamentos, impedimentos legais ou regulamentares do titular e na vacância do cargo. Deve **optar pela remuneração** de um dos cargos durante o período.",
      "",
      "### Quando recebe pela substituição",
      "Só nos afastamentos ou impedimentos legais do titular **superiores a 30 dias consecutivos**, e **proporcionalmente aos dias que excederem** esse período (art. 38, § 2º).",
    ]),
    atencao("Substituição de **até 30 dias** não dá direito a retribuição adicional; só o que **exceder** os 30 dias é pago, na proporção dos dias efetivos de substituição."),
    q("O servidor que substitui o titular de cargo de chefia faz jus à retribuição pela substituição quando o afastamento do titular for:", ["superior a 5 dias", "superior a 15 dias", "superior a 30 dias consecutivos", "de qualquer duração", "superior a 90 dias"], "C", "Art. 38, § 2º: afastamentos superiores a 30 dias consecutivos, pagos proporcionalmente aos dias que excederem."),
    ce("O substituto assume automaticamente as atribuições do titular, sem necessidade de nova nomeação, nos afastamentos e impedimentos legais.", "Certo", "Art. 38, § 1º: assunção automática e cumulativa."),
    q("A retribuição do substituto é paga:", ["desde o primeiro dia de substituição", "somente sobre os dias que excederem 30 dias consecutivos de afastamento do titular", "apenas nas férias do titular", "em dobro, nos afastamentos superiores a 15 dias", "sempre integralmente, ao fim da substituição"], "B", "Art. 38, § 2º."),
  ]);

  /* ================= DIREITOS E VANTAGENS ================= */

  A("direitos-e-vantagens/vencimento-e-remuneracao", [
    aprofundar([
      "### Conceitos",
      "- **Vencimento** (art. 40): retribuição pelo exercício do cargo, com valor fixado em lei.",
      "- **Remuneração** (art. 41): vencimento do cargo efetivo **mais** as vantagens pecuniárias permanentes estabelecidas em lei.",
      "- **Proventos**: o que recebe o aposentado.",
      "- Nenhum servidor recebe remuneração **inferior ao salário mínimo**. O **teto** é o subsídio dos Ministros do STF (CF, art. 37, XI).",
      "",
      "### Perda de remuneração (art. 44)",
      "O servidor perde a remuneração do dia em que **faltar sem motivo justificado** e a parcela proporcional aos **atrasos e saídas antecipadas**, salvo compensação de horário até o mês seguinte. As faltas justificadas por caso fortuito ou força maior podem ser compensadas e contam como efetivo exercício.",
      "",
      "### Descontos (arts. 45 a 48)",
      "- Salvo imposição legal ou mandado judicial, **nenhum desconto** incide sobre a remuneração. Consignação em folha exige **autorização do servidor** e do órgão.",
      "- **Reposição ao erário** (art. 46): comunicada previamente ao servidor, que tem **30 dias** para pagar, podendo parcelar a pedido. Cada parcela **não pode ser inferior a 10%** da remuneração, provento ou pensão.",
      "- O servidor em débito que for demitido ou exonerado tem **60 dias** para quitar a dívida, sob pena de inscrição em **dívida ativa** (art. 47).",
      "- O vencimento **não pode ser objeto de arresto, sequestro ou penhora**, exceto para **prestação de alimentos** decorrente de decisão judicial (art. 48).",
    ]),
    atencao("O decote para reposição ao erário não pode ser feito **de ofício e sem aviso**: o servidor é comunicado previamente e pode parcelar.", "Atenção"),
    q("Segundo a Lei 8.112/1990, a remuneração do servidor corresponde a:", ["apenas ao vencimento do cargo", "ao vencimento do cargo efetivo acrescido das vantagens pecuniárias permanentes estabelecidas em lei", "ao vencimento somado às indenizações", "ao total líquido depois dos descontos", "ao valor das gratificações apenas"], "B", "Art. 41."),
    ce("O vencimento do servidor pode ser penhorado para pagamento de qualquer dívida civil.", "Errado", "Art. 48: só cabe para prestação de alimentos resultante de decisão judicial."),
    q("A reposição ao erário será feita em parcelas, cujo valor não pode ser inferior a ___ da remuneração, provento ou pensão.", ["5%", "10%", "20%", "25%", "30%"], "B", "Art. 46, § 1º: dez por cento."),
    q("O servidor em débito com o erário que for exonerado terá, para quitá-lo, o prazo de:", ["15 dias", "30 dias", "60 dias", "90 dias", "180 dias"], "C", "Art. 47: sessenta dias; depois disso, inscrição em dívida ativa."),
  ]);

  A("direitos-e-vantagens/indenizacoes-ajuda-de-custo-diarias-transporte-e-auxilio-moradia", [
    aprofundar([
      "### Vantagens (art. 49)",
      "Três grupos: **indenizações**, **gratificações** e **adicionais**. As indenizações **não se incorporam** ao vencimento ou provento; gratificações e adicionais incorporam-se nos casos previstos em lei.",
      "",
      "### Quatro indenizações",
      "- **Ajuda de custo** (art. 53): compensa as despesas de **instalação** de quem, no interesse do serviço, passa a ter exercício em nova sede, com mudança de **domicílio em caráter permanente**. Não pode exceder **três meses** de remuneração. À família do servidor que falecer na nova sede são assegurados ajuda de custo e transporte para a localidade de origem, dentro de 1 ano do óbito.",
      "- **Diárias** (art. 58): cobrem despesas extraordinárias com pousada, alimentação e locomoção urbana de quem se afasta da sede, **em caráter eventual ou transitório**. Pagas **pela metade** quando não há pernoite fora da sede. Quem deve restituir diárias recebidas sem se afastar tem **5 dias**.",
      "- **Indenização de transporte** (art. 60): despesas com meio **próprio** de locomoção na execução de **serviços externos** por força das atribuições do cargo.",
      "- **Auxílio-moradia** (art. 60-A): ressarcimento de aluguel ou hospedagem, para ocupantes de cargos específicos, sob requisitos; o valor é **limitado a 25%** do valor do cargo em comissão ou função de confiança ocupado.",
      "",
      "### Quando não há diária",
      "Quando o deslocamento da sede for **exigência permanente** do cargo ou ocorrer dentro da mesma região metropolitana, aglomeração urbana ou microrregião de municípios limítrofes.",
    ]),
    atencao("As regras de auxílio-moradia mudam por lei e decreto; para a prova, retenha o conceito (**ressarcimento de despesa, não se incorpora**) e o limite de 25%. Confira os requisitos atuais no texto da lei antes de decorar.", "Conferir"),
    q("Não se incorpora ao vencimento ou provento, para qualquer efeito, a seguinte vantagem:", ["adicional de insalubridade", "gratificação natalina", "ajuda de custo", "adicional noturno", "gratificação por exercício de função de direção"], "C", "As indenizações não se incorporam (art. 49, § 1º). Ajuda de custo é indenização."),
    ce("A ajuda de custo destina-se a compensar despesas de instalação do servidor que passa a ter exercício em nova sede com mudança de domicílio em caráter permanente.", "Certo", "Art. 53."),
    q("A diária é devida pela metade quando:", ["o servidor viaja ao exterior", "o deslocamento não exigir pernoite fora da sede", "o servidor ocupa cargo em comissão", "o deslocamento superar 100 km", "o servidor é estagiário"], "B", "Art. 58, § 1º."),
    ce("O servidor que se desloca dentro da mesma região metropolitana faz jus a diárias, por constituir deslocamento a serviço.", "Errado", "Art. 58, § 3º: dentro da mesma região metropolitana, aglomeração urbana ou microrregião de municípios limítrofes não se pagam diárias."),
  ]);

  A("direitos-e-vantagens/gratificacoes-e-adicionais", [
    aprofundar([
      "### Gratificações e adicionais (art. 61)",
      "Retribuição por **função de direção, chefia e assessoramento**; **gratificação natalina**; adicionais de **insalubridade, periculosidade e atividade penosa**; **serviço extraordinário**; **adicional noturno**; **adicional de férias**; e outros relativos ao local ou à natureza do trabalho.",
      "",
      "### Gratificação natalina (13º)",
      "Corresponde a **1/12 da remuneração** de dezembro por mês de exercício no ano. **Fração igual ou superior a 15 dias** vale como mês integral. Paga **até 20 de dezembro**. O servidor exonerado recebe-a proporcionalmente aos meses de exercício. Não é considerada para cálculo de nenhuma outra vantagem.",
      "",
      "### Insalubridade, periculosidade e penosidade",
      "- Quem trabalha **com habitualidade** em locais insalubres ou em contato permanente com substâncias tóxicas, radioativas ou com risco de vida recebe adicional sobre o **vencimento do cargo efetivo**.",
      "- Se tiver direito a insalubridade **e** periculosidade, deve **optar por um** deles.",
      "- O direito **cessa** com a eliminação das condições ou riscos.",
      "- **Atividade penosa**: servidores em zonas de fronteira ou em localidades cujas condições de vida o justifiquem.",
      "- Quem opera com **raios X ou substâncias radioativas** passa por rodízio e exames médicos **a cada seis meses**.",
      "",
      "### Serviço extraordinário e adicional noturno",
      "- Hora extra: acréscimo de **50%** sobre a hora normal, no limite de **2 horas por jornada**, e só para situações **excepcionais e temporárias**.",
      "- Serviço noturno: entre **22h e 5h**, com valor-hora acrescido de **25%**, e **hora de 52 minutos e 30 segundos**.",
      "",
      "### Adicional de férias",
      "Pago **independentemente de solicitação**, correspondente a **1/3** da remuneração do período de férias.",
      "",
      "### Gratificação por encargo de curso ou concurso (art. 76-A)",
      "Para quem atua, em caráter **eventual**, como instrutor, em banca examinadora, na logística ou na aplicação de concurso. **Não se incorpora** ao vencimento.",
    ]),
    {
      tipo: "tabela",
      titulo: "Números das gratificações e adicionais",
      cabecalho: ["Vantagem", "Regra"],
      linhas: [
        ["13º (natalina)", "1/12 por mês; fração ≥ 15 dias = mês; paga até 20/dez"],
        ["Hora extra", "+50%; máximo de 2 h por jornada"],
        ["Adicional noturno", "+25%; 22h às 5h; hora de 52 min 30 s"],
        ["Adicional de férias", "1/3 da remuneração das férias"],
        ["Insalubridade × periculosidade", "Não acumulam: o servidor opta"],
      ],
    },
    q("O adicional noturno, prestado entre 22 horas e 5 horas do dia seguinte, tem valor-hora acrescido de:", ["10%", "20%", "25%", "50%", "100%"], "C", "Art. 75: 25%, computando-se cada hora como 52 minutos e 30 segundos."),
    q("O servidor que fizer jus aos adicionais de insalubridade e de periculosidade:", ["receberá os dois cumulativamente", "deverá optar por um deles", "receberá o maior e metade do menor", "perderá ambos", "receberá o de periculosidade em dobro"], "B", "Art. 68, § 1º."),
    ce("O serviço extraordinário é remunerado com acréscimo de 50% sobre a hora normal e limitado a duas horas por jornada.", "Certo", "Arts. 73 e 74."),
    q("A gratificação natalina corresponde, por mês de exercício, a:", ["1/6 da remuneração de dezembro", "1/12 da remuneração de dezembro", "1/3 da remuneração do mês de exercício", "uma remuneração inteira ao fim do ano, sem proporção", "1/24 da remuneração de dezembro"], "B", "Art. 63: um doze avos, e a fração de 15 dias ou mais conta como mês."),
  ]);

  A("direitos-e-vantagens/ferias", [
    aprofundar([
      "### Regra geral (art. 77)",
      "- **30 dias** de férias por ano, que podem ser **acumuladas até o máximo de dois períodos**, no caso de necessidade do serviço.",
      "- Para o **primeiro período aquisitivo**, exigem-se **12 meses** de exercício.",
      "- É vedado levar à conta de férias **qualquer falta ao serviço**.",
      "- Podem ser **parceladas em até três etapas**, se o servidor requerer e houver interesse da Administração.",
      "",
      "### Pagamento (art. 78)",
      "A remuneração das férias é paga **até 2 dias antes** do início do período. No parcelamento, o adicional de 1/3 é pago quando da utilização do **primeiro período**.",
      "",
      "### Raios X e substâncias radioativas (art. 79)",
      "Quem opera direta e permanentemente com essas fontes goza **20 dias consecutivos de férias por semestre**, sendo **proibida a acumulação**.",
      "",
      "### Interrupção (art. 80)",
      "As férias só podem ser interrompidas por **calamidade pública, comoção interna, convocação para o júri, serviço militar ou eleitoral**, ou por **necessidade do serviço declarada pela autoridade máxima** do órgão. O restante do período é gozado **de uma só vez**.",
    ]),
    atencao("**Parcelamento** pede requerimento do servidor **e** interesse da Administração. **Interrupção** parte da Administração e só nas hipóteses do art. 80."),
    q("As férias do servidor federal podem ser parceladas em até:", ["duas etapas", "três etapas", "quatro etapas", "seis etapas", "não podem ser parceladas"], "B", "Art. 77, § 3º."),
    ce("O servidor pode acumular férias de até três períodos, desde que haja necessidade do serviço.", "Errado", "O limite de acúmulo é de dois períodos (art. 77, caput)."),
    q("O servidor que opera direta e permanentemente com raios X goza, por semestre de atividade, de:", ["10 dias de férias", "15 dias de férias", "20 dias consecutivos de férias, sem acumulação", "30 dias, acumuláveis", "uma semana de folga por mês"], "C", "Art. 79."),
    q("Entre os motivos que podem levar à interrupção das férias **não** se inclui:", ["calamidade pública", "convocação para o júri", "serviço militar ou eleitoral", "conveniência do servidor, sem outro motivo", "necessidade do serviço declarada pela autoridade máxima"], "D", "Art. 80: a interrupção não é por conveniência pessoal."),
  ]);

  A("direitos-e-vantagens/licencas", [
    aprofundar([
      "### As sete licenças do art. 81",
      "1. **Doença em pessoa da família** (art. 83);",
      "2. **Afastamento do cônjuge ou companheiro** (art. 84);",
      "3. **Serviço militar** (art. 85);",
      "4. **Atividade política** (art. 86);",
      "5. **Capacitação** (art. 87);",
      "6. **Tratar de interesses particulares** (art. 91);",
      "7. **Desempenho de mandato classista** (art. 92).",
      "",
      "Além delas, a lei prevê, no título da Seguridade: licença para **tratamento da própria saúde** (art. 202), **à gestante** (art. 207), **à adotante** (art. 210), **paternidade** (art. 208) e por **acidente em serviço** (art. 211).",
      "",
      "### Quais são remuneradas",
      "- **Doença em pessoa da família**: **60 dias**, consecutivos ou não, **com remuneração**, e até **90 dias sem remuneração**, em cada período de 12 meses. Exige perícia médica oficial e que a assistência direta do servidor seja indispensável.",
      "- **Afastamento do cônjuge**: **sem remuneração**, por prazo indeterminado.",
      "- **Atividade política**: sem remuneração entre a escolha em convenção e a véspera do registro; do registro até o 10º dia após a eleição, **com remuneração por até três meses**.",
      "- **Capacitação**: após cada **quinquênio** de efetivo exercício, **até 3 meses**, com remuneração; os períodos **não são acumuláveis**.",
      "- **Interesses particulares**: **até 3 anos consecutivos**, **sem remuneração**, a critério da Administração, **vedada ao servidor em estágio probatório**; pode ser interrompida a qualquer tempo.",
      "- **Mandato classista**: sem remuneração, pelo tempo do mandato, com limites por tamanho da entidade.",
      "- **Serviço militar**: concluído o serviço, o servidor tem até **30 dias sem remuneração** para reassumir.",
      "",
      "### Prorrogação",
      "A licença concedida dentro de **60 dias** do término de outra **da mesma espécie** é considerada **prorrogação** (art. 82).",
      "",
      "### Estágio probatório",
      "Durante o estágio, só podem ser concedidas as licenças dos incisos I a IV do art. 81 (doença em pessoa da família, afastamento do cônjuge, serviço militar e atividade política), além de afastamentos específicos previstos na lei.",
    ]),
    atencao("A **licença-prêmio** foi substituída pela **licença para capacitação** (3 meses a cada 5 anos). Questão que fale em \"licença-prêmio de 3 meses por quinquênio\" usa nome antigo."),
    q("A licença para tratar de interesses particulares pode ser concedida pelo prazo de até:", ["6 meses", "1 ano", "2 anos", "3 anos consecutivos", "5 anos"], "D", "Art. 91: até três anos consecutivos, sem remuneração."),
    ce("O servidor em estágio probatório pode obter licença para tratar de interesses particulares, desde que a Administração concorde.", "Errado", "Art. 91: a licença só pode ser concedida a quem não esteja em estágio probatório."),
    q("Após cada quinquênio de efetivo exercício, o servidor poderá afastar-se, com remuneração, por até ___ para licença para capacitação.", ["30 dias", "60 dias", "3 meses", "6 meses", "1 ano"], "C", "Art. 87: até três meses, em curso de capacitação profissional; os períodos não são acumuláveis."),
    q("Uma licença da mesma espécie concedida dentro de ___ do término de outra é considerada prorrogação.", ["30 dias", "60 dias", "90 dias", "120 dias", "180 dias"], "B", "Art. 82."),
    ce("A licença por motivo de afastamento do cônjuge ou companheiro é concedida por prazo indeterminado e sem remuneração.", "Certo", "Art. 84, § 1º."),
  ]);

  A("direitos-e-vantagens/afastamentos", [
    aprofundar([
      "### Servir a outro órgão (cessão, art. 93)",
      "O servidor pode ser cedido a outro órgão ou entidade dos Poderes da União, dos Estados, do DF ou dos Municípios para: exercício de **cargo em comissão ou função de confiança**; ou nos casos previstos em **leis específicas**. Se a cessão for a Estados, DF ou Municípios, para cargo em comissão ou função de confiança, o **ônus da remuneração é do cessionário**; nos demais casos, do cedente.",
      "",
      "### Mandato eletivo (art. 94)",
      "- **Federal, estadual ou distrital**: afastado do cargo.",
      "- **Prefeito**: afastado do cargo, com **opção** pela remuneração.",
      "- **Vereador**: com **compatibilidade de horário**, recebe as vantagens do cargo **sem prejuízo** da remuneração do mandato; sem compatibilidade, aplica-se a regra do prefeito.",
      "",
      "### Estudo ou missão no exterior (art. 95)",
      "Exige autorização do **Presidente da República**, dos Presidentes dos órgãos do Legislativo e do **Presidente do STF**. A ausência **não excederá 4 anos**, e nova ausência só após **igual período**. Após o afastamento, o servidor não pode ser exonerado nem obter licença para interesses particulares **antes de período igual**, salvo ressarcimento.",
      "",
      "### Organismo internacional (art. 96)",
      "Afastamento para servir em organismo internacional de que o Brasil participe ou com o qual coopere dá-se com **perda total da remuneração**.",
      "",
      "### Pós-graduação no País (art. 96-A)",
      "Com remuneração, no interesse da Administração, para programa **stricto sensu** (mestrado, doutorado, pós-doutorado). O servidor deve estar no órgão há pelo menos **3 anos** (mestrado) ou **4 anos** (doutorado e pós-doutorado), incluído o estágio probatório, e, depois, **permanecer no exercício por período igual ao do afastamento**.",
    ]),
    q("O afastamento para servir em organismo internacional de que o Brasil participe ocorre com:", ["remuneração integral", "metade da remuneração", "perda total da remuneração", "apenas o vencimento básico", "remuneração a cargo do órgão de origem por 1 ano"], "C", "Art. 96."),
    ce("O servidor investido no mandato de vereador, havendo compatibilidade de horário, perceberá as vantagens de seu cargo sem prejuízo da remuneração do cargo eletivo.", "Certo", "Art. 94, III, a."),
    q("A ausência do País para estudo ou missão oficial não excederá:", ["1 ano", "2 anos", "3 anos", "4 anos", "6 anos"], "D", "Art. 95, § 1º."),
    q("O servidor investido no mandato de Prefeito:", ["acumula o cargo e o mandato", "é afastado do cargo, podendo optar pela sua remuneração", "perde o cargo", "recebe as duas remunerações", "continua no exercício, com horário reduzido"], "B", "Art. 94, II."),
  ]);

  A("direitos-e-vantagens/concessoes", [
    aprofundar([
      "### Ausências sem qualquer prejuízo (art. 97)",
      "O servidor pode ausentar-se do serviço, sem prejuízo:",
      "- **1 dia**, para **doação de sangue**;",
      "- **2 dias**, para **alistar-se como eleitor**;",
      "- **8 dias consecutivos**, em razão de **casamento** ou de **falecimento** do cônjuge, companheiro, pais, madrasta ou padrasto, filhos, enteados, menor sob guarda ou tutela e irmãos (os chamados **gala** e **nojo**).",
      "",
      "### Horário especial (art. 98)",
      "- **Servidor estudante**: quando houver incompatibilidade comprovada entre horário escolar e o da repartição; exige **compensação de horário**.",
      "- **Servidor com deficiência**: horário especial quando comprovada a necessidade por junta médica oficial, **independentemente de compensação**. Estende-se ao servidor que tenha **cônjuge, filho ou dependente com deficiência**.",
      "",
      "### Matrícula do servidor estudante removido (art. 99)",
      "Ao estudante que muda de sede **no interesse da Administração** é assegurada matrícula em instituição congênere, **em qualquer época, independentemente de vaga**. O direito se estende ao cônjuge, filhos, enteados e menores sob guarda que vivam em sua companhia.",
    ]),
    atencao("Estudante: **com** compensação. Servidor com deficiência (e quem tem dependente com deficiência): **sem** compensação."),
    q("O servidor pode ausentar-se do serviço, sem qualquer prejuízo, por ___ dias consecutivos em razão de casamento.", ["2", "3", "5", "8", "15"], "D", "Art. 97, III, a: oito dias consecutivos."),
    ce("O horário especial concedido ao servidor com deficiência exige compensação de horário.", "Errado", "Art. 98, § 2º: concede-se independentemente de compensação de horário."),
    q("Para se alistar como eleitor, o servidor tem direito a ausentar-se por:", ["1 dia", "2 dias", "3 dias", "5 dias", "8 dias"], "B", "Art. 97, II."),
    q("O servidor estudante que muda de sede no interesse da Administração tem assegurada matrícula em instituição de ensino congênere:", ["somente no início do semestre", "em qualquer época, independentemente de vaga", "apenas se houver vaga", "após o período de estágio probatório", "mediante nova prova de seleção"], "B", "Art. 99."),
  ]);

  A("direitos-e-vantagens/tempo-de-servico", [
    aprofundar([
      "### Regras gerais",
      "- É contado para todos os efeitos o tempo de serviço **público federal**, inclusive o prestado às Forças Armadas (art. 100).",
      "- A apuração é feita **em dias**, convertidos em anos, considerado o ano de **365 dias** (art. 101).",
      "",
      "### Efetivo exercício (art. 102)",
      "Além das ausências do art. 97, contam como efetivo exercício, entre outros: **férias**; exercício de **cargo em comissão** ou equivalente; participação em programa de **treinamento** ou **pós-graduação stricto sensu** no País; **mandato eletivo** (exceto para promoção por merecimento); **júri** e outros serviços obrigatórios; **missão ou estudo no exterior**; licenças à **gestante, adotante e paternidade**; **tratamento da própria saúde até 24 meses** (cumulativo ao longo do tempo de serviço federal); **mandato classista** (exceto para promoção por merecimento); **acidente em serviço**; **capacitação**; **serviço militar**.",
      "",
      "### Contado só para aposentadoria e disponibilidade (art. 103)",
      "- tempo de serviço público **estadual, municipal e distrital**;",
      "- licença por doença em pessoa da família, com remuneração;",
      "- licença por atividade política com remuneração (art. 86, § 2º);",
      "- mandato eletivo **anterior** ao ingresso no serviço federal;",
      "- tempo de **atividade privada** vinculada à Previdência Social;",
      "- tempo de tiro de guerra;",
      "- licença para tratamento da própria saúde que exceder 24 meses.",
      "",
      "### Vedações",
      "O tempo em que o servidor esteve **aposentado** só conta para nova aposentadoria. É **vedada a contagem cumulativa** de tempo de serviço prestado concomitantemente em mais de um cargo ou função.",
    ]),
    atencao("Licença **para interesses particulares** e licença **por afastamento do cônjuge** (sem remuneração) **não** constam entre as hipóteses de efetivo exercício. Para a aposentadoria pós-EC 103/2019, confira o texto constitucional: o tempo ficto foi muito reduzido.", "Conferir"),
    q("Para o cômputo do tempo de serviço, o ano é considerado como de:", ["360 dias", "365 dias", "366 dias", "12 meses de 30 dias", "o número de dias efetivamente trabalhados"], "B", "Art. 101: a apuração é feita em dias, convertidos em anos de 365 dias."),
    ce("As férias são consideradas de efetivo exercício para todos os efeitos.", "Certo", "Art. 102, I."),
    q("O tempo de serviço público estadual ou municipal, na Lei 8.112, conta:", ["para todos os efeitos", "apenas para aposentadoria e disponibilidade", "apenas para o estágio probatório", "apenas para a promoção", "não conta para nada"], "B", "Art. 103, I."),
    q("É vedada a contagem cumulativa de tempo de serviço quando:", ["o servidor passa por férias", "prestado concomitantemente em mais de um cargo ou função público", "o servidor presta serviço militar", "o servidor se aposenta", "o servidor é cedido"], "B", "Art. 103, § 3º."),
  ]);

  A("direitos-e-vantagens/direito-de-peticao", [
    aprofundar([
      "### Instrumentos",
      "- **Requerimento**: dirigido à autoridade competente para decidir, encaminhado por intermédio da autoridade a que o requerente estiver imediatamente subordinado.",
      "- **Pedido de reconsideração**: à **mesma autoridade** que expediu o ato ou proferiu a primeira decisão; **não pode ser renovado**.",
      "- **Recurso**: cabível contra o indeferimento do pedido de reconsideração e contra as decisões sobre os recursos sucessivos; dirigido à autoridade **imediatamente superior**, em escala ascendente.",
      "",
      "### Prazos",
      "- Requerimento e pedido de reconsideração: **despachados em 5 dias** e **decididos em 30 dias**.",
      "- Interposição de pedido de reconsideração ou recurso: **30 dias**, contados da publicação ou da ciência.",
      "- Os prazos são **fatais e improrrogáveis**, salvo motivo de força maior.",
      "",
      "### Efeitos",
      "O recurso **pode** ser recebido com efeito suspensivo, a juízo da autoridade. Dado provimento, os efeitos **retroagem** à data do ato impugnado. Pedido de reconsideração e recurso **interrompem a prescrição**.",
      "",
      "### Prescrição do direito de requerer (art. 110)",
      "- **5 anos**: atos de demissão, cassação de aposentadoria ou disponibilidade, e os que afetem interesses patrimoniais e créditos resultantes das relações de trabalho.",
      "- **120 dias**: nos demais casos, salvo prazo diferente em lei.",
      "A prescrição é **de ordem pública**: a Administração não pode relevá-la. A Administração deve rever seus atos **a qualquer tempo**, quando ilegais (art. 114).",
    ]),
    {
      tipo: "tabela",
      titulo: "Os números do direito de petição",
      cabecalho: ["Item", "Prazo"],
      linhas: [
        ["Despachar requerimento ou reconsideração", "5 dias"],
        ["Decidir requerimento ou reconsideração", "30 dias"],
        ["Interpor reconsideração ou recurso", "30 dias"],
        ["Prescrição: demissão e interesses patrimoniais", "5 anos"],
        ["Prescrição: demais casos", "120 dias"],
      ],
    },
    q("O pedido de reconsideração é dirigido:", ["à autoridade imediatamente superior", "ao Ministro de Estado", "à autoridade que houver expedido o ato ou proferido a primeira decisão", "ao Poder Judiciário", "ao órgão central do SIPEC"], "C", "Art. 106: e não pode ser renovado."),
    ce("O prazo para interposição de pedido de reconsideração ou de recurso é de 30 dias, contados da publicação ou da ciência da decisão recorrida.", "Certo", "Art. 108."),
    q("O direito de requerer prescreve em ___ quanto aos atos de demissão e aos que afetem interesses patrimoniais e créditos resultantes das relações de trabalho.", ["30 dias", "120 dias", "1 ano", "5 anos", "10 anos"], "D", "Art. 110, I."),
    q("Nos demais casos, salvo prazo diverso fixado em lei, o direito de requerer prescreve em:", ["30 dias", "60 dias", "120 dias", "180 dias", "5 anos"], "C", "Art. 110, II."),
  ]);
})();
