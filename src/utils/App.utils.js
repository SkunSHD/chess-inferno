import { EventEmitter } from 'events';


export function createStore(store) {
	const CHANGE_EVENT = 'change';
	const emitter = new EventEmitter();

	return _extend(Object.create({
		emitChange() {
			emitter.emit(CHANGE_EVENT);
		},

		addChangeListener(callback) {
			emitter.on(CHANGE_EVENT, callback);
		},

		removeChangeListener(callback) {
			emitter.removeListener(CHANGE_EVENT, callback);
		}
	}), store);
}


// Assign objects with setters and getters
// But notice there is good reason why Object.assign does not, it could have weird effects
// if getters and setters are closures.
function _extend(target, ...sources) {
	for (let source of sources)
		for (let key of Object.keys(source))
			Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	return target;
}