import React from 'react'
import { editTask } from '../actions'

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
        return (
            <>
            <h3>UPDATE TASK</h3>
            <form>
                <label htmlFor="addTask">Task:</label>
                <input type="text" name="task" onChange={this.handleChange} value={this.state.task.task}/>
                <label htmlFor="addTask">Priority:</label>
                <input type="text" name="priority" onChange={this.handleChange} value={this.state.task.priority}/>
                <label htmlFor="addTask">Complete:</label>
                <input type="text" name="completed" onChange={this.handleChange} value={this.state.task.completed}/>
                <input type="submit" onClick={this.handleSubmit} value="Update Task"/>
            </form>
            </>
        )
    }
}

export default UpdateTask