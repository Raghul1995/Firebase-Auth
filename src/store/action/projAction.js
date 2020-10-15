export const createProj = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      
        dispatch({ type: 'CREATE_PROJECT_ERROR', project })
      
    }
  };