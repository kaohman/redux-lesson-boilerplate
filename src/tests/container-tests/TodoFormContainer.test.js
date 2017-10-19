import configureStore from 'redux-mock-store';
import { shallow, mount, configure } from 'enzyme'
import { mapStateToProps, mapDispatchToProps } from '../../containers/AddTodoFormContainer'
import AddTodoFormContainer from '../../containers/AddTodoFormContainer'
import AddTodoForm from '../../components/AddTodoForm'
import React from 'react'
import Adapter from 'enzyme-adapter-react-15';
import * as actions from '../../actions'

configure({ adapter: new Adapter() })

describe('TodoFormContainer tests', () => {

  it('container should have default state', () => {

    const mockStore = configureStore()
    const intialState = { todos: [] }
    const store = mockStore(intialState)
    const wrapper = mount(<AddTodoFormContainer
                              store={store}
                              todos={intialState}
                          />)


    expect(wrapper.instance().props.todos).toEqual({ todos: [] });
  });

  it('the rendered component should fire correct action', () => {
    const mockStore = configureStore()
    const intialState = { todos: [] }
    const store = mockStore(intialState)
    const mockHandleSubmit = jest.fn()
    const wrapper = mount(<AddTodoForm
                              store={store}
                              todos={intialState}
                              handleSubmit={mockHandleSubmit}
                            />)
    wrapper.find('.submit').simulate('submit')
    expect(mockHandleSubmit).toHaveBeenCalled()
  })

});
