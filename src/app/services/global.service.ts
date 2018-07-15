import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as firebase from "firebase";

@Injectable()
export class GlobalService {

  initializing: boolean;

  constructor(public router: Router) {
    this.router = router;

    this.initializing = true;
    this.initialize().then(() => {
      setTimeout(() => {
        // this.initializing = false;
      }, 1000);
    });
  }

  initialize() {
    return Promise.resolve(null);
  }
}