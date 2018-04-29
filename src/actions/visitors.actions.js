import { dispatch } from 'dispatcher'
import db from 'db';


const visitorsActions = {

	fetchVisitors: async ({ login, password }) => {
	    const visitors = await db.fetchVisitors({ login, password });

	  dispatch({
				type: 'VISITORS-FETCH-SUCCESS',
				visitors
		 });
  },


};

export default visitorsActions;
