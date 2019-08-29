import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'fdn-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() alt: string;
  @Input() src: string;
  @ViewChild('imgElem') img: ElementRef;

  style = {
    'transform': 'skew(0)',
    'height.px': '100',
    'width.px': '100',
  }
  imgStyle = {
    'transform': 'skew(0)',
  }
  @Input() set angle(num: number) {
    this.style['transform'] = `skew(${num}deg)`;
    this.imgStyle['transform'] = `skew(-${num}deg)`;
  }
  @Input() set height(num: number) {
    this.style['height.px'] = `${num}`;
  };
  @Input() set width(num: number) {
    this.style['width.px'] = `${num}`;
    this.imgStyle['width.px'] = `${num}`;
  };
  @Input() set imgWidth(num: number) {
    this.imgStyle['width.px'] = `${num}`;
  };
  @Input() set left(num: number) {
    this.imgStyle['left.px'] = `-${num}`;
  }
  @Input() set top(num: number) {
    this.imgStyle['top.px'] = `-${num}`;
  }

  constructor() { }

  getHeight() {
    this.imgWidth = this.img.nativeElement.offsetHeight;
  }
}
