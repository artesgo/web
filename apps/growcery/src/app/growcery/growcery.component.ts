import { Component, OnInit } from '@angular/core';
import { GrowceryService } from '../services/growcery.service';
import { Observable } from 'rxjs';
import { Growcery } from '../models/growcery';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'fdn-growcery',
  templateUrl: './growcery.component.html',
  styles: ['./growcery.component.scss']
})
export class GrowceryComponent implements OnInit {
  growceryList$: Observable<Growcery[]>
  colSizes = "3fr 1fr 1fr 1fr 1fr 1fr 1fr";
  constructor(
    private dialog: MatDialog,
    private growceryService: GrowceryService
  ) { }

  ngOnInit() {
    this.growceryList$ = this.growceryService.getGrowceryList();
  }

  showFilters() {
    this.dialog.open(FilterComponent, {
      width: '250px'
    }).afterClosed().subscribe(data => data);
  }

  showSearch() {
    this.dialog.open(SearchComponent, {
      width: '250px'
    }).afterClosed().subscribe(data => data);
  }

  addItem() {
    this.dialog.open(AddComponent, {
      width: '250px'
    }).afterClosed().subscribe(data => data);
  }
}
