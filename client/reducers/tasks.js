const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
     case 'GET_TODOS':
      return action.tasks
    case 'UPDATE_TODO':
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