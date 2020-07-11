import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { removeTask } from '../actions'
import UpdateTask from './UpdateTask'

class Task extends React.Component {

    state = {
        showTasks: true
    }

    hideTasks = () => {
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
                <>
                <tbody>
                <tr>
                    <td>{this.props.task}</td>
                    <td>{this.props.priority}</td>
                    <td>{this.props.completed}<input type="checkbox"></input></td>
                    <td><button onClick={this.hideTasks}><FontAwesomeIcon icon={faEdit} size="lg" /></button></td>
                    <td><button onClick={this.handleDelete}><FontAwesomeIcon icon={faTrashAlt} size="lg" /></button></td>
                    {/* Need to get tasks to refresh after delete */}
                </tr>
                </tbody>
            </>
            :                     
            <>
            <UpdateTask />
            </>
            }
            </>
        )
    }
}

function mapStateToProps (globalState) {
    // console.log(globalState)
    return {
        tasks: globalState.tasks
    }
}

export default connect(mapStateToProps)(Task)