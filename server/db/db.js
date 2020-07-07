const config = require('../../knexfile').development
const db = require('knex')(config)



function getTasks() {
    return db('ToDo')
        .then(posts => posts.map(parseParagraphs))     
}

function getTask(id) {
    return db('ToDo')
        .where('id', id)
        .first()
        .then(task => {
            // task.paragraphs = JSON.parse(task.paragraphs)
            return task
        })
}

function createTask(task) {
    task.complete = false

    // task.paragraphs = JSON.stringify(task.paragraphs)

    return db('ToDo')
        .insert(task)
        .then(([id]) => id)
}

function updateTask(id, task) {
    // task.paragraphs = JSON.stringify(task.paragraphs)

    return db('ToDo')
        .update(task)
        .where('id', id)

}

function deleteTask(id) {
    return db('ToDo')
        .delete()
        .where('id', id)

}


function parseParagraphs(post) {
    // post.paragraphs = JSON.parse(post.paragraphs)

    return post
}


module.exports = {
    getTask,
    getTasks,
    createTask,
    updateTask,
    deleteTask
}