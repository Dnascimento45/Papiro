/* Páginas especiais (fora da árvore de conteúdo).
   O endereço é "#nome" ou "#nome--detalhe" (ex.: #simulados--fazer).
   Campos de cada rota:
     rotulo, titulo, kanji  textos do menu, da aba e do fundo
     vista(partes)          HTML inicial da página
     montar(raiz, partes, vivo)  opcional: liga a página depois de desenhada e devolve
                                 uma função de limpeza; `vivo()` diz se a página ainda está aberta
     disponivel()           opcional: se false, o link some do menu (recurso que só existe no artefato)
     oculta                 opcional: não aparece no menu (o acesso é por outro lugar) */
import { vPlano } from '../paginas/plano.js';
import { vQuestoes, vListas, vSimulados } from '../paginas/vistas-questoes.js';
import { vHoras } from '../paginas/horas.js';
import { vRank, montarRank } from '../plataforma/rank.js';
import { vPerfil, montarPerfil } from '../plataforma/perfil.js';
import { vAssistente, montarAssistente } from '../plataforma/assistente.js';
import { vRedacao, montarRedacao } from '../plataforma/redacao.js';
import { plat, podeRank } from '../plataforma/plataforma.js';

export const ROTAS = {
  plano: { rotulo: 'Plano', titulo: 'Plano de estudos', kanji: '計', vista: vPlano },
  questoes: { rotulo: 'Questões', titulo: 'Banco de questões', kanji: '問', vista: vQuestoes },
  listas: { rotulo: 'Listas', titulo: 'Listas de questões', kanji: '札', vista: vListas },
  simulados: { rotulo: 'Simulados', titulo: 'Simulados', kanji: '試', vista: vSimulados },
  horas: { rotulo: 'Horas', titulo: 'Horas de estudo', kanji: '時', vista: vHoras },
  rank: { rotulo: 'Ranking', titulo: 'Ranking', kanji: '位', vista: vRank, montar: montarRank, disponivel: podeRank },
  assistente: { rotulo: 'Assistente', titulo: 'Assistente de estudos', kanji: '助', vista: vAssistente, montar: montarAssistente, disponivel: () => !!plat.sample },
  redacao: { rotulo: 'Redação', titulo: 'Correção de redação', kanji: '書', vista: vRedacao, montar: montarRedacao, disponivel: () => !!plat.sample },
  perfil: { rotulo: 'Perfil', titulo: 'Perfil', kanji: '人', vista: vPerfil, montar: montarPerfil, oculta: true },
};
