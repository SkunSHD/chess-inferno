import { Component } from 'inferno';
import db from 'db';
// Store
import connectToStores from 'utils/connectToStores.mixin';
import visitorsStore from 'stores/visitors.store';


function getState() {
	return {
		visitors: visitorsStore.visitors
	}
}

@connectToStores
class Visitors extends Component {

	constructor() {
		super();
		this.state = getState();
		this.connectToStores([visitorsStore], getState);
	}

	componentDidMount() {
		this.fetchVisitors();
	}

	async fetchVisitors() {
		let visitorsSnapshot = await db.fetchVisitors();
		visitorsSnapshot = visitorsSnapshot.docs.map(visitor => visitor.data());
		this.setState(()=> ({visitors: visitorsSnapshot}))
	}

	render() {
		console.log('this.state.visitors', )
		return(
			<div>
				<h2>Visitors list</h2>
				{ this.state.visitors &&
				this.state.visitors.map(visitor => <p key={ visitor.email }>{ visitor.name }</p>)}
			</div>
		)
	}
}



export default Visitors;