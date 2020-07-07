import request from 'superagent'

export const ADD_TO_DO = 'ADD_TO_DO'
export const INIT_TO_DOS = 'INIT_TO_DOS'
export const HIDE_FORM = 'HIDE_FORM'
export const SHOW_FORM = 'SHOW_FORM'

export const initToDos = (toDoData) => {
  return {
    type: INIT_TO_DOS,
    toDos: toDoData
  }
}

export const addToDo = (newToDo) => {
  return {
    type: ADD_TO_DO,
    to_do: newToDo.task,
    priority: newToDo.priority,
    completed: newToDo.completed,
  }
}

export const hideForm = () => {
  return {
    type: HIDE_FORM
  }
}

export const showForm = () => {
  return {
    type: SHOW_FORM
  }
}
