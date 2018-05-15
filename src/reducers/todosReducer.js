const initalState = []

const todosReducer = (state = initalState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, 
        { text: action.text,
          id: action.id,
          completed: false
        }]
      break
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id === action.id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo
        }
      })
      break
    default:
      return state
  }
}

export default todosReducer
