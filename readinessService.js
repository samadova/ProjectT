import firestore from './firebaseConfig';

export const addUserReadiness = async (userId, readiness) => {
  try {
    await firestore.collection('users').doc(userId).update({
      userReadiness: readiness,
    });
    console.log('Поле userReadiness успешно добавлено в Firestore');

  } catch (error) {
    console.error('Ошибка при добавлении поля userReadiness в Firestore:', error);

  }
};

export const removeUserReadiness = async (userId) => {
  try {
    await firestore.collection('users').doc(userId).update({
      userReadiness: firestore.FieldValue.delete(),
    });
    console.log('Поле userReadiness успешно удалено из Firestore');
  } catch (error) {
    console.error('Ошибка при удалении поля userReadiness из Firestore:', error);
   
  }
};
