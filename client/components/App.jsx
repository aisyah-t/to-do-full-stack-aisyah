import React from 'react'
import { connect } from 'react-redux'
import ToDos from './ToDos'
import { getTasks } from '../actions'

class App extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(getTasks())
  }

  render() {
    // console.log(this.props.tasks)
    return (
      <ToDos tasks={this.props.tasks} />
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}


export default connect(mapStateToProps)(App)