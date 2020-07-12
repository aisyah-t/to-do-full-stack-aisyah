import React from 'react'
import { connect } from 'react-redux'
import { updateTodo } from '../actions'

class UpdateTask extends React.Component {

  state = {
    showUpdateForm: false,
    task: '',
    taskDetails: '',
    priority: '',
    completed: '',
  }


  handleSubmit = event => {
    event.preventDefault()
    // console.log('sending the stufff!')
    this.state.taskId = this.props.taskId
    this.props.dispatch(updateTodo(this.state))
    this.setState({
      showUpdateForm: !this.state.showUpdateForm
    })
  }

  handleChange = event => {
    // console.log('change!',this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return (
      <div>
        <button className='update' onClick={() => this.setState({ showUpdateForm: !this.state.showUpdateForm })}>Update Task</button>
        {this.state.showUpdateForm &&
          <form className='form' onSubmit={this.handleSubmit} >
            <h2>Update Task!</h2>

            <div className='form-row'>
              <label >Task</label>
              <input type="text" name="task" defaultValue="Task" className='form input' onChange={this.handleChange} />
            </div>

            <div className='form-row'>
              <label >Task Details</label>
              <input type="text" name="taskDetails" defaultValue="Task Details" className='form input' onChange={this.handleChange} />
            </div>

            <div className='form-row'>
              <label >Priority</label>
              <input type="text" name="priority" defaultValue="True/False" className='form input' onChange={this.handleChange} />
            </div>

            <div className='form-row'>
              <label >Completed</label>
              <input type="text" name="completed" defaultValue="True/False" className='form input' onChange={this.handleChange} />
            </div>

            <input type="submit" value="Update" />

          </form>
        }
      </div>
    )
  }
}

export default connect()(UpdateTask)