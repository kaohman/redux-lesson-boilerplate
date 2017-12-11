export const addTodo = (title, id) => {
  return {
    type: 'ADD_TODO',
    title,
    id
  }
}
