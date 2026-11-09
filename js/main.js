/* Ponto de entrada do Papiro.
   Expõe a API window.ESTUDO (usada por conteudos/*.js) e carrega o índice de conteúdo.
   Para adicionar conteúdo não é preciso mexer em js/: veja conteudos/indice.js e conteudos/_MODELO.js. */
import { api, aoTerminarCarga, carregarIndice, vigiarErros, vigiarIndice } from './registro.js';
import { iniciar } from './app.js';
import { iniciarPlataforma } from './plataforma.js';

/* Garante o idioma mesmo quando a página é embrulhada pelo artefato. */
document.documentElement.lang = 'pt-BR';

window.ESTUDO = api;
aoTerminarCarga(iniciar);
vigiarErros();
vigiarIndice();
carregarIndice('conteudos/indice.js');
iniciarPlataforma();   // conecta com o artefato (conta, banco compartilhado, Claude), sem bloquear a página
