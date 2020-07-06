import React from 'react'
import ToDoList from './ToDoList'
import Form from './Form'
import Task from './Task'

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (<>
      <h1>Todo</h1>
        <ToDoList/>
        <Form/>
        {/* <Task/> */}
      </>
    )
  }
}


export default App
