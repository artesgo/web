import { createSelector } from '@ngrx/store';
import { ITradeState } from './trade.reducer';
import { IState } from '../../../+state/app.reducer';
import { TradeDocument, TradeAggregate } from '../../trade';

export const tradesFeature = (state: IState) => state.trades;
export const tradesSelector = createSelector(
  tradesFeature,
  (tf: ITradeState) => {
    console.log(tf);

    return tf.trades;
  }
);
export const scoreSelector = createSelector(
  tradesFeature,
  (tf: ITradeState) => tf.score
);
export const tickerSelector = createSelector(
  tradesSelector,
  (trades: TradeDocument[], trade?: TradeDocument) =>
    trades.filter(t => {
      if (!trade || trade === undefined) {
        return t;
      }
      if (t.key === trade.key) {
        return t;
      }
    })
);
export function aggregator(trades: TradeDocument[]): TradeAggregate[] {
  const aggregated: TradeAggregate[] = [];
  for (let trade of trades) {
    let aggregate = aggregated.find(t => t.ticker === trade.ticker);
    // aggregate does not exist, initialize it
    if (!aggregate) {
      aggregate = new TradeAggregate();
      aggregate.ticker = trade.ticker;
      aggregate.invested = 0;
      aggregate.shares = 0;
      aggregate.commission = 0;
      // only add to agg[] if it's new
      aggregated.push(aggregate);
    }

    aggregate.shares += trade.shares;
    aggregate.commission += trade.commission;

    if (trade.shares !== 0) {
      aggregate.invested += trade.price * trade.shares;
    } else {
      aggregate.invested += trade.price;
    }

    if (aggregate.shares !== 0) {
      const localPrice = Number.parseFloat(
        localStorage.getItem(aggregate.ticker)
      );
      if (localPrice) {
        aggregate.current = localPrice;
      }
      aggregate.price =
        Math.round((aggregate.invested / aggregate.shares) * 100) / 100;
    } else {
      // invert invested incase aggregate zero
      if (trades.filter(t => t.ticker === aggregate.ticker).length > 1) {
        aggregate.invested = -aggregate.invested;
      }
    }
  }
  return aggregated;
}
export const aggregateSelector = createSelector(
  tradesSelector,
  (trades: TradeDocument[]): TradeAggregate[] => aggregator(trades)
);
