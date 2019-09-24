import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TradeArgs } from '../trade';

@Component({
  selector: 'fdn-trade-adder',
  templateUrl: './trade-adder.component.html',
  styleUrls: ['./trade-adder.component.scss']
})
export class TradeAdderComponent implements OnInit {
  priceCtrl: FormControl;
  tickerCtrl: FormControl;
  commCtrl: FormControl;
  sharesCtrl: FormControl;
  trade: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TradeAdderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.priceCtrl = new FormControl();
    // TODO: set value to avg or ngrx stored value for ticker
    this.trade = this.fb.group({
      price: this.priceCtrl,
      ticker: this.tickerCtrl,
      comm: this.commCtrl,
      shares: this.sharesCtrl,
      // date
      // user
    });
  }

  add() {
    // TODO: Validate before close
    const trade: TradeArgs = {
      shares: +this.trade.value.shares,
      price: +this.trade.value.price,
      commission: +this.trade.value.comm,
      ticker: this.trade.value.ticker,
    };
    this.dialogRef.close(trade);
  }
}
