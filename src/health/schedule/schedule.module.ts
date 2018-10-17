import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Containers
import { ScheduleComponent } from './containers/schedule/schedule.component';

// Components
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.component';

export const ROUTES: Routes = [{ path: '', component: ScheduleComponent }];

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleComponent,
    ScheduleDaysComponent,
    ScheduleControlsComponent,
    ScheduleCalendarComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)],
  exports: [],
  providers: []
})
export class ScheduleModule {}
