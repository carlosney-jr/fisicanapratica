import { TabelaPerguntas } from './../../Tabela';

import { Component, OnInit } from '@angular/core';
import { Imagem } from '../../Imagem';
import { PerguntasRespostas } from '../../PerguntaRespostas';
import { Pergunta } from '../../Pergunta';
import { PerguntaFilha } from '../../PerguntaFilha';

@Component({
  selector: 'app-lente-divergente',
  templateUrl: './lente-divergente.component.html',
  styleUrls: ['./lente-divergente.component.scss']
})
export class LenteDivergenteComponent implements OnInit {
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
      order: 1,
      label: "Após movimentar a caixa de luz para posições diagonais como, por exemplo, a figura 1, o que foi observado do percurso da luz após atravessar a lente?"
    }),
    new Imagem({
      key: "Img1",
      order: 2,
      label: "Figura 1 - Exemplo de movimentação da caixa de luz",
      resposta: "assets/imgs/Experimentos/LenteDivergente/LD03.png"
    }),
    new Pergunta({
      key: '2',
      order: 2,
      label: "De acordo com a figura 2, descreva a imagem no anteparo e a posição do ponto focal (encontro dos raios)"
    }),
    new Imagem({
      key: "Img2",
      order: 4,
      label: "Figura 2 - Incidência dos raios no ponto F",
      resposta: "assets/imgs/Experimentos/LenteDivergente/LD08.png"
    }),
    new Pergunta({
      key: "3",
      order: 5,
      label: "Observando o caminho da luz e em particular o ponto focal para onde o ponto de convergência se desloca de acordo com a figura 3?"
    }),
    new Imagem({
      key: "Img3",
      order: 6,
      label: "Figura 3",
      resposta: "assets/imgs/Experimentos/LenteDivergente/LD09.png"
    }),
    new Pergunta({
      key: "4",
      order: 7,
      label: "Observando a figura 4, o que se pode concluir a respeito da dificuldade visual de uma pessoa com miopia através da luz após a refração?"
    }),
    new Imagem({
      key: "Img4",
      order: 8,
      label: "Figura 4",
      resposta: "assets/imgs/Experimentos/LenteDivergente/LD11.png"
    }),
    new TabelaPerguntas({
      key: "5",
      order: 9,
      label: "Agora para resumir o experimento feito, preencha as seguintes questões:",
      listaPerguntas: [
        new PerguntaFilha({
          key: "A",
          order: 1,
          label: "Quando o objeto está longe e estava condicionado à luz paralela ao longo do eixe óptico, o que foi observado?"
        }),
        new PerguntaFilha({
          key: "B",
          order: 2,
          label: "Quando o objeto está longe e estava condicionado à luz paralela e lente adicional entre a caixa de luz e a lente no modelo de olho, o que foi observado?"
        }),
        new PerguntaFilha({
          key: "C",
          order: 3,
          label: "Quando o objeto está perto e estava condicionado à luz divergente e a posição da caixa de luz estava em P, o que foi observado?"
        })
      ]
    }),
    new Pergunta({
      key: '6',
      order: 10,
      label: "Agora faça um texto com as principais características e funções de uma lente divergente, problema visual denominado de miopia e sua correção."
    })
  ]


  constructor() {
  }

  ngOnInit(): void {
  }
}
