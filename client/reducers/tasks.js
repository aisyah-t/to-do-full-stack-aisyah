import { SET_TASKS, DELETE_TASK } from '../actions'

const initialState = []

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return action.tasks
        case DELETE_TASK:
            return action.taskId
        default:
            return state
    }
}