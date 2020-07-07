import React from 'react'

class Edit extends React.Component {

  render(){
    return(
      <>
      <input type="submit" value="Edit" onClick={this.handleEdit}/>
      </>
    )
  }
}

export default Edit