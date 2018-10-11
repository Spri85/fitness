import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Containers
import { MealsComponent } from './containers/meals/meals.component';

export const ROUTES: Routes = [{ path: '', component: MealsComponent }];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)],
  exports: [],
  declarations: [MealsComponent],
  providers: []
})
export class MealsModule {}
