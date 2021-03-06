import { Injectable } from '@angular/core';
import { Event } from './event'

@Injectable({
	providedIn: 'root'
})
export class EventBusService {

	private eventsHolder = {}

	addEventListener(event: Event): Event {
		let events = this.eventsHolder[event.name]
		if (!events) {
			events = []
		}
		events.push(event)
		this.eventsHolder[event.name] = events
		return event
	}

	removeEventListener(event: Event): void {
		let events: Event[] = this.eventsHolder[event.name]
		if (!events) {
			events = []
		}
		const index = events.indexOf(event)
		if(index == -1) return
		events.splice(index, 1)
	}

	triggerEvent<T>(eventName: string, payload: T = null) {
		let events: Event[] = this.eventsHolder[eventName]
		if (events) {
			events.forEach(e => {
				this.execute<T>(e.callback, payload)
			})
		}
	}

	private execute<T>(action: Function, payload: T) {
		setTimeout(() => {
			action(payload)
		}, 0)
	}
}
