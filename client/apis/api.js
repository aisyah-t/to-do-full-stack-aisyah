import request from 'superagent'

export function getTasks () {
    return request
    .get('/api')
    .then(res => {
        // console.log(res.body)
        return res.body
    })
}

export function addTask () {
    return request
    .post('/api')
    .send(task)
    .then(req => {
        console.log(req.body)
        // return request.body
    })
}