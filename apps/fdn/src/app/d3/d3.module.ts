import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { D3RoutingModule } from './d3-routing.module';
import { D3Component } from './d3.component';
import { D3BarComponent } from './d3-bar/d3-bar.component';
import { D3BubbleComponent } from './d3-bubble/d3-bubble.component';

import { DraggableDirective } from './directives/draggable.directive';
import { NodeCircleComponent } from './visuals/shared/node-circle.component';
import { LinkVisualComponent } from './visuals/shared/link-visual.component';
import { GraphComponent } from './visuals/graph/graph.component';
import { ZoomableDirective } from './directives/zoomable.directive';
import { NodeRectComponent } from './visuals/shared/node-bar.component';
import { BarGraphComponent } from './visuals/bar-graph/bar-graph.component';
import { SharedModule } from '../shared/shared.module';
import { EarningsReportComponent } from './earnings-report/earnings-report.component';

@NgModule({
  declarations: [
    D3Component,
    D3BarComponent,
    D3BubbleComponent,
    EarningsReportComponent,

    ZoomableDirective,
    DraggableDirective,
    NodeCircleComponent,
    NodeRectComponent,
    LinkVisualComponent,
    GraphComponent,
    BarGraphComponent,
  ],
  imports: [
    CommonModule,
    D3RoutingModule,
    SharedModule,
  ]
})
export class D3Module { }
