/* Páginas especiais (fora da árvore de conteúdo): questões, listas, simulados e horas.
   O endereço é "#nome" ou "#nome--detalhe" (ex.: #simulados--fazer). */
import { vQuestoes, vListas, vSimulados } from './vistas-questoes.js';
import { vHoras } from './horas.js';

export const ROTAS = {
  questoes: { rotulo: 'Questões', titulo: 'Banco de questões', kanji: '問', vista: vQuestoes },
  listas: { rotulo: 'Listas', titulo: 'Listas de questões', kanji: '札', vista: vListas },
  simulados: { rotulo: 'Simulados', titulo: 'Simulados', kanji: '試', vista: vSimulados },
  horas: { rotulo: 'Horas', titulo: 'Horas de estudo', kanji: '時', vista: vHoras },
};
