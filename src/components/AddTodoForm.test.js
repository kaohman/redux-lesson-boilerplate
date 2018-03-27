import { shallow } from 'enzyme'
import { 
  AddTodoForm,
  mapStateToProps,
  mapDispatchToProps
} from './AddTodoForm'

import * as actions from '../actions'

describe('AddTodoForm', () => {
  describe.skip('component', () => {
    let wrapper
    let mockHandleSubmit

    beforeEach(() => {
      mockHandleSubmit = jest.fn()
      wrapper = shallow(<AddTodoForm handleSubmit={mockHandleSubmit}/>)
    })

    it('should call handleSubmit on clickSubmit', () => {
      wrapper.clickSubmit({ preventDefault: jest.fn() })
      expect(mockHandleSubmit).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    let mapped
    let todo

    beforeEach(() => {
      todo = {
        text: 'hi',
        id: 0,
        completed: false
      }
      const mockState = {
        todos: [todo]
      }
      mapped = mapStateToProps(mockState)
    })

    it('correctly maps the todos to props', () => {
      const expected = [todo]
      expect(mapped.todos).toEqual(expected)
    })

  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct param on handleSubmit', () => {
      const mockDispatch = jest.fn()
      const text = 'hello'
      const id = 0
      const mapped = mapDispatchToProps(mockDispatch)
      const expected = actions.addTodo(text, id)
      mapped.handleSubmit(text, id)
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

    it('should call dispatch with the correct parms on handleRemove', () => {
      const mockDispatch = jest.fn()
      const id = 0
      const mapped = mapDispatchToProps(mockDispatch)
      const expected = actions.removeTodo(id)
      mapped.handleRemove(id)
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })

  })
})
