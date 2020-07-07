import request from 'superagent'


// view tasks
export function getTasks() {
    return request.get('/')
        .then(res => { return res.body })
        .catch(errorHandler('GET', '/'))

}

// create tasks
export function createTask(task) {
    return request.post('/')
        .send(task)
        .then(res => {
            res.body
        })
        .catch(errorHandler('POST', '/'))

}

// update tasks
export function updateTask(task) {
    return request.put('/:id')
    .send(post)
    .then(res => {return res.body})
    .catch(errorHandler('PUT', '/v1/posts/:id'))
}

// delete tasks
export function deleteTask() {
    return request.delete('/:id')
    .catch(errorHandler('DELETE', '/id'))
}
