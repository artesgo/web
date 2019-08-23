import { Injectable } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
import { Layout } from '../layout';

@Injectable({
    providedIn: 'root'
})
export class LayoutService extends FirestoreService {
    COLLECTION = 'layouts';

    get() {
        return this.collection(this.COLLECTION);
    }

    addLayout(layout: Layout) {
        this.addDocument(this.COLLECTION, layout);
    }
}