export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

import { getTasks as apiGetTasks, deleteTask, updateTask } from '../apis/api'

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

export function removeTask (taskId) {
    console.log(taskId)
    return dispatch => {
        deleteTask(taskId)
        .then(tasks => dispatch(saveTasks(tasks)))
    }
}

export function editTask (taskId, task) {
    return dispatch => {
        updateTask(taskId, task)
        .then(() => {
            console.log('hello')
        })
        // type: UPDATE_TASK,
        // taskId: taskId,
        // task: task
    }
}

