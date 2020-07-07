  
import React from 'react'
import {connect} from 'react-redux'

class List extends React.Component {
  render() {
  // const Tasks = props.tasks

    return (
      <div>
          <p>this is the list component</p>
        <ul>
          {/* {Tasks.map((task) => <li key={id}>{task}</li>)} */}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    task: globalState.task,
  }
}

export default connect(mapStateToProps)(List)