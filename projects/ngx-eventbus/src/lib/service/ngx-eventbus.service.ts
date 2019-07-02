import { Injectable } from '@angular/core';
import { Event } from './event'

@Injectable({
	providedIn: 'root'
})
export class NgxEventbusService {

	private eventsHolder = {}

	addEventListener(event: Event): void {
		let events = this.eventsHolder[event.name]
		if (!events) {
			events = []
		}
		events.push(event)
		this.eventsHolder[event.name] = events
	}
}
