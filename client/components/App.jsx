import React from 'react'
import ToDoList from './ToDoList'
import Form from './Form'
import { connect } from 'react-redux'

export function App (props) {

    return (<>
      <h1>Todo</h1>
        <ToDoList/>
        {props.pageView == 'list' && <Form/>}
      </>
    )
}

function mapStateToProps(globalState) {
  return {
    pageView: globalState.pageView
  }
}


export default connect(mapStateToProps)(App)
