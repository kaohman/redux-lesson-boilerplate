import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const TodoList = ({ todos, onTodoClick }) => {
  if (todos.length === 0) {
    return <h3>You have nothing to do!</h3>
  }

  const renderedTodos = todos.map(todo => (
    <Todo
      key={todo.id}
      {...todo}
      handleClick={() => onTodoClick(todo.id)}
    />
  )) 

  return(
    <ul>
      { renderedTodos }
    </ul>
  )
}

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
