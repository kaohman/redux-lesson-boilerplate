import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../actions'

export class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  clickSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.text, todos.length)
  }

  render() {
    const { handleSubmit, todos } = this.props;

    return (
      <section>
        <form onSubmit={this.clickSubmit}>
          <input  value={this.state.text}
                  placeholder="Add A Todo"
                  onChange={(e) => this.setState({ text: e.target.value} )} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  todos: state.todos,
})

export const mapDispatchToProps = dispatch => ({
  handleSubmit: (text, id) => dispatch(addTodo(text, id)),
  handleRemove: (id) => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
