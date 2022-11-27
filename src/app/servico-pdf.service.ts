import { PerguntasRespostas } from './module/perguntasrespostas';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pergunta } from './module/pergunta';

@Injectable({
  providedIn: 'root',
})
export class ServicoPDFService {
  listaAlunos: string[];
  //! MUDAR AQUI TAMBÉM!
  listaPerguntasRespostas: PerguntasRespostas<string>[];
  obsPDF: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.listaAlunos = [];
    this.listaPerguntasRespostas = [];
  }

  //! MUDAR PERGUNTASRESPOSTAS AQUI
  exportaPDF(listaAlunos: string[], listaRespostas: FormGroup, listaPerguntas: PerguntasRespostas<string>[]) {
    this.listaAlunos = listaAlunos;
    this.listaPerguntasRespostas = this.tratarForms(listaRespostas, listaPerguntas);
    this.obsPDF.next(true);
  }

  toFormGroup(perguntas: PerguntasRespostas<string>[]) {
    const group: any = {};

    perguntas.forEach((perguntas) => {
      group[perguntas.key] = perguntas.required
        ? new FormControl(perguntas || '', Validators.required)
        : new FormControl(perguntas || '');
    });
    return new FormGroup(group);
  }

  tratarForms(respostas: FormGroup, listaPerguntas: PerguntasRespostas<string>[]) {
    let listaRespostas = respostas.value
    
    listaRespostas.forEach((perguntas: any) =>
      listaPerguntas[perguntas.key].value = perguntas
    )

    console.log(listaPerguntas)
    return listaPerguntas;
  }
}
