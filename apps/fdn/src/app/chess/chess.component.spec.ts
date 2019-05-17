import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessComponent } from './chess.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChessComponent', () => {
  let component: ChessComponent;
  let fixture: ComponentFixture<ChessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
