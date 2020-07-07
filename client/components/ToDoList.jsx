import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, deleteMyTask, changeView, currentTask, updateMyTask} from '../actions/index'
import EditForm from './EditForm'
import EditFormCopy from './EditFormCopy'
import Form from './Form'

export class ToDoList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  handleClick = (task) => {
    this.props.dispatch(deleteMyTask(task))
  }


  handleEditClick = (task) => {
    this.props.dispatch(changeView('edit'))
    this.props.dispatch(currentTask(task))
    if(this.props.pageView == 'edit') {
      this.props.dispatch(changeView('list'))
      this.props.dispatch(currentTask('undefined'))
    }
    
  }


  handleCompleteClick = (task) => {
    task.completed = true
    console.log(task)
    this.props.dispatch(updateMyTask(task))
  }

  priorityColour = (priority) => {
    switch(priority) {
      case 'high':
        return {backgroundColor: 'red'}
      case 'medium':
        return {backgroundColor: 'orange'}
      case 'low':
        return {backgroundColor: 'green'}
      default:
        return {backgroundColor: 'white'}
    }
  }


  render() {
    return (
      <ul className="todo-list">
        {
        this.props.tasks.map(task => {
          if(task.completed == false) {
            return <div key={task.id}>
      
            <li >
              {task.task}
              <div className="right-aligned">
                <button onClick={()=>this.handleEditClick(task)}>Edit</button>
                {/* <button onClick={()=>this.handleClick(task.id)}>Delete</button> */}
                <button onClick={()=>this.handleCompleteClick(task)}>✓</button>

                <div className="priority" style={this.priorityColour(task.priority)}></div>
                </div>
              
            </li>
              {this.props.currentTask != undefined && this.props.currentTask.id == task.id && <EditForm/>}
            
            </div>
          }
        })
      }

      {/* {this.props.pageView == 'edit' && <EditFormCopy/>} */}

      </ul>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
    pageView: globalState.pageView,
    currentTask: globalState.currentTask
  }
}

export default connect(mapStateToProps)(ToDoList)
