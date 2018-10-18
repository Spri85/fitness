import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// SharedModules
import { SharedModule } from '../shared/shared.module';

// Containers
import { ScheduleComponent } from './containers/schedule/schedule.component';

// Components
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.component';
import { ScheduleSectionComponent } from './components/schedule-section/schedule-section.component';

export const ROUTES: Routes = [{ path: '', component: ScheduleComponent }];

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleComponent,
    ScheduleDaysComponent,
    ScheduleControlsComponent,
    ScheduleCalendarComponent,
    ScheduleSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [],
  providers: []
})
export class ScheduleModule {}
