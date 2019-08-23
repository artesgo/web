import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreDocument } from './firestore/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  userId: string;

  constructor(private db: AngularFirestore) {

  }

  addDocument(collection: string, data: StoreDocument) {
    const doc: AngularFirestoreDocument = this.db.collection<any>(collection).doc<any>(data.key);
    return doc.set(data);
  }

  updateDocument(collection: string, data: StoreDocument) {
    const doc: AngularFirestoreDocument = this.db.collection<any>(collection).doc<any>(data.key);
    delete data[data.key];
    return doc.update(data);
  }

  deleteDocument(collection: string, data: StoreDocument) {
    const doc: AngularFirestoreDocument = this.db.collection<any>(collection).doc<any>(data.key);
    return doc.delete();
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

  // appends document id to data
  mapPayload(changes) {
    return changes.map(c => {
      return {key: c.payload.doc.id, ...c.payload.doc.data() };
    })
  }

}
