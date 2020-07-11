// import request from 'superagent'
export const SET_TASKS = 'SET_TASKS'

import { getTodosApi } from '../apis/api'

export function setTodos (tasks) {
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



