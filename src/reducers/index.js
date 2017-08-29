import { combineReducers } from 'redux'
import todos from './todos-reducer'
import fakeReducer from './fake-reducer'

const rootReducer = combineReducers({
  todos,
  fakeReducer
})

export default rootReducer
