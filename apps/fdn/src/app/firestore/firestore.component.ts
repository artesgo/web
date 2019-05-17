import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fdn-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss']
})
export class FirestoreComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private fb: FirestoreService) {
    this.items = fb.getData();
  }

  ngOnInit() {
  }

}
