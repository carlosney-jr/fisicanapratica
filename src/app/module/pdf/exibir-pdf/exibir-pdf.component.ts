import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ServicoPDFService } from './../../../servico-pdf.service';
import { PerguntasRespostas } from '../../perguntasrespostas';

@Component({
  selector: 'app-exibir-pdf',
  templateUrl: './exibir-pdf.component.html',
  styleUrls: ['./exibir-pdf.component.scss'],
})

export class ExibirPDFComponent implements OnInit {
  listaAlunos: string[] = [];
  listaPerguntasRespostas: PerguntasRespostas[] = [];

  @Input('perguntas') listaPerguntas : string[] = [];

  @Output() retornarBool = new EventEmitter()
  constructor(private servicoPDF: ServicoPDFService) {
  }

  ngOnInit(): void {
  }

  retornar() {
    this.retornarBool.emit({aba: 'PDF'});
  }

  exportar() {
    this.servicoPDF.exportaPDF(this.listaAlunos, this.listaPerguntasRespostas);
  }
}
