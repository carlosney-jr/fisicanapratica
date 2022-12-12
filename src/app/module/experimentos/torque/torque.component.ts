import { PerguntaFilha } from './../../PerguntaFilha';
import { TabelaPerguntas } from './../../Tabela';
import { Component } from '@angular/core';
import { Pergunta } from '../../Pergunta';
import { PerguntasRespostas } from '../../PerguntaRespostas';

@Component({
  selector: 'app-torque',
  templateUrl: './torque.component.html',
  styleUrls: ['./torque.component.scss'],
})
export class TorqueComponent {
  private _aba: string = 'experimento';

  get aba() {
    return this._aba;
  }

  set aba(aba: string) {
    if (aba == 'experimento' || aba == 'PDF') {
      this._aba = aba;
    } else {
      return;
    }
  }

  configurarAba(evento: string) {
    this._aba = evento;
  }

  public questoes: PerguntasRespostas<string>[] = [
    new TabelaPerguntas({
      key: '1',
      order: 1,
      label:
        'Insira o massor com peso 50 no ponto 10. Após isso, com o auxílio do dinamômetro, verifique qual deve ser o peso posto em um ponto específico da gangorra para equilibrá-la e insira abaixo.',
      listaPerguntas: [
        new PerguntaFilha({
          key: 'A',
          order: 1,
          label:
            'Caso o peso seja posto no 10º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'B',
          order: 2,
          label:
            'Caso o peso seja posto no 9º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'C',
          order: 3,
          label:
            'Caso o peso seja posto no 8º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'D',
          order: 4,
          label:
            'Caso o peso seja posto no 7º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'E',
          order: 5,
          label:
            'Caso o peso seja posto no 6º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'F',
          order: 6,
          label:
            'Caso o peso seja posto no 5º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'G',
          order: 7,
          label:
            'Caso o peso seja posto no 4º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'H',
          order: 8,
          label:
            'Caso o peso seja posto no 3º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'I',
          order: 9,
          label:
            'Caso o peso seja posto no 2º ponto, quanto deve ser seu peso para equilibrar?',
        }),
        new PerguntaFilha({
          key: 'J',
          order: 10,
          label:
            'Caso o peso seja posto no 1º ponto, quanto deve ser seu peso para equilibrar?',
        }),
      ],
    }),
    new Pergunta({
      key: '2',
      order: 2,
      label:
        'Analisando a resposta da 1ª questão, diga qual a relação entre a distância do eixo de rotação e a força aplicada (indicada no dinamômetro).',
    }),
    new TabelaPerguntas({
      key: '3',
      order: 3,
      label: "Considere a distância entre os pontos de 1 cm. Escolha 5 casos da questão 1. Para cada caso, insira o valor da força aplicada, da distância do eixo de rotação (em metros) e o produto de força pela distância.",
      listaPerguntas: [
        new PerguntaFilha({
          key: 'A',
          order: 1,
          label: "Para a 1ª situação, seu valor da força aplicada, a distância do eixo de rotação e o produto desses dois valores são:"
        }),
        new PerguntaFilha({
          key: 'B',
          order: 2,
          label: "Para a 2ª situação, seu valor da força aplicada, a distância do eixo de rotação e o produto desses dois valores são:"
        }),
        new PerguntaFilha({
          key: 'C',
          order: 3,
          label: "Para a 3ª situação, seu valor da força aplicada, a distância do eixo de rotação e o produto desses dois valores são:"
        }),
        new PerguntaFilha({
          key: 'D',
          order: 4,
          label: "Para a 4ª situação, seu valor da força aplicada, a distância do eixo de rotação e o produto desses dois valores são:"
        }),
        new PerguntaFilha({
          key: 'E',
          order: 5,
          label: "Para a 5ª situação, seu valor da força aplicada, a distância do eixo de rotação e o produto desses dois valores são:"
        })
      ]
    }),
    new Pergunta({
      key: '4',
      order: 4,
      label: "De acordo com a questão 3, se percebeu o efeito conhecido como Torque, onde Torque = Força × Distância. Agora coloque 40 g na posição 6. Qual a posição, do lado oposto, que devo colocar 60 g para a gangorra ficar em equilíbrio? Justifique sua resposta com cálculos e verifique experimentalmente."
    }),
    new Pergunta({
      key: '5',
      order: 5,
      label: "Coloque 80 g na posição 3. Qual a posição, do lado oposto, que devo colocar 40 g para a gangorra ficar em equilíbrio? Justifique sua resposta com cálculos e verifique experimentalmente."
    })
  ];
}
