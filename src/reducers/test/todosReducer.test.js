import todosReducer from '../todosReducer';
import * as actions from '../../actions';

describe('todosReducer', () => {
  it('should return the default state', () => {
    const expected = []
    expect(todosReducer(undefined, {})).toEqual(expected)
  })

  it('should return the state with a new todo', () => {
    const text = 'Learn testing'
    const id = 0
    const expected = [{text, id, completed: false}]
    expect(todosReducer(undefined, actions.addTodo(text, id))).toEqual(expected)
  })

  it('should return the state with a completed set to true', () => {
    const text = 'Learning more'
    const id = 0
    const currentState = [{text, id, completed: false}]
    const expected = [{text, id, completed: true}]
    expect(todosReducer(currentState, actions.toggleTodo(id))).toEqual(expected)
  })
})
