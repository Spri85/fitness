import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './auth/auth.module';

// containers
import { AppComponent } from './app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}

/* 
var config = {
    apiKey: "AIzaSyB48x09FCtpOv0fhGSCPp3-zr78-4D71zM",
    authDomain: "fitness-app-832f8.firebaseapp.com",
    databaseURL: "https://fitness-app-832f8.firebaseio.com",
    projectId: "fitness-app-832f8",
    storageBucket: "fitness-app-832f8.appspot.com",
    messagingSenderId: "490368438107"
  };
*/
