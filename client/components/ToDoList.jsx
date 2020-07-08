import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, changeView, currentTask, updateMyTask } from '../actions/index'
import EditForm from './EditForm'
import Task from './Task'

export class ToDoList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  handleChange = (event) => {
    const completed = {
      completed: event.target.value
    }
    this.props.dispatch(changeView({ completed: event.target.value }))
  }




  render() {
    return (
      <ul className="todo-list">

        <div className="filter-div">
            <input type="radio" name="completed" value="0" onChange={this.handleChange} id="doing" />
            <label className="radio filter-button" htmlFor="doing">In progress</label>
            <input type="radio" name="completed" value="1" onChange={this.handleChange} id="completed" />
            <label className="radio filter-button" htmlFor="completed">Completed</label>
          </div>
       
        {
          this.props.tasks.map(task => {
              return (
              <div key={task.id}>
                <Task task={task}/>
              </div>
              )
          })
        }


      </ul>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks,
    pageView: globalState.pageView,
    currentTask: globalState.currentTask
  }
}

export default connect(mapStateToProps)(ToDoList)
