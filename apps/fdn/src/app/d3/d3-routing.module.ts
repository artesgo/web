import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3Component } from './d3.component';
import { D3BarComponent } from './d3-bar/d3-bar.component';
import { D3BubbleComponent } from './d3-bubble/d3-bubble.component';

const routes: Routes = [
    { path: '', component: D3Component },
    { path: 'bubble', component: D3BubbleComponent },
    { path: 'bar', component: D3BarComponent },
    { path: 'pie', component: D3BarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3RoutingModule { }
