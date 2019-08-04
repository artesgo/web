import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAggregateComponent } from './trade-aggregate.component';

describe('TradeAggregateComponent', () => {
  let component: TradeAggregateComponent;
  let fixture: ComponentFixture<TradeAggregateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeAggregateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
