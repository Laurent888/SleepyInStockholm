import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// let APIKEY, PROJECTID;
// if (process.env.NODE_ENV !== "production") {
//   APIKEY = process.env.REACT_APP_APIKEY;
//   PROJECTID = process.env.REACT_APP_PROJECTID;
// } else {
//   APIKEY = process.env.APIKEY;
//   PROJECTID = process.env.PROJECTID;
// }

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_PROJECTID + ".firebaseapp.com",
  databaseURL: "https://" + process.env.REACT_APP_PROJECTID + ".firebaseio.com",
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_PROJECTID + ".appspot.com",
  messagingSenderId: "302960952347",
  appId: "1:302960952347:web:d020adc85760473f0724be"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider();

export const signinWithGoogle = () => {
  auth.signInWithPopup(provider).catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};
