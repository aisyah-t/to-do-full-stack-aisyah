import { combineReducers } from 'redux'

// import stuff from './stuff'
import tasks from './tasks'

const reducer = combineReducers({
  tasks: tasks
})

export default reducer
