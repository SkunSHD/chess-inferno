import { EventEmitter } from 'events';


export class StoreBasic extends EventEmitter {

	CHANGE_EVENT = 'change';

	emit() {
		super.emit(this.CHANGE_EVENT);
	}

	addChangeListener(callback) {
		super.on(this.CHANGE_EVENT, calwlback);
	}

	removeChangeListener(callback) {
		super.removeListener(this.CHANGE_EVENT, callback);
	}

}