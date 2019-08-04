import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
import { StoreDocument } from '../firestore';
import { TradeUtils } from '../trade.parser';
import { Transaction, Trade } from '../trade';
import { MatDialog } from '@angular/material/dialog'
import { TradeAggregateComponent } from '../trade-aggregate/trade-aggregate.component';
@Component({
  selector: 'fdn-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  trade$;
  consolidated: any[] = [];
  title = 0;
  colSizes = [
    { value: 2, unit: "fr" },
    { value: 1, unit: "fr" },
    { value: 3, unit: "fr" },
    { value: 2, unit: "fr" },
    { value: 3, unit: "fr" },
    { value: 1, unit: "fr" },
  ]
  @ViewChildren('.pos') pos: ElementRef[];
  @ViewChildren('.tic') tic: ElementRef[];
  @ViewChildren('.pri') pri: ElementRef[];
  @ViewChildren('.sha') sha: ElementRef[];
  @ViewChildren('.dat') dat: ElementRef[];
  @ViewChildren('.com') com: ElementRef[];

  constructor(private fb: FirestoreService, private dialog: MatDialog) { }

  ngOnInit() {
    this.fb.collection('trades').subscribe((trades: StoreDocument[]) => {
      // layout retrieved as fields in document, which needs to be turned into array
      this.trade$ = [];
      this.trade$ = this.parseObject(trades);

      // TODO: add transaction

      // TODO: insert user id into trade$ object
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * parse data from server
   * @param obj 
   */
  parseObject(obj) {
    let parsed;
    Object.keys(obj).map( key => {
      parsed = TradeUtils.parser(key, obj[key]);
    });
    return parsed;
  }

  /**
   * Get cumulative earnings for ticker
   * @param ticker 
   */
  aggregate(ticker) {
    let _invested = 0;
    let _shares = 0;
    let _comm = 0;
    this.trade$.trades
      .map((transaction: Transaction) => {
        if (transaction.ticker === ticker) {
          _comm += (transaction.commission ? transaction.commission : 0);
          if (transaction.type === 'b') {
            _invested += (transaction.shares * transaction.price);
            _shares += transaction.shares;
          } else {
            _invested -= (transaction.shares * transaction.price);
            _shares -= transaction.shares;
          }
        }
      });
    const ret = {
      invested: this.round(_invested - _comm),
      shares: _shares,
      average: 0,
      commission: _comm,
      ticker: ticker
    };
    ret.average = this.round(ret.invested / ret.shares);
    this.dialog.open(TradeAggregateComponent, {
      width: '250px',
      data: ret
    });
  }

  /**
   * round to nearest cent
   * @param num 
   */
  round(num) {
    return (Math.round(num * 100) / 100);
  }

  navigate($event: KeyboardEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  focus(ref: ElementRef) {
    
  }
}
