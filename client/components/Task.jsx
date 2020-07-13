import React from 'react'
import { connect } from 'react-redux'
import { removeTask } from '../actions'
import UpdateTask from './UpdateTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'


class Task extends React.Component {

    state = {
        readTasks: true,
    }

    editMode = () => {
        this.setState({
            readTasks: false
        })
    }

    readTasks = () => {
        this.setState({
            readTasks: true
        })
    }

    handleDelete = (evt) => {
        evt.preventDefault()
        this.props.dispatch(removeTask(this.props.id))
    }

    render() {
        return (
            <>
                {this.state.readTasks
                    ?
                    <tr>
                        <td>{this.props.task}</td>
                        <td>{this.props.priority}</td>
                        <td><input type="checkbox" name="completed" ></input></td>
                        <td><FontAwesomeIcon icon={faEdit} size="2x" onClick={this.editMode} /></td>
                        <td><FontAwesomeIcon icon={faTrashAlt} size="2x" onClick={this.handleDelete} /></td>
                    </tr>
                    :
                    <>
                        <UpdateTask key={this.props.id} id={this.props.id} task={this.props.task} priority={this.props.priority} completed={this.props.completed} readTasks={this.readTasks} />
                    </>
                }
            </>
        )
    }
}


export default connect()(Task)