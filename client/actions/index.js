// import request from 'superagent'
export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'

import { getTodosApi, addTaskApi } from '../apis/api'

// --- Set Todos ---
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

// --- Add Tasks ---
export function addTask(task) {
    return {
        type: ADD_TASK,
        task: task
    }
}

export function saveTask(task) {
    return dispatch => {
        addTaskApi(task).then(() => {
            dispatch(getTodos())
        })
    }
}



