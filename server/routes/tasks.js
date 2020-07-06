const express = require('express')

const router = express.Router()

const db = require('../db/tasks')

router.get('/', (req, res) => {
  db.listTasks()
    .then(tasks => {
      res.json(tasks)
    })
})

router.post('/', (req, res) => {
  db.addTask(req.body)
    .then(id => {
      res.json(id)
    })
})

router.put('/:id', (req, res) => {
  // console.log(req.body)
  const task = {
    task: req.body.task,
    details: req.body.details,
    priority: req.body.priority,
    completed: req.body.completed
}
  db.updateTask(task, req.params.id)
    .then(task => {
      res.json(task)
    })
})


router.delete('/:id', (req, res) => {
  db.deleteTask(req.params.id) 
    .then(() => {
      res.sendStatus(200)
    })
})

module.exports = router