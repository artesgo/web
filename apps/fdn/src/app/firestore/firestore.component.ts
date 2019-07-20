import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { StoreDocument } from './firestore';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'fdn-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss']
})
export class FirestoreComponent implements OnInit {
  item$: any;
  layout$: any;
  page$: any;
  constructor(private fb: FirestoreService) {
    fb.getData().subscribe( (items: StoreDocument[]) => {
      this.item$ = items;
    });
    fb.getLayouts().pipe(
      switchMap((items: StoreDocument[]) => {
        let [page] = items;
        this.layout$ = items;
        return fb.getPages(page.key, 'page');
      })
    ).subscribe((items: StoreDocument[]) => {
      console.log(items);
      
      this.page$ = items;
    });
  }

  ngOnInit() {
  }

}
