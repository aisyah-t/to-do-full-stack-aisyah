import { NEW_TASK, EDIT_TASK, DEL_TASK, RECEIVE_TASKS } from "../actions/index"

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks

    case NEW_TASK:
      return [
        ...state,
        {
          name: action.task.name,
          details: action.task.details,
          urgency: action.task.urgency,
          completed: action.task.completed,
          listed: action.task.listed,
        },
      ]

    case EDIT_TASK:
      return state.map((task) => {
        if (task.id == action.id) {
          return action.task
        } else {
          return task
        }
      })

    case DEL_TASK:
      return state.filter((task) => task.id != action.id)

    default:
      return state
  }
}

export default reducer
