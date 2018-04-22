import { StoreBasic, createStore } from 'utils/App.utils';
import { register } from 'utils/dispatcher';


const UserStore = createStore({
	_user: null,

	get user() { return this._user; },

	set user(newUser) {
		this._user = newUser;
		this.emitChange();
	}
});


register(action => {
	switch (action.type) {
		case 'USER-LOGIN-SUCCESS':
			UserStore.user = action.user;
			break;

		case 'USER-LOGOUT-SUCCESS':
			UserStore.user = null;
			break;
	}
});


export default UserStore;