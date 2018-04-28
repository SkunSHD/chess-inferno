import { Component } from 'inferno';
import connectToStores from 'utils/connectToStores.mixin';
// Stores
import userStore from 'stores/user.store';
import userActions from "actions/user.actions"


function getState() {
	return {
		user: userStore.user
	}
}


@connectToStores
class Home extends Component {

	constructor() {
		super();
		this.state = getState();
		this.connectToStores([userStore], getState);
	}


	get renderSignOut() {
		return <button className="pure-button pure-button-primary" onClick={ userActions.signOut } >SignOut</button>
	}


	render() {
		return (
			<div>
				<h2 className="content-subhead">Now Let's Speak Some Latin</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

				<div className="pure-g">
					<div className="pure-u-1-4">
						<img className="pure-img-responsive" src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg" alt="Peyto Lake" />
					</div>
					<div className="pure-u-1-4">
						<img className="pure-img-responsive" src="http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg" alt="Train" />
					</div>
					<div className="pure-u-1-4">
						<img className="pure-img-responsive" src="http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg" alt="T-Shirt Store" />
					</div>
					<div className="pure-u-1-4">
						<img className="pure-img-responsive" src="http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg" alt="Mountain" />
					</div>
				</div>

				<span>User is: { this.state.user && this.state.user.name } </span>
				{ this.state.user && this.renderSignOut }

			</div>
		);
	}
}

export default Home;