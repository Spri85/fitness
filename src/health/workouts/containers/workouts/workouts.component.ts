import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  WorkoutsService,
  Workout
} from '../../../shared/services/workouts/workouts.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

@Component({
  selector: 'workouts',
  styleUrls: ['workouts.component.scss'],
  templateUrl: 'workouts.component.html'
})
export class WorkoutsComponent implements OnInit, OnDestroy {
  workouts$: Observable<Workout[]>;
  subscription: Subscription;

  constructor(private workoutsService: WorkoutsService, private store: Store) {}

  ngOnInit() {
    this.workouts$ = this.store.select<Workout[]>('workouts');
    this.subscription = this.workoutsService.workouts$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeWorkout(event: Workout) {
    this.workoutsService.removeWorkout(event.key);
  }
}
