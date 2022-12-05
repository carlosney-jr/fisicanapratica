import { TabelaPerguntas } from './../../Tabela';

import { Component, OnInit } from '@angular/core';
import { Imagem } from '../../Imagem';
import { Pergunta } from '../../Pergunta';
import { PerguntasRespostas } from '../../PerguntasRespostas';

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
      label: "Como foi possível perceber o efeito 'Monga'?",
      order: 1
    }),
    new Pergunta({
      key: '2',
      label: "Insira as anotações daquilo lá",
      order: 2
    }),
    new Imagem({
      key: '3',
      value: "assets/imgs/Navbar/LogoOficial.png",
      order: 3
    }),
    new TabelaPerguntas({
      key: '4',
      label: "Insira as seguintes informações:",
      order: 4,
      listaPerguntas: [
        new Pergunta({
          key: "A",
          label: "Se o caminho do feixe de luz incidente for paralelo ao eixe óptico, qual o caminho do feixe de luz emergente?",
          order: 1
        }),
        new Pergunta({
          key: "B",
          label: "Se o caminho do feixe de luz incidente for através do eixo F, qual o caminho do feixe de luz emergente?",
          order: 2
        })
      ]
    })
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

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
}
