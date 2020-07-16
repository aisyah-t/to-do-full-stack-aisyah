import React from 'react'
import { connect } from 'react-redux'

class DetailsForm extends React.Component {
  state = {
    details: '',
    priority: '',
    completed: ''
  }

  render() {
    return (
      <>
        {this.props.task.details}
      </>
    )
  }
}

export default DetailsForm