import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fdn-trade-delete',
  templateUrl: './trade-delete.component.html',
  styleUrls: ['./trade-delete.component.scss']
})
export class TradeDeleteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TradeDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  delete(del: boolean) {
    this.dialogRef.close(del);
  }
}
