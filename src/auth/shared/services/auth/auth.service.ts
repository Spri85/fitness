import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { Store } from 'store';
import { tap } from 'rxjs/operators';

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
}

@Injectable()
export class AuthService {
  constructor(private af: AngularFireAuth, private store: Store) {}

  auth$ = this.af.authState.pipe(
    tap(next => {
      if (!next) {
        this.store.set('user', null);
        return;
      }

      const user: User = {
        email: next.email,
        uid: next.uid,
        authenticated: true
      };

      this.store.set('user', user);
    })
  );

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.af.auth.signOut();
  }

  get authState() {
    return this.af.authState;
  }

  get user() {
    return this.af.auth.currentUser;
  }
}
