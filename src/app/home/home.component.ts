import { Component } from '@angular/core';

import * as firebase from "firebase";

import { GlobalService } from '../services/global.service';

@Component({
  selector: 'keto-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loading: boolean;

  Object: any;

  constructor(public globalService: GlobalService) {
  }

  ngOnInit() {
    this.Object = Object;

    // this.loading = true;
    console.log("Hello from home");
  	// console.log(firebase);
  }

  ngAfterViewInit() {}

  getItemObjsAry() {
    if (!this.globalService || !this.globalService.dbSnapshot) {
      return [];
    }

    var itemObjs = this.globalService.dbSnapshot.itemObjs;
    var itemObjsAry = [];

    for (var key of Object.keys(itemObjs || {})) {
        itemObjsAry.push(itemObjs[key]);
    }

    return itemObjsAry;
  }

  getArrayOfServings(itemObj) {
    var servings = [];

    for (var key of Object.keys(itemObj.servings || {})) {
      servings.push(itemObj.servings[key]);
    }

    servings.sort((a, b) => {
      var aName = a.name || "";
      var bName = b.name || "";
      return aName.localeCompare(bName);
    });

    return servings;
  }
}
