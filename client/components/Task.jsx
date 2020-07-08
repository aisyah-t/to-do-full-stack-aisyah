import React from 'react'

import {deleteTaskApiFunction} from '../api'

class Task extends React.Component {
   
  deleteTask = event => {
    console.log('in task component' , this.props.data.id)
    deleteTaskApiFunction(this.props.data.id)
  }
  
    render() {
      return (
        <div id = 'indivTasks'>
          <h3>{this.props.data.task}</h3>
          <button onClick = {this.deleteTask}> delete </button>
        </div>
        
        
        
      )
    }
  }

  export default Task