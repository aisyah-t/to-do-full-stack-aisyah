import request from 'superagent'

import {updateTask as apiUpdateTask, getTasks } from '../apis'

export const UPDATE_TASK = 'UPDATE_TASK'
export const RECEIVE_TASK = 'RECEIVE_TASK'
export const SET_TASKS = 'SET_TASK'
export const SET_LOADING = 'SET_LOADING'

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        task: task
    }
}

export function markComplete(id) {
    return {
        type: "MARK_COMPLETE",
        id: id
    }
}

export function setLoading(loading) {
    return {
        type: SET_LOADING,
        loading: loading,
    }
}

export const receiveTasks = (tasks) => {
    console.log(tasks)
    return {
        type: RECEIVE_TASKS,
        tasks: tasks.map(task => task.data)
    }
}

// set task
export function setTasks(tasks) {
    // console.log("action is triggered", tasks)
    return {
        type: "SET_TASK",
        tasks: tasks
    }
}

//fetch tasks
export function fetchTasks() {
    return (dispatch) => {
        dispatch(setLoading(true))
        return getTasks()
            .then(tasks => {
                // console.log()
                dispatch(setTasks(tasks))
                dispatch(setLoading(false))

            })
            .catch(err => {
                dispatch(setLoading(false))
                console.log("fetch", err)
                // dispatch(showError(err.message))
            })
    }
}

export function updateFetchTask(task) {
    return (dispatch) => {
        return apiUpdateTask(task)
            .then(res => {
                // console.log()
                dispatch(fetchTasks())
            })
            .catch(err => {
                console.log("update fetch", err)
                // dispatch(showError(err.message))
            })
    }
}


