const express = require('express')
const db = require('../db/db')
const router = express.Router()


router.get('/', (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    db.getTask(id)
        .then(task => {
            res.json(task)
        })
})

router.post('/', (req, res) => {
    const task = {
        task: req.body.task,
        priority: req.body.priority
    }
    console.log(req.body, task)

    db.createTask(task)
        .then(id => db.getTask(id))
        .then(task => {
            res.json(task)
        })
})

router.put('/:id', (req, res) => {
    console.log(req.params.id)

    let id = req.params.id
    let task = {
        id: id,
        task: req.body.task,
        priority: req.body.priority,
        complete: req.body.complete
    }

    db.updateTask(task)
        .then(() => db.getTask(id))
        .then(task => {
            res.json(task)
        })
})

router.delete('/:id', (req, res) => {
    id = req.params.id
    db.deleteTask(id)
        .then(() => {
            res.sendStatus(200)
        })
})

module.exports = router