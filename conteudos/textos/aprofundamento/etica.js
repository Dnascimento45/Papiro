/* Aprofundamento · Ética no Serviço Público.
   Acrescenta texto, exemplos e questões DEPOIS do que já existe em textos/etica.js. */
(() => {
  const Q = "Questão autoral de fixação";
  const A = (caminho, blocos) => ESTUDO.assunto(`nucleo/etica/${caminho}`, { livros: LIVROS, blocos });
  const aprofundar = (texto) => ({ tipo: "texto", titulo: "Aprofundando", texto });
  const q = (enunciado, alternativas, correta, comentario) => ({ tipo: "questao", banca: Q, enunciado, alternativas, correta, comentario });
  const ce = (enunciado, correta, comentario) => q(enunciado, ["Certo", "Errado"], correta, comentario);

  const LIVROS = [
    { titulo: "Decreto 1.171/1994 · Código de Ética do Servidor Civil Federal", url: "https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm", nota: "Curto; leia inteiro, as bancas copiam as regras." },
    { titulo: "Lei 12.813/2013 · Conflito de interesses", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm" },
    { titulo: "Lei 13.460/2017 · Código de Defesa do Usuário do Serviço Público", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13460.htm" },
    { titulo: "Lei 13.146/2015 · Estatuto da Pessoa com Deficiência", url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm" },
    { titulo: "Ética", autor: "Adolfo Sánchez Vázquez", nota: "Introdução clássica à diferença entre ética e moral." },
    { titulo: "Convite à Filosofia", autor: "Marilena Chaui", nota: "Capítulos sobre ética, acessíveis para quem nunca estudou filosofia." },
  ];
  const PRATICAR = {
    tipo: "link",
    rotulo: "Para praticar com questões de prova",
    itens: [
      { titulo: "QConcursos", url: "https://www.qconcursos.com", nota: "Disciplina Ética no Serviço Público, filtrando pela banca." },
      { titulo: "TEC Concursos", url: "https://www.tecconcursos.com.br", nota: "Questões comentadas por professores." },
      { titulo: "PCI Concursos · provas anteriores", url: "https://www.pciconcursos.com.br/provas/", nota: "Provas completas e gratuitas." },
    ],
  };

  /* ================= FUNDAMENTOS DA ÉTICA ================= */

  A("fundamentos-da-etica/etica-moral-e-valores", [
    aprofundar([
      "### Ética × moral",
      "- **Moral**: conjunto de normas e costumes de um grupo, numa época; é **prática** e **varia** no tempo e no espaço.",
      "- **Ética**: **reflexão** teórica sobre a moral; pergunta por que algo é certo ou errado e busca princípios mais universais.",
      "",
      "### Valores e deontologia",
      "- **Valores**: o que uma pessoa ou sociedade considera importante (honestidade, justiça, respeito).",
      "- **Deontologia**: estudo dos **deveres** de uma profissão. Os códigos de ética profissional, como o Decreto 1.171/1994, são deontológicos.",
    ]),
    PRATICAR,
    q("O estudo dos deveres próprios de uma profissão chama-se:", ["axiologia", "deontologia", "epistemologia", "ontologia", "hermenêutica"], "B", "Axiologia estuda os valores."),
    ce("A moral pode variar conforme a cultura e a época de cada sociedade.", "Certo", "Por isso a ética reflete sobre ela em busca de princípios mais gerais."),
    q("A reflexão teórica sobre os costumes e as normas de conduta de uma sociedade corresponde à:", ["moral", "ética", "lei", "religião", "etiqueta"], "B", "A moral é a prática; a ética, a reflexão sobre ela."),
  ]);

  A("fundamentos-da-etica/etica-direito-e-cidadania", [
    aprofundar([
      "### O que distingue o direito",
      "A norma jurídica é **coercitiva**: o Estado impõe sanção a quem a descumpre. A norma moral tem sanção **interna** (consciência) ou **social** (reprovação do grupo).",
      "",
      "### Legal nem sempre é moral",
      "Algo pode ser permitido por lei e ainda assim ser antiético (por exemplo, usar uma brecha legal para obter vantagem pessoal no cargo). Por isso a Constituição exige da Administração não só **legalidade**, mas também **moralidade**.",
      "",
      "### Cidadania",
      "Exercício de **direitos e deveres**: votar, fiscalizar o poder público, pagar tributos, respeitar os outros. A ética do servidor é parte do dever de servir bem ao cidadão.",
    ]),
    PRATICAR,
    q("O que distingue a norma jurídica da norma moral é, principalmente:", ["a origem religiosa", "a coercibilidade (sanção imposta pelo Estado)", "a escrita", "a universalidade", "a antiguidade"], "B", "A moral pode ter sanção social, mas não é imposta pelo Estado."),
    ce("Todo ato permitido pela lei é, necessariamente, um ato moral.", "Errado", "Legalidade e moralidade não se confundem; por isso a CF exige as duas da Administração."),
  ]);

  A("fundamentos-da-etica/etica-na-administracao-publica", [
    aprofundar([
      "### Decreto 1.171/1994: ideias que caem",
      "- O servidor deve agir com **dignidade, decoro, zelo, eficácia** e consciência dos princípios morais.",
      "- Não pode desprezar o **elemento ético** da conduta: não basta decidir entre legal e ilegal, justo e injusto, conveniente e inconveniente, oportuno e inoportuno, mas sobretudo entre o **honesto e o desonesto**.",
      "- A moralidade da Administração não se limita à distinção entre o bem e o mal: soma-se a ela a ideia de que o **fim é sempre o bem comum**.",
      "- A conduta na **vida privada** também pode afetar a imagem do serviço público.",
      "",
      "### Comissão de Ética",
      "Toda entidade da Administração federal deve ter uma. A única pena que ela aplica é a **censura**, com parecer fundamentado e ciência ao faltoso.",
    ]),
    PRATICAR,
    q("Segundo o Decreto 1.171/1994, a pena aplicável ao servidor pela Comissão de Ética é a de:", ["advertência", "suspensão", "censura", "demissão", "multa"], "C", "Advertência, suspensão e demissão são penalidades da Lei 8.112, aplicadas em processo disciplinar."),
    ce("Segundo o Código de Ética, o servidor deve decidir não só entre o legal e o ilegal, mas principalmente entre o honesto e o desonesto.", "Certo", "Regra deontológica II do Decreto 1.171/1994."),
    ce("Para o Código de Ética, a conduta do servidor na vida privada é irrelevante para o serviço público.", "Errado", "O Decreto afirma que fatos da vida privada podem acrescer ou diminuir o bom conceito na vida funcional."),
  ]);

  /* ================= CONDUTA PROFISSIONAL ================= */

  A("conduta-profissional/postura-e-comportamento-no-servico-publico", [
    aprofundar([
      "### O que se espera",
      "**Assiduidade** (comparecer) e **pontualidade** (no horário), **urbanidade** e cortesia, **imparcialidade**, **presteza** (agilidade), discrição, zelo com o patrimônio público e apresentação adequada.",
      "",
      "### O que se evita",
      "Usar o cargo para obter favores, deixar pessoas esperando sem motivo, tratar alguém de forma diferente por simpatia ou preconceito, fazer longas conversas pessoais no atendimento, usar bens públicos para fins particulares.",
      "",
      "### Erros no atendimento",
      "O Código de Ética considera que deixar o cidadão em **fila** ou **esperando** sem necessidade é dano moral ao usuário: o servidor deve resolver ou encaminhar com rapidez.",
    ]),
    PRATICAR,
    q("Um servidor atende primeiro um conhecido que chegou depois dos demais, porque “é amigo da família”. Essa conduta fere principalmente a:", ["eficiência", "imparcialidade (impessoalidade)", "publicidade", "legalidade tributária", "continuidade"], "B", "Tratar de forma diferente por relação pessoal fere a impessoalidade."),
    ce("Usar o carro oficial para resolver assuntos particulares, mesmo sem prejuízo ao serviço, é conduta contrária à ética no serviço público.", "Certo", "Bens públicos só servem a fins públicos."),
    q("Comparecer ao trabalho regularmente e cumprir o horário correspondem, respectivamente, a:", ["urbanidade e presteza", "assiduidade e pontualidade", "discrição e zelo", "lealdade e disciplina", "presteza e assiduidade"], "B", "Assiduidade é comparecer; pontualidade, chegar no horário."),
  ]);

  A("conduta-profissional/sigilo-e-uso-da-informacao", [
    aprofundar([
      "### Sigilo × transparência",
      "A regra é a **publicidade** (Lei de Acesso à Informação). O sigilo vale para informações **classificadas**, **pessoais** (intimidade, vida privada) e protegidas por lei (fiscal, bancário, médico).",
      "",
      "### Consequências",
      "- A Lei 8.112 manda **guardar sigilo** sobre assunto da repartição (art. 116, VIII).",
      "- **Revelar segredo** do qual se apropriou em razão do cargo leva à **demissão** (art. 132, IX).",
      "- Usar **informação privilegiada** para obter vantagem é conflito de interesses (Lei 12.813) e pode ser improbidade.",
      "",
      "### Dados pessoais",
      "A LGPD também se aplica ao poder público: dados de cidadãos só se usam para a finalidade pública que justificou a coleta.",
    ]),
    PRATICAR,
    q("Pela Lei 8.112/1990, revelar segredo do qual se apropriou em razão do cargo é punido com:", ["advertência", "suspensão de até 30 dias", "demissão", "censura", "multa"], "C", "Art. 132, IX."),
    ce("O dever de sigilo impede o servidor de fornecer ao cidadão informações públicas pedidas com base na Lei de Acesso à Informação.", "Errado", "O sigilo é exceção; informações públicas devem ser fornecidas."),
    q("Um servidor usa uma informação ainda não divulgada sobre uma licitação para orientar a empresa de um parente. A conduta caracteriza:", ["exercício regular do cargo", "uso de informação privilegiada (conflito de interesses)", "transparência ativa", "publicidade oficial", "assiduidade"], "B", "Lei 12.813/2013, art. 5º, I, e possível improbidade."),
  ]);

  A("conduta-profissional/assedio-moral-e-sexual-no-trabalho", [
    aprofundar([
      "### Assédio moral",
      "Conduta abusiva, em regra **repetida**, que humilha, constrange ou desqualifica alguém e degrada o ambiente de trabalho.",
      "- **Vertical descendente**: do chefe para o subordinado. **Ascendente**: de subordinados contra o chefe.",
      "- **Horizontal**: entre colegas do mesmo nível. **Organizacional**: práticas de gestão abusivas.",
      "",
      "### Assédio sexual",
      "No Código Penal (art. 216-A), é crime **constranger** alguém com o intuito de obter vantagem ou favorecimento **sexual**, prevalecendo-se da condição de **superior hierárquico** ou de ascendência inerente ao cargo. Fora dessa situação, a conduta pode ser outro crime (importunação sexual) e infração ética e disciplinar.",
      "",
      "### Onde denunciar",
      "Chefia (se não for a autora), **ouvidoria** (no Executivo federal, pela plataforma Fala.BR), comissão de ética e corregedoria.",
    ]),
    PRATICAR,
    q("O assédio moral praticado entre colegas do mesmo nível hierárquico é classificado como:", ["vertical descendente", "vertical ascendente", "horizontal", "organizacional", "sexual"], "C", "Sem relação de subordinação entre as partes."),
    ce("O assédio moral costuma se caracterizar por condutas abusivas repetidas, e não por um conflito isolado.", "Certo", "A repetição e a duração são marcas típicas."),
    q("Segundo o Código Penal, o crime de assédio sexual exige que o autor:", ["seja colega do mesmo nível", "se prevaleça da condição de superior hierárquico ou de ascendência do cargo", "use violência física", "seja servidor público", "repita a conduta pelo menos três vezes"], "B", "Art. 216-A do Código Penal."),
  ]);

  A("conduta-profissional/conflito-de-interesses-nocoes", [
    aprofundar([
      "### Conceito (Lei 12.813/2013)",
      "Situação criada pelo **confronto entre interesses públicos e privados**, que possa comprometer o interesse coletivo ou influenciar, de forma imprópria, o desempenho da função.",
      "",
      "### Exemplos",
      "Usar informação privilegiada; exercer atividade que seja incompatível com as atribuições; atuar como procurador ou intermediário de interesses privados junto à Administração; receber presente de quem tenha interesse em decisão sua; praticar ato em benefício de empresa em que parente tenha participação.",
      "",
      "### Quarentena",
      "Ocupantes de certos cargos (como ministros e cargos de direção de alto nível) ficam impedidos, por **6 meses** depois de deixar o cargo, de prestar serviços a quem tinha interesse em suas decisões, entre outras restrições.",
      "",
      "### Em caso de dúvida",
      "O agente pode **consultar** a Comissão de Ética Pública ou a Controladoria-Geral da União, conforme o cargo.",
    ]),
    PRATICAR,
    q("Segundo a Lei 12.813/2013, o período de impedimento (quarentena) após deixar certos cargos do Executivo federal é de:", ["30 dias", "3 meses", "6 meses", "1 ano", "2 anos"], "C", "Art. 6º, II."),
    ce("Há conflito de interesses quando interesses privados do agente podem influenciar, de forma imprópria, o desempenho da função pública.", "Certo", "É a definição do art. 3º, I, da Lei 12.813."),
  ]);

  /* ================= ATENDIMENTO AO PÚBLICO ================= */

  A("atendimento-ao-publico/qualidade-no-atendimento", [
    aprofundar([
      "### Código de Defesa do Usuário (Lei 13.460/2017)",
      "- Direitos do usuário: atendimento com **urbanidade**, respeito, acessibilidade e cortesia; igualdade de tratamento; informação clara; proteção dos seus dados.",
      "- Cada órgão deve divulgar a **Carta de Serviços ao Usuário**: quais serviços presta, requisitos, documentos, prazos e formas de atendimento.",
      "- As **ouvidorias** recebem manifestações (reclamações, denúncias, sugestões, elogios) e devem responder em até **30 dias**, prorrogáveis por mais **30** (conferir).",
      "",
      "### Qualidade na prática",
      "Cortesia, presteza, informação correta, resolução no primeiro contato quando possível e acompanhamento do pedido.",
    ]),
    PRATICAR,
    q("Segundo a Lei 13.460/2017, o documento que informa aos usuários os serviços prestados pelo órgão, os requisitos e os prazos de atendimento é a:", ["ouvidoria", "Carta de Serviços ao Usuário", "Lei de Acesso à Informação", "ata de registro de preços", "portaria interna"], "B", "Art. 7º da Lei 13.460."),
    ce("A Lei 13.460/2017 garante ao usuário do serviço público o direito de ser tratado com urbanidade, respeito e cortesia.", "Certo", "Está entre as diretrizes e direitos básicos do usuário."),
  ]);

  A("atendimento-ao-publico/comunicacao-com-o-cidadao", [
    aprofundar([
      "### Linguagem simples",
      "Frases curtas, ordem direta, palavras comuns, nada de jargão ou “juridiquês” sem explicação. O objetivo é que o cidadão **entenda e consiga agir**.",
      "",
      "### Escuta ativa",
      "Ouvir com atenção, sem interromper; confirmar o que entendeu (“O senhor precisa da segunda via, certo?”); perguntar o que falta.",
      "",
      "### Barreiras",
      "Ruído do ambiente, termos técnicos, pressa, preconceito, linguagem corporal impaciente. A comunicação **não verbal** (postura, olhar, tom de voz) também comunica.",
    ]),
    PRATICAR,
    q("Repetir com as próprias palavras o que o cidadão disse, para confirmar o entendimento, é uma técnica de:", ["comunicação agressiva", "escuta ativa", "linguagem técnica", "atendimento padronizado", "triagem"], "B", "Mostra atenção e evita mal-entendidos."),
    ce("Usar termos técnicos e jurídicos no atendimento é sempre recomendável, pois transmite profissionalismo.", "Errado", "O atendimento deve usar linguagem simples, compreensível pelo cidadão."),
  ]);

  A("atendimento-ao-publico/atendimento-prioritario", [
    aprofundar([
      "### Quem tem prioridade (Lei 10.048/2000 e leis posteriores)",
      "Pessoas com deficiência, **idosos com 60 anos ou mais**, gestantes, lactantes, pessoas com criança de colo e pessoas com obesidade, entre outros grupos previstos em leis específicas (como as pessoas com transtorno do espectro autista).",
      "",
      "### Prioridade especial",
      "O Estatuto da Pessoa Idosa garante prioridade **especial** aos maiores de **80 anos**, inclusive em relação aos demais idosos.",
      "",
      "### Na prática",
      "Prioridade não é favor: é direito previsto em lei. O órgão deve sinalizar e organizar o atendimento para garanti-la.",
    ]),
    PRATICAR,
    q("Para ter atendimento prioritário como pessoa idosa, a lei exige idade igual ou superior a:", ["55 anos", "60 anos", "65 anos", "70 anos", "80 anos"], "B", "Lei 10.048/2000 e Estatuto da Pessoa Idosa."),
    ce("O Estatuto da Pessoa Idosa assegura prioridade especial aos maiores de 80 anos.", "Certo", "Eles têm preferência inclusive sobre os demais idosos."),
  ]);

  A("atendimento-ao-publico/acessibilidade-e-inclusao", [
    aprofundar([
      "### Barreiras (Lei 13.146/2015, art. 3º)",
      "**Urbanísticas** (vias e espaços públicos), **arquitetônicas** (edifícios), nos **transportes**, nas **comunicações e na informação**, **atitudinais** (comportamentos que impedem a participação, como o preconceito) e **tecnológicas**.",
      "",
      "### Conceitos",
      "- **Desenho universal**: produtos e ambientes pensados para serem usados por todos, sem adaptação.",
      "- **Tecnologia assistiva**: recursos que ampliam a autonomia (leitor de tela, cadeira de rodas, intérprete).",
      "- **Adaptação razoável**: ajuste necessário e proporcional para garantir igualdade de condições.",
      "",
      "### Libras",
      "Reconhecida como meio legal de comunicação e expressão pela **Lei 10.436/2002**.",
    ]),
    PRATICAR,
    q("A atitude de um servidor que se recusa a atender uma pessoa com deficiência por achar que ela “não vai entender” é exemplo de barreira:", ["arquitetônica", "urbanística", "atitudinal", "tecnológica", "nos transportes"], "C", "Barreira atitudinal: comportamento que impede ou prejudica a participação."),
    q("Projetar produtos e ambientes para serem usados por todas as pessoas, sem necessidade de adaptação, é o conceito de:", ["tecnologia assistiva", "desenho universal", "adaptação razoável", "acessibilidade parcial", "atendimento prioritário"], "B", "Lei 13.146/2015, art. 3º, II."),
    ce("A Língua Brasileira de Sinais (Libras) é reconhecida em lei como meio legal de comunicação e expressão.", "Certo", "Lei 10.436/2002."),
  ]);
})();
