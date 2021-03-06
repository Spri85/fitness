import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

import {
  ScheduleItem,
  ScheduleList
} from '../../../shared/services/schedule/schedule.service';

@Component({
  selector: 'schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss']
})
export class ScheduleCalendarComponent implements OnInit, OnChanges {
  @Input()
  set date(date: Date) {
    this.selectedDay = new Date(date.getTime());
  }

  @Input()
  items: ScheduleList;

  @Output()
  change = new EventEmitter<Date>();

  @Output()
  select = new EventEmitter<any>();

  selectedDay: Date;
  selectedWeek: Date;
  selectedDayIndex: number;

  sections = [
    { key: 'morning', name: 'Morning' },
    { key: 'lanch', name: 'Lanch' },
    { key: 'evening', name: 'Evening' },
    { key: 'snacks', name: 'Snacks' }
  ];

  constructor() {}

  ngOnChanges() {
    this.selectedDayIndex = this.getToday(this.selectedDay);
    this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
  }

  onChange(wekOffset: number) {
    const startOfWeek = this.getStartOfWeek(new Date());
    const startDate = new Date(
      startOfWeek.getFullYear(),
      startOfWeek.getMonth(),
      startOfWeek.getDate()
    );

    startDate.setDate(startDate.getDate() + wekOffset * 7);
    this.change.emit(startDate);
  }

  selectSection({ type, assigned, data }: any, section: string) {
    const day = this.selectedDay;
    this.select.emit({
      type,
      assigned,
      section,
      day,
      data
    });
  }

  getSection(name: string): ScheduleItem {
    return (this.items && this.items[name]) || {};
  }

  selectDay(index: number) {
    const selectedDay = new Date(this.selectedWeek);
    selectedDay.setDate(selectedDay.getDate() + index);
    this.change.emit(selectedDay);
  }

  private getToday(date: Date) {
    let today = date.getDay() - 1;
    if (today < 0) {
      today = 6;
    }
    return today;
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  ngOnInit() {}
}
