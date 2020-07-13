import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import AddTask from './AddTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


class ToDos extends React.Component {

    state = {
        showTasks: true
    }

    hideTasks = () => {
        this.setState({
            showTasks: false
        })
    }

    showTasks = () => {
        this.setState({
            showTasks: true
        })
    }

    render() {
        return (
            <main className="twelve columns">
                <h1 className="ten columns">All The Things I Get To Do</h1>
                <em><h6 className="ten columns">"Never do today what you can put off till tomorrow." - Aaron Burr Jr.</h6></em>
                <FontAwesomeIcon icon={faPlusSquare} size="6x" onClick={this.hideTasks} />
                {this.state.showTasks
                    ?
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
                        {this.props.tasks.map((todo) => {
                            return (
                                <Task key={todo.id} task={todo.task} priority={todo.priority} completed={todo.completed} id={todo.id} />
                            )
                        })}
                    </table>
                    :
                    <>
                        <AddTask showTasks={this.showTasks} />
                    </>
                }
            </main>
        )
    }
}

// function mapStateToProps(globalState) {
//     return {
//         tasks: globalState.tasks
//     }
// }

export default connect()(ToDos)