import { Dispatcher } from 'flux';

const flux = new Dispatcher();


export function register(callback) {
	return flux.register(callback);
}


export function dispatch(type, action = {}) {

	// In production, thanks to DefinePlugin in webpack.config.production.js,
	// this comparison will turn `false`, and UglifyJS will cut logging out
	// as part of dead code elimination.
	if (process.env.NODE_ENV !== 'production') {
		if(action.error) {
			console.error(type);
		} else {
			console.info('[' + type.eventName + ']');
		}
	}

	flux.dispatch({type, ...action});
}