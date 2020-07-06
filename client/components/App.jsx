import React from 'react'
import Todo from './Todo'
import {getTask} from '../apis/api'

class App extends React.Component {

  state={
    
    tasks:[],
    
  }

  showList =() =>{

    getTask()
    .then(task =>{
      
      this.setState({

        tasks:task
      })

    })
  }






  render() {
    return (
       <>
  
      <Todo/>
     </> 
    )
  }
}


export default App
