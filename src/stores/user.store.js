import { createStore } from 'utils/App.utils';
import { register } from 'dispatcher';


const userStore = createStore({
	_user: null,

	get user() { return this._user; },

	set user(newUser) {
		this._user = newUser;
		this.emitChange();
	}
});


register(action => {
	switch (action.type) {
		case 'USER-ON-AUTH-STATE-CHANGE-SUCCESS':
		case 'USER-LOGIN-SUCCESS':
			userStore.user = action.user;
			break;

		case 'USER-LOGOUT-SUCCESS':
			userStore.user = null;
			break;
	}
});


export default userStore;