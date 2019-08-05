import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '', component: WebComponent, children: [
      { path: '', component: HtmlComponent },
      { path: 'css', component: CssComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
