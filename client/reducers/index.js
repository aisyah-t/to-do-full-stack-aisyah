import { combineReducers } from 'redux'
import tasks from './tasks'
import pageView from './pageView'

// import stuff from './stuff'

export default combineReducers({
  tasks,
  pageView
})
