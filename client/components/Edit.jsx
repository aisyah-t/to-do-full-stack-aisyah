import React from "react"

import { connect } from "react-redux"

import { editTask } from "../apis/api"
import { updateTask } from "../actions/index"

class Edit extends React.Component {
  state = {
    button: false,
    task: {},
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

  handleEdit = (e) => {
    e.preventDefault()

    const id = this.props.task.id
    editTask(id, this.state.task).then(() => {
      this.props.dispatch(updateTask(id, this.state.task))
      this.setState({
        task: {},
        button: false
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
            <div className="form-row">
              <label>Name</label>
              <input
                type="text"
                name="name"
                defaultValue={task.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-row">
              <label>Details</label>
              <input
                type="text"
                name="details"
                defaultValue={task.details}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-row">
              <label>Urgent</label>
              <input
                type="checkbox"
                name="urgency"
                defaultChecked={task.urgency == "Urgent"}
                onChange={this.handleChange}
              />
            </div>

            <input type="submit" value="Update" />
          </form>
        )}
      </>
    )
  }
}

export default connect()(Edit)
