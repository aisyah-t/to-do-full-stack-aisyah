export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

import {
    getTasks as apiGetTasks,
    addTask as apiAddTask,
    deleteTask as apiDeleteTask,
    updateTask as apiUpdateTask
} from '../apis/api'

export function saveTasks(tasks) {
    return {
        type: SET_TASKS,
        tasks: tasks
    }
}

export function addTask(task) {
    return {
        type: ADD_TASK,
        task: task
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        taskId: taskId
    }
}

export function updateTask(taskId, updatedTask) {
    return {
        type: UPDATE_TASK,
        taskId: taskId,
        updatedTask: updatedTask
    }
}

export function getTasks() {
    return dispatch => {
        apiGetTasks()
            .then(tasks => dispatch(saveTasks(tasks)))
    }
}

export function saveTask(task) {
    return dispatch => {
        apiAddTask(task)
            //First thing to do is add task to API/DB
            .then((taskId) => {
                task.id = taskId.id
                // Add ID property to task object
                // ID is coming back from back-end API
                dispatch(addTask(task))
                // Dispatch: Put task in Redux store
            })
    }
}

export function removeTask(taskId) {
    return dispatch => {
        apiDeleteTask(taskId)
            .then(dispatch(deleteTask(taskId)))
    }
}

export function editTask(taskId, updatedTask) {
    return dispatch => {
        apiUpdateTask(taskId, updatedTask)
            .then(dispatch(updateTask(taskId, updatedTask)))
    }
}
