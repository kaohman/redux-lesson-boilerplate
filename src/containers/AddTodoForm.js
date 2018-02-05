import React, { Component } from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    const { handleSubmit, todos } = this.props;

    return (
      <section>
        <form onSubmit={  (e) => {
              e.preventDefault()
              handleSubmit(this.state.text, todos.length)
        }}>
          <input  value={this.state.text}
                  placeholder="Add A Todo"
                  onChange={(e) => this.setState({ text: e.target.value} )} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text, id) => dispatch(addTodo(text, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
