import { Component, OnInit, Input } from '@angular/core';
import { NavRoute } from './nav.route';

@Component({
  selector: 'fdn-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() routes: NavRoute[];

  constructor() { }

  ngOnInit() {
  }

}
