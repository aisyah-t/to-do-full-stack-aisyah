import React from 'react'
import { connect } from 'react-redux'
import { fetchToDoList } from '../actions/index'



import Task from './Task'


class ToDoList extends React.Component {

    state = {
        toDoList: []
    }

    componentDidMount() {
        this.props.dispatch(fetchToDoList())
      }
  
    render() {
        return (
            <>
                <div id="ToDoListShape">
                    <div id="toDoItems">
                        <h2>To Do:</h2>
                        <ul>
                            {this.props.tasks.map(task => {
                                return (
                                    <>
                                       <li><Task data={task}/></li> 
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {
      tasks: globalState.tasks
    }
  }

  
  export default connect(mapStateToProps)(ToDoList)