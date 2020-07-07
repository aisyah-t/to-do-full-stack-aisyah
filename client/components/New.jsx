import React from "react"
import { connect } from "react-redux"

import { addTask } from "../actions/index"
import { newTask } from "../apis/api"

class New extends React.Component {
  state = {
    task: {},
  }

  handleChange = (e) => {
    this.setState({
      task: {
        ...this.state.task,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    newTask(this.state.task).then(() => {
      this.props.dispatch(addTask(this.state.task))
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
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />

          <label>Details</label>
          <input type="text" name="details" onChange={this.handleChange} />

          <label>Urgent</label>
          <input type="checkbox" name="urgency" onChange={this.handleChange} />

          <input type="submit" value="Add New" />
        </form>
      </>
    )
  }
}

export default connect()(New)
