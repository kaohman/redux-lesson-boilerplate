import { combineReducers } from 'redux'
import { todosReducer } from './todos'
import { filterReducer } from './filter'

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})

export default rootReducer
