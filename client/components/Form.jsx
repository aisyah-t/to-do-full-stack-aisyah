import React from "react"
import { addTask } from "../apis/api"
import {updateTask} from "../actions/index"
import {connect} from 'react-redux'

class Form extends React.Component {
  state = {
    task: "",
    description: "",
    priority: 0,
    completed: false,
  }

  handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
     
    const newTask = {
      Tasks: this.state.task,
      Description: this.state.description,
      Priority: this.state.priority,
      Completed: this.state.completed,
  }

    addTask(this.state).then((res) => {
      this.props.dispatch(updateTask(newTask))

    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          defaultValue={this.state.task}
          onChange={this.handleChange}/>
        <input type="submit" value="ADD"/>
      </form>
    );
  }
}


export default connect() (Form)
