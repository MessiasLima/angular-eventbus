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

MIT License

Copyright (c) 2019 Messias Lima

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


