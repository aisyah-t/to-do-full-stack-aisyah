import React from 'react'
import { connect } from 'react-redux'

import { removeToDo } from '../actions/index'

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
        this.props.dispatch(removeToDo(this.props.id))
    }

    render() {
        return (
            <>
                <li>
                    <h3>{this.props.to_do}</h3>
                    <p>Priority: {this.props.priority}</p>
                    <p>Completed: {this.props.completed !== 1 ? <span>☐</span> : <span>☒</span>}</p>
                    {this.state.showEdit ? <Edit handleEdit={this.handleEdit} id={this.props.id}/> :<button onClick={this.handleEdit}>Edit</button> }
                    <button onClick={this.handleDelete}>Delete</button>
                </li>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        toDos: globalState.toDos,
    }
}

export default connect(mapStateToProps)(ToDo)