import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AddTodoForm from '../containers/AddTodoForm';
import rootReducer from '../reducers'
import './App.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello world!</h1>
          <AddTodoForm />
        </div>
      </Provider>
    );
  }
}

export default App;
