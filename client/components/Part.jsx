import React from "react"
import { deletetaskapi } from "../apis/api"
import {connect} from "react-redux"
import {deletetask} from "../actions/index"
//import { deleteTask } from "../../server/db/db"

class Part extends React.Component {
    state = {
        form: false,
        forminput: {
            name: this.props.name, 
            info: this.props.info, 
            priority: this.props.priority,
           }
    }

    handleSubmit = event => {
       
        event.preventDefault()
        console.log("form recived ", this.state.forminput)
       
        // this.setState({
        //   forminput: {
        //   ... this.state.forminput, priority: (todo.priority == "on") ? 1 : 0
        //   }
        // })
        this.props.dispatch(addtodo(this.state.forminput))
        createtasks(this.state.forminput)
        .then(elem => {
            
        })  

      }
      handleChange = event => {
          console.log(event.target.value)
        this.setState({
          forminput: {
            ... this.state.forminput,[event.target.name]: event.target.value
           }
        })
      }

    delete = () => {
        console.log("should delete ", this.props)
        this.props.dispatch(deletetask(this.props.name))
        deletetaskapi(this.props.name)
    }
    edit= () => {
        
        this.setState({
           
            form: !this.state.form,
        })
    }

    render() {
        return (
            <>
           
        <li>
           
            
             {
                this.state.form ?  <div className="extra2">
                <input name="name" type="text" placeholder="name" defaultValue={this.props.name} className="normal" onChange={this.handleChange}></input>
                 {(this.props.priority == 1) ? <input type="checkbox" name="priority" className="radio" checked onChange={this.handleChange}/> 
                  : <input type="checkbox" name="priority" className="radio" onChange={this.handleChange}/> }
                <input name="info" type="text" placeholder="info" defaultValue={this.props.info} className="normal" onChange={this.handleChange}></input>
                  <b onClick={this.edit}>[{this.state.form ? "-" : "+"}]</b>
                 <b onClick={this.delete}>[x]</b>
                 </div> 
                 :
                 <>
                 <b>{this.props.name}{(this.props.priority == 1) ? "!!!" : "" || (this.props.priority == "on") ? "!!!" : ""}</b>  
                  {this.props.info}
                   <b onClick={this.edit}>[{this.state.form ? "-" : "+"}]</b>
                  <b onClick={this.delete}>[x]</b>
                  </>
             }
           
        </li>

            </>
        )
    }
}


function mapStateToProps(globalstate){
    return {
      tasks: globalstate.addtodos,
     
    
    }
    }
    
    export default connect (mapStateToProps)(Part)