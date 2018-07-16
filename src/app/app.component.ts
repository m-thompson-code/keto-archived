import { Component, ChangeDetectorRef } from '@angular/core';

import * as firebase from "firebase";

import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keto app';

  constructor(private ref: ChangeDetectorRef, public globalService: GlobalService) {
  }

  ngOnInit() {
  	console.log(firebase);
  }

  ngAfterViewInit() {}

  forceChangeDetection() {
    console.log("Forcing change detection");
    this.ref.detectChanges();
  }
}
