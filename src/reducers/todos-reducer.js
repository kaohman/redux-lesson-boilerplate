const todos = (state=[], action) => {
  switch(action.type){
    case 'ADD_TODO':
      let newTodo = {id: action.id, text: action.text, complete: false}
      return [...state, newTodo]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id){
          return todo
        }
        return Object.assign({}, todo, {completed: !todo.completed})
      })
    default:
      return state
  }
}

export default todos