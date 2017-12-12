import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export class AddTodoForm extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    };
  };

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleSubmit({...this.state, id: this.props.todos.length});
  };

  printTodos = () => (
    this.props.todos.map((todo, index) => (
      <div key={`todo-${index}`}>
        <p>{todo.text}</p>
        <button>Remove</button>
      </div>
    ))
  )

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input type='text'
                 className='add-text'
                 value={this.state.text}
                 onChange={(e) => this.setState({text: e.target.value})}
          />
          <input type='submit'
                 className='submit'
          />
        </form>
        { this.printTodos() }
      </section>
    )
  };
};

export const mapStateToProps =  store => ({
  todos: store.todos
});

export const mapDispatchToProps = dispatch => ({
  handleSubmit: idea => dispatch(addTodo(idea))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
