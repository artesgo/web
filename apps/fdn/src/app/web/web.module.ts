import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    HtmlComponent,
    CssComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
