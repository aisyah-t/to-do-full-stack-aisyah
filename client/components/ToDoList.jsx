import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, deleteMyTask, changeView, currentTask, updateMyTask} from '../actions/index'
import EditForm from './EditForm'
import EditFormCopy from './EditFormCopy'
import Form from './Form'

class ToDoList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  handleClick = (task) => {
    this.props.dispatch(deleteMyTask(task))
  }


  handleEditClick = (task) => {
    this.props.dispatch(changeView('edit'))
    this.props.dispatch(currentTask(task))
  }


  handleCompleteClick = (task) => {
    task.completed = true
    console.log(task)
    this.props.dispatch(updateMyTask(task))
  }


  render() {
    return (
      <ul className="todo-list">
        {
        this.props.tasks.map(task => {
          if(task.completed == false) {
            return <div key={task.id}>
            <li >{task.task}
              <button onClick={()=>this.handleEditClick(task)}>Edit</button>
              {/* <button onClick={()=>this.handleClick(task.id)}>Delete</button> */}
              <button onClick={()=>this.handleCompleteClick(task)}>✓</button>

            </li>
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
    pageView: globalState.pageView
  }
}

export default connect(mapStateToProps)(ToDoList)
