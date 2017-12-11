import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodoFormContainer extends Component {
  constructor() {
    super()
    this.state =  {
      title: ''
    }
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({ title: value })
  }

  submitIdea = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.title, this.props.todos.length)
  }

  render() {
    return (
      <form onSubmit={this.submitIdea}>
        <input type="text"
          placeholder="add an idea"
          onChange={this.handleChange}
        />
        <input type='submit'/>
      </form>
    )
  }
}

const mapStateToProps = reduxStore => {
  return { todos: reduxStore.todos }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (title, id) => {
      dispatch(addTodo(title,id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoFormContainer)
