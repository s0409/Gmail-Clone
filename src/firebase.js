import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_C2niL6dWkMZTv6K99DOGXss5n2YulUI",
    authDomain: "clone-48b39.firebaseapp.com",
    projectId: "clone-48b39",
    storageBucket: "clone-48b39.appspot.com",
    messagingSenderId: "455227906855",
    appId: "1:455227906855:web:6330027911df5745342702"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};
