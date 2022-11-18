import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetailsComponent } from './cursos-details/cursos-details.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
