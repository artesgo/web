import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Node } from '../../models';

@Component({
  selector: 'fdn-bar-graph',
  template: `
    <svg #svg [attr.width]="width" [attr.height]="height">
      <g [attr.transform]="getRotation">
        <g [nodeRect]="node" *ngFor="let node of nodes; let i = index;" tabindex="0" [scale]="scale" (focus)="setFocus(i)" [hovered]="isFocused(i)"></g>
      </g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarGraphComponent implements OnInit {
  private _width: number;
  private _height: number;
  focused
  @Input() nodes: Node[];
  @Input() rotated = true;
  @Input() scale: number;
  @Input()
  get height() { return this._height || 500 }
  set height(val) { this._height = val }
  @Input()
  get width() { return this._width || 500 }
  set width(val) { this._width = val }

  // adds padding from edge of graph
  padding = 50;

  ngOnInit() {
    const height = (this.height - this.padding) / this.nodes.length;
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].height = height;
      this.nodes[i].y = height * i + (this.padding / 2);
      this.nodes[i].width = this.nodes[i].width
      this.nodes[i].statOffset *= height;
    }
  }

  // Rotate Chart -90 degrees and still have all data on screen
  get getRotation(): string {
    let rotation = '';
    if (this.rotated) {
      rotation = `rotate(-90, ${this.height / 2}, ${this.height / 2})`;
    }
    return rotation;
  }

  setFocus(i) {
    this.focused = i;
  }

  isFocused(i) {
    if (i === this.focused) {
      return true;
    }
    return false;
  }
}