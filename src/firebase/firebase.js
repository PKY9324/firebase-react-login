import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBhaA2KrTCRaNU9kQcbYTHqBNFX_g_HYI8",
    authDomain: "fir-react-start.firebaseapp.com",
    databaseURL: "https://fir-react-start.firebaseio.com",
    projectId: "fir-react-start",
    storageBucket: "fir-react-start.appspot.com",
    messagingSenderId: "95888165541"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};