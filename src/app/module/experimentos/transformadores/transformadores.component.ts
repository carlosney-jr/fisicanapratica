import { Component } from '@angular/core';
import { Imagem } from '../../Imagem';
import { Pergunta } from '../../Pergunta';
import { PerguntaFilha } from '../../PerguntaFilha';
import { PerguntasRespostas } from '../../PerguntaRespostas';
import { TabelaPerguntas } from '../../Tabela';

@Component({
  selector: 'app-transformadores',
  templateUrl: './transformadores.component.html',
  styleUrls: ['./transformadores.component.scss']
})
export class TransformadoresComponent {
  private _aba: string = "experimento"

  get aba() {
    return this._aba;
  }

  set aba(aba: string) {
    if (aba=="experimento" || aba=="PDF") {
      this._aba = aba;
    } else {
      return
    }
  }

  configurarAba(evento: string){
    this._aba = evento;
  }
  public questoes: PerguntasRespostas<string>[] = [
    new Pergunta({
      key: '1',
      label: "O que foi observado na deflexão do galvanômetro, após a movimentação das bobinas?",
      order: 1
    }),
    new Pergunta({
      key: '2',
      label: 'Após colocar o núcleo em "I" na bobina de campo, tal como na figura 7, o que pode ser relatado?',
      order: 2
    }),
    new Imagem({
      key: 'Img1',
      label: "",
      resposta: "assets/imgs/Experimentos/Transformador/TRA0708.png",
      order: 3
    }),
    new Pergunta({
      key: '3',
      label: "Como na figura 7, quando as bobinas foram postas próximas umas as outras e o interruptor foi aberto e fechado, o que pode ser relatado?",
      order: 4
    }),
    new Pergunta({
      key: '4',
      label: "Após colocar o núcleo em ambas as bobinas na mesma distância e ter fechado e aberto o interruptor novamente, o que ocorreu?",
      order: 5
    }),
    new Pergunta({
      key: '5',
      order: 6,
      label: "Depois de ter colocado a bobina de campo e a de indução no núcleo em 'U' (como na figura 8) e ter aberto e fechado o interruptor, o que aconteceu?"
    }),
    new Pergunta({
      key: '6',
      order: 7,
      label: "O que ocorreu quando foi alterada a tensão da fonte de alimentação com o interruptor fechado?"
    })
  ]

}
