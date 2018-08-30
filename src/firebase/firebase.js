import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDDEbi1VLaBviRQfGVBjofkBRYCDtR2I7w",
    authDomain: "expensify-6d3bf.firebaseapp.com",
    databaseURL: "https://expensify-6d3bf.firebaseio.com",
    projectId: "expensify-6d3bf",
    storageBucket: "expensify-6d3bf.appspot.com",
    messagingSenderId: "540733256759"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };