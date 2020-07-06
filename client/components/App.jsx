import React from 'react'
import Todos from './Todos'
import Add from './Add'
import Update from './Update'
import {connect} from 'react-redux'
import { getTasks, deleteTask } from '../apis/todos'
import { fetchTasks } from '../actions'

class App extends React.Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    console.log('component did mount')
    getTasks()
      .then(task => {
        this.setState({
          tasks: task,
        })
      })
      this.props.dispatch(fetchTasks())
  }

  //need input field and submit button 'ADD' inside the container div

  //need to move to forms
  updateTodos = () => {
    getTasks()
      .then(task => {
        this.setState({
          tasks: task,
        })
      })
  }

  //need to move to forms
  removeTodos = task => {
    deleteTask(task)
    .then(tasks => 
    this.setState({tasks}))
  }

  render() {
    console.log('render')
    return (
      <div className="app">
        <div className="todo-list">
          <h1>Todos</h1>
          {this.state.tasks.map(todos => {
            return <Todos key={todos.id} data={todos} removeTodos={this.removeTodos} updateTodos={this.updateTodos}/>
          })}
        </div>
        <div className="form">
          <Add/>
        </div>
        <div>
          <Update/>
        </div>
      </div>
    )
  }
}



export default connect()(App)