import React from 'react'
import ToDoList from './ToDoList'
import Form from './Form'
import { connect } from 'react-redux'

export function App (props) {

    return (<>
      <h1>Todo</h1>
        <ToDoList/>
        <Form/>
        {/* {props.pageView.completed != undefined && <Form/>} */}
        {/* {props.pageView == 'doing' && <Form/>} */}
        {/* {props.pageView == 'done' && <Form/>} */}
      </>
    )
}

function mapStateToProps(globalState) {
  return {
    pageView: globalState.pageView
  }
}


export default connect(mapStateToProps)(App)
