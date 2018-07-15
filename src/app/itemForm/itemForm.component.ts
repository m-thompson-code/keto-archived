import { Component } from '@angular/core';

import * as firebase from "firebase";

@Component({
  selector: 'keto-item-form',
  templateUrl: './itemForm.component.html',
  styleUrls: ['./itemForm.component.css']
})
export class ItemFormComponent {

  loading: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log("Hello from itemForm");
  	console.log(firebase);
  }

  ngAfterViewInit() {}
}
