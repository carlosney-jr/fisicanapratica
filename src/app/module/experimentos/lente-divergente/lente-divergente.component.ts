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
    })
  ]

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

  constructor() {
  }

  ngOnInit(): void {
  }
}
