import { ProjetoListModel } from './../models/projetoListModel';
import { ProjetoService } from './../service/projeto.service';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.scss']
})
export class ProjetoListComponent implements OnInit {

  scroll_position:number = 0;

  projetos:ProjetoListModel[] = [];

  constructor(private projetoService: ProjetoService) { }

  ngOnInit(): void {
    this.listarProjetos();
  }

  // @HostListener('window:scroll') onWindowScroll() {
  //   window.scrollY = 1;
  //   if(window.scrollX < window.innerWidth){
  //     window.scroll(this.scroll_position+=5,1);
  //     return;
  //   }
  // }

  listarProjetos(){
    this.projetos = this.projetoService.obterProjetos();
  }

}
