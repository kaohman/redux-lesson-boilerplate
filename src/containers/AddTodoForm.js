import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.addTodo(Date.now(), this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.text}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
        {JSON.stringify(this.props.todos)}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos, }
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (id, text) => dispatch(addTodo(id, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
