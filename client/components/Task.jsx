import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, changeView, currentTask, updateMyTask } from '../actions/index'



export class Task extends React.Component {
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
    this.props.dispatch(changeView('edit'))
    this.props.dispatch(currentTask(task))
    if (this.props.pageView == 'edit') {
      this.props.dispatch(changeView({completed:0}))
      this.props.dispatch(currentTask('undefined'))
    }

  }


  handleCompleteClick = (task) => {
    task.completed = true
    console.log(task)
    this.props.dispatch(updateMyTask(task))
  }


  handleChange = (event) => {
    const completed= {
      completed: event.target.value
    }
    this.props.dispatch(changeView({completed: event.target.value}))
  }



  render() {
    return (

      <li style={this.priorityColour(this.props.task.priority)}>
        <a>{this.props.task.task}</a>

        <div className="right-aligned">
          <button onClick={() => this.handleEditClick(this.props.task.task)}>Edit</button>
          <button onClick={() => this.handleCompleteClick(this.props.task.task)}>✓</button>
        </div>

      </li>


    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
    currentTask: globalState.currentTask
  }
}

export default connect(mapStateToProps)(Task)
