import { Component, Input } from '@angular/core';
import { Node } from '../../models';

@Component({
  selector: '[nodeCircle]',
  template: `
    <svg:g [attr.transform]="'translate(' + nodeCircle.x + ',' + nodeCircle.y + ')'">
      <svg:circle
          cx="0"
          cy="0"
          fill="#FC0"
          stroke="#000"
          [attr.r]="radius">
      </svg:circle>
      <svg:text>
        {{nodeCircle.content}}
      </svg:text>
    </svg:g>
  `
})
export class NodeCircleComponent {
  @Input() nodeCircle: Node;
  get radius(): number {
    return this.nodeCircle.r || 30;
  }
}