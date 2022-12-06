import { PerguntasRespostas } from './PerguntaRespostas';
export class TabelaPerguntas extends PerguntasRespostas<string> {
    override type='tabela';
    override required=true;
}