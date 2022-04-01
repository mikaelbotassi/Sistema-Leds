import { ProjetoListModel } from './../models/projetoListModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor() { }

  obterProjetos():ProjetoListModel[]{
    let projetos: ProjetoListModel[]=[];
    for(let i = 0; i < 11; i++){
      projetos.push(new ProjetoListModel());
    }
    return projetos
  }
}
