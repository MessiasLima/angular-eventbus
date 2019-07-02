import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventBusService } from 'projects/ngx-eventbus/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	title = 'angular-eventbus';
	myEvent: any

	constructor(private eventBus: EventBusService) { }

	ngOnInit() {
		this.eventBus.addEventListener({
			name: 'myEvent',
			callback: this.eventCallback
		})

		this.myEvent = this.eventBus.addEventListener({
			name: 'myEvent',
			callback: this.eventCallback2
		})

		this.eventBus.addEventListener({
			name: 'myEvent',
			callback: this.eventCallback3
		})
	}

	private eventCallback(payload: any) {
		console.log("metodo 1", payload);
	}

	private eventCallback2(payload: any) {
		console.log("metodo 2", payload);
	}

	private eventCallback3(payload: any) {
		console.log("metodo 3", payload);
	}

	trigger() {
		this.eventBus.triggerEvent('myEvent', Math.random())
	}

	remove() {
		this.eventBus.removeEventListener(this.myEvent)
	}
}
