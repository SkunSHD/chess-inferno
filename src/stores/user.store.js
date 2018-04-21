import { register } from 'utils/dispatcher';
import { createStore } from 'utils/App.utils';


const UserStore = createStore({
	user: { vasya: "pervui" },
	getUser() { return this.user; }
});


UserStore.dispatchToken = register(action => {
	action = action.type;

	switch (action) {

		case 'USER-GET-SUCCESS':
			UserStore.user = action.user;
			UserStore.emitChange();
			break;
	}
});

export default UserStore;