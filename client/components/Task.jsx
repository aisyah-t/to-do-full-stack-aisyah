import React from 'react'
import { connect } from 'react-redux'


class Task extends React.Component {
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


  render() {
    return (

      <li style={this.priorityColour(this.props.task.priority)}>
        {this.props.task.task}

        <div className="right-aligned">
          <button onClick={() => this.handleEditClick(task)}>Edit</button>
          <button onClick={() => this.handleCompleteClick(task)}>✓</button>
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
