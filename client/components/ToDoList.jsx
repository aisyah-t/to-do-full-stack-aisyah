import React from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions/index'
import { updateItem } from '../actions/index'
import DetailsForm from './DetailsForm'

class ToDoList extends React.Component {
  state = {
    id: this.props.id,
    task: '',
    details: '',
    priority: '',
    completed: '',
    showForm: false
  }

  componentDidMount() {
    //this is where the initial request for the tasks gets sent from. this one is going to actions
    this.props.dispatch(fetchTodos())
  }

  handleChange = (task) => {
    this.setState({
      completed: true
    }, () => {
      task.completed = true
      this.props.dispatch(updateItem(task, task.id))
    })

  }

  showDetails = () => {
    console.log("sfkdsjklfjl")
    this.setState({
      showForm: true
    })
  }

  render() {
    return (
      <>
        <div id="app" className="app">
          <h1>Todos</h1>
          <ul className="todo-list">
            {this.props.tasks.filter(task => !task.completed).map(task => {
              return (
                <form>
                  <label key={task.id}>
                    {task.task}
                    <button type="button" onClick={this.showDetails}>Details</button>
                    {this.state.showForm && <><DetailsForm task={task} /></>}
                  </label>
                  <input onChange={() => this.handleChange(task)} type="checkbox" />
                </form>
              )
            })}

          </ul>

          <form>
            <input type="text" name="task" />
            <input type="submit" value="Add" />
          </form>
        </div>
      </>
    )
  }
}
//What is returned from the reducer is being brought in as props
function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(ToDoList)