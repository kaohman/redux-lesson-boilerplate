import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import FilterMenu from './FilterMenu';
import './App.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>My Todo's</h1>
          <AddTodoForm />
          <FilterMenu />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
