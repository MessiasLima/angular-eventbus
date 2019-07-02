import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventBusService } from 'projects/ngx-eventbus/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

	title = 'angular-eventbus';
	myEvent: any

	constructor(private eventBus: EventBusService) { }

	ngOnInit() {
		this.myEvent = this.eventBus.addEventListener({
			name: 'myEvent',
			callback: (payload: any) => {
				console.log(payload);
			}
		})
	}

	trigger() {
		this.eventBus.triggerEvent('myEvent', { message: 'It works!' })
	}

	ngOnDestroy() {
		this.eventBus.removeEventListener(this.myEvent)
	}
}
