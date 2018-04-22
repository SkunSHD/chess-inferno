import { StoreBasic } from 'utils/App.utils';
import { register } from 'utils/dispatcher';
import { EventEmitter } from 'events';


class UserStore extends StoreBasic {

	_user = { name: 'Vasya' };

	get user() { return this._user; };

	set user(newUser) {
		this._user = newUser;
		this.emit();
	};
}

const userStore = new UserStore();


register(action => {
	switch (action.type) {
		case 'USER-LOGIN-SUCCESS':
			userStore.user = action.user;
			break;

		case 'USER-LOGOUT-SUCCESS':
			userStore.user = null;
			break;
	}
});

export default userStore;