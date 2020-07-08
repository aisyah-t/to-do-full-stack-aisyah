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
                <div className="container">
                  <div className="options">
                    {task.name} <span>{task.urgency}</span>
                  </div>

                  <Delete task={task} />
                  <Edit task={task} />
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Tasks
