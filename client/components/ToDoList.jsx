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
    //this is where the initial request for the tasks gets sent from. this one is going to actions
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
//What is returned from the reducer is being brought in as props
function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(ToDoList)