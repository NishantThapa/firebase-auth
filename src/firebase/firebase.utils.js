import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyAIRa62G4JRdMq37Jby42Tk2W-lFQngoQU",
  authDomain: "crwn-db-256f4.firebaseapp.com",
  projectId: "crwn-db-256f4",
  storageBucket: "crwn-db-256f4.appspot.com",
  messagingSenderId: "876991040196",
  appId: "1:876991040196:web:63741481df6ff343501791",
  measurementId: "G-G1Q9QD6NFY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
