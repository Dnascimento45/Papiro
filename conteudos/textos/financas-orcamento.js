/* Bloco C · Finanças e Orçamento Público (orçamento e Lei de Responsabilidade Fiscal). */
(() => {
  const A = (materia, assunto, def) => ESTUDO.assunto(ESTUDO.caminho("bloco-c", "gestao-publica", materia, assunto), def);
  const Q = "Questão autoral de fixação";
  const F = {
    cf: { titulo: "Constituição Federal, arts. 165 a 169 · Planalto", url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm" },
    l4320: { titulo: "Lei 4.320/1964 (normas gerais de direito financeiro) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/leis/l4320.htm" },
    lrf: { titulo: "Lei Complementar 101/2000 (LRF) · Planalto", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm" },
  };
  const OR = "Orçamento Público";
  const LR = "Lei de Responsabilidade Fiscal (LC 101/2000)";

  A(OR, "Princípios orçamentários", {
    resumo: "Unidade, universalidade, anualidade, exclusividade, não afetação e outros.",
    incidencia: "alta",
    fontes: [F.cf, F.l4320],
    blocos: [
      { tipo: "tabela", titulo: "Princípios", cabecalho: ["Princípio", "Significa", "Base"], linhas: [
        ["Unidade", "um só orçamento para cada ente, por exercício", "Lei 4.320, art. 2º"],
        ["Universalidade", "todas as receitas e despesas no orçamento", "Lei 4.320, arts. 2º a 4º"],
        ["Anualidade (periodicidade)", "vale para um exercício, que coincide com o ano civil", "Lei 4.320, art. 34"],
        ["Exclusividade", "a LOA só trata de receita e despesa (exceto autorização para créditos suplementares e operações de crédito)", "CF, art. 165, § 8º"],
        ["Orçamento bruto", "receitas e despesas pelo valor total, sem deduções", "Lei 4.320, art. 6º"],
        ["Não afetação (não vinculação) de impostos", "a receita de **impostos** não pode ser vinculada a órgão, fundo ou despesa, salvo exceções da CF (saúde, educação…)", "CF, art. 167, IV"],
        ["Legalidade", "orçamento aprovado por lei", "CF, art. 165"],
        ["Equilíbrio", "despesa não deve superar a receita", "doutrina e LRF"],
        ["Publicidade e transparência", "divulgação ampla", "CF e LRF"]
      ]},
      { tipo: "atencao", texto: "A não afetação vale para **impostos**, não para todos os tributos. Taxas e contribuições normalmente já são vinculadas à sua finalidade." },
      { tipo: "questao", banca: Q, enunciado: "O princípio segundo o qual a lei orçamentária não pode conter matéria estranha à previsão da receita e à fixação da despesa é o da:", alternativas: ["unidade", "universalidade", "exclusividade", "anualidade", "orçamento bruto"], correta: "C", comentario: "CF, art. 165, § 8º." }
    ]
  });

  A(OR, "PPA, LDO e LOA", {
    resumo: "Os três instrumentos de planejamento e orçamento, o que cada um contém e os prazos federais.",
    incidencia: "alta",
    fontes: [F.cf],
    blocos: [
      { tipo: "svg", titulo: "Como os três se encaixam", legenda: "O PPA (4 anos) orienta a LDO (anual), que orienta a LOA (anual).", codigo: `
<svg viewBox="0 0 560 210" role="img" aria-label="Três camadas: PPA de 4 anos em cima, LDO anual no meio, LOA anual embaixo, com setas de orientação">
  <defs><marker id="seta-orc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="pt"></path></marker></defs>
  <rect class="fd-d" x="20" y="10" width="520" height="50" rx="8"></rect><text class="tx tx-t" x="280" y="34" text-anchor="middle">PPA · Plano Plurianual (4 anos)</text><text class="tx-m" x="280" y="52" text-anchor="middle">diretrizes, objetivos e metas de médio prazo</text>
  <rect class="fd" x="20" y="80" width="520" height="50" rx="8"></rect><text class="tx tx-t" x="280" y="104" text-anchor="middle">LDO · Lei de Diretrizes Orçamentárias (anual)</text><text class="tx-m" x="280" y="122" text-anchor="middle">metas e prioridades do ano; orienta a LOA; metas fiscais</text>
  <rect class="fd" x="20" y="150" width="520" height="50" rx="8"></rect><text class="tx tx-t" x="280" y="174" text-anchor="middle">LOA · Lei Orçamentária Anual</text><text class="tx-m" x="280" y="192" text-anchor="middle">receita prevista e despesa fixada: fiscal, investimento das estatais, seguridade</text>
  <line class="ln-d" x1="280" y1="60" x2="280" y2="78" marker-end="url(#seta-orc)"></line>
  <line class="ln-d" x1="280" y1="130" x2="280" y2="148" marker-end="url(#seta-orc)"></line>
</svg>` },
      { tipo: "tabela", titulo: "Comparação", cabecalho: ["", "PPA", "LDO", "LOA"], linhas: [
        ["Vigência", "4 anos: do 2º ano do mandato ao 1º ano do mandato seguinte", "1 ano", "1 ano"],
        ["Conteúdo", "diretrizes, objetivos e metas para despesas de capital e programas de duração continuada", "metas e prioridades; orienta a LOA; alterações tributárias; Anexos de Metas e de Riscos Fiscais (LRF)", "orçamento fiscal, de investimento das estatais e da seguridade social"],
        ["Envio ao Congresso (União)", "até 31 de agosto do 1º ano do mandato", "até 15 de abril", "até 31 de agosto"],
        ["Devolução para sanção (União)", "até 22 de dezembro", "até 17 de julho", "até 22 de dezembro"]
      ], legenda: "Prazos do art. 35, § 2º, do ADCT, válidos para a União enquanto não vem a lei complementar. Estados e Municípios seguem suas constituições e leis orgânicas." },
      { tipo: "atencao", texto: "O Congresso **não** entra em recesso em julho sem aprovar a LDO (CF, art. 57, § 2º)." },
      { tipo: "questao", banca: Q, enunciado: "O instrumento que estabelece as metas e prioridades da administração para o exercício seguinte e orienta a elaboração da LOA é o:", alternativas: ["PPA", "LDO", "LOA", "RREO", "RGF"], correta: "B", comentario: "CF, art. 165, § 2º." }
    ]
  });

  A(OR, "Ciclo orçamentário", {
    resumo: "Elaboração, discussão e aprovação, execução, controle e avaliação.",
    incidencia: "média",
    fontes: [F.cf],
    blocos: [
      { tipo: "passos", titulo: "Etapas", itens: [
        "**Elaboração** da proposta pelo Executivo (com as propostas dos outros Poderes).",
        "**Discussão, votação e aprovação** pelo Legislativo (na União, com a Comissão Mista de Orçamento); emendas parlamentares.",
        "**Sanção** e publicação da lei.",
        "**Execução**: programação financeira, empenho, liquidação e pagamento.",
        "**Controle e avaliação**: interno, externo (Legislativo com Tribunal de Contas) e social."
      ]},
      { tipo: "texto", titulo: "Emendas à LOA (CF, art. 166, § 3º)", texto: ["As emendas parlamentares só podem ser aprovadas se forem compatíveis com o PPA e a LDO e se indicarem os recursos necessários, admitidos apenas os provenientes de **anulação de despesa** (exceto pessoal, serviço da dívida e transferências constitucionais), ou se corrigirem erros e omissões."] },
      { tipo: "dica", texto: "Ciclo orçamentário (vários anos, do planejamento ao controle) ≠ exercício financeiro (o ano civil em que o orçamento é executado)." },
      { tipo: "questao", banca: Q, enunciado: "As emendas parlamentares ao projeto de LOA devem indicar os recursos necessários, admitidos os provenientes de:", alternativas: ["aumento de impostos", "anulação de despesa, exceto as de pessoal, juros da dívida e transferências constitucionais", "operações de crédito livres", "qualquer fonte", "fundos privados"], correta: "B", comentario: "CF, art. 166, § 3º, II." }
    ]
  });

  A(OR, "Receita e despesa pública", {
    resumo: "Classificação econômica, estágios da receita e da despesa e restos a pagar.",
    incidencia: "alta",
    fontes: [F.l4320],
    blocos: [
      { tipo: "tabela", titulo: "Classificação econômica", cabecalho: ["", "Correntes", "De capital"], linhas: [
        ["Receita", "tributária, de contribuições, patrimonial, de serviços, transferências correntes", "operações de crédito, alienação de bens, amortização de empréstimos, transferências de capital"],
        ["Despesa", "pessoal, juros, custeio (material, serviços)", "investimentos (obras, equipamentos), inversões financeiras, amortização da dívida"]
      ]},
      { tipo: "tabela", titulo: "Estágios", cabecalho: ["Receita", "Despesa"], linhas: [
        ["Previsão (no orçamento)", "Fixação (no orçamento)"],
        ["Lançamento (identificar o devedor e o valor)", "**Empenho**: reserva da dotação; cria a obrigação de pagamento pendente de implemento de condição"],
        ["Arrecadação (o contribuinte paga ao agente)", "**Liquidação**: verifica o direito do credor (o serviço foi prestado?)"],
        ["Recolhimento (entrega ao Tesouro)", "**Pagamento**: ordem de pagamento e entrega do dinheiro"]
      ]},
      { tipo: "texto", titulo: "Restos a pagar", texto: ["Despesas **empenhadas** e não pagas até 31 de dezembro (Lei 4.320, art. 36). **Processados**: já liquidados. **Não processados**: empenhados, ainda não liquidados."] },
      { tipo: "atencao", texto: "É **vedada a realização de despesa sem prévio empenho** (Lei 4.320, art. 60). E a liquidação vem antes do pagamento: paga-se só o que foi verificado." },
      { tipo: "questao", banca: Q, enunciado: "O estágio da despesa em que se verifica se o credor cumpriu sua obrigação (por exemplo, se o material foi entregue) é a:", alternativas: ["fixação", "empenho", "liquidação", "pagamento", "lançamento"], correta: "C", comentario: "Lei 4.320, art. 63." }
    ]
  });

  A(LR, "Planejamento e metas fiscais", {
    resumo: "O objetivo da LRF, o Anexo de Metas Fiscais, resultado primário e limitação de empenho.",
    incidencia: "alta",
    fontes: [F.lrf],
    blocos: [
      { tipo: "lei", titulo: "LRF, art. 1º, § 1º", texto: ["§ 1º A responsabilidade na gestão fiscal pressupõe a ação planejada e transparente, em que se previnem riscos e corrigem desvios capazes de afetar o equilíbrio das contas públicas, mediante o cumprimento de metas de resultados entre receitas e despesas e a obediência a limites e condições no que tange a renúncia de receita, geração de despesas com pessoal, da seguridade social e outras, dívidas consolidada e mobiliária, operações de crédito, inclusive por antecipação de receita, concessão de garantia e inscrição em Restos a Pagar."], referencia: "LC 101/2000, art. 1º, § 1º", url: F.lrf.url },
      { tipo: "texto", texto: [
        "- A LRF vale para **União, Estados, DF e Municípios**, nos três Poderes, incluindo Tribunais de Contas e Ministério Público.",
        "- A **LDO** traz o **Anexo de Metas Fiscais** (metas de receita, despesa, **resultado primário** e **nominal** e dívida para o ano e os dois seguintes) e o **Anexo de Riscos Fiscais** (passivos contingentes).",
        "- **Resultado primário**: receitas menos despesas, **sem** juros. Mostra se o governo gasta mais do que arrecada antes de pagar a dívida.",
        "- **Limitação de empenho** (contingenciamento): se a receita pode não cumprir a meta, os Poderes limitam empenhos ao fim de cada **bimestre** (art. 9º).",
        "- **Renúncia de receita** e **despesa obrigatória de caráter continuado** exigem estimativa de impacto e compensação (arts. 14 a 17)."
      ]},
      { tipo: "questao", banca: Q, enunciado: "O Anexo de Metas Fiscais, previsto na LRF, integra a:", alternativas: ["LOA", "LDO", "Lei Orgânica", "Constituição", "PPA"], correta: "B", comentario: "LRF, art. 4º, § 1º." }
    ]
  });

  A(LR, "Limites de despesa com pessoal", {
    resumo: "Percentuais da receita corrente líquida, limite prudencial e como reconduzir ao limite.",
    incidencia: "alta",
    fontes: [F.lrf],
    blocos: [
      { tipo: "tabela", titulo: "Limite global (art. 19) e repartição (art. 20)", cabecalho: ["Ente", "Limite global da RCL", "Repartição"], linhas: [
        ["União", "50%", "Legislativo (com TCU) 2,5% · Judiciário 6% · Executivo 40,9% · MPU 0,6%"],
        ["Estados", "60%", "Legislativo (com TCE) 3% · Judiciário 6% · Executivo 49% · MP 2%"],
        ["Municípios", "60%", "Legislativo (com Tribunal de Contas do Município, se houver) 6% · Executivo 54%"]
      ], legenda: "RCL = Receita Corrente Líquida, apurada somando os últimos 12 meses." },
      { tipo: "tabela", titulo: "Gatilhos", cabecalho: ["Situação", "Consequência"], linhas: [
        ["90% do limite (alerta)", "o Tribunal de Contas alerta o Poder ou órgão"],
        ["95% do limite (prudencial)", "vedados: aumento de remuneração (salvo revisão geral e decisões judiciais), criação de cargos, alteração de carreira com aumento de despesa, novas admissões (salvo reposição em educação, saúde e segurança) e horas extras (art. 22)"],
        ["Acima do limite", "eliminar o excesso nos **2 quadrimestres** seguintes, pelo menos **1/3 no primeiro** (art. 23); se não conseguir, o ente fica impedido de receber transferências voluntárias, obter garantias e contratar operações de crédito"]
      ]},
      { tipo: "python", titulo: "Situação de um Município", codigo: `
rcl = 2_400_000_000.00              # receita corrente líquida (12 meses)
despesa_executivo = 1_250_000_000.00
limite = 0.54 * rcl
for nome, fracao in [("alerta (90%)", 0.90), ("prudencial (95%)", 0.95), ("máximo (100%)", 1.0)]:
    print(f"{nome:17}: R$ {limite * fracao / 1e6:8.1f} milhões")
print(f"Executivo gasta {despesa_executivo / rcl:.2%} da RCL ->",
      "acima do prudencial" if despesa_executivo > 0.95 * limite else "dentro do prudencial")
`, saida: `
alerta (90%)     : R$   1166.4 milhões
prudencial (95%) : R$   1231.2 milhões
máximo (100%)    : R$   1296.0 milhões
Executivo gasta 52.08% da RCL -> acima do prudencial
` },
      { tipo: "questao", banca: Q, enunciado: "Pela LRF, o limite de despesa total com pessoal do Poder Executivo municipal é de:", alternativas: ["50% da RCL", "54% da RCL", "60% da RCL", "6% da RCL", "49% da RCL"], correta: "B", comentario: "Art. 20, III, b: 54% para o Executivo; 6% para o Legislativo; total municipal 60%." }
    ]
  });

  A(LR, "Transparência da gestão fiscal", {
    resumo: "Instrumentos de transparência, RREO, RGF, audiências públicas e dados em tempo real.",
    incidencia: "alta",
    fontes: [F.lrf],
    blocos: [
      { tipo: "texto", texto: [
        "São **instrumentos de transparência** (art. 48): planos, orçamentos e LDO; prestações de contas e o parecer prévio; o **RREO** e o **RGF**, com suas versões simplificadas.",
        "",
        "A transparência também é garantida por:",
        "- **incentivo à participação popular** e **audiências públicas** durante a elaboração e discussão dos planos e orçamentos;",
        "- **liberação em tempo real** de informações detalhadas sobre execução orçamentária e financeira, em meio eletrônico de acesso público;",
        "- sistema integrado de administração financeira e controle com padrão mínimo de qualidade."
      ]},
      { tipo: "tabela", titulo: "Relatórios", cabecalho: ["Relatório", "Periodicidade", "Quem assina"], linhas: [
        ["RREO (Relatório Resumido da Execução Orçamentária)", "**bimestral**, publicado até 30 dias após o bimestre", "Executivo de cada ente"],
        ["RGF (Relatório de Gestão Fiscal)", "**quadrimestral** (Municípios com menos de 50 mil habitantes podem optar pelo semestral)", "titular de cada Poder e órgão, com os responsáveis pela administração financeira e pelo controle interno"]
      ]},
      { tipo: "dica", texto: "**R**REO = **R**esumo da **E**xecução, a cada **2** meses. **R**GF = **G**estão **F**iscal (limites de pessoal e dívida), a cada **4** meses." },
      { tipo: "questao", banca: Q, enunciado: "O Relatório de Gestão Fiscal (RGF) é publicado, em regra, com periodicidade:", alternativas: ["mensal", "bimestral", "quadrimestral", "anual", "semanal"], correta: "C", comentario: "LRF, art. 54 e 55: quadrimestral (com opção semestral para Municípios pequenos)." }
    ]
  });
})();
