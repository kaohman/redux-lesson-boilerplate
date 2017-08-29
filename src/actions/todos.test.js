import * as action from '../actions'

describe('ADD_TODO action test', () => {
  it('add todo should add a todo lol', () => {
    const text = 'is it lit?'
    const id   = 1

    const expectedAction = {
      type: 'ADD_TODO',
      text: 'is it lit?',
      id: 1
    }

    expect(action.addTodo(id,text)).toEqual(expectedAction)
  })

  // maybe check to see if it can set and crazy charactesr
  // pulse checks
})
