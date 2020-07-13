import React from 'react'
import { connect } from 'react-redux'
import { saveTask } from '../actions'


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
        this.props.showTasks()
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
        console.log(this.state)
        return (
            <div className="eight columns">
                <h3>Create a new task</h3>
                <form>
                    <label htmlFor="addTask">Task:</label>
                    <textarea name="task" rows="50" cols="50" onChange={this.handleChange} />
                    <label htmlFor="addTask">Priority:</label>
                    <select name="priority" onChange={this.handleChange} value={this.state.value}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                    <input type="submit" onClick={this.handleSubmit} value="Add Task" />
                </form>
            </div>
        )
    }
}


export default connect()(AddTask)