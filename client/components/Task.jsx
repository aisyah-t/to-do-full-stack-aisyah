import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, changeView, currentTask, updateMyTask } from '../actions/index'
import EditForm from './EditForm'


export class Task extends React.Component {
  // state = {
  //   editFormVisible: false
  // }
  componentDidMount() {
  }

  priorityColour = (priority) => {
    switch (priority) {
      case 'high':
        return { borderRightColor: 'red' }
      case 'medium':
        return { borderRightColor: 'orange' }
      case 'low':
        return { borderRightColor: 'green' }
      default:
        return { borderRightColor: 'white' }
    }
  }

  handleEditClick = (task) => {
    // this.setState({editFormVisible: true})
    this.props.dispatch(changeView('edit'))
    this.props.dispatch(currentTask(task))
    if (this.props.pageView == 'edit') {
      this.props.dispatch(changeView({ completed: 0 }))
      this.props.dispatch(currentTask('undefined'))
    }

  }


  handleCompleteClick = (task) => {
    task.completed = true
    console.log(task)
    this.props.dispatch(updateMyTask(task))
  }






  render() {
    return (
      <>
        <li className="task" onClick={() => this.handleEditClick(this.props.task)} style={this.priorityColour(this.props.task.priority)}>
          <a>{this.props.task.task}</a>

          <div className="right-aligned">
            {/* <button onClick={() => this.handleEditClick(this.props.task)}>Edit</button> */}
            <button onClick={() => this.handleCompleteClick(this.props.task.task)}>✓</button>
          </div>
        </li>
        {this.props.pageView == 'edit' && this.props.currentTask == this.props.task && <EditForm/>}
      </>

    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
    currentTask: globalState.currentTask,
    pageView: globalState.pageView
  }
}

export default connect(mapStateToProps)(Task)
