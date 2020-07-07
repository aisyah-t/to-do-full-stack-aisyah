import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks, deleteMyTask, changeView, currentTask, updateMyTask } from '../actions/index'
import EditForm from './EditForm'
import Form from './Form'

export class ToDoList extends React.Component {
  state = {
    status: "0"
  }

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  handleClick = (task) => {
    this.props.dispatch(deleteMyTask(task))
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

  priorityColour = (priority) => {
    switch (priority) {
      case 'high':
        return { borderRightColor: 'red' }
      case 'medium':
        return { borderRightColor: 'orange' }
      case 'low':
        return { borderRightColor: 'green' }
      default:
        return { borderRightColor: 'white' }
    }
  }

  handleChange = (event) => {
    this.setState({status: event.target.value})
  }




  render() {
    return (
      <ul className="todo-list">

        <div className="filter-div">
            <input type="radio" name="completed" value="0" onChange={this.handleChange} id="doing" checked={this.state.status == 0}/>
            <label className="radio filter-button" htmlFor="doing">In progress</label>
            <input type="radio" name="completed" value="1" onChange={this.handleChange} id="completed" />
            <label className="radio filter-button" htmlFor="completed">Completed</label>
          </div>
       
        {
          this.props.tasks.map(task => {
            if (task.completed == this.state.status) {
              return <div key={task.id}>

                <li style={this.priorityColour(task.priority)}>
                  {task.task}
                  <div className="right-aligned">
                    <button onClick={() => this.handleEditClick(task)}>Edit</button>
                    <button onClick={() => this.handleCompleteClick(task)}>✓</button>

                  </div>

                </li>
                {this.props.currentTask != undefined && this.props.currentTask.id == task.id && <EditForm />}

              </div>
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
