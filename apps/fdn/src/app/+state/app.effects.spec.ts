import { AppEffects } from './app.effects';
import { APP_ACTIONS } from './app.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

describe('AppEffects', () => {
  let actions: ReplaySubject<any>;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions),
        {
          provide: AuthenticationService,
          useValue: {
            signIn: jest.fn(() => {
              user: 'hey';
            }),
            signUp: jest.fn(),
            signOut: jest.fn()
          }
        }
      ]
    });
    effects = TestBed.get(AppEffects);
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });

  it('should login successfully', async () => {
    actions = new ReplaySubject(1);
    const login = {
      type: APP_ACTIONS.SIGNIN.type,
      payload: {
        user: 'hey',
        password: 'you'
      }
    };
    effects.signIn$.subscribe(login => {
      expect(login.user).toEqual('heya');
    });
    actions.next(login);
  });

  // it('should play with marbles', () => {
  //   let httpResponse = hot('--a-(|a)', { a: { auth: 'hey' } });
  //   let result = hot('----(|a)', { a: { auth: 'ho' } });
  //   let expected = cold('--a-(|a)', { a: { auth: 'ho' } });
  //   expect(httpResponse.pipe(switchMap(() => result))).toBeObservable(expected);
  // });

  // it('should dispatch success', () => {
  //   const userLogin = { user: 'hey', password: 'you' };
  //   authServiceMock.signIn.mockReturnValueOnce(userLogin);
  //   actions$ = cold('--a-(|a)', { a: APP_ACTIONS.SIGNIN(userLogin) });
  //   effects = new AppEffects(actions$, authServiceMock);
  //   const result = cold('----(|a)', { a: { user: 'heya', password: 'you' } });
  //   effects.signIn$.subscribe(action => {
  //     // expect(action).toEqual(result);
  //     console.log(action);
  //     expect(authServiceMock.signIn).not.toHaveBeenCalled();
  //   });
  //   expect(effects.signIn$).toBeObservable(result);
  // });
});
