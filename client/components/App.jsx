import React from "react"
import { connect } from "react-redux"

import { fetchTasks } from "../actions/index"

import Tasks from "./Tasks"
import New from "./New"

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  render() {
    return (
      <div className="app">
        <h1>Todo</h1>
        <Tasks tasks={this.props.tasks} />
        <New />
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
