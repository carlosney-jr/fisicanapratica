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
      key: 'Img1',
      label: "Figura 1 - Logo do IF",
      resposta: "assets/imgs/Navbar/LogoOficial.png",
      order: 3
    }),
    new TabelaPerguntas({
      key: '3',
      label: "Insira as seguintes informações:",
      order: 4,
      listaPerguntas: [
        new PerguntaFilha({
          key: "A",
          label: "Se o caminho do feixe de luz incidente for paralelo ao eixe óptico, qual o caminho do feixe de luz emergente?",
          order: 1
        }),
        new PerguntaFilha({
          key: "B",
          label: "Se o caminho do feixe de luz incidente for através do eixo F, qual o caminho do feixe de luz emergente?",
          order: 2
        })
      ]
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

}
