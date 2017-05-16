import reducer from '../../reducers/todos-reducer'

describe('todo reducer tests', () => {
  it('should return an empty array for me', () => {
    expect(reducer(undefined,{})).toEqual([])
  })

  it('should add a new todo', () => {
    const action = {
      id:1,
      text: 'tacoz cuz tuesday',
      type: 'ADD_TODO'
    }

    expect(reducer(undefined, action)).toHaveLength(1)
    expect(reducer([ action ], action)).toHaveLength(2)
  })
})
