import { createStore } from 'utils/App.utils';
import { register } from 'dispatcher';


const visitorsStore = createStore({
  _visitors: null,

  get visitors() { return this._visitors; },

  set visitors(newVisitors) {
    this._visitors = newVisitors;
    this.emitChange();
  }
});


register(action => {
  switch (action.type) {
    case 'VISITORS-FETCH-SUCCESS':
      visitorsStore.visitors = action.visitors;
      break;
  }
});


export default visitorsStore;