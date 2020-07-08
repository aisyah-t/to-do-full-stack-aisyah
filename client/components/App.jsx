import React from 'react'
import AddTodo from '../containers/AddTodo'

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
      <h1>Todo</h1>
      <AddTodo />
      </div>
    )
  }
}


export default App
