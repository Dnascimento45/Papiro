/* Assistente de estudos: conversa com o Claude sobre dúvidas, com envio de fotos e
   arquivos de texto, e que sabe buscar questões do banco do Papiro para praticar. */
import { CHAVES, esc, memoria, norm } from '../nucleo/util.js';
import { md } from '../interface/texto.js';
import { banco, questaoPorId } from '../nucleo/banco.js';
import { nos } from '../nucleo/modelo.js';
import { cabecalhoRota } from '../interface/componentes.js';
import { AVISO_SO_NO_ARTEFATO, aoPronta, plat } from './plataforma.js';
import { copiaErro, lerAnexos, ligarAnexos, temClaude, tiposAceitos } from './claude.js';
import { cartaoQuestao } from '../paginas/vistas-questoes.js';
import { aguardar } from '../nucleo/estado.js';
import { carregarTodosTextos, garantirQuestoes, questoesProntas, todosTextosProntos } from '../nucleo/carga.js';
import { reiniciarQuestoes } from '../interface/blocos.js';

const MAX_TURNOS = 16;          // quantas mensagens o assistente "lembra" (a página é quem guarda)
const MAX_QUESTOES_POR_BUSCA = 5;

const INSTRUCOES = [
  'Você é o assistente de estudos do Papiro, um caderno para concursos públicos de nível médio: Bloco A (federal) e Bloco C (Paraná e municípios).',
  'Responda sempre em português do Brasil, com clareza e sem enrolação, como um professor paciente. Explique o raciocínio passo a passo e dê um exemplo curto quando ajudar.',
  'Não invente leis, artigos, datas, vagas nem regras de banca. Se não tiver certeza, diga isso e peça para a pessoa conferir no edital ou na fonte oficial.',
  'Quando a pessoa pedir questões para praticar, ou quando um exemplo de prova ajudar, use a ferramenta buscar_questoes. Só cite como "do banco" as questões que a ferramenta devolveu; nunca invente questão de banca. Se não houver nenhuma, diga e, se quiser, crie uma questão própria avisando que é autoral e sem banca.',
  'Não revele o gabarito de uma questão do banco antes de a pessoa tentar, a menos que ela peça. As questões encontradas aparecem para ela abaixo da sua resposta, com as alternativas clicáveis: não repita enunciado e alternativas no texto, só comente.',
  'Se a pessoa anexar uma foto, descreva rapidamente o que leu antes de responder, para ela poder corrigir uma leitura errada.',
].join('\n');

let turnos = memoria.ler(CHAVES.assistente, []);   // [{ role, content, anexos?, q? }]

function salvar() {
  memoria.gravar(CHAVES.assistente, turnos.slice(-MAX_TURNOS));
}

/** Linha que situa o assistente: o último assunto que a pessoa abriu. */
function contextoDoAluno() {
  const ultimo = nos.get(memoria.ler(CHAVES.ultimo, ''));
  if (!ultimo || ultimo.tipo !== 'assunto') return '';
  return `\nContexto: o último assunto que a pessoa abriu no caderno foi "${ultimo.titulo}" (matéria "${ultimo.pai.titulo}", conteúdo "${ultimo.pai.pai.titulo}").`;
}

/* ---------- Ferramenta que o Claude pode chamar ---------- */

function buscarQuestoes(entrada, achadas) {
  const termos = norm(String(entrada.consulta || '')).split(/\s+/).filter((t) => t.length > 2);
  const conteudo = norm(String(entrada.conteudo || ''));
  const quantidade = Math.min(Math.max(Math.round(+entrada.quantidade) || 3, 1), MAX_QUESTOES_POR_BUSCA);
  const pontuadas = banco
    .filter((q) => !conteudo || norm(q.conteudo.titulo).includes(conteudo))
    .map((q) => ({ q, pontos: termos.filter((t) => q.texto.includes(t)).length }))
    .filter((x) => !termos.length || x.pontos > 0)
    .sort((a, b) => b.pontos - a.pontos)
    .slice(0, quantidade);
  if (!pontuadas.length) return { encontradas: 0, total_no_banco: banco.length };
  pontuadas.forEach(({ q }) => achadas.add(q.id));
  return {
    encontradas: pontuadas.length,
    questoes: pontuadas.map(({ q }) => ({
      id: q.id,
      conteudo: q.conteudo.titulo,
      assunto: q.assunto ? q.assunto.titulo : null,
      banca: q.banca || null,
      ano: q.ano || null,
      enunciado: String(q.bloco.enunciado),
      alternativas: q.bloco.alternativas,
      gabarito: 'ABCDEFGH'[q.correta],
      comentario: q.bloco.comentario || null,
    })),
  };
}

function ferramentas(achadas) {
  if (!plat.ferramentas) return undefined;
  return [{
    name: 'buscar_questoes',
    description: 'Procura questões no banco do Papiro. Devolve até 5 com id, conteúdo, assunto, banca, enunciado, alternativas, gabarito e comentário. Use quando a pessoa pedir questões para praticar ou um exemplo de como o tema cai em prova.',
    inputSchema: {
      type: 'object',
      properties: {
        consulta: { type: 'string', description: 'Palavras-chave do tema, ex.: "regra de três".' },
        conteudo: { type: 'string', description: 'Título do conteúdo para restringir, ex.: "Matemática" (opcional).' },
        quantidade: { type: 'number', description: 'Quantas questões (1 a 5).' },
      },
      required: ['consulta'],
    },
    execute: (entrada) => buscarQuestoes(entrada, achadas),
  }];
}

/* ---------- Tela ---------- */

export function vAssistente() {
  // A ferramenta buscar_questoes procura nas questões autorais (todos os textos) e nas de provas
  // já baixadas; as questões mostradas em conversas anteriores também precisam estar aqui.
  const ids = turnos.flatMap((t) => t.q || []);
  if (!todosTextosProntos() || !questoesProntas(ids)) aguardar(Promise.all([carregarTodosTextos(), garantirQuestoes(ids)]));
  return cabecalhoRota({
    sobre: 'Ajuda',
    titulo: 'Assistente de estudos',
    lead: 'Tire dúvidas, peça questões do banco para praticar e anexe uma foto ou um arquivo de texto. O Claude pode errar: confira leis e datas no edital.',
    kanji: '助',
    extra: '<div id="assist-corpo"><p class="nota">Conectando…</p></div>',
  });
}

function bolhaUsuario(turno) {
  const anexos = turno.anexos && turno.anexos.length ? `<small class="bolha-anexos">Anexos: ${turno.anexos.map(esc).join(', ')}</small>` : '';
  return `<div class="bolha eu"><div class="prosa">${md(turno.exibir || turno.content)}</div>${anexos}</div>`;
}

function cartoesDe(ids) {
  const questoes = (ids || []).map(questaoPorId).filter(Boolean);
  if (!questoes.length) return '';
  return `<div class="bolha-questoes"><h3 class="titulo-sec">Questões do banco</h3>${questoes.map((q) => cartaoQuestao(q)).join('')}</div>`;
}

function bolhaClaude(turno) {
  return `<div class="bolha claude"><div class="prosa">${md(turno.content)}</div></div>${cartoesDe(turno.q)}`;
}

function conversaHtml() {
  reiniciarQuestoes();
  if (!turnos.length) {
    return '<div class="vazio-box"><span class="kj" aria-hidden="true">助</span><p>Pergunte sobre um assunto, cole uma questão que você errou ou peça "me dê 3 questões de regra de três".</p></div>';
  }
  return turnos.map((t) => (t.role === 'user' ? bolhaUsuario(t) : bolhaClaude(t))).join('');
}

export function montarAssistente(raiz, _partes, vivo) {
  const corpo = raiz.querySelector('#assist-corpo');
  let controlador = null;

  aoPronta(() => {
    if (!vivo()) return;
    if (!temClaude()) {
      corpo.innerHTML = `<p class="nota">${esc(AVISO_SO_NO_ARTEFATO)}</p>`;
      return;
    }
    corpo.innerHTML = '<div id="assist-conversa" class="conversa" aria-live="polite"></div>' +
      '<form id="assist-form" class="composer">' +
      '<div id="assist-anexos" class="anexos"></div>' +
      '<label for="assist-texto" class="sr-only">Sua mensagem</label>' +
      '<textarea id="assist-texto" rows="3" placeholder="Escreva sua dúvida… (Ctrl+Enter envia)"></textarea>' +
      '<div class="composer-acoes">' +
      '<label class="btn" for="assist-arquivo">Anexar</label>' +
      `<input id="assist-arquivo" class="sr-only" type="file" multiple accept="${esc(tiposAceitos())}">` +
      '<button type="submit" class="btn feito" id="assist-enviar">Enviar</button>' +
      '<button type="button" class="btn" id="assist-parar" hidden>Parar</button>' +
      '<button type="button" class="btn-link" id="assist-nova">Nova conversa</button></div>' +
      '<p class="form-msg" id="assist-msg" role="status"></p></form>';

    const conversa = corpo.querySelector('#assist-conversa');
    const campo = corpo.querySelector('#assist-texto');
    const msg = corpo.querySelector('#assist-msg');
    const enviar = corpo.querySelector('#assist-enviar');
    const parar = corpo.querySelector('#assist-parar');
    const anexos = ligarAnexos({ entrada: corpo.querySelector('#assist-arquivo'), lista: corpo.querySelector('#assist-anexos') });

    const desenharConversa = () => { conversa.innerHTML = conversaHtml(); };
    desenharConversa();

    campo.addEventListener('paste', (e) => {
      const imagens = [...(e.clipboardData ? e.clipboardData.files : [])].filter((f) => f.type.startsWith('image/'));
      if (imagens.length) anexos.adicionar(imagens);
    });
    campo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) corpo.querySelector('#assist-form').requestSubmit();
    });
    parar.addEventListener('click', () => { if (controlador) controlador.abort(); });
    corpo.querySelector('#assist-nova').addEventListener('click', () => {
      if (controlador) controlador.abort();
      turnos = [];
      salvar();
      desenharConversa();
      msg.textContent = '';
    });

    corpo.querySelector('#assist-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      if (controlador) return;
      const texto = campo.value.trim();
      if (!texto && !anexos.arquivos.length) return;

      msg.textContent = '';
      const lidos = await lerAnexos(anexos.arquivos);
      if (lidos.avisos.length) msg.textContent = lidos.avisos.join(' ');
      let conteudo = texto || 'Veja o que anexei.';
      lidos.textos.forEach((t) => { conteudo += `\n\n[Arquivo anexado: ${t.nome}]\n${t.texto}`; });
      if (lidos.imagens.length) conteudo += `\n\n[${lidos.imagens.length} imagem(ns) anexada(s) a esta mensagem.]`;
      const nomesAnexos = [...lidos.textos.map((t) => t.nome), ...lidos.imagens.map((i) => i.name || 'imagem')];

      turnos.push({ role: 'user', content: conteudo, exibir: texto || 'Veja o que anexei.', anexos: nomesAnexos });
      campo.value = '';
      anexos.limpar();
      desenharConversa();
      const bolha = document.createElement('div');
      bolha.className = 'bolha claude';
      bolha.innerHTML = '<div class="prosa"><p class="nota">Pensando…</p></div>';
      conversa.appendChild(bolha);

      controlador = new AbortController();
      enviar.disabled = true;
      parar.hidden = false;
      const achadas = new Set();
      const entrada = [
        { role: 'user', content: INSTRUCOES + contextoDoAluno() },
        ...turnos.slice(-MAX_TURNOS).map((t) => ({ role: t.role, content: t.content })),
      ];
      try {
        const opcoes = { signal: controlador.signal, onText: ({ text }) => { if (vivo()) bolha.firstChild.innerHTML = md(text); } };
        const ferr = ferramentas(achadas);
        if (ferr) opcoes.tools = ferr; else opcoes.cache = false;
        if (lidos.imagens.length) opcoes.images = lidos.imagens;
        const { text, truncated } = await plat.sample(entrada, opcoes);
        turnos.push({ role: 'assistant', content: text, q: [...achadas] });
        salvar();
        if (vivo()) {
          desenharConversa();
          if (truncated) msg.textContent = 'A resposta foi cortada. Peça "continue" para ver o resto.';
        }
      } catch (erro) {
        if (!vivo()) return;
        if (erro && erro.text) {
          turnos.push({ role: 'assistant', content: `${erro.text}\n\n*(resposta interrompida)*`, q: [...achadas] });
          salvar();
        }
        desenharConversa();
        if (!erro || erro.code !== 'cancelled') msg.textContent = copiaErro(erro && erro.code);
      } finally {
        controlador = null;
        if (vivo()) {
          enviar.disabled = false;
          parar.hidden = true;
        }
      }
    });
  });

  return () => { if (controlador) controlador.abort(); };
}
