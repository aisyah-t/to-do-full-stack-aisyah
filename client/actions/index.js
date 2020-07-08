export const SET_TASKS = "SET_TASKS"
export const ADD_TASK = "ADD_TASK"
export const DEL_TASK = "DEL_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
 
import { getTodosApi, addTaskApi, delTaskApi, updateTaskApi } from "../apis/api"

export function setTodos(tasks) {
    return {
        type: SET_TASKS,
        tasks: tasks
    }
}

export function addTodos(task) {
    return {
        type: ADD_TASK,
        task: task
    }
}

export function deleteTask(id) {
    return {
        type: DEL_TASK,
        id: id   
    }
}

export function updateTask(id) {
    return {
        type: UPDATE_TASK,
        id: id
    }
}

export function fetchTodos() {
    return dispatch => {
        getTodosApi().then((tasks) => {
            // console.log(tasks)
            dispatch(setTodos(tasks))
        })
    }
}

export function saveTodo(task) {
    return dispatch => {
        addTaskApi(task).then(() => {
            dispatch(fetchTodos())
        })
    }
}

export function deleteTodo(id) {
    return dispatch => {
        delTaskApi(id).then(() => {
            dispatch(fetchTodos())
        })
    }
}

export function updateTodo(task) {
    return dispatch => {
        updateTaskApi(task).then(() => {
            dispatch(fetchTodos())
        })
    }
}