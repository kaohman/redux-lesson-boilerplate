import todos from './todos-reducer'

describe('todos reducer', () => {
  it('it should give me a default state', () => {
    expect(todos(undefined, {})).toEqual([])
  })
  it('should give me a populated array', () => {
    const todoItem = { type: 'ADD_TODO', id:1, text: 'why tho' }

    expect(todos(undefined,todoItem).length).toEqual(1)
  })

   // try to really test your default state
   // throw in like different types that shouldn't be there
   // check to see that your reducer is returning what it should return
   // have one where you have the array populated and check to see that it adds to it

})
