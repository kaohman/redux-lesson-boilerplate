const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  text,
  id
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

// SHOW_ALL
// SHOW_COMPLETED
// SHOW_ACTIVE
const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})


export {
  addTodo,
  toggleTodo,
  setFilter,
}
