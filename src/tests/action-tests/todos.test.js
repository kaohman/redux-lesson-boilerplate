import * as actions from '../../actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {

    const ideaObject = { id: 0, text: 'mr mike' }

    const expected = {
      type: 'ADD_TODO',
      idea: { id: 0, text: 'mr mike' }
    } 

    const expectation = actions.addTodo(ideaObject)

    expect(expectation).toEqual(expected)
  })
});
