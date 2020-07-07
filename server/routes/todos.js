const express = require("express")
const router = express.Router()

const db = require("../db/db")

router.get("/", (req, res) => {
    db.getTodo()
        .then((todos) => {
            res.send(todos)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
})

router.post("/", (req, res) => {
    const todo = req.body
    db.addTodo(todo)
        .then((todo) => {
            res.send(todo)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
})

router.delete("/:id", (req, res) => {
    db.deleteTodo(req.params.id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
})

router.put("/:id", (req, res) => {
    db.updateTodo(req.body, req.params.id)
        .then((updateTodo) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
})



module.exports = router