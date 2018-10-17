import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'schedule-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-controls.component.html',
  styleUrls: ['./schedule-controls.component.scss']
})
export class ScheduleControlsComponent implements OnInit {
  @Input()
  selected: Date;

  @Output()
  move = new EventEmitter<number>();

  offset = 0;

  ngOnInit() {}

  moveDate(offset: number) {
    this.offset = offset;
    this.move.emit(offset);
  }
}
