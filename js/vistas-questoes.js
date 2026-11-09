/* Páginas do banco de questões, das listas e dos simulados, e as ações delas. */
import { esc, norm } from './util.js';
import { inline } from './texto.js';
import { LETRAS, moldura, prosa, renderBloco, reiniciarQuestoes } from './blocos.js';
import { href } from './modelo.js';
import {
  abandonarSimulado, adicionarNaLista, banco, criarLista, estatisticas, finalizarSimulado, historicoSimulados,
  iniciarSimulado, listaPorId, questaoPorId, removerDaLista, removerLista, responderSimulado, resultadoPorId,
  simuladoAtual, statusDe, tempoDoSimulado, todasListas,
} from './banco.js';
import { cabecalhoRota, numeros } from './componentes.js';
import { duracao, relogio } from './horas.js';

const LIMITE_CARTOES = 40;
const ROTULO_STATUS = { nova: 'Nova', certa: 'Acertou', errada: 'Errou' };

const naoEncontrado = (titulo, texto) => cabecalhoRota({ sobre: 'Não encontrado', titulo, lead: texto, kanji: '空' }) +
  '<div class="ferramentas"><a class="btn" href="#questoes"><span class="kj">問</span>Ir ao banco de questões</a></div>';

/* ====================================================================
   Banco de questões
   ==================================================================== */

const filtro = { conteudo: '', busca: '', banca: '', status: '' };

function filtrar() {
  const termos = norm(filtro.busca).split(/\s+/).filter(Boolean);
  return banco.filter((q) => (!filtro.conteudo || q.conteudo.caminho === filtro.conteudo) &&
    (!filtro.banca || q.banca === filtro.banca) &&
    (!filtro.status || statusDe(q.id) === filtro.status) &&
    termos.every((t) => q.texto.includes(t)));
}

/** Cartão de uma questão: o bloco de questão + trilha e ações (adicionar à lista ou remover dela). */
function cartaoQuestao(q, { lista = null } = {}) {
  const status = statusDe(q.id);
  let acao;
  if (lista) {
    acao = `<button type="button" class="btn-link" data-acao="remover-da-lista" data-lista="${esc(lista.id)}" data-qid="${esc(q.id)}">Remover desta lista</button>`;
  } else if (todasListas().length) {
    const opcoes = todasListas().map((l) => `<option value="${esc(l.id)}">${esc(l.nome)}</option>`).join('');
    acao = `<select data-mudar="add-lista" data-qid="${esc(q.id)}" aria-label="Adicionar a uma lista"><option value="">Adicionar à lista…</option>${opcoes}</select><span class="q-aviso" role="status"></span>`;
  } else {
    acao = '<a href="#listas">Criar uma lista</a>';
  }
  return `<article class="q-card"><div class="q-trilha"><a href="${href(q.assunto)}">${esc(q.conteudo.titulo)} · ${esc(q.assunto.titulo)}</a>` +
    `<span class="chip ${status === 'errada' ? 'shu' : ''}">${ROTULO_STATUS[status]}</span></div>` +
    renderBloco({ ...q.bloco, titulo: q.materia.titulo }) + `<div class="q-rodape">${acao}</div></article>`;
}

function listaQuestoesHtml() {
  reiniciarQuestoes();
  const achadas = filtrar();
  if (!achadas.length) return '<p class="res-vazio">Nenhuma questão com esses filtros.</p>';
  const aviso = achadas.length > LIMITE_CARTOES ? ` (mostrando as ${LIMITE_CARTOES} primeiras)` : '';
  return `<p class="nota">${achadas.length} ${achadas.length === 1 ? 'questão' : 'questões'}${aviso}</p>` +
    achadas.slice(0, LIMITE_CARTOES).map((q) => cartaoQuestao(q)).join('');
}

function opcao(valor, rotulo, atual) {
  return `<option value="${esc(valor)}"${valor === atual ? ' selected' : ''}>${esc(rotulo)}</option>`;
}

function filtrosHtml() {
  const conteudos = new Map();
  banco.forEach((q) => conteudos.set(q.conteudo.caminho, q.conteudo.titulo));
  const bancas = [...new Set(banco.map((q) => q.banca).filter(Boolean))].sort();
  return '<div class="filtros">' +
    `<label><span>Conteúdo</span><select data-filtro="conteudo">${opcao('', 'Todos', filtro.conteudo)}${[...conteudos].map(([c, t]) => opcao(c, t, filtro.conteudo)).join('')}</select></label>` +
    `<label><span>Banca</span><select data-filtro="banca">${opcao('', 'Todas', filtro.banca)}${bancas.map((b) => opcao(b, b, filtro.banca)).join('')}</select></label>` +
    `<label><span>Situação</span><select data-filtro="status">${opcao('', 'Todas', filtro.status)}${opcao('nova', 'Ainda não respondidas', filtro.status)}${opcao('errada', 'Que errei', filtro.status)}${opcao('certa', 'Que acertei', filtro.status)}</select></label>` +
    `<label class="filtro-busca"><span>Buscar no enunciado</span><input type="search" data-filtro="busca" value="${esc(filtro.busca)}" placeholder="palavra ou trecho" autocomplete="off"></label>` +
    '</div>';
}

export function vQuestoes() {
  const est = estatisticas();
  const taxa = est.tentativas ? `${Math.round((est.acertos / est.tentativas) * 100)}%` : '—';
  const cab = cabecalhoRota({
    sobre: 'Prática',
    titulo: 'Banco de questões',
    lead: 'Todas as questões escritas nos assuntos, num só lugar. Filtre, responda e guarde em listas para montar simulados.',
    kanji: '問',
    extra: numeros([[banco.length, 'questões'], [est.respondidas, 'respondidas'], [taxa, 'de acerto']]),
  });
  if (!banco.length) {
    return cab + '<div class="vazio-box"><span class="kj" aria-hidden="true">空</span><p>O banco ainda está vazio. Ele é montado sozinho a partir dos blocos <code>questao</code> dos assuntos. O formato está em <code>conteudos/_MODELO.js</code>.</p></div>';
  }
  return `${cab}${filtrosHtml()}<div id="lista-questoes">${listaQuestoesHtml()}</div>`;
}

/* ====================================================================
   Listas
   ==================================================================== */

export function vListas(partes) {
  if (partes[0]) return vLista(partes[0]);
  const listas = todasListas();
  const cartoes = listas.map((l) => `<li class="lista-item"><a href="#listas--${esc(l.id)}"><b>${esc(l.nome)}</b><small>${l.qids.length} ${l.qids.length === 1 ? 'questão' : 'questões'}</small></a>` +
    `<button type="button" class="btn-link" data-acao="excluir-lista" data-lista="${esc(l.id)}">Excluir</button></li>`).join('');
  return cabecalhoRota({
    sobre: 'Prática',
    titulo: 'Listas de questões',
    lead: 'Separe questões por tema, por erro ou por prova. Uma lista vira simulado com um clique.',
    kanji: '札',
  }) +
    '<form class="form-linha" data-form="nova-lista"><label><span class="sr-only">Nome da lista</span><input name="nome" type="text" maxlength="60" placeholder="Nome da nova lista" required autocomplete="off"></label><button class="btn" type="submit">Criar lista</button></form>' +
    (listas.length ? `<ul class="lista-itens">${cartoes}</ul>` : '<p class="nota">Nenhuma lista ainda. Crie a primeira acima e adicione questões pelo banco.</p>');
}

function vLista(id) {
  const lista = listaPorId(id);
  if (!lista) return naoEncontrado('Lista não encontrada', 'Ela pode ter sido excluída neste navegador.');
  const questoes = lista.qids.map(questaoPorId).filter(Boolean);
  reiniciarQuestoes();
  const acoes = questoes.length
    ? `<div class="ferramentas"><button type="button" class="btn" data-acao="simular-lista" data-lista="${esc(lista.id)}"><span class="kj">試</span>Simular esta lista</button><a class="btn" href="#listas">Todas as listas</a></div>`
    : '<div class="ferramentas"><a class="btn" href="#listas">Todas as listas</a></div>';
  return cabecalhoRota({ sobre: 'Lista', titulo: lista.nome, kanji: '札', extra: numeros([[questoes.length, 'questões']]) + acoes }) +
    (questoes.length ? questoes.map((q) => cartaoQuestao(q, { lista })).join('') : '<p class="nota">Esta lista está vazia. Adicione questões pelo <a href="#questoes">banco</a>.</p>');
}

/* ====================================================================
   Simulados
   ==================================================================== */

export function vSimulados(partes) {
  if (partes[0] === 'fazer') return vSimuladoEmCurso();
  if (partes[0] === 'resultado') return vResultado(partes[1]);
  return vSimuladosInicio();
}

function vSimuladosInicio() {
  const atual = simuladoAtual();
  const conteudos = new Map();
  banco.forEach((q) => conteudos.set(q.conteudo.caminho, q.conteudo.titulo));
  const escopos = '<option value="todas">Todo o banco</option>' +
    [...conteudos].map(([c, t]) => `<option value="c:${esc(c)}">${esc(t)}</option>`).join('') +
    todasListas().map((l) => `<option value="l:${esc(l.id)}">Lista: ${esc(l.nome)}</option>`).join('');

  const andamento = atual
    ? `<div class="aviso-andamento"><span>Você tem um simulado em andamento (${atual.qids.length} questões).</span><a class="btn" href="#simulados--fazer">Continuar</a><button type="button" class="btn-link" data-acao="abandonar-simulado">Descartar</button></div>`
    : '';
  const form = banco.length
    ? '<form class="form-simulado" data-form="novo-simulado">' +
      `<label><span>De onde sortear</span><select name="escopo">${escopos}</select></label>` +
      `<label><span>Quantas questões</span><input name="quantidade" type="number" min="1" max="200" value="${Math.min(10, banco.length)}" required></label>` +
      '<label><span>Tempo (minutos, 0 = sem limite)</span><input name="minutos" type="number" min="0" max="600" value="0" required></label>' +
      '<label class="marcar"><input name="pendentes" type="checkbox"><span>Só questões que ainda não acertei</span></label>' +
      '<button class="btn" type="submit"><span class="kj">試</span>Começar simulado</button><p class="form-msg" role="alert"></p></form>'
    : '<p class="nota">O banco está vazio; não há questões para sortear.</p>';

  const historico = historicoSimulados();
  const linhas = historico.map((s) => `<tr><td>${new Date(s.fim).toLocaleDateString('pt-BR')}</td><td>${esc(s.escopo)}</td><td>${s.acertos}/${s.total}</td><td>${duracao(s.duracaoSeg)}</td><td><a href="#simulados--resultado--${esc(s.id)}">Ver</a></td></tr>`).join('');

  return cabecalhoRota({
    sobre: 'Prática',
    titulo: 'Simulados',
    lead: 'Questões sorteadas, sem mostrar o gabarito até o fim. Dá para limitar o tempo, como na prova.',
    kanji: '試',
  }) + andamento + form +
    '<h2 class="titulo-sec">Histórico</h2>' +
    (historico.length
      ? `<div class="tabela-wrap"><table><thead><tr><th>Data</th><th>Origem</th><th>Acertos</th><th>Tempo</th><th></th></tr></thead><tbody>${linhas}</tbody></table></div>`
      : '<p class="nota">Nenhum simulado concluído ainda.</p>');
}

/* ---------- Simulado em andamento ---------- */

function textoTempo(s) {
  const t = tempoDoSimulado(s);
  return s.limiteSeg ? `Restam ${relogio(Math.max(t, 0))}` : `Tempo ${relogio(t)}`;
}

function textoProgresso(s) {
  const feitas = s.qids.filter((id) => s.respostas[id] != null).length;
  return `${feitas} de ${s.qids.length} respondidas`;
}

function questaoDoSimulado(qid, n, s) {
  const q = questaoPorId(qid);
  if (!q) return '';
  const b = q.bloco;
  const meta = [q.banca, q.ano, q.cargo].filter(Boolean).map(esc).join(' · ');
  const alternativas = b.alternativas.map((a, i) => `<li><button type="button" data-sim-alt="${i}" data-qid="${esc(qid)}" aria-pressed="${s.respostas[qid] === i}" class="${s.respostas[qid] === i ? 'marcada' : ''}"><b>${LETRAS[i]}</b><span>${inline(a)}</span></button></li>`).join('');
  return moldura('問', `Questão ${n}`, 'b-questao', (meta ? `<div class="q-meta">${meta}</div>` : '') + prosa(b.enunciado) + `<ol class="q-alts">${alternativas}</ol>`);
}

function vSimuladoEmCurso() {
  const s = simuladoAtual();
  if (!s) return naoEncontrado('Nenhum simulado em andamento', 'Comece um novo na página de simulados.');
  return cabecalhoRota({
    sobre: `Simulado · ${s.escopo}`,
    titulo: 'Simulado em andamento',
    kanji: '試',
    extra: `<p class="sim-barra" role="status"><span id="sim-tempo">${textoTempo(s)}</span><span id="sim-progresso">${textoProgresso(s)}</span></p>`,
  }) +
    `<div class="blocos">${s.qids.map((id, i) => questaoDoSimulado(id, i + 1, s)).join('')}</div>` +
    '<div class="ferramentas sim-fim"><button type="button" class="btn feito" data-acao="finalizar-simulado"><span class="kj">済</span>Finalizar e ver o resultado</button>' +
    '<button type="button" class="btn-link" data-acao="abandonar-simulado">Descartar simulado</button></div>';
}

/** Chamada a cada segundo: atualiza o relógio do simulado e encerra se o tempo acabou. */
export function tiqueSimulado() {
  const el = document.getElementById('sim-tempo');
  const s = simuladoAtual();
  if (!el || !s) return;
  el.textContent = textoTempo(s);
  if (s.limiteSeg && tempoDoSimulado(s) <= 0) concluirSimulado();
}

function concluirSimulado() {
  const r = finalizarSimulado();
  if (r) location.hash = `#simulados--resultado--${r.id}`;
}

/** Clique numa alternativa do simulado: marca/desmarca sem mostrar o gabarito. */
export function marcarAlternativaSimulado(botao) {
  const qid = botao.getAttribute('data-qid');
  responderSimulado(qid, +botao.getAttribute('data-sim-alt'));
  const s = simuladoAtual();
  if (!s) return;
  botao.closest('.q-alts').querySelectorAll('[data-sim-alt]').forEach((b) => {
    const marcada = s.respostas[qid] === +b.getAttribute('data-sim-alt');
    b.classList.toggle('marcada', marcada);
    b.setAttribute('aria-pressed', String(marcada));
  });
  document.getElementById('sim-progresso').textContent = textoProgresso(s);
}

/* ---------- Resultado ---------- */

function questaoCorrigida(qid, n, s) {
  const q = questaoPorId(qid);
  if (!q) return '';
  const b = q.bloco;
  const marcada = s.respostas[qid];
  const letra = LETRAS[q.correta];
  let veredito;
  if (marcada == null) veredito = `<span class="veredito nao">Em branco.</span> A resposta é a letra ${letra}.`;
  else if (marcada === q.correta) veredito = '<span class="veredito ok">Correta.</span>';
  else veredito = `<span class="veredito nao">Incorreta.</span> Você marcou a ${LETRAS[marcada]}; a resposta é a letra ${letra}.`;
  const alternativas = b.alternativas.map((a, i) => {
    const classe = i === q.correta ? 'certa' : (i === marcada ? 'errada' : '');
    return `<li><button type="button" disabled class="${classe}"><b>${LETRAS[i]}</b><span>${inline(a)}</span></button></li>`;
  }).join('');
  const meta = [q.banca, q.ano, q.cargo].filter(Boolean).map(esc).join(' · ');
  return moldura('問', `Questão ${n} · ${q.assunto.titulo}`, 'b-questao',
    (meta ? `<div class="q-meta">${meta}</div>` : '') + prosa(b.enunciado) + `<ol class="q-alts">${alternativas}</ol>` +
    `<div class="q-retorno"><p>${veredito}</p>${prosa(b.comentario || '')}<a href="${href(q.assunto)}">Estudar o assunto</a></div>`);
}

function vResultado(id) {
  const s = resultadoPorId(id);
  if (!s) return naoEncontrado('Resultado não encontrado', 'Ele pode ter sido apagado ao limpar os dados do navegador.');
  const pct = s.total ? Math.round((s.acertos / s.total) * 100) : 0;
  return cabecalhoRota({
    sobre: `Simulado · ${s.escopo}`,
    titulo: `${s.acertos} de ${s.total} · ${pct}%`,
    kanji: '試',
    extra: numeros([[s.acertos, 'acertos'], [s.total - s.acertos, 'erros ou em branco'], [duracao(s.duracaoSeg), 'de prova']]) +
      '<div class="ferramentas"><a class="btn" href="#simulados"><span class="kj">試</span>Novo simulado</a></div>',
  }) + `<div class="blocos">${s.qids.map((qid, i) => questaoCorrigida(qid, i + 1, s)).join('')}</div>`;
}

/* ====================================================================
   Ações (ligadas em eventos.js)
   ==================================================================== */

/** Cliques em elementos com data-acao="nome". Cada ação recebe (elemento, { redesenhar }). */
export const acoes = {
  'excluir-lista': (el, { redesenhar }) => {
    const lista = listaPorId(el.getAttribute('data-lista'));
    if (lista && confirm(`Excluir a lista "${lista.nome}"? As questões continuam no banco.`)) {
      removerLista(lista.id);
      redesenhar();
    }
  },
  'remover-da-lista': (el, { redesenhar }) => {
    removerDaLista(el.getAttribute('data-lista'), el.getAttribute('data-qid'));
    redesenhar();
  },
  'simular-lista': (el) => {
    const lista = listaPorId(el.getAttribute('data-lista'));
    const pool = lista ? lista.qids.map(questaoPorId).filter(Boolean) : [];
    if (!pool.length) return;
    iniciarSimulado({ pool, quantidade: pool.length, limiteSeg: 0, escopo: `Lista: ${lista.nome}` });
    location.hash = '#simulados--fazer';
  },
  'finalizar-simulado': () => {
    const s = simuladoAtual();
    if (!s) return;
    const faltam = s.qids.filter((id) => s.respostas[id] == null).length;
    if (faltam && !confirm(`Faltam ${faltam} questões sem resposta. Finalizar mesmo assim?`)) return;
    concluirSimulado();
  },
  'abandonar-simulado': (el, { redesenhar }) => {
    if (!confirm('Descartar o simulado em andamento? As respostas serão perdidas.')) return;
    abandonarSimulado();
    if (location.hash === '#simulados') redesenhar();
    else location.hash = '#simulados';
  },
};

/** Eventos "change"/"input" em elementos com data-mudar="nome" ou data-filtro. */
export const mudancas = {
  'add-lista': (el) => {
    if (!el.value) return;
    const novo = adicionarNaLista(el.value, el.getAttribute('data-qid'));
    const aviso = el.parentElement.querySelector('.q-aviso');
    if (aviso) aviso.textContent = novo ? 'Adicionada.' : 'Já estava na lista.';
    el.value = '';
  },
};

/** Atualiza só a lista de cartões, sem recriar os filtros (para não perder o foco ao digitar). */
export function aoFiltrar(el) {
  filtro[el.getAttribute('data-filtro')] = el.value;
  document.getElementById('lista-questoes').innerHTML = listaQuestoesHtml();
}

/** Envio de formulários com data-form="nome". */
export const formularios = {
  'nova-lista': (form, { redesenhar }) => {
    const nome = new FormData(form).get('nome').trim();
    if (!nome) return;
    criarLista(nome);
    redesenhar();
  },
  'novo-simulado': (form) => {
    const dados = new FormData(form);
    const escopo = String(dados.get('escopo'));
    let pool = banco;
    let rotulo = 'Todo o banco';
    if (escopo.startsWith('c:')) {
      pool = banco.filter((q) => q.conteudo.caminho === escopo.slice(2));
      rotulo = pool[0] ? pool[0].conteudo.titulo : rotulo;
    } else if (escopo.startsWith('l:')) {
      const lista = listaPorId(escopo.slice(2));
      pool = lista ? lista.qids.map(questaoPorId).filter(Boolean) : [];
      rotulo = lista ? `Lista: ${lista.nome}` : rotulo;
    }
    if (dados.get('pendentes')) pool = pool.filter((q) => statusDe(q.id) !== 'certa');

    const msg = form.querySelector('.form-msg');
    if (!pool.length) {
      msg.textContent = 'Nenhuma questão disponível com essa escolha.';
      return;
    }
    iniciarSimulado({
      pool,
      quantidade: Math.max(1, Math.min(+dados.get('quantidade') || 1, pool.length)),
      limiteSeg: Math.max(0, Math.round((+dados.get('minutos') || 0) * 60)),
      escopo: rotulo,
    });
    location.hash = '#simulados--fazer';
  },
};
