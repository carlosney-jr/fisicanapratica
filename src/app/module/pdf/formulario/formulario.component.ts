import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ServicoPDFService } from './../../../servico-pdf.service';
import { PerguntasRespostas } from '../../perguntasrespostas';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})

export class FormularioComponent implements OnInit {
  alunosForm!: FormGroup;
  form!: FormGroup;

  @Input('perguntas') listaPerguntas : PerguntasRespostas<string>[] | null = [];
  @Input() nomeExperimento: string = '';
  @Output() retornarBool: EventEmitter<string> = new EventEmitter<string>()

  constructor(private servicoPDF: ServicoPDFService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.alunosForm = this.fb.group({
      alunos: this.fb.array([this.criarFormAlunos()]) 
    })
    this.form = this.servicoPDF.toFormGroup(this.listaPerguntas as PerguntasRespostas<string>[]);
  }

  criarFormAlunos(): FormGroup {
    return this.fb.group({
      'nome': new FormControl('', Validators.required)
    })
  }

  addAlunoForms() {
    const aluno = this.alunosForm.get('alunos') as FormArray;
    aluno.push(this.criarFormAlunos());
  }

  removerAlunoForms() {
    const aluno = this.alunosForm.get('alunos') as FormArray
    if (aluno.length > 1) {
      aluno.removeAt(aluno.length-1)
    } else {
      aluno.reset()
    }
  }

  getAlunoFormsControl() {
    return (this.alunosForm.get('alunos') as FormArray).controls;
  }
  

  retornar() {
    this.retornarBool.emit("experimento");
  }

  exportar() {
    this.servicoPDF.exportaPDF(this.alunosForm.get('alunos') as FormArray, this.form, this.listaPerguntas as PerguntasRespostas<string>[], this.nomeExperimento);
  }
}
