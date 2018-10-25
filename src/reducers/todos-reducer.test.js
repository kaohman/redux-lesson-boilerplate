import todosReducer from './todos-reducer.js'
import * as Actions from '../actions'

describe('todosReducer', () => {
  let originalTodo
  beforeEach(() => {
    originalTodo = {
      id: 2,
      text: 'have a fire drill',
      completed: true
    }
  })

  it('should return the default state', () => {
    // setup
    const expected = []

    // execution
    const result = todosReducer(undefined, {})

    // expectation
    expect(result).toEqual(expected)
  })

  it('should return a new state with a todo', () => {
    // setup
    const mockTodo = {
      id: 23, 
      text: 'clean house',
      completed: false
    }
    const mockAction = Actions.addTodo('clean house', 23)
    const expected = [originalTodo, mockTodo]

    // execution
    const result = todosReducer([originalTodo], mockAction)

    // expectation
    expect(result).toEqual(expected)
  })

  it('should toggle a todo', () => {
    // setup
    const mockTodo = {
      id: 1,
      text: 'feed the dog',
      completed: true
    }
    const mockState = [originalTodo, mockTodo]
    const mockAction = Actions.toggleTodo(1)
    const expected = [originalTodo, {...mockTodo, completed: false}]

    // execution
    const result = todosReducer(mockState, mockAction)

    // expectation
    expect(result).toEqual(expected)
  })
  
})
