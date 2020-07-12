const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getTodo()
    .then(todos => {
      res.send(todos)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  // console.log('-----server side request body ' , req.body)
  db.addTodo(req.body)
    .then(todo => {
      res.send(todo)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  db.deleteTodo(req.params.id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// router.put('/', (req, res) => {
//   console.log('data in new server side route' , req.body)
//   db.updateTask(req.body)
//     .then(updatedTodo => {
//       res.send(updatedTodo)
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })


module.exports = router
