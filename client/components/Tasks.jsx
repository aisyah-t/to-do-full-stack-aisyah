import React from "react"

import Edit from "./Edit"
import Delete from "./Delete"

class Tasks extends React.Component {
  render() {
    return (
      <>
        <ul className="todo-list">
          {this.props.tasks.map((task) => {
            return (
              <li key={task.id} id={task.id}>
                {task.name} {<Edit task={task} />} {<Delete task={task} />}
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Tasks
