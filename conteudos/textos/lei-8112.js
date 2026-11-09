/* Lei 8.112/1990 · Regime Jurídico dos Servidores Públicos Civis da União. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-a", "lei-8112", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const URL = "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm";
  const LEI = { titulo: "Lei 8.112/1990 (texto compilado) · Planalto", url: URL };
  const lei = (texto, referencia, titulo) => ({ tipo: "lei", titulo, texto, referencia, url: URL });
  const DP = "Disposições Preliminares e Provimento";
  const VM = "Vacância e Movimentação";
  const DV = "Direitos e Vantagens";
  const RD = "Regime Disciplinar";
  const PD = "Processo Administrativo Disciplinar";
  const SS = "Seguridade Social do Servidor";

  /* ================= PROVIMENTO ================= */

  A(DP, "Conceitos: servidor, cargo público e quadro", {
    resumo: "Quem é servidor para a Lei 8.112 e o que é cargo público.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      lei([
        "Art. 2º Para os efeitos desta Lei, servidor é a pessoa legalmente investida em cargo público.",
        "Art. 3º Cargo público é o conjunto de atribuições e responsabilidades previstas na estrutura organizacional que devem ser cometidas a um servidor.",
        "Parágrafo único. Os cargos públicos, acessíveis a todos os brasileiros, são criados por lei, com denominação própria e vencimento pago pelos cofres públicos, para provimento em caráter efetivo ou em comissão.",
        "Art. 4º É proibida a prestação de serviços gratuitos, salvo os casos previstos em lei."
      ], "Lei 8.112/1990, arts. 2º a 4º"),
      { tipo: "texto", texto: [
        "A Lei 8.112 se aplica aos servidores da **União**, das **autarquias** (inclusive as em regime especial) e das **fundações públicas federais** (art. 1º). Não se aplica a empregados de empresas públicas e sociedades de economia mista (CLT).",
        "",
        "**Quadro** é o conjunto de cargos de um órgão ou entidade."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Quem cria cargo público?", verso: "A lei." },
        { frente: "A Lei 8.112 vale para empregados da Caixa?", verso: "Não. Empresas públicas seguem a CLT." },
        { frente: "Serviço gratuito ao Estado é permitido?", verso: "Não, salvo casos previstos em lei (art. 4º). Ex.: mesário, jurado." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 8.112/1990, os cargos públicos são criados:", alternativas: ["por decreto do Presidente", "por portaria do Ministro", "por lei", "por resolução do órgão", "pelo edital do concurso"], correta: "C", comentario: "Art. 3º, parágrafo único." }
    ]
  });

  A(DP, "Formas de provimento", {
    resumo: "As sete formas: nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei(["Art. 8º São formas de provimento de cargo público: I – nomeação; II – promoção; [III e IV revogados]; V – readaptação; VI – reversão; VII – aproveitamento; VIII – reintegração; IX – recondução."], "Lei 8.112/1990, art. 8º"),
      { tipo: "dica", texto: "Para lembrar das 7: **nomeação** e **promoção** (entrar e subir), **readaptação** (mudar por limitação), **aproveitamento** (sair da disponibilidade) e os **três Rs de volta**: **reversão**, **reintegração** e **recondução**." },
      { tipo: "atencao", texto: "**Ascensão** e **transferência** foram **revogadas** (eram inconstitucionais, porque permitiam mudar de cargo sem concurso). Se aparecerem como forma de provimento, a alternativa está errada." },
      { tipo: "texto", texto: ["A **nomeação** é a única forma **originária** (o primeiro vínculo com o cargo). As outras são **derivadas** (pressupõem vínculo anterior). E só há **posse** na nomeação (art. 13, § 4º)."] },
      { tipo: "questao", banca: Q, enunciado: "NÃO é forma de provimento de cargo público na Lei 8.112/1990:", alternativas: ["reversão", "recondução", "transferência", "aproveitamento", "readaptação"], correta: "C", comentario: "A transferência foi revogada (Lei 9.527/1997)." }
    ]
  });

  A(DP, "Concurso público", {
    resumo: "Validade, prorrogação, vagas para pessoas com deficiência e a proibição de novo concurso.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei([
        "Art. 11. O concurso será de provas ou de provas e títulos, podendo ser realizado em duas etapas, conforme dispuserem a lei e o regulamento do respectivo plano de carreira, condicionada a inscrição do candidato ao pagamento do valor fixado no edital, quando indispensável ao seu custeio e ressalvadas as hipóteses de isenção nele expressamente previstas.",
        "Art. 12. O concurso público terá validade de até 2 (dois) anos, podendo ser prorrogado uma única vez, por igual período.",
        "§ 2º Não se abrirá novo concurso enquanto houver candidato aprovado em concurso anterior com prazo de validade não expirado."
      ], "Lei 8.112/1990, arts. 11 e 12"),
      { tipo: "texto", titulo: "Requisitos básicos para investidura (art. 5º)", texto: [
        "I – nacionalidade brasileira; II – gozo dos direitos políticos; III – quitação com as obrigações militares e eleitorais; IV – nível de escolaridade exigido; V – idade mínima de 18 anos; VI – aptidão física e mental.",
        "",
        "Às pessoas com deficiência são reservadas **até 20%** das vagas (art. 5º, § 2º). (O Decreto 9.508/2018 fixa o mínimo de 5%.)"
      ]},
      { tipo: "atencao", texto: "Note a diferença: a **CF** permite abrir novo concurso durante a validade do anterior, desde que os aprovados antes tenham prioridade (art. 37, IV). A **Lei 8.112** é mais rígida: **proíbe** abrir novo concurso enquanto houver aprovado em concurso anterior válido." },
      { tipo: "questao", banca: Q, enunciado: "Pela Lei 8.112/1990, enquanto houver candidato aprovado em concurso com prazo de validade não expirado:", alternativas: ["pode-se abrir novo concurso livremente", "não se abrirá novo concurso", "o novo concurso só vale para outras cidades", "o prazo de validade se renova automaticamente", "o candidato perde o direito à nomeação"], correta: "B", comentario: "Art. 12, § 2º." }
    ]
  });

  A(DP, "Nomeação, posse e exercício", {
    resumo: "Os prazos de 30 dias para a posse e 15 dias para o exercício e o que acontece se forem perdidos.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "svg", titulo: "Linha do tempo", legenda: "Perdeu o prazo da posse: a nomeação fica sem efeito. Perdeu o do exercício: é exonerado.", codigo: `
<svg viewBox="0 0 580 170" role="img" aria-label="Linha do tempo: publicação da nomeação, 30 dias para posse, depois 15 dias para entrar em exercício">
  <line class="ln" x1="30" y1="80" x2="560" y2="80"></line>
  <circle class="pt" cx="40" cy="80" r="7"></circle><text class="tx" x="40" y="60" text-anchor="middle">Nomeação</text><text class="tx-m" x="40" y="110" text-anchor="middle">publicação</text>
  <circle class="pt" cx="300" cy="80" r="7"></circle><text class="tx" x="300" y="60" text-anchor="middle">Posse</text>
  <circle class="pt" cx="520" cy="80" r="7"></circle><text class="tx" x="520" y="60" text-anchor="middle">Exercício</text>
  <text class="tx tx-d tx-t" x="170" y="105" text-anchor="middle">até 30 dias</text>
  <text class="tx tx-d tx-t" x="410" y="105" text-anchor="middle">até 15 dias</text>
  <text class="tx-m" x="170" y="140" text-anchor="middle">se não: nomeação sem efeito</text>
  <text class="tx-m" x="410" y="140" text-anchor="middle">se não: exoneração</text>
</svg>` },
      { tipo: "tabela", titulo: "Detalhes", cabecalho: ["Etapa", "Regra"], linhas: [
        ["Nomeação (art. 9º)", "em caráter efetivo (cargo de carreira ou isolado) ou em comissão"],
        ["Posse (art. 13)", "assinatura do termo; em até 30 dias da publicação; pode ser por **procuração específica**; exige declaração de bens e de outros cargos; depende de **inspeção médica oficial** (art. 14)"],
        ["Exercício (art. 15)", "efetivo desempenho das atribuições; em até 15 dias da posse"],
        ["Função de confiança (art. 15, § 4º)", "o exercício começa na data da publicação do ato de designação"]
      ]},
      { tipo: "atencao", texto: "Só há posse na **nomeação**. Nos outros provimentos (reintegração, reversão…) o servidor apenas entra em exercício." },
      { tipo: "questao", banca: Q, enunciado: "Um candidato nomeado toma posse, mas não entra em exercício no prazo legal. Segundo a Lei 8.112/1990, ele será:", alternativas: ["demitido", "exonerado", "a nomeação será tornada sem efeito", "colocado em disponibilidade", "suspenso"], correta: "B", comentario: "Art. 15, § 2º: será exonerado. Se não tivesse tomado posse, a nomeação ficaria sem efeito (art. 13, § 6º)." }
    ]
  });

  A(DP, "Estágio probatório e estabilidade", {
    resumo: "Os fatores avaliados, o prazo (24 meses na lei, 3 anos pela CF) e o que acontece se reprovado.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "O **estágio probatório** avalia a aptidão e a capacidade do servidor para o cargo. Fatores (art. 20): **assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade**.",
        "",
        "Quem não for aprovado é **exonerado** ou, se já era estável em outro cargo, **reconduzido** ao cargo anterior (art. 20, § 2º)."
      ]},
      { tipo: "atencao", titulo: "Prazo: o texto da lei × a Constituição", texto: [
        "O art. 20 da Lei 8.112 ainda diz **24 meses** e o art. 21 fala em estabilidade após **2 anos**. Mas a **EC 19/1998** mudou a CF (art. 41) para **3 anos** de efetivo exercício.",
        "Prevalece a CF: o entendimento do STF, do STJ e da AGU é que o estágio probatório acompanha os **3 anos**.",
        "Na prova: se a questão pedir \"segundo a Lei 8.112\", pode cobrar o texto literal (24 meses). Se pedir \"segundo a CF\" ou a jurisprudência, são 3 anos. Leia o enunciado."
      ]},
      { tipo: "dica", texto: "Fatores do estágio: **\"ADCPR\"** — **A**ssiduidade, **D**isciplina, **C**apacidade de iniciativa, **P**rodutividade, **R**esponsabilidade." },
      { tipo: "questao", banca: Q, enunciado: "É fator avaliado no estágio probatório, segundo o art. 20 da Lei 8.112/1990:", alternativas: ["pontualidade", "lealdade", "capacidade de iniciativa", "simpatia", "titulação acadêmica"], correta: "C", comentario: "Os cinco fatores: assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade." }
    ]
  });

  A(DP, "Readaptação, reversão, reintegração, recondução e aproveitamento", {
    resumo: "As formas de provimento derivado e quando cada uma acontece.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Quadro comparativo", cabecalho: ["Forma", "Quem", "Quando", "Artigo"], linhas: [
        ["Readaptação", "servidor com **limitação** física ou mental", "vai para cargo de atribuições compatíveis, com mesma escolaridade e vencimento; se incapaz, é aposentado", "24"],
        ["Reversão", "**aposentado**", "volta à ativa: (I) aposentado por invalidez cujos motivos deixaram de existir; (II) no interesse da Administração, a pedido, se a aposentadoria foi voluntária, era estável e se aposentou há menos de 5 anos, havendo cargo vago", "25"],
        ["Reintegração", "**estável demitido**", "a demissão foi **invalidada** (judicial ou administrativamente); volta com ressarcimento de todas as vantagens", "28"],
        ["Recondução", "**estável**", "volta ao cargo anterior por **inabilitação** no estágio probatório de outro cargo ou por **reintegração** do antigo ocupante", "29"],
        ["Aproveitamento", "servidor em **disponibilidade**", "volta obrigatoriamente em cargo de atribuições e vencimentos compatíveis", "30"]
      ]},
      { tipo: "dica", titulo: "Para não confundir os três \"Rs\"", texto: [
        "- **Reversão** → **aposentado** volta.",
        "- **Reintegração** → **demitido** injustamente volta.",
        "- **Recondução** → estável volta ao cargo **anterior**."
      ]},
      { tipo: "atencao", texto: "Não haverá reversão de quem já tem **70 anos** (art. 27)." },
      { tipo: "questao", banca: Q, enunciado: "Servidor estável demitido teve a demissão anulada por decisão judicial. O retorno dele ao cargo chama-se:", alternativas: ["reversão", "recondução", "reintegração", "aproveitamento", "readaptação"], correta: "C", comentario: "Art. 28: reintegração, com ressarcimento de todas as vantagens." }
    ]
  });

  /* ================= VACÂNCIA E MOVIMENTAÇÃO ================= */

  A(VM, "Vacância", {
    resumo: "As formas de o cargo ficar vago e a diferença entre exoneração e demissão.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei(["Art. 33. A vacância do cargo público decorrerá de: I – exoneração; II – demissão; III – promoção; [IV e V revogados]; VI – readaptação; VII – aposentadoria; VIII – posse em outro cargo inacumulável; IX – falecimento."], "Lei 8.112/1990, art. 33"),
      { tipo: "tabela", titulo: "Exoneração × demissão", cabecalho: ["", "Exoneração", "Demissão"], linhas: [
        ["Natureza", "**não** é punição", "é **penalidade**"],
        ["Efetivo", "a pedido; ou de ofício: reprovado no estágio, ou não entrou em exercício no prazo (art. 34)", "infrações graves do art. 132, após PAD"],
        ["Em comissão", "a juízo da autoridade ou a pedido (art. 35)", "—"]
      ]},
      { tipo: "dica", texto: "Promoção e readaptação aparecem **duas vezes**: são formas de provimento (de um cargo) e de vacância (do cargo anterior) ao mesmo tempo." },
      { tipo: "questao", banca: Q, enunciado: "A vacância de cargo efetivo por exoneração de ofício ocorre quando o servidor:", alternativas: ["comete abandono de cargo", "não satisfaz as condições do estágio probatório", "acumula cargos ilegalmente", "pratica ato de improbidade", "se aposenta"], correta: "B", comentario: "Art. 34, parágrafo único, I. As demais são demissão ou aposentadoria." }
    ]
  });

  A(VM, "Remoção", {
    resumo: "Deslocamento do servidor no mesmo quadro: de ofício, a pedido e a pedido independentemente do interesse.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei(["Art. 36. Remoção é o deslocamento do servidor, a pedido ou de ofício, no âmbito do mesmo quadro, com ou sem mudança de sede."], "Lei 8.112/1990, art. 36"),
      { tipo: "tabela", titulo: "Modalidades (art. 36, parágrafo único)", cabecalho: ["Modalidade", "Quando"], linhas: [
        ["De ofício", "no interesse da Administração"],
        ["A pedido, a critério da Administração", "a Administração decide se aceita"],
        ["A pedido, **independentemente** do interesse da Administração", "(a) acompanhar cônjuge ou companheiro, também servidor, que foi deslocado no interesse da Administração; (b) por motivo de saúde do servidor, cônjuge, companheiro ou dependente, comprovado por junta médica oficial; (c) em processo seletivo promovido quando há mais interessados que vagas"]
      ]},
      { tipo: "atencao", texto: "Remoção é do **servidor** (a pessoa muda de lugar). **Redistribuição** é do **cargo** (o cargo muda de órgão)." },
      { tipo: "questao", banca: Q, enunciado: "O servidor que pede remoção para tratar de doença do filho dependente, comprovada por junta médica oficial, será removido:", alternativas: ["a critério da Administração", "independentemente do interesse da Administração", "somente de ofício", "apenas se houver permuta", "somente após o estágio probatório"], correta: "B", comentario: "Art. 36, parágrafo único, III, b." }
    ]
  });

  A(VM, "Redistribuição", {
    resumo: "O cargo, ocupado ou vago, muda de órgão no mesmo Poder.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      lei(["Art. 37. Redistribuição é o deslocamento de cargo de provimento efetivo, ocupado ou vago no âmbito do quadro geral de pessoal, para outro órgão ou entidade do mesmo Poder, com prévia apreciação do órgão central do SIPEC, observados os seguintes preceitos: I – interesse da administração; II – equivalência de vencimentos; III – manutenção da essência das atribuições do cargo; IV – vinculação entre os graus de responsabilidade e complexidade das atividades; V – mesmo nível de escolaridade, especialidade ou habilitação profissional; VI – compatibilidade entre as atribuições do cargo e as finalidades institucionais do órgão ou entidade."], "Lei 8.112/1990, art. 37"),
      { tipo: "texto", texto: ["Se o cargo for extinto ou o órgão reorganizado e o servidor estável não for redistribuído, ele fica em **disponibilidade** até ser aproveitado (art. 37, § 3º)."] },
      { tipo: "questao", banca: Q, enunciado: "A redistribuição de cargo efetivo pode ocorrer para:", alternativas: ["órgão de outro Poder", "órgão do mesmo Poder, observada a equivalência de vencimentos", "empresa pública, para cargo celetista", "qualquer órgão, sem requisitos", "cargo de outra escolaridade"], correta: "B", comentario: "Mesmo Poder, com os requisitos do art. 37." }
    ]
  });

  A(VM, "Substituição", {
    resumo: "Quem substitui chefes nos afastamentos e quando recebe pela substituição.",
    incidencia: "baixa",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "Servidores em cargo ou função de **direção ou chefia** e ocupantes de cargo de **Natureza Especial** têm **substitutos** indicados no regimento ou designados previamente (art. 38).",
        "",
        "- O substituto assume **automaticamente** nos afastamentos e impedimentos legais do titular, acumulando ou não as atribuições.",
        "- Recebe a retribuição do cargo de chefia nos afastamentos **superiores a 30 dias consecutivos**, paga na proporção dos dias que **excederem** esse período (art. 38, § 2º)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "O substituto de um chefe afastado por 40 dias consecutivos receberá a retribuição da chefia referente a:", alternativas: ["40 dias", "30 dias", "10 dias", "nenhum dia", "metade do período"], correta: "C", comentario: "Paga-se pelos dias que excederem os 30 consecutivos: 40 − 30 = 10 dias." }
    ]
  });

  /* ================= DIREITOS E VANTAGENS ================= */

  A(DV, "Vencimento e remuneração", {
    resumo: "Vencimento × remuneração, irredutibilidade e descontos.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      lei(["Art. 40. Vencimento é a retribuição pecuniária pelo exercício de cargo público, com valor fixado em lei.", "Art. 41. Remuneração é o vencimento do cargo efetivo, acrescido das vantagens pecuniárias permanentes estabelecidas em lei."], "Lei 8.112/1990, arts. 40 e 41"),
      { tipo: "texto", texto: [
        "- A remuneração é **irredutível** (art. 41, § 3º) e nenhum servidor recebe remuneração inferior ao **salário mínimo** (§ 5º).",
        "- Reposições e indenizações ao erário podem ser descontadas em parcelas de, no mínimo, **10%** da remuneração (art. 46, § 1º).",
        "- O vencimento, a remuneração e o provento **não** podem ser objeto de arresto, sequestro ou penhora, exceto para **pensão alimentícia** decorrente de decisão judicial (art. 48)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 8.112/1990, a remuneração do servidor pode ser penhorada:", alternativas: ["para pagar qualquer dívida", "para pagar dívidas com bancos", "em caso de prestação de alimentos determinada judicialmente", "nunca", "para pagar impostos atrasados"], correta: "C", comentario: "Art. 48: exceção da pensão alimentícia." }
    ]
  });

  A(DV, "Indenizações: ajuda de custo, diárias, transporte e auxílio-moradia", {
    resumo: "Vantagens que ressarcem despesas e não se incorporam ao vencimento.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: ["As **indenizações** **não se incorporam** ao vencimento ou provento para nenhum efeito (art. 49, § 1º). São quatro (art. 51):"] },
      { tipo: "tabela", titulo: "As quatro indenizações", cabecalho: ["Indenização", "Para quê", "Regras"], linhas: [
        ["Ajuda de custo (arts. 53 a 57)", "instalação do servidor que muda de domicílio **em caráter permanente**, no interesse do serviço", "não pode passar de 3 meses de remuneração; quem não se apresentar em 30 dias devolve"],
        ["Diárias (arts. 58 e 59)", "afastamento **eventual ou transitório** da sede, para pousada, alimentação e locomoção", "meia diária quando não há pernoite; não cabe se o deslocamento é exigência permanente do cargo; devolve em 5 dias se não viajar"],
        ["Indenização de transporte (art. 60)", "uso de **meio próprio** de locomoção em serviço externo", "conforme regulamento"],
        ["Auxílio-moradia (arts. 60-A a 60-E)", "ressarcir aluguel ou hospedagem de quem foi deslocado para cargo em comissão ou função de confiança em outra cidade", "requisitos cumulativos; não cabe se houver imóvel funcional"]
      ]},
      { tipo: "dica", texto: "Mudança **permanente** de domicílio → **ajuda de custo**. Viagem **eventual** → **diárias**." },
      { tipo: "questao", banca: Q, enunciado: "O servidor que viaja a serviço por dois dias, com pernoite, para participar de uma audiência em outra cidade, recebe:", alternativas: ["ajuda de custo", "diárias", "auxílio-moradia", "gratificação natalina", "adicional de deslocamento"], correta: "B", comentario: "Afastamento eventual da sede: diárias (art. 58)." }
    ]
  });

  A(DV, "Gratificações e adicionais", {
    resumo: "Retribuição por chefia, gratificação natalina, adicionais de insalubridade, horas extras, noturno e de férias.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Principais (art. 61)", cabecalho: ["Vantagem", "Regra"], linhas: [
        ["Retribuição por função de direção, chefia e assessoramento", "devida a quem a exerce"],
        ["Gratificação natalina (13º)", "1/12 da remuneração de dezembro por mês de exercício; fração de 15 dias ou mais conta como mês; paga até o dia **20 de dezembro** (arts. 63 e 64)"],
        ["Insalubridade, periculosidade ou atividades penosas", "não se acumulam: o servidor **opta** por um (art. 68, § 1º); cessa quando acaba a exposição"],
        ["Serviço extraordinário", "acréscimo de **50%** sobre a hora normal; no máximo **2 horas** por jornada (arts. 73 e 74)"],
        ["Adicional noturno", "das **22h às 5h**; acréscimo de **25%**; a hora vale 52 minutos e 30 segundos (art. 75)"],
        ["Adicional de férias", "**1/3** da remuneração do período de férias (art. 76)"],
        ["Gratificação por encargo de curso ou concurso", "para quem atua como instrutor ou em banca/fiscalização de concurso (art. 76-A)"]
      ]},
      { tipo: "python", titulo: "Calculando a gratificação natalina", texto: "Servidor que entrou em exercício em 10 de maio, com remuneração de R$ 4.800 em dezembro.", codigo: `
remuneracao = 4800
# Maio: trabalhou de 10 a 31 = 22 dias (>= 15 conta como mês) -> maio a dezembro
meses = 8
gratificacao = remuneracao / 12 * meses
print(f"Meses considerados: {meses}")
print(f"Gratificação natalina: R$ {gratificacao:.2f}")
`, saida: `
Meses considerados: 8
Gratificação natalina: R$ 3200.00
` },
      { tipo: "questao", banca: Q, enunciado: "O adicional por serviço extraordinário corresponde a:", alternativas: ["25% sobre a hora normal, sem limite diário", "50% sobre a hora normal, limitado a 2 horas por jornada", "100% sobre a hora normal", "1/3 da remuneração", "50% sobre a hora normal, sem limite"], correta: "B", comentario: "Arts. 73 e 74." }
    ]
  });

  A(DV, "Férias", {
    resumo: "30 dias por ano, acúmulo de até 2 períodos, parcelamento em 3 etapas e interrupção.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei(["Art. 77. O servidor fará jus a trinta dias de férias, que podem ser acumuladas, até o máximo de dois períodos, no caso de necessidade do serviço, ressalvadas as hipóteses em que haja legislação específica.", "§ 1º Para o primeiro período aquisitivo de férias serão exigidos 12 (doze) meses de exercício.", "§ 2º É vedado levar à conta de férias qualquer falta ao serviço.", "§ 3º As férias poderão ser parceladas em até três etapas, desde que assim requeridas pelo servidor, e no interesse da administração pública."], "Lei 8.112/1990, art. 77"),
      { tipo: "texto", texto: [
        "- O pagamento (com o adicional de 1/3) é feito até **2 dias antes** do início (art. 78).",
        "- Servidor que opera com **raios X** ou substâncias radioativas: **20 dias consecutivos por semestre**, proibida a acumulação (art. 79).",
        "- As férias só podem ser **interrompidas** por calamidade pública, comoção interna, convocação para júri, serviço militar ou eleitoral, ou necessidade do serviço declarada pela autoridade máxima do órgão (art. 80)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Sobre as férias na Lei 8.112/1990, é correto afirmar:", alternativas: ["podem ser acumuladas por até 3 períodos", "faltas podem ser descontadas das férias", "podem ser parceladas em até 3 etapas, a pedido do servidor", "o primeiro período exige 6 meses de exercício", "não podem ser interrompidas em nenhuma hipótese"], correta: "C", comentario: "Art. 77, § 3º. Acúmulo máximo de 2 períodos; faltas não vão para as férias; 12 meses para o 1º período." }
    ]
  });

  A(DV, "Licenças", {
    resumo: "As sete licenças do art. 81, quais são remuneradas e os prazos.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Licenças (art. 81)", cabecalho: ["Licença", "Remuneração", "Prazo / regra"], linhas: [
        ["Por motivo de doença em pessoa da família", "com, até 60 dias; sem, até mais 90", "a cada 12 meses; família: cônjuge, pais, filhos, padrasto, madrasta, enteado, dependente (art. 83)"],
        ["Por motivo de afastamento do cônjuge ou companheiro", "sem", "prazo indeterminado (art. 84)"],
        ["Para o serviço militar", "conforme legislação", "volta em até 30 dias após a dispensa (art. 85)"],
        ["Para atividade política", "sem, da convenção ao registro; com, do registro até 10 dias após a eleição (até 3 meses)", "art. 86"],
        ["Para capacitação", "com", "até 3 meses a cada 5 anos de exercício, não acumuláveis (art. 87)"],
        ["Para tratar de interesses particulares", "sem", "até 3 anos consecutivos; não pode estar em estágio probatório; pode ser interrompida (art. 91)"],
        ["Para desempenho de mandato classista", "sem", "duração do mandato (art. 92)"]
      ]},
      { tipo: "atencao", texto: "As licenças para **tratamento da própria saúde**, à **gestante** e por **acidente em serviço** existem, mas estão no capítulo da **Seguridade Social do Servidor** (arts. 202 e seguintes), não no art. 81." },
      { tipo: "flashcards", cartas: [
        { frente: "Licença para capacitação", verso: "Até 3 meses, a cada quinquênio, com remuneração, não acumuláveis." },
        { frente: "Licença para interesses particulares", verso: "Até 3 anos, sem remuneração, vedada no estágio probatório." },
        { frente: "Doença em pessoa da família", verso: "Até 60 dias com remuneração + até 90 dias sem, a cada 12 meses." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "A licença para capacitação, segundo a Lei 8.112/1990, é concedida:", alternativas: ["após cada ano de exercício, por até 30 dias", "após cada quinquênio, por até 3 meses, com remuneração", "após cada quinquênio, por até 3 meses, sem remuneração", "a qualquer tempo, por até 2 anos", "apenas a servidores em estágio probatório"], correta: "B", comentario: "Art. 87." }
    ]
  });

  A(DV, "Afastamentos", {
    resumo: "Para servir a outro órgão, para mandato eletivo, para estudo no exterior e pós-graduação no País.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Mandato eletivo (art. 94)", cabecalho: ["Mandato", "O servidor…"], linhas: [
        ["Federal, estadual ou distrital", "fica afastado do cargo"],
        ["Prefeito", "fica afastado e pode **optar** pela remuneração"],
        ["Vereador", "havendo compatibilidade de horário, recebe as duas remunerações; se não houver, fica afastado e opta"]
      ]},
      { tipo: "texto", titulo: "Outros afastamentos", texto: [
        "- **Para servir a outro órgão ou entidade** (cessão) para cargo em comissão ou função de confiança ou em casos previstos em lei (art. 93).",
        "- **Para estudo ou missão no exterior**: depende de autorização; até **4 anos**; ao voltar, só pode ter nova ausência igual após o mesmo período (art. 95).",
        "- **Para pós-graduação stricto sensu no País** (art. 96-A): com remuneração; exige tempo mínimo de exercício; ao voltar, o servidor deve permanecer no cargo por período igual ao do afastamento, ou ressarcir os gastos."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Servidor federal eleito vereador, havendo compatibilidade de horários:", alternativas: ["fica afastado sem remuneração", "deve exonerar-se", "perceberá as vantagens do cargo, sem prejuízo da remuneração do cargo eletivo", "deve optar por uma das remunerações", "fica em disponibilidade"], correta: "C", comentario: "Art. 94, III, a." }
    ]
  });

  A(DV, "Concessões", {
    resumo: "Ausências sem prejuízo: doação de sangue, alistamento, casamento e luto; horário especial.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Ausências sem prejuízo (art. 97)", cabecalho: ["Motivo", "Tempo"], linhas: [
        ["Doação de sangue", "**1 dia**"],
        ["Alistamento ou recadastramento eleitoral", "pelo período comprovadamente necessário, limitado a **2 dias**"],
        ["Casamento (gala)", "**8 dias** consecutivos"],
        ["Falecimento do cônjuge, companheiro, pais, madrasta ou padrasto, filhos, enteados, menor sob guarda ou tutela e irmãos (nojo)", "**8 dias** consecutivos"]
      ]},
      { tipo: "tabela", titulo: "Horário especial (art. 98)", cabecalho: ["Quem", "Compensação de horário?"], linhas: [
        ["Servidor estudante (quando há incompatibilidade com o horário escolar)", "sim"],
        ["Servidor com deficiência", "não"],
        ["Servidor com cônjuge, filho ou dependente com deficiência", "não"],
        ["Servidor que atua como instrutor ou em banca de concurso", "sim"]
      ]},
      { tipo: "dica", texto: "Números das concessões: **1 · 2 · 8 · 8** (sangue, alistamento, casamento, luto)." },
      { tipo: "questao", banca: Q, enunciado: "Pelo falecimento do irmão, o servidor pode ausentar-se do serviço, sem prejuízo, por:", alternativas: ["1 dia", "2 dias", "5 dias", "8 dias consecutivos", "15 dias"], correta: "D", comentario: "Art. 97, III, b: 8 dias consecutivos." }
    ]
  });

  A(DV, "Tempo de serviço", {
    resumo: "Como se conta o tempo e o que vale como efetivo exercício.",
    incidencia: "baixa",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "- É contado para todos os efeitos o tempo de serviço público **federal**, inclusive o prestado às Forças Armadas (art. 100).",
        "- A apuração é feita em **dias**, convertidos em **anos de 365 dias** (art. 101).",
        "- O art. 102 lista os afastamentos considerados **efetivo exercício**: férias, júri, licença à gestante, licença para capacitação, desempenho de mandato eletivo (exceto para promoção por merecimento), entre outros.",
        "- Vedada a contagem **cumulativa** de tempo prestado simultaneamente em mais de um cargo (art. 103, § 2º)."
      ]},
      { tipo: "python", titulo: "Convertendo dias em anos e dias", codigo: `
dias = 4000
anos, resto = divmod(dias, 365)
print(f"{dias} dias = {anos} anos e {resto} dias")
`, saida: `
4000 dias = 10 anos e 350 dias
` },
      { tipo: "questao", banca: Q, enunciado: "Na Lei 8.112/1990, o tempo de serviço é apurado em dias e convertido em anos de:", alternativas: ["360 dias", "365 dias", "366 dias", "12 meses de 30 dias", "250 dias úteis"], correta: "B", comentario: "Art. 101." }
    ]
  });

  A(DV, "Direito de petição", {
    resumo: "Requerimento, pedido de reconsideração, recurso e prazos de prescrição.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "É assegurado ao servidor requerer aos Poderes Públicos em defesa de direito ou interesse legítimo (art. 104).",
        "",
        "- O **requerimento** é dirigido à autoridade competente, por intermédio daquela a que o servidor está subordinado (art. 105).",
        "- **Pedido de reconsideração**: à mesma autoridade que decidiu; **não pode ser renovado** (art. 106).",
        "- **Recurso**: contra o indeferimento do pedido de reconsideração e das decisões sobre recursos sucessivos, à autoridade imediatamente superior (art. 107).",
        "- Prazo para pedir reconsideração ou recorrer: **30 dias** da publicação ou da ciência (art. 108)."
      ]},
      { tipo: "tabela", titulo: "Prescrição do direito de requerer (art. 110)", cabecalho: ["Prazo", "Para"], linhas: [["5 anos", "atos de demissão, cassação de aposentadoria ou disponibilidade, ou que afetem interesse patrimonial e créditos das relações de trabalho"], ["120 dias", "os demais casos, salvo outro prazo fixado em lei"]] },
      { tipo: "questao", banca: Q, enunciado: "O prazo para interposição de pedido de reconsideração ou de recurso, na Lei 8.112/1990, é de:", alternativas: ["5 dias", "10 dias", "15 dias", "30 dias", "120 dias"], correta: "D", comentario: "Art. 108. (Não confunda com o prazo de 10 dias da Lei 9.784.)" }
    ]
  });

  /* ================= REGIME DISCIPLINAR ================= */

  A(RD, "Deveres do servidor", {
    resumo: "Os deveres do art. 116, inclusive representar contra ilegalidade.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei([
        "Art. 116. São deveres do servidor:",
        "I – exercer com zelo e dedicação as atribuições do cargo; II – ser leal às instituições a que servir; III – observar as normas legais e regulamentares; IV – cumprir as ordens superiores, exceto quando manifestamente ilegais; V – atender com presteza: a) ao público em geral, prestando as informações requeridas, ressalvadas as protegidas por sigilo; b) à expedição de certidões requeridas para defesa de direito ou esclarecimento de situações de interesse pessoal; c) às requisições para a defesa da Fazenda Pública;",
        "VI – levar as irregularidades de que tiver ciência em razão do cargo ao conhecimento da autoridade superior ou, quando houver suspeita de envolvimento desta, ao conhecimento de outra autoridade competente para apuração; VII – zelar pela economia do material e a conservação do patrimônio público; VIII – guardar sigilo sobre assunto da repartição; IX – manter conduta compatível com a moralidade administrativa; X – ser assíduo e pontual ao serviço; XI – tratar com urbanidade as pessoas; XII – representar contra ilegalidade, omissão ou abuso de poder."
      ], "Lei 8.112/1990, art. 116"),
      { tipo: "atencao", texto: "Cumprir ordens superiores é dever, **exceto** quando **manifestamente ilegais**. A representação contra ilegalidade é encaminhada pela via hierárquica e apreciada pela autoridade superior àquela contra a qual é formulada, assegurando-se ao representando ampla defesa (parágrafo único)." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 8.112/1990, o servidor que receber ordem superior manifestamente ilegal deve:", alternativas: ["cumpri-la, pois a responsabilidade é do chefe", "deixar de cumpri-la", "cumpri-la e depois representar", "pedir exoneração", "cumpri-la apenas parcialmente"], correta: "B", comentario: "Art. 116, IV: o dever de cumprir ordens não alcança as manifestamente ilegais." }
    ]
  });

  A(RD, "Proibições", {
    resumo: "As 19 proibições do art. 117 e a pena correspondente a cada grupo.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Proibições (art. 117) e penas", cabecalho: ["Inciso", "Proibição (resumo)", "Pena"], linhas: [
        ["I", "ausentar-se do serviço sem autorização do chefe", "advertência"],
        ["II", "retirar documento ou objeto da repartição sem anuência", "advertência"],
        ["III", "recusar fé a documentos públicos", "advertência"],
        ["IV", "opor resistência injustificada ao andamento de processo", "advertência"],
        ["V", "promover manifestação de apreço ou desapreço no recinto da repartição", "advertência"],
        ["VI", "cometer a pessoa estranha o desempenho de atribuição sua", "advertência"],
        ["VII", "coagir subordinados a se filiar a associação, sindicato ou partido", "advertência"],
        ["VIII", "manter sob chefia imediata cônjuge, companheiro ou parente até o 2º grau civil", "advertência"],
        ["IX", "valer-se do cargo para obter proveito pessoal ou de outrem", "demissão"],
        ["X", "participar de gerência ou administração de sociedade privada ou exercer comércio (exceto como acionista, cotista ou comanditário)", "demissão"],
        ["XI", "atuar como procurador ou intermediário junto a repartições (exceto benefícios de parentes até 2º grau e cônjuge)", "demissão"],
        ["XII", "receber propina, comissão, presente ou vantagem", "demissão"],
        ["XIII", "aceitar comissão, emprego ou pensão de Estado estrangeiro", "demissão"],
        ["XIV", "praticar usura", "demissão"],
        ["XV", "proceder de forma desidiosa", "demissão"],
        ["XVI", "usar pessoal ou recursos materiais da repartição em serviços particulares", "demissão"],
        ["XVII", "cometer a outro servidor atribuições estranhas ao cargo (salvo emergência e transitoriamente)", "suspensão"],
        ["XVIII", "exercer atividade incompatível com o cargo ou o horário de trabalho", "suspensão"],
        ["XIX", "recusar-se a atualizar dados cadastrais", "advertência"]
      ]},
      { tipo: "dica", texto: "Regra de bolso: **I a VIII e XIX** → advertência; **IX a XVI** → demissão; **XVII e XVIII** → suspensão." },
      { tipo: "questao", banca: Q, enunciado: "Manter sob sua chefia imediata o próprio irmão (parente de 2º grau) é proibição que leva, em regra, à pena de:", alternativas: ["advertência", "suspensão", "demissão", "cassação de aposentadoria", "destituição de função"], correta: "A", comentario: "Art. 117, VIII, punido com advertência (art. 129)." }
    ]
  });

  A(RD, "Acumulação de cargos", {
    resumo: "Regra de proibição, exceções constitucionais e como se resolve a acumulação ilegal.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "Ressalvados os casos previstos na **Constituição** (dois de professor; professor + técnico/científico; dois de saúde), é **vedada** a acumulação remunerada de cargos públicos (art. 118).",
        "",
        "- A proibição alcança cargos, empregos e funções em autarquias, fundações, empresas públicas, sociedades de economia mista e entes de todos os níveis (§ 1º).",
        "- A acumulação lícita exige **compatibilidade de horários** (§ 2º).",
        "- É vedado acumular proventos de aposentadoria com remuneração de cargo, salvo se os cargos fossem acumuláveis na atividade (§ 3º).",
        "- O servidor **não pode exercer mais de um cargo em comissão** (art. 119)."
      ]},
      { tipo: "texto", titulo: "Se houver acumulação ilegal", texto: [
        "A autoridade notifica o servidor para **optar** por um dos cargos em **10 dias** (art. 133). Se não optar, abre-se o **rito sumário** (ver Processo Administrativo Disciplinar). Se ele optar até o último dia de prazo para defesa, configura-se **boa-fé** e o outro cargo é exonerado; se ficar provada a má-fé, a pena é **demissão** de todos os cargos acumulados ilegalmente."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Detectada acumulação ilegal de cargos, o servidor será notificado para apresentar opção no prazo de:", alternativas: ["5 dias", "10 dias", "15 dias", "30 dias", "60 dias"], correta: "B", comentario: "Art. 133." }
    ]
  });

  A(RD, "Responsabilidades civil, penal e administrativa", {
    resumo: "As três esferas são independentes, mas a absolvição criminal pode afastar a administrativa.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "As três responsabilidades", cabecalho: ["Esfera", "Decorre de", "Artigo"], linhas: [
        ["Civil", "ato omissivo ou comissivo, doloso ou culposo, que cause prejuízo ao erário ou a terceiros", "122"],
        ["Penal", "crimes e contravenções imputados ao servidor nessa qualidade", "123"],
        ["Administrativa", "ato omissivo ou comissivo praticado no desempenho do cargo ou função", "124"]
      ]},
      { tipo: "lei", titulo: "Independência e exceção", texto: ["Art. 125. As sanções civis, penais e administrativas poderão cumular-se, sendo independentes entre si.", "Art. 126. A responsabilidade administrativa do servidor será afastada no caso de absolvição criminal que negue a existência do fato ou sua autoria."], referencia: "Lei 8.112/1990, arts. 125 e 126", url: URL },
      { tipo: "atencao", texto: "Absolvição criminal por **falta de provas** **não** afasta a responsabilidade administrativa. Só afasta a que **nega o fato** ou **nega a autoria**." },
      { tipo: "dica", texto: "Art. 126-A: nenhum servidor pode ser responsabilizado por **comunicar** às autoridades competentes a prática de crimes ou improbidade de que teve ciência (proteção ao denunciante)." },
      { tipo: "questao", banca: Q, enunciado: "Servidor absolvido na esfera penal por insuficiência de provas:", alternativas: ["fica automaticamente isento na esfera administrativa", "pode ser punido na esfera administrativa", "deve ser reintegrado", "tem a responsabilidade civil extinta", "não pode mais ser processado"], correta: "B", comentario: "Só a absolvição que nega o fato ou a autoria afasta a responsabilidade administrativa (art. 126)." }
    ]
  });

  A(RD, "Penalidades", {
    resumo: "As seis penas, quando se aplica cada uma, os casos de demissão e os prazos de prescrição.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei(["Art. 127. São penalidades disciplinares: I – advertência; II – suspensão; III – demissão; IV – cassação de aposentadoria ou disponibilidade; V – destituição de cargo em comissão; VI – destituição de função comissionada."], "Lei 8.112/1990, art. 127"),
      { tipo: "tabela", titulo: "Detalhes", cabecalho: ["Pena", "Regra"], linhas: [
        ["Advertência (art. 129)", "por escrito; proibições I a VIII e XIX; descumprir dever, se não justificar pena mais grave; registro cancelado após **3 anos** sem nova infração"],
        ["Suspensão (art. 130)", "até **90 dias**; reincidência em advertência e demais infrações que não tenham pena de demissão; recusar inspeção médica: até **15 dias**; pode virar **multa** de 50% por dia, com o servidor trabalhando; registro cancelado após **5 anos**"],
        ["Demissão (art. 132)", "crime contra a administração; abandono de cargo; inassiduidade habitual; improbidade; incontinência pública e conduta escandalosa; insubordinação grave; ofensa física em serviço; aplicação irregular de dinheiro público; revelação de segredo; lesão aos cofres e dilapidação do patrimônio; corrupção; acumulação ilegal; proibições IX a XVI"]
      ]},
      { tipo: "tabela", titulo: "Abandono × inassiduidade", cabecalho: ["Infração", "Definição"], linhas: [["Abandono de cargo (art. 138)", "ausência **intencional** por mais de **30 dias consecutivos**"], ["Inassiduidade habitual (art. 139)", "falta sem causa justificada por **60 dias interpolados** em **12 meses**"]] },
      { tipo: "tabela", titulo: "Prescrição da ação disciplinar (art. 142)", cabecalho: ["Pena", "Prazo"], linhas: [["Demissão, cassação, destituição de cargo em comissão", "5 anos"], ["Suspensão", "2 anos"], ["Advertência", "180 dias"]], legenda: "Conta da data em que o fato se tornou conhecido; a abertura de sindicância ou PAD interrompe a prescrição." },
      { tipo: "questao", banca: Q, enunciado: "O servidor que falta ao serviço, sem justificativa, por 60 dias intercalados num período de 12 meses comete:", alternativas: ["abandono de cargo", "inassiduidade habitual", "desídia leve", "falta punível com advertência", "nenhuma infração"], correta: "B", comentario: "Art. 139: inassiduidade habitual, punida com demissão." }
    ]
  });

  /* ================= PAD ================= */

  A(PD, "Disposições gerais", {
    resumo: "O dever de apurar, as formas de apuração e a denúncia.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      lei(["Art. 143. A autoridade que tiver ciência de irregularidade no serviço público é obrigada a promover a sua apuração imediata, mediante sindicância ou processo administrativo disciplinar, assegurada ao acusado ampla defesa."], "Lei 8.112/1990, art. 143"),
      { tipo: "texto", texto: [
        "- A apuração é **obrigatória**: a autoridade que se omite pode responder.",
        "- As denúncias serão apuradas desde que contenham a identificação e o endereço do denunciante e sejam formuladas por escrito (art. 144). A jurisprudência, porém, admite que denúncia **anônima** dê início a investigação preliminar, que pode fundamentar a abertura do PAD (Súmula 611 do STJ).",
        "- Se o fato não configurar infração nem ilícito penal, a denúncia é arquivada por falta de objeto."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A autoridade que toma conhecimento de irregularidade no serviço público:", alternativas: ["pode escolher não apurar", "deve apurar imediatamente, por sindicância ou PAD", "só apura se houver denúncia identificada", "deve comunicar ao Ministério Público antes de qualquer providência", "só apura se o servidor for estável"], correta: "B", comentario: "Art. 143: a apuração é obrigatória e imediata." }
    ]
  });

  A(PD, "Afastamento preventivo", {
    resumo: "Afastar o servidor durante o processo para que não atrapalhe a apuração.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      lei(["Art. 147. Como medida cautelar e a fim de que o servidor não venha a influir na apuração da irregularidade, a autoridade instauradora do processo disciplinar poderá determinar o seu afastamento do exercício do cargo, pelo prazo de até 60 (sessenta) dias, sem prejuízo da remuneração.", "Parágrafo único. O afastamento poderá ser prorrogado por igual prazo, findo o qual cessarão os seus efeitos, ainda que não concluído o processo."], "Lei 8.112/1990, art. 147"),
      { tipo: "atencao", texto: "O afastamento preventivo **não é pena**: o servidor continua recebendo. Prazo máximo: 60 + 60 = **120 dias**." },
      { tipo: "questao", banca: Q, enunciado: "O afastamento preventivo do servidor acusado em PAD:", alternativas: ["é pena disciplinar", "suspende a remuneração", "pode durar até 60 dias, prorrogáveis por igual período, sem prejuízo da remuneração", "é obrigatório em todo PAD", "pode durar até a conclusão do processo, sem limite"], correta: "C", comentario: "Art. 147." }
    ]
  });

  A(PD, "Sindicância", {
    resumo: "Procedimento mais simples, com prazo de 30 dias, que pode levar a advertência ou suspensão de até 30 dias.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei(["Art. 145. Da sindicância poderá resultar: I – arquivamento do processo; II – aplicação de penalidade de advertência ou suspensão de até 30 (trinta) dias; III – instauração de processo disciplinar.", "Parágrafo único. O prazo para conclusão da sindicância não excederá 30 (trinta) dias, podendo ser prorrogado por igual período, a critério da autoridade superior."], "Lei 8.112/1990, art. 145"),
      { tipo: "texto", texto: ["Sempre que o ilícito puder levar a **suspensão por mais de 30 dias**, **demissão**, **cassação** de aposentadoria ou disponibilidade, ou **destituição** de cargo em comissão, é **obrigatório** o PAD (art. 146)."] },
      { tipo: "svg", titulo: "Sindicância ou PAD?", codigo: `
<svg viewBox="0 0 560 170" role="img" aria-label="Escala de penas: advertência e suspensão até 30 dias cabem em sindicância; suspensão acima de 30 dias, demissão e cassação exigem PAD">
  <rect class="fd" x="10" y="40" width="250" height="70" rx="10"></rect>
  <text class="tx tx-t" x="135" y="68" text-anchor="middle">Sindicância</text>
  <text class="tx-m" x="135" y="92" text-anchor="middle">advertência · suspensão até 30 dias</text>
  <rect class="fd-d" x="290" y="40" width="260" height="70" rx="10"></rect>
  <text class="tx tx-t" x="420" y="68" text-anchor="middle">PAD obrigatório</text>
  <text class="tx-m" x="420" y="92" text-anchor="middle">suspensão &gt; 30 dias · demissão · cassação · destituição</text>
  <text class="tx-m" x="280" y="150" text-anchor="middle">a sindicância também pode só arquivar ou recomendar a abertura de PAD</text>
</svg>` },
      { tipo: "questao", banca: Q, enunciado: "Da sindicância NÃO pode resultar:", alternativas: ["arquivamento", "advertência", "suspensão de até 30 dias", "instauração de PAD", "demissão"], correta: "E", comentario: "Demissão exige PAD (art. 146)." }
    ]
  });

  A(PD, "PAD: instauração, inquérito e julgamento", {
    resumo: "As três fases, a comissão de três servidores estáveis e os prazos de defesa e julgamento.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "passos", titulo: "Fases (art. 151)", itens: [
        "**Instauração**: publicação do ato (portaria) que constitui a comissão.",
        "**Inquérito administrativo**: **instrução** (provas, depoimentos, interrogatório), **defesa** e **relatório** da comissão.",
        "**Julgamento** pela autoridade competente."
      ]},
      { tipo: "tabela", titulo: "Números do PAD", cabecalho: ["Regra", "Valor"], linhas: [
        ["Comissão (art. 149)", "**3 servidores estáveis**; o presidente ocupa cargo efetivo superior ou de mesmo nível, ou tem escolaridade igual ou superior à do indiciado"],
        ["Prazo para concluir (art. 152)", "**60 dias**, prorrogáveis por igual prazo"],
        ["Defesa escrita do indiciado (art. 161)", "**10 dias**; **20 dias** se houver dois ou mais indiciados (prazo comum)"],
        ["Citação por edital (art. 163)", "defesa em **15 dias** da última publicação"],
        ["Julgamento (art. 167)", "**20 dias** do recebimento do processo"]
      ]},
      { tipo: "texto", texto: [
        "- Se o indiciado não apresentar defesa, é declarado **revel** e a autoridade designa **defensor dativo** (art. 164).",
        "- A autoridade julgadora acata o relatório da comissão, **salvo quando contrário às provas dos autos** (art. 168).",
        "- O julgamento fora do prazo **não** gera nulidade do processo (art. 169, § 1º)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "No PAD, havendo dois indiciados, o prazo para apresentação de defesa escrita será de:", alternativas: ["5 dias", "10 dias", "15 dias", "20 dias, comum", "30 dias"], correta: "D", comentario: "Art. 161, § 2º." }
    ]
  });

  A(PD, "Rito sumário", {
    resumo: "Procedimento rápido para acumulação ilegal, abandono de cargo e inassiduidade habitual.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: ["O **rito sumário** é usado para **acumulação ilegal** de cargos (art. 133), **abandono de cargo** e **inassiduidade habitual** (art. 140). É mais rápido que o PAD comum."] },
      { tipo: "tabela", titulo: "Comparação com o PAD comum", cabecalho: ["", "Rito sumário", "PAD comum"], linhas: [
        ["Comissão", "**2** servidores estáveis", "3 servidores estáveis"],
        ["Prazo de conclusão", "**30 dias**, prorrogáveis por até **15**", "60 dias, prorrogáveis por 60"],
        ["Defesa", "**5 dias**", "10 dias (20 se houver mais de um)"],
        ["Julgamento", "**5 dias**", "20 dias"]
      ]},
      { tipo: "passos", titulo: "Fases", itens: ["**Instauração**: publicação do ato que constitui a comissão e indica autoria e materialidade.", "**Instrução sumária**: indiciação, defesa e relatório.", "**Julgamento**."] },
      { tipo: "questao", banca: Q, enunciado: "No rito sumário da Lei 8.112/1990, a comissão é composta por:", alternativas: ["um servidor", "dois servidores estáveis", "três servidores estáveis", "cinco servidores", "membros externos"], correta: "B", comentario: "Art. 133, I." }
    ]
  });

  A(PD, "Revisão do processo", {
    resumo: "Reabrir o PAD a qualquer tempo por fatos novos, sem agravar a pena.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      lei(["Art. 174. O processo disciplinar poderá ser revisto, a qualquer tempo, a pedido ou de ofício, quando se aduzirem fatos novos ou circunstâncias suscetíveis de justificar a inocência do punido ou a inadequação da penalidade aplicada."], "Lei 8.112/1990, art. 174"),
      { tipo: "texto", texto: [
        "- O ônus da prova cabe ao **requerente** (art. 175).",
        "- A simples alegação de injustiça da penalidade **não** é fundamento para revisão (art. 176).",
        "- Em caso de falecimento, ausência ou desaparecimento do servidor, a revisão pode ser pedida por qualquer pessoa da família (art. 174, § 1º).",
        "- A revisão **não pode agravar** a penalidade (art. 182, parágrafo único).",
        "- A comissão revisora tem **60 dias** para concluir (art. 179)."
      ]},
      { tipo: "atencao", texto: "Revisão ≠ recurso. O recurso questiona a decisão com os mesmos fatos; a revisão exige **fatos novos** e pode ser pedida a **qualquer tempo**." },
      { tipo: "questao", banca: Q, enunciado: "Na revisão do processo disciplinar:", alternativas: ["a penalidade pode ser agravada", "basta alegar que a pena foi injusta", "exigem-se fatos novos ou circunstâncias que justifiquem a inocência ou a inadequação da pena", "o prazo é de 30 dias após a decisão", "só o próprio servidor pode pedir, mesmo após sua morte"], correta: "C", comentario: "Art. 174; art. 176 (alegação de injustiça não basta); art. 182 (não agrava)." }
    ]
  });

  /* ================= SEGURIDADE ================= */

  A(SS, "Benefícios do servidor (visão geral)", {
    resumo: "O Plano de Seguridade Social do servidor: benefícios ao servidor e aos dependentes.",
    incidencia: "média",
    fontes: [LEI],
    conferir: "As regras de aposentadoria e pensão do servidor mudaram com a EC 103/2019 e leis posteriores. O texto da Lei 8.112 sobre aposentadoria está em boa parte superado: estude pela Constituição e pela legislação atual.",
    blocos: [
      { tipo: "tabela", titulo: "Benefícios (art. 185)", cabecalho: ["Para o servidor", "Para os dependentes"], linhas: [
        ["aposentadoria", "pensão vitalícia e temporária"],
        ["auxílio-natalidade", "auxílio-funeral"],
        ["salário-família", "auxílio-reclusão"],
        ["licença para tratamento de saúde", "assistência à saúde"],
        ["licença à gestante, à adotante e licença-paternidade", ""],
        ["licença por acidente em serviço", ""],
        ["assistência à saúde", ""],
        ["garantia de condições individuais e ambientais de trabalho satisfatórias", ""]
      ]},
      { tipo: "tabela", titulo: "Licenças da seguridade", cabecalho: ["Licença", "Regra"], linhas: [
        ["Tratamento da própria saúde (art. 202)", "a pedido ou de ofício, com base em perícia médica, sem prejuízo da remuneração"],
        ["Gestante (art. 207)", "120 dias consecutivos, sem prejuízo da remuneração (prorrogável por 60 dias pelo Programa de Prorrogação da Licença à Gestante)"],
        ["Paternidade (art. 208)", "5 dias consecutivos (prorrogável por 15 dias, conforme regulamento)"],
        ["Acidente em serviço (art. 211)", "com remuneração integral"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "É benefício do Plano de Seguridade Social destinado aos dependentes do servidor:", alternativas: ["auxílio-natalidade", "licença à gestante", "auxílio-funeral", "salário-família", "licença por acidente em serviço"], correta: "C", comentario: "Auxílio-funeral é dos dependentes. Os demais são do servidor." }
    ]
  });

  A(SS, "Assistência à saúde", {
    resumo: "Como a União presta assistência à saúde do servidor e da família.",
    incidencia: "baixa",
    fontes: [LEI],
    blocos: [
      lei(["Art. 230. A assistência à saúde do servidor, ativo ou inativo, e de sua família compreende assistência médica, hospitalar, odontológica, psicológica e farmacêutica, terá como diretriz básica o implemento de ações preventivas voltadas para a promoção da saúde e será prestada pelo Sistema Único de Saúde – SUS, diretamente pelo órgão ou entidade ao qual estiver vinculado o servidor, ou mediante convênio ou contrato, ou ainda na forma de auxílio, mediante ressarcimento parcial do valor despendido pelo servidor, ativo ou inativo, e seus dependentes ou pensionistas com planos ou seguros privados de assistência à saúde, na forma estabelecida em regulamento."], "Lei 8.112/1990, art. 230"),
      { tipo: "texto", texto: ["Na prática, isso inclui o atendimento pelo SUS, planos de autogestão contratados pelo órgão (como a GEAP, em alguns casos) e o **ressarcimento parcial** (\"per capita\") de planos privados pagos pelo servidor."] },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 8.112/1990, a assistência à saúde do servidor:", alternativas: ["é exclusiva do servidor ativo", "não alcança a família", "pode ser prestada mediante ressarcimento parcial de plano privado", "é prestada apenas por hospital próprio do órgão", "dispensa ações preventivas"], correta: "C", comentario: "Art. 230: inclui a forma de auxílio, por ressarcimento parcial, para ativos, inativos, dependentes e pensionistas." }
    ]
  });
})();
