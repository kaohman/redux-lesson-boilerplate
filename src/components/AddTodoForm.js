import React, { Component } from 'react';

export default class AddTodoForm extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    };
  };

  render() {
    const { todos, handleSubmit } = this.props

    return (
      <section>
        <form onSubmit= { (e) => {
          e.preventDefault()
          handleSubmit(Object.assign({id: todos.length}, this.state))
        }
        }>
          <input type='text'
                 className='add-text'
                 value={this.state.text}
                 onChange={(e) => this.setState({text: e.target.value})}
          />
          <input type='submit'
                 className='submit'
          />
        </form>
      </section>
    )
  };
};
