const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

//Write DB functions here

function getTasks(db = connection) {
    return db('tasks').select()
}

function addTask(task, db = connection) {
    return db('tasks')
        .insert({
            task: task.task,
            priority: task.priority,
            completed: task.completed
        })
}

function deleteTask(taskId, db = connection) {
    return db('tasks')
        .where('id', taskId)
        .del()
}

function getTask(taskId, db = connection) {
    return db('tasks')
        .where('id', taskId)
        .select()
        .first()
}

function updateTask(taskId, task, db = connection) {
    return db('tasks')
        .where('id', taskId)
        .update(task)
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    getTask,
    updateTask
} 
