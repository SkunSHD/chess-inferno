import { dispatch } from 'dispatcher'

const UserActions = {
  loginUser(user) {
	  dispatch({
      type: 'USER-LOGIN-SUCCESS',
      user
    })
  },

  logoutUser() {
    dispatch({
      type: 'USER-LOGOUT-SUCCESS'
    })
  },
};

export default UserActions;
