import { todosReducer } from './todosReducer';
import { filterReducer } from './filterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

export default rootReducer;
