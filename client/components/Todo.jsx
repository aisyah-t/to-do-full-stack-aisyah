import React from 'react'
import {getTask} from '../apis/api'
import Form from './Form'
import ListOfTasks from './ListsOfTasks'


class Todo extends React.Component {

 state={
     tasks:[],
     
 }

 componentDidMount(){

this.showList()

 }

showList=()=>{

    console.log(this.state.tasks);
    
 getTask() 
 .then(task => 
    {this.setState({ tasks:task})

})
}

// handleClick=()=>{


// }
    

 render(){
 return(

    <>
      <h1>Todo</h1>
      {this.state.tasks.map(task => <ListOfTasks tasks ={task}/>)}
       <Form/>
    </>
)
 }

}


export default Todo 
