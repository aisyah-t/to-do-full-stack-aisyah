import React from "react"

import { connect } from "react-redux"

import { deleteTask } from "../actions/index"
import { killTask } from "../apis/api"

class Delete extends React.Component {
  delTask = () => {
    const task = this.props.task
    const id = this.props.task.id
    killTask(task).then(() => {
      this.props.dispatch(deleteTask(id))
      // \/ Easy to do but not good practice (think what would happen if you were to delete a user from facebook and then fetch users everytime)
      // this.props.dispatch(fetchTasks())
    })
  }

  render() {
    return (
      <>
        <input type="submit" value="Delete" onClick={this.delTask} />
      </>
    )
  }
}

export default connect()(Delete)
