import { Injectable } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
import { TradeDocument } from '../trade';

@Injectable({
    providedIn: 'root'
})
export class TradeService extends FirestoreService {
    COLLECTION = 'trades';

    get() {
        return this.collection(this.COLLECTION);
    }

    // TODO: insert user id into trade$ object
    addTrade(trade: TradeDocument) {
        trade.timestamp = +new Date();
        trade.key = `${trade.timestamp}_${trade.ticker}_${trade.shares}`
        return this.addDocument(this.COLLECTION, trade);
    }

    updateTrade(trade: TradeDocument) {
        return this.updateDocument(this.COLLECTION, trade);
    }

    deleteTrade(trade: TradeDocument) {
        return this.deleteDocument(this.COLLECTION, trade);
    }
}