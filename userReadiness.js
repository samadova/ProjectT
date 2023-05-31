import React from 'react';
import { useDispatch } from 'react-redux';
import { addUserReadiness, removeUserReadiness } from './readinessActions';
import { addUserReadiness, removeUserReadiness } from './readinessService';

const YourComponent = () => {
  const dispatch = useDispatch();

  const handleAddUserReadiness = () => {
    const userId = '123'; 
    const readiness = true; 

    
    addUserReadiness(userId, readiness)
      .then(() => {
        
        dispatch(addUserReadiness(userId, readiness)); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRemoveUserReadiness = () => {
    const userId = '123'; 

    removeUserReadiness(userId)
      .then(() => {
        dispatch(removeUserReadiness(userId)); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleAddUserReadiness}>Добавить готовность пользователя</button>
      <button onClick={handleRemoveUserReadiness}>Удалить готовность пользователя</button>
    </div>
  );
};

export default YourComponent;
