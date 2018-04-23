import { dispatch } from 'dispatcher'
import db from 'db';


const UserActions = {
	onAuthStateChanged: function (user) {
		dispatch({
			type: 'USER-ON-AUTH-STATE-CHANGE-SUCCESS',
			user
		})
	},

	signIn: async ({ login, password }) => {
	    const _user = await db.signIn({ login, password });
	    const formattedUser = { name: _user.displayName };

	  dispatch({
          type: 'USER-LOGIN-SUCCESS',
          user: formattedUser
       });
  },

   signOut: async function () {
	   await db.signOut();

	   dispatch({
           type: 'USER-LOGOUT-SUCCESS'
       })
   },

};

export default UserActions;
