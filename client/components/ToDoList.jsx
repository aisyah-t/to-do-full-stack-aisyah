import React from 'react'
import { connect } from 'react-redux'


class ToDoList extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <ul className="todo-list">
        <li>Eat</li>
        <li>Code</li>
        <li>Sleep</li>
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
