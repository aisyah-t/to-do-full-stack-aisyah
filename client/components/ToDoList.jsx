import React from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions/index'

class ToDoList extends React.Component {
  state = {
    showUpdate: false,
    id:this.props.id,
    task: '',
    details: '',
    priority: '',
    completed: ''
  }

  componentDidMount() {
    this.props.dispatch(fetchTodos())
    
  }

  render() {
    console.log(this.props.tasks)
    return (
      <>
      <div id="app" className="app">
      <h1>Todos</h1>
      <ul className="todo-list">
    {this.props.tasks.map(task => {return <li key={task.id}>{task.task}</li>})}
        
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

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(ToDoList)