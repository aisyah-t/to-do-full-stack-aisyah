import React from 'react'
import { connect } from 'react-redux'

import ToDo from './ToDo'
import AddForm from './AddForm'

import { initToDos } from '../actions/index'
import { showForm } from '../actions/index'

class App extends React.Component { 

  componentDidMount() {
    this.props.dispatch(initToDos())
  }


  handleAdd = () => {
    this.props.dispatch(showForm())
  }
  
  render() {
    return (
      <>
        <h1>To Do List</h1>
        <ul className="todo-list">
          {this.props.toDos.map((element) => {
            return <ToDo key={element.id} id={element.id} to_do={element.to_do} priority={element.priority} completed={element.completed} />
          })}
        </ul>
        {this.props.showAdd ? <AddForm/>: <button onClick={this.handleAdd}>Add New</button>}
        
      </>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    toDos: globalState.toDos,
    showAdd: globalState.showAdd,
  }
}

export default connect(mapStateToProps)(App)
