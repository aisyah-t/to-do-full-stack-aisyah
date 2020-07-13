import React from "react"
import FormDescription from './FormDescription'
import {removeTask} from '../apis/api'
import {editTaskPriority} from "../apis/priority"
import {deleteTask, updateTask} from '../actions/index'
import {connect} from 'react-redux'


class ListOfTasks extends React.Component {
 
    state= {
        showDetails:false,
        isDescriptionClicked:false,
        showDeleteButton:false,
        priority:'',
        isClick: false,
        isCompleteClick:false,
        isTaskClick:false,
    }

 handleClick=(e)=>{
     e.preventDefault()
     
     this.setState({ showDetails:true, showDeleteButton:true, isTaskClick:true})    
  

  }

  showTextField=(e)=>{ 
    e.preventDefault()
    this.setState({isDescriptionClicked:true}) 
  }
  
hideTextField=(e)=>{ 
  e.preventDefault(),
   this.setState({isDescriptionClicked:false})
}
  
 handleDelete =(event) =>{ 
    
      event.preventDefault()
      const id = this.props.tasks.id
    
      removeTask(id)
      .then(() =>{this.props.dispatch(deleteTask(id))})
      .then(()=>{this.props.dispatch(updateTask(this.props.tasks))})
  }
  
  handlePriorityButton=(e)=>{
   e.preventDefault()
   this.setState({isClick:false})
  }
  
  handleCompleteButton=(e)=>{
    e.preventDefault()
    this.setState({isCompleteClick:false})
   }

  handleTaskButton=(e)=>{
    e.preventDefault()
    console.log("works");
    this.setState({isTaskClick:false, showDeleteButton:false, showDetails:false})
  }

  handlePriority=(event)=>{
    
       const name =  event.target.name
       const id = this.props.tasks.id 
      
       const newTask = {
        id: this.props.tasks.id,
        Tasks: this.props.tasks.Tasks ,
        Description: this.props.tasks.Description,
        Priority: this.state.priority,
        Completed: this.props.tasks.Completed,
    } 


   if(name == 'high'){this.setState({priority:"High", isClick:true })
     editTaskPriority(id,this.state.priority) 
    .then(()=>{this.props.dispatch(updateTask(newTask) )})   
   }
   if(name == 'low'){this.setState({priority:"Low", isClick:true}) 
      editTaskPriority(id,this.state.priority) 
      .then(()=>{this.props.dispatch(updateTask(newTask) )}) 
     }    
  }
  

  handleComplete=(event)=>{
    const name =  event.target.name

if(name == 'Yes'){this.setState({ isCompleteClick:true })}

if(name == 'Not Yet'){this.setState({ isCompleteClick:true})}

  }


  renderTasksLists=(task, taskId, handleclick)=>{
      return<li><button className="buttonDeets" onClick={handleclick} name={taskId}>{task}</button></li>
  }

  renderTasksDescription=(description, showtextfield)=>{  
     return<li><button id="buttonDeets description-tittle" onClick={showtextfield}>Description:{description}</button></li>
  }

  renderPriorityStatus=(priority)=>{
    const isClick= this.state.isClick
  
    return(
    <>
    <li><button onClick={this.handlePriorityButton}>Priority:{priority}</button></li>
     {isClick ? <></> :
       <>
       <label>High<input name="high" value="submit" type="radio" onClick={this.handlePriority}/></label>
       <label>Low<input name="low" value="submit" type="radio" onClick={this.handlePriority}/></label>
       </>
     }
       </>
  )
}

  renderCompletedStatus=(completed)=>{
     const isCompleteClick = this.state.isCompleteClick

      return (
      <>
      <li><button onClick={this.handleCompleteButton}>Completed:{completed}</button></li>
      {isCompleteClick ? <></> :
        <>
      <label>Yes<input name ="Yes"    type="radio" onClick={this.handleComplete}/></label>
      <label>No<input  name="Not Yet" type="radio" onClick={this.handleComplete}/></label>
        </>
        }
      </>
      )
}

render(){
  
  const task= this.props.tasks.Tasks
  const taskId= this.props.tasks.id
  const description=this.props.tasks.Description
  const priority= this.props.tasks.Priority
  const completed= this.props.tasks.Completed

return(
<ul> 
  {this.state.isTaskClick ? this.renderTasksLists(task, taskId, this.handleTaskButton) : this.renderTasksLists(task, taskId, this.handleClick)}
  {!this.state.showDeleteButton  && <button id="delete-button" onClick={this.handleDelete}>Delete</button> }

    {
    this.state.showDetails ? 
    <ul>
        {this.state.isDescriptionClicked ? this.renderTasksDescription(description, this.hideTextField) : this.renderTasksDescription(description, this.showTextField)} 
        {this.state.isDescriptionClicked && <FormDescription task={this.props.tasks}/>}
        {this.renderPriorityStatus(priority)}
        {this.renderCompletedStatus(completed)}
    </ul>
     : <></>
     }

</ul> 
)
}
}

export default  connect()(ListOfTasks)


