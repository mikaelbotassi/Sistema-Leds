import { MembroModel } from "../../membro/models/membroModel";

export class ProjetoListModel {
  titulo?:String;
  coordenador?: MembroModel;
  prazo?:string;
  objetivo?:string;

  constructor() {
    this.titulo = 'Projeto Exemplo';
    this.coordenador = new MembroModel();
    this.prazo = "2019-2020";
    this.objetivo = 'Lorem ipsum dolor sit amet, consectetur';
  }

}
