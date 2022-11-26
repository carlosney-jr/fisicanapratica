import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lente-divergente',
  templateUrl: './lente-divergente.component.html',
  styleUrls: ['./lente-divergente.component.scss']
})
export class LenteDivergenteComponent implements OnInit {
  private _aba: string = "experimento"
  public questoes: string[] = [
    "Como foi possível perceber o efeito 'Monga'?"
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
