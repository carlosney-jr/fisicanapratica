import { PerguntasRespostas } from './../../perguntasrespostas';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {

  @Input() questao!: PerguntasRespostas<string>;
  @Input() form!: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.form.controls[this.questao.key].valid; }
}
