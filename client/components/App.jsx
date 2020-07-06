import React from 'react'
import ToDo from './ToDo'
import { getToDos } from '../apis/api'



class App extends React.Component {
  state = {
    toDos: []
  }

  componentDidMount() {
    getToDos()
      .then((toDos) => {
        this.setState({
          toDos: toDos
        })
      })
      .then(() => {
        console.log(this.state)
      })
  }

  render() {
    return (
      <>
        <h1>To Do List</h1>
        <ul>
          {this.state.toDos.map((element) => {
            return <ToDo id={element.id} to_do={element.to_do} priority={element.priority} completed={element.completed} />
          })}
        </ul>
      </>
    )
  }
}

export default App
