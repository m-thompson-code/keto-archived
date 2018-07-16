import { Component, Input, Output, EventEmitter } from '@angular/core';

import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'keto-input',
  styleUrls: [ './input.style.css' ],
  templateUrl: './input.template.html',
  providers: [ ]
})
export class InputComponent {
 	@Input() text: string;
 	@Input() label: string;

 	@Input() placeholder: string;
 	@Input() type: string;

 	@Output() valueChanged: EventEmitter<string> = new EventEmitter();

 	focused: boolean;

 	id: number;
 	
	constructor(public globalService: GlobalService) {
	}

	ngOnInit() {
		this.focused = false;
		this.id = this.globalService.getIncID();//"" + Date.now();
	}
}
