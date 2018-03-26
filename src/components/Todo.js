import React from 'react'

const Todo = ({ handleClick, completed, text }) => {
  return (
    <li
      onClick={ handleClick }
      style={
      { textDecoration: completed ? 'line-through' : 'none' }
    }>
      { text }
    </li>
  )
}

export default Todo
