import { SET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions'

const initialState = []

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return action.tasks
        case ADD_TASK:
            return [...state, action.task]
        case DELETE_TASK:
            return state.filter(task => task.id !== action.taskId)
        case UPDATE_TASK:
            return state.map(task => {
                if (task.id == action.taskId) {
                    return action.updatedTask
                } else return task
            })
        default:
            return state
    }
}