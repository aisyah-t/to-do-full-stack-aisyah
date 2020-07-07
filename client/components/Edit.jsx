import React from 'react'
import { connect } from 'react-redux'

import { changeToDo } from '../actions/index'

class Edit extends React.Component {
    state = {
        id: this.props.id,
        to_do: '',
        priority: '',
        completed: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() 
        this.state.completed = this.state.completed == "true" ? true : false
        this.props.dispatch(changeToDo(this.state))
        this.props.handleEdit()
    }

    render() {
        return (
            <>
                <form className="editForm" onSubmit={this.handleSubmit}>
                    <label>To Do:
                        <input type="text" name="to_do" onChange={this.handleChange}></input>
                    </label><br/>
                    <label>Priority:
                        <input type="text" name="priority" onChange={this.handleChange}></input>
                    </label><br/>
                    <span>Completed:</span><br/>
                    <label>Yes
                        <input type="radio" name="completed" value="true" onChange={this.handleChange}></input>
                    </label>
                    <label>No
                        <input type="radio" name="completed" value="false" onChange={this.handleChange}></input>
                    </label><br/>
                    <input type="submit"></input>
                </form>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        toDos: globalState.toDos,
    }
}

export default connect(mapStateToProps)(Edit)