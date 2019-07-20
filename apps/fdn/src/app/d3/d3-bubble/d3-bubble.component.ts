import { Component, OnInit } from '@angular/core';
import { Link, Node } from '../models';

@Component({
  selector: 'fdn-d3-bubble',
  templateUrl: './d3-bubble.component.html',
  styleUrls: ['./d3-bubble.component.scss']
})
export class D3BubbleComponent implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];
  data = [
    { units: 0, month: 0, year: 2019, },
    { units: 10, month: 10, year: 2019, },
    { units: 20, month: 20, year: 2019, },
    { units: 30, month: 30, year: 2019, },
    { units: 40, month: 40, year: 2019, },
    { units: 50, month: 50, year: 2019, },
    { units: 60, month: 60, year: 2019, },
    { units: 70, month: 70, year: 2019, },
    { units: 80, month: 80, year: 2019, },
    { units: 90, month: 90, year: 2019, },
    { units: 100, month: 100, year: 2019, },
  ]

  ngOnInit() {
    for (let point of this.data) {
      let node = new Node(`${point.year}${point.month}`);
      node.r = 50;
      node.x = 20;
      node.y = point.units * 2;
      node.content = `${point.month}`;
      this.nodes.push(node);
      let [ first, second ] = this.nodes;
      if (second) {
        this.links.push(new Link(first, second));
      }
    }
  }
}
