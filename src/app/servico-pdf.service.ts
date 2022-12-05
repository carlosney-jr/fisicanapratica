import { PerguntasRespostas } from './module/PerguntasRespostas';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Pergunta } from './module/Pergunta';

@Injectable({
  providedIn: 'root',
})
export class ServicoPDFService {
  listaAlunos: string[];
  listaPerguntasRespostas: PerguntasRespostas<string>[];
  nomeExperimento: string = ''
  obsPDF: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.listaAlunos = [];
    this.listaPerguntasRespostas = [];
  }

  //! MUDAR PERGUNTASRESPOSTAS AQUI
  exportaPDF(listaAlunos: FormArray, listaRespostas: FormGroup, listaPerguntas: PerguntasRespostas<string>[], nomeExperimento: string) {
    this.listaAlunos = this.tratarFormArray(listaAlunos);
    this.listaPerguntasRespostas = this.tratarForms(listaRespostas, listaPerguntas);
    this.nomeExperimento = nomeExperimento
    this.obsPDF.next(true);
  }

  toFormGroup(perguntas: PerguntasRespostas<string>[]) {
    const group: any = {};

    perguntas.forEach((perguntas) => {
      group[perguntas.key] = perguntas.required
        ? new FormControl(perguntas.value || '', Validators.required)
        : new FormControl(perguntas.value || '');
    });
    return new FormGroup(group);
  }

  tratarForms(respostas: FormGroup, listaPerguntas: PerguntasRespostas<string>[]) {
    for (let i = 0; i < listaPerguntas.length; i++) {
      listaPerguntas[i].resposta = respostas.value[listaPerguntas[i].key]
    }
    return listaPerguntas;
  }

  tratarFormArray(form: FormArray): string[] {
    let lista: string[] = []
    form.controls.forEach((elemento, indice) => {
      console.log(elemento.value)
      lista[indice] = elemento.value.nome
    })
    return lista;
  }
}
