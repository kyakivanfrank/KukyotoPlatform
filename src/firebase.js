import firebase from 'firebase/app'
import 'firebase/firesstore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDUieILGr4jmhq5cv4GfsRagpbf7_wQJjk",
    authDomain: "kukyotowebapp.firebaseapp.com",
    databaseURL: "https://kukyotowebapp.firebaseio.com",
    projectId: "kukyotowebapp",
    storageBucket: "kukyotowebapp.appspot.com",
    messagingSenderId: "1073570462115",
    appId: "1:1073570462115:web:7a44506a3833284f89c216",
    measurementId: "G-JL9SJGEMPJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;