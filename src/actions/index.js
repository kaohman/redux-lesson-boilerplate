// ADD_TODO

export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  text,
  id
})

// TOGGLE_TODO

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

// SET_FILTER

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})
