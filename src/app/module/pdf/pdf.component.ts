import { Component, OnInit } from '@angular/core';

import { PerguntasRespostas } from './../perguntasrespostas';
import { ServicoPDFService } from './../../servico-pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PDFComponent implements OnInit {
  listaAlunos: string[];
  listaPerguntasRespostas: PerguntasRespostas<string>[];
  constructor(private servicoPDF: ServicoPDFService) {
    this.listaAlunos = [];
    this.listaPerguntasRespostas = [];
  }

  // TODO: Atualizar com a exportação.
  ngOnInit(): void {
    this.servicoPDF.obsPDF.subscribe((valor) => {
      if (valor) {
        this.listaAlunos = this.servicoPDF.listaAlunos;
        this.listaPerguntasRespostas = this.servicoPDF.listaPerguntasRespostas;
      }
    });
  }
}
