import { Component, Input, OnInit } from '@angular/core';
import { GridSize } from './css.unit';

@Component({
  selector: 'fdn-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  _rows: number;
  _cols: number;
  _rowSizes: GridSize[] = [];
  _columnSizes: GridSize[] = [];
  @Input() set rowSizes(rows) {
    this._rowSizes = rows;
  }
  @Input() set columnSizes(cols) {
    this._columnSizes = cols;
  }

  @Input() set rows(val) {
    this._rows = val;
    let rows = ``;
    for (let i = 0; i < val; i++) {
      rows = `${rows} ${this.getSize(this._rowSizes, i)}`;
    }
    rows = rows.trim();
    this.style = { ...this.style, 'grid-template-rows': rows }
  }
  @Input() set cols(val) {
    this._cols = val;
    let cols = ``;
    for (let i = 0; i < val; i++) {
      cols = `${cols} ${this.getSize(this._columnSizes, i)}`;
    }
    cols = cols.trim();
    this.style = { ...this.style, 'grid-template-columns': cols }
  }

  style = {};
  constructor() { }

  ngOnInit() {
  }

  getSize(arr: GridSize[], col): string {
    return `${arr[col].value || 1}${arr[col].unit}`;
  }
}
