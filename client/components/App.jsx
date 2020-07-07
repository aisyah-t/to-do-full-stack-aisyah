import React from "react"
import { connect } from "react-redux"

import { addTasks, fetchTasks } from "../actions/index"

import Tasks from "./Tasks"
import New from "./New"

class App extends React.Component {

  componentDidMount() {
    console.log("onMount")
    this.props.dispatch(fetchTasks())
  }

  newTask(task) {
    this.props.dispatch(addTasks(task))
  }

  render() {
    return (
      <div className="app">
        <h1>Todo</h1>
        <Tasks tasks={this.props.tasks} />
        <New new={this.newTask} />
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
  }
}

export default connect(mapStateToProps)(App)
