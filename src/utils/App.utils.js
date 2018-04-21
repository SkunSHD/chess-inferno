import { EventEmitter } from 'events';

/**
 * Create store helper
 *
 * @param target
 * @returns {*}
 */
export function createStore(target) {
	const CHANGE_EVENT = 'change';
	const emitter = new EventEmitter();
	emitter.setMaxListeners(0);

	const store = Object.assign({
		emitChange() {
			emitter.emit(CHANGE_EVENT);
		},

		addChangeListener(callback) {
			emitter.on(CHANGE_EVENT, callback);
		},

		removeChangeListener(callback) {
			emitter.removeListener(CHANGE_EVENT, callback);
		}
	}, target);

	// Auto-bind store methods for convenience
	for (let prop in store) {
		if (store.hasOwnProperty(prop) && typeof val === 'function') {
			store[prop] = store[prop].bind(store);
		}
	}

	return store;
}