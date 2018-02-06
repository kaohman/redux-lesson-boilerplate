import * as actions from '../index';

describe('all actions', () => {
  it('should return a type of ADD_TODO, with a todo', () => {
    const text = 'Some todo'
    const id = 0
    const expected = {
      type: 'ADD_TODO',
      text,
      id
    }
    expect(actions.addTodo(text, id)).toEqual(expected)
  })

  it('should return a type of TOGGLE_TODO, with an id', () => {
    const id = 0
    const expected = {
      type: 'TOGGLE_TODO',
      id
    }
    expect(actions.toggleTodo(id)).toEqual(expected)
  })
});
