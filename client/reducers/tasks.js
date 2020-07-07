import { SET_TASKS } from '../actions'

const initialState = []

export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return action.tasks
        default:
            return state
    }
}