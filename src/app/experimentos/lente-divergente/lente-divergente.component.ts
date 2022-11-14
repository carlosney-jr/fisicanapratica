import { PerguntasRespostas } from './../../module/perguntasrespostas';
import { ServicoPDFService } from './../../servico-pdf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lente-divergente',
  templateUrl: './lente-divergente.component.html',
  styleUrls: ['./lente-divergente.component.scss']
})
export class LenteDivergenteComponent implements OnInit {
  listaAlunos: string[] = ["Carlos", "Ryan"];
  listaPerguntasRespostas: PerguntasRespostas[] = [new PerguntasRespostas("Oii", "Tchauu")];

  constructor(private servicoPDF: ServicoPDFService) { }

  ngOnInit(): void {
    
  }

  exportar() {
    this.servicoPDF.exportaPDF(this.listaAlunos, this.listaPerguntasRespostas);
  }

}
