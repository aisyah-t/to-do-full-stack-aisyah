import React from 'react'
import ToDoList from './ToDoList'
import Form from './Form'
import Task from './Task'
import { connect } from 'react-redux'
import EditForm from './EditForm'

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (<>
      <h1>Todo</h1>
        {this.props.pageView == 'edit' && <EditForm/>}
        {this.props.pageView == 'list' && <ToDoList/>}
        {this.props.pageView == 'list' && <Form/>}

      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    pageView: globalState.pageView
  }
}


export default connect(mapStateToProps)(App)
