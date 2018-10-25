import React from 'react'
import { AddTodoForm, mapStateToProps, mapDispatchToProps } from './AddTodoFormContainer.js'
import { shallow } from 'enzyme'
import * as Actions from '../actions'

describe('AddTodoFormContainer', () => {
  // React component tests
  describe('AddTodoFormComponent', () => {
    it('should call handleSubmit', () => {
      // setup
      const mockHandleSubmit = jest.fn()
      const wrapper = shallow(
        <AddTodoForm 
          todos={[]}
          handleSubmit={mockHandleSubmit}
        />
      )
      const mockEvent = { preventDefault: jest.fn() }

      // execution
      wrapper.find('form').simulate('submit', mockEvent)

      // expectation
      expect(mockHandleSubmit).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    it('should parse the todos from state', () => {
      // setup
      const mockTodos = [
        {id: 1, text: 'hi', completed: false}
      ]
      const mockState = {
        todosReducer: mockTodos,
        filter: 'SHOW_ALL'
      }
      const expected = mockTodos

      // execution
      const mappedProps = mapStateToProps(mockState)

      // expectation
      expect(mappedProps.todos).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addTodo action', () => {
      // setup
      const mockDispatch = jest.fn()
      const text = 'dispatch me'
      const id = 1
      const expected = Actions.addTodo(text, id)

      // execution
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.handleSubmit(text, id)

      // expectation
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})
