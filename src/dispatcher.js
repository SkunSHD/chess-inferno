import { Dispatcher } from 'flux';


const dispatcher = new Dispatcher();


export function register(callback) {
	return dispatcher.register(callback);
}


export function dispatch(action, other = {}) {

	if (process.env.NODE_ENV !== 'production') {
		if(other.error) {
			console.error(action);
		} else {
			console.info('[' + action.type + ']');
		}
	}

	dispatcher.dispatch({ ...action, ...other });
}