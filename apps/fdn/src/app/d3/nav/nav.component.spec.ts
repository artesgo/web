import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: D3NavComponent;
  let fixture: ComponentFixture<D3NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
