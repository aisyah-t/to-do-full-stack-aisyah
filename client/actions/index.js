export const SET_TASKS = 'SET_TASKS'

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