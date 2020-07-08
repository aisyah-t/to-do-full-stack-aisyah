const express = require('express')
const router = express.Router()
const db = require ('../db/db')

//to get list of Tasks 
router.get('/', (req, res) => {
    db.getTasksList()
      .then(tasks => {
        res.json(tasks)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  })

//add a task
router.post('/', (req, res) => {
    db.addTask(req.body)
      .then(taskid => {
        res.json(taskid)
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  })


//update a task
router.put('/', (req, res) => {
    db.updateTask(req.body)
      .then(updatedId => {
        res.json(updatedId)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err.message)
      })
  })


  //delete a task
  router.delete('/', (req, res) => {
    console.log('backend - delete route' , req.body.id)
    db.deleteTask(req.body.id)
      .then(deletedtaskid => {
      })
      .catch(err => {
        res.status(500).send(err.message)
      })
  })



module.exports = router