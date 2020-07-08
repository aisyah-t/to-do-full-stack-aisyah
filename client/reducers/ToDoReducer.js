const initialState = []


const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TODOS":
        return action.tasks
  
      default:
        return state
    }
  }
  
  export default ToDoReducer