export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = { text: action.text, id: action.id, completed: false };
      return [...state, newTodo];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (action.id === todo.id) {
          return { ...todo, completed: !todo.completed  };
        } else {
          return todo;
        }
      });
    default: 
      return state;
  }
}
