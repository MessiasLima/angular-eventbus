# ngx-eventbus
A simple and lightweight library to trigger events through the Angular apps

## Usage

### (Step 1) Inject the service
### (Step 2) Inject the service
Just add the dependency injection for ```EventBusService``` on your component or service
```typescript
constructor(private eventBus: EventBusService) { }
```
### (Step 3) Subscribe to events
Use the method `addEventListener()` passing an object with name and callback. This method will be executed when the event happens
```typescript
ngOnInit(){
	this.myEvent = this.eventBus.addEventListener({
		name: 'myEvent',
		callback: (payload: any) => {
			console.log(payload);
		}
	})
}
```

### (Step 4) Trigger the event
Call the `triggerEvent()` function passing the name of the event and whatever you want to send to subscribers. All subscribers will be notified and receive the data.
```typescript
this.eventBus.triggerEvent('myEvent', { message: 'It works!' })
```

### (Step 5) Removing the listeners
And finally remove the listener from the bus when is not required anymore.
```typescript
ngOnDestroy() {
	this.eventBus.removeEventListener(this.myEvent)
}
```

## License

