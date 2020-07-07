import request from 'superagent'

import { addToDo } from '../apis/api'
import { getToDos } from '../apis/api'
import { deleteToDo } from '../apis/api'
import { updateToDo } from '../apis/api'

export const ADD_TO_DO = 'ADD_TO_DO'
export const INIT_TO_DOS = 'INIT_TO_DOS'
export const DEL_TO_DO = 'DEL_TO_DO'
export const UPDATE_TO_DO = 'UPDATE_TO_DO'

export const HIDE_FORM = 'HIDE_FORM'
export const SHOW_FORM = 'SHOW_FORM'

export const initToDos = () => {
  return dispatch => {
    getToDos()
      .then((data) => {
        dispatch({
          type: INIT_TO_DOS,
          toDos: data
        })
      })
  }
}

export const newToDo = (newToDo) => {
  return dispatch => {
    addToDo(newToDo)
      .then(() => {
        dispatch({
          type: ADD_TO_DO,
          to_do: newToDo.to_do,
          priority: newToDo.priority,
          completed: newToDo.completed,
        })
      })
  }
}

export const removeToDo = (id) => {
  return dispatch => {
    deleteToDo(id)
      .then(() => {
        dispatch({
          type: DEL_TO_DO,
          id: id,
        })
      })
  }
}

export const changeToDo = (toDo) => {
  return dispatch => {
    updateToDo(toDo)
      .then(() => {
        dispatch({
          type: UPDATE_TO_DO,
          to_do: toDo.to_do,
          priority: toDo.priority,
          completed: toDo.completed,
          id: toDo.id
        })
      })
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
