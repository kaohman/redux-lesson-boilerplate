import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    console.log(this.props);
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

const mapStateToProps = (state) => {
  console.log(state)
  return { todos: state.todosReducer }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, id) => {
      console.log(text, id);
      dispatch(addTodo(text, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
