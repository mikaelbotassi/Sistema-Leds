const NOMES: string[] = ["Mikael", "Victório", "Álisson"];
const EMAILS: string[] = ["Exemplo1@gmail.com", "Exemplo2@gmail.com", "Exemplo3@gmail.com"];
const TELEFONES: string[] = ["(27) 99898-9898", "(27) 99528-9198", "(27) 99124-9896"]
const MATRICULAS: string[] = ["123", "12345", "123998"];

export class MembroModel {

  nome?:string;
  email?:string;
  telefone?:string;
  matricula?:string;

  public constructor(){
    this.nome = NOMES[this.getRandomInt(0,3)];
    this.email = EMAILS[this.getRandomInt(0,3)];
    this.telefone = TELEFONES[this.getRandomInt(0,3)];
    this.matricula = MATRICULAS[this.getRandomInt(0,3)];
  }

  getRandomInt(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
