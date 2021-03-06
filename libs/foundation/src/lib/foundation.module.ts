import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './grid/grid.component';
import { GridItemDirective } from './grid-item/grid-item.directive';
import { ImgComponent } from './img/img.component';
import { HeaderComponent } from './header/header.component';

const EXPORTED = [
  GridComponent,
  GridItemDirective,
  ImgComponent,
  HeaderComponent,
]

@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, NoopAnimationsModule],
  declarations: EXPORTED,
  exports: EXPORTED
})
export class FoundationModule {}
