import React from 'react'
import { connect } from 'react-redux'
import { updateItem } from '../actions/index'

class CompletedList extends React.Component {
  state = {
    id:this.props.id,
    task: '',
    details: '',
    priority: '',
    completed: ''
  }

  componentDidMount() {
    this.props.dispatch(updateItem())
  }

  render() {
    return(
      <>
      <h3>Completed</h3>
        <ul className="todo-list">
        {this.props.tasks.map(task => {
          return task.completed ? <li key={task.id}>{task.task}</li> : null
          })}
        </ul>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect (mapStateToProps)(CompletedList)