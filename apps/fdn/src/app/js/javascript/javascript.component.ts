import { Component, OnInit } from '@angular/core';
import { NavRoute } from '../../shared/nav/nav.route';

@Component({
  selector: 'fdn-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  routes: NavRoute[] = [
    { route: '/js', label: 'Javascript' },
    { route: '/js/variable', label: 'Variables' },
    { route: '/js/control', label: 'Control Structures' },
    { route: '/js/data', label: 'Data Types' },
    { route: '/js/loop', label: 'Loops' },
    { route: '/js/functions', label: 'Functions' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
