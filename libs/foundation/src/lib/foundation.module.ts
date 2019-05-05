import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridItemDirective } from './grid-item/grid-item.directive';

const EXPORTED = [
  GridComponent,
  GridItemDirective
]

@NgModule({
  imports: [CommonModule],
  declarations: EXPORTED,
  exports: EXPORTED
})
export class FoundationModule {}
