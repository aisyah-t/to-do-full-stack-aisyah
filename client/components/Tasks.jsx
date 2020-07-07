import React from "react";

class Tasks extends React.Component {
  render() {
    return this.props.tasks.map((task) => {
      return (
        <li className="todo-list">
          <p>TASK: {task.task}</p>
          <p>TASK DETAILS: {task.task_details}</p> 
          <p>PRIORITY: {task.priority}</p> 
          <p>COMPLETED: {task.completed}</p>
        </li>
      );
    });
  }
}

export default Tasks;
