import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as firebase from "firebase";

// Initialize Firebase Server
import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
