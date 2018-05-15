import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})

export default rootReducer
