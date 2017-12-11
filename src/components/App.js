import React, { Component } from 'react';
import './App.css';
import AddTodoFormContainer from '../container/AddTodoFormContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoFormContainer />
      </div>
    );
  }
}

export default App;
