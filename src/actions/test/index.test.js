import * as actions from '../index';

describe('all actions', () => {
  it('has a type of ADD_TODO', () => {
    const todo = { text: 'Ride a kangaroo', id: 0 }
    const expected = {
      type: 'ADD_TODO',
      todo
    }
    expect(actions.addTodo(todo)).toEqual(expected)
  })

  // REMOVE_TODO
  it('has a type of REMOVE_TODO', () => {
    const id = 0
    const expected = {
      type: 'REMOVE_TODO',
      id
    }
    expect(actions.removeTodo(id)).toEqual(expected)
  })
});
