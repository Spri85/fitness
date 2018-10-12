import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class MealsService {
  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  meals$: Observable<Meal[]> = (this.db
    .list(`meals/${this.uid}`)
    .valueChanges() as Observable<Meal[]>).pipe(
    tap(next => this.store.set('meals', next))
  );

  get uid() {
    return this.authService.user.uid;
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }
}
