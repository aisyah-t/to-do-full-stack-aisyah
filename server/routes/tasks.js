const express = require("express")
const router = express.Router()

const db = require("../db/db")

router.get("/", (req, res) => {
  db.getTasks()
    .then((tasks) => {
      res.json(tasks)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post("/", (req, res) => {
  const task = req.body
  db.addTask(task)
    .then(() => {
      db.getTasks()
      .then((tasks) => {
        res.json(tasks)
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.put("/", (req, res) => {
  const id = req.body.id
  const task = req.body
  db.updateTask(id, task)
    .then(() => {
      db.getTasks()
      .then((tasks) => {
        res.json(tasks)
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

router.delete("/", (req, res) => {
  const id = req.body.id
  db.deleteTask(id)
    .then(() => {
      db.getTasks()
      .then((tasks) => {
        res.json(tasks)
      })
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
