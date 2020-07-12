const express = require('express')
const router = express.Router()

const db = require('../../db/db')

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