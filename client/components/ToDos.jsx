import React from 'react'
import { connect } from 'react-redux'
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
            <main className="twelve columns">
                <h1>Things I Get To Do</h1>
                <em><h5>"Why do today what you can put off until tomorrow?"</h5></em>
                {this.state.showTasks
                    ?
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <td><h4>Task</h4></td>
                                    <td><h4>Priority</h4></td>
                                    <td><h4>Complete</h4></td>
                                    <td><h4>Edit</h4></td>
                                    <td><h4>Delete</h4></td>
                                </tr>
                            </thead>
                                {this.props.tasks.map((todo) => {
                                    return (
                                        <Task key={todo.id} task={todo.task} priority={todo.priority} completed={todo.completed} id={todo.id} />
                                    )
                                })}
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

function mapStateToProps (globalState) {
    return {
        tasks: globalState.tasks
    }
}

export default connect(mapStateToProps)(ToDos)