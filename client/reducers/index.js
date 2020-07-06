import { combineReducers } from 'redux'
import tasks from './tasks'
import pageView from './pageView'
import currentTask from './currentTask'

// import stuff from './stuff'

export default combineReducers({
  tasks,
  pageView,
  currentTask
})
