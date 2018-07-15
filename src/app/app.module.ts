import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';

import * as firebase from "firebase";

// Initialize Firebase Server
import { firebaseConfig } from './firebaseConfig';
firebase.initializeApp(firebaseConfig);

import { AppComponent } from './app.component';

// Route Components
import { HomeComponent } from './home';
import { ItemFormComponent } from './itemForm';

// Modules
import { ContainerModule } from './modules/container';
import { InputModule } from './modules/input';
import { PreloaderModule } from './modules/preloader';

// Services
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

    ContainerModule,
    InputModule,
    PreloaderModule,

    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
