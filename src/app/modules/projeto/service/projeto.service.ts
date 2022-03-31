import { ProjetoListModel } from './../models/projetoListModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  projetos: ProjetoListModel[] = []

  constructor() { }

  obterProjetos(){
    for(let i = 0; i < 11; i++){
      this.projetos.push(new ProjetoListModel());
    }
    return this.projetos
  }
}
