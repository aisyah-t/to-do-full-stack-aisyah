import React from "react";
import { connect } from 'react-redux'
import { deleteTodo } from "../actions";
import Update from './Update'

class Tasks extends React.Component {

    handleClick = (event, id) => {
        event.preventDefault()
        this.props.dispatch(deleteTodo(id))
    }

  render() {
    return this.props.tasks.map((task) => {
      return (
        <li className="todo-list">
          <p>TASK: {task.task}</p>
          <p>TASK DETAILS: {task.task_details}</p> 
          <p>PRIORITY: {(task.priority == 1) ? "true" : "False"}</p> 
          <p>COMPLETED: {(task.completed == 1) ? "true" : "False"}</p>
          <button  className="update" onClick={(event) => this.handleClick(event, task.id)}>DELETE</button>
          <Update taskId={task.id}/>
        </li>
      );
    });
  }
}

export default connect ()(Tasks);
