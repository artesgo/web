import { Injectable } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
import { Layout } from '../layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService extends FirestoreService {
  COLLECTION = 'layouts';

  get(user: firebase.User) {
    return this.collection(this.COLLECTION, user.uid);
  }

  addLayout(layout: Layout) {
    this.addDocument(this.COLLECTION, layout);
  }
}
