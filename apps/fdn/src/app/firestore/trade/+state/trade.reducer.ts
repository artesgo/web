import { createReducer, on } from '@ngrx/store';
import { TRADE_ACTIONS } from './trade.actions';
import { TradeDocument } from '../../trade';

export const tradeFeature = 'trades';

export const initialState: ITradeState = {
    trades: [],
    score: 0
};

export const tradeReducer = createReducer(
    initialState,
    on(TRADE_ACTIONS.TRADE_GET_SUCCESS, (state, { trades }) => ({...state, trades: [...trades] })),
    on(TRADE_ACTIONS.TRADE_DEL_SUCCESS, (state, { trade }) => ({...state, trades: state.trades.filter(t => t.key !== trade.key) })),
    on(TRADE_ACTIONS.TRADE_UPD_SUCCESS, (state, { trade }) => (
        {
            ...state, trades: state.trades.map(t => {
                if (t.key === trade.key) {
                    return trade;
                }
                return t;
            })
        })
    ),
);

export interface ITradeState {
    trades: TradeDocument[],
    score: number;
}
