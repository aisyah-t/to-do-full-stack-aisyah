import React from 'react'
import { connect } from 'react-redux'

class Update extends React.Component {
    state = {
        task: "",
        priority: "High",
        complete: "Yes",
    }
    handleTaskChange = (task) => {
        //setState task
        console.log("task change")
        console.log(task)
        this.setState({
            task: task
        })
    }

    handlePriorityChange = (priority) => {
        //setState priority
        console.log("priority change")
        console.log(priority)
        console.log(this)
        this.setState({
            priority: priority
        })
    }

    handleCompleteChange = (complete) => {
        //setState complete
        console.log("complete change")
        console.log(complete)
        this.setState({
            complete: complete
        })
    }

    handleSubmit = () => {
        //dispatch
        let task = {
            id: this.props.match.params.id
        }
        console.log(task)
    }

    render() {
        // const Tasks = props.tasks


        return (
            <div>
                <form >
                    <p>this is the update component</p>
                    <input type="text" placeholder="Task" name="task" onChange={(e) => this.handleTaskChange(e.target.value)}></input>

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
        task: globalState.task,
    }
}

export default connect(mapStateToProps)(Update)