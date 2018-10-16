import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

export interface Workout {
  name: string;
  type: string;
  strength: any;
  endurance: string;
  timestamp: number;
  key?: string;
}

@Injectable()
export class WorkoutsService {
  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  // NEW API
  workouts$: Observable<Workout[]> = this.db
    .list(`workouts/${this.uid}`)
    .snapshotChanges()
    .pipe(
      filter(Boolean),
      // Use snapshotChanges().map() to store the key
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ),
      tap(next => this.store.set('workouts', next))
    );

  get uid() {
    return this.authService.user.uid;
  }

  geWorkout(key: string) {
    if (!key) return of({});
    return this.store.select<Workout[]>('workouts').pipe(
      filter(Boolean), //If the stream is empty filter will stop it
      map(workouts => workouts.find((workout: Workout) => workout.key === key))
    );
  }

  addWorkout(workout: Workout) {
    return this.db.list(`workouts/${this.uid}`).push(workout);
  }

  removeWorkout(key: string) {
    return this.db.list(`workouts/${this.uid}`).remove(key);
  }

  updateWorkout(key: string, workout: Workout) {
    return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
  }
}
