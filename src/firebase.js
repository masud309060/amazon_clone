// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBcbtYGxL-a_HPZvdylJYSzypYFGb8khNM",
  authDomain: "clone-a6531.firebaseapp.com",
  projectId: "clone-a6531",
  storageBucket: "clone-a6531.appspot.com",
  messagingSenderId: "27945694171",
  appId: "1:27945694171:web:86ab7589e04ce9df226dfe",
  measurementId: "G-95YPD749XX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
