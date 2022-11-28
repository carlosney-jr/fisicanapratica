import jsPDF from 'jspdf';


import { Component, OnInit } from '@angular/core';

import { PerguntasRespostas } from './../perguntasrespostas';
import { ServicoPDFService } from './../../servico-pdf.service';
import { delay } from 'rxjs';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PDFComponent implements OnInit {
  listaAlunos: string;
  listaPerguntasRespostas: PerguntasRespostas<string>[];
  nomeExperimento: string
  constructor(private servicoPDF: ServicoPDFService) {
    this.listaAlunos = '';
    this.listaPerguntasRespostas = [];
    this.nomeExperimento = ''
  }

  // TODO: Atualizar com a exportação.
  ngOnInit(): void {
    this.servicoPDF.obsPDF.subscribe((valor) => {
      if (valor) {
        this.definirAtributos();
        setTimeout(this.exportarPDF,1000);
      }
    });
  }

  tratarLista(listaAlunos: string[]): string {
    let alunosTratado: string = ''
    for (let aluno of listaAlunos) {
      alunosTratado = alunosTratado.concat(aluno + ', ')
    }
    alunosTratado = alunosTratado.slice(0, alunosTratado.lastIndexOf(','))
    return alunosTratado;
  }


  exportarPDF() {
    let doc = new jsPDF();
    let div = document.getElementById("pdfExportado") as HTMLElement;

    doc.html(div, {
      callback: function(doc) {
        doc.save("experimento.pdf")
      },
      margin: [10,10,10,10],
      autoPaging: 'text',
      x: 0,
      y: 0,
      width: 190,
      windowWidth: 675
    })
  }
  /*exportarPDF() {
    let div: any = document.getElementById("pdfExportado");
    html2canvas(div).then(canvas => {
      const conteudoDivURL = canvas.toDataURL('image/jpeg')
      let pdf = new jsPDF('p', 'cm', 'a4');
      pdf.addImage(conteudoDivURL, 'JPEG', 0, 0, 21.0, 29.7)
      pdf.save('Relatório.pdf')
    })
  } */

  definirAtributos() {
    this.listaAlunos = this.tratarLista(this.servicoPDF.listaAlunos);
    this.listaPerguntasRespostas = this.servicoPDF.listaPerguntasRespostas;
    this.nomeExperimento = this.servicoPDF.nomeExperimento
  }
}

/*
doc.html(elementHTML, {
        callback: function(doc) {
            // Save the PDF
            doc.save('document-html.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 675 //window width in CSS pixels
    });
}
*/
