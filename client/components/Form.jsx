import React from "react";
import { addTask } from "../apis/api";

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


    addTask(this.state).then((res) => {
      
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          defaultValue={this.state.task}
          onChange={this.handleChange}/>
        <input type="submit" onSubmit={this.handleSubmit}/>

    
      </form>
    );
  }
}

//local state
//this state will update globalstate
//Add tasks

export default Form;
