import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { WebComponent } from './web.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HtmlComponent,
    CssComponent,
    WebComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
  ]
})
export class WebModule { }
