import { Component, Input } from '@angular/core';

@Component({
  selector: 'keto-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  @Input() loading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {}
}
