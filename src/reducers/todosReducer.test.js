// todosReducer tests

import todosReducer from './todosReducer'
import * as actions from '../actions'

describe('todosReducer', () => {
  it('should return the default state', () => {
    const expected = []
    expect(todosReducer(undefined, {})).toEqual(expected)
  })

  it('should add a todo to the state', () => {
    const text = 'Do it'
    const id = 0
    const todo = {
      text,
      id,
      completed: false,
    }
    const expected = [todo]
    expect(todosReducer(undefined, actions.addTodo(text, id))).toEqual(expected)
  })

  it('should toggle the completed property of a single todo', () => {
    const todo1 = {
      text: 'hi there',
      id: 0,
      completed: false,
    }
    const todo2 = {
      text: 'hello',
      id: 1,
      completed: false,
    }
    const initialState = [
      todo1, todo2
    ]
    const expected = [
      todo1, {...todo2, completed: true}
    ]
    expect(todosReducer(initialState, actions.toggleTodo(1))).toEqual(expected)
  })

  it('should remove an existing todo from the state', () => {
    const todo1 = {
      text: 'hi there',
      id: 0,
      completed: false,
    }
    const todo2 = {
      text: 'hello',
      id: 1,
      completed: false,
    }
    const initialState = [
      todo1, todo2
    ]
    const expected = [todo1]
    expect(todosReducer(initialState, actions.removeTodo(1))).toEqual(expected)
  })
})
