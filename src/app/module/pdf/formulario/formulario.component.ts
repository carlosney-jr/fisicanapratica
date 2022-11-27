import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ServicoPDFService } from './../../../servico-pdf.service';
import { PerguntasRespostas } from '../../perguntasrespostas';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent implements OnInit {
  listaAlunos: string[] = [];

  form!: FormGroup;
  payLoad = '';

  @Input('perguntas') listaPerguntas : PerguntasRespostas<string>[] | null = [];

  @Output() retornarBool: EventEmitter<string> = new EventEmitter<string>()

  constructor(private servicoPDF: ServicoPDFService) {
  }

  ngOnInit(): void {
    this.form = this.servicoPDF.toFormGroup(this.listaPerguntas as PerguntasRespostas<string>[]);
  }

  retornar() {
    this.retornarBool.emit("experimento");
  }

  exportar() {
    console.log(this.form.value)
    this.servicoPDF.exportaPDF(this.listaAlunos, this.form, this.listaPerguntas as PerguntasRespostas<string>[]);
  }
}
