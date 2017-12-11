const todosReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
     return [ ...state, { id: action.id, title: action.title } ]
    default:
      return state
  }
}

export default todosReducer
