export const addTodo = (id, text) => ({
  type: 'ADD_TODO',
  id,
  text,
});
 
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
}); 
