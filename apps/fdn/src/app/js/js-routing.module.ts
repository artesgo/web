import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavascriptComponent } from './javascript/javascript.component';
import { VariableComponent } from './javascript/variable/variable.component';
import { FunctionsComponent } from './javascript/functions/functions.component';
import { LoopComponent } from './javascript/loop/loop.component';
import { DatatypeComponent } from './javascript/datatype/datatype.component'
import { ControlComponent } from './javascript/control/control.component';
import { BasicComponent } from './javascript/basics/basic.component';
import { WebPageComponent } from './javascript/web-page/web-page.component';

const routes: Routes = [
  { 
    path: '', component: JavascriptComponent, children: [
      { path: '', component: BasicComponent },
      { path: 'variable', component: VariableComponent },
      { path: 'control', component: ControlComponent },
      { path: 'functions', component: FunctionsComponent },
      { path: 'loop', component: LoopComponent },
      { path: 'data', component: DatatypeComponent },
      { path: 'web', component: WebPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule { }
