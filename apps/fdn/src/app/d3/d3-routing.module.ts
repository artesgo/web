import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3Component } from './d3.component';
import { D3BarComponent } from './d3-bar/d3-bar.component';
import { D3BubbleComponent } from './d3-bubble/d3-bubble.component';
import { EarningsReportComponent } from './earnings-report/earnings-report.component';

const routes: Routes = [
    { 
      path: '', component: D3Component, children: [
        { path: '', component: D3BarComponent, data: { title: 'Bar Chart' }  },
        { path: 'bubble', component: D3BubbleComponent, data: { title: 'Bubble Chart' }  },
        { path: 'earnings', component: EarningsReportComponent, data: { title: 'Other' }  },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class D3RoutingModule { }
