import firebase from 'firebase/app';
import 'firebase/auth';
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

const auth = firebase.auth();

// Регистрация нового пользователя
const signUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

// Вход в систему
const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

// Выход из системы
const signOut = () => {
  return auth.signOut();
};

export { auth, signUp, signIn, signOut };

const db = firebase.firestore();

db.collection('users').add({
  name: 'John',
  age: 30,
})
  .then((docRef) => {
    console.log('Документ успешно добавлен с ID:', docRef.id);
  })
  .catch((error) => {
    console.error('Ошибка при добавлении документа:', error);
  });


db.collection('users').get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log('Данные документа:', doc.id, doc.data());
    });
  })
  .catch((error) => {
    console.error('Ошибка при получении данных:', error);
  });


const docRef = db.collection('users').doc('USER_ID');

docRef.update({
  age: 40,
})
  .then(() => {
    console.log('Документ успешно обновлен');
  })
  .catch((error) => {
    console.error('Ошибка при обновлении документа:', error);
  });


