import React from 'react'
import { saveTask } from '../actions'
import { connect } from 'react-redux'
// import { addTaskApi } from '../apis/api'

class AddTask extends React.Component {

  state = {
    task: '',
    taskDetails: '',
    priority: '',
    completed: '',
  }


  handleSubmit = event => {
    event.preventDefault()
    // console.log('sending the stufff!')
    this.props.dispatch(saveTask(this.state))
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
        <form className='form' onSubmit={this.handleSubmit} >
        <h2>Add A New Task!</h2>

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

          <input type="submit" name="submit" />

        </form>
      </div>
    )
  }
}

export default connect() (AddTask)