import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { PerguntasRespostas } from './module/PerguntaRespostas';

@Injectable({
  providedIn: 'root',
})
export class ServicoPDFService {
  listaAlunos: string[];
  listaPerguntasRespostas: PerguntasRespostas<string>[];
  nomeExperimento: string = '';
  obsPDF: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.listaAlunos = [];
    this.listaPerguntasRespostas = [];
  }

  exportaPDF(
    listaAlunos: FormArray,
    listaRespostas: FormGroup,
    listaPerguntas: PerguntasRespostas<string>[],
    nomeExperimento: string
  ) {
    this.listaAlunos = this.tratarFormArray(listaAlunos);
    this.listaPerguntasRespostas = this.tratarForms(
      listaRespostas,
      listaPerguntas
    );
    this.nomeExperimento = nomeExperimento;
    this.obsPDF.next(true);
  }

  toFormGroup(perguntas: PerguntasRespostas<string>[]) {
    const group: any = {};

    perguntas.forEach((perguntas) => {
      if (perguntas.type == 'imagem') {
        return;
      } else if (perguntas.type == 'tabela') {
        group[perguntas.key] = this.toFormGroup(perguntas.listaPerguntas);
      } else if (perguntas.type == 'text') {
        group[perguntas.key] = new FormControl(
          perguntas.value || '',
          Validators.required
        );
      }
    });
    return new FormGroup(group);
  }

  tratarForms(
    respostas: FormGroup,
    listaPerguntas: PerguntasRespostas<string>[]
  ) {
    for (let i = 0; i < listaPerguntas.length; i++) {
      if (listaPerguntas[i].type == 'tabela') {
        let listaRespostas = respostas.value[listaPerguntas[i].key];
        for (let i2 = 0; i2 < listaPerguntas[i].listaPerguntas.length; i2++) {
          listaPerguntas[i].listaPerguntas[i2].resposta = listaRespostas[listaPerguntas[i].listaPerguntas[i2].key];
        }
      } else if (listaPerguntas[i].type == "text") {
        listaPerguntas[i].resposta = respostas.value[listaPerguntas[i].key];
      } else if (listaPerguntas[i].type == "imagem") {
        continue;
      }
    }
    return listaPerguntas;
  }

  tratarFormArray(form: FormArray): string[] {
    let lista: string[] = [];
    form.controls.forEach((elemento, indice) => {
      lista[indice] = elemento.value.nome;
    });
    return lista;
  }
}
