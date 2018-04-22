import { Component } from 'inferno';
import connectToStores from 'utils/connectToStores.mixin';
// Stores
import UserStore from 'stores/user.store'
import db from 'db';

const stores = [UserStore];

function getState() {
	return {
		user: UserStore.user
	}
}


// @connectToStores
class Layout extends Component {

	constructor(props) {
		super(props);
		this.state = getState();
	}

	componentWillMount() {
		stores.forEach(store =>
			store.on('change', this.handleStoresChanged)
		);
	}


	componentWillUnmount() {
		stores.forEach(store =>
			store.removeListener('change', this.handleStoresChanged)
		);
	}


	handleStoresChanged = ()=> {
		this.setState(getState());
	};


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