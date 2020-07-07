import React from "react"

import { updateTasks, deleteTasks } from '../apis/api'

import Edit from './Edit'
import Delete from './Delete'

class Tasks extends React.Component {

  updateTask(task){
    updateTasks(task)
    .then((task)=>{
      this.setState({
        tasks:task
      })
    })
  }

  deleteTask(task){
    deleteTasks(task)
    .then((task)=>{
      this.setState({
        tasks:task
      })
    })
  }

  render() {
    return (
      <>
        <ul className="todo-list">
          {this.props.tasks.map((task) => {
            return (
              <li key={task.id} id={task.id}>
                {task.name} {<Edit/>} {<Delete del={this.deleteTask} task={this.props.tasks}/>}
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Tasks
