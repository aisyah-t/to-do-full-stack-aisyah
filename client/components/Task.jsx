import React from 'react'

import {deleteTaskApiFunction} from '../api'

class Task extends React.Component {

  state = {
    showFrom: false
  }
   
  deleteTask = event => {
    console.log('in task component' , this.props.data.id)
    deleteTaskApiFunction(this.props.data.id)
  }

  updateTask = event => {
    this.setState({
      showForm: true
    })
    console.log('blblblblblblaaaa')

  }

  //if show form = true , render 
  // <form>

  // </form>
  
    render() {
      return (
        <div id = 'indivTasks'>
          <h3>{this.props.data.task}</h3>
          <button onClick = {this.deleteTask}> delete </button>
          <button onClick = {this.updateTask}> update </button>
        </div>
        
        
        
      )
    }
  }

  export default Task