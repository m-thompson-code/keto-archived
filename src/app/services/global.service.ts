import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as firebase from "firebase";

declare var M: any;

@Injectable()
export class GlobalService {

  initializing: boolean;

  incID: number;

  dbSnapshot: any;

  constructor(public router: Router) {
    this.router = router;

    this.initializing = true;
    this.initialize().then(() => {
      this.initializing = false;
    });
  }

  initialize() {
    return firebase.database().ref().once('value').then(snapshot => {
      this.dbSnapshot = snapshot.val() || {itemObjs: {}};
    });
  }

  getIncID() {
    this.incID = (this.incID || 0) + 1;
    return this.incID;
  }

  toast(message, color) {
    var text;
    if (message && message.length) {
      text = message;
    } else if (message.message && message.message.length) {
      text = message.message;
    }

    if (text && text.length) {
      var timeout = 60 * text.length;
      if (timeout < 1000) {
        timeout = 1000;
      }

      // M.toast(text, timeout, color);
      M.toast({html: text, displayLength: timeout, classes: color + 'Toast'});
    }
  }
}