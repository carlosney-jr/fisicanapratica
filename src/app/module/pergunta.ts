import { PerguntasRespostas } from './perguntasrespostas';
export class Pergunta extends PerguntasRespostas<string> {
    override type='text'
    override required=true;
}