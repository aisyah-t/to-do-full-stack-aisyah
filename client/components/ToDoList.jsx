import React from 'react'
import Task from './Task'
import {getToDoList} from '../api'

class ToDoList extends React.Component {

    state = {
        toDoList: []
    }
    
    componentDidMount() {

        getToDoList()
        .then(data => {
            console.log('data in To Do List Comp' , data)
          this.setState({
              toDoList: data
          })
        })
      }
  
    render() {
        console.log('top of return statment', this.state.toDoList)
        return (
            <>
                <div id="ToDoListShape">
                    <div id="toDoItems">
                        <h2>To Do:</h2>
                        <h2>{this.state.toDoList[0]}</h2>
                        {/* <ul>
                            {this.state.toDoList.map(task => {
                                return (
                                    <>
                                        <Widget data={widget} widgetToUpdate={this.widgetToUpdate} />
                                    </>
                                )
                            })}
                        </ul> */}

                    </div>



                </div>
            </>
        )
    }
}

  export default ToDoList