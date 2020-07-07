import React from "react";
import Tasks from "./Tasks";
import { getTodosApi } from "../apis/api";
import AddTask from "./AddTask";

class App extends React.Component {
  state = {
    task: [],
  };

  componentDidMount() {
    getTodosApi().then((task) => {
      this.setState({
        task: task,
      });
    });
  }

  componentDidUpdate() {
    getTodosApi().then((task) => {
      this.setState({
        task: task,
      });
    });
  }

  refreshTodos = () => {
    getTodosApi()
      .then(task => {
        this.setState({
          task: task
        })
      })
  }

  render() {
    return (
      <div id="app" className="app">
        <h1>Todos</h1>
        <ul className="todo-list">
          <Tasks tasks={this.state.task} />
        </ul>
        <AddTask refreshTodos={this.refreshTodos}/>
      </div>
    );
  }
}

export default App;
