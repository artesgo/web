import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IState } from '../+state/app.reducer';
import { APP_ACTIONS } from '../+state/app.actions';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { userSelector } from '../+state/app.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFacade {
  user: Observable<firebase.User>;
  constructor(private store: Store<IState>, private auth: AuthenticationService) {
    this.user = this.auth.user || this.store.pipe(select(userSelector));
  }
  /* Sign up */
  signUp(email: string, password: string): void {
    this.store.dispatch(APP_ACTIONS.SIGNUP({ user: email, password }));
  }
  /* Sign in */
  signIn(email: string, password: string): void {
    this.store.dispatch(APP_ACTIONS.SIGNIN({ user: email, password }));
  }
  /* Sign out */
  signOut(): void {
    this.store.dispatch(APP_ACTIONS.SIGNOUT());
  }
}
