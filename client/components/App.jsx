import React from 'react'
import { connect } from 'react-redux'
import Tasks from './Tasks'
import AddTask from './AddTask'
import { getTodos } from '../actions/index'


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getTodos())
  }

  render() {
    // console.log(this.props)
    return (
      <div id="app" className="app">
        <h1>Todos</h1>
        <ul className="todo-list">
          <Tasks tasks={this.props.tasks} />
        </ul>
        <AddTask tasks={this.props.tasks} />
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    // banana: 'banana',
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(App)
