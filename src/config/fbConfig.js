import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var fbConfig = {
    apiKey: "AIzaSyAn9mLLfIl3hLuJX7SL2ja_JkO_9UYMHmQ",
    authDomain: "project-authentication-1995.firebaseapp.com",
    databaseURL: "https://project-authentication-1995.firebaseio.com",
    projectId: "project-authentication-1995",
    storageBucket: "project-authentication-1995.appspot.com",
    messagingSenderId: "617077217882",
    appId: "1:617077217882:web:13eeed51683ef069b7d663",
    measurementId: "G-517D3SG6D9"
  };
  // Initialize Firebase
  firebase.initializeApp(fbConfig);
  firebase.firestore()
  export default firebase;