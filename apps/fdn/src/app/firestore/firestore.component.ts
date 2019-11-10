import { Component, OnInit } from '@angular/core';
import { NavRoute } from '../shared/nav/nav.route';

@Component({
  selector: 'fdn-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss']
})
export class FirestoreComponent implements OnInit {
  routes: NavRoute[] = [
    { route: '/firestore', label: 'Trades' },
    { route: '/firestore/portforia', label: 'Portfolio' }
  ];
  item$: any;
  constructor() {}

  ngOnInit() {}
}
