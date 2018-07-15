import { Component, Input } from '@angular/core';

import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'keto-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  @Input() loading: boolean;

  constructor(public globalService: GlobalService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {}
}
