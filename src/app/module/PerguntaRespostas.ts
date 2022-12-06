export class PerguntasRespostas<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    type: string;
    resposta: string;
    perguntaFilha: boolean;
    listaPerguntas: PerguntasRespostas<string>[]

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        type?: string;
        resposta?: string;
        perguntaFilha?: boolean;
        listaPerguntas?: PerguntasRespostas<string>[]
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.type = options.type || '';
      this.resposta = options.resposta || '';
      this.perguntaFilha = options.perguntaFilha || false;
      this.listaPerguntas = options.listaPerguntas || []
    }

  }