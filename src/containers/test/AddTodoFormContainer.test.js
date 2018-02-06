import React from 'react'
import { shallow } from 'enzyme'
import { AddTodoForm, mapStateToProps, mapDispatchToProps } from '../AddTodoFormContainer'
import { addTodo } from '../../actions'

describe('AddTodoFormContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<AddTodoForm />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls handleSubmit when submitForm is called', () => {
    const mockHandleSubmit = jest.fn()
    const mockEvent = { preventDefault: jest.fn() }
    const wrapper = shallow(<AddTodoForm handleSubmit={mockHandleSubmit} />)
    wrapper.instance().submitForm(mockEvent)
    expect(mockHandleSubmit).toHaveBeenCalled()
  })

  it('should map the store correctly', () => {
    const text = 'some text'
    const id = 0
    const mockStore = {
      todos: [{text, id, completed: false}],
      filter: 'SHOW_ALL'
    }
    const mapped = mapStateToProps(mockStore)
    expect(mapped.todos).toEqual(mockStore.todos)
  })

  it('should call the dispach fn when using a fn from mdtp', () => {
    const mockDispatch = jest.fn()
    const mapped = mapDispatchToProps(mockDispatch)
    mapped.handleSubmit()
    expect(mockDispatch).toHaveBeenCalled()
  })
})
