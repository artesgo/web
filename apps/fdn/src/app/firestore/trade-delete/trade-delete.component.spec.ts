import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeDeleteComponent } from './trade-delete.component';

describe('TradeDeleteComponent', () => {
  let component: TradeDeleteComponent;
  let fixture: ComponentFixture<TradeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
