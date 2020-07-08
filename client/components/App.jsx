import React from "react";
import Tasks from "./Tasks";
import { connect } from 'react-redux'
// import { getTodosApi } from "../apis/api";
import AddTask from "./AddTask";
import { fetchTodos, saveTodo } from "../actions";

class App extends React.Component {
  // state = {
  //   task: [],
  // };

  // componentDidMount() {
  //   getTodosApi().then((task) => {
  //     this.setState({
  //       task: task,
  //     });
  //   });
  // }

  // componentDidUpdate() {
  //   getTodosApi().then((task) => {
  //     this.setState({
  //       task: task,
  //     });
  //   });
  // }

  // refreshTodos = () => {
  //   getTodosApi()
  //     .then(task => {
  //       this.setState({
  //         task: task
  //       })
  //     })
  // }

  componentDidMount() {
    this.props.dispatch(fetchTodos())
  }

  // componentDidUpdate() {
  //   this.props.dispatch(saveTodo())
  // }

  render() {
    return (
      <div id="app" className="app">
        <h1>Todos</h1>
        <ul className="todo-list">
          <Tasks tasks={this.props.tasks} />
        </ul>
        <AddTask tasks={this.props.tasks}/>
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(App)
