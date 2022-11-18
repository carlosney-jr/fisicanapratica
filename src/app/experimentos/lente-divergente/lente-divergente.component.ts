import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lente-divergente',
  templateUrl: './lente-divergente.component.html',
  styleUrls: ['./lente-divergente.component.scss']
})
export class LenteDivergenteComponent implements OnInit {
  _aba: string = "experimento"

  constructor() { }

  ngOnInit(): void {
    
  }

  set aba(aba: string) {
    if (aba=="experimento" || aba=="PDF") {
      this._aba = aba;
    } else {
      return
    }
  }

}
