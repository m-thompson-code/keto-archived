import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'keto-input',
  styleUrls: [ './input.style.css' ],
  templateUrl: './input.template.html',
  providers: [ ]
})
export class InputComponent {
 	@Input() text: string;
 	@Input() label: string;

 	@Output() valueChanged: EventEmitter<string> = new EventEmitter();

 	focused: boolean;

 	id: string;
 	
	constructor() {
	}

	ngOnInit() {
		this.id = "" + Date.now();
	}
}
