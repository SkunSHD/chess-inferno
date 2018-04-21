import { Component } from 'inferno';
import connectToStores from 'utils/connectToStores.mixin';
// Stores
import UserStore from 'stores/user.store'
import db from 'db';


const stores = [UserStore];

function getState(props) {
	return {
		user: UserStore.getUser(),
		// ...props ???
	}
}


// @connectToStores
class Layout extends Component {

	constructor(props) {
		super(props);
		this.state = getState(props);

	}

	onComponentWillMount() {
		stores.forEach(store =>
			store.addChangeListener(this.handleStoresChanged)
		);
	}


	onComponentWillUnmount() {
		stores.forEach(store =>
			store.removeChangeListener(this.handleStoresChanged)
		);
	}


	handleStoresChanged = ()=> {
		console.log('%%---> handleStoresChanged')

		this.setState(getState(this.props));
	};


	render() {
		return (
			<div>
				<h1>Layout!</h1>
				{/*<span>User is at: { this.state.user && this.state.user.name }</span>*/}
			</div>
		);
	}
}

export default Layout;