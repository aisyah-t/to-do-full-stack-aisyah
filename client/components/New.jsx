import React from "react"
import { connect } from "react-redux"

import { addTask } from "../actions/index"
import { newTask } from "../apis/api"

class New extends React.Component {
  state = {
    task: { urgency: null },
  }

  handleChange = (e) => {
    let value = e.target.value
    if (e.target.name == "urgency") {
      value = e.target.checked ? "Urgent" : null
    }

    this.setState({
      task: {
        ...this.state.task,
        [e.target.name]: value,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    newTask(this.state.task).then((task) => {
      const newTask = { ...this.state.task }
      newTask.id = task.id
      this.props.dispatch(addTask(newTask))
      this.setState({
        task: {},
      })
    })
  }

  render() {
    return (
      <>
        <h1>Add Task</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange} />
          </div>

          <div className="form-row">
            <label>Details</label>
            <input type="text" name="details" onChange={this.handleChange} />
          </div>

          <div className="form-row">
            <label>Urgent</label>
            <input
              type="checkbox"
              name="urgency"
              onChange={this.handleChange}
            />
          </div>

          <input type="submit" value="Add New" />
        </form>
      </>
    )
  }
}

export default connect()(New)
