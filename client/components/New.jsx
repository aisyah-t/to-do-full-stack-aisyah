import React from "react"

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

    this.props.new(this.state.task)
    this.setState({
      task: {},
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
          <input type="radio" name="urgency" onChange={this.handleChange} />

          <input type="submit" value="Add New" />
        </form>
      </>
    )
  }
}

export default New
