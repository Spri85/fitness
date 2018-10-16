import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// third-party modules
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Components
import { ListItemComponent } from './components/list-item/list-item.component';

// Services
import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.service';

// Pipes
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';

@NgModule({
  declarations: [ListItemComponent, JoinPipe, WorkoutPipe],
  imports: [CommonModule, AngularFireDatabaseModule, RouterModule],
  exports: [ListItemComponent, JoinPipe, WorkoutPipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService, WorkoutsService]
    };
  }
}
