import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAdderComponent } from './trade-adder.component';

describe('TradeAdderComponent', () => {
  let component: TradeAdderComponent;
  let fixture: ComponentFixture<TradeAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
