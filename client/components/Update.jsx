import React from "react"
import { connect } from "react-redux"
import { updateTodo } from "../actions";

class Update extends React.Component {

    state = {
        showUpdateForm: false,
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
          this.state.taskId = this.props.taskId
          this.props.dispatch(updateTodo(this.state))
          this.setState({
            showUpdateForm: !this.state.showUpdateForm
            })
      }

render() {
    return(
     <>
         <button className="update" onClick={() => this.setState({
             showUpdateForm: !this.state.showUpdateForm
             })}>Update</button>
       {this.state.showUpdateForm &&
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
        <input type="submit" value="Update" />
      </form>}
      </>
    )
}  
}


export default connect ()(Update)