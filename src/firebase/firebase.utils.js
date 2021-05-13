import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyAF3U8kgA8lO6qVx65DNQxJj4ploJiPRnU",
  authDomain: "fir-auth-22a60.firebaseapp.com",
  projectId: "fir-auth-22a60",
  storageBucket: "fir-auth-22a60.appspot.com",
  messagingSenderId: "127077165160",
  appId: "1:127077165160:web:d7dbb196dd7749ad61f3dd",
  measurementId: "G-2WYJTBYB4G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
