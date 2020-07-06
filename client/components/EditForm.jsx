import React from 'react'
import { addNewTask } from '../actions/index'
import { connect } from 'react-redux'


class EditForm extends React.Component {
  state = {
    newTask: ''
  }

  componentDidMount() {
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.newTask)
    this.props.dispatch(addNewTask(this.state.newTask))
  }

  handleChange = (event) => {
    this.setState({newTask:event.target.value})
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="task" onChange={this.handleChange}/>
        <input type="submit" value="Update"/>
      </form>
      {/* <form onSubmit={this.handleSubmit}>
      <input type="submit" value="Save to DB"/>
    </form> */}
    </>
    )
  }
}


export default connect()(EditForm)
