import { Component } from 'inferno';
import connectToStores from 'utils/connectToStores.mixin';
// Stores
import UserStore from 'stores/user.store';



function getState() {
	return {
		user: UserStore.user
	}
}


@connectToStores
class Layout extends Component {

	constructor() {
		super();
		this.state = getState();
		this.connectToStores([UserStore], getState);
	}


	render() {
		return (
			<div>
				<h1>Layout!</h1>
				<span>User is: { this.state.user && this.state.user.name }</span>
			</div>
		);
	}
}

export default Layout;