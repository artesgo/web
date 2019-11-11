import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeComponent } from './trade.component';
import { mockTrades } from '../trade';
import { FoundationModule } from '@fdn/foundation';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TradePipe } from '../trade.pipe';
import { FormsModule } from '@angular/forms';
import { StoreModule, createReducer } from '@ngrx/store';
import { IState } from '../../+state/app.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'apps/fdn/src/environments/environment';
import { AuthenticationFacade } from '../../services/authentication.facade';
import { TradeFacade } from './trade.facade';

describe('TradeComponent', () => {
  let component: TradeComponent;
  let fixture: ComponentFixture<TradeComponent>;
  let initialState: IState = {
    subscription: null,
    user: null,
    trades: {
      score: 10,
      trades: [
        {
          key: '1',
          user: '2',
          timestamp: 333,
          ticker: 'tick',
          shares: 5,
          price: 6
        }
      ]
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ count: createReducer(initialState) }),
        MatDialogModule,
        FoundationModule,
        AngularFireModule.initializeApp(environment.firestore),
        AngularFireAuthModule,
        FormsModule
      ],
      declarations: [TradeComponent, TradePipe],
      providers: [AuthenticationFacade, TradeFacade],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should consolidate trades', () => {
    const trade = component.performConsolidation(mockTrades);
    expect(trade.price).toEqual(105);
  });
});
