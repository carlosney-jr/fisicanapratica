import { PerguntasRespostas } from './PerguntasRespostas';
export class Pergunta extends PerguntasRespostas<string> {
    override type='text'
    override required=true;
}