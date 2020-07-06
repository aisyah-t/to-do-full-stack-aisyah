import request from 'superagent'

export const ADD_TO_DO = 'ADD_TO_DO'


export const addToDo = (newToDo) => {
    return {
      type: ADD_TO_DO,
      to_do: newToDo.task,
      priority: newToDo.priority,
      completed: newToDo.completed,
    }
  }
  
