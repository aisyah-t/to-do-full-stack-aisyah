import React from 'react'
// import { connect } from 'react-redux'

class Tasks extends React.Component {

  render() {

    return this.props.tasks.map((task) => {
      return (
        <>
          <li className='todo-list'>
            <h2>Task: {task.task}</h2>
            <p><b>Task details:</b> {task.taskDetails}</p>
            <p><b>Priority:</b> {task.priority}</p>
            <p><b>Completed:</b> {task.completed}</p>
          </li>
        </>
      )
    })
  }


}

export default Tasks