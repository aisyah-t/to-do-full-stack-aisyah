import React from 'react'
import { connect } from 'react-redux'

import { addToDo } from '../apis/api'

import { hideForm } from '../actions/index'


class AddForm extends React.Component {
    state = {
        to_do: '',
        priority: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        addToDo(this.state)
        this.props.dispatch(hideForm())
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>To Do:
                        <input type="text" name="to_do" onChange={this.handleChange}></input>
                    </label>
                    <label>Priority:
                        <input type="text" name="priority" onChange={this.handleChange}></input>
                    </label>
                    <input type="submit"></input>
                </form>
            </>
        )
    }
}


function mapStateToProps(globalState) {
    return {
        toDos: globalState.toDos,
        showAdd: globalState.showAdd,
    }
}

export default connect(mapStateToProps)(AddForm)
