import React, { Component } from 'react'

export default class AddTodoForm extends Component {
  constructor() {
    super()
    this.state  = {
      text: ''
    }
  }
  render() {
    const { handleSubmit, todos } = this.props

    return (
      <section>
        <form onSubmit={ (e) => {
          e.preventDefault()
          handleSubmit(todos.length, this.state.text)
        }}>
          <input value={this.state.text}
                 placeholder= 'why tho'
                 onChange={(e) => this.setState({text: e.target.value})}
          />
          <input type='submit' />
        </form>
      </section>
    )
  }
}
