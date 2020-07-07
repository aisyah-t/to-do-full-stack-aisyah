import React from 'react'
import {makeTaskApi} from '../apis/api'

class AddTask extends React.Component {
  
  state = {
    task: '',
    taskDetails: '',
    priority: '',
    completed: '',
  }

  
  handleSubmit = event => {
    event.preventDefault()
    // this.props.setName(this.state.name)
    console.log('sending the stufff!')
    makeTaskApi(this.state)
  }
  
  handleChange = event => {
    
    // console.log('change!',this.state)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  
  
  render () {
    return (
      <div>
      <h2>Add A New Task!</h2>
      <form className = 'form' onSubmit={this.handleSubmit} >
        
        <div className = 'form-row'>
        <label >Task</label>
        <input type="text" name="task" defaultValue="Task" className = 'form input'  onChange={this.handleChange}/>
        </div>

        <div className = 'form-row'>
        <label >Task Details</label>
        <input type="text" name="taskDetails" defaultValue="Task Details" className = 'form input' onChange={this.handleChange}/>
        </div>

        <div className = 'form-row'>
        <label >Priority</label>
        <input type="text" name="priority" defaultValue="True/False" className = 'form input' onChange={this.handleChange} />
        </div>

        <div className = 'form-row'>
        <label >Completed</label>
        <input type="text" name="completed" defaultValue="True/False" className = 'form input' onChange={this.handleChange} />
        </div>

        <input type="submit" name="submit"/>

      </form>
      </div>
    )
  }
}

export default AddTask