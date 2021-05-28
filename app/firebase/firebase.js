
import firebase from '@firebase/app';
import 'firebase/firestore';


const config = {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyA5jfafx3k7K2LSD9MkjG908gk_yKkzSvM",
    authDomain: "ramdan-52d47.firebaseapp.com",
    projectId: "ramdan-52d47",
    storageBucket: "ramdan-52d47.appspot.com",
    messagingSenderId: "55706259262",
    appId: "1:55706259262:web:d319041537260e775c666f",
    measurementId: "G-ZQRPRFZ45J"
  };

  firebase.initializeApp(config);

  export default firebase;