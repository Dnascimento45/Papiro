/* Horas de estudo: cronômetro no rodapé do sumário e a página de resumo.
   O tempo é somado por dia e por matéria (a que estiver aberta no momento).
   Fica só neste navegador (localStorage), como o resto do progresso. */
import { CHAVES, esc, memoria } from '../nucleo/util.js';
import { dadosMudaram, pagina, trava } from '../nucleo/estado.js';
import { nos } from '../nucleo/modelo.js';
import { cabecalhoRota, barra, numeros } from '../interface/componentes.js';

const INATIVIDADE_MS = 10 * 60 * 1000;   // pausa sozinho depois de 10 min sem mexer
const SALTO_MAXIMO_MS = 120 * 1000;      // um intervalo maior que isso (aba dormindo) não conta inteiro
const GRAVAR_A_CADA = 5;                 // segundos entre gravações

const GERAL = '_geral';
const QUESTOES = '_questoes';
const ROTULOS_ESPECIAIS = { [GERAL]: 'Início e navegação', [QUESTOES]: 'Questões e simulados' };

/** dia (AAAA-MM-DD) -> { chave: segundos }. A chave é o caminho de uma matéria, de um conteúdo ou _geral/_questoes. */
const dados = memoria.ler(CHAVES.horas, {});

let rodando = false;
let ultimoTique = 0;
let resto = 0;            // milissegundos ainda não somados
let semGravar = 0;
let ultimaAtividade = Date.now();
let aviso = '';           // motivo da última pausa automática
const ouvintes = new Set();

/* ---------- Datas e formatação ---------- */

const dois = (n) => String(n).padStart(2, '0');

function chaveDia(data = new Date()) {
  return `${data.getFullYear()}-${dois(data.getMonth() + 1)}-${dois(data.getDate())}`;
}

/** 3725 -> "1:02:05". */
export function relogio(seg) {
  const h = Math.floor(seg / 3600);
  const m = Math.floor((seg % 3600) / 60);
  return `${h}:${dois(m)}:${dois(seg % 60)}`;
}

/** 3725 -> "1h 02min"; 600 -> "10 min"; 0 -> "0 min". */
export function duracao(seg) {
  const h = Math.floor(seg / 3600);
  const m = Math.floor((seg % 3600) / 60);
  return h ? `${h}h ${dois(m)}min` : `${m} min`;
}

const somaDia = (dia) => Object.values(dados[dia] || {}).reduce((s, v) => s + v, 0);
const hoje = () => somaDia(chaveDia());

/** Totais para o ranking: tudo, e a semana atual (desde segunda-feira). */
export function totaisHoras() {
  const segunda = inicioDaSemana();
  let total = 0;
  let semana = 0;
  Object.keys(dados).forEach((dia) => {
    const seg = somaDia(dia);
    const [a, m, d] = dia.split('-').map(Number);
    total += seg;
    if (new Date(a, m - 1, d) >= segunda) semana += seg;
  });
  return { total, semana, semanaDesde: chaveDia(segunda) };
}

/* ---------- Registro do tempo ---------- */

/** Onde o tempo cai agora: a matéria aberta, o conteúdo aberto ou um balde geral. */
function chaveAtual() {
  const no = pagina.atual;
  if (no) {
    for (let p = no; p; p = p.pai) if (p.tipo === 'materia') return p.caminho;
    if (no.tipo === 'conteudo') return no.caminho;
    return GERAL;
  }
  return ['questoes', 'listas', 'simulados'].includes(pagina.rota) ? QUESTOES : GERAL;
}

function gravar() {
  if (trava.gravacao) return;
  memoria.gravar(CHAVES.horas, dados);
  semGravar = 0;
  dadosMudaram();
}

function somar(segundos) {
  const dia = (dados[chaveDia()] ||= {});
  const chave = chaveAtual();
  dia[chave] = (dia[chave] || 0) + segundos;
  semGravar += segundos;
  if (semGravar >= GRAVAR_A_CADA) gravar();
}

/* ---------- Cronômetro ---------- */

function botao() {
  return document.getElementById('relogio');
}

function desenharBotao() {
  const b = botao();
  if (!b) return;
  b.setAttribute('aria-pressed', String(rodando));
  b.innerHTML = `<span class="kj" aria-hidden="true">${rodando ? '止' : '時'}</span>` +
    `<span>${rodando ? 'Estudando…' : (aviso || 'Iniciar estudo')}</span>` +
    `<span class="tempo" title="Total de hoje">${relogio(hoje())}</span>`;
}

function iniciarCronometro() {
  if (rodando) return;
  rodando = true;
  aviso = '';
  ultimoTique = Date.now();
  ultimaAtividade = ultimoTique;
  desenharBotao();
}

function pausarCronometro(motivo = '') {
  if (!rodando) return;
  rodando = false;
  aviso = motivo;
  resto = 0;
  gravar();
  desenharBotao();
}

function alternarCronometro() {
  if (rodando) pausarCronometro();
  else iniciarCronometro();
}

function tique() {
  const agora = Date.now();
  if (rodando) {
    if (agora - ultimaAtividade > INATIVIDADE_MS) {
      pausarCronometro('Pausado (sem atividade)');
    } else {
      resto += Math.min(agora - ultimoTique, SALTO_MAXIMO_MS);
      ultimoTique = agora;
      const segundos = Math.floor(resto / 1000);
      if (segundos) {
        resto -= segundos * 1000;
        somar(segundos);
      }
    }
  }
  const t = document.querySelector('#relogio .tempo');
  if (t) t.textContent = relogio(hoje());
  ouvintes.forEach((fn) => fn());
}

/** Registra uma função chamada a cada segundo (usada pelo simulado cronometrado). */
export function aoTique(fn) {
  ouvintes.add(fn);
}

/** Liga o cronômetro: botão, contagem de atividade e gravação ao sair. */
export function ligarCronometro() {
  const marcar = () => { ultimaAtividade = Date.now(); };
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((e) => window.addEventListener(e, marcar, { passive: true, capture: true }));
  window.addEventListener('pagehide', gravar);
  document.addEventListener('visibilitychange', () => { if (document.hidden) gravar(); });
  botao().addEventListener('click', alternarCronometro);
  desenharBotao();
  setInterval(tique, 1000);
}

/* ---------- Página "Horas" ---------- */

function diasRecentes(n) {
  const lista = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    lista.push(d);
  }
  return lista;
}

/** Segunda-feira da semana atual, à meia-noite. */
function inicioDaSemana() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d;
}

function totalPorChave() {
  const total = {};
  Object.values(dados).forEach((dia) => {
    Object.entries(dia).forEach(([chave, seg]) => { total[chave] = (total[chave] || 0) + seg; });
  });
  return total;
}

function tituloDe(caminho) {
  return ROTULOS_ESPECIAIS[caminho] || (nos.get(caminho) && nos.get(caminho).titulo) || caminho;
}

/** Agrupa os totais por conteúdo, com as matérias dentro. */
function agruparPorConteudo(total) {
  const grupos = new Map();
  Object.entries(total).forEach(([chave, seg]) => {
    const partes = chave.split('/');
    const raiz = chave.startsWith('_') ? chave : partes.slice(0, 2).join('/');
    const g = grupos.get(raiz) || { chave: raiz, seg: 0, materias: [] };
    g.seg += seg;
    if (partes.length > 2) g.materias.push({ chave, seg });
    grupos.set(raiz, g);
  });
  return [...grupos.values()].sort((a, b) => b.seg - a.seg);
}

function graficoHtml() {
  const dias = diasRecentes(14).map((d) => ({ d, seg: somaDia(chaveDia(d)) }));
  const maior = Math.max(...dias.map((x) => x.seg), 1);
  const barras = dias.map(({ d, seg }) => {
    const rotulo = `${dois(d.getDate())}/${dois(d.getMonth() + 1)}: ${duracao(seg)}`;
    return `<li aria-label="${rotulo}" title="${rotulo}"><i style="height:${Math.max(Math.round((seg / maior) * 100), seg ? 4 : 1)}%"></i><small>${dois(d.getDate())}</small></li>`;
  }).join('');
  return `<ol class="barras" aria-label="Horas estudadas nos últimos 14 dias">${barras}</ol>`;
}

function porConteudoHtml(total) {
  const grupos = agruparPorConteudo(total);
  if (!grupos.length) return '<p class="nota">Ainda não há tempo registrado. Aperte <b>Iniciar estudo</b> no menu e abra a matéria que for estudar.</p>';
  const soma = grupos.reduce((s, g) => s + g.seg, 0);
  return grupos.map((g) => {
    const secao = !g.chave.startsWith('_') && nos.get(g.chave.split('/')[0]);
    const materias = g.materias.sort((a, b) => b.seg - a.seg)
      .map((m) => `<li><span>${esc(tituloDe(m.chave))}</span><span>${duracao(m.seg)}</span></li>`).join('');
    return `<section class="hora-grupo"><div class="hora-linha"><h3>${esc(tituloDe(g.chave))}${secao ? ` <small>${esc(secao.titulo)}</small>` : ''}</h3><span>${duracao(g.seg)}</span></div>` +
      barra({ total: soma, feitos: g.seg }, 'do tempo total') + (materias ? `<ul class="hora-materias">${materias}</ul>` : '') + '</section>';
  }).join('');
}

export function vHoras() {
  const total = totalPorChave();
  const semana = diasRecentes(7).filter((d) => d >= inicioDaSemana()).reduce((s, d) => s + somaDia(chaveDia(d)), 0);
  const geral = Object.values(total).reduce((s, v) => s + v, 0);
  const diasComEstudo = Object.keys(dados).filter((d) => somaDia(d) > 0).length;

  const extra = numeros([[duracao(hoje()), 'hoje'], [duracao(semana), 'nesta semana'], [duracao(geral), 'no total'], [diasComEstudo, 'dias estudados']]);
  return cabecalhoRota({
    sobre: 'Acompanhamento',
    titulo: 'Horas de estudo',
    lead: 'O cronômetro do menu soma o tempo na matéria que estiver aberta. Ele pausa sozinho depois de 10 minutos sem atividade.',
    kanji: '時',
    extra,
  }) +
    '<h2 class="titulo-sec">Últimos 14 dias</h2>' + graficoHtml() +
    '<h2 class="titulo-sec">Por conteúdo</h2>' + porConteudoHtml(total) +
    '<p class="aviso-edital">Os dados ficam só neste navegador. Limpar os dados do site apaga o histórico.</p>';
}
