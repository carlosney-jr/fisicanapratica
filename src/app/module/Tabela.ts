import { PerguntasRespostas } from './PerguntasRespostas';
export class TabelaPerguntas extends PerguntasRespostas<string> {
    override type='tabela'
    override required=false;
}