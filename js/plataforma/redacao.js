/* Correção de redações: o Claude lê o texto digitado ou fotos da folha manuscrita
   e devolve nota estimada, problemas com a correção e um trecho reescrito.
   A nota é uma estimativa por critérios gerais, não o espelho oficial de uma banca. */
import { CHAVES, esc, memoria } from '../nucleo/util.js';
import { md } from '../interface/texto.js';
import { cabecalhoRota } from '../interface/componentes.js';
import { AVISO_SO_NO_ARTEFATO, aoPronta, plat } from './plataforma.js';
import { copiaErro, lerAnexos, ligarAnexos, temClaude, tiposAceitos } from './claude.js';

const MAX_HISTORICO = 20;
const MAX_CARACTERES = 20000;

const GENEROS = [
  'Dissertativo-argumentativo',
  'Texto de opinião',
  'Redação oficial (ofício, requerimento, memorando)',
  'Resumo ou paráfrase',
  'Outro (descreva no tema)',
];

let historico = memoria.ler(CHAVES.redacoes, []);   // [{ id, data, tema, genero, feedback }]

function salvar() {
  memoria.gravar(CHAVES.redacoes, historico.slice(0, MAX_HISTORICO));
}

function montarPedido({ tema, genero, banca, linhas, texto, temFotos }) {
  const partes = [
    'Você é corretor de redações de concursos públicos de nível médio. Avalie a redação abaixo e responda em português do Brasil, com tom respeitoso e direto.',
    `Tema ou proposta: ${tema || '(não informado)'}`,
    `Gênero pedido: ${genero}`,
    banca ? `Banca informada: ${banca}. Você não tem o espelho de correção oficial dessa banca: use critérios gerais e avise que a nota é estimada.` : 'Banca não informada: use critérios gerais e avise que a nota é estimada.',
    linhas ? `Limite de linhas: ${linhas}.` : '',
    temFotos ? 'O texto está nas imagens anexadas (folha manuscrita). Transcreva fielmente antes de avaliar e marque [ilegível] onde não conseguir ler; não "conserte" erros ao transcrever.' : '',
    texto ? `Texto digitado:\n"""\n${texto}\n"""` : '',
    'Formato da resposta (Markdown simples, sem tabelas e sem emojis), com estes títulos de nível 3 (###), nesta ordem:',
    '### Transcrição (somente se veio de foto)',
    '### Visão geral (3 a 4 frases)',
    '### Nota estimada (de 0 a 10, com a nota de cada critério: adequação ao tema e ao gênero; estrutura, coesão e coerência; norma culta; vocabulário e formalidade. Deixe claro que é uma estimativa e não a nota oficial)',
    '### O que está bom',
    '### O que corrigir (lista: trecho original, como ficaria, e a regra ou o motivo)',
    '### Um trecho reescrito (reescreva o parágrafo mais fraco mantendo as ideias da pessoa)',
    '### Para treinar (2 ou 3 ações práticas)',
    'Se não tiver certeza de uma regra gramatical ou de um padrão de redação oficial, diga "conferir em gramática" ou "conferir no manual" em vez de afirmar. Não invente critérios de banca.',
  ];
  return partes.filter(Boolean).join('\n\n');
}

/* ---------- Tela ---------- */

export function vRedacao() {
  return cabecalhoRota({
    sobre: 'Ajuda',
    titulo: 'Correção de redação',
    lead: 'Cole o texto ou envie fotos da folha manuscrita. A nota é uma estimativa por critérios gerais, não a nota oficial de nenhuma banca.',
    kanji: '書',
    extra: '<div id="redacao-corpo"><p class="nota">Conectando…</p></div>',
  });
}

function historicoHtml() {
  if (!historico.length) return '';
  const itens = historico.map((h) => `<details class="redacao-item"><summary><span>${esc(h.tema || 'Sem tema')}</span><small>${esc(new Date(h.data).toLocaleDateString('pt-BR'))} · ${esc(h.genero)}</small></summary>` +
    `<div class="prosa">${md(h.feedback)}</div></details>`).join('');
  return `<h2 class="titulo-sec">Correções anteriores</h2><div class="redacao-historico">${itens}</div>`;
}

export function montarRedacao(raiz, _partes, vivo) {
  const corpo = raiz.querySelector('#redacao-corpo');
  let controlador = null;

  aoPronta(() => {
    if (!vivo()) return;
    if (!temClaude()) {
      corpo.innerHTML = `<p class="nota">${esc(AVISO_SO_NO_ARTEFATO)}</p>`;
      return;
    }
    const fotos = !!plat.imagens;
    corpo.innerHTML = '<form id="redacao-form" class="composer redacao-form">' +
      '<div class="form-grade">' +
      '<label><span>Tema ou proposta</span><input id="redacao-tema" type="text" maxlength="300" placeholder="Ex.: A importância da leitura no serviço público" autocomplete="off"></label>' +
      `<label><span>Gênero</span><select id="redacao-genero">${GENEROS.map((g) => `<option>${esc(g)}</option>`).join('')}</select></label>` +
      '<label><span>Banca (opcional)</span><input id="redacao-banca" type="text" maxlength="60" placeholder="Ex.: FAFIPA" autocomplete="off"></label>' +
      '<label><span>Limite de linhas (opcional)</span><input id="redacao-linhas" type="number" min="1" max="200" placeholder="Ex.: 30"></label></div>' +
      '<label class="campo-largo"><span>Texto da redação</span>' +
      `<textarea id="redacao-texto" rows="12" placeholder="Cole ou digite aqui${fotos ? ', ou envie fotos da folha abaixo' : ''}…"></textarea></label>` +
      '<div id="redacao-anexos" class="anexos"></div>' +
      '<div class="composer-acoes">' +
      (fotos ? '<label class="btn" for="redacao-arquivo">Enviar fotos da folha</label>' : '') +
      `<input id="redacao-arquivo" class="sr-only" type="file" multiple accept="${esc(tiposAceitos())}"${fotos ? '' : ' hidden'}>` +
      '<button type="submit" class="btn feito" id="redacao-enviar"><span class="kj">済</span>Corrigir</button>' +
      '<button type="button" class="btn" id="redacao-parar" hidden>Parar</button></div>' +
      '<p class="form-msg" id="redacao-msg" role="status"></p></form>' +
      '<div id="redacao-saida" class="redacao-saida" aria-live="polite" hidden></div>' +
      `<div id="redacao-historico">${historicoHtml()}</div>`;

    const f = (id) => corpo.querySelector(id);
    const msg = f('#redacao-msg');
    const saida = f('#redacao-saida');
    const enviar = f('#redacao-enviar');
    const parar = f('#redacao-parar');
    const anexos = ligarAnexos({ entrada: f('#redacao-arquivo'), lista: f('#redacao-anexos') });

    f('#redacao-texto').addEventListener('paste', (e) => {
      const imagens = [...(e.clipboardData ? e.clipboardData.files : [])].filter((a) => a.type.startsWith('image/'));
      if (imagens.length && fotos) { anexos.adicionar(imagens); e.preventDefault(); }
    });
    parar.addEventListener('click', () => { if (controlador) controlador.abort(); });

    f('#redacao-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      if (controlador) return;
      const texto = f('#redacao-texto').value.trim().slice(0, MAX_CARACTERES);
      const lidos = await lerAnexos(anexos.arquivos);
      msg.textContent = lidos.avisos.join(' ');
      if (!texto && !lidos.imagens.length) {
        msg.textContent = 'Cole o texto ou envie ao menos uma foto da folha.';
        return;
      }
      const dados = {
        tema: f('#redacao-tema').value.trim(),
        genero: f('#redacao-genero').value,
        banca: f('#redacao-banca').value.trim(),
        linhas: f('#redacao-linhas').value.trim(),
        texto,
        temFotos: lidos.imagens.length > 0,
      };

      saida.hidden = false;
      saida.innerHTML = '<p class="nota">Lendo e corrigindo… isso pode levar um minuto.</p>';
      saida.scrollIntoView({ behavior: 'smooth', block: 'start' });
      controlador = new AbortController();
      enviar.disabled = true;
      parar.hidden = false;
      try {
        const opcoes = {
          cache: false,
          signal: controlador.signal,
          onText: ({ text }) => { if (vivo()) saida.innerHTML = `<div class="prosa">${md(text)}</div>`; },
        };
        if (lidos.imagens.length) opcoes.images = lidos.imagens;
        const { text, truncated } = await plat.sample(montarPedido(dados), opcoes);
        historico.unshift({ id: `r${Date.now().toString(36)}`, data: Date.now(), tema: dados.tema, genero: dados.genero, feedback: text });
        historico = historico.slice(0, MAX_HISTORICO);
        salvar();
        if (vivo()) {
          f('#redacao-historico').innerHTML = historicoHtml();
          if (truncated) msg.textContent = 'A correção foi cortada. Envie um texto menor ou uma parte de cada vez.';
        }
      } catch (erro) {
        if (!vivo()) return;
        if (erro && erro.text) saida.innerHTML = `<div class="prosa">${md(erro.text)}<p class="nota">(correção interrompida)</p></div>`;
        else saida.hidden = true;
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
