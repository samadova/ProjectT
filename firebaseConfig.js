import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTpkBA3K5g8AkbEU90PzswNK-2iFzrk_g",
    authDomain: "projectt-b269d.firebaseapp.com",
    projectId: "projectt-b269d",
    storageBucket: "projectt-b269d.appspot.com",
    messagingSenderId: "347218104687",
    appId: "1:347218104687:web:8e9be1f84fbf220c91d89a"
  };

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;
