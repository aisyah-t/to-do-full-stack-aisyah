import React from 'react'

import { deleteToDo } from '../apis/api'

import Edit from './Edit'

class ToDo extends React.Component {
    state = {
        showEdit: false
    }

    handleEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }

    handleDelete = () => {
        deleteToDo({
            id: this.props.id
        })
    }

    render() {
        return (
            <>
                <li>
                    <h3>{this.props.to_do}</h3>
                    <p>Priority: {this.props.priority}</p>
                    <p>Completed: {this.props.completed === 0 ? <span>☐</span> : <span>☒</span>}</p>
                    {this.state.showEdit ? <Edit/> :<button onClick={this.handleEdit}>Edit</button> }
                    <button onClick={this.handleDelete}>Delete</button>
                </li>
            </>
        )
    }
}



export default ToDo