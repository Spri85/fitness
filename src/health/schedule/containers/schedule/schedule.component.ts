import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { SheduleService } from '../../../shared/services/schedule/schedule.service';
import { Store } from 'store';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  date$: Observable<Date>;
  subscriptions: Subscription[] = [];

  constructor(private scheduleService: SheduleService, private store: Store) {}

  ngOnInit() {
    this.date$ = this.store.select('date');

    this.subscriptions = [this.scheduleService.shedule$.subscribe()];
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
