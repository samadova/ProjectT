import React, { useState } from 'react';
import { db } from './firebase';

const MessageForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  const sendMessage = (message) => {
    db.collection('messages')
      .add({
        text: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then((docRef) => {
        console.log('Сообщение успешно отправлено с ID:', docRef.id);
        // Дополнительная логика, которую вы хотите выполнить после отправки сообщения
      })
      .catch((error) => {
        console.error('Ошибка при отправке сообщения:', error);
      });
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleChange} />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default MessageForm;
