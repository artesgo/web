import { Injectable } from '@angular/core';
import { Layout } from '../layout';
import { Store } from '@ngrx/store';
import { IState } from '../../+state/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class LayoutFacade {
  COLLECTION = 'layouts';

  constructor(private store: Store<IState>) {}

  addLayout(layout: Layout) {
    // this.store.dispatch()
  }
}
