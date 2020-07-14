import React from 'react'
import { connect } from 'react-redux'

class Task extends React.Component {

render() {
    return(
        <>
        {this.props.tasks.map((task) => {
            return(
                <li>
                    <p>{task.task}</p>
                    <p>{task.task_details}</p>
                    <p>{task.priority}</p>
                    <p>{task.completed}</p>
                </li>
            )
        })}
        </>
    )
}

}

export default connect ()(Task)