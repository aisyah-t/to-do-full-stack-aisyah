const express = require('express')
const router = express.Router()

const db = require('../../db/db')
//http://localhost:3000/api/v1/todos/update


router.get('/', (req, res) => {
    console.log("route is running a GET request")
    db.getTodos()
      .then(todos => {
        res.send(todos)
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })
  router.post('/', (req, res) => {
    console.log("route is running a POST request")
      console.log(req.body)
    db.createTask(req.body)
      .then(todo => {
        res.send(todo)
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })
  router.post('/update', (req, res) => {
    console.log("route is running a POST request for update")
      console.log(req.body)
    db.editTask(req.body)
      .then(todo => {
        res.json(todo)
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err.message)
      })
  })
  router.delete('/', (req, res) => {
    console.log("route is running a DELETE request")
      console.log(req.body)
    db.deleteTask(req.body)
      .then(() => {
        res.json({})
      })
      .catch(err => {
        res.status(500).send( "it broke :/" )
        console.log(err)
      })
  })
  module.exports = router