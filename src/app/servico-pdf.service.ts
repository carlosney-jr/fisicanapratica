import { PerguntasRespostas } from './module/perguntasrespostas';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicoPDFService {
  listaAlunos: string[];
  listaPerguntasRespostas: PerguntasRespostas[];
  obsPDF: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.listaAlunos = [];
    this.listaPerguntasRespostas = [];
  }

  exportaPDF(listaAlunos: string[], listaPerguntasRespostas: PerguntasRespostas[]) {
    this.listaAlunos = listaAlunos;
    this.listaPerguntasRespostas = listaPerguntasRespostas;
    this.obsPDF.next(true);
  }

}
