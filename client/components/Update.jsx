import React from 'react'
import { connect } from 'react-redux'
import {updateFetchTask} from '../actions/actions'

class Update extends React.Component {
    state = {
        id: "",
        task: "",
        priority: "High",
        complete: "Yes",
    }

    componentDidUpdate(prevProps){
       if (this.props.match.params.id != prevProps.match.params.id) {this.setState({
            id: this.props.match.params.id
        })}
    }

    handleTaskChange = (task) => {
        //setState task
        // console.log("task change")
        // console.log(task)
        this.setState({

            task: task
        })
    }

    handlePriorityChange = (priority) => {
        //setState priority
        // console.log("priority change")
        // console.log(priority)
        // console.log(this)
        this.setState({
            priority: priority
        })
    }

    handleCompleteChange = (complete) => {
        //setState complete
        // console.log("complete change")
        // console.log(complete)
        this.setState({
            complete: complete
        })
    }

    handleSubmit = (e) => {
        //dispatch
        // console.log("submitted")
        // return (dispatch)
        e.preventDefault()
        
        this.props.dispatch(updateFetchTask(this.state))
    }

    // return (dispatch) => {
    //    
    //     return update
    //       .then(

    //       })
    //       .catch(err => {
    //         dispatch(showError(err.message))
    //       })
    //   }
    // }

    render() {
        const id = this.props.match.params.id
        const task = this.props.task[id-1] ? this.props.task[id-1].task : ""

        // console.log("this is the state", this.state )
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>this is the update component</p>
                    <input type="text" placeholder={task} name="task" onChange={(e) => this.handleTaskChange(e.target.value)}></input>

                    <div>
                        <label>Priority </label>
                        <select onChange={(e) => this.handlePriorityChange(e.target.value)}>
                            <option value="High" name="High">High</option>
                            <option value="Med" name="Med">Med</option>
                            <option value="Low" name="Low">Low</option>
                        </select>
                    </div>

                    <div>
                        <label>Complete </label>
                        <select onChange={(e) => this.handleCompleteChange(e.target.value)}>
                            <option value="Yes" name="Yes">Yes</option>
                            <option value="No" name="No">No</option>
                        </select>
                    </div>
                    <button onClick={this.handleSubmit}>submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        task: globalState.TaskReducer,
    }
}

export default connect(mapStateToProps)(Update)