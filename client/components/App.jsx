import React from 'react'
import Task from "./task"
import {dostuff, addmore, gettodos, fetchtodos} from "../actions/index"
import { gettasks, createtasks} from "../apis/api"
import {connect} from "react-redux"

class App extends React.Component {
  
  componentDidMount(){
    
  
      this.props.dispatch(fetchtodos())
   
  }
  
  render() {
    
    return (
      <>
        this is the app
       <Task/>
      
         
      </>
      
    )
  }
}

function mapStateToProps(globalstate){
return {
  addtodos: globalstate.addtodos,
 

}
}

export default connect (mapStateToProps)(App)
