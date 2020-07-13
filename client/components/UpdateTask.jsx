import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { editTask } from '../actions'

class UpdateTask extends React.Component {

    state = {
        task: {
            id: this.props.id,
            task: this.props.task,
            priority: this.props.priority,
            completed: this.props.completed
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dispatch(editTask(this.state.task.id, this.state.task))
    }

    handleChange = (evt) => {
        this.setState({
            task: {
                ...this.state.task,
                [evt.target.name]: evt.target.value
            }
        })
        // console.log(this.state.task)
    }

    render() {
        console.log(this.props)
        return (
            <tbody>
                <tr>
                    <td>
                        <textarea name="task" row="50" onChange={this.handleChange} defaultValue={this.props.task} />
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

// function mapStateToProps(globalState) {
//     return {
//         task: globalState.tasks
//     }
// }

export default connect()(UpdateTask)