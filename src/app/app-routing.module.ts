import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ProjetoModule } from './modules/projeto/projeto.module';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: '', loadChildren: () => HomeModule},
  {path: 'projetos', loadChildren: () => ProjetoModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
