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

    handleDelete = (evt) => {
        evt.preventDefault()
        this.props.dispatch(removeTask(this.props.id))
    }

    render() {
        // console.log(this.state)
        return (
            <>
                {this.state.readTasks
                    ?
                    <tbody>
                        <tr>
                            <td>{this.props.task}</td>
                            <td>{this.props.priority}</td>
                            <td><input type="checkbox"></input></td>
                            <td><FontAwesomeIcon icon={faEdit} size="2x" onClick={this.editMode} /></td>
                            <td><FontAwesomeIcon icon={faTrashAlt} size="2x" onClick={this.handleDelete} /></td>
                        </tr>
                    </tbody>
                    :
                    <>
                        <UpdateTask key={this.props.id} id={this.props.id} task={this.props.task} priority={this.props.priority} completed={this.props.completed}/>
                    </>
                }
            </>
        )
    }
}


export default connect()(Task)