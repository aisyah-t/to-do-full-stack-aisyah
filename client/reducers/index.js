import { combineReducers } from 'redux'
import TaskReducer from './Tasks'
import waitReducer from './waiting'

// import stuff from './stuff'

export default combineReducers({
  waitReducer,
  TaskReducer
})
