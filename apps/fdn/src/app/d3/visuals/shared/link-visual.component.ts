import { Component, Input } from '@angular/core';
import { Link, Node } from '../../models';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        [attr.x1]="source.x"
        [attr.y1]="source.y"
        [attr.x2]="target.x"
        [attr.y2]="target.y"
        stroke="#000"
    ></svg:line>
  `
})
export class LinkVisualComponent  {
  @Input() linkVisual: Link;

  get source(): Node {
      return <Node>this.linkVisual.source;
  }
  get target(): Node {
      return <Node>this.linkVisual.target;
  }
}