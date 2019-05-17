import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) {

  }

  getData(): Observable<any[]> {
    return this.db.collection('items').valueChanges();
  }
}
