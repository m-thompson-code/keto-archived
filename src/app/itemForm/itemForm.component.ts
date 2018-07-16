import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as firebase from "firebase";

import { InputComponent } from '../modules/input/input.component';

import { GlobalService } from '../services/global.service';

@Component({
  selector: 'keto-item-form',
  templateUrl: './itemForm.component.html',
  styleUrls: ['./itemForm.component.css']
})
export class ItemFormComponent {

  loading: boolean;

  suggestedServingsTimeout: any;

  itemObjKey: string;
  itemObj: any;
  oldItemObj: any;

  @ViewChild("servingInput")
  private servingInput: InputComponent;

  servingKey: string;
  servingText: string;

  loadingSuggestedServings: boolean;
  cleanedServingText: string;

  constructor(public router: Router, private route: ActivatedRoute, private globalService: GlobalService) {
    this.router = router;
  }

  ngOnInit() {
    console.log("Hello from itemForm");

    this.loading = true;

    this.servingText = null;

    this.route.params.subscribe(params => {
      this.itemObjKey = params['itemObjKey'] || this.getNewFirebaseKey();
      this.getItemObj();
      this.loading = false;
    });
  }

  ngAfterViewInit() {}

  getNewFirebaseKey() {
    return firebase.database().ref().push().key;
  }

  getItemObj() {
    if (!this.globalService.dbSnapshot.itemObjs[this.itemObjKey]) {
      this.globalService.dbSnapshot.itemObjs[this.itemObjKey] = {};
    }

    this.itemObj = this.globalService.dbSnapshot.itemObjs[this.itemObjKey];
    this.oldItemObj = JSON.parse(JSON.stringify(this.itemObj));
  }

  updateOldServingAttr(attr: string, value: any) {
    if (!attr) {
      console.error("Unexpected missing attr");
      return;
    }

    value = value || null;

    if (!this.servingKey) {
      console.error("Unexpected missing servingKey");
      return;
    }

    if (!this.oldItemObj) {
      console.error("Unexpected missing oldItemObj");
      return;
    }

    if (!this.oldItemObj.servings) {
      this.oldItemObj.servings = {};
    }

    if (!this.oldItemObj.servings[this.servingKey]) {
      this.oldItemObj.servings[this.servingKey] = {};
    }

    this.oldItemObj.servings[this.servingKey][attr] = value;
  }

  debounceUpdateServing() {
    clearTimeout(this.suggestedServingsTimeout);
    this.loadingSuggestedServings = true;

    this.suggestedServingsTimeout = setTimeout(() => {
      this.updateServing();
    }, 500);
  }

  setServingKey(servingKey: string) {
    this.servingKey = servingKey;

    if (!this.oldItemObj.servings[this.servingKey]) {
      console.error("unexpected missing oldItemObj with serverKey");
    } else {
      this.servingText = this.oldItemObj.servings[servingKey].name;
    }
  }

  updateServing() {
    console.log("updateServing");

    this.loadingSuggestedServings = false;
    this.cleanedServingText = this.servingText.replace(/[^\w]/g,'').trim().toLowerCase();

    for (var servingKey of Object.keys(this.oldItemObj.servings || {})) {
      // TODO: change to the alg that shows suggestions (then if there's one, select that one)
      if (this.oldItemObj.servings[servingKey].slugName && this.oldItemObj.servings[servingKey].slugName === this.cleanedServingText) {
        if (this.oldItemObj.servings[servingKey]) {
          this.setServingKey(this.oldItemObj.servings[servingKey]);
          return;
        }
      }
    }

    this.servingKey = null;
  }

  createNewServing() {
    var serverKey = this.getNewFirebaseKey();

    this.oldItemObj.servings = this.oldItemObj.servings || {};

    this.oldItemObj.servings[serverKey] = {};
    this.oldItemObj.servings[serverKey].key = serverKey;
    this.oldItemObj.servings[serverKey].name = this.servingText;

    this.setServingKey(serverKey);
  }

  getArrayOfOldServings() {
    var servings = [];

    for (var key of Object.keys(this.oldItemObj.servings || {})) {
      servings.push(this.oldItemObj.servings[key]);
    }

    servings.sort((a, b) => {
      var aName = a.name || "";
      var bName = b.name || "";
      return aName.localeCompare(bName);
    });

    return servings;
  }

  currentOldServingHasRequiredAttrs() {
    if (!this.servingKey || !this.oldItemObj.servings[this.servingKey]) {
      return false;
    }
    if (!this.oldItemObj.servings[this.servingKey].totalCalories && this.oldItemObj.servings[this.servingKey].totalCalories !== 0) {
      return false;
    }
    if (!this.oldItemObj.servings[this.servingKey].totalFats && this.oldItemObj.servings[this.servingKey].totalFats !== 0) {
      return false;
    }
    if (!this.oldItemObj.servings[this.servingKey].totalProtein && this.oldItemObj.servings[this.servingKey].totalProtein !== 0) {
      return false;
    }
    if (!this.oldItemObj.servings[this.servingKey].totalCarbs && this.oldItemObj.servings[this.servingKey].totalCarbs !== 0) {
      return false;
    }

    return true;
  }

  cancel() {
    if (this.servingText) {
      this.servingText = null;
      this.servingKey = null;
      return;
    }

    this.router.navigateByUrl('/home');
  }

  update() {
    var updates = {};

    if (!this.itemObj.name) {
      this.globalService.toast("Please provide an item name", "red");
      return Promise.resolve(null);
    }

    updates['itemObjs/' + this.itemObj.key + '/name'] = this.itemObj.name;
    updates['itemObjs/' + this.itemObj.key + '/brand'] = this.itemObj.brand || null;

    if (this.servingKey && this.oldItemObj.servings[this.servingKey]) {
      updates['itemObjs/' + this.itemObj.key + '/servings/' + this.servingKey] = this.oldItemObj.servings[this.servingKey];
    }

    this.loading = true;
    return firebase.database().ref().update(updates).then(() => {
      this.loading = false;
      this.itemObj.servings[this.servingKey] = this.oldItemObj.servings[this.servingKey];
      this.servingKey = null;

      this.globalService.toast("Update successful", "green");
      return true;
    }).catch(error => {
      console.error(error);
      this.globalService.toast(error, "red");
      return false;
    });
  }
}
