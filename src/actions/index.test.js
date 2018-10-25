import * as Actions from './index'

describe('actions', () => {
  it('should have a type of ADD_TODO', () => {
    // setup
    const text = 'My todo'
    const id = 1
    const expected = {
      type: 'ADD_TODO',
      text: 'My todo',
      id: 1
    }

    // execution
    const result = Actions.addTodo(text, id)

    // expectation
    expect(result).toEqual(expected)
  })

  it('should have a type of TOGGLE_TODO', () => {
    // setup
    const id = 1
    const expected = {
      type: 'TOGGLE_TODO',
      id: 1
    }

    // execution
    const result = Actions.toggleTodo(id)

    // expectation
    expect(result).toEqual(expected)
  })

  it('should have a type of SET_FILTER', () => {
    // setup
    const filter = 'SHOW_COMPLETED'
    const expected = {
      type: 'SET_FILTER',
      filter,
    }

    // execution
    const result = Actions.setFilter(filter)

    // expectation
    expect(result).toEqual(expected)
  })
})
