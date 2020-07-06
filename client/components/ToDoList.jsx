import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../apis/api'

class ToDoList extends React.Component {
  state = {
    id:this.props.id,
    task: '',
    details: '',
    priority: '',
    completed: ''
  }

  // componentDidMount() {
  //   getTodos()
  //     .then((todoData) => {
  //       this.setState({
  //         task: todoData
  //       })
  //     })
  // }

  render() {
    return (
      <>
      <div id="app" className="app">
      <h1>Todos</h1>
      <ul className="todo-list">
        <li>Task: {this.props.task}</li>
      </ul>

      <form>
        <input type="text" name="task"/>
        <input type="submit" value="Add"/>
      </form>
    </div>
      </>
    )
  }
}

export default ToDoList