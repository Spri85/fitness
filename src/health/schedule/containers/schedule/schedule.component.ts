import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import {
  SheduleService,
  ScheduleItem
} from '../../../shared/services/schedule/schedule.service';
import { Store } from 'store';
import {
  Workout,
  WorkoutsService
} from '../../../shared/services/workouts/workouts.service';
import {
  Meal,
  MealsService
} from '../../../shared/services/meals/meals.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  open = false;

  date$: Observable<Date>;
  list$: Observable<Meal[] | Workout[]>;
  schedule$: Observable<ScheduleItem[]>;
  selected$: Observable<any>;
  subscriptions: Subscription[] = [];

  constructor(
    private scheduleService: SheduleService,
    private store: Store,
    private mealService: MealsService,
    private workoutService: WorkoutsService
  ) {}

  ngOnInit() {
    this.date$ = this.store.select('date');
    this.schedule$ = this.store.select('schedule');
    this.selected$ = this.store.select('selected');
    this.list$ = this.store.select('list');

    this.subscriptions = [
      this.scheduleService.shedule$.subscribe(),
      this.scheduleService.selected$.subscribe(),
      this.scheduleService.list$.subscribe(),
      this.scheduleService.items$.subscribe(),
      this.mealService.meals$.subscribe(),
      this.workoutService.workouts$.subscribe()
    ];
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  changeSection(event: any) {
    this.open = true;
    this.scheduleService.selectSection(event);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  closeAssign() {
    this.open = false;
  }

  assignItem(items: string[]) {
    this.scheduleService.updateItems(items);
    this.closeAssign();
  }
}
