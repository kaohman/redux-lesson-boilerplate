import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <AddTodoForm />
      </div>
    );
  }
}

export default App;
