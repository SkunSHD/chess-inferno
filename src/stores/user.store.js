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


UserStore.dispatchToken = register(action => {
	action = action.type;

	switch (action) {

		case 'USER-GET-SUCCESS':
			UserStore.user = action.user;
			UserStore.emit();
			break;
	}
});

export default new UserStore();