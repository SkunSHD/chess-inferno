import { Component } from 'inferno';
// import {Dispatcher} from 'flux';
// import { EventEmitter } from 'events';

import * as firebase from 'firebase';
// console.log('%%---> firebase', firebase.firestore)

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}
	render() {
		return (
			<div>
				<h1>Layout!</h1>
				<span>Counter is at: { this.state.counter }</span>
			</div>
		);
	}
}

export default Layout;