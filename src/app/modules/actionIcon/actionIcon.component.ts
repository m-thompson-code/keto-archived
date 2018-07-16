import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'keto-action-icon',
  styleUrls: [ './actionIcon.style.css' ],
  templateUrl: './actionIcon.template.html',
  providers: [ ]
})
export class ActionIconComponent {
 	@Input() icon: string;
 	
	constructor() {
	}

	ngOnInit() {
	}
}
