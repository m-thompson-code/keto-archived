import { Component } from '@angular/core';

import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keto app';

  constructor() {
  }

  ngOnInit() {
  	console.log(firebase);
  }

  ngAfterViewInit() {}
}
