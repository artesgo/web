import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsReportComponent } from './earnings-report.component';

describe('EarningsReportComponent', () => {
  let component: EarningsReportComponent;
  let fixture: ComponentFixture<EarningsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
