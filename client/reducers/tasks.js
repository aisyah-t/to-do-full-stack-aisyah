import { RECEIVE_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actions/index'


// const initialState = []

const initialState = [
  {id: 1, task: 'Get milk', details: 'Get dark blue', priority: 'low', completed: false},
]

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks
    case ADD_TASK:
      return [...state, action.task]
    case UPDATE_TASK:
      return state.map(task => {
        if(task.id == action.task.id) {
          return action.task
        } else return task
      })
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id )
    default: 
      return state
  }
}

export default reducer