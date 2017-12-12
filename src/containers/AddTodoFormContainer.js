import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class AddTodoForm extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    };
  };

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleSubmit({...this.state, id: Date.now()});
  };

  removedClicked = (event, id) => {
    event.preventDefault();
    this.props.handleRemove(id)
  }

  printTodos = () => {
    const toMap = this.props.todos || []
    return toMap.map((todo, index) => {
      return (
        <div key={`todo-${index}`}>
          <p>{todo.text}</p>
          <button onClick={(e) => this.removedClicked(e, todo.id)}>Remove</button>
        </div>
      )
    })
  }

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
        <div className="todos">
          {this.printTodos()}
        </div>
      </section>
    )
  };
};

export const mapStateToProps =  store => ({
  todos: store.todos
});

export const mapDispatchToProps = dispatch => ({
  handleSubmit: todo => dispatch(actions.addTodo(todo)),
  handleRemove: id => dispatch(actions.removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
