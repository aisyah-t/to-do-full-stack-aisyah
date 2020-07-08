import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, changeView, currentTask, updateMyTask } from '../actions/index'
import EditForm from './EditForm'
import Task from './Task'

export class ToDoList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }


  handleEditClick = (task) => {
    this.props.dispatch(changeView('edit'))
    this.props.dispatch(currentTask(task))
    if (this.props.pageView == 'edit') {
      this.props.dispatch(changeView('list'))
      this.props.dispatch(currentTask('undefined'))
    }

  }


  handleCompleteClick = (task) => {
    task.completed = true
    console.log(task)
    this.props.dispatch(updateMyTask(task))
  }


  handleChange = (event) => {
    const completed= {
      completed: event.target.value
    }
    this.props.dispatch(changeView({completed: event.target.value}))
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
            if (task.completed == this.props.pageView.completed) {
              return (
              <div key={task.id}>
                <Task task={task}/>
              </div>
              )
            }
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
