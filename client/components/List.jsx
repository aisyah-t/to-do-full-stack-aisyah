
import React from 'react'
import { connect } from 'react-redux'
import { getTasks } from '../apis'
import { setTasks } from '../actions'

class List extends React.Component {
  // class List extends React.Component {
  // render() {
  // const Tasks = props.tasks
componentDidMount(){
  getTasks()
  .then(tasks => {
    this.props.dispatch(setTasks(tasks))
  }) 
}
  render() {
    // console.log(props)
    return (
      <div>
        <p>this is the list component</p>
        <ul>
          {props.task.map((task) => <li key={id}>{task}</li>)}
        </ul>
      </div>
    )
  }
}

// function mapStateToProps(globalState) {
//   return {
//     task: globalState.task,
//   }
// }

export default connect()(List)