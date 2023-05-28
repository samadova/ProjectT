import React from 'react';
import { signOut } from '../firebase'; 

const Auth = () => {
  const handleSignOut = () => {
    signOut()
      .then(() => {
        // Дополнительные действия после успешного выхода из системы
        console.log('Выход из системы выполнен');
      })
      .catch((error) => {
        // Обработка ошибок при выходе из системы
        console.log('Ошибка при выходе из системы:', error.message);
      });
  };

  return (
    <div>
      <button onClick={handleSignOut}>Выход</button> 
    </div>
  );
};

export default Auth;
