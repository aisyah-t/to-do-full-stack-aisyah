import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Task extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <ul className="todo-list">
        {
        this.props.tasks.map(task => {
          return <>
          <li key={task.id}>{task.task}
            <button>Delete</button>
          </li>
          </>
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

export default connect(mapStateToProps)(Task)
