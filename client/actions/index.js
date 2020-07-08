import { getTasks, updateTask } from "../apis/api";

export const GET_TODOS = 'GET_TODOS'
export const UPDATE_TODO = 'UPDATE_TODO'

//Action Creator
export const getTodos = (tasksArray) => {
  //returns an object from all the way via the API, the routes, the db, back to here
  return {
    type: GET_TODOS,
    tasks: tasksArray
  }
}

export const updateTodo = (task) => {
  return {
    type: UPDATE_TODO,
    task: task
  }
}

//this is our thunk - a function that returns another function (here: dispatch). it makes a call to call the API to get our tasks from the back-end
export function fetchTodos() {
  return (dispatch) => {
    getTasks()
    .then(tasks => {
      dispatch(getTodos(tasks))
      console.log(tasks)
    })
  }
}

export function updateItem(task, id) {
  return (dispatch) => {
    updateTask(task, id)
      .then(task => {
        dispatch(updateTodo(task))
      })
  }
}