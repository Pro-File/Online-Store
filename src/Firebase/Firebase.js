import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBA3zkp2324TSh6C9VfuRLT-vEEYEb96kk",
    authDomain: "buyfy-store.firebaseapp.com",
    projectId: "buyfy-store",
    storageBucket: "buyfy-store.appspot.com",
    messagingSenderId: "1087750720876",
    appId: "1:1087750720876:web:cd6931fdac6ac3d7d47749"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export var auth = firebase.auth();
  export var firestore = firebase.firestore();
  export var googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
  export var serverTimestamp = () => {
    return firebase.firestore.FieldValue.serverTimestamp();
  };
  export var storage = firebase.storage().ref();

  export default firebase;
