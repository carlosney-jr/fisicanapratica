import { PerguntaFilha } from './../../PerguntaFilha';

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PerguntasRespostas } from '../../PerguntaRespostas';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {

  @Input() questao!: PerguntasRespostas<string>;
  @Input() form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    
  }

  get isValid() {
    return this.form.controls[this.questao.key].valid;
  }
}
