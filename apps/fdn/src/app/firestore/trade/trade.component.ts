import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { TradeDocument, TradeAggregate } from '../trade';
import { MatDialog } from '@angular/material/dialog'
import { TradeAggregateComponent } from '../trade-aggregate/trade-aggregate.component';
import { TradeFacade } from './trade.facade';
import { TradeAdderComponent } from '../trade-adder/trade-adder.component';
import { TradeDeleteComponent } from '../trade-delete/trade-delete.component';
import { AuthenticationFacade } from '../../services/authentication.facade';

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
  uid = '';
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

  constructor(private ts: TradeFacade, private dialog: MatDialog, private af: AuthenticationFacade) { }

  ngOnInit() {
    this.af.user.subscribe(user => {
      if (!!user) {
        this.ts.retrieveData(user);
      }
    })
    // TODO: Create listener for auth state change
    this.ts.getTrades().subscribe((trades: TradeDocument[]) => {
      // layout retrieved as fields in document, which needs to be turned into array
      this.trades = trades;
      for (let t of this.trades) {
        // should not update local storage data
        this.addToAggregate(t);
      }
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

  /**
   * Update existing aggregate object
   * @param trade 
   */
  updateAggregate(trade: TradeDocument, adding: boolean) {
    this.aggregated = this.aggregated.map(t => {
      if (t.ticker === trade.ticker) {
        if (adding) {
          t.commission += trade.commission;
          t.invested += trade.price * trade.shares;
          t.shares += trade.shares;
        } else {
          t.commission -= trade.commission;
          t.invested -= trade.price * trade.shares;
          t.shares -= trade.shares;
        }
        t.price = this.round(t.invested / t.shares);
        t = this.getLocalPrice(t);
      }
      return t;
    });
  }

  /**
   * When creating trades, call this to update or create new aggregate
   * @param trade 
   */
  addToAggregate(trade: TradeDocument) {
    if (this.aggregated.find(t => trade.ticker === t.ticker)) {
      this.updateAggregate(trade, true);
    } else {
      let tradeAgg: TradeAggregate = {
        ticker: trade.ticker,
        shares: trade.shares,
        price: trade.price,
        invested: trade.price * trade.shares,
        commission: trade.commission,
        current: trade.price
      }
      tradeAgg = this.getLocalPrice(tradeAgg);
      this.aggregated.push(tradeAgg);
    }
  }

  /**
   * Add Trade Dialog
   */
  add() {
    const dialog = this.dialog.open(TradeAdderComponent, {
      width: '250px'
    });
    dialog.afterClosed().subscribe((trade: TradeDocument) => {
      if (trade) {
        trade.user = this.uid;
        this.ts.addTrade(trade);
        this.updateLocalPrice(trade);
        this.addToAggregate(trade);
        this.trades.push(trade);
      }
    })
  }

  /**
   * Delete Trade
   * TODO: update aggregate
   * @param trade 
   */
  delete(trade: TradeDocument) {
    const dialog = this.dialog.open(TradeDeleteComponent, {
      width: '250px'
    });
    dialog.afterClosed().subscribe(data => {
      if (data) {
        this.deleteTrade(trade);
      }
    })
  }

  deleteTrade(trade: TradeDocument) {
    this.ts.deleteTrade(trade);
    this.trades = this.trades.filter(t => t.key !== trade.key);
    this.updateAggregate(trade, false);
  }

  /**
   * round to nearest cent
   * TODO: find more robust way?
   * @param num 
   */
  round(num) {
    return (Math.round(num * 100) / 100);
  }

  navigate($event: KeyboardEvent) {
    // $event.preventDefault();
    // $event.stopPropagation();
    // console.log(this.tic);
  }

  /**
   * accessibility feature, move to directive
   * @param ref 
   */
  focus(ref: ElementRef) {
    
  }

  /**
   * Consolidation of existing trades for cleaner view
   * @param event 
   * @param trade 
   */
  consolidate(event: Event, trade: TradeDocument) {
    if (event.target['checked']) {
      trade['checked'] = true;
      this.addConsolidation(trade);
    } else {
      trade['checked'] = false;
      this.removeConsolidation(trade);
    }
  }

  /**
   * Add Trade to be consolidated
   * @param trade 
   */
  private addConsolidation(trade: TradeDocument) {
    // check consolidation list
    if (this.consolidation.length === 0) {
      // removes checkboxes from other tickers
      this.consolidating = trade.ticker;
    }
    this.consolidation.push(trade);
  }

  /**
   * Remove Trade from list to be consolidated
   * @param trade 
   */
  private removeConsolidation(trade: TradeDocument) {
    // check consolidation list
    const index = this.consolidation.indexOf(trade);
    this.consolidation.splice(index, 1);
    if (this.consolidation.length === 0) {
      this.consolidating = '';
    }
  }

  /**
   * Commit Consolidated Changes to Database
   * @param consolidate 
   */
  performConsolidation(consolidate: TradeDocument[]): TradeDocument {
    const [ last, ...rest ] = consolidate.reverse();
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
    trade.user = last.user ? last.user : this.uid;

    // TODO: Consolidated Value is off
    this.ts.updateTrade(trade);
    for (let t of rest) {
      this.ts.deleteTrade(t);
    }
    return trade;
  }

  trackByFn(trade: TradeDocument) {
    return trade.key;
  }

  private getLocalPrice(trade: TradeAggregate): TradeAggregate {
    const localPrice = Number.parseFloat(localStorage.getItem(trade.ticker));
    if (localPrice) {
      trade.current = localPrice;
    }
    return trade;
  }

  updateLocalPrice(trade: TradeDocument | TradeAggregate) {
    const price = trade['current'] || trade.price;
    localStorage.setItem(trade.ticker, price.toString());
  }

  tradeCount(trade: TradeDocument) {
    return this.trades.filter( t => trade.ticker === t.ticker).length > 1;
  }
}
