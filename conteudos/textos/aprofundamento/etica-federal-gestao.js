/* Aprofundamento · Bloco A: Ética no Serviço Público Federal e Realidade Brasileira e Gestão Federal.
   Acrescenta texto, tabelas e questões DEPOIS do que já existe em textos/etica-federal-gestao.js. */
(() => {
  const Q = "Questão autoral de fixação";
  const E = (caminho, blocos, livros = LIVROS_ETICA) => ESTUDO.assunto(`bloco-a/etica-federal/${caminho}`, { livros, blocos });
  const G = (caminho, blocos, livros = LIVROS_GERAIS) => ESTUDO.assunto(`bloco-a/conhecimentos-gerais/${caminho}`, { livros, blocos });
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

  const LIVROS_ETICA = [
    { titulo: "Decreto 1.171/1994 · Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal", url: "https://www.planalto.gov.br/ccivil_03/decreto/d1171.htm", nota: "Curto. As bancas copiam trechos, então leia inteiro." },
    { titulo: "Decreto 6.029/2007 · Sistema de Gestão da Ética", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6029.htm", nota: "Composição e competência da CEP e das comissões." },
    { titulo: "Lei 12.813/2013 · Conflito de interesses", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12813.htm", nota: "Foque nos arts. 5º e 6º e na quarentena de 6 meses." },
    { titulo: "Comissão de Ética Pública (CEP) · gov.br", url: "https://www.gov.br/cep", nota: "Códigos, resoluções e orientações da CEP." },
  ];

  const LIVROS_GERAIS = [
    { titulo: "Decreto-Lei 200/1967 · Organização da Administração Federal", url: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0200.htm", nota: "Base da divisão em administração direta e indireta." },
    { titulo: "Lei 14.129/2021 · Governo Digital", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm" },
    { titulo: "Objetivos de Desenvolvimento Sustentável · ONU Brasil", url: "https://brasil.un.org/pt-br/sdgs", nota: "Os 17 ODS, com metas e indicadores." },
    { titulo: "Políticas Públicas: conceitos, esquemas de análise, casos práticos", autor: "Leonardo Secchi", nota: "Livro curto, referência para o ciclo de políticas públicas." },
    { titulo: "Agência IBGE de Notícias e IBGE Educa", url: "https://agenciadenoticias.ibge.gov.br", nota: "Fonte oficial de dados do Brasil para a parte de realidade brasileira." },
  ];

  /* ================= DECRETO 1.171/1994 ================= */

  E("decreto-1-171-1994/regras-deontologicas", [
    aprofundar([
      "### Estrutura do Anexo",
      "- **Capítulo I**, Seção I: **regras deontológicas** (regras **I a XIII**).",
      "- Seção II: **principais deveres** (regra **XIV**).",
      "- Seção III: **vedações** (regra **XV**).",
      "- **Capítulo II**: **Comissões de Ética** (regras **XVI a XXV**).",
      "",
      "### A ideia de cada regra (I a XIII)",
      "- **I**: dignidade, decoro, zelo, eficácia e consciência dos princípios morais valem **dentro e fora do cargo**.",
      "- **II**: o servidor não decide só entre o legal e o ilegal, mas entre o **honesto e o desonesto** (CF, art. 37, caput e § 4º).",
      "- **III**: a moralidade administrativa vai além de distinguir bem e mal: o **fim é sempre o bem comum**; o equilíbrio entre **legalidade e finalidade** consolida a moralidade.",
      "- **IV**: o salário é pago por **tributos de todos**, por isso exige-se a moralidade como elemento indissociável do Direito, **fator de legalidade**.",
      "- **V**: o trabalho público é **acréscimo ao bem-estar** do próprio servidor, como cidadão.",
      "- **VI**: a função pública é **exercício profissional** e integra a vida particular; a conduta na vida privada pode **acrescer ou diminuir** o bom conceito funcional.",
      "- **VII**: a **publicidade** de qualquer ato é requisito de **eficácia e moralidade**, salvo segurança nacional, investigações policiais ou interesse superior do Estado (em processo declarado sigiloso).",
      "- **VIII**: **direito à verdade**; o servidor não pode omiti-la nem falseá-la.",
      "- **IX**: **cortesia, boa vontade e cuidado**; tratar mal quem paga tributos é **dano moral**; danificar bem público por descuido é ofensa a todos.",
      "- **X**: deixar pessoas à espera, formando filas ou atrasos, é **grave dano moral** aos usuários.",
      "- **XI**: dar atenção às **ordens legais** dos superiores e evitar a conduta negligente; erros repetidos e descaso caracterizam **imprudência**.",
      "- **XII**: toda **ausência injustificada** é fator de desmoralização do serviço.",
      "- **XIII**: trabalhar em **harmonia** com a estrutura e respeitando colegas e cidadãos.",
      "",
      "### Palavras-chave que as bancas cobram",
      "**Honesto × desonesto**; **bem comum** como fim; **direito à verdade**; **dano moral** (mau atendimento e filas); **publicidade** como requisito de eficácia; **vida privada** que reflete na função.",
    ]),
    atencao("O conceito do inciso II costuma ser trocado: a escolha ética é entre o **honesto e o desonesto**, e não apenas entre o legal e o ilegal. A legalidade é condição, não o limite da ética."),
    q("Segundo o Código de Ética do Servidor Público Civil do Poder Executivo Federal, o servidor público não terá que decidir somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, mas principalmente entre:", ["o útil e o inútil", "o honesto e o desonesto", "o rápido e o lento", "o barato e o caro", "o formal e o informal"], "B", "Regra deontológica II."),
    ce("A publicidade de qualquer ato administrativo constitui requisito de eficácia e moralidade, ressalvados os casos de segurança nacional, investigações policiais ou interesse superior do Estado, a serem preservados em processo previamente declarado sigiloso.", "Certo", "Regra deontológica VII."),
    ce("Conforme o Código de Ética, os fatos e atos verificados na vida privada do servidor não interferem no seu conceito funcional.", "Errado", "Regra VI: a função pública integra a vida particular, e a conduta privada pode acrescer ou diminuir o bom conceito na vida funcional."),
    q("Deixar qualquer pessoa à espera de solução que compete ao seu setor, permitindo a formação de longas filas, caracteriza, segundo o Código, principalmente:", ["mero descumprimento de horário", "grave dano moral aos usuários do serviço público", "ato de gestão sem relevância ética", "exercício regular da prerrogativa de função", "excesso de zelo"], "B", "Regra deontológica X."),
  ]);

  E("decreto-1-171-1994/principais-deveres-do-servidor", [
    aprofundar([
      "### Regra XIV: os deveres (alíneas a a v)",
      "A fonte **pula a letra k**: a sequência vai de **j** para **l**. Principais deveres, agrupados:",
      "",
      "**Trabalho e rendimento**",
      "- desempenhar as atribuições **no prazo devido** (a);",
      "- agir com **rapidez, perfeição e rendimento**, resolvendo prioritariamente situações de atraso, como filas (b);",
      "- **não retardar** prestação de contas (d);",
      "- ser **assíduo e frequente** (l);",
      "- manter-se **atualizado** com as instruções, normas e legislação do órgão (q);",
      "- cumprir as tarefas com **critério, segurança e rapidez**, mantendo boa ordem (r).",
      "",
      "**Caráter e atendimento**",
      "- ser **probo, reto, leal e justo**, escolhendo sempre a opção melhor e mais vantajosa para o **bem comum** (c);",
      "- tratar os usuários com cuidado e **aperfeiçoar a comunicação** (e);",
      "- ter consciência de que o trabalho é regido por **princípios éticos** (f);",
      "- ser **cortês, urbano, disponível e atento**, sem preconceito de raça, sexo, nacionalidade, cor, idade, religião, cunho político ou posição social (g).",
      "",
      "**Hierarquia e integridade**",
      "- **respeitar a hierarquia**, sem temor de representar contra comprometimentos indevidos da estrutura estatal (h);",
      "- **resistir a pressões** de superiores, contratantes ou interessados que visem a favores ou vantagens indevidas, **e denunciá-las** (i);",
      "- **comunicar imediatamente** aos superiores ato ou fato contrário ao interesse público (m);",
      "- **facilitar a fiscalização** dos atos e serviços (s);",
      "- exercer com **moderação** as prerrogativas funcionais (t);",
      "- **não exercer** função, poder ou autoridade com finalidade estranha ao interesse público, **mesmo observando as formalidades legais** (u) (é o conceito de **desvio de finalidade**).",
      "",
      "**Outros**",
      "- no exercício do **direito de greve**, zelar pelas exigências de defesa da **vida e da segurança coletiva** (j);",
      "- manter limpo e em ordem o **local de trabalho** (n);",
      "- participar de **movimentos e estudos** de melhoria da função (o);",
      "- apresentar-se com **vestimenta adequada** (p);",
      "- **divulgar o Código de Ética** à sua classe e estimular seu cumprimento (v).",
    ]),
    atencao("A alínea sobre **resistir a pressões e denunciá-las** (i) e a sobre **desvio de finalidade** (u) são as mais cobradas. O dever de **respeitar a hierarquia** (h) vem acompanhado do de **representar** contra comprometimentos indevidos: obediência não é cega."),
    q("É dever do servidor público, segundo o Código de Ética:", ["comunicar imediatamente aos superiores todo ato ou fato contrário ao interesse público", "silenciar sobre irregularidades para preservar o clima de trabalho", "aceitar pequenos presentes de usuários", "dispensar a fiscalização de seus atos", "exercer prerrogativas funcionais sem qualquer limite"], "A", "Regra XIV, m."),
    ce("O servidor deve resistir a todas as pressões de superiores hierárquicos, de contratantes ou de interessados que visem a obter favores ou vantagens indevidas, e denunciá-las.", "Certo", "Regra XIV, i."),
    q("Exercer a função, o poder ou a autoridade com finalidade estranha ao interesse público, ainda que observando as formalidades legais, é conduta:", ["permitida, se houver forma legal", "vedada, pois o servidor deve abster-se de forma absoluta de fazê-lo", "tolerada em casos de urgência", "obrigatória em situações de emergência", "irrelevante para a ética"], "B", "Regra XIV, u: é o desvio de finalidade."),
    ce("O Código de Ética impõe ao servidor o dever de zelar, no exercício do direito de greve, pelas exigências específicas da defesa da vida e da segurança coletiva.", "Certo", "Regra XIV, j."),
  ]);

  E("decreto-1-171-1994/vedacoes-ao-servidor", [
    aprofundar([
      "### Regra XV: o que é vedado (alíneas a a p, sem a letra k)",
      "- **a)** usar **cargo, função, facilidades, amizades, tempo, posição ou influência** para obter favorecimento próprio ou de outrem;",
      "- **b)** prejudicar deliberadamente a **reputação** de outros servidores ou de cidadãos que dependam deles;",
      "- **c)** ser **conivente**, por solidariedade, com erro ou infração ao Código de Ética;",
      "- **d)** usar **artifícios para procrastinar** ou dificultar o exercício regular de direito de alguém;",
      "- **e)** deixar de utilizar os **avanços técnicos e científicos** ao seu alcance no atendimento;",
      "- **f)** permitir que **interesses pessoais** (perseguições, simpatias, antipatias, paixões) interfiram no trato com o público e colegas;",
      "- **g)** pleitear ou receber **vantagens** (ajuda financeira, gratificação, prêmio, comissão, doação) para si, familiares ou terceiros, ou para influenciar outro servidor;",
      "- **h)** **alterar ou deturpar** o teor de documentos a serem encaminhados;",
      "- **i)** **iludir** ou tentar iludir quem necessite de atendimento;",
      "- **j)** **desviar servidor** para atender interesse particular;",
      "- **l)** retirar da repartição, **sem autorização legal**, documento, livro ou bem público;",
      "- **m)** usar **informações privilegiadas** em benefício próprio, de parentes, amigos ou terceiros;",
      "- **n)** apresentar-se **embriagado** ao serviço ou ser habitualmente embriagado fora dele;",
      "- **o)** dar concurso a instituição que **atente contra a moral, a honestidade ou a dignidade** da pessoa humana;",
      "- **p)** exercer atividade profissional **antiética** ou associar seu nome a empreendimentos de cunho duvidoso.",
      "",
      "### Como memorizar",
      "Agrupe por tema: **favorecimento e vantagens** (a, g, m); **prejuízo a pessoas** (b, f, i); **procrastinação e má-fé** (d, h); **patrimônio e pessoal** (j, l); **comportamento** (n, o, p); **omissão** (c, e).",
    ]),
    atencao("A conivência por solidariedade com erro ou infração (c) é **vedada**: o servidor não deve acobertar o colega. E a embriaguez é vedada **no serviço** e também **habitualmente fora dele** (n)."),
    q("É vedado ao servidor público, segundo o Código de Ética:", ["comunicar irregularidades aos superiores", "ser conivente, por solidariedade, com erro ou infração a princípio ético ou a norma do Código", "cumprir ordens legais", "manter-se atualizado", "facilitar a fiscalização de seus atos"], "B", "Regra XV, c."),
    ce("O servidor pode receber prêmio ou doação de pequeno valor de quem tenha interesse em seu trabalho, desde que não influencie sua decisão.", "Errado", "Regra XV, g: é vedado pleitear ou receber vantagens, em qualquer forma, para si, familiares ou terceiros."),
    q("Retirar da repartição, sem estar legalmente autorizado, qualquer documento, livro ou bem pertencente ao patrimônio público é:", ["conduta permitida em serviço externo", "vedação prevista no Código de Ética", "dever do servidor zeloso", "ato de gestão", "uso regular de prerrogativa"], "B", "Regra XV, l."),
    ce("É vedado ao servidor usar informações privilegiadas em benefício próprio, de parentes, de amigos ou de terceiros.", "Certo", "Regra XV, m."),
  ]);

  E("decreto-1-171-1994/comissoes-de-etica", [
    aprofundar([
      "### O que o Decreto 6.029/2007 mudou",
      "O Decreto 6.029/2007 **revogou** as regras **XVII, XIX, XX, XXI, XXIII e XXV** do Anexo do Decreto 1.171. Isso importa: provas recentes cobram a versão **atual**.",
      "",
      "### O que continua valendo",
      "- **Regra XVI** (criação): em órgãos e entidades da Administração **federal direta, autárquica e fundacional**, e em entidades com atribuições delegadas, deve existir uma **Comissão de Ética**, com função de orientar e aconselhar sobre a ética profissional e de conhecer concretamente imputação de falta.",
      "- **Regra XVIII**: a Comissão fornece aos órgãos de carreira os **registros de conduta ética** para instruir promoções e demais procedimentos da carreira.",
      "- **Regra XXII**: a **pena aplicável pela Comissão é a censura**, fundamentada em **parecer assinado por todos os membros**, com **ciência do faltoso**.",
      "- **Regra XXIV**: para fins de apuração, **servidor** é quem presta serviços **permanentes, temporários ou excepcionais**, ainda que **sem remuneração**, ligado a órgão do poder estatal.",
      "",
      "### Como é a composição hoje (Decreto 6.029/2007, art. 5º)",
      "**Três membros titulares e três suplentes**, servidores ou empregados titulares de cargo efetivo ou emprego permanente, designados pelo dirigente máximo, com **mandatos não coincidentes de três anos**.",
      "",
      "### A censura",
      "A **censura** é pena **ética**, não disciplinar. Não é demissão nem suspensão: é um registro de reprovação, com efeitos na **carreira** (registros de conduta ética). Falta que também seja infração **disciplinar** vai à **corregedoria** (Sistema de Correição), que aplica as penas da Lei 8.112.",
    ]),
    atencao("A **única** pena da Comissão de Ética é a **censura**. Comissão de Ética **não demite, não suspende e não adverte** — essas são penas disciplinares, aplicadas em PAD pelas autoridades competentes."),
    q("A penalidade que a Comissão de Ética pode aplicar ao servidor, segundo o Código de Ética Profissional, é a de:", ["advertência", "suspensão", "censura", "demissão", "multa"], "C", "Regra XXII. Penas disciplinares são aplicadas em PAD."),
    ce("A Comissão de Ética pode demitir o servidor que cometa infração ao Código de Ética.", "Errado", "A pena da Comissão é a censura; a demissão é pena disciplinar da Lei 8.112."),
    q("Segundo o Decreto 6.029/2007, as Comissões de Ética dos órgãos são compostas por:", ["cinco membros, sem suplentes", "três membros titulares e três suplentes, com mandatos não coincidentes de três anos", "sete membros, com mandato de dois anos", "dois membros titulares e um suplente", "cinco membros titulares, nomeados pelo Presidente da República"], "B", "Art. 5º do Decreto 6.029/2007."),
  ]);

  /* ================= NORMAS CORRELATAS ================= */

  E("normas-correlatas/conflito-de-interesses-lei-12-813-2013", [
    aprofundar([
      "### Definição (art. 3º)",
      "**Conflito de interesses** é o confronto entre **interesses públicos e privados** que possa comprometer o interesse coletivo ou influenciar, de maneira imprópria, o desempenho da função pública. A configuração **independe de lesão ao patrimônio** público e de **recebimento de vantagem** (art. 4º, § 2º).",
      "**Informação privilegiada**: a que diz respeito a assuntos sigilosos ou relevante ao processo decisório do Executivo federal, com repercussão econômica ou financeira e que **não seja de amplo conhecimento público**.",
      "",
      "### Quem se sujeita (art. 2º)",
      "Ministros de Estado; ocupantes de **cargos de natureza especial** ou equivalentes; presidentes, vice-presidentes e diretores de **autarquias, fundações, empresas públicas e sociedades de economia mista**; ocupantes de **DAS níveis 6 e 5** ou equivalentes; e quem tenha acesso a **informação privilegiada** capaz de gerar vantagem econômica ou financeira.",
      "",
      "### Durante o exercício do cargo (art. 5º)",
      "Configura conflito:",
      "- usar ou divulgar **informação privilegiada** em proveito próprio ou de terceiro;",
      "- exercer atividade com **relação de negócio** com parte interessada em decisão do agente ou de seu colegiado;",
      "- exercer atividade **incompatível** com as atribuições do cargo;",
      "- atuar, **mesmo informalmente**, como procurador, consultor, assessor ou intermediário de interesses privados em órgãos públicos;",
      "- praticar ato em benefício de **pessoa jurídica de que participe** ele ou **parentes até o terceiro grau**;",
      "- receber **presentes** de quem tenha interesse em decisão, fora dos limites do regulamento;",
      "- prestar serviços, ainda que eventuais, a **empresa regulada, fiscalizada ou controlada** pelo órgão a que está vinculado.",
      "",
      "### Depois do exercício (art. 6º): a quarentena",
      "- **A qualquer tempo**: vedado usar ou divulgar informação privilegiada.",
      "- **Por 6 meses**, salvo autorização da **CEP ou da CGU**: prestar serviços a quem teve relacionamento relevante; aceitar cargo de administrador ou conselheiro, ou vínculo profissional, em área relacionada ao cargo; celebrar contratos com o órgão a que esteve vinculado; **intervir em favor de interesse privado** perante o órgão onde atuou.",
      "",
      "### Quem decide (arts. 8º e 9º)",
      "- **CEP** (Comissão de Ética Pública): Ministros, cargos de natureza especial e dirigentes máximos de entidades.",
      "- **CGU**: os demais.",
      "- O agente **consulta** em caso de dúvida e pode obter **autorização** para atividade privada quando não há conflito, ou ele é irrelevante. Deve apresentar **declaração anual** de patrimônio, participações societárias e atividades, e comunicar por escrito atividade privada pretendida.",
      "",
      "### Sanções (art. 12)",
      "Os atos dos arts. 5º e 6º configuram **improbidade administrativa** (Lei 8.429/1992, art. 11), quando não se enquadrarem nos arts. 9º e 10 dessa lei, **sem prejuízo da demissão** (Lei 8.112) ou medida equivalente.",
    ]),
    atencao("A **quarentena** é de **6 meses**, e não de \"1 ano\" ou \"2 anos\". Ela não é pena: é restrição **posterior à saída**, e a CEP ou a CGU podem **dispensá-la** quando não houver conflito. A lei não prevê remuneração compensatória (o dispositivo foi vetado)."),
    q("A quarentena prevista na Lei 12.813/2013 para quem deixa o cargo ou emprego é de:", ["1 mês", "3 meses", "6 meses", "1 ano", "2 anos"], "C", "Art. 6º, II."),
    ce("Para a configuração do conflito de interesses, é necessário que haja lesão ao patrimônio público ou o recebimento de vantagem pelo agente.", "Errado", "Art. 4º, § 2º: a ocorrência independe de lesão ao patrimônio público e de recebimento de vantagem."),
    q("Configura conflito de interesses, durante o exercício do cargo, segundo a Lei 12.813/2013:", ["atuar, ainda que informalmente, como procurador ou intermediário de interesses privados junto a órgãos públicos", "ocupar cargo em comissão sem concurso", "declarar o patrimônio anualmente", "consultar a CEP em caso de dúvida", "aposentar-se por tempo de contribuição"], "A", "Art. 5º, IV."),
    ce("Os atos que configuram conflito de interesses nos arts. 5º e 6º constituem improbidade administrativa, sem prejuízo de demissão.", "Certo", "Art. 12."),
  ]);

  E("normas-correlatas/sistema-de-gestao-da-etica-decreto-6-029-2007", [
    aprofundar([
      "### Objetivo (art. 1º)",
      "Promover **atividades que dispõem sobre a conduta ética** no Poder Executivo Federal, integrando órgãos e ações, apoiando políticas com transparência e acesso à informação e articulando ações de incentivo.",
      "",
      "### Quem integra (art. 2º)",
      "1. **Comissão de Ética Pública (CEP)**;",
      "2. as **Comissões de Ética** de que trata o Decreto 1.171/1994;",
      "3. as demais comissões de ética e equivalentes dos órgãos e entidades do Executivo Federal.",
      "",
      "### A CEP (art. 3º)",
      "- **Sete membros**, com idoneidade moral, reputação ilibada e notória experiência em administração pública, designados pelo **Presidente da República**.",
      "- Mandatos de **três anos, não coincidentes**, com **uma única recondução**. O cargo **não é remunerado**. O Presidente tem **voto de qualidade**.",
      "- **Competências** (art. 4º): instância **consultiva**; administrar o **Código de Conduta da Alta Administração Federal** (inclusive apurar condutas); dirimir dúvidas sobre o Código de Ética Profissional; **coordenar, avaliar e supervisionar** o Sistema.",
      "",
      "### Comissões setoriais (arts. 5º e 7º)",
      "- **Três titulares e três suplentes**, servidores ou empregados do quadro permanente, designados pelo dirigente máximo.",
      "- **Competências**: instância **consultiva** no órgão; **aplicar o Código de Ética Profissional**, apurando condutas por denúncia ou de ofício; **representar o órgão na Rede de Ética**; supervisionar o Código de Conduta da Alta Administração e **comunicar à CEP** possíveis descumprimentos.",
      "",
      "### Rede de Ética (art. 9º)",
      "Reúne os representantes das comissões para **cooperação técnica** e avaliação da gestão da ética, sob **coordenação da CEP**, **pelo menos uma vez por ano**.",
      "",
      "### Procedimento (arts. 10 a 13 e 20)",
      "- Celeridade, **proteção da honra e da imagem** do investigado e da **identidade do denunciante**, se ele desejar.",
      "- O investigado tem **10 dias**, contados da notificação, para manifestação escrita; novas provas dão nova oportunidade de **10 dias**.",
      "- O procedimento é **reservado** até a conclusão. Depois da deliberação, deixa de ser reservado.",
      "- **Qualquer cidadão, agente público, pessoa jurídica de direito privado, associação ou entidade de classe** pode provocar a atuação da CEP ou das comissões (art. 11).",
      "- **Agente público**: quem presta serviço permanente, temporário, excepcional ou eventual à administração federal direta e indireta, **ainda que sem remuneração**.",
      "- Sanções possíveis: sugestão de **exoneração** de cargo ou função de confiança, **devolução ao órgão de origem**, encaminhamento à **CGU** ou ao Sistema de Correição e recomendação de procedimento administrativo.",
    ]),
    {
      tipo: "tabela",
      titulo: "CEP × Comissão de Ética do órgão",
      cabecalho: ["Ponto", "CEP", "Comissão de Ética do órgão"],
      linhas: [
        ["Membros", "7, designados pelo Presidente da República", "3 titulares e 3 suplentes, designados pelo dirigente máximo"],
        ["Mandato", "3 anos, não coincidentes, 1 recondução", "3 anos, não coincidentes"],
        ["Remuneração", "Não remunerado", "Servidores do quadro; sem função remunerada própria"],
        ["Foco", "Coordena e supervisiona o Sistema; Código de Conduta da Alta Administração", "Aplica o Código de Ética Profissional no órgão"],
      ],
    },
    q("A Comissão de Ética Pública é integrada por:", ["três membros, indicados pelo Congresso", "cinco membros, eleitos pelos servidores", "sete membros, designados pelo Presidente da República, com mandatos de três anos e uma única recondução", "dez membros, vitalícios", "dois membros e um suplente"], "C", "Decreto 6.029/2007, art. 3º."),
    ce("Compete às Comissões de Ética dos órgãos aplicar o Código de Ética Profissional, apurando condutas por denúncia ou de ofício.", "Certo", "Art. 7º."),
    q("A Rede de Ética reúne-se, sob a coordenação da CEP, no mínimo:", ["uma vez por mês", "uma vez por semestre", "uma vez por ano", "uma vez a cada três anos", "somente quando convocada pelo Congresso"], "C", "Art. 9º, parágrafo único."),
  ]);

  /* ================= REALIDADE BRASILEIRA ================= */

  G("realidade-brasileira/atualidades-politica-economia-e-sociedade", [
    aprofundar([
      "### Como estudar atualidades sem se perder",
      "Questões de atualidades pedem **informação datada**: o que este caderno traz de estável é o **método** e a **estrutura** dos temas. Os fatos do momento **devem ser conferidos** em fonte atual antes da prova.",
      "",
      "### Estrutura de estudo (por eixo)",
      "1. **Política e Estado**: eleições e calendário eleitoral, relação entre os Poderes, federalismo, reformas em debate (tributária, administrativa), orçamento público e arcabouço fiscal.",
      "2. **Economia**: inflação (IPCA), juros (Selic e o Copom), PIB, câmbio, emprego (PNAD Contínua), balança comercial.",
      "3. **Sociedade**: saúde (SUS), educação (PNE, ENEM), segurança pública, previdência e assistência social, migração, violência contra a mulher.",
      "4. **Meio ambiente e clima**: desmatamento, matriz energética, conferências do clima (COP), transição energética.",
      "5. **Ciência, tecnologia e comunicação**: inteligência artificial, proteção de dados (LGPD), segurança digital, desinformação.",
      "6. **Mundo**: BRICS, G20, Mercosul, ONU, conflitos internacionais e seus efeitos na economia e no comércio.",
      "",
      "### Quem produz os números",
      "- **IBGE**: censo, PNAD, IPCA, PIB.",
      "- **Banco Central**: Selic, câmbio, inflação, focus.",
      "- **Tesouro Nacional** e **Ministério da Fazenda**: contas públicas.",
      "- **Ministérios e agências** (Anvisa, ANEEL, INEP, IPEA, DIEESE): dados setoriais.",
      "",
      "### Técnica",
      "Monte uma **linha do tempo** de cada eixo para os últimos 12 a 24 meses. A banca costuma cobrar **o fato mais recente da pauta** e o **conceito por trás** dele (por exemplo, o que é Selic e o que ela afeta).",
    ]),
    atencao("O que mudou depois da última revisão deste caderno **não está aqui**. Antes da prova, releia as notícias dos **últimos 12 meses** em fontes oficiais e em jornais de referência, e confira o **edital** para o recorte pedido.", "Conferir"),
    q("A taxa básica de juros da economia brasileira (Selic) é definida pelo:", ["Tesouro Nacional", "Comitê de Política Monetária (Copom) do Banco Central", "Congresso Nacional", "Ministério da Fazenda", "IBGE"], "B", "O Copom define a meta da Selic, em reuniões periódicas."),
    ce("O IPCA, calculado pelo IBGE, é o índice oficial de inflação do Brasil.", "Certo", "O IPCA é o índice usado nas metas de inflação."),
    q("A PNAD Contínua, do IBGE, é a principal pesquisa que mede no Brasil:", ["o PIB trimestral", "a taxa de desemprego e outras características do mercado de trabalho", "a balança comercial", "a taxa de juros", "o orçamento da União"], "B", "A PNAD Contínua acompanha mercado de trabalho, rendimento e outros temas."),
  ]);

  G("realidade-brasileira/desafios-do-estado-brasileiro", [
    aprofundar([
      "### Federalismo",
      "A **República Federativa do Brasil** é formada pela **união indissolúvel** de **União, Estados, Distrito Federal e Municípios**, todos **autônomos** (CF, art. 18). O desafio recorrente é a **distribuição de competências e de receitas** (federalismo fiscal): os Municípios assumem serviços (saúde, educação básica, assistência) com receita própria limitada e dependem de **transferências**, como o FPM e o FPE.",
      "",
      "### Capacidade estatal",
      "É a **aptidão do Estado de formular e implementar políticas** de forma eficaz. Depende de quadros qualificados, recursos, coordenação entre órgãos e instrumentos de controle. Problemas clássicos: **fragmentação**, **sobreposição** de políticas, baixa **avaliação** de resultados.",
      "",
      "### Desigualdade",
      "A desigualdade de **renda**, **raça**, **gênero** e **território** marca o país. O **índice de Gini** mede a concentração de renda (0 = igualdade perfeita; 1 = máxima desigualdade). Programas de transferência de renda e a política de valorização do salário mínimo são instrumentos de redução.",
      "",
      "### Contas públicas",
      "O desafio é equilibrar **gasto, receita e dívida pública**, com regras fiscais (Lei de Responsabilidade Fiscal, regra do **teto de gastos**, hoje substituída por um **arcabouço fiscal**, **conferir** o desenho atual). O alto peso de **despesas obrigatórias** (previdência, pessoal, saúde e educação) reduz o espaço para investimento.",
      "",
      "### Confiança nas instituições e controle",
      "Corrupção, transparência e **controle social** pesam na confiança. Instrumentos: **Lei de Acesso à Informação** (Lei 12.527/2011), **Portal da Transparência**, controle interno (CGU), controle externo (TCU) e participação social.",
      "",
      "### Reforma do Estado",
      "Debate sobre o tamanho do Estado, a **eficiência** e a **digitalização** dos serviços. A **Lei 14.129/2021** (Governo Digital) aposta em serviços digitais e na simplificação.",
    ]),
    atencao("Para a prova, associe cada desafio ao **instrumento** e ao **órgão**: transparência → LAI e Portal da Transparência; controle externo → TCU; contas → LRF e arcabouço fiscal; desigualdade → Gini e políticas de renda.", "Dica"),
    q("Segundo a Constituição Federal, a organização político-administrativa da República Federativa do Brasil compreende:", ["a União, os Estados, o Distrito Federal e os Municípios, todos autônomos", "apenas a União e os Estados", "a União e os Municípios, com Estados subordinados", "a União, que delega a autonomia aos demais", "os Estados, que formam a União"], "A", "CF, art. 18."),
    ce("O índice de Gini mede a concentração de renda: quanto mais próximo de 1, maior a desigualdade.", "Certo", "O valor 0 representa igualdade perfeita e 1, desigualdade máxima."),
    q("A Lei de Acesso à Informação, Lei 12.527/2011, tem por objetivo:", ["regular o sigilo de todas as informações públicas", "garantir o direito de acesso à informação, com a publicidade como regra e o sigilo como exceção", "criar o Portal da Transparência apenas", "regulamentar a propaganda eleitoral", "regular o processo disciplinar"], "B", "A transparência é a regra; o sigilo, a exceção."),
  ]);

  G("realidade-brasileira/desenvolvimento-sustentavel-e-meio-ambiente", [
    aprofundar([
      "### Constituição (art. 225)",
      "Todos têm direito ao **meio ambiente ecologicamente equilibrado**, bem de **uso comum do povo e essencial à sadia qualidade de vida**. O **Poder Público e a coletividade** têm o dever de defendê-lo e preservá-lo **para as presentes e futuras gerações**. Os **biomas** Floresta Amazônica, Mata Atlântica, Serra do Mar, Pantanal Mato-Grossense e Zona Costeira são **patrimônio nacional** (§ 4º), com uso dentro de condições que assegurem a preservação.",
      "",
      "### Desenvolvimento sustentável",
      "Conceito do **Relatório Brundtland** (1987, \"Nosso Futuro Comum\"): atender às necessidades do presente **sem comprometer a capacidade das gerações futuras** de atender às suas. Equilibra três dimensões: **econômica, social e ambiental**.",
      "",
      "### Agenda 2030 e os 17 ODS",
      "Adotada na **ONU em 2015**, com **17 Objetivos de Desenvolvimento Sustentável** e **169 metas**, para serem alcançados até **2030**. Exemplos: **ODS 1** erradicação da pobreza; **ODS 3** saúde e bem-estar; **ODS 4** educação de qualidade; **ODS 5** igualdade de gênero; **ODS 6** água potável e saneamento; **ODS 13** ação contra a mudança global do clima; **ODS 16** paz, justiça e instituições eficazes.",
      "",
      "### Acordo de Paris (2015)",
      "Tratado no âmbito da Convenção do Clima da ONU. Meta: manter o aumento da temperatura média global **bem abaixo de 2 °C** em relação aos níveis pré-industriais, **buscando limitar a 1,5 °C**. Cada país apresenta sua **contribuição nacionalmente determinada (NDC)**.",
      "",
      "### Instrumentos brasileiros",
      "**Política Nacional do Meio Ambiente** (Lei 6.938/1981, que criou o **SISNAMA**), **Código Florestal** (Lei 12.651/2012), **Política Nacional de Resíduos Sólidos** (Lei 12.305/2010) e **licenciamento ambiental**. O **princípio do poluidor-pagador** e a **responsabilidade ambiental objetiva** são centrais.",
    ]),
    atencao("A Agenda 2030 tem **17 ODS** e **169 metas**. O Acordo de Paris fala em **bem abaixo de 2 °C**, **buscando 1,5 °C**. Para o estado atual das metas e das conferências do clima, **confira fontes recentes**.", "Conferir"),
    q("O art. 225 da Constituição Federal estabelece que o meio ambiente ecologicamente equilibrado é:", ["dever apenas do Poder Público", "direito de todos e dever do Poder Público e da coletividade de defendê-lo e preservá-lo para as presentes e futuras gerações", "direito apenas das gerações futuras", "responsabilidade exclusiva dos Estados", "dever exclusivo das empresas"], "B", "CF, art. 225, caput."),
    ce("A Agenda 2030, adotada pela ONU em 2015, contém 17 Objetivos de Desenvolvimento Sustentável.", "Certo", "Os 17 ODS têm 169 metas."),
    q("O Acordo de Paris, firmado em 2015, tem como meta central manter o aumento da temperatura média global:", ["abaixo de 5 °C", "bem abaixo de 2 °C, buscando limitar a 1,5 °C em relação aos níveis pré-industriais", "em 3 °C, no máximo", "estável, sem metas numéricas", "igual a 0,5 °C"], "B", "Metas do Acordo de Paris."),
    q("O ODS 6 da Agenda 2030 trata de:", ["educação de qualidade", "água potável e saneamento", "igualdade de gênero", "fome zero", "paz e justiça"], "B", "ODS 6: água potável e saneamento."),
  ]);

  G("realidade-brasileira/diversidade-inclusao-e-direitos-humanos", [
    aprofundar([
      "### Igualdade formal × material",
      "- **Igualdade formal**: todos são iguais perante a lei (CF, art. 5º, caput).",
      "- **Igualdade material**: tratar desigualmente os desiguais, na medida de sua desigualdade, para reduzir distorções. Fundamenta as **ações afirmativas**.",
      "",
      "### Instrumentos legais e normativos",
      "- **Estatuto da Igualdade Racial** (Lei 12.288/2010).",
      "- **Lei de Cotas nas universidades federais** (Lei 12.711/2012, alterada pela Lei 14.723/2023).",
      "- **Cotas raciais em concursos federais** (Lei 12.990/2014; **conferir** a legislação atual quanto ao percentual e à vigência).",
      "- **Estatuto da Pessoa com Deficiência / Lei Brasileira de Inclusão** (Lei 13.146/2015).",
      "- **Estatuto do Idoso** (Lei 10.741/2003).",
      "- **Estatuto da Criança e do Adolescente** (Lei 8.069/1990).",
      "- **Lei Maria da Penha** (Lei 11.340/2006) e **Lei do Feminicídio** (Lei 13.104/2015).",
      "- **Racismo e injúria racial**: Lei 7.716/1989 (crimes de racismo); a injúria racial passou a ser crime de racismo por alteração de 2023 (**conferir**).",
      "",
      "### Direitos humanos",
      "**Declaração Universal dos Direitos Humanos** (ONU, 1948). Os direitos humanos são **universais, indivisíveis, interdependentes e inter-relacionados**. A CF de 1988 prioriza a **dignidade da pessoa humana** (art. 1º, III) e prevê a **prevalência dos direitos humanos** nas relações internacionais (art. 4º, II).",
      "",
      "### Inclusão no serviço público",
      "A CF reserva **percentual de cargos e empregos públicos às pessoas com deficiência** (art. 37, VIII), regulamentado em lei (na esfera federal, **até 20%** das vagas, Lei 8.112, art. 5º, § 2º).",
    ]),
    atencao("Leis de cotas, percentuais e tipificação penal de condutas discriminatórias foram **alterados nos últimos anos**. Para a prova, **confira a versão vigente** de cada norma que o edital citar.", "Conferir"),
    q("O princípio segundo o qual se deve tratar desigualmente os desiguais, na medida de sua desigualdade, para reduzir distorções, corresponde à:", ["igualdade formal", "igualdade material", "isonomia tributária", "legalidade estrita", "impessoalidade"], "B", "A igualdade material fundamenta as ações afirmativas."),
    ce("A Declaração Universal dos Direitos Humanos foi adotada pela ONU em 1948.", "Certo", "É o marco internacional de proteção aos direitos humanos."),
    q("A Lei 13.146/2015, que institui o Estatuto da Pessoa com Deficiência, também é conhecida como:", ["Lei Maria da Penha", "Lei Brasileira de Inclusão", "Lei de Cotas", "Estatuto do Idoso", "Lei do Feminicídio"], "B", "Lei Brasileira de Inclusão da Pessoa com Deficiência."),
    ce("A Lei Maria da Penha é a Lei 11.340/2006.", "Certo", "Cria mecanismos para coibir a violência doméstica e familiar contra a mulher."),
  ]);

  /* ================= GESTÃO PÚBLICA FEDERAL ================= */

  G("gestao-publica-federal/estrutura-do-poder-executivo-federal", [
    aprofundar([
      "### O Poder Executivo federal",
      "O Poder Executivo da União é exercido pelo **Presidente da República**, auxiliado pelos **Ministros de Estado** (CF, art. 76). A **Presidência da República** é composta por órgãos de assessoramento direto e pela Casa Civil, a Secretaria de Governo e outros órgãos definidos em lei. A organização básica da Presidência e dos Ministérios é fixada em lei; hoje, pela **Lei 14.600/2023** (**conferir** a composição atual).",
      "",
      "### Administração direta e indireta (Decreto-Lei 200/1967)",
      "- **Administração direta**: serviços integrados na estrutura da **Presidência da República e dos Ministérios**. Não tem personalidade jurídica própria.",
      "- **Administração indireta**: entidades com **personalidade jurídica própria**, vinculadas a um Ministério:",
      "  - **autarquias** (pessoa jurídica de direito público);",
      "  - **fundações públicas** (de direito público ou privado, conforme o caso);",
      "  - **empresas públicas** (capital 100% público; qualquer forma societária);",
      "  - **sociedades de economia mista** (forma de **S.A.**, controle majoritário do poder público).",
      "",
      "### Princípios fundamentais do DL 200/1967",
      "**Planejamento, coordenação, descentralização, delegação de competência e controle.** Entre as funções de **supervisão ministerial**, o Ministro de Estado supervisiona a Administração indireta vinculada ao Ministério, sem hierarquia.",
      "",
      "### Descentralização × desconcentração",
      "- **Descentralização**: transferência da competência para **outra pessoa** (outro ente ou entidade).",
      "- **Desconcentração**: distribuição de competência **dentro da mesma pessoa jurídica**, entre órgãos.",
    ]),
    atencao("Existe **vinculação** (supervisão ministerial, sem hierarquia) entre os Ministérios e a Administração indireta, e **subordinação** (hierarquia) apenas **dentro** da Administração direta. A banca explora a diferença."),
    q("A Administração indireta federal é composta por:", ["Ministérios e Secretarias", "autarquias, fundações públicas, empresas públicas e sociedades de economia mista", "apenas as autarquias", "órgãos da Presidência da República", "os três Poderes"], "B", "DL 200/1967, art. 4º, II."),
    ce("A desconcentração é a distribuição interna de competências entre órgãos da mesma pessoa jurídica.", "Certo", "Na descentralização, a competência passa a outra pessoa."),
    q("Segundo o Decreto-Lei 200/1967, entre os princípios fundamentais a que a Administração Federal deve obedecer **não** se inclui:", ["planejamento", "coordenação", "descentralização", "delegação de competência", "hereditariedade"], "E", "Os princípios são planejamento, coordenação, descentralização, delegação de competência e controle."),
    ce("As sociedades de economia mista são constituídas sob a forma de sociedade anônima.", "Certo", "Característica prevista no DL 200/1967 e na Lei 13.303/2016."),
  ]);

  G("gestao-publica-federal/governo-digital-lei-14-129-2021", [
    aprofundar([
      "### Objeto (Lei 14.129/2021)",
      "Estabelece **princípios, regras e instrumentos** para o **Governo Digital** e para o aumento da **eficiência pública**, especialmente por meio da **desburocratização**, da **inovação**, da **transformação digital** e da **participação do cidadão**.",
      "",
      "### Princípios e diretrizes que mais caem",
      "- **Desburocratização, modernização, fortalecimento e simplificação** da relação do Poder Público com a sociedade.",
      "- **Transparência** na execução dos serviços públicos e **monitoramento** da qualidade dos serviços.",
      "- **Incentivo à participação social** (inclusive por meios digitais) e **proteção de dados pessoais** (LGPD).",
      "- **Prestação digital dos serviços**, com **acessibilidade**, **linguagem clara** e **consideração de pessoas sem acesso** à internet (inclusão digital).",
      "- **Interoperabilidade** de sistemas e **dados abertos** por padrão.",
      "- **Não exigência de documentos** que o Poder Público já possui: o cidadão **não deve apresentar** de novo informação que a Administração já detém.",
      "",
      "### Instrumentos",
      "- **gov.br**: plataforma única de acesso, com **conta única** (níveis bronze, prata e ouro), assinatura eletrônica e serviços digitais.",
      "- **Plataformas de governo digital**, **Carta de Serviços ao Usuário** e **avaliação contínua** pelos usuários.",
      "- **Dados abertos**: dados públicos disponíveis em formato aberto e legível por máquina.",
      "- **Interoperabilidade** e **identificação digital** (Cadastro de Pessoas Físicas como identificador único).",
      "",
      "### Quem se sujeita",
      "A lei aplica-se à **administração pública direta e indireta de todos os Poderes da União**, e aos **demais entes** em temas que a própria lei estende (**conferir** o alcance para Estados e Municípios).",
    ]),
    q("Segundo a Lei 14.129/2021, o Poder Público deve, como diretriz do governo digital:", ["exigir do cidadão a reapresentação de documentos que já detém", "não exigir do cidadão a apresentação de documentos e informações que o Poder Público já possua", "restringir o acesso a dados públicos", "abolir os serviços presenciais", "cobrar taxa pelos serviços digitais"], "B", "A lei veda a exigência de dados já disponíveis à Administração."),
    ce("Os dados abertos e a interoperabilidade de sistemas são diretrizes do governo digital.", "Certo", "Estão previstos na Lei 14.129/2021."),
    q("A plataforma gov.br é, no governo digital federal, o:", ["canal de acesso único aos serviços públicos digitais, com conta única", "sistema de licitações", "portal exclusivo do Poder Judiciário", "banco de dados do Banco Central", "sistema de protocolo físico"], "A", "É a plataforma central de acesso e identidade digital."),
  ]);

  G("gestao-publica-federal/politicas-publicas-ciclo-e-avaliacao", [
    aprofundar([
      "### O que é política pública",
      "Conjunto de **decisões e ações** do Estado, com a participação (ou não) de atores privados, voltadas a **enfrentar problemas coletivos**. Pode ser **distributiva, redistributiva, regulatória ou constitutiva** (tipologia de Lowi).",
      "",
      "### Ciclo (modelo de Secchi, simplificado)",
      "1. **Identificação do problema**: percebe-se a distância entre a situação atual e a desejada.",
      "2. **Formação da agenda**: o problema entra na lista de prioridades do governo.",
      "3. **Formulação de alternativas**: soluções possíveis, com custos e benefícios.",
      "4. **Tomada de decisão**: escolha da alternativa.",
      "5. **Implementação**: a política vai a campo, em geral pela burocracia de ponta (\"burocratas de nível de rua\").",
      "6. **Avaliação**: mede-se o resultado.",
      "7. **Extinção** (ou continuidade, ou reformulação).",
      "",
      "### Tipos de avaliação",
      "- **Ex ante**: **antes** da implantação (diagnóstico, viabilidade).",
      "- **Monitoramento ou *in itinere***: **durante** a execução, para corrigir rumos.",
      "- **Ex post**: **depois**, para verificar resultados e impactos.",
      "",
      "### Critérios de avaliação",
      "- **Eficiência**: fazer bem com o menor recurso (meios).",
      "- **Eficácia**: cumprir as **metas** previstas.",
      "- **Efetividade**: **impacto real** na sociedade, mudança sustentável na realidade (resultado de longo prazo).",
      "- **Economicidade**, **equidade** e **transparência** também entram na análise.",
    ]),
    atencao("Eficiência (**como**: custo e meios), eficácia (**metas atingidas**) e efetividade (**impacto real**). A banca descreve o conceito e pede o nome."),
    q("A avaliação de uma política pública realizada antes da sua implantação, para estimar viabilidade e impactos, denomina-se:", ["ex ante", "ex post", "in itinere", "de efetividade", "de monitoramento"], "A", "Avaliação ex ante."),
    ce("A efetividade de uma política pública refere-se ao impacto real e sustentável gerado na sociedade, para além do cumprimento das metas.", "Certo", "A eficácia mede o cumprimento de metas; a efetividade, o impacto."),
    q("A fase do ciclo de políticas públicas na qual a solução escolhida é posta em prática, em geral por burocratas de ponta, é a:", ["formação da agenda", "tomada de decisão", "implementação", "extinção", "identificação do problema"], "C", "A implementação transforma a decisão em ação."),
    ce("Na tipologia de Lowi, as políticas regulatórias são as que estabelecem ordens, proibições e padrões de comportamento.", "Certo", "Distributivas, redistributivas, regulatórias e constitutivas formam a tipologia."),
  ]);
})();
