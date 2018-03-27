// Actions tests
import * as actions from './index'

describe('Actions', () => {
  it('creates a type of ADD_TODO', () => {
    const text = 'some text'
    const id = 0
    const expected = {
      type: 'ADD_TODO',
      text,
      id,
    }
    expect(actions.addTodo(text, id)).toEqual(expected)
  })

  it('create a type of TOGGLE_TODO', () => {
    const id = 0
    const expected = {
      type: 'TOGGLE_TODO',
      id
    }
    expect(actions.toggleTodo(id)).toEqual(expected)
  })

  it('creates a type of SET_FILTER', () => {
    const filter = 'SHOW_NONE'
    const expected = {
      type: 'SET_FILTER',
      filter
    }
    expect(actions.setFilter(filter)).toEqual(expected)
  })

  it('creates a type of REMOVE_TODO', () => {
    const id = 0
    const expected = {
      type: 'REMOVE_TODO',
      id
    }
    expect(actions.removeTodo(id)).toEqual(expected)
  })
})
