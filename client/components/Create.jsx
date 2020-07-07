import React from 'react'
import { connect } from 'react-redux'

class Create extends React.Component {
    render() {
        // const Tasks = props.tasks

        return (
            <div>
                <p>this is the create component</p>
                <input type="text" placeholder="Task" name="task"></input>

                <div>
                    <label>Priority </label>
                    <select name="Priority">
                        <option value="High" name="High">High</option>
                        <option value="Med" name="Med">Med</option>
                        <option value="Low" name="Low">Low</option>
                    </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        task: globalState.task,
    }
}

export default connect(mapStateToProps)(Create)