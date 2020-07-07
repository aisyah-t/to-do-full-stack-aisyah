import React from 'react'

import ToDoList from './ToDoList'
import AddTask from './AddTask'

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="centerDivWithFlexbox">
      <ToDoList/>
      <AddTask/>
      </div>
      
    )
  }
}


export default App
