export default function connectToStores(target) {
  target.prototype.connectToStores = function(stores, getState) {

    const componentWillMountTarget = this.componentWillMount || function() {};
    this.componentWillMount = () => {
      stores.forEach(store => store.addChangeListener(handleStoresChanged));
      return componentWillMountTarget.call(this);
    };

    const componentWillUnmountTarget = this.componentWillUnmount || function() {};
    this.componentWillUnmount = () => {
      stores.forEach(store => store.removeChangeListener(handleStoresChanged));
      return componentWillUnmountTarget.call(this);
    };

    const handleStoresChanged = () => this.setState(getState());
  }
}
