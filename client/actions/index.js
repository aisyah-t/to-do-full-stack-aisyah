// import request from 'superagent'
// import { getTodo } from '../../server/db/db'
export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'

import { getTodosApi, addTaskApi, deleteTaskApi } from '../apis/api'

// --- Set Todos --- //
export function setTodos(tasks) {
  return {
    type: SET_TASKS,
    tasks: tasks
  }
}

export function getTodos() {
  return dispatch => {
    getTodosApi().then((tasks) => {
      console.log(tasks)
      dispatch(setTodos(tasks))
    })
  }
}

// --- Add Tasks --- //
export function addTask(task) {
  return {
    type: ADD_TASK,
    task: task
  }
}

export function saveTask(task) {
  return dispatch => {
    addTaskApi(task)
      .then(() => {
        dispatch(getTodos())
      })
  }
}

// --- Delete Tasks --- //
export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id: id
  }
}

export function deleteTodo(id) {
  return dispatch => {
    deleteTaskApi(id)
      .then(() => {
        dispatch(getTodos())
      })
  }
}



