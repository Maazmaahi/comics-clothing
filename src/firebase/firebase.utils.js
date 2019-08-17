import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAa89v5fPCedOlHWvhs1q3R-24ZfH7QP1g",
    authDomain: "comics-db-26cfa.firebaseapp.com",
    databaseURL: "https://comics-db-26cfa.firebaseio.com",
    projectId: "comics-db-26cfa",
    storageBucket: "comics-db-26cfa.appspot.com",
    messagingSenderId: "232435055736",
    appId: "1:232435055736:web:c589d58b3df97652"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;