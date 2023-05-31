export const addUserReadiness = (userId, readiness) => {
    return {
      type: 'ADD_USER_READINESS',
      payload: {
        userId,
        readiness,
      },
    };
  };
  
  export const removeUserReadiness = (userId) => {
    return {
      type: 'REMOVE_USER_READINESS',
      payload: {
        userId,
      },
    };
  };
  