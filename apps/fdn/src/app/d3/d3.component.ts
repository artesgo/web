import { Component, OnInit } from '@angular/core';
import { NavRoute } from '../shared/nav/nav.route';

@Component({
  selector: 'fdn-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit {
  routes: NavRoute[] = [
    { route: '/d3', label: 'D3' },
    { route: '/d3/bubble', label: 'Bubble' },
    { route: '/d3/earnings', label: 'Earnings' },
  ];

  ngOnInit() {}
}
