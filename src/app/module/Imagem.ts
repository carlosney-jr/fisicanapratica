import { PerguntasRespostas } from './PerguntasRespostas';
export class Imagem extends PerguntasRespostas<string> {
    override type='imagem'
    override required=false;
}