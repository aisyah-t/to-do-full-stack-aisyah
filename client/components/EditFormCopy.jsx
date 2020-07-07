import React from 'react'
import { updateMyTask } from '../actions/index'
import { connect } from 'react-redux'
import { deleteMyTask } from '../actions/index'


class EditFormCopy extends React.Component {
  state = {
  }

  componentDidMount() {
    this.setState(this.props.currentTask)
  }

  handleSubmit = (event) => {
    event.preventDefault()
  
    this.props.dispatch(updateMyTask(this.state))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleDeleteClick = (task) => {
    this.props.dispatch(deleteMyTask(task))
  }

  componentWillReceiveProps() {
    this.setState(this.props.currentTask)
  }


  render() {
    return (
      <>
      
      <form onSubmit={this.handleSubmit}>
      <ul className="edit-list">
        <li> Task:
            <input type="text" name="task" defaultValue={this.state.task} onChange={this.handleChange}/>
          </li> 
        <li> Priority:
          <input type="text" name="priority" defaultValue={this.state.priority} onChange={this.handleChange}/>
        </li>
        <li> Details:
          <input type="text" name="details" defaultValue={this.state.details} onChange={this.handleChange}/>
        </li>
        <li> Completed:
          <input type="text" name="completed" value={this.state.completed} onChange={this.handleChange}/>
        </li>

      </ul>
      <button onClick={()=>this.handleDeleteClick(task.id)}>Delete</button>
        <input type="submit" value="Update"/>
      </form>
    </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
    currentTask: globalState.currentTask
  }
}

export default connect(mapStateToProps)(EditFormCopy)
