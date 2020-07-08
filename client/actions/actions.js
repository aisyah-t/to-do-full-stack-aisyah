import request from 'superagent'

export const UPDATE_TASK = 'UPDATE_TASK'
export const RECEIVE_TASK = 'RECEIVE_TASK'
export const SET_TASK = 'SET_TASK'
export const SET_LOADING = 'SET_LOADING'

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        task: task
    }
}

export function setLoading(loading) {
    return {
        type: SET_LOADING,
        loading: loading,
    }
}

export const receiveTasks = (tasks) => {
    console.log(tasks)
    return {
        type: RECEIVE_TASKS,
        tasks: tasks.map(task => task.data)
    }
}

// set task
export function setTasks(tasks) {
    return {
        type: SET_TASK,
        tasks: tasks  
    }
}

//fetch tasks
export function fetchTasks() {
    return (dispatch) => {
        dispatch(setLoading(true))
        return request
            .get(`/tasks`)
            .then(res => {
                // console.log()
                dispatch(receiveTasks(res.body))
                dispatch(setLoading(false))

            })
            .catch(err => {
                dispatch(setLoading(false))
                dispatch(showError(err.message))
            })
    }
}


