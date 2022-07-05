import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao [] = [];
  
  
    adiciona(negociacao:Negociacao) {
       this.negociacoes.push(negociacao)
  }
  lista(): readonly Negociacao[] {// retorna uma lista somente leitura
    return this.negociacoes;
  }
}
