import request from 'superagent'

export const RECEIVE_TASKS = 'RECEIVE_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const CHANGE_VIEW = 'CHANGE_VIEW'
export const CURRENT_TASK = 'CURRENT_TASK'
export const FILTER_BY = 'FILTER_BY'

import { addTaskAPI, deleteTaskAPI, } from '../apis/tasks'

export const currentTask = (task) => {
  return {
    type: CURRENT_TASK,
    task: task
  }
}


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

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id: id
  }
}

export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    view: view
  }
}

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

export function addNewTask (task) {
  const newTask = {
    task: task,
    details: '',
    priority: 'low',
    completed: false
  }
  // console.log(newTask)
 
  return (dispatch) => {
   addTaskAPI(newTask)
      .then(res => {
        console.log(res)
        newTask.id = res.body
        dispatch(addTask(newTask))
      })
      .catch(err => {
        console.log('It broke')
      })
  }
}




export const deleteMyTask = (id) => {
  return (dispatch) => {
    return deleteTaskAPI(id)
    .then(() => {
      dispatch(deleteTask(id))
    })
    .catch(err => {
      console.log('It broke')
    })
  }
}

export const updateMyTask = (task) => {
  return (dispatch) => {
    return request.put(`/tasks/${task.id}`)
    .send(task)
    .then(() => {
      dispatch(updateTask(task))
    })
  }
}

export const filterBy = (filter) => {
  return {
    type: FILTER_BY,
    filter: filter
  }
}

