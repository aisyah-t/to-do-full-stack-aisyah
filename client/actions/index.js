import { getTasks } from '../apis/api'

export const NEW_TASK = "NEW_TASK"
export const EDIT_TASK = "EDIT_TASK"
export const DEL_TASK = "DEL_TASK"
export const RECEIVE_TASKS = "RECEIVE_TASKS"

export const receiveTasks= (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  }
}

export const addTask = (id) => {
  return {
    type: NEW_TASK,
    id
  }
}

export const updateTask = (task) => {
  return {
    type: EDIT_TASK,
    task
  }
}

export const deleteTask = (id) => {
  return {
    type: DEL_TASK,
    id
  }
}

export const fetchTasks = () => {
  return (dispatch) => {
    return getTasks()
    .then(tasks => {
      dispatch(receiveTasks(tasks))
    })
    // .catch(err)
  } 
}

