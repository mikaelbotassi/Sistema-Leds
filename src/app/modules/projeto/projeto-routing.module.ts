import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';

const routes: Routes = [
  {path: '', component: ProjetoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
