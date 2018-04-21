// export default function connectToStores(clazz) {
//
// 	clazz.prototype.connectToStores = (stores, getState) => {
// 		this.onComponentWillMount = ()=> {
// 			stores.forEach(store =>
// 				store.addChangeListener(this.handleStoresChanged)
// 			);
// 		};
//
// 		this.onComponentWillUnmount = ()=> {
// 			stores.forEach(store =>
// 				store.removeChangeListener(this.handleStoresChanged)
// 			);
// 		};
//
// 		this.handleStoresChanged = ()=> {
// 			console.log('%%---> handleStoresChanged')
//
// 			this.setState(getState(this.props));
// 		};
// 	}
// };
