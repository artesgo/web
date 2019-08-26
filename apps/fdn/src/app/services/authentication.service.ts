import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of, from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: Observable<firebase.User>;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }
  /* Sign up */
  signUp(email: string, password: string) {
    return from(this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password));
  }
  /* Sign in */
  signIn(email: string, password: string): Observable<any> {
    return from(this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password));
  }
  /* Sign out */
  signOut() {
    return from(this.angularFireAuth.auth.signOut());
  }
}
