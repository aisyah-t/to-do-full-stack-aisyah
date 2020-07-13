import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { getTask, editTask } from '../actions'

class UpdateTask extends React.Component {

    state = {
        task: {
            id: '',
            task: '',
            priority: '',
            completed: ''
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        // .then(task => {
        //     this.setState ( {
        //         task: {
        //             id: task.id,
        //             task: task.task,
        //             priority: task.priority,
        //             complete: task.completd
        //         }
        //     })
        // })
        editTask(this.state.task.id, this.state.task)
            .then(task => {
                console.log(task)
                // Need to get all tasks again and redirect to homepage showing new task added
            })
    }

    handleChange = (evt) => {
        this.setState({
            task: {
                ...this.state.task,
                [evt.target.name]: evt.target.value
            }
        })
        console.log(this.state.task)
    }

    render() {
        console.log(this.props)
        return (
            <tbody>
                <tr>
                    <td>
                        <input type="text" name="task" onChange={this.handleChange} value={this.state.task.task} />
                    </td>
                    <td>
                        <select name="priority" onChange={this.handleChange} value={this.state.value}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                    </td>
                    <td>
                        <select name="completed" onChange={this.handleChange} value={this.state.value}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </td>
                    <td>
                        <FontAwesomeIcon icon={faSave} size="2x" onClick={this.handleSubmit} />
                    </td>
                    <td>
                        <br/>
                    </td>
                </tr>
            </tbody>
        )
    }
}

function mapStateToProps(globalState) {
    // console.log(globalState)
    return {
        task: globalState.task
    }
}

export default connect(mapStateToProps)(UpdateTask)