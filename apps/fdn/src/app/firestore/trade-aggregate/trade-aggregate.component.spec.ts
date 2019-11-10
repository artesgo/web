import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeAggregateComponent } from './trade-aggregate.component';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule
} from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TradeAggregateComponent', () => {
  let component: TradeAggregateComponent;
  let fixture: ComponentFixture<TradeAggregateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MatDialogModule],
      declarations: [TradeAggregateComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            data: {
              ticker: 'toast'
            }
          }
        },
        {
          provide: MatDialogRef,
          useValue: {
            data: {
              ticker: 'taste'
            }
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
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
