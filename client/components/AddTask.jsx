import React from 'react'
import { addTask } from '../apis/api'


class AddTask extends React.Component {

    state = {
        task: {
            task: '',
            priority: '',
            completed: 'No'
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        addTask(this.state.task)
        .then(id => {
            console.log(id)
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
        return (
            <>
            <h3>CREATE A NEW TASK</h3>
            <form>
                <label htmlFor="addTask">Task:</label>
                <input type="text" name="task" onChange={this.handleChange} />
                <label htmlFor="addTask">Priority:</label>
                <input type="text" name="priority" onChange={this.handleChange} />
                {/* <label htmlFor="addTask">Complete:</label>
                <input type="text" name="completed" defaultValue="No" /> */}
                <input type="submit" onClick={this.handleSubmit} value="Add Task"/>
            </form>
            </>
        )
    }
}

export default AddTask