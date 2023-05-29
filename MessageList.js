import React, { useState, useEffect } from 'react';
import { db } from './firebase';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const messageData = [];
        snapshot.forEach((doc) => {
          messageData.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messageData);
      });

    // Отписка от слушателя при размонтировании компонента
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.text}</p>
          <p>{message.timestamp.toDate().toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
