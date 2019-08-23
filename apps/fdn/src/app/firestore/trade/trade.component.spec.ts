import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeComponent } from './trade.component';
import { mockTrades } from '../trade';

fdescribe('TradeComponent', () => {
  let component: TradeComponent;
  let fixture: ComponentFixture<TradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeComponent ]
    })
    .compileComponents();
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
    const trade = component.consolidate(mockTrades)
    expect(trade.price).toBe(105);
  });
});
