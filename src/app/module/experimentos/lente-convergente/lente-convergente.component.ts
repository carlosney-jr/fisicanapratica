import { Component } from '@angular/core';
import { PerguntasRespostas } from '../../PerguntaRespostas';

@Component({
  selector: 'app-lente-convergente',
  templateUrl: './lente-convergente.component.html',
  styleUrls: ['./lente-convergente.component.scss']
})
export class LenteConvergenteComponent {
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
    
  ]
}
