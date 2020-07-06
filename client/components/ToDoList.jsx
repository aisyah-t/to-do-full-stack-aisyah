import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/index'


class ToDoList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  render() {
    return (
      <ul className="todo-list">
        {
        this.props.tasks.map(task => {
          return <div key={task.id}>
          <li >{task.task}
            <button>Delete</button>
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