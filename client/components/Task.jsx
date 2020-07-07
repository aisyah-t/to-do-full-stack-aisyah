import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

function Task (props) {
    // console.log(props.task)
    return (
        <tr>
            <td>{props.task}</td>
            <td>{props.priority}</td>
            <td>{props.completed}<input type="checkbox"></input></td>
            <td><FontAwesomeIcon icon={faEdit} /></td>
            <td><FontAwesomeIcon icon={faTrashAlt} /></td>
        </tr>
    )
}



export default Task