import {UPDATE_TASK, SET_TASKS} from '../actions/actions'


const initialState = []

const taskReducer = (state = initialState, action) => {
  // console.log("this is the action", action)
    switch (action.type) {
    //   case ADD_TASK:
    //     return [...state, action.wombat]
      case SET_TASKS:
        return action.tasks
      case UPDATE_TASK:
        return state.map(task => {
          if(task.id == action.id){
            task.task = action.task
            task.priority = action.priority
            task.complete = action.complete
          } 
          return task
        })
      case "MARK_COMPLETE":
        return state.map(task => {
          if(task.id == action.id){
            task.complete = !task.complete
          } 
          return task
        })
    //   case DEL_TASK:
    //     return state.filter((wombat) => wombat !== action.wombat)
      default:
        return state
    }
  }

export default taskReducer
