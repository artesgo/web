import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsRoutingModule } from './js-routing.module';
import { JavascriptComponent } from './javascript/javascript.component';
import { VariableComponent } from './javascript/variable/variable.component';
import { ControlComponent } from './javascript/control/control.component';
import { FunctionsComponent } from './javascript/functions/functions.component';
import { LoopComponent } from './javascript/loop/loop.component';
import { DatatypeComponent } from './javascript/datatype/datatype.component';
import { BasicComponent } from './javascript/basics/basic.component';
import { SharedModule } from '../shared/shared.module';

const EXPORTS = [
  BasicComponent,
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
    JsRoutingModule,
    SharedModule,
  ]
})
export class JsModule { }
