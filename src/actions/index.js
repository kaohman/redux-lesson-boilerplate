export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  text,
  id
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
