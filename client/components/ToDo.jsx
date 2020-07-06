import React from 'react'
import { completeToDo } from '../apis/api'

class ToDo extends React.Component {
    // tickBox = () => {
    //     completeToDo(this.props.id)
    // }

    render() {
        return (
            <>
                <li>
                    <h3>{this.props.to_do}</h3>
                    <p>Priority: {this.props.priority}</p>
                    <p>Completed: {this.props.completed === 0 ? <span>☐</span> : <span>☒</span>}</p>
                    {/* <button onClick={this.tickBox}>Complete</button>
                    <button onClick="">Edit</button>
                    <button onClick="">Remove</button> */}
                </li>
            </>
        )
    }
}



export default ToDo