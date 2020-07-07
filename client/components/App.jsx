import React from 'react'
import Todos from './Todos'
import AddTask from './AddTask'
import { getTask } from '../apis/api'

class App extends React.Component {
  
  state = {
    tasks: []
  }

  componentDidMount() {
    console.log('did mount')
    getTask()
      .then(data => {
        // console.log(data)
        // console.log(typeof data)
        this.setState({
          tasks: data
        })
      })
  }

  render() {
    return (
      <div id="app" className="app">
      <h1>Todos</h1>

      <ul className="todo-list">
            {this.state.tasks.map(task => {
              return (
                <>
                  <Todos data={task} />
                </>
              )
            })}
          </ul>
            <AddTask/>
      {/* <form>
        <input type="text" name="task"/>
        <input type="submit" value="Add"/>
      </form> */}
    </div>
    )
  }
}


export default App
