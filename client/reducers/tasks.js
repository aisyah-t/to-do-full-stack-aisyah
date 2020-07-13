import { SET_TASKS, ADD_TASK, DELETE_TASK, GET_TASK_BY_ID, UPDATE_TASK } from '../actions'

const initialState = []

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return action.tasks
        case ADD_TASK:
            return [...state, action.task]
        case DELETE_TASK:
            return state.filter(task => task.id !== action.taskId)
        case GET_TASK_BY_ID:
            return state.find(task => task.id == action.taskId)
        default:
            return state
    }
}