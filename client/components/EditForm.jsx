import React from 'react'
import { connect } from 'react-redux'
import { deleteMyTask, changeView, updateMyTask } from '../actions/index'


class EditForm extends React.Component {
  state = {
  }

  componentDidMount() {
    this.setState(this.props.currentTask)
  }

  handleSubmit = (event) => {
    event.preventDefault()
  
    this.props.dispatch(updateMyTask(this.state))
    this.props.dispatch(changeView('list'))

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleDeleteClick = (id) => {
    this.props.dispatch(deleteMyTask(id))
  }




  render() {
    return (
    <ul className="edit-list">
      <form className="edit" onSubmit={this.handleSubmit}>
        <li> Task:
            <input type="text" name="task" defaultValue={this.props.currentTask.task} onChange={this.handleChange}/>
          </li> 
        <li> Priority:
          <input type="text" name="priority" defaultValue={this.props.currentTask.priority} onChange={this.handleChange}/>
        </li>
        <li> Details:
          <input type="text" name="details" defaultValue={this.props.currentTask.details} onChange={this.handleChange}/>
        </li>
        <li> Completed:
          <input type="text" name="completed" value={this.props.currentTask.completed} onChange={this.handleChange}/>
        </li>

      <button onClick={()=>this.handleDeleteClick(this.props.currentTask.id)}>Delete</button>
        <input type="submit" value="Update"/>
      </form>
      </ul>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
    currentTask: globalState.currentTask
  }
}

export default connect(mapStateToProps)(EditForm)
