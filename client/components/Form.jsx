import React from 'react'
import { addTask } from '../apis/tasks'


class Form extends React.Component {
  componentDidMount() {
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="task"/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
}


export default Form
