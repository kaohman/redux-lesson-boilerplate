import todosReducer from '../todosReducer';
import * as actions from '../../actions';

describe('todosReducer', () => {
  it('should return the default state', () => {
    const expected = []
    expect(todosReducer(undefined, {})).toEqual(expected)
  })

  it('should return a new state, with a todo', () => {
    const todo = { text: 'See the opera', id: 0 }
    const expected = [todo]
    expect(todosReducer(undefined, actions.addTodo(todo))).toEqual(expected)
  })

  it('should return a new state, with a todo removed', () => {
    const currentState = [{ text: 'See the opera', id: 0}]
    const expected = []
    expect(todosReducer(currentState, actions.removeTodo(0))).toEqual(expected)
  })
})
