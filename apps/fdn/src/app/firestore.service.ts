import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreDocument } from './firestore/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private db: AngularFirestore) {

  }

  protected addDocument(collection: string, data: StoreDocument) {
    const doc: AngularFirestoreDocument = this.db.collection<any>(collection).doc<any>(data.key);
    return doc.set(data);
  }

  protected updateDocument(collection: string, data: StoreDocument) {
    const doc: AngularFirestoreDocument = this.db.collection<any>(collection).doc<any>(data.key);
    delete data[data.key];
    return doc.update({...data});
  }

  protected deleteDocument(collection: string, data: StoreDocument) {
    const doc: AngularFirestoreDocument = this.db.collection<any>(collection).doc<any>(data.key);
    return doc.delete();
  }

  collection(collection, user: string): Observable<any[]> {
    if (user) {
      return this.db.collection(collection, ref => ref.where('user', '==', user))
        .snapshotChanges().pipe(map(changes => this.mapPayload(changes)));
    } else {
      return of([]);
    }
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
