import React from 'react'
import { connect } from 'react-redux'

import { newToDo } from '../actions/index'
import { hideForm } from '../actions/index'


class AddForm extends React.Component {
    state = {
        to_do: '',
        priority: '',
        completed: false,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(newToDo(this.state))
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
