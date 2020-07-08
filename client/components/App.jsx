import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import List from './List'
import Create from './Create'
import Update from './Update'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { setTask } from '../actions/actions'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(setTask())
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Router>
          <h1>Todo</h1>
          {/* <List /> */}
          <Route path="/:id" component={Update} />
          <Create />
        </Router>
      </React.Fragment>
    )
  }
}


export default connect() (App)
