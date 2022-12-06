import { PerguntasRespostas } from './PerguntaRespostas';
export class Pergunta extends PerguntasRespostas<string> {
    override type='text';
    override required=true;
}