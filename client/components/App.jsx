import React from 'react'
import ToDoList from './ToDoList'
import CompletedList from './CompletedList'

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <>
      <ToDoList />
      <CompletedList />
      </>
    )
  }
}


export default App
