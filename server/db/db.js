const connection = require('./connection')

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

function updateTask(taskId, task, db = connection) {
    return db('tasks')
        .where('id', taskId)
        .update(task)
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTask
} 