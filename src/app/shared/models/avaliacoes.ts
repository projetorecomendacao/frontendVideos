export class Avaliacoes {
    nome: string;
    email : string;
    trecho_id : number;
    resposta : string;

    constructor(nome: string, email : string, trecho_id : number, resposta : string){
        this.nome = nome;
        this.email = email;
        this.trecho_id = trecho_id;
        this.resposta = resposta;
    }
  }