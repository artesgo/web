import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridItemDirective } from './grid-item/grid-item.directive';
import { ImgComponent } from './img/img.component';

const EXPORTED = [
  GridComponent,
  GridItemDirective,
  ImgComponent,
]

@NgModule({
  imports: [CommonModule],
  declarations: EXPORTED,
  exports: EXPORTED
})
export class FoundationModule {}
