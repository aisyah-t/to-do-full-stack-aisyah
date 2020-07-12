import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import UpdateTask from './UpdateTask'

class Tasks extends React.Component {

  handleClick = (event, id) => {
    event.preventDefault()
    this.props.dispatch(deleteTodo(id))
  }

  render() {

    return this.props.tasks.map((task) => {
      return (
        <>
          {/* <li className='todo-list'> */}
          <li className={`todo-list${task.priority ? ' priority' : ''}`}>
            <h2>Task: {task.task}</h2>
            <p><b>Task details:</b> {task.taskDetails}</p>
            <p><b>Priority:</b> {(task.priority == 1) ? 'true' : 'false'}</p>
            <p><b>Completed:</b> {(task.completed == 1) ? 'true' : 'false'}</p>
            <button className='update' onClick={(event) => this.handleClick(event, task.id)}> Remove Task </button>
            <UpdateTask taskId={task.id}/>
          </li>
        </>
      )
    })
  }


}

export default connect() (Tasks)