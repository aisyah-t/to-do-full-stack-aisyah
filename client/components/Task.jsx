import React from 'react'
import { connect } from 'react-redux'

import { deleteTaskApiFunction } from '../api'

class Task extends React.Component {

  state = {
    showForm: false
  }

  deleteTask = event => {
    console.log('in task component', this.props.data.id)
    deleteTaskApiFunction(this.props.data.id)
  }

  updateTask = event => {
    this.setState({
      showForm: !this.state.showForm
    })
    console.log('click!')

  }

  //if show form = true , render 
  // <form>

  // </form>

  render() {
    return (
      <div id='indivTasks'>
        <h3 id='taskText'>{this.props.data.task}</h3>
        <div className="Up-Del-Button">
        <button onClick={this.deleteTask}> delete </button>
        <button onClick={this.updateTask}> update </button>
        </div>
       

        {this.state.showForm ?
        <div className="updateForm">
          <form>
            <label>
              Update Task:
        <input type="text" name="UpdatedTask" />
            </label>
            <input type="submit" value="Submit" />
          </form> 
          </div> :
          ''
        }


      </div>



    )
  }
}

export default connect()(Task)