export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'

import { getTasks as apiGetTasks } from '../apis/api'

export function getTasks () {
    return dispatch => {
        apiGetTasks()
        .then(tasks => dispatch(saveTasks(tasks)))
    }
}

export function saveTasks (tasks) {
    return {
        type: SET_TASKS,
        tasks: tasks
    }
}

export function addTask (task) {
    return {
        type: ADD_TASK,
        task: task
    }
}

export function deleteTask (taskId) {
    return {
        type: DELETE_TASK,
        taskId: taskId
    }
}

