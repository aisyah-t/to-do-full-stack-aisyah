import React from 'react'
import { connect } from 'react-redux'

import ToDo from './ToDo'
import AddForm from './AddForm'

import { getToDos } from '../apis/api'

import { initToDos } from '../actions/index'
import { showForm } from '../actions/index'

class App extends React.Component { 
  // state = {
  //   showAdd: false
  // }
 

  componentDidMount() {
    getToDos().then(data => this.props.dispatch(initToDos(data)))
  }

  componentDidUpdate() {
    getToDos().then(data => this.props.dispatch(initToDos(data)))
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
            return <ToDo id={element.id} to_do={element.to_do} priority={element.priority} completed={element.completed} />
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
