import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';


@NgModule({
  declarations: [
    ProjetoListComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule
  ]
})
export class ProjetoModule { }
