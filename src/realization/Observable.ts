function create(subscriber) {
	const observable = {
		subscribe: function (observer) {
			subscriber(observer)
		}
	};
	return observable;
}

class Observer {
	constructor(destinationOrNext, error, complete) {
		switch (arguments.length) {
			case 0:
			case 1:
				if (!destinationOrNext) {

				}
				if (typeof destinationOrNext === 'object') {

				}
			default:
				break;
		}
	}

	safeObserver(observerOrNext, error, complete) {
		let next;

		if (typeof observerOrNext === 'function') {
			next = observerOrNext;
		} else if (observerOrNext) {

		}
	}
}


const observer = {
	next: function (value) {
		console.log(value)
	},
	error: function (error) {
		console.log(error)
	},
	complete: function () {
		console.log('complete')
	}
}

const observable = create(function (observer) {
	observer.next(1);
	observer.next(2);
	observer.next(3);
	observer.complete();
	observer.next(4);
})


observable.subscribe(observer)