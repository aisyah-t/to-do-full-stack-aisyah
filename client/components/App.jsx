import React from 'react'
import Task from './Tasks'

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <Task/>
      </div>
    )
  }
}


export default App
