import React, { useState } from 'react';
import { db } from './firebase'; 

const SendMessageForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendMessage(message);
      setMessage('');
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
    }
  };

  const sendMessage = async (message) => {
    try {
      const docRef = await db.collection('messages').add({
        text: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log('Сообщение успешно отправлено с ID:', docRef.id);
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default SendMessageForm;
