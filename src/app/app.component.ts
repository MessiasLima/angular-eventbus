import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'projects/ngx-eventbus/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	title = 'angular-eventbus';
	private eventName = 'myEvent'

	constructor(private eventBus: EventBusService) {
	}

	ngOnInit() {
		this.eventBus.addEventListener({
			name: this.eventName,
			callback: this.eventCallback
		})

		setTimeout(() => {
			this.eventBus.triggerEvent(this.eventName)
		}, 5000)
	}

	private eventCallback(payload: any) {
		console.log(payload);
	}
}
