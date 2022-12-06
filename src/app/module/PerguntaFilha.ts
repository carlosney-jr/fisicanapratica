import { PerguntasRespostas } from './PerguntaRespostas';
export class PerguntaFilha extends PerguntasRespostas<string> {
    override type='text';
    override perguntaFilha= true;
    override required=true;
}