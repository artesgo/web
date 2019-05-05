import { Directive, Input, HostBinding, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[fdn-grid-item]'
})
export class GridItemDirective {
  _row;
  _col;
  _rowSpan;
  _colSpan;
  @Input() set row(val) {
    this._row = val;
    this.el.nativeElement.style.gridRow = val;
  }
  @Input() set col(val) {
    this._col = val;
    this.el.nativeElement.style.gridColumn = val;
  }
  @Input() set rowSpan(val) {
    this._rowSpan = val;
    this.el.nativeElement.style.gridRowEnd = this._row + val;
  }
  @Input() set colSpan(val) {
    this._colSpan = val;
    this.el.nativeElement.style.gridColumnEnd = this._col + val;
  }
  @Input() set debug(debug) {
    if (debug) {
      this.el.nativeElement.style.border = '1px solid black';
      this.el.nativeElement.style.backgroundColor = this.randomRGB();
    }
  };

  random() {
    return Math.floor(Math.random() * 128) + 127;
  }
  randomRGB() {
    return `rgba(${this.random()}, ${this.random()}, ${this.random()}, 1)`;
  }
  constructor(private el: ElementRef) {
  }
}
