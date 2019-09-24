import { createSelector } from '@ngrx/store';
import { ITradeState } from './trade.reducer';
import { IState } from '../../../+state/app.reducer';

export const tradesFeature = (state: IState) => state.trades;
export const tradesSelector = createSelector(tradesFeature, (tf: ITradeState) => tf.trades);
export const scoreSelector = createSelector(tradesFeature, (tf: ITradeState) => tf.score);