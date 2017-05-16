import * as actions from '../../actions'

describe('actions test', () => {
  it('should create an action to add a todo', () => {
    const text = 'Go eat tacoz. Cuz tuesday'
    const id = 1

    const expectedAction = {
      type: 'ADD_TODO',
      text: 'Go eat tacoz. Cuz tuesday',
      id: 1
    }

    expect(actions.addTodo(text,id)).toEqual(expectedAction)
  });

  it('should toggle a todo', () => {
    const id = 1

    const expectedAction = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  });

  it('should set a filter for a todo', () => {

    const filter = 'SHOW_ALL'

    const expectedAction = {
      type:'SET_FILTER',
      filter: 'SHOW_ALL'
    }

    expect(actions.setFilter(filter)).toEqual(expectedAction)
  })
})
