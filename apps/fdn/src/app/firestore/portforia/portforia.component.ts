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

  constructor(private ls: LayoutService) { }

  ngOnInit() {
    // this.fb.collection('layouts').pipe(
    //   switchMap((items: StoreDocument[]) => {
    //     const [page] = items;
    //     this.layout$ = items;
    //     return this.fb.getPages(page.key, 'pages');
    //   })
    // ).subscribe((layouts: StoreDocument[]) => {
    //   // layout retrieved as fields in document, which needs to be turned into array
    //   this.page$ = [];
    //   const [layout] = layouts;
    //   Object.keys(layout).map( key => {
    //     if (key !== 'key') {
    //       this.page$.push(GridUtils.parser(key, layout[key]));
    //     }
    //   })
    // }, (err) => {
    //   this.setData();
    // });
  }

  setData() {
    const mock = {
      title: '1,1,1,1*this is a test',
      description: '1,1,2,1*this is the content for the test',
      image: '2,1,1,2,i*some more content to look at'
    }
    Object.keys(mock).map( key => {
      if (key !== 'key') {
        this.page$.push(GridUtils.parser(key, mock[key]));
      }
    })
  }
}
