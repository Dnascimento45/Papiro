/* Bloco C · Legislação de Curitiba, do Paraná e da Região Metropolitana.
   Os textos locais não foram conferidos artigo por artigo: cada assunto ensina o que a
   Constituição Federal exige de todos os entes (isso não muda) e traz um roteiro do que
   procurar na lei local, sempre marcado como "conferir". */
(() => {
  const CTB = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-c", "curitiba", materia, assunto), def);
  const PR = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-c", "parana", materia, assunto), def);
  const RM = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-c", "regiao-metropolitana", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const CF_URL = "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm";
  const F = {
    cf: { titulo: "Constituição Federal (arts. 18 a 31, 37 a 41 e 156) · Planalto", url: CF_URL },
    cmc: { titulo: "Câmara Municipal de Curitiba · legislação e Lei Orgânica", url: "https://www.cmc.pr.gov.br/" },
    leisCtba: { titulo: "Leis municipais de Curitiba (consulta)", url: "https://leismunicipais.com.br/prefeitura/pr/curitiba" },
    alep: { titulo: "Assembleia Legislativa do Paraná · Constituição Estadual e leis", url: "https://www.assembleia.pr.leg.br/" },
    legisPR: { titulo: "Legislação do Estado do Paraná (Casa Civil)", url: "https://www.legislacao.pr.gov.br/" },
    l8112: { titulo: "Lei 8.112/1990, para comparação", url: "https://www.planalto.gov.br/ccivil_03/leis/l8112cons.htm" },
    dl201: { titulo: "Decreto-Lei 201/1967 (responsabilidade de prefeitos e vereadores)", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0201.htm" },
  };
  const LOM_CTBA = "Texto da Lei Orgânica de Curitiba não conferido aqui. Leia o capítulo correspondente na versão atualizada (site da Câmara Municipal) e anote os números de artigos.";
  const EST_CTBA = "O Estatuto dos servidores de Curitiba é tradicionalmente a Lei Municipal 1.656/1958, com muitas alterações. Confirme no edital qual lei é cobrada e leia a versão consolidada.";
  const CE_PR = "Texto da Constituição do Estado do Paraná (1989) não conferido aqui. Leia o capítulo correspondente na versão atualizada no site da Assembleia Legislativa.";
  const EST_PR = "O Estatuto dos Funcionários Civis do Paraná é a Lei Estadual 6.174/1970, com muitas alterações. Confirme no edital e leia a versão consolidada.";
  const lei = (texto, referencia, titulo) => ({ tipo: "lei", titulo, texto, referencia, url: CF_URL });
  const roteiro = (itens) => ({ tipo: "passos", titulo: "Roteiro: o que procurar na lei local", itens });
  const comparar = (linhas) => ({ tipo: "tabela", titulo: "Compare com a Lei 8.112/1990 (federal)", cabecalho: ["Tema", "Na Lei 8.112", "Na lei local (preencha)"], linhas, legenda: "A coluna da direita é para você completar ao ler o estatuto local." });

  /* ================= CURITIBA · LEI ORGÂNICA ================= */
  const LOC = "Lei Orgânica do Município de Curitiba";

  CTB(LOC, "Organização do Município e competências", {
    resumo: "O Município como ente autônomo, a Lei Orgânica e as competências de interesse local.",
    incidencia: "alta",
    conferir: LOM_CTBA,
    fontes: [F.cf, F.cmc],
    blocos: [
      lei(["Art. 29. O Município reger-se-á por lei orgânica, votada em dois turnos, com o interstício mínimo de dez dias, e aprovada por dois terços dos membros da Câmara Municipal, que a promulgará, atendidos os princípios estabelecidos nesta Constituição, na Constituição do respectivo Estado e os seguintes preceitos: […]"], "CF/88, art. 29, caput"),
      { tipo: "texto", texto: [
        "A **Lei Orgânica** é a \"constituição\" do Município: organiza os Poderes, define competências e estabelece regras da administração. Ela deve respeitar a Constituição Federal e a do Estado.",
        "",
        "**Competências municipais (CF, art. 30)**: legislar sobre assuntos de **interesse local**; suplementar a legislação federal e estadual no que couber; instituir e arrecadar seus **tributos**; criar distritos; organizar os **serviços públicos de interesse local**, inclusive o **transporte coletivo**; manter **educação infantil e ensino fundamental** e **atendimento à saúde** com cooperação da União e do Estado; promover o **ordenamento territorial** (uso do solo, parcelamento); proteger o patrimônio histórico-cultural local."
      ]},
      roteiro(["Como a LOM descreve o Município (símbolos, sede, divisão em distritos ou regionais).", "A lista de competências privativas e comuns do Município.", "As vedações ao Município.", "Como a LOM pode ser emendada (quórum e turnos)."]),
      { tipo: "questao", banca: Q, enunciado: "Segundo a Constituição Federal, a Lei Orgânica do Município é aprovada por:", alternativas: ["maioria simples da Câmara, em turno único", "dois terços dos membros da Câmara, em dois turnos com intervalo mínimo de dez dias", "maioria absoluta da Assembleia Legislativa", "decreto do Prefeito", "plebiscito obrigatório"], correta: "B", comentario: "Art. 29, caput, da CF." }
    ]
  });

  CTB(LOC, "Poder Legislativo: Câmara Municipal", {
    resumo: "Composição da Câmara, vereadores, subsídios, inviolabilidade e limites de gastos.",
    incidencia: "alta",
    conferir: LOM_CTBA + " O número de vereadores de Curitiba deve ser confirmado na LOM e na Justiça Eleitoral.",
    fontes: [F.cf, F.cmc],
    blocos: [
      { tipo: "texto", texto: [
        "O Poder Legislativo municipal é exercido pela **Câmara Municipal**, formada por **vereadores** eleitos para mandato de **4 anos**.",
        "",
        "Regras da CF (art. 29) que valem para todas as Câmaras:",
        "- O **número de vereadores** é proporcional à população, com limites máximos por faixa (art. 29, IV). Curitiba, com cerca de 1,8 milhão de habitantes, está na faixa de mais de 1.750.000 até 2.000.000, que permite **até 41** vereadores (a LOM fixa o número dentro do limite).",
        "- **Subsídio** dos vereadores fixado pela Câmara numa legislatura para a seguinte, com tetos em percentual do subsídio dos deputados estaduais (art. 29, VI).",
        "- **Inviolabilidade** por opiniões, palavras e votos no exercício do mandato e na circunscrição do Município (art. 29, VIII).",
        "- **Limites de despesa** da Câmara (art. 29-A), inclusive no máximo **70%** da receita da Câmara com folha de pagamento."
      ]},
      roteiro(["Número de vereadores fixado na LOM.", "Competências exclusivas da Câmara (que não precisam de sanção do Prefeito).", "Mesa Diretora: composição e mandato.", "Sessões legislativas: períodos e recesso.", "Casos de perda e extinção de mandato do vereador."]),
      { tipo: "questao", banca: Q, enunciado: "Segundo a Constituição Federal, o vereador é inviolável por suas opiniões, palavras e votos:", alternativas: ["em qualquer lugar do país", "no exercício do mandato e na circunscrição do Município", "apenas dentro do plenário", "somente durante as sessões ordinárias", "apenas se autorizado pela Mesa"], correta: "B", comentario: "Art. 29, VIII, da CF." }
    ]
  });

  CTB(LOC, "Processo legislativo municipal", {
    resumo: "Espécies normativas do Município, iniciativa, sanção, veto e derrubada do veto.",
    incidencia: "alta",
    conferir: LOM_CTBA,
    fontes: [F.cf, F.cmc],
    blocos: [
      { tipo: "texto", texto: [
        "Pelo **princípio da simetria**, o processo legislativo municipal segue o modelo federal (arts. 59 a 69 da CF), adaptado.",
        "",
        "**Espécies** que costumam existir: emendas à Lei Orgânica, leis complementares, leis ordinárias, decretos legislativos e resoluções. (Leis delegadas e medidas provisórias só existem se a LOM previr, e muitas não preveem.)"
      ]},
      { tipo: "tabela", titulo: "Pontos do processo", cabecalho: ["Etapa", "Regra geral (por simetria com a CF)"], linhas: [
        ["Iniciativa", "vereadores, Mesa, comissões, Prefeito e cidadãos (iniciativa popular: **5% do eleitorado** do Município, CF art. 29, XIII)"],
        ["Iniciativa privativa do Prefeito", "criação de cargos e aumento de remuneração no Executivo, regime jurídico dos servidores, estrutura da administração (simetria com o art. 61, § 1º)"],
        ["Sanção ou veto", "o Prefeito tem **15 dias úteis**; o silêncio é sanção tácita"],
        ["Derrubada do veto", "**maioria absoluta** dos vereadores"]
      ]},
      roteiro(["Quais espécies normativas a LOM de Curitiba prevê.", "Quóruns: maioria simples, absoluta e 2/3 (para que matérias?).", "Iniciativa popular: percentual e forma.", "Prazos de sanção, veto e apreciação do veto pela Câmara."]),
      { tipo: "questao", banca: Q, enunciado: "Pela Constituição Federal, a iniciativa popular de projetos de lei de interesse do Município exige a manifestação de, pelo menos:", alternativas: ["1% do eleitorado", "3% do eleitorado", "5% do eleitorado", "10% do eleitorado", "metade do eleitorado"], correta: "C", comentario: "Art. 29, XIII, da CF." }
    ]
  });

  CTB(LOC, "Poder Executivo: Prefeito e Vice-Prefeito", {
    resumo: "Eleição, mandato, atribuições e responsabilidade do Prefeito.",
    incidencia: "alta",
    conferir: LOM_CTBA,
    fontes: [F.cf, F.dl201],
    blocos: [
      { tipo: "texto", texto: [
        "- O Executivo municipal é exercido pelo **Prefeito**, auxiliado pelos **Secretários Municipais**.",
        "- **Eleição** do Prefeito e do Vice: mandato de 4 anos; em Municípios com **mais de 200 mil eleitores** (como Curitiba), aplica-se a regra dos **dois turnos** (CF, art. 29, II).",
        "- **Idade mínima**: 21 anos.",
        "- **Julgamento**: crimes comuns do Prefeito são julgados pelo **Tribunal de Justiça** (CF, art. 29, X). Infrações político-administrativas são julgadas pela **Câmara** (Decreto-Lei 201/1967)."
      ]},
      roteiro(["Atribuições privativas do Prefeito na LOM.", "Substituição e sucessão (Vice, Presidente da Câmara).", "Licenças e afastamentos do Prefeito que exigem autorização da Câmara.", "Infrações político-administrativas e procedimento de cassação."]),
      { tipo: "questao", banca: Q, enunciado: "O Prefeito que comete crime comum é julgado pelo:", alternativas: ["juiz de primeira instância da comarca", "Tribunal de Justiça do Estado", "Superior Tribunal de Justiça", "Supremo Tribunal Federal", "Tribunal de Contas"], correta: "B", comentario: "CF, art. 29, X." }
    ]
  });

  CTB(LOC, "Administração Pública municipal", {
    resumo: "Princípios do art. 37 aplicados ao Município, administração direta e indireta de Curitiba.",
    incidencia: "média",
    conferir: LOM_CTBA,
    fontes: [F.cf],
    blocos: [
      { tipo: "texto", texto: [
        "Os princípios do art. 37 da CF (**legalidade, impessoalidade, moralidade, publicidade e eficiência**) valem para a administração direta e indireta do Município. A LOM costuma repeti-los e acrescentar outros.",
        "",
        "A administração municipal tem:",
        "- **Direta**: Prefeitura e Secretarias.",
        "- **Indireta**: autarquias, fundações e empresas municipais (em Curitiba, por exemplo, órgãos como o IPPUC e a URBS fazem parte dessa estrutura).",
        "",
        "Também se aplicam: concurso público, licitação (Lei 14.133), Lei de Acesso à Informação, LGPD e Lei de Responsabilidade Fiscal."
      ]},
      roteiro(["Princípios da administração listados na LOM.", "Regras sobre publicidade dos atos municipais (diário oficial).", "Como a LOM trata das entidades da administração indireta.", "Regras sobre bens municipais e sua alienação."]),
      { tipo: "questao", banca: Q, enunciado: "Os princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência aplicam-se:", alternativas: ["apenas à União", "apenas ao Executivo", "à administração direta e indireta de todos os entes, inclusive Municípios", "apenas às autarquias", "só aos servidores efetivos"], correta: "C", comentario: "Art. 37, caput, da CF." }
    ]
  });

  CTB(LOC, "Servidores municipais na Lei Orgânica", {
    resumo: "Regras constitucionais que valem para os servidores de Curitiba e o que a LOM acrescenta.",
    incidencia: "média",
    conferir: LOM_CTBA,
    fontes: [F.cf],
    blocos: [
      { tipo: "tabela", titulo: "Regras da CF que valem para o servidor municipal", cabecalho: ["Tema", "Regra"], linhas: [
        ["Ingresso", "concurso público de provas ou de provas e títulos (art. 37, II)"],
        ["Validade do concurso", "até 2 anos, prorrogável uma vez por igual período (art. 37, III)"],
        ["Estabilidade", "após **3 anos** de efetivo exercício e avaliação especial de desempenho (art. 41)"],
        ["Acumulação", "proibida, salvo professor, professor + técnico/científico e dois de saúde (art. 37, XVI)"],
        ["Teto", "no Município, o subsídio do Prefeito (art. 37, XI)"],
        ["Greve", "nos termos de lei específica (art. 37, VII)"]
      ]},
      roteiro(["Capítulo da LOM sobre servidores: direitos garantidos além da CF.", "Regras de previdência dos servidores municipais (regime próprio).", "Normas sobre cargos em comissão e funções de confiança."]),
      { tipo: "questao", banca: Q, enunciado: "No Município, o teto remuneratório dos servidores é o subsídio:", alternativas: ["do Governador", "do Prefeito", "dos Ministros do STF", "dos vereadores", "do Presidente da Câmara"], correta: "B", comentario: "Art. 37, XI, da CF." }
    ]
  });

  CTB(LOC, "Tributação, finanças e orçamento municipal", {
    resumo: "Tributos do Município (IPTU, ISS, ITBI), orçamento e fiscalização pela Câmara e pelo TCE.",
    incidencia: "média",
    conferir: LOM_CTBA,
    fontes: [F.cf],
    blocos: [
      { tipo: "tabela", titulo: "Tributos municipais", cabecalho: ["Tributo", "Incide sobre"], linhas: [
        ["IPTU", "propriedade predial e territorial urbana (art. 156, I)"],
        ["ITBI", "transmissão onerosa de bens imóveis entre vivos (art. 156, II)"],
        ["ISS", "serviços de qualquer natureza (art. 156, III) — em transição para o IBS pela reforma tributária"],
        ["Taxas e contribuição de melhoria", "serviços e obras do Município (art. 145)"],
        ["COSIP", "custeio da iluminação pública (art. 149-A)"]
      ]},
      { tipo: "texto", titulo: "Orçamento e fiscalização", texto: [
        "- Orçamento: **PPA**, **LDO** e **LOA**, de iniciativa do Prefeito (art. 165, por simetria). Ver a matéria Finanças e Orçamento Público.",
        "- Fiscalização (art. 31): pela **Câmara**, com controle externo, auxiliada pelo **Tribunal de Contas do Estado** (TCE-PR). O **parecer prévio** do Tribunal sobre as contas do Prefeito só deixa de prevalecer por decisão de **dois terços** da Câmara.",
        "- As contas ficam **60 dias** por ano à disposição de qualquer contribuinte (art. 31, § 3º)."
      ]},
      roteiro(["Princípios tributários e de orçamento repetidos na LOM.", "Prazos de envio do PPA, LDO e LOA à Câmara.", "Regras de participação popular no orçamento."]),
      { tipo: "questao", banca: Q, enunciado: "O parecer prévio do Tribunal de Contas sobre as contas do Prefeito só deixa de prevalecer por decisão de:", alternativas: ["maioria simples da Câmara", "maioria absoluta da Câmara", "dois terços dos membros da Câmara", "unanimidade", "do próprio Prefeito"], correta: "C", comentario: "Art. 31, § 2º, da CF." }
    ]
  });

  /* ================= CURITIBA · ESTATUTO ================= */
  const EC = "Estatuto dos Servidores de Curitiba";

  CTB(EC, "Provimento: nomeação, posse e exercício", {
    resumo: "Como o servidor municipal ingressa no cargo: compare os prazos com a Lei 8.112.",
    incidencia: "alta",
    conferir: EST_CTBA,
    fontes: [F.leisCtba, F.l8112],
    blocos: [
      { tipo: "texto", texto: ["As etapas são as mesmas de qualquer estatuto: **nomeação** (ato de provimento), **posse** (aceitação do cargo, com assinatura de termo) e **exercício** (início das atividades). O que muda entre estatutos são **prazos** e detalhes."] },
      comparar([["Formas de provimento", "nomeação, promoção, readaptação, reversão, aproveitamento, reintegração, recondução", ""], ["Prazo para posse", "30 dias da publicação", ""], ["Prazo para exercício", "15 dias da posse", ""], ["Se não tomar posse", "nomeação sem efeito", ""], ["Se não entrar em exercício", "exoneração", ""]]),
      roteiro(["Requisitos para investidura.", "Formas de provimento previstas.", "Prazos de posse e exercício e consequências.", "Exigências na posse (declaração de bens, inspeção médica)."]),
      { tipo: "questao", banca: Q, enunciado: "Em qualquer estatuto, a etapa que corresponde à aceitação formal do cargo, com assinatura do termo, é a:", alternativas: ["nomeação", "posse", "exercício", "lotação", "designação"], correta: "B", comentario: "A nomeação é o ato da autoridade; a posse é a aceitação; o exercício é o início das atividades." }
    ]
  });

  CTB(EC, "Estágio probatório e estabilidade", {
    resumo: "Avaliação do servidor municipal e estabilidade após 3 anos (regra da CF).",
    incidencia: "alta",
    conferir: EST_CTBA,
    fontes: [F.cf, F.leisCtba],
    blocos: [
      { tipo: "texto", texto: [
        "A **estabilidade** do servidor municipal segue a Constituição: **3 anos** de efetivo exercício e **avaliação especial de desempenho** por comissão (art. 41). Estatutos antigos que falam em 2 anos foram superados pela EC 19/1998 nesse ponto.",
        "",
        "O estatuto local define os **fatores** avaliados no estágio probatório e o procedimento."
      ]},
      comparar([["Duração na prática", "3 anos (CF)", ""], ["Fatores avaliados", "assiduidade, disciplina, capacidade de iniciativa, produtividade, responsabilidade", ""], ["Reprovado", "exonerado ou reconduzido", ""]]),
      roteiro(["Fatores de avaliação do estágio probatório.", "Quem avalia e com que periodicidade.", "Consequências da reprovação."]),
      { tipo: "questao", banca: Q, enunciado: "O servidor efetivo de um Município adquire estabilidade após:", alternativas: ["2 anos, se o estatuto municipal disser", "3 anos de efetivo exercício, com avaliação especial de desempenho", "a posse", "5 anos", "o fim do concurso"], correta: "B", comentario: "Regra do art. 41 da CF, que vale para todos os entes." }
    ]
  });

  CTB(EC, "Vacância", {
    resumo: "Exoneração, demissão, aposentadoria e outras formas de o cargo ficar vago.",
    incidencia: "média",
    conferir: EST_CTBA,
    fontes: [F.leisCtba],
    blocos: [
      { tipo: "texto", texto: ["**Vacância** é o cargo ficar vago. As formas típicas: exoneração (a pedido ou de ofício), demissão (pena), promoção, readaptação, aposentadoria, posse em cargo inacumulável e falecimento."] },
      comparar([["Formas de vacância", "exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável, falecimento", ""], ["Exoneração de ofício (efetivo)", "reprovado no estágio; não entrou em exercício", ""]]),
      roteiro(["Lista de formas de vacância do estatuto.", "Hipóteses de exoneração de ofício.", "Diferença entre exoneração e demissão no texto local."]),
      { tipo: "questao", banca: Q, enunciado: "Em qualquer estatuto, a diferença entre exoneração e demissão é que:", alternativas: ["as duas são penas", "a exoneração não é pena; a demissão é pena disciplinar", "a demissão é a pedido", "a exoneração exige PAD", "não há diferença"], correta: "B", comentario: "Exoneração não tem caráter punitivo." }
    ]
  });

  CTB(EC, "Direitos e vantagens", {
    resumo: "Vencimento, remuneração, indenizações, gratificações e adicionais do servidor municipal.",
    incidencia: "alta",
    conferir: EST_CTBA,
    fontes: [F.cf, F.leisCtba],
    blocos: [
      { tipo: "texto", texto: [
        "Direitos que a CF garante a todos os servidores (art. 39, § 3º): 13º, adicional noturno, salário-família, jornada máxima de 8h/44h, hora extra com acréscimo mínimo de 50%, férias com 1/3 a mais, licença-gestante, licença-paternidade, entre outros.",
        "",
        "O estatuto e as leis de carreira de cada Município definem as **vantagens próprias**: adicionais por tempo de serviço, gratificações de função, auxílios."
      ]},
      comparar([["Hora extra", "50%, até 2 h por jornada", ""], ["Adicional noturno", "25%, das 22h às 5h", ""], ["Férias", "30 dias, até 2 períodos acumulados, até 3 etapas", ""], ["Indenizações", "ajuda de custo, diárias, transporte, auxílio-moradia", ""]]),
      roteiro(["Conceitos de vencimento e remuneração.", "Lista de vantagens (indenizações, gratificações, adicionais).", "Regras de férias.", "Adicionais por tempo de serviço, se houver."]),
      { tipo: "questao", banca: Q, enunciado: "É direito constitucional garantido também ao servidor municipal:", alternativas: ["FGTS", "seguro-desemprego", "férias anuais com, pelo menos, um terço a mais", "aviso prévio", "participação nos lucros"], correta: "C", comentario: "Art. 39, § 3º, combinado com o art. 7º, XVII, da CF." }
    ]
  });

  CTB(EC, "Licenças e afastamentos", {
    resumo: "Licenças do servidor municipal: compare tipos e prazos com o modelo federal.",
    incidencia: "alta",
    conferir: EST_CTBA,
    fontes: [F.leisCtba],
    blocos: [
      comparar([["Doença em pessoa da família", "até 60 dias com remuneração + 90 sem, a cada 12 meses", ""], ["Capacitação", "até 3 meses a cada 5 anos", ""], ["Interesses particulares", "até 3 anos, sem remuneração", ""], ["Atividade política", "sem remuneração até o registro; com, do registro até 10 dias após a eleição", ""], ["Mandato eletivo de vereador", "acumula se houver compatibilidade de horário", ""]]),
      { tipo: "dica", texto: "Estatutos antigos costumam ter a **licença-prêmio** (por assiduidade, a cada período de anos trabalhados), que na União foi trocada pela licença para capacitação. Verifique se o estatuto de Curitiba ainda prevê e em que condições." },
      roteiro(["Lista de licenças do estatuto.", "Quais são remuneradas.", "Prazos e periodicidade de cada uma.", "Afastamentos para mandato eletivo e para estudo."]),
      { tipo: "questao", banca: Q, enunciado: "O servidor municipal eleito vereador, havendo compatibilidade de horários, segundo a Constituição Federal (art. 38, III):", alternativas: ["deve se exonerar", "fica afastado sem remuneração", "recebe as vantagens do cargo sem prejuízo da remuneração do mandato", "deve optar por uma remuneração", "fica em disponibilidade"], correta: "C", comentario: "Regra constitucional que vale para todos os entes." }
    ]
  });

  CTB(EC, "Deveres e proibições", {
    resumo: "O que o servidor municipal deve fazer e o que é proibido.",
    incidencia: "alta",
    conferir: EST_CTBA,
    fontes: [F.leisCtba],
    blocos: [
      { tipo: "texto", texto: ["Os deveres e proibições dos estatutos são parecidos: lealdade, assiduidade, sigilo, urbanidade, zelo pelo patrimônio; proibições como receber propina, usar o cargo em proveito próprio, participar de gerência de empresa privada e acumular cargos ilegalmente. Os detalhes e a **pena** ligada a cada proibição variam."] },
      comparar([["Cumprir ordens superiores", "exceto as manifestamente ilegais", ""], ["Participar de gerência de empresa", "proibido, salvo como acionista, cotista ou comanditário", ""], ["Parente sob chefia imediata", "proibido até o 2º grau", ""]]),
      roteiro(["Lista de deveres.", "Lista de proibições e a pena associada a cada uma.", "Regras sobre acumulação."]),
      { tipo: "questao", banca: Q, enunciado: "Em qualquer estatuto, o dever de cumprir ordens superiores:", alternativas: ["é absoluto", "não alcança ordens manifestamente ilegais", "só vale para servidores estáveis", "depende de concordância do servidor", "só vale por escrito"], correta: "B", comentario: "Princípio comum a todos os regimes: ninguém é obrigado a cumprir ordem manifestamente ilegal." }
    ]
  });

  CTB(EC, "Responsabilidades e penalidades", {
    resumo: "Responsabilidade civil, penal e administrativa e as penas disciplinares do servidor municipal.",
    incidencia: "alta",
    conferir: EST_CTBA,
    fontes: [F.leisCtba],
    blocos: [
      { tipo: "texto", texto: ["As três responsabilidades (civil, penal e administrativa) são **independentes**, e a absolvição penal que **nega o fato ou a autoria** afasta a administrativa. As penas típicas: advertência, suspensão, demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão."] },
      comparar([["Penas", "advertência, suspensão (até 90 dias), demissão, cassação, destituição", ""], ["Abandono de cargo", "mais de 30 dias consecutivos", ""], ["Inassiduidade habitual", "60 dias interpolados em 12 meses", ""], ["Prescrição", "5 anos (demissão), 2 anos (suspensão), 180 dias (advertência)", ""]]),
      roteiro(["Lista de penas e quando se aplica cada uma.", "Prazo máximo da suspensão.", "Definição de abandono e inassiduidade.", "Prazos de prescrição."]),
      { tipo: "questao", banca: Q, enunciado: "A absolvição criminal que afasta a responsabilidade administrativa do servidor é a que:", alternativas: ["reconhece falta de provas", "nega a existência do fato ou a autoria", "extingue a punibilidade pela prescrição", "concede perdão judicial", "qualquer absolvição"], correta: "B", comentario: "Regra comum aos estatutos, como no art. 126 da Lei 8.112." }
    ]
  });

  CTB(EC, "Processo disciplinar", {
    resumo: "Sindicância e processo administrativo disciplinar no Município: garantias e etapas.",
    incidencia: "média",
    conferir: EST_CTBA,
    fontes: [F.cf, F.leisCtba],
    blocos: [
      { tipo: "texto", texto: [
        "Toda punição exige **contraditório e ampla defesa** (CF, art. 5º, LV). Os estatutos preveem **sindicância** (apuração mais simples) e **processo administrativo disciplinar** (para penas graves), conduzido por **comissão**.",
        "",
        "Pela Súmula Vinculante 5 do STF, a falta de defesa técnica por advogado no PAD **não** ofende a Constituição."
      ]},
      comparar([["Sindicância", "30 dias + 30; pode resultar em advertência ou suspensão de até 30 dias", ""], ["PAD: comissão", "3 servidores estáveis", ""], ["PAD: prazo", "60 dias + 60", ""], ["Defesa escrita", "10 dias (20 se houver mais de um indiciado)", ""]]),
      roteiro(["Quem instaura a sindicância e o PAD.", "Composição da comissão.", "Prazos de conclusão, defesa e julgamento.", "Afastamento preventivo e revisão do processo."]),
      { tipo: "questao", banca: Q, enunciado: "A aplicação de penalidade disciplinar ao servidor municipal exige:", alternativas: ["apenas a decisão do chefe imediato", "contraditório e ampla defesa", "condenação criminal prévia", "aprovação da Câmara", "defesa obrigatória por advogado"], correta: "B", comentario: "CF, art. 5º, LV; e SV 5 dispensa advogado." }
    ]
  });

  /* ================= PARANÁ · CONSTITUIÇÃO ESTADUAL ================= */
  const CE = "Constituição do Estado do Paraná";

  PR(CE, "Princípios fundamentais e organização do Estado", {
    resumo: "A Constituição Estadual de 1989, o poder decorrente e os limites da Constituição Federal.",
    incidencia: "alta",
    conferir: CE_PR,
    fontes: [F.alep, F.cf],
    blocos: [
      { tipo: "texto", texto: [
        "A **Constituição do Estado do Paraná** foi promulgada em **5 de outubro de 1989**, um ano depois da Constituição Federal, pelo **poder constituinte decorrente** (CF, art. 25 e ADCT, art. 11).",
        "",
        "Ela deve observar os **princípios da Constituição Federal** e organiza: os Poderes do Estado, a administração pública estadual, os servidores, as finanças, os Municípios paranaenses (no que cabe ao Estado) e políticas como educação, saúde e meio ambiente.",
        "",
        "Capital: **Curitiba**."
      ]},
      roteiro(["Princípios fundamentais e objetivos do Estado.", "Símbolos do Estado.", "Organização do território (Municípios, regiões metropolitanas)."]),
      { tipo: "questao", banca: Q, enunciado: "A Constituição do Estado do Paraná é fruto do poder constituinte:", alternativas: ["originário", "derivado reformador", "derivado decorrente", "revisor", "difuso"], correta: "C", comentario: "Poder dos Estados de elaborar suas constituições, nos limites da CF (art. 25)." }
    ]
  });

  PR(CE, "Competências do Estado", {
    resumo: "Competência residual, gás canalizado, regiões metropolitanas e competências comuns.",
    incidencia: "média",
    conferir: CE_PR,
    fontes: [F.cf, F.alep],
    blocos: [
      { tipo: "texto", texto: [
        "Pela CF, os Estados têm:",
        "- **Competência remanescente (residual)**: o que não for vedado nem atribuído à União e aos Municípios (art. 25, § 1º).",
        "- **Gás canalizado**: explorar diretamente ou por concessão (art. 25, § 2º).",
        "- **Regiões metropolitanas, aglomerações urbanas e microrregiões**: instituir por **lei complementar** estadual (art. 25, § 3º). Ex.: Região Metropolitana de Curitiba.",
        "- **Competência comum** (art. 23) e **concorrente** (art. 24) com a União."
      ]},
      roteiro(["Lista de competências do Estado na Constituição Estadual.", "Regiões metropolitanas instituídas no Paraná."]),
      { tipo: "questao", banca: Q, enunciado: "As regiões metropolitanas são instituídas por:", alternativas: ["lei federal", "lei complementar estadual", "decreto do Governador", "lei orgânica municipal", "resolução do Senado"], correta: "B", comentario: "CF, art. 25, § 3º." }
    ]
  });

  PR(CE, "Administração Pública estadual", {
    resumo: "Princípios, administração direta e indireta do Paraná e controle.",
    incidencia: "média",
    conferir: CE_PR,
    fontes: [F.cf, F.alep],
    blocos: [
      { tipo: "texto", texto: [
        "A administração pública do Paraná segue o art. 37 da CF (LIMPE e regras de concurso, acumulação, teto). A Constituição Estadual reproduz e pode acrescentar princípios.",
        "",
        "- **Direta**: Governadoria, Secretarias de Estado.",
        "- **Indireta**: autarquias, fundações, empresas públicas e sociedades de economia mista estaduais (por exemplo, empresas de energia e saneamento).",
        "- **Controle externo**: Assembleia Legislativa com auxílio do **Tribunal de Contas do Estado (TCE-PR)**.",
        "- No Estado, o **teto** remuneratório no Executivo é o subsídio do **Governador** (art. 37, XI, da CF; há regras de subteto único facultativo)."
      ]},
      roteiro(["Princípios da administração na Constituição Estadual.", "Regras sobre publicidade e licitação estaduais.", "Composição e competências do TCE-PR."]),
      { tipo: "questao", banca: Q, enunciado: "O controle externo da administração pública estadual é exercido pela Assembleia Legislativa com o auxílio do:", alternativas: ["TCU", "Tribunal de Contas do Estado", "Ministério Público Federal", "Tribunal de Justiça", "CNJ"], correta: "B", comentario: "Simetria com os arts. 70 e 71 e art. 75 da CF." }
    ]
  });

  PR(CE, "Servidores públicos estaduais", {
    resumo: "Regras constitucionais para os servidores do Paraná e o que a Constituição Estadual acrescenta.",
    incidencia: "média",
    conferir: CE_PR,
    fontes: [F.cf, F.alep],
    blocos: [
      { tipo: "texto", texto: [
        "Aos servidores do Paraná aplicam-se as regras da CF: concurso, estabilidade após 3 anos com avaliação especial, vedação de acumulação (salvo exceções), teto, direitos sociais do art. 39, § 3º e regime próprio de previdência.",
        "",
        "A Constituição Estadual costuma tratar de: direitos adicionais, regras de remuneração, previdência estadual (no Paraná, a gestão previdenciária é feita por entidade própria) e associações de servidores."
      ]},
      roteiro(["Capítulo dos servidores na Constituição Estadual.", "Direitos adicionais garantidos ao servidor estadual.", "Regras de previdência e do regime próprio do Estado."]),
      { tipo: "questao", banca: Q, enunciado: "A estabilidade do servidor estadual do Paraná é adquirida após:", alternativas: ["2 anos, por regra estadual", "3 anos de efetivo exercício, conforme a Constituição Federal", "a posse", "5 anos", "o fim do estágio de 1 ano"], correta: "B", comentario: "Art. 41 da CF vale para todos os entes." }
    ]
  });

  PR(CE, "Organização dos Poderes no Estado", {
    resumo: "Assembleia Legislativa, Governador, Tribunal de Justiça e funções essenciais à Justiça no Paraná.",
    incidencia: "média",
    conferir: CE_PR + " Confirme o número de deputados estaduais na Constituição Estadual e no TRE-PR.",
    fontes: [F.cf, F.alep],
    blocos: [
      { tipo: "tabela", titulo: "Os Poderes no Estado", cabecalho: ["Poder", "Órgão", "Regras da CF"], linhas: [
        ["Legislativo", "**Assembleia Legislativa** (deputados estaduais)", "número de deputados calculado a partir da bancada federal do Estado (art. 27); mandato de 4 anos; idade mínima de 21 anos"],
        ["Executivo", "**Governador** e Vice", "eleição em dois turnos se necessário; mandato de 4 anos; idade mínima de 30 anos; crimes comuns julgados pelo **STJ**"],
        ["Judiciário", "**Tribunal de Justiça** e juízes estaduais", "competência definida na Constituição Estadual (art. 125)"]
      ]},
      { tipo: "texto", titulo: "Funções essenciais", texto: ["**Ministério Público do Paraná**, **Procuradoria-Geral do Estado (PGE-PR)**, **Defensoria Pública do Estado** e advocacia. A PGE representa o Estado judicialmente, como a AGU faz com a União (art. 132)."] },
      { tipo: "questao", banca: Q, enunciado: "O Governador de Estado que comete crime comum é julgado pelo:", alternativas: ["Tribunal de Justiça", "Superior Tribunal de Justiça", "Supremo Tribunal Federal", "Assembleia Legislativa", "Tribunal Regional Federal"], correta: "B", comentario: "CF, art. 105, I, a." }
    ]
  });

  /* ================= PARANÁ · ESTATUTO ================= */
  const EP = "Estatuto dos Servidores do Paraná";

  PR(EP, "Provimento e investidura", {
    resumo: "Requisitos e formas de provimento no estatuto estadual: compare com a Lei 8.112.",
    incidencia: "alta",
    conferir: EST_PR,
    fontes: [F.legisPR, F.l8112],
    blocos: [
      { tipo: "texto", texto: ["A investidura em cargo efetivo exige **concurso público** (CF, art. 37, II). O estatuto estadual define os requisitos, as formas de provimento e os prazos de posse e exercício."] },
      comparar([["Requisitos básicos", "nacionalidade, direitos políticos, quitação militar e eleitoral, escolaridade, 18 anos, aptidão física e mental", ""], ["Prazo de posse", "30 dias", ""], ["Prazo de exercício", "15 dias", ""], ["Formas de provimento", "7 formas (nomeação, promoção, readaptação, reversão, aproveitamento, reintegração, recondução)", ""]]),
      roteiro(["Requisitos para investidura.", "Formas de provimento previstas no estatuto estadual.", "Prazos de posse e exercício."]),
      { tipo: "questao", banca: Q, enunciado: "A investidura em cargo efetivo do Estado do Paraná depende de:", alternativas: ["indicação do Governador", "concurso público de provas ou de provas e títulos", "eleição", "contrato temporário", "aprovação da Assembleia"], correta: "B", comentario: "CF, art. 37, II." }
    ]
  });

  PR(EP, "Vacância", {
    resumo: "Formas de vacância no estatuto estadual.",
    incidencia: "média",
    conferir: EST_PR,
    fontes: [F.legisPR],
    blocos: [
      comparar([["Formas", "exoneração, demissão, promoção, readaptação, aposentadoria, posse em cargo inacumulável, falecimento", ""], ["Exoneração de ofício", "reprovação no estágio; não entrar em exercício", ""]]),
      roteiro(["Lista de formas de vacância.", "Hipóteses de exoneração a pedido e de ofício."]),
      { tipo: "questao", banca: Q, enunciado: "O falecimento do servidor é forma de:", alternativas: ["provimento", "vacância", "redistribuição", "remoção", "readaptação"], correta: "B", comentario: "O cargo fica vago." }
    ]
  });

  PR(EP, "Direitos e vantagens", {
    resumo: "Vencimento, gratificações, adicionais e férias do servidor estadual.",
    incidencia: "alta",
    conferir: EST_PR,
    fontes: [F.legisPR, F.cf],
    blocos: [
      { tipo: "texto", texto: ["Além dos direitos constitucionais (13º, férias com 1/3, hora extra, adicional noturno, licenças-gestante e paternidade), o estatuto do Paraná e as leis de carreira trazem vantagens próprias, como adicionais por tempo de serviço em certas carreiras."] },
      comparar([["Férias", "30 dias; acúmulo de até 2 períodos; parcelamento em até 3 etapas", ""], ["Hora extra", "+50%, até 2 h por jornada", ""], ["Indenizações", "ajuda de custo, diárias, transporte, auxílio-moradia", ""]]),
      roteiro(["Conceitos de vencimento e remuneração.", "Lista de vantagens.", "Regras de férias e gratificação natalina."]),
      { tipo: "questao", banca: Q, enunciado: "O adicional de férias garantido pela Constituição a todos os servidores é de, pelo menos:", alternativas: ["10%", "1/4 da remuneração", "1/3 da remuneração", "metade da remuneração", "uma remuneração inteira"], correta: "C", comentario: "CF, art. 7º, XVII, aplicado aos servidores pelo art. 39, § 3º." }
    ]
  });

  PR(EP, "Licenças e afastamentos", {
    resumo: "Licenças do servidor estadual do Paraná: tipos, remuneração e prazos.",
    incidencia: "alta",
    conferir: EST_PR,
    fontes: [F.legisPR],
    blocos: [
      comparar([["Tratamento de saúde", "com remuneração, por perícia", ""], ["Doença em pessoa da família", "60 dias com + 90 sem, a cada 12 meses", ""], ["Interesses particulares", "até 3 anos, sem remuneração", ""], ["Licença-prêmio ou capacitação", "União: capacitação, 3 meses a cada 5 anos", ""]]),
      roteiro(["Lista de licenças do estatuto estadual.", "Quais são remuneradas.", "Licença especial ou licença-prêmio: se existe e quais as regras.", "Afastamentos para mandato e para estudo."]),
      { tipo: "questao", banca: Q, enunciado: "A licença para tratar de interesses particulares, nos estatutos em geral:", alternativas: ["é remunerada", "é concedida sem remuneração", "é obrigatória", "conta como tempo de serviço para tudo", "é exclusiva de servidores em estágio"], correta: "B", comentario: "Por natureza, é sem remuneração (na Lei 8.112, até 3 anos)." }
    ]
  });

  PR(EP, "Deveres, proibições e responsabilidades", {
    resumo: "Deveres, proibições e as três esferas de responsabilidade do servidor estadual.",
    incidencia: "alta",
    conferir: EST_PR,
    fontes: [F.legisPR],
    blocos: [
      comparar([["Deveres", "zelo, lealdade, observar normas, cumprir ordens (salvo ilegais), sigilo, assiduidade, urbanidade, representar contra ilegalidade", ""], ["Proibições graves", "receber vantagem, valer-se do cargo, gerência de empresa, desídia", ""], ["Responsabilidades", "civil, penal e administrativa, independentes", ""]]),
      roteiro(["Lista de deveres.", "Lista de proibições e penas associadas.", "Regras de responsabilidade civil, penal e administrativa."]),
      { tipo: "questao", banca: Q, enunciado: "As responsabilidades civil, penal e administrativa do servidor são, em regra:", alternativas: ["dependentes entre si", "independentes, podendo se acumular", "excludentes: aplicada uma, afasta as outras", "aplicáveis só após condenação criminal", "exclusivas do servidor federal"], correta: "B", comentario: "Princípio comum aos estatutos." }
    ]
  });

  PR(EP, "Regime disciplinar e processo", {
    resumo: "Penas disciplinares e o processo administrativo do servidor estadual.",
    incidencia: "média",
    conferir: EST_PR,
    fontes: [F.legisPR, F.cf],
    blocos: [
      { tipo: "texto", texto: ["As penas exigem processo com **contraditório e ampla defesa** (CF, art. 5º, LV). O estatuto estadual define a sindicância, o processo disciplinar, a comissão, os prazos e a autoridade competente para cada pena."] },
      comparar([["Penas", "advertência, suspensão, demissão, cassação, destituição", ""], ["PAD", "comissão de 3 estáveis; 60 + 60 dias", ""], ["Prescrição da demissão", "5 anos", ""]]),
      roteiro(["Penas e quem aplica cada uma.", "Sindicância e PAD: prazos e comissão.", "Prescrição.", "Revisão do processo."]),
      { tipo: "questao", banca: Q, enunciado: "Para aplicar a pena de demissão a um servidor estável, é indispensável:", alternativas: ["apenas um despacho do Secretário", "processo administrativo com ampla defesa", "condenação criminal", "pedido do próprio servidor", "parecer do Tribunal de Contas"], correta: "B", comentario: "CF, art. 41, § 1º, II." }
    ]
  });

  /* ================= REGIÃO METROPOLITANA ================= */
  const SJP = "São José dos Pinhais";
  const ARA = "Araucária";
  const CAM = "Câmaras Municipais";
  const SEM_EDITAL = "Sem edital publicado até 08/11/2026: ao sair o edital, leia a lei indicada (versão atualizada no site da Câmara Municipal ou da Prefeitura) e preencha o roteiro.";

  RM(SJP, "Lei Orgânica de São José dos Pinhais", {
    resumo: "Como estudar a LOM de São José dos Pinhais a partir do modelo constitucional.",
    incidencia: "média",
    conferir: SEM_EDITAL,
    fontes: [F.cf],
    blocos: [
      { tipo: "texto", texto: ["Toda Lei Orgânica segue o roteiro da CF (arts. 29 a 31): organização do Município, competências, Câmara, Prefeito, administração, servidores, tributação e orçamento. Já estudado em **Curitiba · Lei Orgânica**: os mesmos tópicos valem aqui; o que muda são detalhes locais."] },
      roteiro(["Número de vereadores e composição da Mesa.", "Competências exclusivas da Câmara.", "Atribuições do Prefeito.", "Regras sobre servidores e sobre orçamento.", "Como emendar a LOM."]),
      { tipo: "questao", banca: Q, enunciado: "As regras constitucionais que toda Lei Orgânica municipal deve respeitar estão, principalmente, nos artigos:", alternativas: ["1º a 4º", "29 a 31", "102 a 105", "194 a 204", "225 e 226"], correta: "B", comentario: "Arts. 29, 29-A, 30 e 31 da CF." }
    ]
  });

  RM(SJP, "Estatuto dos servidores de São José dos Pinhais", {
    resumo: "Roteiro de estudo do estatuto municipal comparado à Lei 8.112.",
    incidencia: "média",
    conferir: SEM_EDITAL,
    fontes: [F.l8112],
    blocos: [
      comparar([["Posse", "30 dias", ""], ["Exercício", "15 dias", ""], ["Estabilidade", "3 anos (CF)", ""], ["Penas", "advertência, suspensão (até 90 dias), demissão, cassação, destituição", ""], ["Licenças", "família, capacitação, interesses particulares, política…", ""]]),
      roteiro(["Formas de provimento e vacância.", "Prazos de posse e exercício.", "Lista de licenças e vantagens.", "Deveres, proibições e penas.", "Processo disciplinar."]),
      { tipo: "dica", texto: "Estude primeiro a Lei 8.112 (Bloco A). Depois, leia o estatuto local procurando só as **diferenças**: é muito mais rápido." },
      { tipo: "questao", banca: Q, enunciado: "Uma regra do estatuto municipal que preveja estabilidade após 2 anos:", alternativas: ["prevalece sobre a CF", "foi superada pela CF, que exige 3 anos de efetivo exercício", "vale apenas para professores", "vale se a Câmara aprovar", "é a regra federal"], correta: "B", comentario: "A EC 19/1998 fixou 3 anos no art. 41 da CF, para todos os entes." }
    ]
  });

  RM(ARA, "Lei Orgânica de Araucária", {
    resumo: "Como estudar a LOM de Araucária a partir do modelo constitucional.",
    incidencia: "média",
    conferir: SEM_EDITAL,
    fontes: [F.cf],
    blocos: [
      { tipo: "texto", texto: ["Mesmo roteiro de qualquer Lei Orgânica (CF, arts. 29 a 31). Araucária é Município da Região Metropolitana de Curitiba conhecido pela atividade industrial (refinaria e polo industrial), o que costuma aparecer em questões de conhecimentos gerais."] },
      roteiro(["Organização do Município e competências.", "Câmara: número de vereadores e competências.", "Prefeito: atribuições.", "Servidores, tributos e orçamento.", "Emendas à LOM."]),
      { tipo: "questao", banca: Q, enunciado: "A Lei Orgânica de um Município deve atender aos princípios:", alternativas: ["só da Constituição Federal", "da Constituição Federal e da Constituição do respectivo Estado", "apenas das leis federais", "somente do regimento da Câmara", "de nenhuma norma superior"], correta: "B", comentario: "Art. 29, caput, da CF." }
    ]
  });

  RM(ARA, "Estatuto dos servidores de Araucária", {
    resumo: "Roteiro de estudo do estatuto municipal comparado à Lei 8.112.",
    incidencia: "média",
    conferir: SEM_EDITAL,
    fontes: [F.l8112],
    blocos: [
      comparar([["Posse", "30 dias", ""], ["Exercício", "15 dias", ""], ["Estabilidade", "3 anos (CF)", ""], ["Penas", "advertência, suspensão (até 90 dias), demissão, cassação, destituição", ""], ["Prescrição", "5 anos / 2 anos / 180 dias", ""]]),
      roteiro(["Formas de provimento e vacância.", "Prazos de posse e exercício.", "Licenças e vantagens.", "Deveres, proibições e penas.", "Processo disciplinar."]),
      { tipo: "questao", banca: Q, enunciado: "O servidor municipal que acumula ilegalmente dois cargos, aplicando-se por analogia o modelo federal, deve primeiro:", alternativas: ["ser demitido imediatamente", "ser notificado para optar por um dos cargos", "perder os dois cargos sem processo", "pagar multa", "ser removido"], correta: "B", comentario: "No modelo federal (art. 133 da Lei 8.112), a notificação para opção vem antes do processo. Confira a regra do estatuto local." }
    ]
  });

  RM(CAM, "Regimento interno da Câmara", {
    resumo: "O que é o regimento interno, o que ele regula e como estudar.",
    incidencia: "média",
    conferir: SEM_EDITAL,
    fontes: [F.cf],
    blocos: [
      { tipo: "texto", texto: [
        "O **Regimento Interno** é a norma (aprovada por **resolução** da própria Câmara) que regula o funcionamento da Casa: Mesa Diretora, comissões, sessões, tramitação dos projetos, votações, questões de ordem e disciplina dos vereadores.",
        "",
        "Ele detalha a Lei Orgânica, mas não pode contrariá-la."
      ]},
      { tipo: "tabela", titulo: "Estrutura típica", cabecalho: ["Parte", "Conteúdo"], linhas: [["Mesa Diretora", "presidente, vice, secretários; eleição e atribuições"], ["Comissões", "permanentes (Justiça, Finanças…) e temporárias (CPI, especiais)"], ["Sessões", "ordinárias, extraordinárias, solenes; quórum"], ["Proposições", "projetos de lei, de resolução, de decreto legislativo, requerimentos, indicações, moções"], ["Votações", "simbólica, nominal, secreta (quando prevista)"]] },
      roteiro(["Composição e mandato da Mesa.", "Lista de comissões permanentes.", "Tipos de proposição e seus prazos.", "Quóruns de votação e regras de urgência."]),
      { tipo: "questao", banca: Q, enunciado: "O Regimento Interno da Câmara Municipal é aprovado por meio de:", alternativas: ["lei ordinária sancionada pelo Prefeito", "resolução da própria Câmara", "decreto do Prefeito", "emenda à Lei Orgânica", "medida provisória"], correta: "B", comentario: "É matéria interna corporis, sem sanção do Executivo." }
    ]
  });

  RM(CAM, "Processo legislativo municipal", {
    resumo: "Iniciativa, discussão, votação, sanção e veto no Município, por simetria com a CF.",
    incidencia: "média",
    conferir: SEM_EDITAL,
    fontes: [F.cf],
    blocos: [
      { tipo: "passos", titulo: "Caminho de um projeto de lei municipal", itens: [
        "**Iniciativa**: vereador, Mesa, comissão, Prefeito ou cidadãos (5% do eleitorado).",
        "**Instrução nas comissões**: pareceres (legalidade, mérito, finanças).",
        "**Discussão e votação** em plenário (um ou dois turnos, conforme a LOM e o regimento).",
        "**Sanção ou veto** do Prefeito em 15 dias úteis.",
        "Veto: apreciação pela Câmara; derrubada pela **maioria absoluta**.",
        "**Promulgação** e **publicação**."
      ]},
      { tipo: "atencao", texto: "Leis de iniciativa privativa do Prefeito (cargos, remuneração e estrutura do Executivo) apresentadas por vereador têm **vício de iniciativa**: são inconstitucionais, mesmo que sancionadas." },
      { tipo: "questao", banca: Q, enunciado: "Projeto de lei de vereador que cria cargos na Prefeitura e fixa sua remuneração:", alternativas: ["é válido, se aprovado por maioria absoluta", "tem vício de iniciativa, pois a matéria é de iniciativa privativa do Prefeito", "é válido se o Prefeito sancionar", "depende de plebiscito", "é de iniciativa concorrente"], correta: "B", comentario: "Simetria com o art. 61, § 1º, II, a, da CF; a sanção não convalida o vício de iniciativa (entendimento do STF)." }
    ]
  });

  RM(CAM, "Atribuições da Câmara e dos vereadores", {
    resumo: "Legislar, fiscalizar, julgar contas e infrações do Prefeito; prerrogativas e proibições do vereador.",
    incidencia: "média",
    conferir: SEM_EDITAL,
    fontes: [F.cf, F.dl201],
    blocos: [
      { tipo: "tabela", titulo: "Funções da Câmara", cabecalho: ["Função", "Exemplos"], linhas: [
        ["Legislativa", "votar leis municipais e emendas à LOM"],
        ["Fiscalizadora", "controle externo com o TCE; pedidos de informação; CPIs"],
        ["Julgadora", "julgar as contas anuais do Prefeito (com parecer prévio do TCE); julgar o Prefeito e vereadores por infrações político-administrativas (Decreto-Lei 201/1967)"],
        ["Administrativa", "organizar seus serviços, servidores e o regimento"]
      ]},
      { tipo: "texto", titulo: "O vereador", texto: [
        "- **Inviolável** por opiniões, palavras e votos no exercício do mandato e na circunscrição do Município (CF, art. 29, VIII). **Não** tem foro especial nem imunidade processual (diferente de deputados).",
        "- Tem **proibições e incompatibilidades** semelhantes às dos membros do Congresso (art. 29, IX), como firmar contrato com o Município ou ocupar cargo demissível *ad nutum*, salvo exceções.",
        "- Servidor público eleito vereador acumula, se houver compatibilidade de horários (art. 38, III)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "Diferentemente dos deputados, o vereador:", alternativas: ["não tem nenhuma inviolabilidade", "tem inviolabilidade por opiniões, palavras e votos apenas na circunscrição do Município, sem imunidade processual", "tem foro no STF", "não pode ser processado criminalmente", "só pode ser preso com autorização da Câmara"], correta: "B", comentario: "CF, art. 29, VIII." }
    ]
  });
})();
