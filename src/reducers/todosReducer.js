export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.id, text: action.text, isCompleted: false }];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}
