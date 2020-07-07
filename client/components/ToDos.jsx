import React from 'react'
// import { tasks } from '../reducers/tasks'  --> ASK EDGARS WHY THIS IS NEEDED

import Task from './Task'

function ToDos (props) {
    // console.log(props.tasks)
    return (
        <main className="app">
            <h1>TO DO LIST</h1>
            <table>
                <thead>
                    <tr className="todo-list">
                        <td><h3>Task</h3></td>
                        <td><h3>Priority</h3></td>
                        <td><h3>Complete</h3></td>
                        <td><h3>Edit</h3></td>
                        <td><h3>Delete</h3></td>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((todo) => {
                        return (
                            <Task key={todo.id} task={todo.task} priority={todo.priority} completed={todo.completed} id={todo.id}/>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}

export default ToDos