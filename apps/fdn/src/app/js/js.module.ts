import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { NavComponent } from './javascript/nav/nav.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { VariableComponent } from './javascript/variable/variable.component';
import { ControlComponent } from './javascript/control/control.component';
import { FunctionsComponent } from './javascript/functions/functions.component';
import { LoopComponent } from './javascript/loop/loop.component';
import { DatatypeComponent } from './javascript/datatype/datatype.component';

const EXPORTS = [
  NavComponent,
  JavascriptComponent,
  VariableComponent,
  ControlComponent,
  FunctionsComponent,
  LoopComponent,
  DatatypeComponent,
]

@NgModule({
  declarations: [
    ...EXPORTS
  ],
  imports: [
    CommonModule,
    JsRoutingModule
  ]
})
export class JsModule { }
