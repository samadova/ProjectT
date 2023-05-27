import React from 'react';
import Header from './Header';

const LoginPage = () => {
  return (
    <div>
      <Header />
      
      <form>
    
        <input type="text" placeholder="Имя пользователя" />
        <input type="password" placeholder="Пароль" />


        <button>Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
