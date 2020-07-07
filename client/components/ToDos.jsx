import React from 'react'
// import { tasks } from '../reducers/tasks'  --> ASK EDGARS WHY THIS IS NEEDED

import Task from './Task'
import AddTask from './AddTask'

class ToDos extends React.Component {

    state = {
        showTasks: true
    }

    hideTasks = () => {
        this.setState({
            showTasks: false
        })
    }

    render() {
        return (
            <main className="app">
                <h1>TO DO LIST</h1>
                {this.state.showTasks
                    ?
                    <>
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
                                {this.props.tasks.map((todo) => {
                                    return (
                                        <Task key={todo.id} task={todo.task} priority={todo.priority} completed={todo.completed} id={todo.id} />
                                    )
                                })}
                            </tbody>
                        </table>
                        <form>
                        <input type="submit" onClick={this.hideTasks} value="ADD A NEW TASK" />
                        </form>
                    </>
                    :
                    <>
                        <AddTask />
                    </>
                }
            </main>
        )
    }
}

export default ToDos