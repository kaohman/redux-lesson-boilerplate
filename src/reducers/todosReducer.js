const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, action.idea ]
    default:
      return state;
  };
};

export default todosReducer;
