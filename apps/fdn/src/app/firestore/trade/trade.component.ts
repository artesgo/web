import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { TradeDocument, TradeAggregate } from '../trade';
import { MatDialog } from '@angular/material/dialog'
import { TradeFacade } from './trade.facade';
import { TradeAdderComponent } from '../trade-adder/trade-adder.component';
import { TradeDeleteComponent } from '../trade-delete/trade-delete.component';
import { AuthenticationFacade } from '../../services/authentication.facade';
import { Observable } from 'rxjs';
import { aggregator } from './+state/trade.selectors';

@Component({
  selector: 'fdn-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  trade$: Observable<TradeDocument[]>;
  aggregate$: Observable<TradeAggregate[]>;
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
    });
    this.trade$ = this.ts.getTrades();
    this.aggregate$ = this.ts.getAggregate();
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
        this.ts.addTrade(trade);
        this.updateLocalPrice(trade);
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
    let [ last, ...rest ] = consolidate.reverse();
    let consolidated: TradeAggregate;
    [consolidated] = aggregator(consolidate);

    // delete consolidated trades
    // update last trade
    const trade = new TradeDocument();
    trade.shares = consolidated.shares;
    trade.ticker = consolidated.ticker;
    trade.commission = consolidated.commission;
    // RULE: if consolidated shares is 0, do not divide
    if (consolidated.shares === 0) {
      trade.price = -consolidated.invested;
    } else {
      trade.price = this.round(consolidated.invested / consolidated.shares);
    }

    trade.key = last.key;
    trade.timestamp = last.timestamp;
    trade.user = last.user ? last.user : this.uid;

    this.ts.updateTrade(trade);
    for (let t of rest) {
      t['checked'] = false;
      this.hideTrade(t);
    }

    this.clearConsolidation();

    last.shares = trade.shares;
    last.price = trade.price;
    last['checked'] = false;
    return trade;
  }

  hideTrade(trade: TradeDocument) {
    trade['deleted'] = true;
    this.ts.deleteTrade(trade);
  }

  trackByFn(trade: TradeDocument) {
    return trade.key;
  }

  clearConsolidation() {
    this.consolidating = '';
    this.consolidation = [];
  }

  updateLocalPrice(trade: TradeDocument | TradeAggregate) {
    const price = trade['current'] || trade.price;
    localStorage.setItem(trade.ticker, price.toString());
  }

  tradeCount(trades, trade: TradeDocument) {
    return trades.filter( t => trade.ticker === t.ticker).length > 1;
  }
}
