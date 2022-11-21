import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lente-divergente',
  templateUrl: './lente-divergente.component.html',
  styleUrls: ['./lente-divergente.component.scss']
})
export class LenteDivergenteComponent implements OnInit {
  private _aba: string = "experimento"

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

  configurarAba(evento: Event){
    this.aba = evento.aba;
  }
}
