import { NEW_TASK, EDIT_TASK, DEL_TASK, RECEIVE_TASKS} from '../actions/index'

const reducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks

    case NEW_TASK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          details: action.details,
          urgency: action.urgency,
          completed: action.completed,
          listed: action.listed
        },
      ]

    case EDIT_TASK:
      return action.task

    case DEL_TASK:
      return state.filter(task => task.id != action.id)

    default:
      return state
  }
}

export default reducer
