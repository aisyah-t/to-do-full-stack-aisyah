import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, deleteTask } from '../actions/index'


class ToDoList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  handleClick = (task) => {
    this.props.dispatch(deleteTask(task))
  }

  render() {
    return (
      <ul className="todo-list">
        {
        this.props.tasks.map(task => {
          return <div key={task.id}>
          <li >{task.task}
            <button onClick={()=>this.handleClick(task.id)}>Delete</button>
          </li>
          </div>
        })
      }
      </ul>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(ToDoList)
