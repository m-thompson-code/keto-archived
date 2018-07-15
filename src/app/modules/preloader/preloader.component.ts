import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'keto-preloader',
  styleUrls: [ './preloader.style.css' ],
  templateUrl: './preloader.template.html',
  providers: [ ]
})
export class PreloaderComponent {
	@Input() delay: any;

	active: boolean;
	constructor() {
	}

	ngOnInit() {
		setTimeout(() => {
			this.active = true;
		}, this.delay || 1);
	}
}
