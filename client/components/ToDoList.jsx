import React from 'react'
import Task from './Task'

class ToDoList extends React.Component {
    
  
    render() {
        return (
            <>
                <div id="ToDoListShape">
                    <div id= "toDoItems">
                        <h2>To Do:</h2>
                        <Task/>

                    </div>



                </div>
            </>
        )
    }
}

  export default ToDoList