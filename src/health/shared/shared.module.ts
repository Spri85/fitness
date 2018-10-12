import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// third-party modules
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Components
import { ListItemComponent } from './components/list-item/list-item.component';

// Services
import { MealsService } from './services/meals/meals.service';

@NgModule({
  declarations: [ListItemComponent],
  imports: [CommonModule, AngularFireDatabaseModule, RouterModule],
  exports: [ListItemComponent],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService]
    };
  }
}