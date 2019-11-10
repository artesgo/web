import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { createReducer, StoreModule } from '@ngrx/store';
import { IState } from './+state/app.reducer';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let initialState: IState = {
    subscription: null,
    user: null,
    trades: {
      score: 10,
      trades: [
        {
          key: '1',
          user: '2',
          timestamp: 333,
          ticker: 'tick',
          shares: 5,
          price: 6
        },
        {
          key: '1',
          user: '2',
          timestamp: 333,
          ticker: 'tick',
          shares: 5,
          price: 6
        }
      ]
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        StoreModule.forRoot({ count: createReducer(initialState) }),
        AngularFireModule.initializeApp(environment.firestore),
        AngularFireAuthModule,
        BrowserAnimationsModule
      ],
      declarations: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {}
        },
        {
          provide: Router,
          useValue: {
            events: of(new NavigationEnd(123, '/test', '/end'))
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
