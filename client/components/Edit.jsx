import React from "react"

import { connect } from "react-redux"

import { editTask } from "../apis/api"
import { updateTask } from "../actions/index"

class Edit extends React.Component {
  state = {
    button: false,
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

  handleButton = () => {
    if (this.state.button == false) {
      this.setState({
        button: true,
      })
    }
    if (this.state.button == true) {
      this.setState({
        button: false,
      })
    }
  }

  handleEdit = (e) => {
    e.preventDefault()
    
    const id = this.props.task.id
    
    editTask(id, this.state.task).then(() => {
      this.props.dispatch(updateTask(id, this.state.task))
      this.setState({
        task: {},
      })
    })
  }

  render() {
    const { task } = this.props
    return (
      <>
        <input type="submit" value="Details" onClick={this.handleButton} />

        {this.state.button && (
          <form onSubmit={this.handleEdit}>

            <label>Name</label>
            <input
              type="text"
              name="name"
              defaultValue={task.name}
              onChange={this.handleChange}
            />

            <label>Details</label>
            <input
              type="text"
              name="details"
              defaultValue={task.details}
              onChange={this.handleChange}
            />

            <label>Urgent</label>
            <input
              type="checkbox"
              name="urgency"
              defaultValue={task.urgency}
              onChange={this.handleChange}
            />

            <input type="submit" value="Update" />
          </form>
        )}
      </>
    )
  }
}

export default connect()(Edit)
