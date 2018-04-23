import { EventEmitter } from 'events';


export class StoreBasic extends EventEmitter {

	CHANGE_EVENT = 'change';

	emit() {
		super.emit(this.CHANGE_EVENT);
	}

	addChangeListener(callback) {
		super.on(this.CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		super.removeListener(this.CHANGE_EVENT, callback);
	}
}

function _extend(target, ...sources) {
	for (let source of sources)
		for (let key of Object.keys(source))
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	return target;
}


export function createStore(target) {
	const CHANGE_EVENT = 'change';
	const emitter = new EventEmitter();

	return _extend(target, {
		emitChange() {
			emitter.emit(CHANGE_EVENT);
		},

		addChangeListener(callback) {
			emitter.on(CHANGE_EVENT, callback);
		},

		removeChangeListener(callback) {
			emitter.removeListener(CHANGE_EVENT, callback);
		}
	});
}