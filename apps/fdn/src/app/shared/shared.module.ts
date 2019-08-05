import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

const EXPORTS = [
  NavComponent
]

@NgModule({
  declarations: [...EXPORTS],
  exports: [...EXPORTS],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
