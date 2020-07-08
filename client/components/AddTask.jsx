import React from "react";
// import { addTaskApi } from "../apis/api";
import { saveTodo } from "../actions";
import { connect } from 'react-redux'

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
        this.props.dispatch(saveTodo(this.state)) // doesnt need a then block
        // addTaskApi(this.state) wont got through redux this way
        // .then(() => {
            // console.log('works')
        // }) 
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
          <input type="text" name="task_details" onChange={this.handleChange}/>
        </div>
        <div className="form-row">
            <label>Prority:</label>
            <input type="text" name="priority" defaultValue="true" onChange={this.handleChange}/>
        </div>
        <div className="form-row">
            <label>Completed: </label>
            <input type="text" name="completed" defaultValue="false" onChange={this.handleChange}/>
         </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default connect ()(AddTask);
