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

  showTextField=()=>{

  this.setState({
    DescriptionClicked:true,
  })
  }




  handleDelete =(event) =>{
 
    event.preventDefault()
    const id = this.props.tasks.id

 removeTask(id)
 .then(() =>{
  this.props.dispatch(deleteTask(id))
 })
 .then(()=>{

  this.props.dispatch(updateTask(this.props.tasks))
 })

}


render(){
    
return(
<ul> 
<li><button className="buttonDeets" onClick={this.handleClick} name={this.props.tasks.id}>{this.props.tasks.Tasks}</button></li>
{!this.state.showDeleteButton  && <button onClick={this.handleDelete}>Delete</button> }

{this.state.showDetails ? 
<ol>
 <li><button className="buttonDeets" onClick={this.showTextField}>Description:{this.props.tasks.Description}</button></li>
        {this.state.DescriptionClicked ? <FormDescription task={this.props.tasks}/>: <></> }

<li>Priority:{this.props.tasks.Priority}</li>

<li>Completed?:{this.props.tasks.Completed}</li>
</ol>
 : <></>}
</ul> 
)
}
}

export default  connect()(ListOfTasks)


