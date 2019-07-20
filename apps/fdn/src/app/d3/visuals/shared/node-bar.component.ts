import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Node } from '../../models';

@Component({
  selector: '[nodeRect]',
  template: `
    <svg:g [attr.transform]="'translate(' + nodeRect.x + ',' + nodeRect.y + ')'">
      <svg:rect
          x="0"
          y="0"
          [attr.width]="nodeRect?.width * scale"
          [attr.height]="nodeRect?.height"
          [attr.fill]="color"
          stroke="#000">
      </svg:rect>
      <svg:g [attr.transform]="labelOffset" (mouseover)="hovered = true" (mouseout)="hovered = false">
        <svg:text>
          {{nodeRect.content}}
        </svg:text>
      </svg:g>
      <svg:g [attr.transform]="statOffset" *ngIf="hovered">
        <svg:text #text>
          {{nodeRect.width}}
        </svg:text>
      </svg:g>
    </svg:g>
  `
})
export class NodeRectComponent {
  @Input() nodeRect: Node;
  @Input() scale: number;
  @ViewChild('text') text: ElementRef;
  @Input() hovered: boolean = false;
  get radius(): number {
    return this.nodeRect.r || 30;
  }
  get color(): string {
    return `${this.nodeRect.color}`;
  }
  get statOffset(): string {
    return this.nodeRect.statOffset ? `translate(${this.nodeRect.width * this.scale - this.nodeRect.statOffset }, ${(this.nodeRect.height - 2)})` : ``;
  }
  get labelOffset(): string {
    return this.nodeRect.labelOffset ? `translate(${this.nodeRect.labelOffset}, ${(this.nodeRect.height - 2)})` : `translate(${-50}, ${(this.nodeRect.height - 2)})`;
  }

}