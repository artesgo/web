import { Component, OnInit } from '@angular/core';
import { GrowceryService } from '../services/growcery.service';
import { Observable } from 'rxjs';
import { Growcery } from '../models/growcery';

@Component({
  selector: 'fdn-growcery',
  templateUrl: './growcery.component.html',
  styles: []
})
export class GrowceryComponent implements OnInit {
  growceryList$: Observable<Growcery[]>
  constructor(private growceryService: GrowceryService) { }

  ngOnInit() {
    this.growceryList$ = this.growceryService.getGrowceryList();
  }

}
