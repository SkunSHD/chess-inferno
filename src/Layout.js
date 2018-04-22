import { Component } from 'inferno';
// Stores
import UserStore from 'stores/user.store'
// Utils
import ConnectToStores from 'utils/ConnectToStores'


const stores = [UserStore];

function getState() {
	return {
		user: UserStore.user
	}
}


class Layout extends ConnectToStores {

	constructor(props) {
		super(props);
		this.state = getState();
		this.connectToStores(stores, getState);
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