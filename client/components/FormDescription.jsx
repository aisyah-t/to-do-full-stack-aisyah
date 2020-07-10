import React from 'react'
import {editTask} from '../apis/api'
import {updateTask } from '../actions/index'
import {connect} from 'react-redux'

class  FormDescription extends React.Component {

state ={
    description: "",

}
   
   
handleChange = (event) => {
       
        event.preventDefault();
        const value = event.target.value;
        this.setState({ [event.target.name]: value })
    
     }

handleSubmit = (event) => {   
    
    event.preventDefault();
    
    const newTask = {
        id: this.props.task.id,
        Tasks: this.props.task.Tasks ,
        Description: this.state.description,
        Priority: this.props.task.Priority,
        Completed: this.props.task.Completed,
    }
    
    const id = this.props.task.id 
    
    editTask(id,this.state.description) 
    .then(()=>{
          this.props.dispatch(updateTask(newTask))
        })
      }


render(){ 
 
    
 return(

  <form onSubmit={this.handleSubmit}>
         <input type="text" name="description" defaultValue={this.state.description} onChange={this.handleChange}/>
         <input type="button" /> 
  </form>
 
 ) 
 }  
}


export default  connect()(FormDescription)