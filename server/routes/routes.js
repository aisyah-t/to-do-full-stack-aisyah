const express = require('express')
const db = require('../db/connection')
const router = express.Router()


router.get('/', (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.post('/', (req, res) => {
    const newTask = req.body

    db.addTask(newTask)
        .then(taskId => {
            res.json({ id: taskId[0] })
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.delete('/:id', (req, res) => {

    const taskId = req.params.id

    db.deleteTask(taskId)
        .then(() => {
            res.json({})
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.get('/:id', (req, res) => {
    db.getTask(req.params.id)
        .then(task => {
            res.json(task)
        })
})

router.patch('/:id', (req, res) => {
    const taskId = req.params.id
    const task = req.body

    db.updateTask(taskId, task)
        .then(() => {
            return db.getTask(taskId)
        })
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

module.exports = router