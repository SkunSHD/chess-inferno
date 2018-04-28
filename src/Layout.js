import { Component } from 'inferno';
import connectToStores from 'utils/connectToStores.mixin';
// Stores
import userStore from 'stores/user.store';
import userActions from "./actions/user.actions"


function getState() {
	return {
		user: userStore.user
	}
}


@connectToStores
class Layout extends Component {

	constructor() {
		super();
		this.state = getState();
		this.connectToStores([userStore], getState);
	}


	get renderSignOut() {
		return <button onClick={ userActions.signOut }>SignOut</button>
	}


	render() {
		return (
			<div>
				<h1>Layout!</h1>
				<button className="pure-button pure-button-primary">A Primary Button</button>
				<span>User is: { this.state.user && this.state.user.name }</span>
				{ this.state.user && this.renderSignOut }
			</div>
		);
	}
}

export default Layout;