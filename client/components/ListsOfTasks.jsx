import React from "react"
import FormDescription from './FormDescription'
import {removeTask} from '../apis/api'
import {deleteTask, updateTask} from '../actions/index'
import {connect} from 'react-redux'


class ListOfTasks extends React.Component {
 
    state= {
        showDetails:false,
        DescriptionClicked:false,
        showDeleteButton:false,
    }

 handleClick=(e)=>{
 e.preventDefault()
 this.setState({ showDetails:true, showDeleteButton:true})    
  }   
  showTextField=()=>{ this.setState({DescriptionClicked:true,})
  }

  handleDelete =(event) =>{ 
  event.preventDefault()
  const id = this.props.tasks.id
  removeTask(id)
  .then(() =>{this.props.dispatch(deleteTask(id))})
  .then(()=>{this.props.dispatch(updateTask(this.props.tasks))})
}


renderTasksLists=(task, taskId, handleclick)=>{
return<li><button className="buttonDeets" onClick={handleclick} name={taskId}>{task}</button></li>
}


renderTasksDescription=(description, showtextfield)=>{
  return<li><button id="buttonDeets description-tittle"  onClick={showtextfield}>Description:{description}</button></li>
}

renderPriorityButton=(priority)=>{
  
  return(
    <>
       <li>Priority:{priority}</li><label>High<input type="checkbox"/></label>
       <label>Low<input type="checkbox"/></label>
    </>
  )
}

renderCompletedButton=(completed)=>{
return <>
      <li>Completed?:{completed}</li>
      <label>Yes<input type="checkbox"/></label>
      <label>No<input type="checkbox"/></label>
      </>
}

render(){
  
  const task= this.props.tasks.Tasks
  const taskId= this.props.tasks.id
  const description=this.props.tasks.Description
  const priority= this.props.tasks.Priority
  const completed= this.props.tasks.Completed

return(
<ul> 
 {this.renderTasksLists(task, taskId, this.handleClick)}
  {!this.state.showDeleteButton  && <button id="delete-button" onClick={this.handleDelete}>Delete</button> }

    {
    this.state.showDetails ? 
    <ul>
        {this.renderTasksDescription(description, this.showTextField)}
        {this.state.DescriptionClicked && <FormDescription task={this.props.tasks}/>}
        {this.renderPriorityButton(priority)}
        {this.renderCompletedButton(completed)}
    </ul>
     : <></>
     }

</ul> 
)
}
}

export default  connect()(ListOfTasks)


