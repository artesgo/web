import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'fdn-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit {
  ngOnInit() {
    d3.select("svg").append('rect')
      .attr("width", 50)
      .attr("height", 50)
  }
}
