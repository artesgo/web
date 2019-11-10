import { Pipe, PipeTransform } from '@angular/core';
import { TradeDocument } from './trade';

@Pipe({
  name: 'tradeFilter'
})
export class TradePipe implements PipeTransform {
  transform(trades: TradeDocument[], ticker: string): TradeDocument[] {
    if (ticker === '') {
      return trades;
    }
    if (trades.length > 0) {
      return trades.filter(t => t.ticker === ticker);
    }
  }
}
