export const addTodo = (id, text) => {
  return {
    type: 'ADD_TODO',
    id,
    text
  }
}
