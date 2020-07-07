import React from "react";
import { addTaskApi } from "../apis/api";

class AddTask extends React.Component {
  state = {
    task: "",
    task_details: "",
    priority: "",
    completed: "",
  };

  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

    handleSubmit = event => {
        event.preventDefault()
        addTaskApi(this.state)
        .then(() => {
            this.props.refreshTodos
        })
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
            <label>Task:</label>
            <input type="text" name="task" onChange={this.handleChange}/>
        </div>
        <div className="form-row">
          <label>Task Details:</label>
          <input type="text" name="task" onChange={this.handleChange}/>
        </div>
        <div className="form-row">
            <label>Prority:</label>
            <input type="text" name="task" defaultValue="true" onChange={this.handleChange}/>
        </div>
        <div className="form-row">
            <label>Completed: </label>
            <input type="text" name="task" defaultValue="false" onChange={this.handleChange}/>
         </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddTask;
