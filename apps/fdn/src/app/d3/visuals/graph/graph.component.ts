import { Component, Input, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ForceDirectedGraph, Node, Link } from '../../models';
import { D3Service } from '../../d3.service';

@Component({
  selector: 'fdn-graph',
  template: `
    <svg #svg [attr.width]="width" [attr.height]="height">
      <g [zoomableOf]="svg">
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeCircle]="node" *ngFor="let node of nodes"
          [draggableNode]="node"
          [draggableInGraph]="graph"
        ></g>
      </g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit {
  @Input() nodes: Node[];
  @Input() links: Link[];

  private _options: { width, height } = { width: 800, height: 600 };
  get height() {
      return this._options.height;
  }
  get width() {
      return this._options.width;
  }
  graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options).subscribe(graph => {
      this.graph = graph;
      this.graph.ticker.subscribe( (d) => {
        this.ref.markForCheck();
      })
      this.graph.initSimulation(this.options);
    });
  }

  get options() {
    return this._options = {
      width: this.width || window.innerWidth,
      height: this.height || window.innerHeight
    };
  }
}