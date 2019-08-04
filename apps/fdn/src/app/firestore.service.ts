import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Layout } from './firestore/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) {

  }

  collection(collection): Observable<any[]> {
    return this.db.collection(collection).snapshotChanges().pipe(map(changes => this.mapPayload(changes)));
  }

  /**
   * Get Specific Page from Layout
   * @param layout 
   * @param pageName 
   */
  getPages(layout, pageName): Observable<any> {
    return this.db.collection('layouts').doc(layout).collection(pageName).snapshotChanges().pipe(map(changes => this.mapPayload(changes)));
  }

  addLayout(page: string, data: Layout) {
    this.db.doc(page).set(data);
  }

  // appends document id to data
  mapPayload(changes) {
    return changes.map(c => {
      return {key: c.payload.doc.id, ...c.payload.doc.data() };
    })
  }
}
