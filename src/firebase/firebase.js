import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let key1, projectID;
if (process.env.NODE_ENV !== "production") {
  key1 = process.env.REACT_APP_apiKEY;
  projectID = process.env.REACT_APP_projectID;
} else {
  key1 = process.env.apiKEY;
  projectID = process.env.projectID;
}

const config = {
  apiKey: key1,
  authDomain: projectID + ".firebaseapp.com",
  databaseURL: "https://" + projectID + ".firebaseio.com",
  projectId: projectID,
  storageBucket: projectID + ".appspot.com",
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
