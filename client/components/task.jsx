import React from "react"
import { gettasks, createtasks} from "../apis/api"
import Part from "./Part"
import {connect} from "react-redux"
import {addtodo} from "../actions/index"

class Tasks extends React.Component {
    state = {
        notes: [],
        forminput: {
         // id : 0

        }
    }


      handleSubmit = event => {
       
        event.preventDefault()
       
       
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
        this.setState({
          forminput: {
            ... this.state.forminput,[event.target.name]: event.target.value
           }
        })
      }
      
    render() {
        return (
            <>
                {/* <div className="stickynote" >this is the note</div> */}
                <div className="app">
                    <h1>Todos</h1>
                    <ul className="todo-list">
                        {
                            this.props.tasks.map(elem => { 
                              return <Part key={elem.id} id={elem.id} name={elem.name} info={elem.info} priority={elem.priority}/> 
                            })
                        }
                    </ul>
                       
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
                        <input type="text" name="info" placeholder="desc" onChange={this.handleChange}/>
                        <input type="checkbox" name="priority"  onChange={this.handleChange}/>
                        <input type="submit" value="Add"/>
                    </form>
                </div>
            </>
        )
    }
}
function mapStateToProps(globalstate){
  return {
    tasks: globalstate.addtodos,
   }
  }
  export default connect (mapStateToProps)(Tasks)