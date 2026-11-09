/* Converte os CSVs de questões de provas (pasta "Banco de dados de questoes/") nos JSON
   que o caderno lê sob demanda (pasta questoes/).

   Rodar:  npm run questoes            (ou: node ferramentas/converter-questoes.js [pasta-dos-csv])

   Saída (as duas pastas ficam fora do git: as questões têm direitos autorais das bancas):
     questoes/indice.json                          o que existe: conteúdos, bancas, totais e baldes
     questoes/<conteudo>/<banca>-<balde>.json      as questões, em 16 "baldes" por banca
     questoes/pendentes/<arquivo>.json             questões guardadas fora do caderno (ex.: sem o texto-base)

   Por que baldes: o id de cada questão sai de um resumo (hash) do próprio texto, e o
   primeiro caractere do hash escolhe o balde. Assim, quem tem só o id (uma lista, um
   simulado) sabe qual arquivo buscar, e gerar tudo de novo não muda nenhum id. */
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const ENTRADA = path.resolve(process.argv[2] || path.join(RAIZ, 'Banco de dados de questoes'));
const SAIDA = path.join(RAIZ, 'questoes');
const BALDES = 16;

/* Nome do arquivo -> conteúdo do caderno. Matéria fora do escopo do Papiro fica de fora. */
const MATERIAS = {
  Administrativo: 'nucleo/direito-administrativo',
  Constitucional: 'nucleo/direito-constitucional',
  Portugues: 'nucleo/portugues',
};
const BANCAS = { Cespe: { nome: 'Cebraspe', chave: 'cebraspe' }, FCC: { nome: 'FCC', chave: 'fcc' } };

const AVISO_8666 = 'Cita a Lei 8.666/1993, revogada pela Lei 14.133/2021 (a revogação total valeu a partir de 30/12/2023). ' +
  'O gabarito segue a lei antiga: confira a regra atual na Lei 14.133 antes de decorar.';
/* Português: questões que dependem de um texto-base que não veio no CSV. */
const DEPENDE_DE_TEXTO = /\btextos?\b|\btrechos?\b|\bfragmentos?\b|\(\s*[lR]\.\s*\d|\blinhas?\s+\d/i;

/* ---------- CSV ---------- */

function lerCsv(texto) {
  const linhas = [];
  let linha = [];
  let campo = '';
  let aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (aspas) {
      if (c === '"') {
        if (texto[i + 1] === '"') { campo += '"'; i++; } else aspas = false;
      } else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === ',') { linha.push(campo); campo = ''; }
    else if (c === '\n') { linha.push(campo.replace(/\r$/, '')); linhas.push(linha); linha = []; campo = ''; }
    else campo += c;
  }
  if (campo || linha.length) { linha.push(campo); linhas.push(linha); }
  return linhas;
}

/* ---------- Limpeza ---------- */

const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

/** Separa o comando ("Julgue o item…") do texto quando vieram grudados ("…a seguir.A execução").
    Linha que termina em pontuação de fim de frase vira parágrafo; as outras quebras eram
    só quebra de linha da prova e voltam a ser espaço. */
function limparEnunciado(texto) {
  const linhas = String(texto).replace(/\r/g, '').trim()
    .replace(/([a-zà-ÿ)\]”"])\.(?=[A-ZÀ-Ý“"])/g, '$1.\n')
    .split(/\n+/).map((l) => l.trim()).filter(Boolean);
  return linhas.reduce((acc, l, i) => {
    if (!i) return l;
    return acc + (/[.:;?!)”"]$/.test(linhas[i - 1]) ? '\n\n' : ' ') + l;
  }, '');
}

/** "a) x | b) y" (ou "a) x b) y", sem a barra) -> { alternativas, letras }. Certo/Errado vira ["Certo", "Errado"]. */
function lerAlternativas(bruto) {
  let partes = String(bruto).split(/\s*\|\s*/).map((p) => p.trim()).filter(Boolean);
  if (partes.length < 2) partes = String(bruto).trim().split(/\s+(?=[b-h]\)\s)/).map((p) => p.trim());
  const nomes = partes.map(norm);
  if (partes.length === 2 && nomes.includes('certo') && nomes.includes('errado')) {
    return { certoErrado: true, alternativas: ['Certo', 'Errado'] };
  }
  const letras = [];
  const alternativas = partes.map((p) => {
    const m = p.match(/^([a-h])\)\s*([\s\S]*)$/i);
    letras.push(m ? m[1].toLowerCase() : '');
    return (m ? m[2] : p).trim();
  });
  return { certoErrado: false, alternativas, letras };
}

/** Índice da alternativa correta, ou -1 se a resposta não bater com as alternativas. */
function indiceCorreto(resposta, alt) {
  const r = norm(resposta);
  if (alt.certoErrado) return { c: 0, certo: 0, e: 1, errado: 1 }[r] ?? -1;
  return alt.letras.indexOf(r);
}

/* ---------- Id estável ---------- */

function fnv(texto, semente) {
  let h = semente >>> 0;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

/** 12 caracteres hexadecimais tirados do texto da questão (enunciado + alternativas). */
function hashDa(banca, enunciado, alternativas) {
  const chave = [banca, norm(enunciado), ...alternativas.map(norm)].join('|');
  return fnv(chave, 0x811c9dc5) + fnv(chave, 0x01234567).slice(0, 4);
}

/* ---------- Conversão ---------- */

function converterArquivo(nome) {
  const m = nome.match(/^questoes([A-Za-z]+?)(Cespe|FCC)\.csv$/);
  if (!m) return { ignorado: `${nome}: nome fora do padrão questoes<Matéria><Banca>.csv` };
  const conteudo = MATERIAS[m[1]];
  if (!conteudo) return { ignorado: `${nome}: "${m[1]}" não é matéria do Papiro` };
  const banca = BANCAS[m[2]];

  const linhas = lerCsv(fs.readFileSync(path.join(ENTRADA, nome), 'utf8'))
    .filter((l) => l.length >= 4 && l.some((c) => c.trim()));
  if (norm(linhas[0][0]) === 'perguntas') linhas.shift();

  const questoes = [];
  const pendentes = [];
  const descartes = {};
  const descartar = (motivo) => { descartes[motivo] = (descartes[motivo] || 0) + 1; };
  const vistos = new Set();

  linhas.forEach((l) => {
    // 4 colunas: pergunta, alternativas, resposta, ano. 5 colunas: id da origem antes.
    const [pergunta, bruto, resposta, anoBruto] = l.slice(-4);
    const enunciado = limparEnunciado(pergunta);
    const alt = lerAlternativas(bruto);
    const correta = indiceCorreto(resposta, alt);
    if (!enunciado) return descartar('sem enunciado');
    if (alt.alternativas.length < 2 || alt.alternativas.some((a) => !a)) return descartar('alternativas ilegíveis');
    if (correta < 0) return descartar('resposta não bate com as alternativas');

    const hash = hashDa(banca.chave, enunciado, alt.alternativas);
    if (vistos.has(hash)) return descartar('repetida');
    vistos.add(hash);

    const ano = Number(anoBruto);
    const q = { id: `p:${conteudo}:${banca.chave}:${hash}` };
    if (ano >= 1990 && ano <= new Date().getFullYear()) q.ano = ano;
    q.enunciado = enunciado;
    q.alternativas = alt.alternativas;
    q.correta = correta;
    if (/8\.?666/.test(`${enunciado} ${alt.alternativas.join(' ')}`)) q.conferir = AVISO_8666;

    if (conteudo === 'nucleo/portugues' && DEPENDE_DE_TEXTO.test(`${enunciado} ${alt.alternativas.join(' ')}`)) {
      pendentes.push({ ...q, motivo: 'texto-base ausente', origem: l.length >= 5 ? l[0] : undefined });
    } else {
      questoes.push(q);
    }
  });
  return { nome, conteudo, banca, questoes, pendentes, descartes };
}

function gravarJson(arquivo, dados, bonito = false) {
  fs.mkdirSync(path.dirname(arquivo), { recursive: true });
  fs.writeFileSync(arquivo, JSON.stringify(dados, null, bonito ? 2 : 0) + '\n');
}

function principal() {
  if (!fs.existsSync(ENTRADA)) {
    console.error(`Pasta não encontrada: ${ENTRADA}`);
    process.exit(1);
  }
  fs.rmSync(SAIDA, { recursive: true, force: true });

  const indice = {
    versao: 1,
    gerado: new Date().toISOString().slice(0, 10),
    fonte: 'Arquivo "QuestoesCespeFCC" (CSV com enunciado, alternativas, gabarito e ano; sem órgão nem cargo).',
    aviso: 'Questões de provas até 2018: leis e entendimentos podem ter mudado. Confira na fonte oficial.',
    baldes: BALDES,
    conteudos: {},
    pendentes: {},
  };

  fs.readdirSync(ENTRADA).filter((n) => n.endsWith('.csv')).sort().forEach((nome) => {
    const r = converterArquivo(nome);
    if (r.ignorado) return console.log(`– ${r.ignorado}`);

    const pasta = path.join(SAIDA, r.conteudo.replace(/\//g, '--'));
    const baldes = {};
    r.questoes.forEach((q) => {
      const b = q.id.slice(-12, -11);
      (baldes[b] = baldes[b] || []).push(q);
    });
    const usados = Object.keys(baldes).sort();
    usados.forEach((b) => gravarJson(path.join(pasta, `${r.banca.chave}-${b}.json`), baldes[b]));

    const anos = r.questoes.map((q) => q.ano).filter(Boolean).sort();
    const destino = indice.conteudos[r.conteudo] || (indice.conteudos[r.conteudo] = {});
    destino[r.banca.nome] = {
      chave: r.banca.chave,
      total: r.questoes.length,
      anos: anos.length ? [anos[0], anos[anos.length - 1]] : null,
      revogadas: r.questoes.filter((q) => q.conferir).length,
      baldes: usados,
    };
    if (r.pendentes.length) {
      const arq = `pendentes/${r.conteudo.replace(/\//g, '--')}--${r.banca.chave}.json`;
      gravarJson(path.join(SAIDA, arq), r.pendentes);
      indice.pendentes[arq] = { motivo: 'texto-base ausente', total: r.pendentes.length };
    }
    const desc = Object.entries(r.descartes).map(([k, v]) => `${v} ${k}`).join(', ') || 'nenhuma';
    console.log(`✓ ${nome}: ${r.questoes.length} questões em ${usados.length} baldes` +
      (r.pendentes.length ? `, ${r.pendentes.length} pendentes` : '') + ` · descartadas: ${desc}`);
  });

  gravarJson(path.join(SAIDA, 'indice.json'), indice, true);
  console.log(`\nÍndice: ${path.relative(RAIZ, path.join(SAIDA, 'indice.json'))}`);
}

principal();
