import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MATERIAL_IMPORTS } from './materialDesign-imports';
import { MyCardComponent } from './my-card/my-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MATERIAL_IMPORTS
  ],

  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyCardComponent,
    MATERIAL_IMPORTS
  ],

  declarations: [
    MyCardComponent
  ]

})
export class SharedModule { }
