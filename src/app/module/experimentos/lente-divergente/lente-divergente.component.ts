
import { Component, OnInit } from '@angular/core';
import { Pergunta } from 'src/app/module/pergunta';
import { PerguntasRespostas } from '../../perguntasrespostas';

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
