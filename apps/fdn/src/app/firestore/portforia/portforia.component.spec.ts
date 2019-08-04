import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortforiaComponent } from './portforia.component';

describe('PortforiaComponent', () => {
  let component: PortforiaComponent;
  let fixture: ComponentFixture<PortforiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortforiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortforiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
