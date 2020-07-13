import request from 'superagent'


// view tasks
export function getTasks() {
    return request.get('/tasks')
        .then(res => { return res.body })
}

// create tasks
export function createTask(task) {
    return request.post('/tasks')
        .send(task)
        .then(res => {
            res.body
        })
}

// update tasks
export function updateTask(task) {
    return request.put('/tasks/' + task.id)
    .send(task)
    .then(res => {return res.body})
    .catch(err => console.log(err))
}

// delete tasks
export function deleteTask() {
    return request.delete('/tasks/' + task.id)
    .catch(err => {
        return err.message
    })
}

