import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { removeTask, getTaskById } from '../actions'
import UpdateTask from './UpdateTask'

class Task extends React.Component {

    state = {
        showTasks: true,
    }

    hideTasks = (evt) => {
        this.setState({
            showTasks: false
        })
    }

    handleDelete = (evt) => {
        evt.preventDefault()
        this.props.dispatch(removeTask(this.props.id))
    }

    render() {
        // console.log(this.state)
        return (
            <>
                {this.state.showTasks
                    ?
                    <tbody>
                        <tr>
                            <td>{this.props.task}</td>
                            <td>{this.props.priority}</td>
                            <td><input type="checkbox"></input></td>
                            <td><FontAwesomeIcon icon={faEdit} size="2x" onClick={this.hideTasks} /></td>
                            <td><FontAwesomeIcon icon={faTrashAlt} size="2x" onClick={this.handleDelete} /></td>
                        </tr>
                    </tbody>
                    :
                    <>
                        <UpdateTask />
                    </>
                }
            </>
        )
    }
}

function mapStateToProps(globalState) {
    // console.log(globalState)
    return {
        tasks: globalState.tasks
    }
}

export default connect(mapStateToProps)(Task)