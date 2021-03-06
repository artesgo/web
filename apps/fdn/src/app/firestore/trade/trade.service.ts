import { Injectable } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
import { TradeDocument } from '../trade';
import { tradeFeature } from './+state/trade.reducer';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TradeService extends FirestoreService {
    COLLECTION = tradeFeature;
    uid: string;

    get(user: firebase.User): Observable<any> {
        this.uid = user.uid;
        return this.collection(this.COLLECTION, user.uid);
    }

    addTrade(trade: TradeDocument): Observable<any> {
        trade.timestamp = +new Date();
        trade.user = this.uid;
        trade.key = `${trade.timestamp}_${trade.user}`;
        return from(this.addDocument(this.COLLECTION, trade));
    }

    updateTrade(trade: TradeDocument): Observable<any> {
        return from(this.updateDocument(this.COLLECTION, trade));
    }

    deleteTrade(trade: TradeDocument): Observable<any> {
        return from(this.deleteDocument(this.COLLECTION, trade));
    }
}