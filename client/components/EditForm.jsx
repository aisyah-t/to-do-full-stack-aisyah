import React from 'react'
import { updateMyTask } from '../actions/index'
import { connect } from 'react-redux'
import { deleteMyTask } from '../actions/index'


class EditForm extends React.Component {
  state = {
    task: ''
  }

  componentDidMount() {
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.task)
    this.props.dispatch(updateMyTask(this.state.task))
  }

  handleChange = (event) => {
    this.setState({task:event.target.value})
  }

  handleDeleteClick = (task) => {
    this.props.dispatch(deleteMyTask(task))
  }

  render() {
    return (
      <>
      
      <form onSubmit={this.handleSubmit}>
      <ul className="todo-list">
        <li> Task:
            <input type="text" name="task" value={this.props.currentTask.task} onChange={this.handleChange}/>
          </li> 
        <li> Priority:
          <input type="text" name="task" value={this.props.currentTask.priority} onChange={this.handleChange}/>
        </li>
        <li> Details:
          <input type="text" name="task" value={this.props.currentTask.details} onChange={this.handleChange}/>
        </li>
        <li> Completed:
          <input type="text" name="task" value={this.props.currentTask.completed} onChange={this.handleChange}/>
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

export default connect(mapStateToProps)(EditForm)
