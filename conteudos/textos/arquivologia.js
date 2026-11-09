/* Bloco A · Arquivologia (também usada no Bloco C por referência). */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-a", "arquivologia", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const L = {
    l8159: { titulo: "Lei 8.159/1991 · Planalto", url: "https://www.planalto.gov.br/ccivil_03/leis/l8159.htm" },
    l12682: { titulo: "Lei 12.682/2012 (digitalização) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12682.htm" },
    d10278: { titulo: "Decreto 10.278/2020 (requisitos da digitalização) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/decreto/d10278.htm" },
    conarq: { titulo: "Conselho Nacional de Arquivos (CONARQ) · resoluções e e-ARQ Brasil", url: "https://www.gov.br/conarq/pt-br" },
  };
  const CF = "Conceitos Fundamentais";
  const GD = "Gestão de Documentos";
  const AP = "Arquivamento e Preservação";
  const LA = "Legislação Arquivística";

  A(CF, "Arquivo, documento e informação", {
    resumo: "O que é arquivo, documento de arquivo e a diferença para biblioteca e museu.",
    incidencia: "alta",
    fontes: [L.l8159],
    blocos: [
      { tipo: "lei", titulo: "Definição legal de arquivo", texto: ["Art. 2º Consideram-se arquivos, para os fins desta Lei, os conjuntos de documentos produzidos e recebidos por órgãos públicos, instituições de caráter público e entidades privadas, em decorrência do exercício de atividades específicas, bem como por pessoa física, qualquer que seja o suporte da informação ou a natureza dos documentos."], referencia: "Lei 8.159/1991, art. 2º", url: L.l8159.url },
      { tipo: "texto", texto: [
        "- **Informação**: elemento de conhecimento registrável.",
        "- **Documento**: informação registrada em um **suporte** (papel, filme, meio digital).",
        "- **Documento de arquivo**: produzido ou recebido no curso de uma **atividade**, como prova ou registro dela. Ele vale pelo **contexto** de produção, não isoladamente.",
        "- A palavra **arquivo** também nomeia a instituição, o prédio e o móvel onde se guardam documentos."
      ]},
      { tipo: "tabela", titulo: "Arquivo × biblioteca × museu", cabecalho: ["", "Arquivo", "Biblioteca", "Museu"], linhas: [
        ["Origem", "produzido naturalmente pelas atividades", "colecionado (comprado, doado)", "colecionado"],
        ["Finalidade", "administrativa, jurídica e depois histórica", "cultural, técnica, científica", "cultural, educativa"],
        ["Exemplares", "geralmente únicos", "múltiplos", "únicos"],
        ["Entrada", "por recolhimento e transferência", "por compra, doação, permuta", "por compra, doação"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "O que distingue o documento de arquivo é:", alternativas: ["estar em papel", "ser produzido ou recebido no exercício de uma atividade, como seu registro", "ter valor histórico desde a criação", "ser adquirido por compra", "existir em vários exemplares"], correta: "B", comentario: "O documento de arquivo nasce da atividade e serve de prova dela, qualquer que seja o suporte." }
    ]
  });

  A(CF, "Princípios arquivísticos", {
    resumo: "Proveniência, organicidade, unicidade, indivisibilidade e cumulatividade.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Os princípios", cabecalho: ["Princípio", "Significa"], linhas: [
        ["Proveniência (respeito aos fundos)", "documentos de uma entidade não se misturam com os de outra; organiza-se pela origem"],
        ["Respeito à ordem original", "manter a organização dada pela entidade produtora"],
        ["Organicidade", "os documentos refletem a estrutura, as funções e as atividades de quem os produziu; relacionam-se entre si"],
        ["Unicidade", "cada documento de arquivo é único no seu contexto, mesmo que haja cópias"],
        ["Indivisibilidade (integridade)", "o fundo não deve ser dispersado, mutilado ou ter acréscimos indevidos"],
        ["Cumulatividade", "o arquivo se forma de modo natural e progressivo, conforme as atividades acontecem"]
      ]},
      { tipo: "dica", texto: "**Proveniência** é o princípio mais importante e mais cobrado: \"respeito aos fundos\" = não misturar arquivos de origens diferentes." },
      { tipo: "questao", banca: Q, enunciado: "O princípio que determina que os documentos de uma instituição não sejam misturados com os de outra é o da:", alternativas: ["unicidade", "proveniência", "cumulatividade", "organicidade", "pertinência temática"], correta: "B", comentario: "Proveniência ou respeito aos fundos." }
    ]
  });

  A(CF, "Classificação dos arquivos e dos documentos", {
    resumo: "Arquivos por entidade, estágio e extensão; documentos por gênero, espécie, tipo e natureza.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Classificação dos arquivos", cabecalho: ["Critério", "Tipos"], linhas: [
        ["Entidade mantenedora", "público (federal, estadual, municipal) ou privado (pessoa física ou jurídica)"],
        ["Estágio de evolução", "corrente, intermediário, permanente"],
        ["Extensão de atuação", "setorial (nos setores) ou geral/central (centraliza)"],
        ["Natureza dos documentos", "especial (suportes diferentes: fotos, filmes) ou especializado (área técnica: arquivo médico, de engenharia)"]
      ]},
      { tipo: "tabela", titulo: "Classificação dos documentos", cabecalho: ["Critério", "Exemplos"], linhas: [
        ["Gênero", "textual, cartográfico (mapas), iconográfico (fotos, desenhos), filmográfico, sonoro, micrográfico, digital/informático"],
        ["Espécie", "configuração do documento pela informação: ata, ofício, certidão, relatório, requerimento"],
        ["Tipo", "espécie + atividade: ata de reunião de diretoria, certidão de nascimento"],
        ["Natureza do assunto", "ostensivo (sem restrição) ou sigiloso"],
        ["Forma", "original, cópia, minuta, rascunho"],
        ["Formato", "livro, ficha, folha, caderno, mapa, rolo"]
      ]},
      { tipo: "atencao", texto: "Não confunda **espécie** (\"ata\") com **tipo** (\"ata de reunião do conselho\"). O tipo junta a espécie à atividade que a gerou." },
      { tipo: "questao", banca: Q, enunciado: "Uma fotografia de um evento oficial pertence ao gênero documental:", alternativas: ["textual", "cartográfico", "iconográfico", "sonoro", "filmográfico"], correta: "C", comentario: "Imagens fixas (fotos, desenhos, gravuras) são iconográficas." }
    ]
  });

  A(GD, "Teoria das três idades", {
    resumo: "Arquivo corrente, intermediário e permanente; valor primário e secundário.",
    incidencia: "alta",
    fontes: [L.l8159],
    blocos: [
      { tipo: "svg", titulo: "O ciclo de vida do documento", legenda: "Transferência leva do corrente ao intermediário; recolhimento leva ao permanente. A eliminação só ocorre conforme a tabela de temporalidade.", codigo: `
<svg viewBox="0 0 580 210" role="img" aria-label="Três caixas em sequência: corrente, intermediário e permanente, com setas de transferência e recolhimento, e uma saída para eliminação">
  <defs><marker id="seta-3i" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="pt"></path></marker></defs>
  <rect class="fd" x="10" y="40" width="150" height="80" rx="10"></rect><text class="tx tx-t" x="85" y="72" text-anchor="middle">1ª Corrente</text><text class="tx-m" x="85" y="96" text-anchor="middle">uso frequente</text>
  <rect class="fd" x="215" y="40" width="150" height="80" rx="10"></rect><text class="tx tx-t" x="290" y="72" text-anchor="middle">2ª Intermediário</text><text class="tx-m" x="290" y="96" text-anchor="middle">uso eventual</text>
  <rect class="fd-d" x="420" y="40" width="150" height="80" rx="10"></rect><text class="tx tx-t" x="495" y="72" text-anchor="middle">3ª Permanente</text><text class="tx-m" x="495" y="96" text-anchor="middle">valor histórico</text>
  <line class="ln-d" x1="160" y1="80" x2="212" y2="80" marker-end="url(#seta-3i)"></line>
  <line class="ln-d" x1="365" y1="80" x2="417" y2="80" marker-end="url(#seta-3i)"></line>
  <text class="tx-m" x="187" y="140" text-anchor="middle">transferência</text>
  <text class="tx-m" x="392" y="140" text-anchor="middle">recolhimento</text>
  <line class="ln" x1="290" y1="122" x2="290" y2="175" marker-end="url(#seta-3i)"></line>
  <text class="tx" x="290" y="198" text-anchor="middle">eliminação (se prevista)</text>
</svg>` },
      { tipo: "tabela", titulo: "As três idades", cabecalho: ["Idade", "Uso", "Valor", "Onde fica"], linhas: [
        ["Corrente", "frequente, em tramitação", "primário (administrativo)", "no setor que produziu ou em arquivo setorial"],
        ["Intermediário", "eventual; aguarda o fim do prazo", "primário", "depósito de armazenamento temporário"],
        ["Permanente", "pesquisa e prova", "**secundário** (histórico, probatório, informativo)", "arquivo permanente/histórico, guarda **definitiva**"]
      ]},
      { tipo: "atencao", texto: "Documentos permanentes são **inalienáveis e imprescritíveis** (Lei 8.159, art. 10): não podem ser vendidos, doados ou perder essa condição com o tempo." },
      { tipo: "questao", banca: Q, enunciado: "A passagem de documentos do arquivo intermediário para o permanente denomina-se:", alternativas: ["transferência", "recolhimento", "eliminação", "arquivamento", "desarquivamento"], correta: "B", comentario: "Corrente → intermediário: transferência. Intermediário (ou corrente) → permanente: recolhimento." }
    ]
  });

  A(GD, "Protocolo: recebimento, registro e tramitação", {
    resumo: "As atividades do protocolo e as operações com processos: juntada, apensação, desentranhamento.",
    incidencia: "alta",
    conferir: "As regras detalhadas de autuação e numeração de processos no Executivo federal estão em portaria específica do Ministério da Gestão. Confira a norma vigente se o edital a citar.",
    blocos: [
      { tipo: "passos", titulo: "Atividades do protocolo", itens: [
        "**Recebimento**: receber a correspondência e separar a oficial da particular.",
        "**Registro**: anotar dados do documento (número, data, remetente, assunto).",
        "**Classificação** e **autuação**: formar o processo, quando for o caso, com capa e número único (NUP).",
        "**Distribuição** e **tramitação**: enviar ao setor competente e controlar o caminho.",
        "**Expedição**: enviar documentos para fora do órgão."
      ]},
      { tipo: "tabela", titulo: "Operações com processos", cabecalho: ["Operação", "O que é"], linhas: [
        ["Juntada por anexação", "união **definitiva** de um processo a outro do mesmo interessado e assunto (prevalece o mais antigo)"],
        ["Juntada por apensação", "união **temporária**, para estudo conjunto; cada processo mantém sua identidade"],
        ["Desapensação", "separar processos apensados"],
        ["Desentranhamento", "retirar folhas ou peças de um processo"],
        ["Desmembramento", "separar parte do processo para formar outro"]
      ]},
      { tipo: "questao", banca: Q, enunciado: "A união temporária de processos para estudo conjunto, mantendo cada um a sua identidade, é a:", alternativas: ["anexação", "apensação", "desentranhamento", "desmembramento", "autuação"], correta: "B", comentario: "Apensação é temporária; anexação é definitiva." }
    ]
  });

  A(GD, "Plano de classificação", {
    resumo: "Organizar os documentos pelas funções e atividades, com códigos.",
    incidencia: "média",
    fontes: [L.conarq],
    conferir: "O código de classificação das atividades-meio do Executivo federal foi atualizado pelo Arquivo Nacional. Confira a versão vigente indicada no edital.",
    blocos: [
      { tipo: "texto", texto: [
        "O **plano (código) de classificação** organiza os documentos conforme as **funções e atividades** do órgão, com códigos numéricos. É feito na fase **corrente** e é a base da gestão documental.",
        "",
        "Usa a lógica **decimal** (de Melvil Dewey): classes, subclasses, grupos e subgrupos.",
        "- **Atividades-meio**: as que dão suporte (pessoal, material, orçamento). Têm código comum ao Executivo federal.",
        "- **Atividades-fim**: as específicas de cada órgão (benefícios no INSS, fiscalização na PRF). Cada órgão elabora o seu."
      ]},
      { tipo: "exemplo", titulo: "Como ler um código", enunciado: "Um código do tipo 020 → 023 → 023.1 indica:", resolucao: ["0 = classe (por exemplo, Administração Geral, atividades-meio).", "02 = subclasse (Pessoal).", "023 = grupo (um assunto de pessoal).", "023.1 = subgrupo (detalhamento)."], resposta: "Do geral para o específico" },
      { tipo: "questao", banca: Q, enunciado: "O plano de classificação de documentos de arquivo deve ser estruturado a partir:", alternativas: ["do tamanho dos documentos", "da ordem alfabética dos remetentes", "das funções e atividades do órgão", "das cores das pastas", "do valor histórico"], correta: "C", comentario: "A classificação arquivística é funcional." }
    ]
  });

  A(GD, "Avaliação e tabela de temporalidade", {
    resumo: "Definir prazos de guarda e destinação final; a eliminação só com autorização.",
    incidencia: "alta",
    fontes: [L.l8159, L.conarq],
    blocos: [
      { tipo: "texto", texto: [
        "**Avaliação** é a análise dos documentos para definir **prazos de guarda** e **destinação final** (eliminação ou guarda permanente). É feita pela **Comissão Permanente de Avaliação de Documentos (CPAD)** do órgão.",
        "",
        "O resultado é a **Tabela de Temporalidade e Destinação de Documentos (TTD)**."
      ]},
      { tipo: "tabela", titulo: "Colunas da tabela de temporalidade", cabecalho: ["Coluna", "Conteúdo"], linhas: [["Assunto / código", "do plano de classificação"], ["Prazo na fase corrente", "ex.: enquanto vigora; 5 anos"], ["Prazo na fase intermediária", "ex.: 47 anos"], ["Destinação final", "**eliminação** ou **guarda permanente**"], ["Observações", "justificativas e regras especiais"]] },
      { tipo: "passos", titulo: "Eliminação de documentos públicos", itens: [
        "Aplicar a tabela de temporalidade.",
        "Elaborar a **listagem de eliminação**.",
        "Obter a **autorização** da instituição arquivística pública na sua esfera (no federal, o **Arquivo Nacional**) — Lei 8.159, art. 9º.",
        "Publicar o **edital de ciência de eliminação**.",
        "Eliminar (fragmentação) e registrar no **termo de eliminação**."
      ]},
      { tipo: "questao", banca: Q, enunciado: "A eliminação de documentos produzidos por órgão público federal depende de:", alternativas: ["decisão do chefe do setor", "autorização da instituição arquivística pública competente", "apenas falta de espaço", "parecer do Tribunal de Contas", "aprovação do Congresso"], correta: "B", comentario: "Lei 8.159/1991, art. 9º." }
    ]
  });

  A(AP, "Métodos de arquivamento", {
    resumo: "Alfabético, geográfico, numérico e ideográfico (por assunto); diretos e indiretos.",
    incidencia: "alta",
    blocos: [
      { tipo: "tabela", titulo: "Métodos básicos", cabecalho: ["Método", "Organiza por", "Direto ou indireto?"], linhas: [
        ["Alfabético", "nome (pessoa, empresa)", "direto"],
        ["Geográfico", "local (estado, cidade)", "direto"],
        ["Numérico simples", "número atribuído ao documento", "indireto (precisa de índice)"],
        ["Numérico cronológico", "número e data", "indireto"],
        ["Dígito terminal", "número lido em grupos de 2 da direita para a esquerda", "indireto"],
        ["Ideográfico (por assunto)", "tema: alfabético (enciclopédico, dicionário) ou numérico (duplex, decimal, unitermo)", "conforme a variação"]
      ], legenda: "Direto: busca-se direto na pasta. Indireto: consulta-se antes um índice." },
      { tipo: "tabela", titulo: "Regras de alfabetação (principais)", cabecalho: ["Regra", "Exemplo de como arquivar"], linhas: [
        ["Pelo último sobrenome, depois o prenome", "Ana Paula Souza → **Souza, Ana Paula**"],
        ["Sobrenomes compostos e com santo ficam juntos", "Castelo Branco, Heitor; Santa Rita, Maria"],
        ["Filho, Júnior, Neto e Sobrinho fazem parte do sobrenome", "Almeida Filho, João"],
        ["Artigos e preposições (de, da, do) são desconsiderados na ordenação", "Ana da Silva → **Silva, Ana da**"],
        ["Títulos (Dr., Prof., Gen.) não contam", "Dr. Pedro Lima → **Lima, Pedro (Dr.)**"]
      ]},
      { tipo: "python", titulo: "Dígito terminal na prática", texto: "O número 345.678 é lido em grupos de 2 a partir da direita: 78 (gaveta), 56 (pasta), 34 (posição).", codigo: `
numeros = [345678, 112278, 909056, 345601]

def digito_terminal(n):
    s = f"{n:06d}"
    return (s[4:6], s[2:4], s[0:2])   # terminal, secundário, primário

for n in sorted(numeros, key=digito_terminal):
    t = digito_terminal(n)
    print(n, "-> grupos", " ".join(t))
`, saida: `
345601 -> grupos 01 56 34
909056 -> grupos 56 90 90
112278 -> grupos 78 22 11
345678 -> grupos 78 56 34
` },
      { tipo: "questao", banca: Q, enunciado: "Na ordenação alfabética de \"Pedro de Oliveira Neto\", a forma correta é:", alternativas: ["Neto, Pedro de Oliveira", "Oliveira Neto, Pedro de", "De Oliveira Neto, Pedro", "Pedro de Oliveira Neto", "Oliveira, Pedro de Neto"], correta: "B", comentario: "Neto faz parte do sobrenome; a partícula \"de\" vai para o final e não conta na ordenação." }
    ]
  });

  A(AP, "Conservação e preservação de documentos", {
    resumo: "Agentes de deterioração, condições ambientais e a diferença entre conservar e restaurar.",
    incidencia: "média",
    conferir: "Faixas ideais de temperatura e umidade variam conforme a fonte e o suporte. Confira os valores na recomendação do CONARQ citada no edital.",
    blocos: [
      { tipo: "tabela", titulo: "Conceitos", cabecalho: ["Termo", "O que é"], linhas: [
        ["Preservação", "conjunto de **políticas** e ações para garantir a integridade e o acesso ao longo do tempo"],
        ["Conservação", "ações para **retardar** a deterioração (higienização, acondicionamento, controle ambiental)"],
        ["Restauração", "intervenção para **recuperar** um documento danificado"]
      ]},
      { tipo: "tabela", titulo: "Agentes de deterioração", cabecalho: ["Tipo", "Exemplos"], linhas: [
        ["Físicos", "luz (especialmente ultravioleta), calor, umidade, variação brusca de temperatura"],
        ["Químicos", "acidez do papel, poluição, tinta ácida, clipes e grampos que oxidam"],
        ["Biológicos", "fungos, cupins, traças, roedores"],
        ["Humanos", "manuseio inadequado, fita adesiva, dobras, alimentos perto do acervo"],
        ["Desastres", "inundação, incêndio"]
      ]},
      { tipo: "dica", texto: "Boas práticas: ambiente estável (sem variações bruscas), pouca luz, limpeza, caixas e pastas neutras (sem acidez), retirar clipes metálicos, usar luvas e não usar fita adesiva." },
      { tipo: "questao", banca: Q, enunciado: "A troca de pastas ácidas por pastas neutras e a retirada de grampos enferrujados são ações de:", alternativas: ["restauração", "conservação", "eliminação", "classificação", "recolhimento"], correta: "B", comentario: "Previnem e retardam a deterioração: conservação." }
    ]
  });

  A(AP, "Microfilmagem e digitalização", {
    resumo: "Valor legal do microfilme, documento digitalizado e os requisitos do Decreto 10.278/2020.",
    incidencia: "média",
    fontes: [L.l12682, L.d10278, L.conarq],
    blocos: [
      { tipo: "texto", texto: [
        "- **Microfilmagem** (Lei 5.433/1968 e Decreto 1.799/1996): o microfilme feito conforme a lei produz os mesmos efeitos legais do original. Durável e de baixo custo de guarda, mas pouco prático para acesso.",
        "- **Digitalização** (Lei 12.682/2012 e **Decreto 10.278/2020**): converte o documento físico em representante digital. O decreto define os requisitos técnicos (como assinatura com certificado digital ICP-Brasil e metadados mínimos) para o documento digitalizado produzir os mesmos efeitos do original.",
        "- O **CONARQ** (Resolução 31/2010) recomenda a digitalização como forma de **ampliar o acesso** e **proteger o original** do manuseio, e não para eliminar documentos permanentes."
      ]},
      { tipo: "atencao", texto: "**Documento digitalizado** nasceu em papel e foi convertido. **Documento nato-digital** já nasceu em meio digital. São coisas diferentes." },
      { tipo: "questao", banca: Q, enunciado: "A norma que estabelece os requisitos técnicos para que documentos digitalizados produzam os mesmos efeitos legais dos originais é o:", alternativas: ["Decreto 1.171/1994", "Decreto 10.278/2020", "Decreto 6.029/2007", "Decreto 3.048/1999", "Decreto 9.203/2017"], correta: "B", comentario: "Decreto 10.278/2020, que regulamenta a Lei 12.682/2012." }
    ]
  });

  A(AP, "Documento arquivístico digital", {
    resumo: "Características, metadados, e-ARQ Brasil, SIGAD e repositório confiável.",
    incidencia: "média",
    fontes: [L.conarq],
    blocos: [
      { tipo: "texto", texto: [
        "**Documento arquivístico digital** é o documento de arquivo codificado em dígitos binários, produzido ou recebido no curso de uma atividade.",
        "",
        "Características a preservar:",
        "- **Autenticidade**: o documento é o que diz ser (identidade + **integridade**: não foi alterado).",
        "- **Confiabilidade**: o conteúdo merece fé (produzido por quem tinha competência, com controle).",
        "- **Organicidade**: relação com os demais documentos e com a atividade.",
        "- **Acessibilidade**: poder ser localizado, recuperado e lido ao longo do tempo."
      ]},
      { tipo: "tabela", titulo: "Instrumentos", cabecalho: ["Sigla", "O que é"], linhas: [
        ["e-ARQ Brasil", "modelo de requisitos do CONARQ para sistemas de gestão arquivística de documentos"],
        ["SIGAD", "Sistema Informatizado de Gestão Arquivística de Documentos (atende ao e-ARQ)"],
        ["RDC-Arq", "Repositório Digital Confiável para documentos arquivísticos (preservação de longo prazo)"],
        ["Metadados", "dados sobre o documento (autor, data, classificação, formato) que garantem contexto e autenticidade"]
      ]},
      { tipo: "atencao", texto: "Um sistema que só guarda arquivos (GED) **não** é necessariamente um SIGAD: falta-lhe a gestão arquivística (classificação, temporalidade, trilhas de auditoria)." },
      { tipo: "questao", banca: Q, enunciado: "A garantia de que um documento digital não sofreu alteração desde sua produção refere-se à:", alternativas: ["acessibilidade", "integridade, parte da autenticidade", "organicidade", "temporalidade", "proveniência"], correta: "B", comentario: "Autenticidade = identidade + integridade." }
    ]
  });

  A(LA, "Lei 8.159/1991 (Política Nacional de Arquivos)", {
    resumo: "Deveres do Poder Público, arquivos públicos e privados, eliminação, CONARQ e SINAR.",
    incidencia: "alta",
    fontes: [L.l8159],
    blocos: [
      { tipo: "lei", titulo: "Art. 1º", texto: ["Art. 1º É dever do Poder Público a gestão documental e a proteção especial a documentos de arquivos, como instrumento de apoio à administração, à cultura, ao desenvolvimento científico e como elementos de prova e informação."], referencia: "Lei 8.159/1991, art. 1º", url: L.l8159.url },
      { tipo: "tabela", titulo: "Pontos principais", cabecalho: ["Artigo", "Regra"], linhas: [
        ["3º", "**gestão de documentos**: procedimentos e operações técnicas de produção, tramitação, uso, avaliação e arquivamento em fase corrente e intermediária, visando à eliminação ou ao recolhimento para guarda permanente"],
        ["7º", "arquivos públicos: produzidos e recebidos por órgãos públicos dos três níveis e Poderes, e por instituições de caráter público e entidades privadas encarregadas de serviços públicos"],
        ["8º", "documentos públicos são correntes, intermediários ou permanentes"],
        ["9º", "eliminação depende de **autorização** da instituição arquivística pública na sua esfera"],
        ["10", "documentos permanentes são **inalienáveis e imprescritíveis**"],
        ["12", "arquivos **privados** podem ser declarados de interesse público e social"],
        ["25", "quem desfigurar ou destruir documentos permanentes ou de interesse público responde **penal, civil e administrativamente**"],
        ["26", "cria o **CONARQ**, órgão central do **Sistema Nacional de Arquivos (SINAR)**"]
      ]},
      { tipo: "atencao", texto: "As regras sobre **acesso e sigilo** que estavam na Lei 8.159 foram substituídas pela **Lei de Acesso à Informação** (Lei 12.527/2011)." },
      { tipo: "questao", banca: Q, enunciado: "Segundo a Lei 8.159/1991, os documentos de valor permanente são:", alternativas: ["alienáveis após 100 anos", "inalienáveis e imprescritíveis", "elimináveis mediante edital", "de propriedade do servidor que os produziu", "sempre sigilosos"], correta: "B", comentario: "Art. 10." }
    ]
  });
})();
