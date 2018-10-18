import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { ScheduleItem } from '../../../shared/services/schedule/schedule.service';

@Component({
  selector: 'schedule-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-section.component.html',
  styleUrls: ['./schedule-section.component.scss']
})
export class ScheduleSectionComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  section: ScheduleItem;

  @Output()
  select = new EventEmitter<any>();

  onSelect(type: string, assigned: string[] = []) {
    const data = this.section;
    this.select.emit({
      type,
      assigned,
      data
    });
  }

  constructor() {}

  ngOnInit() {}
}
