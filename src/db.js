import * as firebase from 'firebase';

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
	firestore: firebase.firestore()
};


firebase.auth().onAuthStateChanged(function (_user) {
	if (_user) {
		// console.log('%%---> _user', _user)
		// user = _user;
		// app.run('#auth');
		// app.run('route', document.location.hash);
	} else {
		// user = null;
		// app.run('#auth');
	}
});

// connect fireBaseUi source here:
// https://github.com/SkunSHD/chessrun/blob/master/firebase-auth.tsx



export default db;
