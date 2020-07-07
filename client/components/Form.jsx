import React from 'react'
import { addNewTask } from '../actions/index'
import { connect } from 'react-redux'


export class Form extends React.Component {
  state = {
    newTask: ''
  }

  componentDidMount() {
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(addNewTask(this.state.newTask))
    this.setState({newTask:''})
  }

  handleChange = (event) => {
    this.setState({newTask:event.target.value})
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="task" value={this.state.newTask} onChange={this.handleChange}/>
        <input type="submit" value="Add"/>
      </form>
      {/* <form onSubmit={this.handleSubmit}>
      <input type="submit" value="Save to DB"/>
    </form> */}
    </>
    )
  }
}


export default connect()(Form)
