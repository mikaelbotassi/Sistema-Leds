import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProjetoListComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    SharedModule
  ]
})
export class ProjetoModule { }
