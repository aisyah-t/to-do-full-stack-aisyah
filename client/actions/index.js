export const RECEIVED_TASK ='RECEIVED_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export const  receivedTask = (tasks)=> {
  // console.log(tasks);
    return {
      type: RECEIVED_TASK,
       tasks: tasks
    }
  }


export const updateTask = (task) =>{
console.log(task)
return {
 
 type: UPDATE_TASK,
 task

}

}


export const deleteTask =(id) =>{
  return (dispatch) => {
    return request.delete(`/${id}`)
    .then(() => {
      dispatch(removeTask(id))
    })
    .catch(err => {
      console.log('It broke')
    })
  }
 
}







