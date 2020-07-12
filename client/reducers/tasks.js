const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // console.log(state, action)
        case 'SET_TASKS':
            return action.tasks
        case 'ADD_TASK':
            return [...state, action.task]

        default: return state
    }
}

export default reducer

// import { SET_TASKS } from '../actions/index'

// const initialState = [{id: 1, task: 'vaccuum', taskDetails: 'vaccuum stuff', priority: false, completed: true},]

//   const reducer = (state = {}, action) => {
//     switch (action.type) {
//         case 'SAY_HELLO':
//             // console.log(state, action)
//             return 'bye'
