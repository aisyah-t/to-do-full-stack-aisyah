import React from 'react'
import { connect } from 'react-redux'
import { deleteMyTask, changeView, updateMyTask, currentTask } from '../actions/index'


export class EditForm extends React.Component {
  state = {
  }

  componentDidMount() {
    this.setState(this.props.currentTask)
  }

  handleSubmit = (event) => {
    event.preventDefault()
  
    this.props.dispatch(updateMyTask(this.state))
    this.props.dispatch(changeView('list'))
    this.props.dispatch(currentTask('undefined'))


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
        
        <li> 
          <label>Task:</label>
          <input type="text" name="task" defaultValue={this.props.currentTask.task} onChange={this.handleChange}/>
        </li> 
        <li> 
          <label>Priority:</label>
          <div>
            <input type="radio" name="priority" value="low" onChange={this.handleChange} id="low" checked={this.state.priority == 'low'}/>
            <label className="radio" htmlFor="low">Low</label>
            <input type="radio" name="priority" value="medium" onChange={this.handleChange} id="medium" checked={this.state.priority == 'medium'}/>
            <label className="radio" htmlFor="medium">Medium</label>
            <input type="radio" name="priority" value="high" onChange={this.handleChange} id="high" checked={this.state.priority == 'high'}/>
            <label className="radio" htmlFor="high">High</label>
          </div>
   
        </li>
        <li> 
          <label>Details:</label>
          <input type="text" name="details" defaultValue={this.props.currentTask.details} onChange={this.handleChange}/>
        </li>
        <li> 
          <label>Status:</label><br></br>
          <div>
            <input type="radio" name="completed" value="0" onChange={this.handleChange} id="false" checked={this.state.completed == 0}/>
            <label className="radio" htmlFor="false">In progress</label>
            <input type="radio" name="completed" value="1" onChange={this.handleChange} id="true" checked={this.state.completed == 1}/>
            <label className="radio" htmlFor="true">Completed</label>
          </div>
         
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
