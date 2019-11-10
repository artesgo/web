import { Component, OnInit } from '@angular/core';
import { GridUtils } from '../grid.parser';
import { Layout } from '../layout';
import { LayoutService } from './portforia.service';

@Component({
  selector: 'fdn-portforia',
  templateUrl: './portforia.component.html',
  styleUrls: ['./portforia.component.scss']
})
export class PortforiaComponent implements OnInit {
  layout$: any;
  page$: Layout[] = [];

  constructor(private ls: LayoutService) {}

  ngOnInit() {
    // this.ls.get();
  }

  setData() {
    const mock = {
      title: '1,1,1,1*this is a test',
      description: '1,1,2,1*this is the content for the test',
      image: '2,1,1,2,i*some more content to look at'
    };
    Object.keys(mock).map(key => {
      if (key !== 'key') {
        this.page$.push(GridUtils.parser(key, mock[key]));
      }
    });
  }
}
