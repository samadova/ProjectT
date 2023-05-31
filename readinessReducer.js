const initialState = {
    readinessByUserId: {},
  };
  
  const readinessReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER_READINESS':
        return {
          ...state,
          readinessByUserId: {
            ...state.readinessByUserId,
            [action.payload.userId]: action.payload.readiness,
          },
        };
      case 'REMOVE_USER_READINESS':
        const { [action.payload.userId]: _, ...updatedReadiness } = state.readinessByUserId;
        return {
          ...state,
          readinessByUserId: updatedReadiness,
        };
      default:
        return state;
    }
  };
  
  export default readinessReducer;
  