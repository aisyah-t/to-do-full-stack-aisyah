
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTasks } from '../apis'
import { setTasks, markComplete } from '../actions/actions'

class List extends React.Component {

  state = {
  }

  // class List extends React.Component {
  // render() {
  // const Tasks = props.tasks
  componentDidMount() {
    getTasks()
      .then(tasks => {
        // console.log(tasks)
        this.props.dispatch(setTasks(tasks))
      })
  }

  handleCompleteClick = (id) => {

    this.props.dispatch(markComplete(id))
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        {this.props.task.map(task => {
          return <div className="listRow" key={task.id}>
            <Link to={"/update/" + task.id} className="listRowTask">
              <div>
                {task.task}
              </div>
            </Link>

            <div className="listRowPriority">
              {task.priority}
            </div>
            <div className="listRowComplete" onClick={(e) => this.handleCompleteClick(task.id)}>
              {task.complete ? "✓" : "✗"}
            </div>
          </div>
        })}
        <Link to="/add" className="listRowAdd">
        
        <p className="AddTaskButton">+</p>
        
        </Link>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    task: globalState.TaskReducer,
  }
}

// function setTasks () {
//   return 1
// }


export default connect(mapStateToProps)(List)