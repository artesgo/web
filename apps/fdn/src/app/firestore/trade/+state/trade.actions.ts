import { createAction, props } from '@ngrx/store';
import { TradeDocument } from '../../trade';

export const TRADE_ACTIONS = {
    TRADE_GET: createAction('[Trade] Get', props<{ user: firebase.User }>()),
    TRADE_ADD: createAction('[Trade] Add', props<{ trade: TradeDocument }>()),
    TRADE_UPD: createAction('[Trade] Upd', props<{ trade: TradeDocument }>()),
    TRADE_DEL: createAction('[Trade] Del', props<{ trade: TradeDocument }>()),
    TRADE_GET_SUCCESS: createAction('[Trade] Get Success', props<{ trades: TradeDocument[] }>()),
    TRADE_ADD_SUCCESS: createAction('[Trade] Add Success', props<{ trade: TradeDocument }>()),
    TRADE_UPD_SUCCESS: createAction('[Trade] Upd Success', props<{ trade: TradeDocument }>()),
    TRADE_DEL_SUCCESS: createAction('[Trade] Del Success', props<{ trade: TradeDocument }>()),
    TRADE_ADD_FAILURE: createAction('[Trade] Add Failure'),
    TRADE_DEL_FAILURE: createAction('[Trade] Del Failure'),
    TRADE_UPD_FAILURE: createAction('[Trade] Upd Failure'),
}