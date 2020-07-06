import request from 'superagent'

export const RECEIVE_TASKS = 'RECEIVE_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'


export const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
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

// export const deleteTask = (id) => {
//   return {
//     type: DELETE_TASK,
//     id: id
//   }
// }

export const fetchTasks = () => {
  return (dispatch) => {
    
    return request.get('/tasks')
    .then(res => {
      dispatch(receiveTasks(res.body))
      return res.body
    })
    .catch(err => {
      console.log('It broke')
    })
  }
}

export const addNewTask = (task) => {
  const newTask = {
    task: task,
    details: '',
    priority: 'low',
    completed: false
  }

  return (dispatch) => {
    return request.post('/tasks')
    .send(newTask)
    .then(res => {
      newTask.id = res.body
      dispatch(addTask(newTask))
    })
    .catch(err => {
      console.log('It broke')
    })
  }
}


// Add new task and fetch all details from db

// export const addNewTask = (task) => {
//   const newTask = {
//     task: task,
//     details: '',
//     priority: 'low',
//     completed: false
//   }

//   return (dispatch) => {
//     return request.post('/tasks')
//     .send(newTask)
//     .then(res => {
//       console.log(res.body)
//       dispatch(fetchTasks())
//       .then(result => console.log(result))
//       return res.body
//     })
//     .catch(err => {
//       console.log('It broke')
//     })
//   }
// }

export const deleteTask = (id) => {
  return (dispatch) => {
    return request.delete(`/tasks/${id}`)
    .then(() => {
      console.log('deleted')
    })
    .then(() => {
      dispatch(fetchTasks())
      .then(result => console.log(result))
      return res.body
    })
    .catch(err => {
      console.log('It broke')
    })
  }
}

