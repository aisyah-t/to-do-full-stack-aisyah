function getToDoList (state = {}, action) {
    switch (action.type) {
      case "GET_TASKS":
        return action.taskObj
  
      default:
        return state
    }
  }
  
  export default getToDoList