import request from 'superagent'

export const SAVE_TASKS = 'SAVE_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'


export const saveTasks = (tasks) => {
  return {
    type: SAVE_TASKS,
    tasks: tasks
  }
}

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task: task
  }
}

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK, 
    task: task
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id: id
  }
}

export const fetchTasks = () => {
  return (dispatch) => {
    
    return request.get('/tasks')
    .then(res => {
      dispatch(saveTasks(res.body))
      return res.body
    })
    .catch(err => {
      console.log('It broke')
    })
  }
}

// export const addNewTask = () => {

// }