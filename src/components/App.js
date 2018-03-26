import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';
import AddTodoForm from './AddTodoForm';
import './App.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddTodoForm />
        </div>
      </Provider>
    );
  }
}

export default App;
