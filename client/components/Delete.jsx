import React from 'react'

class Delete extends React.Component {

  render(){
    return(
      <>
      <input type="submit" value="Delete" onClick={this.handleDel}/>
      </>
    )
  }
}

export default Delete