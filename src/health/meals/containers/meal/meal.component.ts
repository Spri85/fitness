import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  Meal,
  MealsService
} from '../../../shared/services/meals/meals.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnDestroy {
  constructor(
    private mealService: MealsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  meal$: Observable<Meal>;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.mealService.meals$.subscribe();
    this.meal$ = this.route.params.pipe(
      switchMap(param => {
        return this.mealService.getMeal(param.id);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async addMeal(event: Meal) {
    await this.mealService.addMeal(event);
    this.backToMeals();
  }

  async updateMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealService.updateMeal(key, event);
    this.backToMeals();
  }

  async removeMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealService.removeMeal(key);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }
}
