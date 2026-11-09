/* Lei 9.784/1999 · Processo administrativo no âmbito da Administração Pública Federal. */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-a", "lei-9784", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const URL = "https://www.planalto.gov.br/ccivil_03/leis/l9784.htm";
  const LEI = { titulo: "Lei 9.784/1999 · Planalto", url: URL };
  const lei = (texto, referencia, titulo) => ({ tipo: "lei", titulo, texto, referencia, url: URL });
  const FP = "Fundamentos do Processo";
  const AI = "Atos e Instrução";
  const DR = "Desfecho, Recursos e Prazos";

  /* ================= FUNDAMENTOS ================= */

  A(FP, "Disposições gerais e princípios", {
    resumo: "A quem a lei se aplica, os princípios do art. 2º e os critérios de atuação.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "A Lei 9.784 estabelece normas básicas sobre o processo administrativo na **Administração Federal direta e indireta**. Vale também para os **Poderes Legislativo e Judiciário** da União quando exercem **função administrativa** (art. 1º, § 1º).",
        "",
        "Processos com **lei própria** (PAD da Lei 8.112, licitações, processo tributário) seguem a lei específica; a 9.784 se aplica **subsidiariamente** (art. 69)."
      ]},
      lei(["Art. 2º A Administração Pública obedecerá, dentre outros, aos princípios da legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência."], "Lei 9.784/1999, art. 2º"),
      { tipo: "tabela", titulo: "Critérios do parágrafo único do art. 2º (seleção)", cabecalho: ["Critério", "Significa"], linhas: [
        ["Atuação conforme a lei e o Direito", "legalidade em sentido amplo"],
        ["Objetividade no atendimento do interesse público", "vedada a promoção pessoal de agentes"],
        ["Divulgação oficial dos atos", "ressalvadas as hipóteses de sigilo"],
        ["Formas simples", "suficientes para dar certeza, segurança e respeito aos direitos"],
        ["Gratuidade", "proibida a cobrança de despesas processuais, salvo previsão legal"],
        ["Impulsão de ofício", "sem prejuízo da atuação dos interessados"],
        ["Interpretação que melhor garanta o fim público", "**vedada a aplicação retroativa de nova interpretação**"]
      ]},
      { tipo: "dica", texto: "Note que a lei traz **expressamente** princípios que na CF são implícitos: finalidade, motivação, razoabilidade, proporcionalidade, segurança jurídica e interesse público. **Publicidade** e **impessoalidade** não estão na lista do art. 2º (aparecem como critérios)." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 9.784/1999, a nova interpretação de uma norma administrativa:", alternativas: ["aplica-se retroativamente a todos os casos", "não pode ser aplicada retroativamente", "só vale após aprovação do Congresso", "anula automaticamente as decisões anteriores", "depende de consulta pública"], correta: "B", comentario: "Art. 2º, parágrafo único, XIII: vedada a aplicação retroativa de nova interpretação." }
    ]
  });

  A(FP, "Direitos e deveres dos administrados", {
    resumo: "Respeito, vista dos autos, alegações, advogado facultativo; e o dever de agir com lealdade e boa-fé.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Direitos (art. 3º) × deveres (art. 4º)", cabecalho: ["Direitos", "Deveres"], linhas: [
        ["ser tratado com respeito pelas autoridades e servidores", "expor os fatos conforme a verdade"],
        ["ter ciência da tramitação, vista dos autos e obter cópias", "proceder com lealdade, urbanidade e boa-fé"],
        ["formular alegações e apresentar documentos **antes da decisão**", "não agir de modo temerário"],
        ["fazer-se assistir, **facultativamente**, por advogado, salvo quando obrigatório por lei", "prestar as informações solicitadas e colaborar para o esclarecimento dos fatos"]
      ]},
      { tipo: "atencao", texto: "A defesa técnica por advogado é **facultativa** no processo administrativo. A Súmula Vinculante 5 do STF confirma: a falta de defesa técnica por advogado no PAD não ofende a Constituição." },
      { tipo: "questao", banca: Q, enunciado: "No processo administrativo da Lei 9.784/1999, a assistência por advogado é:", alternativas: ["sempre obrigatória", "proibida", "facultativa, salvo quando a lei exigir", "obrigatória apenas em recursos", "obrigatória para pessoas jurídicas"], correta: "C", comentario: "Art. 3º, IV." }
    ]
  });

  A(FP, "Início do processo e interessados", {
    resumo: "Início de ofício ou a pedido, requerimento e quem pode ser interessado.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "O processo pode começar **de ofício** ou **a pedido** do interessado (art. 5º).",
        "",
        "O requerimento inicial deve ser **escrito** (salvo quando se admite a forma oral), com: órgão destinatário, identificação do interessado, domicílio, formulação do pedido com exposição dos fatos e fundamentos, data e assinatura (art. 6º). É **vedada a recusa imotivada** de documentos; o servidor deve orientar o interessado a corrigir falhas."
      ]},
      { tipo: "tabela", titulo: "Interessados (art. 9º)", cabecalho: ["Quem", "Situação"], linhas: [
        ["Pessoas físicas ou jurídicas", "que iniciem o processo como titulares de direitos ou interesses"],
        ["Terceiros", "que, sem ter iniciado, têm direitos ou interesses que possam ser afetados pela decisão"],
        ["Organizações e associações representativas", "quanto a direitos e interesses **coletivos**"],
        ["Pessoas ou associações legalmente constituídas", "quanto a direitos ou interesses **difusos**"]
      ]},
      { tipo: "texto", texto: ["São capazes, para fins de processo administrativo, os **maiores de 18 anos**, ressalvada previsão especial em ato normativo próprio (art. 10)."] },
      { tipo: "questao", banca: Q, enunciado: "Diante de requerimento com falha sanável, o servidor deve:", alternativas: ["recusá-lo de plano", "arquivá-lo", "orientar o interessado quanto ao suprimento das falhas", "cobrar taxa de correção", "encaminhá-lo ao Judiciário"], correta: "C", comentario: "Art. 6º, parágrafo único: é vedada a recusa imotivada; o servidor deve orientar." }
    ]
  });

  A(FP, "Competência e delegação", {
    resumo: "Competência irrenunciável, delegação, o que não se delega e avocação.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei([
        "Art. 11. A competência é irrenunciável e se exerce pelos órgãos administrativos a que foi atribuída como própria, salvo os casos de delegação e avocação legalmente admitidos.",
        "Art. 12. Um órgão administrativo e seu titular poderão, se não houver impedimento legal, delegar parte da sua competência a outros órgãos ou titulares, ainda que estes não lhe sejam hierarquicamente subordinados, quando for conveniente, em razão de circunstâncias de índole técnica, social, econômica, jurídica ou territorial.",
        "Art. 13. Não podem ser objeto de delegação: I – a edição de atos de caráter normativo; II – a decisão de recursos administrativos; III – as matérias de competência exclusiva do órgão ou autoridade.",
        "Art. 15. Será permitida, em caráter excepcional e por motivos relevantes devidamente justificados, a avocação temporária de competência atribuída a órgão hierarquicamente inferior."
      ], "Lei 9.784/1999, arts. 11 a 15"),
      { tipo: "texto", texto: [
        "- A delegação delega **parte** da competência, nunca toda.",
        "- O ato de delegação e sua revogação devem ser **publicados**; a delegação é **revogável a qualquer tempo** (art. 14).",
        "- As decisões tomadas por delegação consideram-se **editadas pelo delegado** (art. 14, § 3º): é contra ele que se recorre ou se impetra mandado de segurança.",
        "- Sem competência legal específica, o processo começa perante a autoridade de **menor grau hierárquico** para decidir (art. 17)."
      ]},
      { tipo: "dica", texto: "Não se delega: **CE-NO-RA** — competência **E**xclusiva, atos **NO**rmativos, decisão de **R**ecursos." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 9.784/1999, a decisão adotada por delegação considera-se editada:", alternativas: ["pelo delegante", "pelo delegado", "pelos dois, em conjunto", "pela autoridade máxima do órgão", "pelo órgão central do sistema"], correta: "B", comentario: "Art. 14, § 3º." }
    ]
  });

  A(FP, "Impedimento e suspeição", {
    resumo: "Quando o servidor não pode atuar no processo: impedimento (objetivo) e suspeição (subjetivo).",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Comparação", cabecalho: ["", "Impedimento (art. 18)", "Suspeição (art. 20)"], linhas: [
        ["Natureza", "objetiva (presunção absoluta)", "subjetiva (presunção relativa)"],
        ["Hipóteses", "tenha interesse direto ou indireto na matéria; tenha participado ou vá participar como perito, testemunha ou representante, ou se isso ocorre com cônjuge, companheiro ou parente até o 3º grau; esteja litigando com o interessado ou com seu cônjuge ou companheiro", "amizade íntima ou inimizade notória com algum dos interessados ou com seus cônjuges, companheiros, parentes e afins até o 3º grau"],
        ["Dever do servidor", "**comunicar** o impedimento e abster-se; a omissão é **falta grave** (art. 19)", "pode ser arguida; o indeferimento admite recurso **sem efeito suspensivo** (art. 21)"]
      ]},
      { tipo: "dica", texto: "Suspeição = **sentimento** (amizade íntima ou inimizade notória). Impedimento = **situação objetiva** (interesse, participação, litígio)." },
      { tipo: "questao", banca: Q, enunciado: "O servidor que é inimigo notório de um dos interessados no processo está:", alternativas: ["impedido", "suspeito", "livre para atuar", "obrigado a atuar", "afastado do cargo"], correta: "B", comentario: "Inimizade notória é hipótese de suspeição (art. 20)." }
    ]
  });

  /* ================= ATOS E INSTRUÇÃO ================= */

  A(AI, "Forma, tempo e lugar dos atos", {
    resumo: "Forma simples, dias úteis, prazo geral de 5 dias e reconhecimento de firma só na dúvida.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "- **Forma (art. 22)**: os atos não dependem de forma determinada, salvo exigência legal. Devem ser escritos, em português, com data, local e assinatura da autoridade. O **reconhecimento de firma** só é exigido quando houver **dúvida** de autenticidade; a autenticação de cópias pode ser feita pelo próprio órgão.",
        "- **Tempo (art. 23)**: em **dias úteis**, no horário normal de funcionamento (podem ser concluídos depois do horário se o adiamento prejudicar o curso do ato).",
        "- **Prazo geral (art. 24)**: inexistindo disposição específica, os atos do órgão e dos administrados são praticados em **5 dias**, salvo força maior, prorrogáveis **até o dobro** mediante justificação.",
        "- **Lugar (art. 25)**: preferencialmente na sede do órgão, cientificado o interessado se for outro o local."
      ]},
      { tipo: "flashcards", cartas: [
        { frente: "Prazo geral para prática de atos na Lei 9.784", verso: "5 dias, prorrogável até o dobro (10) com justificativa." },
        { frente: "Reconhecimento de firma é exigido sempre?", verso: "Não. Só quando houver dúvida de autenticidade." }
      ]},
      { tipo: "questao", banca: Q, enunciado: "Não havendo prazo específico, os atos do processo administrativo devem ser praticados em:", alternativas: ["3 dias", "5 dias, prorrogáveis até o dobro com justificação", "10 dias", "15 dias", "30 dias"], correta: "B", comentario: "Art. 24." }
    ]
  });

  A(AI, "Comunicação dos atos", {
    resumo: "Intimação com 3 dias úteis de antecedência e o que acontece se o interessado não comparecer.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "A **intimação** dá ciência de decisão ou convoca para diligência (art. 26). Deve conter: identificação do intimado e do órgão, finalidade, data, hora e local de comparecimento, se deve ir pessoalmente ou pode se fazer representar, informação de que o processo continua mesmo sem o comparecimento, e a indicação dos fatos e fundamentos legais.",
        "",
        "- Antecedência mínima de **3 dias úteis** quanto à data de comparecimento (§ 2º).",
        "- Meios: ciência no processo, via postal com aviso de recebimento, telegrama ou outro meio que assegure a certeza da ciência (§ 3º).",
        "- Interessados indeterminados, desconhecidos ou com domicílio indefinido: **publicação oficial** (§ 4º).",
        "- O comparecimento do administrado supre a falta ou irregularidade da intimação (§ 5º)."
      ]},
      lei(["Art. 27. O desatendimento da intimação não importa o reconhecimento da verdade dos fatos, nem a renúncia a direito pelo administrado."], "Lei 9.784/1999, art. 27"),
      { tipo: "atencao", texto: "No processo administrativo **não há revelia** com confissão ficta: faltar à intimação não faz o interessado \"confessar\" os fatos." },
      { tipo: "questao", banca: Q, enunciado: "O interessado que não atende à intimação no processo administrativo:", alternativas: ["tem os fatos considerados verdadeiros", "renuncia ao direito", "não sofre presunção de verdade dos fatos nem renúncia a direito", "tem o processo extinto", "é multado"], correta: "C", comentario: "Art. 27." }
    ]
  });

  A(AI, "Instrução", {
    resumo: "Provas, consulta e audiência públicas, pareceres e alegações finais.",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Regras da instrução", cabecalho: ["Regra", "Artigo"], linhas: [
        ["A instrução se faz de ofício, sem prejuízo do direito dos interessados de propor provas", "29"],
        ["São **inadmissíveis** as provas obtidas por meios ilícitos", "30"],
        ["Matéria de interesse geral: pode haver **consulta pública** antes da decisão", "31"],
        ["Antes da decisão, pode haver **audiência pública** para debates", "32"],
        ["Cabe ao interessado provar os fatos que alegou", "36"],
        ["Documentos que estão na própria Administração: o órgão os obtém de ofício", "37"],
        ["Parecer obrigatório: emitido em até **15 dias**, salvo norma especial ou necessidade comprovada de mais prazo", "42"],
        ["Encerrada a instrução, o interessado tem **10 dias** para se manifestar (alegações finais)", "44"]
      ]},
      { tipo: "tabela", titulo: "Parecer não emitido no prazo (art. 42)", cabecalho: ["Parecer", "Consequência"], linhas: [["Obrigatório e **vinculante**", "o processo **não** terá seguimento até a apresentação; responsabiliza-se quem deu causa ao atraso"], ["Obrigatório e **não vinculante**", "o processo **pode** prosseguir e ser decidido com dispensa do parecer"]] },
      { tipo: "questao", banca: Q, enunciado: "Encerrada a instrução, o interessado terá direito de manifestar-se no prazo máximo de:", alternativas: ["3 dias", "5 dias", "10 dias", "15 dias", "30 dias"], correta: "C", comentario: "Art. 44." }
    ]
  });

  A(AI, "Dever de decidir e motivação", {
    resumo: "A Administração deve decidir em até 30 dias e motivar os atos que restringem direitos.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei(["Art. 48. A Administração tem o dever de explicitamente emitir decisão nos processos administrativos e sobre solicitações ou reclamações, em matéria de sua competência.", "Art. 49. Concluída a instrução de processo administrativo, a Administração tem o prazo de até trinta dias para decidir, salvo prorrogação por igual período expressamente motivada."], "Lei 9.784/1999, arts. 48 e 49"),
      { tipo: "tabela", titulo: "Atos que devem ser motivados (art. 50)", cabecalho: ["Atos que…"], linhas: [
        ["neguem, limitem ou afetem direitos ou interesses"],
        ["imponham ou agravem deveres, encargos ou sanções"],
        ["decidam processos de concurso ou seleção pública"],
        ["dispensem ou declarem a inexigibilidade de licitação"],
        ["decidam recursos administrativos"],
        ["decorram de reexame de ofício"],
        ["deixem de aplicar jurisprudência firmada ou discrepem de pareceres, laudos, propostas e relatórios oficiais"],
        ["importem anulação, revogação, suspensão ou convalidação de ato administrativo"]
      ]},
      { tipo: "texto", texto: ["A motivação deve ser **explícita, clara e congruente**, e pode consistir em declaração de concordância com pareceres anteriores, que passam a integrar o ato (**motivação aliunde**, art. 50, § 1º)."] },
      { tipo: "questao", banca: Q, enunciado: "Concluída a instrução, a Administração deve decidir em até:", alternativas: ["10 dias", "15 dias", "30 dias, prorrogáveis por igual período, motivadamente", "60 dias", "90 dias"], correta: "C", comentario: "Art. 49." }
    ]
  });

  /* ================= DESFECHO, RECURSOS E PRAZOS ================= */

  A(DR, "Desistência e extinção do processo", {
    resumo: "O interessado pode desistir, mas a Administração pode seguir se houver interesse público.",
    incidencia: "baixa",
    fontes: [LEI],
    blocos: [
      lei([
        "Art. 51. O interessado poderá, mediante manifestação escrita, desistir total ou parcialmente do pedido formulado ou, ainda, renunciar a direitos disponíveis.",
        "§ 1º Havendo vários interessados, a desistência ou renúncia atinge somente quem a tenha formulado.",
        "§ 2º A desistência ou renúncia do interessado, conforme o caso, não prejudica o prosseguimento do processo, se a Administração considerar que o interesse público assim o exige.",
        "Art. 52. O órgão competente poderá declarar extinto o processo quando exaurida sua finalidade ou o objeto da decisão se tornar impossível, inútil ou prejudicado por fato superveniente."
      ], "Lei 9.784/1999, arts. 51 e 52"),
      { tipo: "questao", banca: Q, enunciado: "Se um interessado desiste do processo administrativo que iniciou:", alternativas: ["o processo é sempre arquivado", "a desistência alcança todos os interessados", "a Administração pode prosseguir se o interesse público exigir", "o interessado deve pagar multa", "a desistência pode ser oral, sem registro"], correta: "C", comentario: "Art. 51, § 2º. A desistência é por escrito e só atinge quem a formulou." }
    ]
  });

  A(DR, "Anulação, revogação e convalidação", {
    resumo: "Dever de anular, faculdade de revogar, decadência de 5 anos e convalidação de vícios sanáveis.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei([
        "Art. 53. A Administração deve anular seus próprios atos, quando eivados de vício de legalidade, e pode revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos.",
        "Art. 54. O direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em cinco anos, contados da data em que foram praticados, salvo comprovada má-fé.",
        "§ 1º No caso de efeitos patrimoniais contínuos, o prazo de decadência contar-se-á da percepção do primeiro pagamento.",
        "Art. 55. Em decisão na qual se evidencie não acarretarem lesão ao interesse público nem prejuízo a terceiros, os atos que apresentarem defeitos sanáveis poderão ser convalidados pela própria Administração."
      ], "Lei 9.784/1999, arts. 53 a 55"),
      { tipo: "dica", texto: "Verbos importam: a Administração **deve** anular (dever) e **pode** revogar (faculdade). E a decadência de 5 anos só protege atos **favoráveis** ao destinatário, e **não** vale se houve **má-fé**." },
      { tipo: "python", titulo: "Contando o prazo de decadência", codigo: `
from datetime import date

ato = date(2021, 3, 15)
limite = ato.replace(year=ato.year + 5)
for hoje in (date(2025, 12, 1), date(2026, 4, 1)):
    situacao = "ainda pode anular" if hoje <= limite else "decaiu (salvo má-fé)"
    print(hoje.strftime("%d/%m/%Y"), "->", situacao)
`, saida: `
01/12/2025 -> ainda pode anular
01/04/2026 -> decaiu (salvo má-fé)
` },
      { tipo: "questao", banca: Q, enunciado: "Uma vantagem paga indevidamente a um servidor de boa-fé desde 2018 só poderia ser anulada pela Administração, segundo a Lei 9.784/1999, até:", alternativas: ["1 ano depois do primeiro pagamento", "5 anos contados do primeiro pagamento", "10 anos", "a qualquer tempo", "2 anos depois do último pagamento"], correta: "B", comentario: "Art. 54, § 1º: efeitos patrimoniais contínuos — decadência de 5 anos contada da percepção do primeiro pagamento, salvo má-fé." }
    ]
  });

  A(DR, "Recurso administrativo e revisão", {
    resumo: "Prazo de 10 dias, até 3 instâncias, efeito devolutivo, reformatio in pejus e revisão.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      { tipo: "tabela", titulo: "Regras do recurso", cabecalho: ["Regra", "Artigo"], linhas: [
        ["Cabe recurso por razões de **legalidade e de mérito**", "56"],
        ["Dirigido a quem decidiu; se não reconsiderar em **5 dias**, encaminha à autoridade superior", "56, § 1º"],
        ["Independe de **caução**, salvo exigência legal (e a SV 21 do STF proíbe exigir depósito prévio)", "56, § 2º"],
        ["Tramita por no máximo **3 instâncias** administrativas", "57"],
        ["Prazo para recorrer: **10 dias** da ciência ou divulgação oficial", "59"],
        ["Decisão do recurso: **30 dias**, prorrogáveis por igual período", "59, §§ 1º e 2º"],
        ["Em regra, **não tem efeito suspensivo**; a autoridade pode concedê-lo se houver justo receio de prejuízo", "61"],
        ["O órgão pode **agravar** a situação do recorrente (reformatio in pejus), desde que ele seja cientificado para alegar antes da decisão", "64"]
      ]},
      { tipo: "tabela", titulo: "O recurso não será conhecido quando interposto (art. 63)", cabecalho: ["Hipótese"], linhas: [["fora do prazo"], ["perante órgão incompetente (indica-se ao recorrente o competente e devolve-se o prazo)"], ["por quem não seja legitimado"], ["após exaurida a esfera administrativa"]] },
      { tipo: "texto", titulo: "Revisão (art. 65)", texto: ["Processos que resultem em **sanções** podem ser revistos **a qualquer tempo**, a pedido ou de ofício, quando surgirem fatos novos ou circunstâncias relevantes que justifiquem a inadequação da sanção. Na revisão **não** pode haver agravamento."] },
      { tipo: "atencao", texto: "**Recurso** pode piorar a situação (art. 64); **revisão** não pode (art. 65, parágrafo único). Pegadinha clássica." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 9.784/1999, o recurso administrativo:", alternativas: ["tem prazo de 30 dias", "tramita por até 3 instâncias administrativas", "sempre tem efeito suspensivo", "exige depósito prévio", "nunca pode agravar a situação do recorrente"], correta: "B", comentario: "Art. 57. Prazo de 10 dias; em regra sem efeito suspensivo; sem caução; pode haver reformatio in pejus." }
    ]
  });

  A(DR, "Contagem de prazos", {
    resumo: "Exclui o dia do começo, inclui o do vencimento e prorroga para o primeiro dia útil.",
    incidencia: "alta",
    fontes: [LEI],
    blocos: [
      lei([
        "Art. 66. Os prazos começam a correr a partir da data da cientificação oficial, excluindo-se da contagem o dia do começo e incluindo-se o do vencimento.",
        "§ 1º Considera-se prorrogado o prazo até o primeiro dia útil seguinte se o vencimento cair em dia em que não houver expediente ou este for encerrado antes da hora normal.",
        "§ 2º Os prazos expressos em dias contam-se de modo contínuo.",
        "§ 3º Os prazos fixados em meses ou anos contam-se de data a data. Se no mês do vencimento não houver o dia equivalente àquele do início do prazo, tem-se como termo o último dia do mês.",
        "Art. 67. Salvo motivo de força maior devidamente comprovado, os prazos processuais não se suspendem."
      ], "Lei 9.784/1999, arts. 66 e 67"),
      { tipo: "atencao", texto: "Na Lei 9.784, os prazos em dias são **contínuos** (contam sábados, domingos e feriados no meio do caminho). Só o **vencimento** é empurrado para o próximo dia útil. É diferente do processo civil, que conta só dias úteis." },
      { tipo: "python", titulo: "Calculando o último dia do recurso", texto: "Ciência na sexta-feira, 6 de novembro de 2026; prazo de 10 dias.", codigo: `
from datetime import date, timedelta

def vencimento(ciencia, dias, feriados=()):
    fim = ciencia + timedelta(days=dias)          # exclui o dia do começo, conta contínuo
    while fim.weekday() >= 5 or fim in feriados:  # cai em sábado, domingo ou feriado?
        fim += timedelta(days=1)                  # prorroga para o próximo dia útil
    return fim

dias = ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"]
v = vencimento(date(2026, 11, 6), 10)
print("Vence em:", v.strftime("%d/%m/%Y"), f"({dias[v.weekday()]})")
v2 = vencimento(date(2026, 11, 5), 10, feriados={date(2026, 11, 15)})
print("Com ciência na quinta:", v2.strftime("%d/%m/%Y"), f"({dias[v2.weekday()]})")
`, saida: `
Vence em: 16/11/2026 (seg)
Com ciência na quinta: 16/11/2026 (seg)
` , legenda: "No 2º caso, o prazo terminaria no domingo, 15 de novembro (também feriado da Proclamação da República), e passa para a segunda-feira." },
      { tipo: "questao", banca: Q, enunciado: "Ciência oficial de uma decisão em uma quarta-feira; prazo de recurso de 10 dias, sem feriados no período. O último dia do prazo será:", alternativas: ["a sexta-feira da semana seguinte", "o sábado da semana seguinte", "a segunda-feira seguinte ao sábado em que terminaria", "a quarta-feira da semana seguinte", "a terça-feira da semana seguinte"], correta: "C", comentario: "Quarta + 10 dias corridos = sábado. Como não há expediente, prorroga-se para o primeiro dia útil: segunda-feira." }
    ]
  });

  A(DR, "Prioridade na tramitação", {
    resumo: "Quem tem prioridade nos processos administrativos (art. 69-A).",
    incidencia: "média",
    fontes: [LEI],
    blocos: [
      { tipo: "texto", texto: [
        "Têm **prioridade** na tramitação, em qualquer órgão ou instância, os processos em que figure como parte ou interessado (art. 69-A, incluído pela Lei 12.008/2009):",
        "- pessoa com idade **igual ou superior a 60 anos**;",
        "- pessoa portadora de **deficiência**, física ou mental;",
        "- pessoa portadora de **doença grave**: tuberculose ativa, esclerose múltipla, neoplasia maligna, hanseníase, paralisia irreversível e incapacitante, cardiopatia grave, doença de Parkinson, espondiloartrose anquilosante, nefropatia grave, hepatopatia grave, estados avançados da doença de Paget, contaminação por radiação, síndrome da imunodeficiência adquirida (AIDS) ou outra doença grave, com base em conclusão da medicina especializada, mesmo que a doença tenha começado depois do processo.",
        "",
        "O interessado **requer** a prioridade, provando sua condição, à autoridade competente, que determina as providências."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Tem prioridade na tramitação do processo administrativo, segundo a Lei 9.784/1999, o interessado:", alternativas: ["com 55 anos", "com 60 anos ou mais", "que é servidor público", "que contratou advogado", "que pagou taxa de urgência"], correta: "B", comentario: "Art. 69-A, I." }
    ]
  });
})();
