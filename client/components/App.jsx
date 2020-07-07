import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import List from './List'
import Create from './Create'
import Update from './Update'


  class App extends React.Component {
    componentDidMount() {
    }

    render() {
      return ( 
        <React.Fragment>
          <h1>Todo</h1>
          <List/>
          <Update/>
          <Create/>
        </React.Fragment>
    )
  }
}


export default connect() (App)
