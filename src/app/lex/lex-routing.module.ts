import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LexEx1Component } from './lex-ex1/lex-ex1.component';

const routes: Routes = [
  {
    path: 'lexEx1',
    component:LexEx1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LexRoutingModule { }
