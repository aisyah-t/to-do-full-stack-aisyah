import { combineReducers } from 'redux'


import toDoReducer from './toDos'

export default combineReducers({
    toDos: toDoReducer,
})
