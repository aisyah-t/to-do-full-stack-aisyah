import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

class Tasks extends React.Component {

  handleClick = (event, id) => {
    event.preventDefault()
    this.props.dispatch(deleteTodo(id))
  }

  render() {

    return this.props.tasks.map((task) => {
      return (
        <>
          <li className='todo-list'>
            <h2>Task: {task.task}</h2>
            <p><b>Task details:</b> {task.taskDetails}</p>
            <p><b>Priority:</b> {task.priority}</p>
            <p><b>Completed:</b> {task.completed}</p>
            <button className='update' onClick={(event) => this.handleClick(event, task.id)}> Remove task </button>
          </li>
        </>
      )
    })
  }


}

export default connect() (Tasks)