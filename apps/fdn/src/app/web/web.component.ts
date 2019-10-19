import { Component, OnInit } from '@angular/core';
import { NavRoute } from '../shared/nav/nav.route';

@Component({
  selector: 'fdn-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
  routes: NavRoute[] = [
    { route: '/web', label: 'HTML' },
    { route: '/web/css', label: 'CSS' },
  ]


  constructor() { }

  ngOnInit() { }

}
