import { combineReducers } from 'redux'

import todos from './todosReducer'
import filter from './filterReducer'

const rootReducer = combineReducers({
  todos,
  filter,
})

export default rootReducer
