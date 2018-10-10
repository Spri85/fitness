import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './auth/auth.module';

// containers
import { AppComponent } from './app.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';

// routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppNavComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}

/* 

*/
