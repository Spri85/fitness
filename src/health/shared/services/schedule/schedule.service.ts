import { Injectable } from '@angular/core';
import { Store } from 'store';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Meal } from '../meals/meals.service';
import { Workout } from '../workouts/workouts.service';

export interface ScheduleItem {
  meals: Meal[];
  workouts: Workout[];
  section: string;
  timestamp: Date;
  key?: string;
}

@Injectable()
export class SheduleService {
  date$ = new BehaviorSubject(new Date());

  shedule$: Observable<any[]> = this.date$.pipe(
    tap((next: any) => this.store.set('date', next))
  );

  constructor(private store: Store) {}

  updateDate(date: Date) {
    this.date$.next(date);
  }
}
