import { TabelaPerguntas } from './../../Tabela';
import { Component } from '@angular/core';
import { Imagem } from '../../Imagem';
import { Pergunta } from '../../Pergunta';
import { PerguntasRespostas } from '../../PerguntaRespostas';

@Component({
  selector: 'app-lente-convergente',
  templateUrl: './lente-convergente.component.html',
  styleUrls: ['./lente-convergente.component.scss']
})
export class LenteConvergenteComponent {
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
    new Pergunta({
      key: '1',
      order: 1,
      label: "O que pôde ser notado sobre o caminho da luz após a deslocação da caixa de luz, como na situação da figura 1?"
    }),
    new Imagem({
      key: 'Img1',
      order: 2,
      label: "Figura 1",
      resposta: "assets/imgs/Experimentos/LenteConvergente/LC0301.png"
    }),
    new Pergunta({
      key: '2',
      order: 2,
      label: "No uso da fenda únida na caixa de luz, tal como na figura 2, o que foi observado sobre o feixe de luz refratada? Onde cruzou o eixo óptico? Explique."
    }),
    new Imagem({
      key: "Img2",
      order: 3,
      label: "Figura 2",
      resposta: "assets/imgs/Experimentos/LenteConvergente/LC04.png"
    }),
    new Pergunta({
      key: '3',
      order: 4,
      label: "Após a alteração do ângulo (fig. 3), o que foi observado sobre o feixe de luz na lente?"
    }),
    new Imagem({
      key: "Img3",
      order: 5,
      label: "Figura 3",
      resposta: "assets/imgs/Experimentos/LenteConvergente/LC05.png"
    }),
    new Pergunta({
      key: '4',
      order: 6,
      label: "Quais foram as observações relacionadas à prática da figura 4?"
    }),
    new Imagem({
      key: "Img4",
      order: 7,
      label: "Figura 4",
      resposta: "assets/imgs/Experimentos/LenteConvergente/LC06.png"
    }),
    new TabelaPerguntas({
      key: '5',
      order: 8,
      label: "Preencha as seguintes questões com o resumo das observações",
      listaPerguntas: [
        new Pergunta({
          key: "A",
          order: 1,
          label: "Quando o caminho do feixe de luz incidente foi paralelo ao eixo óptico (feixe paralelo), qual foi o caminho do feixe de luz emergente?"
        }),
        new Pergunta({
          key: "B",
          order: 2,
          label: "Quando o caminho do feixe de luz incidente foi através do foco F (feixe focal), qual foi o caminho do feixe de luz emergente?"
        }),
        new Pergunta({
          key: "C",
          order: 3,
          label: "Quando o caminho do feixe de luz incidente foi através do ponto médio M (feixe do ponto médio), qual foi o caminho do feixe de luz emergente?"
        })
      ]
    }),
    new Pergunta({
      key: '6',
      order: 9,
      label: "As lentes convergentes são usadas em praticamente todos os instrumentos ópticos (lupa, câmera fotográfica, telescópio, microscópio, projetor), mas o olho também possui tal lente. Qual seria esta lente, de acordo com a figura 5."
    }),
    new Imagem({
      key: "Img5",
      order: 10,
      label: "Figura 5",
      resposta: "assets/imgs/Experimentos/LenteConvergente/LC07.png"
    })
  ]
}
