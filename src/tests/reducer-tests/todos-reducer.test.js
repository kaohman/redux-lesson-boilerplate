import todos from '../../reducers/todos' // shouts to you
import * as actions from '../../actions'

describe('todos reducer tests', () => {
  it('should return our initial state', () => {
    const expectation = []

    expect(todos(undefined, {})).toEqual(expectation);
  });

  it('should allow me to add an idea to the state', () => {
    const action = { type: 'ADD_TODO', idea: {id: 0, text: 'mr mike' } };
    const expectation = [ action.idea ];

    expect(todos(undefined, action)).toEqual(expectation);
  });

  it('should allow me to add state to a populated state array', () => {

    const initialState = [ {id:0, text: 'mr mike'} ]
    const todo         = {id:1, text: 'sir will'}
    const action       = actions.addTodo(todo)
    const expectation  = [ initialState[0], action.idea ]

    expect(todos(initialState, action)).toEqual(expectation)
  })
})
