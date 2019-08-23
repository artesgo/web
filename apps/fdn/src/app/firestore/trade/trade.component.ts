import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { TradeDocument, TradeAggregate } from '../trade';
import { MatDialog } from '@angular/material/dialog'
import { TradeAggregateComponent } from '../trade-aggregate/trade-aggregate.component';
import { TradeService } from './trade.service';
import { TradeAdderComponent } from '../trade-adder/trade-adder.component';
import { TradeDeleteComponent } from '../trade-delete/trade-delete.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'fdn-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  trades: TradeDocument[];
  aggregated: TradeAggregate[] = [];
  consolidation: TradeDocument[] = [];
  consolidating = '';
  title = 0;
  colSizes = [
    { value: 1, unit: "fr" },
    { value: 1, unit: "fr" },
    { value: 1, unit: "fr" },
    { value: 1, unit: "fr" },
    { value: 1, unit: "fr" },
  ]
  @ViewChildren('.pos') pos: ElementRef[];
  @ViewChildren('.tic') tic: ElementRef[];
  @ViewChildren('.pri') pri: ElementRef[];
  @ViewChildren('.sha') sha: ElementRef[];
  @ViewChildren('.dat') dat: ElementRef[];
  @ViewChildren('.com') com: ElementRef[];

  constructor(private ts: TradeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.ts.get().pipe(
      take(1)
    ).subscribe((trades: TradeDocument[]) => {
      // layout retrieved as fields in document, which needs to be turned into array
      this.trades = trades;
      for (let t of this.trades) {
        this.addToAggregate(t);
      }
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * Get cumulative earnings for ticker
   * @param ticker 
   */
  aggregate(ticker: string, trades: TradeDocument[]) {
    let _invested = 0;
    let _shares = 0;
    let _comm = 0;
    trades.map((transaction: TradeDocument) => {
      if (transaction.ticker === ticker) {
        _comm += (transaction.commission ? transaction.commission : 0);
        _invested += (transaction.shares * transaction.price);
        _shares += transaction.shares;
      }
    });
    const ret: TradeAggregate = {
      invested: this.round(_invested),
      shares: _shares,
      price: 0,
      commission: _comm,
      ticker: ticker,
      current: 0,
    };
    if (ret.shares) {
      ret.price = this.round(ret.invested / ret.shares);
      ret.current = ret.price;
    }
    return ret;
  }

  openDialog(ticker: string) {
    const _trade = this.aggregated.find(trade => trade.ticker === ticker);
    this.dialog.open(TradeAggregateComponent, {
      width: '250px',
      data: _trade
    });
  }

  add() {
    const dialog = this.dialog.open(TradeAdderComponent, {
      width: '250px'
    });
    dialog.afterClosed().subscribe((trade: TradeDocument) => {
      if (trade) {
        this.ts.addTrade(trade).then(data => {
          this.updateAggregate(trade);
        });
      }
    })
  }

  updateAggregate(trade: TradeDocument) {
    this.aggregated = this.aggregated.map(t => {
      if (t.ticker === trade.ticker) {
        t.commission += trade.commission;
        t.invested += trade.price * trade.shares;
        t.shares += trade.shares;
        t.price = this.round(t.invested / t.shares);
        t.current = trade.price;
      }
      return t;
    })
  }

  addToAggregate(trade: TradeDocument) {
    if (this.aggregated.find(t => trade.ticker === t.ticker)) {
      this.updateAggregate(trade);
    } else {
      const tradeAgg: TradeAggregate = {
        ticker: trade.ticker,
        shares: trade.shares,
        price: trade.price,
        invested: trade.price * trade.shares,
        commission: trade.commission,
        current: trade.price
      }
      this.aggregated.push(tradeAgg);
    }
  }

  delete(trade: TradeDocument) {
    const dialog = this.dialog.open(TradeDeleteComponent, {
      width: '250px'
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        this.ts.deleteTrade(trade);
      }
    })
  }

  /**
   * round to nearest cent
   * @param num 
   */
  round(num) {
    return (Math.round(num * 100) / 100);
  }

  navigate($event: KeyboardEvent) {
    // $event.preventDefault();
    // $event.stopPropagation();
    console.log(this.tic);
  }

  focus(ref: ElementRef) {
    
  }

  addConsolidation(event: Event, trade: TradeDocument) {
    console.log(event.target, trade);
  }

  consolidate(consolidate: TradeDocument[]): TradeDocument {
    const [ last ] = consolidate.reverse();
    let consolidated: TradeAggregate;
    consolidated = this.aggregate(last.ticker, consolidate);
    // delete consolidated trades
    // update last trade
    const trade = new TradeDocument();
    trade.shares = consolidated.shares;
    trade.ticker = consolidated.ticker;
    trade.commission = consolidated.commission;
    trade.price = this.round(consolidated.invested / consolidated.shares);

    trade.key = last.key;
    trade.timestamp = last.timestamp;
    trade.user = last.user;
    return trade;
  }

  trackByFn(trade: TradeDocument) {
    return trade.key;
  }
}
