import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  shares: number;
  commission: number;
  invested: number;
  average: number;
  ticker: string;
}

@Component({
  selector: 'fdn-trade-aggregate',
  templateUrl: './trade-aggregate.component.html',
  styleUrls: ['./trade-aggregate.component.scss']
})
export class TradeAggregateComponent implements OnInit {
  priceCtrl: FormControl;
  priceForm: FormGroup;
  earnings = 0;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TradeAggregateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.priceCtrl = new FormControl();
    // TODO: set value to avg or ngrx stored value for ticker
    this.priceCtrl.setValue(this.data.average);
    this.priceForm = this.fb.group({
      price: this.priceCtrl
    });
    this.priceForm.valueChanges.subscribe(change => {
      const amt = this.data.shares * Number.parseFloat(change['price']);
      this.earnings = amt - this.data.invested;
    });
  }

  round(num) {
    return (Math.round(num * 100) / 100);
  }
}
