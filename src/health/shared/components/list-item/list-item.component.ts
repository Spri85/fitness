import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  toggled: boolean = false;

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();

  constructor() {}

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  getRoute(item: any) {
    return [`../${item.ingredients ? 'meals' : 'workouts'}`, item.key];
  }

  ngOnInit() {}
}
