import * as firebase from 'firebase';
import userActions from 'actions/user.actions'

const config = {
	apiKey: "AIzaSyCsaEXo297Mo1Js08CUQ9DzWSYqJDQBdRo",
	authDomain: "cheessons.firebaseapp.com",
	databaseURL: "https://cheessons.firebaseio.com",
	projectId: "cheessons",
	storageBucket: "cheessons.appspot.com",
	messagingSenderId: "105788159539"
};

firebase.initializeApp(config);


const db = {
	that: this,
	auth: firebase.auth(),
	firestore: firebase.firestore(),
	signIn: function({ login, password }) {
		return this.auth.signInWithEmailAndPassword(login, password);
	},
	signOut: function() {
		return this.auth.signOut();
	}
};


firebase.auth().onAuthStateChanged(function (_user) {
	let formattedUser = null;

	if (_user) {
		formattedUser = { name: _user.displayName };
	}

	userActions.onAuthStateChanged(formattedUser);
});

// connect fireBaseUi source here:
// https://github.com/SkunSHD/chessrun/blob/master/firebase-auth.tsx


export default db;
