const initialState = []

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TASKS':
            return action.tasks
        case 'ADD_TASK':
            return [...state, action.task]
        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.id) 
        case 'UPDATE_TASK':
            return state.map(task => {
                if(task.id == action.task.id) {
                    return action.task
                } else return task
            })   
        default:
        return state       
    }
}

export default reducer