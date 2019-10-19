import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { mockGrowceryList } from './growcery.mock';

@Injectable({
  providedIn: 'root'
})
export class GrowceryService {

  constructor() { }

  getGrowceryList() {
    return of(mockGrowceryList)
  }
}

