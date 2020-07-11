import request from 'superagent'
import {getTasks} from '../api'
import {apiAddTask} from '../api'

export const GET_TODOS = 'GET_TODOS'
export const ADD_TODO = 'ADD_TODO'

export const getToDos = (tasksArray) => {
    return {
      type: GET_TODOS,
      tasks: tasksArray
    }
  }

  export function saveToDo (task) {
    return dispatch => {
    apiAddTask(task)
        .then(() => {
          console.log('thunk done')
          dispatch(fetchToDoList())
        })
        .catch(err => {
          console.log('not done')
        })
    }
  }


  export function fetchToDoList () {
    return (dispatch) => {
      getTasks()
        .then(tasksArray => {
          console.log('2nd stage thunk action' , tasksArray)
          dispatch(getToDos(tasksArray))
        })
        .catch(err => {
          dispatch(showError(err.message))
        })
    }
  }
