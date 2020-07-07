import React from 'react'

class Todos extends React.Component {
  render() {
    console.log(this.props)
    const data = this.props.data
    return ( 
      <>
      <li className= "todo-list">
      <h2>Task: {data.task}</h2>
      <p><b>Task details:</b> {data.taskDetails}</p>
      <p><b>Priority:</b> {data.priority}</p>
      <p><b>Completed:</b> {data.completed}</p>
      </li>
      </>
    )
      
  }
}

export default Todos