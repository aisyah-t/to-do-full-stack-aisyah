import { combineReducers } from 'redux'

import toDoReducer from './toDos'
import showAddReducer from './showAdd'

export default combineReducers({
    toDos: toDoReducer,
    showAdd: showAddReducer,
})
