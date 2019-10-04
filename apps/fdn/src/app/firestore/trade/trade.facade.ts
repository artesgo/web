import { Injectable } from '@angular/core';
import { TradeDocument } from '../trade';
import { Store, select } from '@ngrx/store';
import { TRADE_ACTIONS } from './+state/trade.actions';
import { aggregateSelector, tickerSelector } from './+state/trade.selectors';
import { IState } from '../../+state/app.reducer';

@Injectable({
    providedIn: 'root'
})
export class TradeFacade  {
    COLLECTION = 'trades';

    constructor(private store: Store<IState>) {
    }

    getTrades(trade?: TradeDocument) {
        return this.store.pipe(select(tickerSelector, trade));
    }

    getAggregate(trade?: TradeDocument) {
        return this.store.pipe(select(aggregateSelector, trade));
    }

    retrieveData(user: firebase.User) {
        this.store.dispatch(TRADE_ACTIONS.TRADE_GET({ user }));
    }

    addTrade(trade: TradeDocument) {
        this.store.dispatch(TRADE_ACTIONS.TRADE_ADD({ trade }));
    }

    updateTrade(trade: TradeDocument) {
        this.store.dispatch(TRADE_ACTIONS.TRADE_UPD({ trade }));
    }

    deleteTrade(trade: TradeDocument) {
        this.store.dispatch(TRADE_ACTIONS.TRADE_DEL({ trade }));
    }
}