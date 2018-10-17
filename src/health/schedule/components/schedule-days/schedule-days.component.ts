import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'schedule-days',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-days.component.html',
  styleUrls: ['./schedule-days.component.scss']
})
export class ScheduleDaysComponent {
  @Input()
  selected: number;

  @Output()
  select = new EventEmitter<number>();

  days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  selectDay(index: number) {
    this.select.emit(index);
  }
}
