import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowceryComponent } from './growcery.component';

describe('GrowceryComponent', () => {
  let component: GrowceryComponent;
  let fixture: ComponentFixture<GrowceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowceryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
