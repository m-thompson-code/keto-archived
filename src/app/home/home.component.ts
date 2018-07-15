import { Component } from '@angular/core';

import * as firebase from "firebase";

@Component({
  selector: 'keto-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loading: boolean;

  constructor() {
  }

  ngOnInit() {
    this.loading = true;
    console.log("Hello from home");
  	console.log(firebase);
  }

  ngAfterViewInit() {}
}
