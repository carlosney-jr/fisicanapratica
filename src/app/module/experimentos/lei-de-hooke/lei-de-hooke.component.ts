import { PerguntaFilha } from './../../PerguntaFilha';
import { TabelaPerguntas } from './../../Tabela';
import { PerguntasRespostas } from './../../PerguntaRespostas';
import { Component } from '@angular/core';
import { Pergunta } from '../../Pergunta';

@Component({
  selector: 'app-lei-de-hooke',
  templateUrl: './lei-de-hooke.component.html',
  styleUrls: ['./lei-de-hooke.component.scss']
})
export class LeiDeHookeComponent {
  private _aba: string = "experimento"

  get aba() {
    return this._aba;
  }

  set aba(aba: string) {
    if (aba=="experimento" || aba=="PDF") {
      this._aba = aba;
    } else {
      return
    }
  }

  configurarAba(evento: string){
    this._aba = evento;
  }

  public questoes: PerguntasRespostas<string>[] = [
    new TabelaPerguntas({
      key: '1',
      order: 1,
      label: "Para cada massor usado, preencha abaixo com as informações de cada tentativa, incluindo peso do massor usado (N), força elástica, elongação (cm) e constante elástica (N/cm).",
      listaPerguntas: [
        new PerguntaFilha({
          key: "A",
          order: 1,
          label: "Na 1ª tentativa, foi encontrado:"
        }),
        new PerguntaFilha({
          key: "B",
          order: 2,
          label: "Na 2ª tentativa, foi encontrado:"
        }),
        new PerguntaFilha({
          key: "C",
          order: 3,
          label: "Na 3ª tentativa, foi encontrado:"
        }),
        new PerguntaFilha({
          key: "D",
          order: 4,
          label: "Na 4ª tentativa, foi encontrado:"
        })
      ]
    }),
    new TabelaPerguntas({
      key: '2',
      order: 2,
      label: "Agora transforme as contantes elásticas de N/cm para N/m (unidade padrão)",
      listaPerguntas: [
        new PerguntaFilha({
          key: 'A',
          order: 1,
          label: "Na 1ª tentativa, a constante elástica, agora convertida em N/m, é:"
        }),
        new PerguntaFilha({
          key: 'B',
          order: 2,
          label: "Na 2ª tentativa, a constante elástica, agora convertida em N/m, é:"
        }),
        new PerguntaFilha({
          key: 'C',
          order: 3,
          label: "Na 3ª tentativa, a constante elástica, agora convertida em N/m, é:"
        }),
        new PerguntaFilha({
          key: 'D',
          order: 4,
          label: "Na 4ª tentativa, a constante elástica, agora convertida em N/m, é:"
        })
      ]
    }),
    new Pergunta({
      key: '3',
      order: 3,
      label: "Calcule a média dos valores encontrados para a constante elástica em N/m. Calculando a média elimina-se uma parcela dos erros de leitura por parte do pesquisador ou por limitações dos instrumentos de medida. Dessa forma, a média representa o valor mais próximo do real." 
    }),
    new Pergunta({
      key: '4',
      order: 4,
      label: "Construa um gráfico da Força Elástica N/cm em função da Elongação (cm) e envie em anexo à professora responsável. Através deste gráfico, estime o valor da constante elástica:"
    }),
    new Pergunta({
      key: '5',
      order: 5,
      label: "Nesse experimento, pode-se dizer que a Lei de Hooke foi verificada? Por quê?"
    })
  ]
}
