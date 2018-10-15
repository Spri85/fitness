import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

export interface Meal {
  name: string;
  ingredients: string[];
  timestamp: number;
  key?: string;
}

@Injectable()
export class MealsService {
  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  // OLD API
  // meals$: Observable<Meal[]> = (this.db
  //   .list(`meals/${this.uid}`)
  //   .valueChanges() as Observable<Meal[]>).pipe(
  //   tap(next => this.store.set('meals', next))
  // );

  // NEW API
  meals$ = this.db
    .list(`meals/${this.uid}`)
    .snapshotChanges()
    .pipe(
      // Use snapshotChanges().map() to store the key
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      tap(next => this.store.set('meals', next))
    );

  get uid() {
    return this.authService.user.uid;
  }

  getMeal(key: string) {
    if (!key) return of({});
    return this.store.select<Meal[]>('meals').pipe(
      filter(Boolean), //If the stream is empty filter will stop it
      map(meals => meals.find((meal: Meal) => meal.key === key))
    );
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`).remove(key);
  }

  updateMeal(key: string, meal: Meal) {
    return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  }
}
