import { Component, OnInit, Input } from '@angular/core';
import { Link, Node } from '../models';
import { randomLight } from '../visuals/shared/colors';

@Component({
  selector: 'fdn-d3-bar',
  templateUrl: './d3-bar.component.html',
  styleUrls: ['./d3-bar.component.scss']
})
export class D3BarComponent implements OnInit {

  nodes: Node[] = [];
  links: Link[] = [];
  rotation = false;
  scale;
  @Input() height = 300;
  @Input() width = 600;
  @Input() padding = 20;

  // TODO: docker backend for data
  @Input() data = [
    { units: 1.4, label: 'bmw' },
    { units: 2.2, label: 'chrysler' },
    { units: 1.5, label: 'ford' },
    { units: 1.6, label: 'honda' },
    { units: 1.6, label: 'nissan' },
    { units: 1.6, label: 'tesla' },
    { units: 1.6, label: 'tesla' },
    { units: 1.6, label: 'tesla' },
    { units: 1.6, label: 'tesla' },
    { units: 1.6, label: 'tesla', color: 'FC0' },
  ]

  constructor() { }

  ngOnInit() {
    /** constructing the nodes array */
    for (let point of this.data) {
      const node = new Node(`${point.label}`);

      // x position indicates start position of the bars from the left side of the svg
      node.x = this.padding / 2;

      // width is the length of the bars
      node.width = point.units;

      // position of text
      node.statOffset = point.units;
      node.labelOffset = this.padding;

      // text content
      node.content = `${point.label}`;

      node.color = point.color ? `#${point.color}` : randomLight();
      this.nodes.push(node);
    }

    this.rotate();
  }

  getScale(nodes: Node[]) {
    let max = 0;
    nodes.map(x => {
      if (x.width > max) {
        max = x.width;
      }
    })
    return max;
  }

  rotate() {
    this.rotation = !this.rotation;
    if (!this.rotation) {
      this.scale = (this.width - this.padding)/this.getScale(this.nodes);
    } else {
      this.scale = (this.height - this.padding)/this.getScale(this.nodes);
    }
  }
}
