import React from 'react'
import { connect } from 'react-redux'
import { saveTask } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'


class AddTask extends React.Component {

    state = {
        task: {
            task: '',
            priority: 'Low',
            completed: 'No'
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dispatch(saveTask(this.state.task))
        this.props.hideAddForm()
    }

    handleChange = (evt) => {
        this.setState({
            task: {
                ...this.state.task,
                [evt.target.name]: evt.target.value
            }
        })
    }

    render() {
        return (
            <tr>
                <td>
                    <textarea name="task" onChange={this.handleChange} />
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
                    <select name="completed" onChange={this.handleChange} defaultValue="No" value={this.state.value}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </td>
                <td>
                    <FontAwesomeIcon icon={faSave} size="2x" onClick={this.handleSubmit} />
                </td>
                <td>
                </td>
            </tr>
        )
    }
}


export default connect()(AddTask)