import { Component } from 'inferno';


class ConnectToStores extends Component {

  connectToStores(stores, getState) {

    const handleStoresChanged = () => {
      this.setState(getState());
      // ???
      // this.setState({
      //   ...this.props,
      //   ...getState()
      // });
    };

    const componentWillMountChild = this.componentWillMount;
    this.componentWillMount = () => {
      stores.forEach(store =>
        store.addChangeListener(handleStoresChanged)
      );
      return componentWillMountChild.call(this);
    };

    const componentWillUnmountChild = this.componentWillUnmount;
    this.componentWillUnmount = () => {
      stores.forEach(store =>
        store.removeChangeListener(handleStoresChanged)
      );
      return componentWillUnmountChild.call(this);
    };
  }
}

export default ConnectToStores;