import { Component } from 'inferno';


class ConnectToStores extends Component {

  connectToStores(stores, getState) {

    const handleStoresChanged = () => {
      this.setState(getState());
    };

    const componentWillMountChild = this.componentWillMount || function() {};
    this.componentWillMount = () => {
      stores.forEach(store =>
        store.addChangeListener(handleStoresChanged)
      );
      return componentWillMountChild.call(this);
    };

    const componentWillUnmountChild = this.componentWillUnmount || function() {};
    this.componentWillUnmount = () => {
      stores.forEach(store =>
        store.removeChangeListener(handleStoresChanged)
      );
      return componentWillUnmountChild.call(this);
    };
  }
}

export default ConnectToStores;