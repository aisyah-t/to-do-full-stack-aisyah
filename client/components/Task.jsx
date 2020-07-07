import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { deleteTask } from '../apis/api'

function Task (props) {
    // console.log(props.task)
    return (
        <tr>
            <td>{props.task}</td>
            <td>{props.priority}</td>
            <td>{props.completed}<input type="checkbox"></input></td>
            <td><button><FontAwesomeIcon icon={faEdit} /></button></td>
            <td><button onClick={() => deleteTask(props.id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
            {/* Need to get tasks to refresh after delete */}
        </tr>
    )
}


export default Task