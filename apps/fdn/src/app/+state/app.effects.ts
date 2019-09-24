import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { APP_ACTIONS } from './app.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class AppEffects {

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(APP_ACTIONS.SIGNIN),
      mergeMap((data) => {
        return this.authService.signIn(data.user, data.password)
          .pipe(
            map(signin => APP_ACTIONS.SIGNIN_SUCCESS({ user: signin })),
            catchError(error => EMPTY)
          )
      }),
    )
  );

  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(APP_ACTIONS.SIGNOUT),
      tap(() => {
        this.authService.signOut();
      }),
    ),
    { dispatch: false }
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(APP_ACTIONS.SIGNUP),
      mergeMap((data) => {
        return this.authService.signUp(data.user, data.password)
          .pipe(
            map(user => APP_ACTIONS.SIGNUP_SUCCESS({ user })),
            catchError(error => EMPTY)
          )
      }),
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}
}
