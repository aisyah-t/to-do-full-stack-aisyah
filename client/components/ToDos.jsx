import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import AddTask from './AddTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


class ToDos extends React.Component {

    state = {
        showTasks: false
    }

    hideAddForm = () => {
        this.setState({
            showTasks: false
        })
    }

    showAddForm = () => {
        this.setState({
            showTasks: true
        })
    }

    render() {
        return (
            <main className="twelve columns">
                <h1 className="ten columns">All The Things I Get To Do</h1>
                <FontAwesomeIcon icon={faPlusSquare} size="6x" onClick={this.showAddForm} />
                <table className="ten columns">
                    <thead>
                        <tr>
                            <td><h5>Task</h5></td>
                            <td><h5>Priority</h5></td>
                            <td><h5>Complete</h5></td>
                            <td><h5>Edit</h5></td>
                            <td><h5>Delete</h5></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.showTasks && <AddTask hideAddForm={this.hideAddForm} />}

                        {this.props.tasks.map((todo) => {
                            return (
                                <Task key={todo.id} task={todo.task} priority={todo.priority} completed={todo.completed} id={todo.id} />
                            )
                        })}
                    </tbody>
                </table>
            </main>
        )
    }
}

export default connect()(ToDos)